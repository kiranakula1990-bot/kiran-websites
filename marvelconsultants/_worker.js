// Cloudflare Pages advanced-mode worker (_worker.js): serve URLs exactly like the old S3 website + CloudFront.
// Copied into each static site folder (see _shared/README). Pages' own HTML handling differs from S3:
//   Pages: /page.html -> 308 /page, /page -> page.html, missing page -> 200 (no 404.html) or 404.html
//   S3:    /page.html -> 200,       /page -> 404,        /dir -> 302 /dir/, missing page -> 404 with index.html body
// The folder must contain a top-level 404.html so Pages reports missing files as 404 (not an SPA fallback),
// which is what the existence checks below rely on.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const last = path.slice(path.lastIndexOf('/') + 1);
    const asset = (p) => env.ASSETS.fetch(new Request(new URL(p + url.search, url), request));
    const notFound = async () => {
      const home = await asset('/');
      return new Response(home.body, { status: 404, headers: home.headers });
    };

    // 404.html exists only to switch Pages out of SPA mode; it was never a page on this site
    if (path === '/404.html') return notFound();

    if (path.endsWith('/')) {                       // directory index
      const r = await asset(path);
      return r.status === 200 ? r : notFound();
    }
    if (last === 'index.html') {                    // /dir/index.html
      const r = await asset(path.slice(0, -'index.html'.length));
      return r.status === 200 ? r : notFound();
    }
    if (last.endsWith('.html')) {                   // /page.html -> Pages stores it as /page
      const r = await asset(path.slice(0, -'.html'.length));
      return r.status === 200 ? r : notFound();
    }
    if (!last.includes('.')) {                      // /dir -> /dir/ if it is a folder, else 404 (as S3)
      const dir = await asset(path + '/');
      return dir.status === 200 ? Response.redirect(url.origin + path + '/' + url.search, 301) : notFound();
    }
    const r = await env.ASSETS.fetch(request);      // css, js, images, xml, txt ...
    return r.status === 200 ? r : notFound();
  },
};
