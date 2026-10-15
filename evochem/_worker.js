// Cloudflare Pages advanced-mode worker (_worker.js) for the prerendered Evochem build.
// URL structure (handover section 2): every page URL ends with a slash, e.g. /products/<slug>/.
//   /route/                 -> 200 from route/index.html
//   /route                  -> 301 /route/ (when that page exists)
//   old URLs                -> one-hop 301 to the new page, from /redirects.json (built by tools/seo-routes.mjs)
//   /product/x;solution=1   -> matrix params stripped, then redirected in the same hop
//   /index.html, /x/index.html -> 301 / and /x/
//   missing                 -> 404 with the home page body
// Query strings (utm_*, gclid ...) are kept on every redirect.
// www -> apex is a zone redirect rule. 404.html exists only so Pages reports missing files as 404 (no SPA fallback).
// CI keeps this file and 404.html (rsync excludes) when it rebuilds the folder from evochem-source.
let redirectsPromise = null;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const asset = (p) => env.ASSETS.fetch(new Request(new URL(p + url.search, url), request));
    const ok = (r) => r.status === 200 || r.status === 304 || r.status >= 500; // 304 = cache/browser revalidation
    const redirect = (p) => Response.redirect(url.origin + p + url.search, 301);
    const notFound = async () => {
      const home = await env.ASSETS.fetch(new Request(new URL('/', url))); // unconditional: the 404 body must be the full page
      const h = new Headers(home.headers);
      h.set('Cache-Control', 'no-store'); // never let the edge cache a 404 (a transient miss once cached CSS as 404)
      return new Response(home.body, { status: 404, headers: h });
    };
    const redirects = () => (redirectsPromise ||= env.ASSETS.fetch(new Request(new URL('/redirects.json', url)))
      .then(r => (r.ok ? r.json() : {}))
      .catch(() => { redirectsPromise = null; return {}; }));

    let path = url.pathname;
    const semi = path.indexOf(';');
    const stripped = semi !== -1;
    if (stripped) path = path.slice(0, semi);

    if (path === '/index.html') return redirect('/');
    if (path === '/404.html' || path === '/redirects.json') return notFound();

    // Old URLs. Keys have no trailing slash; old links may have one, or be percent-encoded (Surface%26AirClean).
    let key = path.length > 1 ? path.replace(/\/+$/, '') : path;
    try { key = decodeURIComponent(key); } catch { /* keep raw */ }
    const target = (await redirects())[key];
    if (target) return redirect(target);

    const last = path.slice(path.lastIndexOf('/') + 1);
    if (last === 'index.html') return redirect(path.slice(0, -'index.html'.length));

    if (path.endsWith('/')) {                              // canonical page URL
      if (stripped) return redirect(path);
      const r = await asset(path);
      return ok(r) ? r : notFound();
    }
    if (!last.includes('.')) {                             // page URL without the slash
      const r = await asset(path + '/');
      return r.status === 200 || r.status === 304 ? redirect(path + '/') : (r.status >= 500 ? r : notFound());
    }
    if (last.endsWith('.html')) {                          // e.g. the Google verification file; Pages stores it as /name
      const r = await asset(path.slice(0, -'.html'.length));
      return ok(r) ? r : notFound();
    }
    const r = await env.ASSETS.fetch(request);            // js, css, images, sitemap ...
    return ok(r) ? r : notFound();
  },
};
