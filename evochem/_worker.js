// Cloudflare Pages advanced-mode worker (_worker.js) for the prerendered Evochem build.
// Mirrors the AWS setup (CloudFront Function `evochem-seo-routing` + S3 error document = index.html):
//   /route and /route/      -> 200 from route/index.html (canonical has no slash; Pages alone would 308 to /route/)
//   /index.html             -> 301 /
//   /product/x;solution=1   -> 301 /product/x  (old Angular matrix-param links)
//   missing                 -> 404 with the home page body
// www -> apex is a zone redirect rule. 404.html exists only so Pages reports missing files as 404 (no SPA fallback).
// CI keeps this file and 404.html (rsync excludes) when it rebuilds the folder from evochem-source.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const asset = (p) => env.ASSETS.fetch(new Request(new URL(p + url.search, url), request));
    const notFound = async () => {
      const home = await asset('/');
      return new Response(home.body, { status: 404, headers: home.headers });
    };

    const semi = path.indexOf(';');
    if (semi !== -1) return Response.redirect(url.origin + path.slice(0, semi) + url.search, 301);
    if (path === '/index.html') return Response.redirect(url.origin + '/' + url.search, 301);
    if (path === '/404.html') return notFound();

    const last = path.slice(path.lastIndexOf('/') + 1);
    if (path.endsWith('/') || !last.includes('.')) {   // prerendered route
      const r = await asset(path.endsWith('/') ? path : path + '/');
      return r.status === 200 ? r : notFound();
    }
    if (last.endsWith('.html')) {                         // e.g. the Google verification file; Pages stores it as /name
      const r = await asset(path.slice(0, -'.html'.length));
      return r.status === 200 ? r : notFound();
    }
    const r = await env.ASSETS.fetch(request);           // js, css, images, sitemap ...
    return r.status === 200 ? r : notFound();
  },
};
