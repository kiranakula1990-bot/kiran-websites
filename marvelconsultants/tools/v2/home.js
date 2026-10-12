// Homepage content shared by the desktop and mobile renderers.
// Repositioned per client brief V2 (31 Aug 2026): Property Legal • Documentation • Liaisoning — GST removed.
'use strict';
const R = require('./render');
const { OLD_GUIDES, SITE } = R;
const WA = SITE.wa;

const HOME = {
  eyebrow: 'Bengaluru · since 2014 · property legal · documentation · liaisoning',
  h1: 'Property matters. Handled end-to-end.',
  lede: 'Marvel Consultants helps <strong>property owners</strong>, <strong>buyers</strong>, <strong>NRIs</strong> and <strong>real-estate developers</strong> handle legal verification, documentation, registration, Khata, approvals and government liaisoning across Bengaluru — with one accountable point of contact.',
  actions: [{ label: 'Talk to an expert', href: '/contact/', cta: 'hero_talk' }, { label: 'WhatsApp us', href: WA, kind: 'btn-wa', cta: 'hero_whatsapp' }, { label: 'Explore services', href: '/services/', kind: 'btn-outline', arrow: true, cta: 'hero_services' }],
  serves: 'Since 2014 · Bengaluru-focused · end-to-end execution · developers &amp; NRI support',
  selector: {
    title: 'Tell us your situation', ref: 'Section A · choose one', q: 'What are you trying to do with your property?',
    choices: [
      { href: '/property/buy/', cta: 'hero_buy', label: 'Buying a property', sub: 'Verify title, approvals and records before you commit' },
      { href: '/property/sell/', cta: 'hero_sell', label: 'Selling a property', sub: 'Make Khata, tax and documents transaction-ready' },
      { href: '/property/own/', cta: 'hero_own', label: 'Managing a property', sub: 'e-Khata, transfer, corrections, tax and records' },
      { href: '/property/build/', cta: 'hero_build', label: 'Building / developing', sub: 'Approvals, compliance, Khata and liaisoning' },
      { href: '/legal-services/', cta: 'hero_legal', label: 'Need legal documentation', sub: 'Agreements, deeds, POA and registration support' },
      { href: '/property/nri/', cta: 'hero_nri', label: 'I am an NRI', sub: 'Handle Bengaluru property matters remotely' },
    ],
    foot: ['Know the service you need? <a href="/services/">Browse all services</a>', 'Something gone wrong with a record? <a href="/property/resolve/">Fix a property problem</a>'],
  },
  photo: { t: 'photo', img: 'hero', alt: 'Bengaluru city skyline in daylight', caption: 'Bengaluru — every file we handle is for a property or a project in this city.', credit: 'BBMP · BDA · Sub-Registrar · Revenue · BESCOM · BWSSB' },
  serve: { eyebrow: 'Core services', h2: 'Four verticals. One firm that knows the offices.', text: 'Legal-documentation coordination and government-facing execution under one engagement — for owners, buyers, NRIs and developers.',
    ledger: { t: 'ledger', rows: [
      { ref: 'Legal services', img: 'property', title: 'Property legal verification, documentation & registration', href: '/legal-services/', who: 'Property verification, title due diligence, drafting, deeds, POA, registration and dispute-support coordination.', items: [['Legal verification & title due diligence', '/legal-services/#verification'], ['Agreements & contracts', '/legal-services/#agreements'], ['Sale / gift / release / partition deeds', '/legal-services/#deeds'], ['Registration support', '/legal-services/#registration'], ['Power of attorney', '/legal-services/#poa'], ['Notices & dispute support', '/legal-services/#disputes']], go: 'Legal services' },
      { ref: 'Property & BBMP', img: 'own', title: 'Khata, e-Khata, tax, corrections and municipal records', href: '/property/', who: 'Khata/e-Khata, tax, bifurcation, amalgamation, record corrections and municipal documentation.', items: [['BBMP e-Khata', '/bbmp-e-khata-services.html'], ['Khata transfer', '/property/khata-transfer/'], ['B Khata to A Khata', '/bbmp/b-khata-to-a-khata-conversion/'], ['Property tax', '/bbmp-property-tax-assessment-payment-bengaluru.html'], ['Document verification', '/property/document-verification/'], ['Fix a property problem', '/property/resolve/']], go: 'Property & BBMP' },
      { ref: 'Developer services', img: 'realestate', title: 'Approvals, project documentation, CC/OC and bulk Khata', href: '/real-estate/', who: 'Approvals, project documentation, CC/OC, bulk Khata work and government liaisoning at project scale.', items: [['BBMP & BDA plan approval', '/real-estate/bbmp-plan-approval/'], ['Project compliance & liaisoning', '/real-estate/project-compliance-liaison/'], ['Project documentation', '/real-estate/property-documentation/'], ['Khata & e-Khata for projects', '/bbmp-e-khata-services.html'], ['Property tax assessment', '/bbmp-property-tax-assessment-payment-bengaluru.html']], go: 'Developer services' },
      { ref: 'NRI services', img: 'nri', title: 'Remote documentation, POA and registration support', href: '/property/nri/', who: 'Remote property documentation, POA, due diligence, registration and post-registration support — without repeated travel.', items: [['NRI journey', '/property/nri/'], ['Remote due diligence', '/property/document-verification/'], ['POA support', '/legal-services/#poa'], ['Khata & e-Khata', '/bbmp-e-khata-services.html'], ['Property tax', '/bbmp-property-tax-assessment-payment-bengaluru.html']], go: 'NRI services' },
    ] } },
  how: { eyebrow: 'How it works', h2: 'Tell us. We assess. We execute. You receive the outcome.', steps: { t: 'steps', items: [
    { title: 'Tell us', text: 'Share the property, documents and objective by call, WhatsApp or the form.' },
    { title: 'We assess', text: 'We identify the process, missing records, dependencies, fees and the expected timeline — before you commit.' },
    { title: 'We execute', text: 'Documentation, filing, office visits, queries and follow-up are coordinated end-to-end.' },
    { title: 'You receive the outcome', text: 'The document, approval, filing outcome or clear next step — with the records you should retain.' },
  ] } },
  why: { eyebrow: 'Why Marvel', h2: 'Expertise you can check, not a marketing claim.', cards: { t: 'cards', items: [
    { title: 'Bengaluru process knowledge', text: 'Practical, daily experience with BBMP, BDA, Sub-Registrar and allied property authorities — we know what each office actually asks for.' },
    { title: 'One point of contact', text: 'Legal-documentation coordination and government-facing execution under one engagement. You are not passed between an advocate, an agent and a runner.' },
    { title: 'Complex cases welcomed', text: 'Record mismatches, missing documents, legacy Khata issues, inherited and partitioned property, and project-scale work are the norm here, not the exception.' },
    { title: 'Developer capability', text: 'Bulk documentation and unit-level Khata/e-Khata workflows — 350- and 590-unit projects delivered — not only individual homeowner cases.' },
    { title: 'Plain-language updates', text: 'Scope, dependencies, fees and realistic timelines explained before work starts. No jargon, no guarantees we cannot keep.' },
    { title: 'A named team', text: 'A 14-member team led by managing partners Sanjay Chintala and Kiran Akula, working across all BBMP zones and panchayat offices.' },
  ] } },
  cases: { eyebrow: 'Case studies', h2: 'Project-scale execution, on the record.', text: 'Client names anonymised; details published with the developer\'s knowledge. Turnaround figures are completed-project results for Marvel-coordinated work; authority processing remains with the authority.',
    cards: { t: 'cards', items: [
      { title: '350-unit residential project', ref: 'e-Khata delivery', text: 'The developer required land e-Khata, Khata bifurcation and separate e-Khata records for all 350 units of a completed project. We reviewed the land and project documents, coordinated the land e-Khata, completed the bifurcation and managed each unit\'s e-Khata application. Delivered within a 45-day turnaround.', href: '/real-estate/', more: 'Developer services' },
      { title: '590-unit development', ref: 'Approvals to unit records', text: 'End-to-end coordination across Building Plan Approval, Completion Certificate, Occupancy Certificate, Panchayat e-Khata, Khata bifurcation and individual e-Khata documentation for all 590 units — completed with a 45-day turnaround, supporting a smoother handover.', href: '/real-estate/', more: 'Developer services' },
      { title: 'NRI & individual owners', ref: 'Ongoing', text: 'E-Khata applications, Khata rectification, BBMP notice and property-tax dispute resolution for domestic and NRI owners — document verification, application support and liaisoning throughout, even when the owner is overseas.', href: '/property/nri/', more: 'NRI services' },
    ] } },
  trust: { t: 'trust', items: [['Since 2014', 'property documentation and liaisoning in Bengaluru'], ['14-member team', 'led by managing partners Sanjay Chintala and Kiran Akula'], ['All BBMP zones', 'and panchayat offices worked with regularly'], ['Sobha · Pashmina', 'among developer teams we have supported']] },
  reviews: { title: 'What clients say', text: 'Read our reviews on Google — genuine, unedited and from real matters.', href: 'https://share.google/6fWvCRRSBNFuJ5yHl', label: 'Read our Google reviews' },
  expertise: { eyebrow: 'From the firm', h2: 'Documentation is the product. Liaisoning is the craft.',
    paras: [
      'Since 2014, Marvel Consultants has helped property owners, businesses and developers across Bengaluru and Karnataka navigate property records, municipal approvals and regulatory processes: legal and documentation coordination, transfer of titles, BBMP Khata and e-Khata services, property tax, plan approvals and the follow-up that actually closes a file.',
      'With a 14-member team and strong working relationships with government offices and their processes, we deliver measurable results — and we say plainly what an authority can and cannot be expected to do.',
    ],
    values: { title: 'Our values', text: 'At Marvel Consultants, confidentiality and discretion are paramount. We operate with integrity and respect for our clients\' privacy. Based in Bengaluru and working across Karnataka, we are equipped to provide efficient, expert solutions for property documentation and liaisoning matters, and we are committed to delivering value by addressing your needs with the highest level of service and professionalism.' },
    brief: { title: 'What we handle, in brief', items: [
      ['Legal verification', 'Ownership chain, title documents, EC, Khata, tax records and approvals reviewed and gaps identified; formal legal opinions by enrolled advocates / associated counsel where required'],
      ['Agreements & deeds', 'Sale agreements, lease and rental agreements, MOU/JDA, and sale / gift / release / partition / rectification deeds'],
      ['Registration support', 'Document readiness, stamp-duty and registration coordination, Sub-Registrar process support and post-registration record updates'],
      ['Document extraction & verification', 'Certified copies of sale deeds, EC (digital and manual), Khata (BBMP / BIAPPA / BMRDA / BDA), Patta, Passbook, Chitta, agricultural land and panchayat records; ownership, legal and municipal record checks'],
      ['Plan approval', 'BBMP and BDA plan approval, building approval, plan alteration, layout and utilities approvals'],
    ] } },
  guides: { eyebrow: 'Guides', h2: 'Read the process before you pay for it', text: 'Our guides are written from the cases we handle. Many owners complete simple applications themselves after reading them — and call us for the ones that go wrong.', list: { t: 'guides', items: OLD_GUIDES }, more: { label: 'All guides and resources', href: '/resources/' } },
  faq: { eyebrow: 'Frequently asked', h2: 'Questions we answer every week', block: { t: 'faq', items: [
    { q: 'What should be verified before buying a property in Bengaluru?', a: 'The ownership chain (mother deed to the current deed), Encumbrance Certificate for an adequate period, Khata status (A or B) and e-Khata on BBMP\'s e-Aasthi system, property-tax records, layout approval and — for buildings — the sanctioned plan and occupancy certificate. Our <a href="/legal-services/">legal verification service</a> checks all of these at source and reports in writing.' },
    { q: 'What is the difference between A Khata and B Khata in Bengaluru?', a: 'A Khata is BBMP\'s register for properties that comply with building bye-laws and approved layouts; it is needed for building plan sanction, bank loans and a clean sale. B Khata (the "B register") records properties with irregularities — they are taxed but carry restricted rights. Eligible B Khata properties can be converted; see our <a href="/bbmp/b-khata-to-a-khata-conversion/">B Khata to A Khata service</a>.' },
    { q: 'Is e-Khata mandatory to sell or register property in Bengaluru?', a: 'Within BBMP limits, e-Khata (the digital Khata on BBMP\'s e-Aasthi system) is now required for property registration. If your Khata is still only on paper, or the names and measurements in e-Aasthi do not match your sale deed, you will need it created or corrected before a sale. Start with our <a href="/bbmp-e-khata-services.html">e-Khata services</a>.' },
    { q: 'I bought a property but the Khata and tax receipts are still in the seller\'s name. What do I do?', a: 'You need a Khata transfer (mutation) at the BBMP ward office, supported by the registered sale deed, Encumbrance Certificate, latest tax-paid receipt and identity documents. Until it is done, tax notices and the official record stay in the seller\'s name. See <a href="/property/khata-transfer/">Khata transfer</a> — from ₹15,000, typically 45 days.' },
    { q: 'Can an NRI complete a Bengaluru property transaction through a Power of Attorney?', a: 'Yes — with a correctly executed POA (before the Indian consulate or a notary abroad, then adjudicated/registered in Karnataka). We advise on the scope and format, coordinate execution and act alongside your POA holder for verification, registration and Khata work. See <a href="/property/nri/">NRI services</a>.' },
    { q: 'Do you provide legal opinions or appear in court?', a: 'Marvel Consultants provides property documentation, verification, registration support and government liaisoning. Where a matter requires a formal legal opinion, legal representation or other professional advocacy services, that work is undertaken by enrolled advocates / associated legal counsel as applicable — coordinated within the same engagement so you keep one point of contact.' },
    { q: 'Do you charge for the first consultation?', a: 'No. The first assessment of your documents and situation is free, by phone or WhatsApp. You pay a fixed professional fee only if you engage us, agreed before work starts. Government fees are always separate.' },
  ] } },
};

// Desktop composition
function desktopHome(block, actions) {
  const H = HOME;
  return `
<section class="hero"><div class="wrap">
  <div>
    <p class="eyebrow">${H.eyebrow}</p>
    <h1>${H.h1}</h1>
    <p class="lede">${H.lede}</p>
    ${actions(H.actions)}
    <p class="serves">${H.serves}</p>
  </div>
  <div class="form-card" aria-labelledby="fc-title">
    <div class="fc-head"><h2 id="fc-title">${H.selector.title}</h2><span class="ref">${H.selector.ref}</span></div>
    <p class="fc-q">${H.selector.q}</p>
    <ul class="choices">
${H.selector.choices.map(c => `      <li><a href="${c.href}" data-cta="${c.cta}"><span>${c.label}<small>${c.sub}</small></span></a></li>`).join('\n')}
    </ul>
    <div class="fc-foot">${H.selector.foot.map(f => `<span>${f}</span>`).join('')}</div>
  </div>
</div></section>
${block(H.photo)}
<section class="section"><div class="wrap">
  <div class="sec-head"><p class="eyebrow">${H.serve.eyebrow}</p><h2>${H.serve.h2}</h2><p>${H.serve.text}</p></div>
  ${block(H.serve.ledger)}
</div></section>

<section class="section alt"><div class="wrap">
  <div class="sec-head"><p class="eyebrow">${H.how.eyebrow}</p><h2>${H.how.h2}</h2></div>
  ${block(H.how.steps)}
</div></section>

<section class="section"><div class="wrap">
  <div class="sec-head"><p class="eyebrow">${H.why.eyebrow}</p><h2>${H.why.h2}</h2></div>
  ${block(H.why.cards)}
</div></section>

<section class="section alt"><div class="wrap">
  <div class="sec-head"><p class="eyebrow">${H.cases.eyebrow}</p><h2>${H.cases.h2}</h2><p>${H.cases.text}</p></div>
  ${block(H.cases.cards)}
  <div style="margin-top:2rem">${block(H.trust)}</div>
  <p style="margin-top:1.5rem"><strong>${H.reviews.title}.</strong> ${H.reviews.text} <a class="btn btn-outline btn-sm arrow" style="margin-left:.5rem" href="${H.reviews.href}" target="_blank" rel="noopener" data-cta="google_reviews">${H.reviews.label} </a></p>
</div></section>

<section class="section"><div class="wrap">
  <div class="sec-head"><p class="eyebrow">${H.expertise.eyebrow}</p><h2>${H.expertise.h2}</h2></div>
  <div class="prose">${H.expertise.paras.map(t => `<p>${t}</p>`).join('')}
  <div class="faq"><details><summary>${H.expertise.values.title}</summary><div class="a"><p>${H.expertise.values.text}</p></div></details>
  <details><summary>${H.expertise.brief.title}</summary><div class="a"><ul>${H.expertise.brief.items.map(([k, v]) => `<li><strong>${k}:</strong> ${v}</li>`).join('')}</ul></div></details></div></div>
</div></section>

<section class="section alt"><div class="wrap">
  <div class="sec-head"><p class="eyebrow">${H.guides.eyebrow}</p><h2>${H.guides.h2}</h2><p>${H.guides.text}</p></div>
  ${block(H.guides.list)}
  <p style="margin-top:1.2rem"><a class="btn btn-outline arrow" href="${H.guides.more.href}">${H.guides.more.label} </a></p>
</div></section>

<section class="section"><div class="wrap">
  <div class="sec-head"><p class="eyebrow">${H.faq.eyebrow}</p><h2>${H.faq.h2}</h2></div>
  ${block(H.faq.block)}
</div></section>
`;
}

// Markdown-mirror blocks for the homepage (used by the md() mirror and llms-full)
const HOME_MD_BLOCKS = [
  { t: 'p', html: HOME.lede },
  { t: 'h2', text: HOME.selector.q },
  { t: 'ul', items: HOME.selector.choices.map(c => `<a href="${c.href}">${c.label}</a> — ${c.sub}`) },
  { t: 'h2', text: HOME.serve.h2 }, { t: 'p', html: HOME.serve.text }, HOME.serve.ledger,
  { t: 'h2', text: HOME.how.h2 }, HOME.how.steps,
  { t: 'h2', text: HOME.why.h2 }, HOME.why.cards,
  { t: 'h2', text: HOME.cases.h2 }, { t: 'p', html: HOME.cases.text }, HOME.cases.cards, HOME.trust,
  { t: 'p', html: `${HOME.reviews.text} <a href="${HOME.reviews.href}">${HOME.reviews.label}</a>` },
  { t: 'h2', text: HOME.expertise.h2 }, ...HOME.expertise.paras.map(t => ({ t: 'p', html: t })), { t: 'h3', text: HOME.expertise.values.title }, { t: 'p', html: HOME.expertise.values.text }, { t: 'h3', text: HOME.expertise.brief.title }, { t: 'ul', items: HOME.expertise.brief.items.map(([k, v]) => `<strong>${k}:</strong> ${v}`) },
  { t: 'h2', text: HOME.guides.h2 }, HOME.guides.list,
  HOME.faq.block,
];

module.exports = { HOME, desktopHome, HOME_MD_BLOCKS };
