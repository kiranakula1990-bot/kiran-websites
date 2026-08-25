// Cloudflare Pages advanced-mode worker (_worker.js) — dynamic serving for Marvel Consultants v2.
// Phones requesting a v2 page receive the mobile-first HTML from /m/<path>; everyone else gets the desktop HTML.
// Same URL, same content, "Vary: User-Agent" — Google's supported "dynamic serving" pattern.
const MOBILE_PATHS = new Set(["/index-new.html","/business/","/real-estate/","/property/","/services/","/property/buy/","/property/sell/","/property/own/","/property/build/","/property/resolve/","/property/nri/","/property/khata-transfer/","/property/document-verification/","/business/gst-registration/","/business/gst-returns-compliance/","/business/gst-notices/","/business/gst-appeals-litigation/","/business/registrations/","/real-estate/bbmp-plan-approval/","/real-estate/project-compliance-liaison/","/real-estate/property-documentation/","/who-we-serve/","/about/","/resources/","/glossary/","/how-we-work/","/contact/","/contact/thank-you/"]);
const MOBILE_UA = /(iPhone|iPod|Android(?!.*Tablet).*Mobile|Windows Phone|Opera Mini|IEMobile|BlackBerry|BB10|Mobile Safari)/i;
const TABLET_UA = /(iPad|Android(?!.*Mobile)|Tablet|Silk)/i;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let path = url.pathname;

    // Never expose /m/ URLs directly: send humans and crawlers to the canonical URL.
    if (path === '/m' || path.startsWith('/m/')) {
      const canonical = path.replace(/^\/m\/?/, '/') || '/';
      return Response.redirect(url.origin + (canonical === '/index-new' || canonical === '/index-new.html' ? '/index-new.html' : canonical) + url.search, 301);
    }

    const ua = request.headers.get('user-agent') || '';
    const isPhone = MOBILE_UA.test(ua) && !TABLET_UA.test(ua);
    const key = path.endsWith('/index.html') ? path.slice(0, -'index.html'.length) : path;

    if (isPhone && MOBILE_PATHS.has(key)) {
      const mPath = key === '/index-new.html' ? '/m/index-new' : '/m' + key;
      const mReq = new Request(url.origin + mPath, { headers: request.headers, method: 'GET' });
      const mRes = await env.ASSETS.fetch(mReq);
      if (mRes.status === 200) {
        const h = new Headers(mRes.headers);
        h.set('Vary', 'User-Agent');
        h.set('X-Served-Variant', 'mobile');
        return new Response(mRes.body, { status: 200, headers: h });
      }
    }

    const res = await env.ASSETS.fetch(request);
    if (MOBILE_PATHS.has(key)) {
      const h = new Headers(res.headers);
      h.set('Vary', 'User-Agent');
      h.set('X-Served-Variant', 'desktop');
      return new Response(res.body, { status: res.status, headers: h });
    }
    return res;
  },
};
