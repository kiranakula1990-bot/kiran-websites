// One-off patch: reposition nav/footer/schema from GST+Business to Legal/Property/Developer/NRI (brief V2, 2026-08-31).
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
let r = fs.readFileSync(path.join(__dirname, 'render.js'), 'utf8');

// --- NAV: 4 verticals ---
const navStart = r.indexOf('const NAV = {');
const navEnd = r.indexOf('};', navStart) + 2;
const NAV_NEW = [
  "const NAV = {",
  "  legal: { label: 'Legal services', href: '/legal-services/', items: [",
  "    ['Property legal verification & title due diligence', '/legal-services/#verification'],",
  "    ['Agreements & contracts', '/legal-services/#agreements'],",
  "    ['Sale / gift / release / partition deeds', '/legal-services/#deeds'],",
  "    ['Property registration support', '/legal-services/#registration'],",
  "    ['Power of attorney (incl. NRI)', '/legal-services/#poa'],",
  "    ['Legal notices & dispute support', '/legal-services/#disputes'],",
  "  ]},",
  "  property: { label: 'Property & BBMP', href: '/property/', items: [",
  "    ['BBMP e-Khata', '/bbmp-e-khata-services.html'],",
  "    ['Khata transfer', '/property/khata-transfer/'],",
  "    ['B Khata to A Khata', '/bbmp/b-khata-to-a-khata-conversion/'],",
  "    ['Property tax', '/bbmp-property-tax-assessment-payment-bengaluru.html'],",
  "    ['Property document verification', '/property/document-verification/'],",
  "    ['Business & government registrations', '/business/registrations/'],",
  "  ]},",
  "  realEstate: { label: 'Developer services', href: '/real-estate/', items: [",
  "    ['BBMP & BDA plan approval', '/real-estate/bbmp-plan-approval/'],",
  "    ['Project compliance & government liaisoning', '/real-estate/project-compliance-liaison/'],",
  "    ['Property documentation for projects', '/real-estate/property-documentation/'],",
  "    ['Khata & e-Khata for projects', '/bbmp-e-khata-services.html'],",
  "    ['Property tax assessment', '/bbmp-property-tax-assessment-payment-bengaluru.html'],",
  "  ]},",
  "  nri: { label: 'NRI services', href: '/property/nri/', items: [",
  "    ['NRI property services overview', '/property/nri/'],",
  "    ['Remote due diligence', '/property/document-verification/'],",
  "    ['Power of attorney support', '/legal-services/#poa'],",
  "    ['Khata & e-Khata', '/bbmp-e-khata-services.html'],",
  "    ['Resolve a property problem', '/property/resolve/'],",
  "  ]},",
  "}",
].join('\n');
r = r.slice(0, navStart) + NAV_NEW + r.slice(navEnd);

// --- OLD_GUIDES / OLD_PAGES: drop GST entries (pages stay live; just out of navigation/llms) ---
r = r.replace(/\s*\['GST late filing fee'[^\]]*\],/, '');
r = r.replace(/\s*\['GST services overview'[^\]]*\],/, '').replace(/\s*\['GST audit & compliance'[^\]]*\],/, '').replace(/\s*\['GST dispute resolution & litigation'[^\]]*\],/, '').replace(/\s*\['GST advisory'[^\]]*\],/, '');

// --- org JSON-LD ---
r = r.replace("description: 'Property, tax and government compliance consultants in Bengaluru: BBMP Khata, e-Khata, property tax, plan approvals, GST registration, returns, notices and appeals.',",
  "description: 'Property legal, documentation and government liaisoning services in Bengaluru: legal verification and title due diligence coordination, agreements and deeds, registration support, BBMP Khata and e-Khata, property tax, plan approvals — for owners, buyers, NRIs and real-estate developers.',\n    slogan: 'Property Legal • Documentation • Liaisoning',");
r = r.replace("knowsAbout: ['BBMP e-Khata', 'Khata transfer', 'B Khata to A Khata conversion', 'BBMP property tax', 'BBMP plan approval', 'GST registration', 'GST notices', 'GST appeals'],",
  "knowsAbout: ['Property legal verification', 'Title due diligence', 'Sale deed registration', 'Power of attorney', 'BBMP e-Khata', 'Khata transfer', 'Khata bifurcation', 'B Khata to A Khata conversion', 'BBMP property tax', 'BBMP plan approval', 'Government liaisoning'],");

// --- topbar line ---
r = r.replace('<div class="tb-l">Property, tax &amp; government compliance — Bengaluru</div>', '<div class="tb-l">Property legal, documentation &amp; government liaisoning — Bengaluru</div>');

// --- header mega-menu: 4 columns ---
const menuOld = r.indexOf('      <div class="menu">');
const menuEnd = r.indexOf('</div></li>', menuOld);
const MENU_NEW = [
  '      <div class="menu menu4">',
  '        <div><h4><a href="/legal-services/">Legal services</a></h4>${menu(\'legal\')}<a class="all" href="/legal-services/">All legal services →</a></div>',
  '        <div><h4><a href="/property/">Property &amp; BBMP</a></h4>${menu(\'property\')}<a class="all" href="/property/">Property owners →</a></div>',
  '        <div><h4><a href="/real-estate/">Developer services</a></h4>${menu(\'realEstate\')}<a class="all" href="/real-estate/">For developers →</a></div>',
  '        <div><h4><a href="/property/nri/">NRI services</a></h4>${menu(\'nri\')}<a class="all" href="/services/">Browse all services →</a></div>',
  '      ',
].join('\n');
r = r.slice(0, menuOld) + MENU_NEW + r.slice(menuEnd);

// --- footer columns ---
r = r.replace('<div><h4><a href="/business/">Business</a></h4>${list(NAV.business.items)}</div>', '<div><h4><a href="/legal-services/">Legal services</a></h4>${list(NAV.legal.items)}</div>');
r = r.replace('<div><h4><a href="/real-estate/">Real estate</a></h4>${list(NAV.realEstate.items)}</div>', '<div><h4><a href="/real-estate/">Developers</a></h4>${list(NAV.realEstate.items)}</div>');
r = r.replace("<div><h4><a href=\"/property/\">Property owners</a></h4>${list([...NAV.property.items, ['Khata transfer', '/property/khata-transfer/'], ['Property document verification', '/property/document-verification/']])}</div>", '<div><h4><a href="/property/">Property &amp; BBMP</a></h4>${list([...NAV.property.items, ...NAV.nri.items.slice(0, 1)])}</div>');

// --- footer disclaimer (brief §16, advocate model Option B) + hours ---
r = r.replace('<p>Marvel Consultants is a private professional services firm and is not affiliated with BBMP, BDA, the GST department or any government authority. We provide advisory, documentation and representation assistance; approvals and outcomes rest with the concerned authorities. Government fees are paid directly to the authority and are separate from our professional fees. Page last reviewed ${SITE.updated}.</p>',
  '<p>Marvel Consultants is a private professional services firm and is not affiliated with BBMP, BDA, Sub-Registrar offices or any government authority. We provide property documentation, process coordination and liaisoning services. Where an engagement requires a legal opinion, reserved legal work, litigation or court representation, such work is handled by enrolled advocates / associated legal counsel as applicable to the engagement. Government fees and statutory charges are separate from our professional fees, and approvals and outcomes remain subject to the concerned authority. Office hours 9 am – 7 pm; visits by appointment. Page last reviewed ${SITE.updated}.</p>');

r = r.replace("updated: '2026-08-29',", "updated: '2026-09-17',");
fs.writeFileSync(path.join(__dirname, 'render.js'), r);
console.log('NAV4:', r.includes("legal: { label") && r.includes("nri: { label"), '| gst refs left in render:', (r.match(/GST/g) || []).length, '| menu4:', r.includes('menu4'), '| advocates:', r.includes('enrolled advocates'));

// --- render-m.js: header groups + footer sections ---
let m = fs.readFileSync(path.join(__dirname, 'render-m.js'), 'utf8');
m = m.replace("${group('property')}${group('business')}${group('realEstate')}", "${group('legal')}${group('property')}${group('realEstate')}${group('nri')}");
m = m.replace("<details><summary>Business services</summary>${list(NAV.business.items)}</details>", '<details><summary>Legal services</summary>${list(NAV.legal.items)}</details>');
m = m.replace('<details><summary>Real estate &amp; developers</summary>${list(NAV.realEstate.items)}</details>', '<details><summary>Developer services</summary>${list(NAV.realEstate.items)}</details>');
m = m.replace("<details><summary>Property owners</summary>${list([...NAV.property.items, ['Khata transfer', '/property/khata-transfer/'], ['Property document verification', '/property/document-verification/']])}</details>", '<details><summary>Property &amp; BBMP + NRI</summary>${list([...NAV.property.items, ...NAV.nri.items.slice(0, 1)])}</details>');
m = m.replace('<p>Marvel Consultants is a private professional services firm and is not affiliated with BBMP, BDA, the GST department or any government authority. We provide advisory, documentation and representation assistance; approvals and outcomes rest with the concerned authorities. Government fees are paid directly to the authority and are separate from our professional fees. Page last reviewed ${SITE.updated}.</p>',
  '<p>Marvel Consultants is a private professional services firm and is not affiliated with BBMP, BDA, Sub-Registrar offices or any government authority. We provide property documentation, process coordination and liaisoning services. Where an engagement requires a legal opinion, reserved legal work, litigation or court representation, such work is handled by enrolled advocates / associated legal counsel as applicable to the engagement. Government fees and statutory charges are separate from our professional fees, and approvals and outcomes remain subject to the concerned authority. Office hours 9 am – 7 pm; visits by appointment. Page last reviewed ${SITE.updated}.</p>');
fs.writeFileSync(path.join(__dirname, 'render-m.js'), m);
console.log('render-m groups:', m.includes("group('legal')") && m.includes("group('nri')"), '| GST refs left in render-m:', (m.match(/GST/g) || []).length);

// --- css: 4-column mega menu ---
const cssFile = path.join(ROOT, 'assets', 'css', 'v2.css');
let css = fs.readFileSync(cssFile, 'utf8');
if (!css.includes('.menu.menu4')) {
  css = css.replace('.has-menu.open .menu{display:grid}', '.has-menu.open .menu{display:grid}\n.menu.menu4{min-width:840px;grid-template-columns:repeat(4,1fr)}');
  css = css.replace('  .menu{position:static;display:none;min-width:0;', '  .menu,.menu.menu4{position:static;display:none;min-width:0;grid-template-columns:1fr;');
  fs.writeFileSync(cssFile, css);
}
console.log('menu4 css:', css.includes('.menu.menu4'));
