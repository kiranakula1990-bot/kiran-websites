// Renderer for Marvel Consultants v2 pages: HTML + Markdown mirror + JSON-LD.
'use strict';
const SITE = {
  name: 'Marvel Consultants',
  url: 'https://www.marvelconsultants.co.in',
  phone1: { name: 'Sanjay', tel: '+919187598642', display: '+91 91875 98642' },
  phone2: { name: 'Kiran', tel: '+919663538037', display: '+91 96635 38037' },
  wa: 'https://wa.me/919187598642',
  email: 'info@marvelconsultants.co.in',
  address: { street: '17/3, Community Hall Road, Ashokapuram, Yeshwanthpur Industrial Suburb', locality: 'Bengaluru', region: 'Karnataka', postal: '560022' },
  logo: '/assets/image/logo.png',
  gtm: 'GTM-MHB246XX', ga4: 'G-JR7ML0RDMF',
  updated: '2026-09-17',
};
const esc = s => String(s).replace(/&(?![a-z#0-9]+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = s => String(s).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const slug = s => strip(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// ---------- navigation model (shared by header, footer, llms.txt) ----------
const NAV = {
  legal: { label: 'Legal services', href: '/legal-services/', items: [
    ['Property legal verification & title due diligence', '/legal-services/#verification'],
    ['Agreements & contracts', '/legal-services/#agreements'],
    ['Sale / gift / release / partition deeds', '/legal-services/#deeds'],
    ['Property registration support', '/legal-services/#registration'],
    ['Power of attorney (incl. NRI)', '/legal-services/#poa'],
    ['Legal notices & dispute support', '/legal-services/#disputes'],
  ]},
  property: { label: 'Property & BBMP', href: '/property/', items: [
    ['BBMP e-Khata', '/bbmp-e-khata-services.html'],
    ['Khata transfer', '/property/khata-transfer/'],
    ['B Khata to A Khata', '/bbmp/b-khata-to-a-khata-conversion/'],
    ['Property tax', '/bbmp-property-tax-assessment-payment-bengaluru.html'],
    ['Property document verification', '/property/document-verification/'],
    ['Business & government registrations', '/business/registrations/'],
  ]},
  realEstate: { label: 'Developer services', href: '/real-estate/', items: [
    ['BBMP & BDA plan approval', '/real-estate/bbmp-plan-approval/'],
    ['Project compliance & government liaisoning', '/real-estate/project-compliance-liaison/'],
    ['Property documentation for projects', '/real-estate/property-documentation/'],
    ['Khata & e-Khata for projects', '/bbmp-e-khata-services.html'],
    ['Property tax assessment', '/bbmp-property-tax-assessment-payment-bengaluru.html'],
  ]},
  journeys: { label: 'By situation', href: '/property/', items: [
    ['Buying a property', '/property/buy/'],
    ['Selling a property', '/property/sell/'],
    ['Managing a property', '/property/own/'],
    ['Building / developing', '/property/build/'],
    ['Fixing a property problem', '/property/resolve/'],
    ['NRI: handling it remotely', '/property/nri/'],
  ]},
  nri: { label: 'NRI services', href: '/property/nri/', items: [
    ['NRI property services overview', '/property/nri/'],
    ['Remote due diligence', '/property/document-verification/'],
    ['Power of attorney support', '/legal-services/#poa'],
    ['Khata & e-Khata', '/bbmp-e-khata-services.html'],
    ['Resolve a property problem', '/property/resolve/'],
  ]},
}
const OLD_GUIDES = [
  ['BBMP B-Khata to A-Khata conversion: 2026 guide', '/blog/bbmp-b-khata-to-a-khata-conversion-bangalore-2026.html', 'Khata'],
  ['How to convert B Khata to A Khata: fees, documents, process', '/blog/b-khata-to-a-khata-conversion-bangalore-fees-documents-process.html', 'Khata'],
  ['How to apply for BBMP E Khata online', '/blog/e-khata-online-in-bangalore.html', 'E-Khata'],
  ['BBMP E Khata: complete guide to E Aasthi, A/B Khata & conversion', '/blog/e-aasthi-a-khata-b-khata-conversion.html', 'E-Khata'],
  ['E-Khata online in Bangalore & Karnataka: complete guide', '/blog/e-khata-online-bangalore-karnataka-complete-guide.html', 'E-Khata'],
  ['Panchayat Khata vs E-Khata: which one do you need?', '/blog/panchayat-khata-vs-e-khata.html', 'Khata'],
  ['Panchayat Khata guide', '/blog/panchayat-khata-guide.html', 'Khata'],
  ['Khata transfer guide', '/blog/khata-transfer-guide.html', 'Khata'],
  ['BDA Khata transfer guide', '/blog/bda-khata-transfer-guide.html', 'Khata'],
  ['e-Khata errors that delay business transactions', '/blog/e-khata-errors-that-delay-business-transactions.html', 'Business'],
  ['Why businesses should outsource e-Khata compliance', '/blog/why-businesses-should-outsource-e-khata.html', 'Business'],
];
const OLD_PAGES = [
  ['BBMP e-Khata services', '/bbmp-e-khata-services.html'],
  ['BBMP property tax: assessment, payment & appeals', '/bbmp-property-tax-assessment-payment-bengaluru.html'],
  ['B-Khata to A-Khata conversion service', '/bbmp/b-khata-to-a-khata-conversion/'],
  ['BBMP documentation, trade licence & approvals', '/bbmp.html'],
  ['About Marvel Consultants', '/about.html'],
  ['Careers', '/career.html'],
  ['Contact', '/contact.html'],
  ['All guides', '/blog.html'],
];

// ---------- head ----------
function head(p) {
  const url = SITE.url + p.path;
  const title = p.metaTitle || `${p.title} | Marvel Consultants`;
  const graph = jsonld(p, url);
  return `<!DOCTYPE html>
<html lang="en-IN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(p.desc)}">
<meta name="robots" content="${p.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1'}">
<link rel="canonical" href="${url}">
<link rel="alternate" type="text/markdown" href="${url}${p.path.endsWith('/') ? 'index.md' : p.path.replace(/\.html$/, '.md').split('/').pop()}" title="Markdown version for agents">
<meta property="og:type" content="${p.ogType || 'website'}">
<meta property="og:site_name" content="Marvel Consultants">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(p.desc)}">
<meta property="og:image" content="${SITE.url}/assets/image/${p.image || 'shaking-hands.jpg'}">
<meta property="og:locale" content="en_IN">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" sizes="16x16" type="image/x-icon" href="/assets/image/logofavicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Source+Sans+3:wght@400;500;600&family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/v2.css">
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${SITE.gtm}');</script>
<!-- End Google Tag Manager -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${SITE.ga4}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${SITE.ga4}');</script>
<script type="application/ld+json">${JSON.stringify(graph)}</script>
</head>
<body>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${SITE.gtm}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
`;
}

function jsonld(p, url) {
  const org = {
    '@type': ['Organization', 'ProfessionalService'], '@id': SITE.url + '/#organization', name: SITE.name, url: SITE.url + '/',
    logo: SITE.url + SITE.logo, telephone: SITE.phone1.tel, email: SITE.email,
    address: { '@type': 'PostalAddress', streetAddress: SITE.address.street, addressLocality: SITE.address.locality, addressRegion: SITE.address.region, postalCode: SITE.address.postal, addressCountry: 'IN' },
    areaServed: [{ '@type': 'City', name: 'Bengaluru' }, { '@type': 'State', name: 'Karnataka' }],
    description: 'Property legal, documentation and government liaisoning services in Bengaluru: legal verification and title due diligence coordination, agreements and deeds, registration support, BBMP Khata and e-Khata, property tax, plan approvals — for owners, buyers, NRIs and real-estate developers.',
    slogan: 'Property Legal • Documentation • Liaisoning',
    knowsAbout: ['Property legal verification', 'Title due diligence', 'Sale deed registration', 'Power of attorney', 'BBMP e-Khata', 'Khata transfer', 'Khata bifurcation', 'B Khata to A Khata conversion', 'BBMP property tax', 'BBMP plan approval', 'Government liaisoning'],
    contactPoint: [{ '@type': 'ContactPoint', telephone: SITE.phone1.tel, contactType: 'customer service', areaServed: 'IN', availableLanguage: ['en', 'kn', 'hi'] }],
  };
  const website = { '@type': 'WebSite', '@id': SITE.url + '/#website', url: SITE.url + '/', name: SITE.name, publisher: { '@id': SITE.url + '/#organization' } };
  const crumbs = { '@type': 'BreadcrumbList', itemListElement: [['Home', '/'], ...(p.crumbs || []), [p.crumbLabel || p.title, p.path]].map(([n, h], i) => ({ '@type': 'ListItem', position: i + 1, name: strip(n), item: SITE.url + h })) };
  const page = { '@type': 'WebPage', '@id': url + '#webpage', url, name: strip(p.title), description: p.desc, isPartOf: { '@id': SITE.url + '/#website' }, about: { '@id': SITE.url + '/#organization' }, dateModified: p.updated || SITE.updated, inLanguage: 'en-IN' };
  const graph = [org, website, page, crumbs];
  if (p.service) graph.push({ '@type': 'Service', '@id': url + '#service', name: p.service.name || strip(p.title), serviceType: p.service.type || strip(p.title), description: p.desc, provider: { '@id': SITE.url + '/#organization' }, areaServed: { '@type': 'City', name: 'Bengaluru' }, url, offers: { '@type': 'Offer', priceCurrency: 'INR', description: p.service.offer || 'Quotation after a free assessment of your documents and situation.' } });
  const faqs = (p.blocks || []).filter(b => b.t === 'faq').flatMap(b => b.items);
  if (faqs.length) graph.push({ '@type': 'FAQPage', '@id': url + '#faq', mainEntity: faqs.map(f => ({ '@type': 'Question', name: strip(f.q), acceptedAnswer: { '@type': 'Answer', text: strip(f.a) } })) });
  return { '@context': 'https://schema.org', '@graph': graph };
}

// ---------- header / footer ----------
function header(p) {
  const menu = (k) => NAV[k].items.map(([l, h]) => `<a href="${h}">${esc(l)}</a>`).join('');
  return `<div class="topbar"><div class="wrap">
  <div class="tb-l">Property legal, documentation &amp; government liaisoning — Bengaluru</div>
  <div class="tb-r"><a href="tel:${SITE.phone1.tel}" data-cta="top_call">${SITE.phone1.display}</a><a href="${SITE.wa}" target="_blank" rel="noopener" data-cta="top_whatsapp">WhatsApp</a><a class="mail" href="mailto:${SITE.email}">${SITE.email}</a></div>
</div></div>
<header class="site-header"><div class="wrap">
  <a class="brand" href="/" aria-label="Marvel Consultants home"><img src="${SITE.logo}" alt="Marvel Consultants" width="160" height="52"></a>
  <button class="nav-toggle" aria-expanded="false" aria-controls="nav">Menu</button>
  <ul class="nav" id="nav">
    <li class="has-menu"><button aria-expanded="false">Services</button>
      <div class="menu menu4">
        <div><h4><a href="/legal-services/">Legal services</a></h4>${menu('legal')}<a class="all" href="/legal-services/">All legal services →</a></div>
        <div><h4><a href="/property/">Property &amp; BBMP</a></h4>${menu('property')}<a class="all" href="/property/">Property owners →</a><h4 style="margin-top:.8rem">By situation</h4>${menu('journeys')}</div>
        <div><h4><a href="/real-estate/">Developer services</a></h4>${menu('realEstate')}<a class="all" href="/real-estate/">For developers →</a></div>
        <div><h4><a href="/property/nri/">NRI services</a></h4>${menu('nri')}<a class="all" href="/services/">Browse all services →</a></div>
      </div></li>
    <li><a href="/who-we-serve/">Who we serve</a></li>
    <li><a href="/about/">About</a></li>
    <li><a href="/resources/">Guides</a></li>
    <li><a href="/contact/">Contact</a></li>
    <li class="nav-cta"><a class="btn btn-primary btn-sm" href="/contact/" data-cta="nav_talk_expert">Talk to an expert</a></li>
  </ul>
</div></header>
`;
}
function footer() {
  const list = (items) => `<ul>${items.map(([l, h]) => `<li><a href="${h}">${esc(l)}</a></li>`).join('')}</ul>`;
  return `<footer class="site-footer"><div class="wrap">
  <div class="cols">
    <div><h4>Marvel Consultants</h4>
      <address>${esc(SITE.address.street)},<br>${SITE.address.locality}, ${SITE.address.region} ${SITE.address.postal}</address>
      <p style="margin:.8rem 0 0"><a href="tel:${SITE.phone1.tel}">${SITE.phone1.name}: ${SITE.phone1.display}</a><br><a href="tel:${SITE.phone2.tel}">${SITE.phone2.name}: ${SITE.phone2.display}</a><br><a href="mailto:${SITE.email}">${SITE.email}</a></p></div>
    <div><h4><a href="/legal-services/">Legal services</a></h4>${list(NAV.legal.items)}</div>
    <div><h4><a href="/real-estate/">Developers</a></h4>${list(NAV.realEstate.items)}</div>
    <div><h4><a href="/property/">Property &amp; BBMP</a></h4>${list([...NAV.property.items, ...NAV.journeys.items])}</div>
    <div><h4><a href="/resources/">Guides &amp; pages</a></h4>${list([...OLD_GUIDES.map(g => [g[0], g[1]]), ...OLD_PAGES])}</div>
  </div>
  <div class="legal">
    <p>Marvel Consultants is a private professional services firm and is not affiliated with BBMP, BDA, Sub-Registrar offices or any government authority. We provide property documentation, process coordination and liaisoning services. Where an engagement requires a legal opinion, reserved legal work, litigation or court representation, such work is handled by enrolled advocates / associated legal counsel as applicable to the engagement. Government fees and statutory charges are separate from our professional fees, and approvals and outcomes remain subject to the concerned authority. Office hours 9 am – 7 pm; visits by appointment. Page last reviewed ${SITE.updated}.</p>
    <p>© 2026 Marvel Consultants. All rights reserved. · <a href="/about/">About</a> · <a href="/contact/">Contact</a> · <a href="/career.html">Careers</a> · <a href="/sitemap.xml">Sitemap</a> · <a href="/llms.txt">llms.txt</a></p>
  </div>
</div></footer>
<div class="mobile-bar">
  <a class="call" href="tel:${SITE.phone1.tel}" data-cta="sticky_call">Call</a>
  <a class="wa" href="${SITE.wa}" target="_blank" rel="noopener" data-cta="sticky_whatsapp">WhatsApp</a>
  <a class="form-link" href="/contact/#problem" data-cta="sticky_form">Tell us your problem</a>
</div>
<script src="/assets/js/v2.js" defer></script>
</body>
</html>
`;
}

// ---------- blocks ----------
function block(b) {
  switch (b.t) {
    case 'h2': return `<h2 id="${b.id || slug(b.text)}">${b.text}</h2>\n`;
    case 'h3': return `<h3>${b.text}</h3>\n`;
    case 'p': return `<p>${b.html}</p>\n`;
    case 'ul': return `<ul>${b.items.map(i => `<li>${i}</li>`).join('')}</ul>\n`;
    case 'check': return `${b.title ? `<h3>${b.title}</h3>` : ''}<ul class="check">${b.items.map(i => `<li>${i}</li>`).join('')}</ul>\n`;
    case 'note': return `<div class="note${b.warn ? ' warn' : ''}">${b.html}</div>\n`;
    case 'table': return `<div class="table-wrap"><table><tr>${b.head.map(h => `<th>${h}</th>`).join('')}</tr>${b.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</table></div>\n`;
    case 'steps': return `<ol class="steps${b.vert ? ' vert' : ''}">${b.items.map(s => `<li><h3>${s.title}</h3><p>${s.text}</p></li>`).join('')}</ol>\n`;
    case 'situations': return `<div class="situations">${b.items.map(s => `<div><h3>${s.title}</h3><p>${s.text}</p></div>`).join('')}</div>\n`;
    case 'cards': return `<div class="cards${b.cols === 2 ? ' two' : b.cols === 4 ? ' four' : ''}">${b.items.map(c => { const inner = `${c.ref ? `<div class="eyebrow" style="margin:0">${c.ref}</div>` : ''}<h3>${c.href ? `<a href="${c.href}">${c.title}</a>` : c.title}</h3><p>${c.text}</p>${c.href ? `<a class="more arrow" href="${c.href}">${c.more || 'Open'} </a>` : ''}`; return c.img ? `<div class="card has-img${c.emph ? ' emph' : ''}"><div class="card-img"><img src="/assets/image/v2/${c.img}.jpg" alt="${esc(c.imgAlt || strip(c.title))}" width="1200" height="800" loading="lazy"></div><div class="card-body">${inner}</div></div>` : `<div class="card${c.emph ? ' emph' : ''}">${inner}</div>`; }).join('')}</div>\n`;
    case 'ledger': return `<div class="ledger">${b.rows.map(r => `<div class="ledger-row${r.img ? ' has-img' : ''}">${r.img ? `<div class="row-img"><img src="/assets/image/v2/${r.img}.jpg" alt="${esc(r.imgAlt || strip(r.title))}" width="1200" height="800" loading="lazy"></div>` : ''}<div>${r.ref ? `<div class="ref">${r.ref}</div>` : ''}<h3><a href="${r.href}">${r.title}</a></h3><p class="who">${r.who}</p></div><ul>${r.items.map(([l, h]) => `<li><a href="${h}">${l}</a></li>`).join('')}</ul><div class="go"><a class="btn btn-outline btn-sm arrow" href="${r.href}">${r.go || 'Open'} </a></div></div>`).join('')}</div>\n`;
    case 'photo': return `<figure class="photo-band"><img src="/assets/image/v2/${b.img}.jpg" alt="${esc(b.alt)}" width="1800" height="760" loading="lazy"><figcaption><div class="wrap"><span>${b.caption || ''}</span><span>${b.credit || ''}</span></div></figcaption></figure>\n`;
    case 'figure': return `<figure class="inline-img"><img src="/assets/image/v2/${b.img}.jpg" alt="${esc(b.alt)}" width="1200" height="800" loading="lazy">${b.caption ? `<figcaption>${b.caption}</figcaption>` : ''}</figure>\n`;
    case 'faq': return `<h2 id="faq">${b.title || 'Frequently asked questions'}</h2><div class="faq">${b.items.map(f => `<details><summary>${f.q}</summary><div class="a"><p>${f.a}</p></div></details>`).join('')}</div>\n`;
    case 'guides': return `<ul class="guides">${b.items.map(g => `<li><a href="${g[1]}">${g[0]}</a><span>${g[2] || ''}</span></li>`).join('')}</ul>\n`;
    case 'trust': return `<div class="trust">${b.items.map(i => `<div><strong>${i[0]}</strong><span>${i[1]}</span></div>`).join('')}</div>\n`;
    case 'form': return formHtml(b);
    case 'cta': return `<div class="note" style="border-color:var(--plum);display:flex;flex-wrap:wrap;gap:1rem;align-items:center;justify-content:space-between"><div><strong>${b.title}</strong><br>${b.text}</div><a class="btn btn-primary" href="${b.href || '/contact/'}" data-cta="${b.cta || 'inline_cta'}">${b.label || 'Talk to an expert'}</a></div>\n`;
    case 'html': return b.html + '\n';
    default: return '';
  }
}
function formHtml(b) {
  const b2c = b.kind !== 'b2b';
  const types = b2c ? ['Property owner', 'Buyer', 'Seller', 'NRI owner', 'Builder / developer', 'Business owner'] : ['Business owner / director', 'Finance / accounts team', 'Builder / developer', 'CA / advocate referring a client', 'Other'];
  return `<form class="form" data-enquiry="${esc(b.subject || 'Marvel Website Enquiry')}" data-form="${b.kind || 'b2c'}" id="${b.id || 'enquiry'}" novalidate>
  <div><label for="${b.id}-name">Your name</label><input id="${b.id}-name" name="name" required autocomplete="name"></div>
  <div><label for="${b.id}-mobile">Mobile number</label><input id="${b.id}-mobile" name="mobile" type="tel" inputmode="numeric" required autocomplete="tel" placeholder="10-digit mobile"></div>
  <div><label for="${b.id}-email">Email (optional)</label><input id="${b.id}-email" name="email" type="email" autocomplete="email"></div>
  <div><label for="${b.id}-type">I am a</label><select id="${b.id}-type" name="customerType">${types.map(t => `<option>${t}</option>`).join('')}</select></div>
  <div><label for="${b.id}-service">${b2c ? 'What are you trying to do?' : 'What do you need help with?'}</label><select id="${b.id}-service" name="service">${(b.options || (b2c ? ['Get or correct an e-Khata', 'Transfer Khata to my name', 'Convert B Khata to A Khata', 'Property tax assessment / arrears', 'Verify documents before buying', 'Get documents ready to sell', 'Plan approval / building permission', 'A problem I need diagnosed', 'Something else'] : ['Property legal verification / title due diligence', 'Agreement or deed documentation', 'Property registration support', 'Power of attorney (incl. NRI)', 'BBMP / project approvals', 'Developer project documentation', 'Business or government registration', 'Something else'])).map(t => `<option>${t}</option>`).join('')}</select></div>
  <div><label for="${b.id}-loc">${b2c ? 'Property location (area / ward)' : 'Business location'}</label><input id="${b.id}-loc" name="location" autocomplete="off"></div>
  <div class="full"><label for="${b.id}-msg">${b2c ? 'Tell us what is going on' : 'Brief details'}</label><textarea id="${b.id}-msg" name="message" placeholder="${b2c ? 'e.g. Bought a site in 2019, tax receipts are in the old owner\'s name, need e-Khata to sell.' : 'e.g. 60-unit project at handover: parent Khata needs bifurcation and each unit an e-Khata.'}"></textarea></div>
  <div class="hp" aria-hidden="true"><label>Website<input name="website" tabindex="-1" autocomplete="off"></label></div>
  <div class="status" role="status" aria-live="polite"></div>
  <div class="full"><button class="btn btn-primary" type="submit">${b.label || (b2c ? 'Send my property problem' : 'Request a consultation')}</button> <span class="small muted" style="margin-left:.75rem">We reply on the same working day. No documents are needed to start.</span></div>
</form>\n`;
}

// ---------- page bodies ----------
function crumbs(p) {
  const items = [['Home', '/'], ...(p.crumbs || [])];
  return `<nav class="crumbs wrap" aria-label="Breadcrumb"><ol>${items.map(([n, h]) => `<li><a href="${h}">${esc(n)}</a></li>`).join('')}<li aria-current="page">${esc(p.crumbLabel || p.title)}</li></ol></nav>\n`;
}
function actions(list, cls = 'actions') {
  if (!list || !list.length) return '';
  return `<div class="${cls}">${list.map(a => `<a class="btn ${a.kind || 'btn-primary'}${a.arrow ? ' arrow' : ''}" href="${a.href}"${a.href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''} data-cta="${a.cta || slug(a.label)}">${a.label} </a>`).join('')}</div>`;
}
function renderPage(p) {
  let out = head(p) + header(p);
  if (p.layout === 'home') {
    out += p.home(block, actions) ;
  } else {
    out += crumbs(p);
    const headImg = p.photo ? `<div class="head-img"><img src="/assets/image/v2/${p.photo}.jpg" alt="${esc(p.photoAlt || strip(p.title))}" width="1200" height="800" loading="eager" fetchpriority="high"></div>` : '';
    out += `<section class="page-head"><div class="wrap${p.photo ? ' has-img' : ''}"><div>${p.eyebrow ? `<p class="eyebrow">${p.eyebrow}</p>` : ''}<h1>${p.title}</h1>${p.lede ? `<p class="lede">${p.lede}</p>` : ''}${actions(p.actions)}</div>${headImg}</div></section>\n`;
    if (p.layout === 'hub') {
      out += `<div class="wrap">` + (p.blocks || []).map(sectionWrap).join('') + `</div>\n`;
    } else {
      const h2s = (p.blocks || []).filter(b => b.t === 'h2' || b.t === 'faq').map(b => [b.t === 'faq' ? (b.title || 'Frequently asked questions') : b.text, b.t === 'faq' ? 'faq' : (b.id || slug(b.text))]);
      out += `<div class="wrap layout"><main class="prose">${p.updated ? `<p class="meta-line">Last reviewed ${p.updated} · Bengaluru</p>` : ''}${(p.blocks || []).map(block).join('')}</main>
<aside class="aside"><div class="sticky-aside">
  <div class="box cta-card"><h3>${p.asideTitle || 'Talk to an expert'}</h3><p>${p.asideText || 'Tell us your situation. We will say what needs doing, what it costs and how long it takes — before you commit to anything.'}</p><a class="tel" href="tel:${SITE.phone1.tel}" data-cta="aside_call">${SITE.phone1.display}</a><a class="btn btn-primary" href="${p.asideHref || '/contact/'}" data-cta="aside_form">${p.asideCta || 'Get an assessment'}</a><a class="btn btn-wa" href="${SITE.wa}" target="_blank" rel="noopener" data-cta="aside_whatsapp">WhatsApp us</a></div>
  ${h2s.length > 2 ? `<div class="box"><h3>On this page</h3><ul>${h2s.map(([t, id]) => `<li><a href="#${id}">${strip(t)}</a></li>`).join('')}</ul></div>` : ''}
  ${p.related && p.related.length ? `<div class="box"><h3>Related</h3><ul>${p.related.map(([l, h]) => `<li><a href="${h}">${esc(l)}</a></li>`).join('')}</ul></div>` : ''}
</div></aside></div>\n`;
    }
  }
  if (p.ctaBand !== false) out += ctaBand(p.ctaBand || {});
  out += footer();
  return out;
}
function sectionWrap(b) {
  // hub layout: each block becomes a section; 'section' blocks carry their own heading
  if (b.t === 'section') return `<section class="section${b.alt ? ' alt' : ''}${b.tight ? ' tight' : ''}" ${b.id ? `id="${b.id}"` : ''} style="${b.alt ? 'margin:0 -20px;padding-left:20px;padding-right:20px' : ''}">${b.eyebrow || b.h2 ? `<div class="sec-head">${b.eyebrow ? `<p class="eyebrow">${b.eyebrow}</p>` : ''}${b.h2 ? `<h2 id="${b.id ? b.id + '-h' : slug(b.h2)}">${b.h2}</h2>` : ''}${b.text ? `<p>${b.text}</p>` : ''}</div>` : ''}${(b.blocks || []).map(block).join('')}</section>\n`;
  return `<section class="section tight">${block(b)}</section>\n`;
}
function ctaBand(o) {
  return `<section class="cta-band"><div class="wrap"><div><h2>${o.title || 'Have a question or a property issue? Talk to Marvel.'}</h2><p>${o.text || 'One call is usually enough to know what needs doing. Free initial assessment, plain-language answers, and a clear next step.'}</p></div>${actions(o.actions || [{ label: 'Talk to an expert', href: '/contact/', cta: 'band_talk' }, { label: 'WhatsApp', href: SITE.wa, kind: 'btn-wa', cta: 'band_whatsapp' }, { label: 'Tell us your property problem', href: '/contact/#problem', kind: 'btn-outline', cta: 'band_problem' }])}</div></section>\n`;
}

// ---------- markdown mirror ----------
function md(p) {
  const url = SITE.url + p.path;
  const lines = [`# ${strip(p.title)}`, '', `> ${strip(p.desc)}`, '', `Source: ${url}  ·  Organisation: Marvel Consultants, Bengaluru  ·  Phone: ${SITE.phone1.display}  ·  WhatsApp: ${SITE.wa}  ·  Last reviewed: ${p.updated || SITE.updated}`, ''];
  if (p.lede) lines.push(strip(p.lede), '');
  const walk = (b) => {
    switch (b.t) {
      case 'section': if (b.h2) lines.push(`## ${strip(b.h2)}`, ''); if (b.text) lines.push(strip(b.text), ''); (b.blocks || []).forEach(walk); break;
      case 'h2': lines.push(`## ${strip(b.text)}`, ''); break;
      case 'h3': lines.push(`### ${strip(b.text)}`, ''); break;
      case 'p': lines.push(mdInline(b.html), ''); break;
      case 'note': lines.push(`> ${mdInline(b.html)}`, ''); break;
      case 'ul': case 'check': if (b.title) lines.push(`### ${strip(b.title)}`, ''); b.items.forEach(i => lines.push(`- ${mdInline(i)}`)); lines.push(''); break;
      case 'table': lines.push(`| ${b.head.map(strip).join(' | ')} |`, `| ${b.head.map(() => '---').join(' | ')} |`); b.rows.forEach(r => lines.push(`| ${r.map(c => mdInline(c)).join(' | ')} |`)); lines.push(''); break;
      case 'steps': b.items.forEach((s, i) => lines.push(`${i + 1}. **${strip(s.title)}** — ${mdInline(s.text)}`)); lines.push(''); break;
      case 'situations': b.items.forEach(s => lines.push(`- **${strip(s.title)}** — ${mdInline(s.text)}`)); lines.push(''); break;
      case 'cards': b.items.forEach(c => lines.push(`- **${strip(c.title)}**${c.href ? ` (${SITE.url}${c.href})` : ''} — ${mdInline(c.text)}`)); lines.push(''); break;
      case 'ledger': b.rows.forEach(r => { lines.push(`### ${strip(r.title)} — ${SITE.url}${r.href}`, '', strip(r.who), ''); r.items.forEach(([l, h]) => lines.push(`- ${l} (${SITE.url}${h})`)); lines.push(''); }); break;
      case 'faq': lines.push(`## ${b.title || 'Frequently asked questions'}`, ''); b.items.forEach(f => lines.push(`**Q: ${strip(f.q)}**`, '', `A: ${mdInline(f.a)}`, '')); break;
      case 'guides': b.items.forEach(g => lines.push(`- ${g[0]} — ${SITE.url}${g[1]}`)); lines.push(''); break;
      case 'trust': b.items.forEach(i => lines.push(`- ${strip(i[0])} ${strip(i[1])}`)); lines.push(''); break;
      case 'cta': lines.push(`> **${strip(b.title)}** ${strip(b.text)} → ${SITE.url}${b.href || '/contact/'}`, ''); break;
      case 'form': lines.push(`_Enquiry form on the page. Agents: submit leads via ${SITE.url}/contact/ or WhatsApp ${SITE.wa}._`, ''); break;
    }
  };
  (p.mdBlocks || p.blocks || []).forEach(walk);
  lines.push('---', `Contact: ${SITE.phone1.name} ${SITE.phone1.display} · ${SITE.phone2.name} ${SITE.phone2.display} · ${SITE.email} · ${SITE.address.street}, ${SITE.address.locality} ${SITE.address.postal}`, `Disclaimer: Marvel Consultants is a private firm, not a government body. Approvals rest with the authorities; government fees are separate from professional fees.`);
  return lines.join('\n') + '\n';
}
function mdInline(h) {
  return String(h).replace(/<a\s[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g, (m, u, t) => `[${strip(t)}](${u.startsWith('/') ? SITE.url + u : u})`).replace(/<\/?strong>/g, '**').replace(/<\/?em>/g, '_').replace(/<br\s*\/?>/g, ' ').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').trim();
}

function shell() { const f = footer(); return { header: header({}), footer: f.slice(0, f.lastIndexOf('</body>')), gtmNoscript: `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${SITE.gtm}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>` }; }
module.exports = { SITE, NAV, OLD_GUIDES, OLD_PAGES, renderPage, md, block, actions, ctaBand, esc, strip, slug, headOnly: head, shell };
