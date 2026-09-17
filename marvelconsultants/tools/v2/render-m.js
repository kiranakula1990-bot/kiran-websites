// MOBILE-FIRST renderer. Same content model as render.js; different HTML composition and stylesheet (m.css).
// Output is served at the same canonical URL to phone user-agents by _worker.js (dynamic serving, Vary: User-Agent).
'use strict';
const R = require('./render');
const { SITE, NAV, OLD_GUIDES, OLD_PAGES, esc, strip, slug } = R;
const { HOME } = require('./home');

const img = (name, alt, cls) => `<img src="/assets/image/v2/${name}-m.jpg" alt="${esc(alt)}" width="800" height="533" loading="lazy"${cls ? ` class="${cls}"` : ''}>`;

function head(p) {
  // identical metadata + JSON-LD to desktop (canonical = desktop URL), different CSS
  let h = R.headOnly(p);
  h = h.replace('<link rel="stylesheet" href="/assets/css/v2.css">', '<link rel="stylesheet" href="/assets/css/m.css">');
  h = h.replace('family=IBM+Plex+Mono:wght@400;500&family=Source+Sans+3:wght@400;500;600&family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400', 'family=IBM+Plex+Mono:wght@400&family=Source+Sans+3:wght@400;600&family=Libre+Caslon+Text:wght@400');
  return h;
}

function header() {
  const group = (k) => `<details><summary>${NAV[k].label}</summary>${NAV[k].items.map(([l, h]) => `<a href="${h}">${esc(l)}</a>`).join('')}<a href="${NAV[k].href}"><strong>All ${NAV[k].label.toLowerCase()} services →</strong></a></details>`;
  return `<header class="m-header">
  <a href="/" aria-label="Marvel Consultants home"><img src="${SITE.logo}" alt="Marvel Consultants" width="130" height="42"></a>
  <div class="right"><a class="call" href="tel:${SITE.phone1.tel}" data-cta="m_head_call">Call</a><button class="nav-toggle" aria-expanded="false" aria-controls="m-menu">Menu</button></div>
</header>
<nav class="m-menu" id="m-menu" aria-label="Main menu">
  ${group('journeys')}${group('legal')}${group('property')}${group('realEstate')}${group('nri')}
  <a href="/services/">All services</a><a href="/who-we-serve/">Who we serve</a><a href="/about/">About</a><a href="/resources/">Guides</a><a href="/contact/">Contact</a>
  <div class="contact"><a class="btn btn-primary" href="/contact/#problem" data-cta="m_menu_problem">Tell us your property problem</a><a class="btn btn-wa" href="${SITE.wa}" target="_blank" rel="noopener" data-cta="m_menu_wa">WhatsApp ${SITE.phone1.display}</a></div>
</nav>
`;
}
function footer() {
  const list = (items) => `<ul>${items.map(([l, h]) => `<li><a href="${h}">${esc(l)}</a></li>`).join('')}</ul>`;
  return `<footer class="m-footer">
  <strong>Marvel Consultants</strong>
  <address>${esc(SITE.address.street)},<br>${SITE.address.locality}, ${SITE.address.region} ${SITE.address.postal}<br><a href="tel:${SITE.phone1.tel}">${SITE.phone1.name}: ${SITE.phone1.display}</a> · <a href="tel:${SITE.phone2.tel}">${SITE.phone2.name}: ${SITE.phone2.display}</a><br><a href="mailto:${SITE.email}">${SITE.email}</a></address>
  <details><summary>Legal services</summary>${list(NAV.legal.items)}</details>
  <details><summary>Developer services</summary>${list(NAV.realEstate.items)}</details>
  <details><summary>Property &amp; BBMP</summary>${list([...NAV.property.items, ...NAV.journeys.items])}</details>
  <details><summary>Guides &amp; pages</summary>${list([...OLD_GUIDES.map(g => [g[0], g[1]]), ...OLD_PAGES])}</details>
  <div class="legal"><p>Marvel Consultants is a private professional services firm and is not affiliated with BBMP, BDA, Sub-Registrar offices or any government authority. We provide property documentation, process coordination and liaisoning services. Where an engagement requires a legal opinion, reserved legal work, litigation or court representation, such work is handled by enrolled advocates / associated legal counsel as applicable to the engagement. Government fees and statutory charges are separate from our professional fees, and approvals and outcomes remain subject to the concerned authority. Office hours 9 am – 7 pm; visits by appointment. Page last reviewed ${SITE.updated}.</p><p>© 2026 Marvel Consultants · <a href="/about/">About</a> · <a href="/contact/">Contact</a> · <a href="/career.html">Careers</a> · <a href="/sitemap.xml">Sitemap</a> · <a href="/llms.txt">llms.txt</a></p></div>
</footer>
<div class="mobile-bar"><a class="call" href="tel:${SITE.phone1.tel}" data-cta="m_sticky_call">Call</a><a class="wa" href="${SITE.wa}" target="_blank" rel="noopener" data-cta="m_sticky_wa">WhatsApp</a><a class="form-link" href="/contact/#problem" data-cta="m_sticky_form">Tell us your problem</a></div>
<script src="/assets/js/v2.js" defer></script>
</body>
</html>
`;
}

// block renderer: reuse desktop block() but swap images to -m variants
function block(b) {
  return R.block(b).replace(/\/assets\/image\/v2\/([a-z0-9-]+)\.jpg" alt="([^"]*)" width="\d+" height="\d+"/g, '/assets/image/v2/$1-m.jpg" alt="$2" width="800" height="533"');
}
function actions(list) {
  if (!list || !list.length) return '';
  return `<div class="actions${list.length === 2 ? ' row2' : ''}">${list.map(a => `<a class="btn ${a.kind || 'btn-primary'}${a.arrow ? ' arrow' : ''}" href="${a.href}"${a.href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''} data-cta="m_${a.cta || slug(a.label)}">${a.label} </a>`).join('')}</div>`;
}
function crumbs(p) {
  const items = [['Home', '/'], ...(p.crumbs || [])];
  return `<nav class="crumbs" aria-label="Breadcrumb"><ol>${items.map(([n, h]) => `<li><a href="${h}">${esc(n)}</a></li>`).join('')}<li aria-current="page">${esc(p.crumbLabel || p.title)}</li></ol></nav>\n`;
}
function ctaCard(p) {
  return `<div class="inline-cta"><strong>${p.asideTitle || 'Talk to an expert'}</strong><p>${p.asideText || 'Tell us your situation. We will say what needs doing, what it costs and how long it takes — before you commit to anything.'}</p><a class="tel" href="tel:${SITE.phone1.tel}" data-cta="m_cta_call">${SITE.phone1.display}</a><a class="btn btn-primary" href="${p.asideHref || '/contact/'}" data-cta="m_cta_form">${p.asideCta || 'Get an assessment'}</a><a class="btn btn-wa" href="${SITE.wa}" target="_blank" rel="noopener" data-cta="m_cta_wa">WhatsApp us</a></div>\n`;
}
function ctaBand(o) {
  return `<section class="cta-band"><h2>${o.title || 'Have a question or a property issue? Talk to Marvel.'}</h2><p>${o.text || 'One call is usually enough to know what needs doing. Free initial assessment, plain-language answers, and a clear next step.'}</p>${actions(o.actions || [{ label: 'Talk to an expert', href: '/contact/', cta: 'band_talk' }, { label: 'WhatsApp', href: SITE.wa, kind: 'btn-wa', cta: 'band_whatsapp' }, { label: 'Tell us your property problem', href: '/contact/#problem', kind: 'btn-outline', cta: 'band_problem' }])}</section>\n`;
}

function home() {
  const H = HOME;
  return `<section class="hero">
  <p class="eyebrow">${H.eyebrow}</p>
  <h1>${H.h1}</h1>
  <p class="lede">${H.lede}</p>
  ${actions([H.actions[0], H.actions[1]])}
  <div class="form-card" aria-labelledby="fc-title">
    <div class="fc-head"><h2 id="fc-title">${H.selector.title}</h2><span class="ref">${H.selector.ref}</span></div>
    <p class="fc-q">${H.selector.q}</p>
    <ul class="choices">${H.selector.choices.map(c => `<li><a href="${c.href}" data-cta="m_${c.cta}"><span>${c.label}<small>${c.sub}</small></span></a></li>`).join('')}</ul>
    <div class="fc-foot">${H.selector.foot.map(f => `<span>${f}</span>`).join('')}</div>
  </div>
  <p class="serves" style="margin-top:.9rem">${H.serves}</p>
</section>
${block(H.photo)}
<section class="section"><div class="sec-head"><p class="eyebrow">${H.serve.eyebrow}</p><h2>${H.serve.h2}</h2><p>${H.serve.text}</p></div>${block(H.serve.ledger)}</section>
<section class="section alt"><div class="sec-head"><p class="eyebrow">${H.how.eyebrow}</p><h2>${H.how.h2}</h2></div>${block(H.how.steps)}</section>
<section class="section"><div class="sec-head"><p class="eyebrow">${H.why.eyebrow}</p><h2>${H.why.h2}</h2></div>${block(H.why.cards)}</section>
<section class="section"><div class="sec-head"><p class="eyebrow">${H.expertise.eyebrow}</p><h2>${H.expertise.h2}</h2></div>${H.expertise.paras.map(t => `<p>${t}</p>`).join('')}<div class="faq"><details><summary>${H.expertise.values.title}</summary><div class="a"><p>${H.expertise.values.text}</p></div></details><details><summary>${H.expertise.brief.title}</summary><div class="a"><ul>${H.expertise.brief.items.map(([k, v]) => `<li><strong>${k}:</strong> ${v}</li>`).join('')}</ul></div></details></div></section>
<section class="section alt"><div class="sec-head"><p class="eyebrow">${H.guides.eyebrow}</p><h2>${H.guides.h2}</h2><p>${H.guides.text}</p></div>${block(H.guides.list)}<p style="margin-top:1rem"><a class="btn btn-outline arrow" href="${H.guides.more.href}">${H.guides.more.label} </a></p></section>
<section class="section"><div class="sec-head"><p class="eyebrow">${H.faq.eyebrow}</p><h2>${H.faq.h2}</h2></div>${block(H.faq.block)}</section>
`;
}

function sectionWrap(b) {
  if (b.t === 'section') return `<section class="section${b.alt ? ' alt' : ''}"${b.id ? ` id="${b.id}"` : ''}>${b.eyebrow || b.h2 ? `<div class="sec-head">${b.eyebrow ? `<p class="eyebrow">${b.eyebrow}</p>` : ''}${b.h2 ? `<h2 id="${b.id ? b.id + '-h' : slug(b.h2)}">${b.h2}</h2>` : ''}${b.text ? `<p>${b.text}</p>` : ''}</div>` : ''}${(b.blocks || []).map(block).join('')}</section>\n`;
  return `<section class="section">${block(b)}</section>\n`;
}

function renderMobile(p) {
  let out = head(p) + header();
  if (p.layout === 'home') {
    out += home();
  } else {
    out += crumbs(p);
    out += `<section class="page-head">${p.eyebrow ? `<p class="eyebrow">${p.eyebrow}</p>` : ''}<h1>${p.title}</h1>${p.lede ? `<p class="lede">${p.lede}</p>` : ''}${actions(p.actions)}${p.photo ? `<div class="head-img">${img(p.photo, p.photoAlt || strip(p.title))}</div>` : ''}</section>\n`;
    if (p.layout === 'hub') {
      out += (p.blocks || []).map(sectionWrap).join('');
    } else {
      const h2s = (p.blocks || []).filter(b => b.t === 'h2' || b.t === 'faq').map(b => [b.t === 'faq' ? (b.title || 'FAQs') : b.text, b.t === 'faq' ? 'faq' : (b.id || slug(b.text))]);
      const blocks = (p.blocks || []);
      // insert the CTA card after the intro (before the first h2) so it sits in the thumb zone early
      const firstH2 = blocks.findIndex(b => b.t === 'h2');
      const before = firstH2 > 0 ? blocks.slice(0, firstH2) : blocks.slice(0, 1);
      const after = firstH2 > 0 ? blocks.slice(firstH2) : blocks.slice(1);
      out += `<main class="prose">${p.updated ? `<p class="meta-line">Last reviewed ${p.updated} · Bengaluru</p>` : ''}${before.map(block).join('')}${ctaCard(p)}${h2s.length > 2 ? `<nav class="chips" aria-label="On this page">${h2s.map(([t, id]) => `<a href="#${id}">${strip(t).length > 34 ? strip(t).slice(0, 32) + '…' : strip(t)}</a>`).join('')}</nav>` : ''}${after.map(block).join('')}${p.related && p.related.length ? `<h2>Related</h2><ul>${p.related.map(([l, h]) => `<li><a href="${h}">${esc(l)}</a></li>`).join('')}</ul>` : ''}</main>\n`;
    }
  }
  if (p.ctaBand !== false) out += ctaBand(p.ctaBand || {});
  out += footer();
  return out;
}

function shell() { const f = footer(); return { header: header(), footer: f.slice(0, f.lastIndexOf('</body>')) }; }
module.exports = { renderMobile, shell };
