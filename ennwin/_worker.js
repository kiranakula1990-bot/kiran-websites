// Cloudflare Pages advanced-mode worker: keep the S3/CloudFront URL scheme.
// Pages normally 308-redirects /page.html -> /page. This site's links (and Google's index) use
// /page.html, so serve those directly with 200, and send the extensionless form to the .html URL
// with a single 301 so there is only one URL per page.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path.endsWith('.html')) {
      // /index.html and /dir/index.html -> fetch the directory; /page.html -> fetch /page
      const target = path.endsWith('/index.html') ? path.slice(0, -'index.html'.length) : path.slice(0, -'.html'.length);
      const res = await env.ASSETS.fetch(new Request(new URL(target + url.search, url), request));
      if (res.status === 200) return res;
      return env.ASSETS.fetch(request);
    }

    const res = await env.ASSETS.fetch(request);
    // An extensionless path that Pages resolved to a file (not a directory) is /page -> page.html
    if (res.status === 200 && path !== '/' && !path.endsWith('/') && !/\.[a-z0-9]+$/i.test(path)) {
      const html = await env.ASSETS.fetch(new Request(new URL(path + '/', url), request));
      if (html.status !== 200) {
        return Response.redirect(new URL(path + '.html' + url.search, url).toString(), 301);
      }
    }
    return res;
  },
};
