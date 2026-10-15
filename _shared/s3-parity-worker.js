// Cloudflare Pages advanced-mode worker (_worker.js): serve URLs exactly like the old S3 website + CloudFront.
// Copied into each static site folder (see _shared/README). Pages' own HTML handling differs from S3:
//   Pages: /page.html -> 308 /page, /page -> page.html, missing page -> 200 (no 404.html) or 404.html
//   S3:    /page.html -> 200,       /page -> 404,        /dir -> 302 /dir/, missing page -> 404 with index.html body
// The folder must contain a top-level 404.html so Pages reports missing files as 404 (not an SPA fallback),
// which is what the existence checks below rely on.
// POST /api/contact: the site's enquiry forms post here (same origin), never to AWS directly. The worker accepts
// the usual relay body ({recipientEmail, subject, templateURl, templateData}), checks it came from this site,
// forces this site's inbox and email template, and calls the glint-email-relay Lambda server-side with the
// x-relay-key header (Pages secret RELAY_KEY). The Lambda refuses these inboxes without the key.
const RELAY_URL = 'https://psdiw5luaqoyb3pcxljybzw6j40sqgve.lambda-url.ap-south-1.on.aws/';
const TEMPLATES = 'https://glintcloudshopuploads.s3.ap-south-1.amazonaws.com/templates/';
const RELAY_SITES = [
  { host: /(^|\.)efcs\.(co\.in|pages\.dev)$/, to: 'vinesh@efcs.co.in', template: TEMPLATES + 'EFCStemplate.html' },
  { host: /(^|\.)(ennwin\.in|ennwin\.pages\.dev|hygex\.in|hygex\.pages\.dev|mavrick\.in|mavrick\.pages\.dev)$/, to: 'info@ennwin.in', template: TEMPLATES + 'Ennvintemplate.html' },
  { host: /(^|\.)marvelconsultants\.(co\.in|pages\.dev)$/, to: 'info@marvelconsultants.co.in', template: TEMPLATES + 'Marveltemplate.html' },
];
const json = (status, body) => new Response(JSON.stringify(body), {
  status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
});

async function contact(request, env, url) {
  if (request.method !== 'POST') return json(405, { error: 'POST only' });
  const site = RELAY_SITES.find(s => s.host.test(url.hostname));
  if (!site) return json(404, { error: 'not found' });
  const origin = request.headers.get('origin');
  const sameSite = origin ? origin === url.origin : request.headers.get('sec-fetch-site') === 'same-origin';
  if (!sameSite) return json(403, { error: 'forbidden' });
  const raw = await request.text();
  if (raw.length > 20000) return json(413, { error: 'too large' });
  let body;
  try { body = JSON.parse(raw); } catch { return json(400, { error: 'invalid JSON' }); }
  const data = body && typeof body.templateData === 'object' && body.templateData ? body.templateData : {};
  if (String(data.website || '').trim()) return json(200, { ok: true }); // honeypot filled in: a bot, drop it quietly
  const clean = {};
  for (const [k, v] of Object.entries(data).slice(0, 20)) clean[String(k).slice(0, 40)] = String(v ?? '').slice(0, 5000);
  if (!Object.values(clean).some(v => v.trim())) return json(400, { error: 'empty form' });

  const headers = { 'content-type': 'application/json', origin: url.origin };
  if (env.RELAY_KEY) headers['x-relay-key'] = env.RELAY_KEY;
  const r = await fetch(RELAY_URL, {
    method: 'POST', headers,
    body: JSON.stringify({
      recipientEmail: site.to,
      subject: String(body.subject || 'Website enquiry').slice(0, 200),
      templateURl: site.template,
      templateData: clean,
    }),
  });
  return json(r.ok ? 200 : 502, r.ok ? { ok: true } : { error: 'send failed' });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const last = path.slice(path.lastIndexOf('/') + 1);
    const asset = (p) => env.ASSETS.fetch(new Request(new URL(p + url.search, url), request));
    const notFound = async () => {
      const home = await env.ASSETS.fetch(new Request(new URL('/', url))); // unconditional: the 404 body must be the full page
      const h = new Headers(home.headers);
      h.set('Cache-Control', 'no-store'); // never let the edge cache a 404 (a transient miss once cached CSS as 404)
      return new Response(home.body, { status: 404, headers: h });
    };

    if (path === '/api/contact' || path === '/api/contact/') return contact(request, env, url);

    if (path.endsWith('/')) {                       // directory index
      const r = await asset(path);
      return r.status === 200 || r.status === 304 || r.status >= 500 ? r : notFound(); // 304 = cache/browser revalidation
    }
    if (last === 'index.html') {                    // /dir/index.html
      const r = await asset(path.slice(0, -'index.html'.length));
      return r.status === 200 || r.status === 304 || r.status >= 500 ? r : notFound(); // 304 = cache/browser revalidation
    }
    if (last.endsWith('.html')) {                   // /page.html -> Pages stores it as /page
      const r = await asset(path.slice(0, -'.html'.length));
      return r.status === 200 || r.status === 304 || r.status >= 500 ? r : notFound(); // 304 = cache/browser revalidation
    }
    if (!last.includes('.')) {                      // /dir -> 302 /dir/ if it is a folder, else 404 (exactly as S3)
      const dir = await asset(path + '/');
      return dir.status >= 500 ? dir : dir.status === 200 || dir.status === 304 ? Response.redirect(url.origin + path + '/' + url.search, 302) : notFound();
    }
    const r = await env.ASSETS.fetch(request);      // css, js, images, xml, txt ...
    return r.status === 200 || r.status === 304 || r.status >= 500 ? r : notFound(); // 304 = cache/browser revalidation
  },
};
