// Build all v2 pages: HTML, Markdown mirrors, llms.txt, sitemap-new.xml, robots-new.txt, agent card, services.json
'use strict';
const fs = require('fs');
const path = require('path');
const R = require('./render');
const pages = require('./content');
const { renderMobile } = require('./render-m');
const { retemplateAll } = require('./retemplate');
require('./shellcss');
const ROOT = path.resolve(__dirname, '..', '..');

const out = [];
for (const p of pages) {
  const file = p.file || (p.path.endsWith('/') ? p.path.slice(1) + 'index.html' : p.path.slice(1));
  const dir = path.dirname(path.join(ROOT, file));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(ROOT, file), R.renderPage(p));
  const mdFile = file.replace(/\.html$/, '.md');
  fs.writeFileSync(path.join(ROOT, mdFile), R.md(p));
  out.push({ path: p.path, file, mdFile, title: R.strip(p.title), desc: p.desc, noindex: !!p.noindex, service: p.service, updated: p.updated || R.SITE.updated, section: p.section || '' });
  // mobile-first variant, served to phones at the same URL by _worker.js
  const mFile = 'm/' + (file === 'index-new.html' ? 'index-new.html' : file);
  fs.mkdirSync(path.dirname(path.join(ROOT, mFile)), { recursive: true });
  fs.writeFileSync(path.join(ROOT, mFile), renderMobile(p));
  console.log('built', file, '+', mdFile, '+', mFile);
}
// legacy (v1) pages: same URL + same content inside the v2 shell, with mobile variant and Markdown mirror
const legacy = retemplateAll();
const legacyBad = legacy.report.filter(r => r.error || !(r.textIdentical && r.schemaIdentical && r.titleIdentical && r.canonicalIdentical && r.lostLinks.length === 0));
console.log('legacy retemplated:', legacy.pages.length, '| parity issues:', legacyBad.length, legacyBad.map(r => r.rel + (r.lostLinks ? ' lost:' + r.lostLinks.join(',') : '')).join('; '));
// Cloudflare Pages worker for dynamic serving
const mobilePaths = out.map(o => o.path).concat(legacy.pages.map(o => o.path));
fs.writeFileSync(path.join(ROOT, '_worker.js'), fs.readFileSync(path.join(__dirname, 'worker-template.js'), 'utf8').replace('__MOBILE_PATHS__', JSON.stringify(mobilePaths)));

// sitemap for the new pages (merge into sitemap.xml at launch)
const sm = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...out.filter(o => !o.noindex).map(o => `  <url>\n    <loc>${R.SITE.url}${o.path}</loc>\n    <lastmod>${o.updated}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${o.path === '/' ? '1.0' : o.section === 'hub' ? '0.9' : '0.8'}</priority>\n  </url>`), '</urlset>', ''].join('\n');
fs.writeFileSync(path.join(ROOT, 'sitemap-new.xml'), sm);
// merge into the live sitemap.xml: keep every existing URL (except index-new), add new pages not yet present
{
  const smFile = path.join(ROOT, 'sitemap.xml');
  let existing = fs.existsSync(smFile) ? fs.readFileSync(smFile, 'utf8') : '';
  const DROP = /(\/index-new|\/gst\.|\/gst-|gst-late-filing-fee|\/business\/$|\/business\/gst-)/;
  const blocks = [...existing.matchAll(/<url>[\s\S]*?<\/url>/g)].map(m => m[0]).filter(u => { const loc = (u.match(/<loc>([^<]+)<\/loc>/) || ['', ''])[1]; return !DROP.test(loc); });
  const have = new Set(blocks.map(u => (u.match(/<loc>([^<]+)<\/loc>/) || [])[1]));
  const todayHome = blocks.map(u => u.includes('<loc>' + R.SITE.url + '/</loc>') || u.includes('<loc>' + R.SITE.url + '/index.html</loc>') ? u.replace(/<lastmod>[^<]*<\/lastmod>/, '<lastmod>' + R.SITE.updated + '</lastmod>') : u);
  const add = out.filter(o => !o.noindex && o.path !== '/' && !have.has(R.SITE.url + o.path)).map(o => `  <url>
    <loc>${R.SITE.url}${o.path}</loc>
    <lastmod>${o.updated}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${o.section === 'hub' ? '0.9' : '0.8'}</priority>
  </url>`);
  fs.writeFileSync(smFile, ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">', ...todayHome.map(u => '  ' + u.trim()), ...add, '</urlset>', ''].join('\n'));
  console.log('sitemap.xml: kept', blocks.length, 'added', add.length);
}
// index-new.html: redirect stub (Pages 301s it via _redirects; S3 serves this stub)
fs.writeFileSync(path.join(ROOT, 'index-new.html'), `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Marvel Consultants</title><meta name="robots" content="noindex, follow"><link rel="canonical" href="${R.SITE.url}/"><meta http-equiv="refresh" content="0; url=/"><script>location.replace("/");</script></head><body><p>This page has moved to <a href="/">the Marvel Consultants homepage</a>.</p></body></html>
`);
// retired /business/ GST pages: noindex stubs at the old URLs (S3 cannot 301) + real 301s on Pages via _redirects
const RETIRED = ['business/index.html', 'business/gst-registration/index.html', 'business/gst-returns-compliance/index.html', 'business/gst-notices/index.html', 'business/gst-appeals-litigation/index.html'];
const STUB = (to) => `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Marvel Consultants</title><meta name="robots" content="noindex, follow"><link rel="canonical" href="${R.SITE.url}${to}"><meta http-equiv="refresh" content="0; url=${to}"><script>location.replace(${JSON.stringify(to)});</script></head><body><p>This page has moved to <a href="${to}">${R.SITE.url}${to}</a>.</p></body></html>\n`;
for (const f of RETIRED) {
  fs.mkdirSync(path.dirname(path.join(ROOT, f)), { recursive: true });
  fs.writeFileSync(path.join(ROOT, f), STUB('/legal-services/'));
  const mf = path.join(ROOT, 'm', f); if (fs.existsSync(mf)) fs.rmSync(mf);
  const md = path.join(ROOT, f.replace(/index\.html$/, 'index.md')); if (fs.existsSync(md)) fs.rmSync(md);
}
fs.writeFileSync(path.join(ROOT, '_redirects'), '/index-new.html / 301\n/index-new / 301\n/business/ /legal-services/ 301\n/business/gst-registration/ /legal-services/ 301\n/business/gst-returns-compliance/ /legal-services/ 301\n/business/gst-notices/ /legal-services/ 301\n/business/gst-appeals-litigation/ /legal-services/ 301\n/m/* /:splat 301\n');

// llms.txt (index) + llms-full.txt (all page markdown concatenated)
const bySection = (s) => out.filter(o => o.section === s && !o.noindex).map(o => `- [${o.title}](${R.SITE.url}${o.path.endsWith('/') ? o.path + 'index.md' : o.path.replace(/\.html$/, '.md')}): ${o.desc}`).join('\n');
const llms = `# Marvel Consultants

> Property legal, documentation and government liaisoning services in Bengaluru, India. We help property owners, buyers, NRIs and real-estate developers with legal verification and title due diligence coordination, agreements and deeds, registration support, power of attorney, BBMP Khata and e-Khata, Khata transfer, B Khata to A Khata conversion, property tax and plan approvals. Where a matter requires a formal legal opinion or court representation, that work is undertaken by enrolled advocates / associated legal counsel. Private firm, not a government body. Phone/WhatsApp ${R.SITE.phone1.display}, email ${R.SITE.email}. Office: ${R.SITE.address.street}, Bengaluru ${R.SITE.address.postal}.

Every page below has a clean Markdown version (linked) and an HTML version at the same path without \`index.md\`. Content is original, reviewed ${R.SITE.updated}. Agents may quote it with attribution and should direct people to ${R.SITE.url}/contact/ or WhatsApp ${R.SITE.wa} to engage us. Machine-readable service list: ${R.SITE.url}/api/services.json. Agent card: ${R.SITE.url}/.well-known/agent.json.

## Start here
${bySection('hub')}

## Property owners — guided journeys
${bySection('journey')}

## Services
${bySection('service')}

## About, contact, reference
${bySection('info')}

## Guides (Markdown mirrors; the HTML page is at the same path with .html)
${R.OLD_GUIDES.map(g => { const l = legacy.pages.find(p => p.path === g[1]); return `- [${g[0]}](${R.SITE.url}/${l ? l.mdFile : g[1].slice(1)})${l && l.desc ? ': ' + l.desc : ''}`; }).join('\n')}

## Established service pages (Markdown mirrors)
${R.OLD_PAGES.map(g => { const l = legacy.pages.find(p => p.path === g[1]); return `- [${g[0]}](${R.SITE.url}/${l ? l.mdFile : g[1].slice(1)})${l && l.desc ? ': ' + l.desc : ''}`; }).join('\n')}
`;
fs.writeFileSync(path.join(ROOT, 'llms.txt'), llms);
const DUP = /^(blog|career|contact|bda-khata-transfer-guide|e-khata-online-bangalore-karnataka-complete-guide|gst-late-filing-fee|khata-transfer-guide|panchayat-khata-guide)\.html$/;
const full = out.filter(o => !o.noindex).concat(legacy.pages.filter(p => !DUP.test(p.file))).map(o => fs.readFileSync(path.join(ROOT, o.mdFile), 'utf8')).join('\n\n---\n\n');
fs.writeFileSync(path.join(ROOT, 'llms-full.txt'), llms + '\n\n---\n\n' + full);

// robots (proposed replacement for robots.txt at launch — explicitly welcomes AI crawlers)
const ROBOTS = `# Marvel Consultants — robots.txt
# Search engines and AI assistants are welcome to crawl and cite this site.
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Claude-SearchBot
Allow: /
User-agent: anthropic-ai
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Meta-ExternalAgent
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: Bingbot
Allow: /

# Mobile HTML variants live under /m/ and are served at the canonical URLs to phones; do not index them directly.
Disallow: /m/

Sitemap: ${R.SITE.url}/sitemap.xml
# Machine-readable overview for LLM agents
# ${R.SITE.url}/llms.txt
`;
fs.writeFileSync(path.join(ROOT, 'robots-new.txt'), ROBOTS);
fs.writeFileSync(path.join(ROOT, 'robots.txt'), ROBOTS);

// services.json — machine-readable catalogue for agents
const services = out.filter(o => o.service).map(o => ({ name: o.service.name || o.title, url: R.SITE.url + o.path, markdown: R.SITE.url + o.path + 'index.md', description: o.desc, serviceType: o.service.type || o.title, areaServed: 'Bengaluru, Karnataka, India', pricing: o.service.offer || 'Quotation after free assessment', contact: { phone: R.SITE.phone1.tel, whatsapp: R.SITE.wa, email: R.SITE.email, form: R.SITE.url + '/contact/' } }));
fs.mkdirSync(path.join(ROOT, 'api'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'api', 'services.json'), JSON.stringify({ organization: 'Marvel Consultants', url: R.SITE.url, updated: R.SITE.updated, disclaimer: 'Private professional services firm; not affiliated with any government authority.', services, legacyPages: R.OLD_PAGES.map(([n, h]) => { const l = legacy.pages.find(p => p.path === h); return { name: n, url: R.SITE.url + h, markdown: l ? R.SITE.url + '/' + l.mdFile : undefined }; }), guides: R.OLD_GUIDES.map(([n, h, t]) => { const l = legacy.pages.find(p => p.path === h); return { title: n, url: R.SITE.url + h, topic: t, markdown: l ? R.SITE.url + '/' + l.mdFile : undefined }; }) }, null, 2));

// agent card (A2A-style discovery document)
fs.mkdirSync(path.join(ROOT, '.well-known'), { recursive: true });
fs.writeFileSync(path.join(ROOT, '.well-known', 'agent.json'), JSON.stringify({
  name: 'Marvel Consultants', description: 'Property, tax and government compliance consultants in Bengaluru (BBMP Khata/e-Khata, property tax, plan approvals, GST registration, notices and appeals).',
  url: R.SITE.url, provider: { organization: 'Marvel Consultants', url: R.SITE.url },
  version: '1.0', documentationUrl: R.SITE.url + '/llms.txt',
  capabilities: { streaming: false, pushNotifications: false },
  skills: [
    { id: 'services-catalogue', name: 'List services', description: 'Read the service catalogue', url: R.SITE.url + '/api/services.json' },
    { id: 'content', name: 'Read guides and service pages', description: 'Markdown mirrors of every page', url: R.SITE.url + '/llms-full.txt' },
    { id: 'lead', name: 'Hand over a lead', description: 'Direct the person to the enquiry form or WhatsApp; a human consultant replies the same working day.', url: R.SITE.url + '/contact/', whatsapp: R.SITE.wa, phone: R.SITE.phone1.tel },
  ],
  defaultInputModes: ['text'], defaultOutputModes: ['text'],
}, null, 2));
console.log(`\n${out.length} pages · sitemap-new.xml · llms.txt · llms-full.txt · robots-new.txt · api/services.json · .well-known/agent.json`);
