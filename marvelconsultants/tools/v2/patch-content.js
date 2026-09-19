// One-off patch: content.js + render.js repositioning (brief V2): drop GST pages, add /legal-services/, bios, cases, prices.
'use strict';
const fs = require('fs');
const path = require('path');
const F = path.join(__dirname, 'content.js');
let c = fs.readFileSync(F, 'utf8');
const must = (found, what) => { if (!found) { console.error('MISS:', what); process.exitCode = 1; } };

// --- 0) homepage meta (brief §11) ---
let n = c.length;
c = c.replace("metaTitle: 'Marvel Consultants | GST, Legal & BBMP Services in Bangalore',", "metaTitle: 'Property Legal, BBMP & Liaisoning Services in Bengaluru | Marvel Consultants',");
c = c.replace("desc: 'Marvel Consultants helps property owners, developers and businesses in Bengaluru with BBMP Khata, e-Khata, property tax, plan approvals, document verification, GST registration, notices and appeals. Talk to an expert.',", "desc: 'Marvel Consultants provides property legal verification, documentation, registration support, BBMP Khata and e-Khata, property tax, plan approvals and government liaisoning in Bengaluru — for owners, buyers, NRIs and real-estate developers. Talk to an expert.',");
must(c.length !== n, 'home meta');

// --- 1) remove the /business/ hub and 4 GST service pages ---
function dropPush(anchor, what) {
  const i = c.indexOf(anchor);
  if (i < 0) { console.error('MISS drop:', what); process.exitCode = 1; return; }
  const start = c.lastIndexOf('pages.push(', i);
  // find the matching "));\n" or "}));" end for this push: scan for the line that closes it at column 0
  const endMarker = c.indexOf('\npages.push(', i);
  const end = endMarker < 0 ? c.length : endMarker;
  // safer: cut from start to just before next pages.push
  c = c.slice(0, start) + c.slice(end + 1);
  console.log('dropped', what);
}
dropPush("path: '/business/', photo: 'business', layout: 'hub'", '/business/ hub');
dropPush("bizPage('/business/gst-registration/'", 'gst-registration');
dropPush("bizPage('/business/gst-returns-compliance/'", 'gst-returns');
dropPush("bizPage('/business/gst-notices/'", 'gst-notices');
dropPush("bizPage('/business/gst-appeals-litigation/'", 'gst-appeals');

// --- 2) BIZ_RELATED + registrations page cleanup ---
n = c.length;
c = c.replace(/const BIZ_RELATED = \[[^\]]*\]\];/s, "const BIZ_RELATED = [['All services', '/services/'], ['Legal services', '/legal-services/'], ['BBMP documentation & trade licence', '/bbmp.html'], ['Property & BBMP services', '/property/']];");
must(c.length !== n, 'BIZ_RELATED');
n = c.length;
c = c.replace("crumbs: [['Business', '/business/']], eyebrow: 'Business · service',", "crumbs: [['All services', '/services/']], eyebrow: 'Business registrations · service',");
must(c.length !== n, 'bizPage crumbs');
c = c.replace("'PAN, TAN and GST registration (see <a href=\"/business/gst-registration/\">GST registration</a>)'", "'PAN and TAN registration coordination'");
c = c.replace("{ q: 'Do I need Shops & Establishments registration if I have GST?', a: 'Yes; they are unrelated. Shops & Establishments is a Karnataka labour-law registration for commercial establishments and is required irrespective of GST status.' },", "{ q: 'Is Shops & Establishments registration needed for a small office?', a: 'Yes. Shops & Establishments is a Karnataka labour-law registration for commercial establishments and applies irrespective of your other registrations.' },");
c = c.replace("asideTitle: 'Talk to a GST consultant', asideText: 'Send the notice, the return or the question. A consultant reads it the same working day and tells you what it needs.', asideHref: '/contact/#business', asideCta: 'Request a consultation'", "asideTitle: 'Talk to a consultant', asideText: 'Tell us what your business needs registered or renewed. A consultant replies the same working day.', asideHref: '/contact/#business', asideCta: 'Request a consultation'");

// --- 3) services catalogue: Business row -> Legal row ---
n = c.length;
c = c.replace("{ ref: 'Business', title: 'GST, tax, compliance, notices, litigation', href: '/business/', who: 'Startups, SMEs and established businesses in Karnataka.', items: NAV.business.items, go: 'Business' },", "{ ref: 'Legal services', title: 'Verification, agreements, deeds, registration, POA', href: '/legal-services/', who: 'Buyers, sellers, owners, NRIs and developers who need property legal documentation coordinated end-to-end.', items: NAV.legal.items, go: 'Legal services' },");
must(c.length !== n, 'services row');
c = c.replace("desc: 'The complete catalogue of Marvel Consultants services in Bengaluru: BBMP e-Khata, Khata transfer, B Khata to A Khata, property tax, plan approval, document verification, NRI property services, GST registration, returns, notices, appeals and business registrations.',", "desc: 'The complete catalogue of Marvel Consultants services in Bengaluru: property legal verification, agreements and deeds, registration support, POA, BBMP e-Khata, Khata transfer, B Khata to A Khata, property tax, plan approval, document verification, NRI property services and business registrations.',");
c = c.replace("metaTitle: 'All Services — Property, BBMP, GST & Compliance in Bangalore | Marvel Consultants',", "metaTitle: 'All Services — Property Legal, BBMP & Liaisoning in Bengaluru | Marvel Consultants',");
c = c.replace("<strong>Not listed?</strong> If it involves a Bengaluru government office and property or tax, ask", "<strong>Not listed?</strong> If it involves a Bengaluru government office and property, ask");

// --- 4) who-we-serve ---
c = c.replace("{ title: 'Businesses', href: '/business/', text: 'Startups, SMEs, traders, manufacturers, contractors, professional firms and real-estate businesses — GST registration to litigation, plus the registrations to operate in Bengaluru.', more: 'Business services' },", "{ title: 'Buyers, sellers & owners', href: '/legal-services/', text: 'Legal verification before you pay, agreements and deeds that match the records, registration support, and the Khata and tax work that follows — coordinated end-to-end.', more: 'Legal services' },");
c = c.replace("{ title: 'Chartered accountants', text: 'GST representation, notices and appeals for your clients; Khata and property documentation for their property matters.' },", "{ title: 'Chartered accountants', text: 'Khata, e-Khata, registration and property documentation for your clients\\' property matters — handled at the offices while you keep the client relationship.' },");
c = c.replace("desc: 'Marvel Consultants serves three kinds of client in Bengaluru: businesses with GST and compliance needs, real-estate developers and builders with approvals and project compliance, and property owners — including NRIs — with Khata, e-Khata, tax and documentation.',", "desc: 'Marvel Consultants serves property owners, buyers and sellers, NRIs, and real-estate developers in Bengaluru — legal verification and documentation, BBMP Khata and e-Khata, property tax, approvals and government liaisoning.',");
c = c.replace("metaTitle: 'Who We Serve — Businesses, Developers, Property Owners in Bangalore | Marvel Consultants',", "metaTitle: 'Who We Serve — Owners, Buyers, NRIs & Developers in Bengaluru | Marvel Consultants',");
c = c.replace("lede: 'One firm, three audiences. The offices are the same; the needs are not.',", "lede: 'One firm, four audiences. The offices are the same; the needs are not.',");
c = c.replace("{ q: 'Do you work outside Bengaluru?', a: 'Our property practice is Bengaluru and the surrounding planning areas (BDA, BMRDA, BIAPPA and nearby panchayats). GST work covers Karnataka registrations, with portal-based work for other states.' }", "{ q: 'Do you work outside Bengaluru?', a: 'Our practice is Bengaluru and the surrounding planning areas (BDA, BMRDA, BIAPPA and nearby panchayat jurisdictions), with remote coordination for NRI owners anywhere in the world.' }");

// --- 5) about: bios + advocate wording ---
n = c.length;
c = c.replace("desc: 'Marvel Consultants is a Bengaluru professional services firm handling BBMP, Khata, property documentation, plan approvals and GST matters for property owners, developers and businesses since 2014. Meet the team, our approach and what we do not do.',", "desc: 'Marvel Consultants is a Bengaluru professional services firm focused on property documentation, legal-service coordination, BBMP/BDA processes and government liaisoning since 2014. Meet the leadership team, our approach and how legal work is handled.',");
must(c.length !== n, 'about desc');
n = c.length;
c = c.replace("    p('Marvel Consultants was set up in Bengaluru to do the part of property and tax work that most advisers avoid: the government office. For over a decade we have handled BBMP documentation, Khata and e-Khata, property tax, plan approvals and document extraction at sub-registrar, revenue and municipal offices — and represented businesses before the GST department in compliance, disputes and appeals.'),\n    p('Our clients are property owners who need a record corrected, developers who need approvals and unit Khatas, and businesses who need a notice answered. What they have in common is a process that is opaque from the outside and routine to us.'),",
  "    p('Marvel Consultants is a Bengaluru-based professional services firm focused on property documentation, legal-service coordination, BBMP/BDA processes and government liaisoning. Since 2014, we have helped property owners, NRIs and real-estate developers navigate records, approvals and documentation that often require coordination across multiple offices.'),\n    p('Our role is practical: understand the objective, review the available records, identify what is missing, prepare the required documentation, coordinate specialist legal support where applicable, file and follow up with the relevant authorities, and keep the client informed until the engagement is completed.'),");
must(c.length !== n, 'about intro');
n = c.length;
c = c.replace("    h2('The team'),\n    p('<strong>Sanjay</strong> and <strong>Kiran</strong> lead client work and are the people you speak to — not a helpline. They are supported by a small team handling documentation, filings and office follow-up across Bengaluru\\'s zones. Ask us about relevant experience for your matter; we will discuss it on a call rather than make claims here.'),",
  "    h2('Meet our leadership'),\n    p('Led by Sanjay Chintala and Kiran Akula, Marvel Consultants combines hands-on liaisoning expertise with strong client and project management. Since 2014, the firm has helped property owners, businesses and developers navigate documentation, municipal approvals and regulatory processes across Bengaluru and Karnataka.'),\n    h3('Sanjay Chintala — Managing Partner, Property Documentation & Liaisoning'),\n    p('Sanjay leads Marvel Consultants\\' property documentation and liaisoning services. He works closely with property owners, businesses and developers, overseeing BBMP Khata and e-Khata matters, property-tax documentation, plan approvals and coordination with government departments. His practical, solution-oriented approach helps clients navigate complex procedures efficiently.'),\n    h3('Kiran Akula — Managing Partner, Business Development & Client Relations'),\n    p('Kiran leads business development, corporate relationships and client engagement at Marvel Consultants. He works with businesses, developers and property owners to understand their requirements, coordinate documentation and ensure effective delivery across property, regulatory and compliance assignments. He also supports the firm\\'s strategic growth and service expansion.'),\n    p('They are supported by a 14-member team handling documentation, filings and office follow-up across all BBMP zones and panchayat offices.'),");
must(c.length !== n, 'about team');
n = c.length;
c = c.replace("    p('We are consultants for property documentation, BBMP/BDA processes and GST representation. We are <strong>not</strong> a law firm: title opinions, litigation over ownership and court matters need an advocate, and we will say so and refer you. We are <strong>not</strong> a government agency, and we cannot promise an approval or a timeline that depends on an authority. We are <strong>not</strong> a documentation marketplace: we take on the cases that need judgement and follow-up, and we tell you when you can do a simple one yourself.'),",
  "    p('Marvel Consultants provides property documentation, verification, registration support and government liaisoning. We are <strong>not</strong> a law firm: where a matter requires a formal legal opinion, legal representation or other professional advocacy services, the work is undertaken by enrolled advocates / associated legal counsel as applicable — coordinated within your engagement so you keep one point of contact. We are <strong>not</strong> a government agency, and we cannot promise an approval or a timeline that depends on an authority. We are <strong>not</strong> a documentation marketplace: we take on the cases that need judgement and follow-up, and we tell you when you can do a simple one yourself.'),");
must(c.length !== n, 'about advocates');
c = c.replace("    faq([{ q: 'Since when has Marvel Consultants been operating?', a: 'The firm has worked on BBMP documentation and GST matters in Bengaluru for over a decade.' }, { q: 'Are you affiliated with BBMP or the GST department?', a: 'No. We are a private professional services firm. We deal with these authorities on clients\\' behalf as authorised representatives.' }, { q: 'Do you have advocates and chartered accountants on the team?', a: 'We work with advocates and CAs on matters that need their certification or opinion, and coordinate so you have one point of contact. Where a matter is primarily legal, we refer you.' }]),",
  "    faq([{ q: 'Since when has Marvel Consultants been operating?', a: 'Since 2014 — over a decade of property documentation and liaisoning work in Bengaluru.' }, { q: 'Are you affiliated with BBMP or any government authority?', a: 'No. We are a private professional services firm. We deal with the authorities on clients\\' behalf as authorised representatives.' }, { q: 'How is legal work handled?', a: 'Marvel handles documentation, verification coordination, registration support and liaisoning. Formal legal opinions, litigation and court representation are undertaken by enrolled advocates / associated legal counsel as applicable to the engagement — coordinated so you have one point of contact.' }]),");

// --- 6) glossary: drop GST table ---
n = c.length;
c = c.replace(/    h2\('GST terms'\),\n    table\(\['Term', 'Meaning'\], \[[\s\S]*?\]\),\n/, '');
must(c.length !== n, 'glossary gst table');
c = c.replace("metaTitle: 'Glossary — Khata, e-Khata, e-Aasthi, EC, RTC, Mutation, ASMT-10, DRC-01A Explained | Marvel Consultants',", "metaTitle: 'Glossary — Khata, e-Khata, e-Aasthi, EC, RTC, Mutation, POA, Guidance Value Explained | Marvel Consultants',");
c = c.replace("desc: 'Plain-language definitions of the terms Bengaluru property owners and businesses meet: Khata, A Khata, B Khata, e-Khata, e-Aasthi, EPID, Encumbrance Certificate, RTC/Pahani, mutation, bifurcation, DC conversion, guidance value, occupancy certificate, GSTIN, GSTR-2B, ITC, ASMT-10, DRC-01A, sections 73 and 74, APL-01.',", "desc: 'Plain-language definitions of the terms Bengaluru property owners meet: Khata, A Khata, B Khata, e-Khata, e-Aasthi, EPID, Encumbrance Certificate, RTC/Pahani, mutation, bifurcation, DC conversion, guidance value, plan sanction, occupancy certificate and power of attorney.',");
c = c.replace("lede: 'Short definitions, written for owners and finance teams — not for lawyers.',", "lede: 'Short definitions, written for property owners — not for lawyers.',");
c = c.replace("    h2('Property and BBMP terms'),", "    h2('Property and BBMP terms'),");
c = c.replace("related: [['Property owners', '/property/'], ['Business services', '/business/'], ['Guides', '/resources/']],", "related: [['Property owners', '/property/'], ['Legal services', '/legal-services/'], ['Guides', '/resources/']],");

// --- 7) resources: remove GST section ---
n = c.length;
c = c.replace("    { t: 'section', tight: true, h2: 'GST guides', blocks: [{ t: 'guides', items: OLD_GUIDES.filter(g => g[2] === 'GST') }, p('More GST guidance is on the service pages: <a href=\"/business/gst-notices/\">notices and replies</a>, <a href=\"/business/gst-registration/\">registration</a>, <a href=\"/business/gst-returns-compliance/\">returns and compliance</a>, <a href=\"/business/gst-appeals-litigation/\">appeals</a>.')] },\n", '');
must(c.length !== n, 'resources gst section');
c = c.replace("h2: 'Property and Khata guides', blocks: [{ t: 'guides', items: OLD_GUIDES.filter(g => g[2] !== 'GST') }] },", "h2: 'Property and Khata guides', blocks: [{ t: 'guides', items: OLD_GUIDES }] },");
c = c.replace("desc: 'Practical guides written from real cases in Bengaluru: BBMP e-Khata, Khata transfer, B Khata to A Khata conversion, Panchayat and BDA Khata, e-Khata for businesses, GST late fees — plus a glossary of property and tax terms.',", "desc: 'Practical guides written from real cases in Bengaluru: BBMP e-Khata, Khata transfer, B Khata to A Khata conversion, Panchayat and BDA Khata and e-Khata for businesses — plus a glossary of property terms.',");

// --- 8) contact: hours + section wording ---
c = c.replace("{ title: 'Office', text: `${SITE.address.street},<br>${SITE.address.locality}, ${SITE.address.region} ${SITE.address.postal}<br><span class=\"small muted\">By appointment.</span>` },", "{ title: 'Office', text: `${SITE.address.street},<br>${SITE.address.locality}, ${SITE.address.region} ${SITE.address.postal}<br><span class=\"small muted\">9 am – 7 pm · visits by appointment.</span>` },");
c = c.replace("{ t: 'section', id: 'business', eyebrow: 'Businesses & developers', h2: 'Talk to a consultant', text: 'GST, compliance, notices, approvals or a project. Brief details are enough; we will ask for documents after reading.',", "{ t: 'section', id: 'business', eyebrow: 'Developers & legal documentation', h2: 'Talk to a consultant', text: 'A project, an approval, legal documentation or a registration. Brief details are enough; we will ask for documents after reading.',");
c = c.replace("a: `${SITE.address.street}, Bengaluru ${SITE.address.postal}, near Yeshwanthpur. Visits by appointment; most work does not require one.` }", "a: `${SITE.address.street}, Bengaluru ${SITE.address.postal}, near Yeshwanthpur. Office hours 9 am – 7 pm; visits by appointment — most work does not require one.` }");

// --- 9) real-estate hub: case studies replace generic evidence ---
n = c.length;
c = c.replace("    { t: 'section', eyebrow: 'Evidence', h2: 'Experience you can ask about', text: 'We describe project work in general terms here because client confidentiality applies. On a call we can discuss relevant experience for your project type and location.', blocks: [\n      { t: 'trust', items: [['10+ years', 'working daily with BBMP, BDA and sub-registrar offices in Bengaluru'], ['Residential, commercial, layouts', 'approvals and Khata across project types'], ['Documentation-first', 'every filing backed by a verified record set'], ['Two named consultants', 'Sanjay and Kiran — direct access, not a helpline']] },",
  "    { t: 'section', eyebrow: 'Case studies', h2: 'Project-scale execution, on the record', text: 'Client names anonymised; published with the developer\\'s knowledge. Turnaround figures are completed-project results for Marvel-coordinated work; authority processing remains with the authority.', blocks: [\n      { t: 'cards', cols: 2, items: [\n        { title: '350-unit residential project — end-to-end e-Khata', text: 'A leading residential developer required land e-Khata, Khata bifurcation and separate e-Khata records for all 350 units of a completed project. We reviewed the land and project documents, coordinated the land e-Khata, completed the bifurcation and managed each unit\\'s individual e-Khata application. Delivered within a 45-day turnaround, giving the developer organised, updated municipal records for every unit.', ref: 'Anonymised · with knowledge' },\n        { title: '590-unit development — approvals to unit records', text: 'A large residential development needed support across Building Plan Approval, Completion Certificate, Occupancy Certificate, Panchayat e-Khata, Khata bifurcation and individual e-Khata for all 590 units. We coordinated every stage end-to-end and completed the assignment within a 45-day turnaround — structured, unit-wise documentation that supported a smoother handover and future transactions.', ref: 'Anonymised · with knowledge' },\n      ] },\n      { t: 'trust', items: [['Since 2014', 'working daily with BBMP, BDA and Sub-Registrar offices'], ['940+ units', 'documented across the two projects above alone'], ['All BBMP zones', 'and panchayat offices, with a 14-member team'], ['Sobha · Pashmina', 'among developer teams we have supported']] },");
must(c.length !== n, 're-estate cases');
c = c.replace("lede: 'Approvals, Khata for every unit, tax assessment, documentation and the office follow-up that keeps a project moving. We work as the compliance partner alongside your architect, advocate and site team.',", "lede: 'Approvals, Khata for every unit, tax assessment, documentation and the office follow-up that keeps a project moving — proven at 350- and 590-unit scale. We work as the documentation partner alongside your architect, advocate and site team.',");

// --- 10) prices on service pages + property hub fees table ---
n = c.length;
c = c.replace("  timeline: ['Straightforward transfers after a sale are typically completed in a few weeks once the file is complete; inheritance and partition cases take longer because of the additional documents. We give a specific estimate after seeing the documents.', 'BBMP\\'s transfer fee is prescribed as a percentage of the stamp duty paid on the transfer document and is paid to BBMP. Our professional fee is fixed and quoted before we start.'],",
  "  timeline: ['<strong>Starting professional fees:</strong> Khata transfer after purchase from ₹15,000; after inheritance from ₹25,000. Typical completion: about 45 days once the file is complete — inheritance and partition cases can take longer because of the additional documents.', 'BBMP\\'s transfer fee is prescribed as a percentage of the stamp duty paid on the transfer document and is paid to BBMP. Our professional fee is fixed and confirmed before we start.'],");
must(c.length !== n, 'khata price');
c = c.replace("service: { name: 'Khata transfer (BBMP mutation)', type: 'Property documentation service' },", "service: { name: 'Khata transfer (BBMP mutation)', type: 'Property documentation service', offer: 'From ₹15,000 (purchase) / ₹25,000 (inheritance) professional fee; typically ~45 days. Government fees separate.' },");
n = c.length;
c = c.replace("  timeline: ['A typical residential verification is completed within days of receiving the documents; obtaining EC or certified copies from the sub-registrar adds time that depends on the office. Fixed fee quoted on scope; government fees for EC and copies are separate.'],",
  "  timeline: ['<strong>Starting professional fee:</strong> from ₹30,000, typically completed in about 15 days from receiving the documents; obtaining EC or certified copies from the sub-registrar adds time that depends on the office. Fixed fee confirmed on scope; government fees for EC and copies are separate.'],");
must(c.length !== n, 'verification price');
c = c.replace("service: { name: 'Property document verification', type: 'Due diligence' },", "service: { name: 'Property document verification', type: 'Due diligence', offer: 'From ₹30,000 professional fee; typically ~15 days. Government fees separate.' },");
// fees table on /property/ hub (before the 'How it works' section)
n = c.length;
c = c.replace("    { t: 'section', eyebrow: 'How it works', h2: 'From \"something is wrong\" to a corrected record', blocks: [",
  "    { t: 'section', alt: true, eyebrow: 'Transparent fees', h2: 'Starting professional fees', text: 'Fixed fees confirmed before work starts. Government fees, stamp duty and statutory charges are always separate and paid to the authority. Complex matters are quoted after a free assessment.', blocks: [\n      { t: 'table', head: ['Service', 'Starting professional fee', 'Typical time'], rows: [\n        ['e-Khata creation / correction', 'from ₹15,000', '~45 days'],\n        ['Khata transfer after purchase', 'from ₹15,000', '~45 days'],\n        ['Khata transfer after inheritance', 'from ₹25,000', '~45 days'],\n        ['B Khata → A Khata eligibility check', 'Free', '—'],\n        ['Property tax correction / arrears', 'from ₹10,000', '~45 days'],\n        ['Property document verification (before buying)', 'from ₹30,000', '~15 days'],\n      ] },\n      p('Timelines are typical completed-case durations for Marvel-coordinated work once the file is complete; authority processing remains with the authority.'),\n    ] },\n    { t: 'section', eyebrow: 'How it works', h2: 'From \"something is wrong\" to a corrected record', blocks: [");
must(c.length !== n, 'fees table');

// --- 11) legal-services hub page: insert before JOURNEYS ---
const LEGAL = `
pages.push({
  path: '/legal-services/', layout: 'page', section: 'hub', photo: 'property',
  title: 'Property Legal Services in Bengaluru',
  metaTitle: 'Property Legal Services in Bengaluru | Marvel Consultants',
  desc: 'Property legal verification, title due diligence coordination, agreements and contracts, sale / gift / release / partition deeds, registration support, power of attorney and dispute-support coordination in Bengaluru — for buyers, sellers, owners, NRIs and developers.',
  eyebrow: 'Property legal · verification · documentation', crumbLabel: 'Legal services',
  lede: 'Make property decisions with clearer documentation and fewer surprises. Marvel Consultants coordinates property legal verification, documentation, agreements, deeds, registration and post-registration support for buyers, sellers, owners, NRIs and developers in Bengaluru.',
  actions: [{ label: 'Get a property assessment', href: '/contact/#problem', cta: 'legal_assess' }, { label: 'WhatsApp your requirement', href: WA, kind: 'btn-wa', cta: 'legal_wa' }],
  service: { name: 'Property legal services', type: 'Property legal documentation and coordination' },
  asideTitle: 'Get a property assessment', asideText: 'Send the documents you have and what you are trying to do. We reply the same working day with what applies, what is missing and a fixed scope.', asideHref: '/contact/#problem', asideCta: 'Get a property assessment',
  related: [['Buying a property (journey)', '/property/buy/'], ['Selling a property (journey)', '/property/sell/'], ['NRI services', '/property/nri/'], ['Khata transfer', '/property/khata-transfer/'], ['Property document verification', '/property/document-verification/'], ['All services', '/services/']],
  blocks: [
    p('Property problems in Bengaluru are usually documentation problems: a chain of deeds with a gap, an agreement that does not match the records, a registration completed without the follow-through at BBMP. Our legal-services practice exists to close those gaps — one engagement that runs from verification through documentation and registration to the municipal record.'),
    note('<strong>How legal work is handled:</strong> Marvel Consultants provides property documentation, verification, registration support and government liaisoning. Where a matter requires a formal legal opinion, legal representation or other professional advocacy services, the work is undertaken by enrolled advocates / associated legal counsel as applicable to the engagement — coordinated so you keep one point of contact.'),
    h2('Property legal verification & title due diligence', 'verification'),
    p('Review of the ownership chain, title documents, Encumbrance Certificate, Khata and e-Khata, tax records, approvals and other relevant property records — with gaps and risk areas identified in a written note before you pay an advance or complete a registration. Formal legal opinions, where required, are issued by enrolled advocates / associated counsel. See also <a href="/property/document-verification/">document verification</a> (from ₹30,000, ~15 days).'),
    h2('Agreements & contract documentation', 'agreements'),
    p('Sale Agreement / Agreement to Sell, Lease and Rental Agreements, MOU, Joint Development Agreement, GPA/SPA and other property-related documentation — drafted and reviewed so the paper matches the transaction and the records that exist.'),
    h2('Deeds & conveyancing documentation', 'deeds'),
    p('Sale Deed, Gift Deed, Release Deed, Partition Deed, Rectification Deed and related transaction documentation — prepared with the supporting records the Sub-Registrar and, later, BBMP will expect.'),
    h2('Property registration support', 'registration'),
    p('Document readiness, stamp-duty and registration-fee coordination on guidance value, Sub-Registrar process support on the day, and the post-registration record actions most transactions forget: Khata transfer, e-Khata and property-tax updates.'),
    h2('Power of attorney support', 'poa'),
    p('Documentation and execution coordination for General and Special Power of Attorney — including POAs executed abroad by NRIs, with adjudication and registration in Karnataka so offices here accept them. See the <a href="/property/nri/">NRI journey</a> for the full remote process.'),
    h2('Legal notices & property dispute support', 'disputes'),
    p('Document review, notice coordination and case-preparation support for property matters. Court representation and formal legal opinions are provided by enrolled advocates as applicable; we prepare the record set and coordinate so nothing is lost between the documentation and the legal side.'),
    h2('Why use this service', 'why'),
    ul(['Identify title and document issues <strong>before</strong> paying a large advance or completing registration.', 'Ensure agreements and deeds reflect the actual transaction and the available property records.', 'Reduce hand-offs between legal review, registration support and BBMP post-registration work.', 'A clear path from pre-purchase checks to registration and Khata/e-Khata transfer — one accountable point of contact.']),
    faq([
      { q: 'What documents should be verified before buying a property in Bengaluru?', a: 'The chain of title deeds (mother deed onward), Encumbrance Certificate for an adequate period, Khata certificate and extract, e-Khata on e-Aasthi, latest tax-paid receipts, layout approval or conversion order for sites, and the sanctioned plan and occupancy certificate for buildings.' },
      { q: 'What is included in a property title verification?', a: 'A documentary review of the ownership chain, EC, Khata/e-Khata, tax and approval records with a written note of findings, risks and the corrections required. Where a formal legal opinion on title is needed, it is issued by an enrolled advocate coordinated within the engagement.' },
      { q: 'Can you assist with both legal verification and registration?', a: 'Yes — that is the point of the service. Verification, agreement/deed documentation, registration-day support and post-registration Khata/e-Khata transfer are handled as one engagement.' },
      { q: 'Can you review a sale agreement prepared by a builder or seller?', a: 'Yes. We review the draft against the records we verify and flag clauses that do not match the documents; advocate review is added where the matter requires it.' },
      { q: 'Can an NRI complete a property transaction through a Power of Attorney?', a: 'Yes, with a correctly executed and adjudicated POA. We advise on the scope and format, coordinate execution abroad and registration in Karnataka, and support the POA holder through verification, registration and Khata work.' },
      { q: 'What happens after registration — do I still need Khata or e-Khata transfer?', a: 'Yes. Registration records the transaction; BBMP\\'s record still shows the previous owner until the Khata transfer is filed and the e-Khata and tax account are updated. We handle this as the closing step of the engagement.' },
    ]),
  ],
  updated: SITE.updated,
});
`;
n = c.length;
c = c.replace('// =====================================================================\n// JOURNEYS', LEGAL + '\n// =====================================================================\n// JOURNEYS');
must(c.length !== n, 'legal hub insert');

fs.writeFileSync(F, c);
console.log('content.js patched; GST mentions left:', (c.match(/GST/g) || []).length);

// --- render.js: b2b form options replace GST defaults ---
const RF = path.join(__dirname, 'render.js');
let r = fs.readFileSync(RF, 'utf8');
let rn = r.length;
r = r.replace("['GST registration', 'GST returns & compliance', 'Reply to a GST notice', 'GST appeal / litigation', 'GST audit / reconciliation', 'Business or government registration', 'BBMP / project approvals', 'Something else']", "['Property legal verification / title due diligence', 'Agreement or deed documentation', 'Property registration support', 'Power of attorney (incl. NRI)', 'BBMP / project approvals', 'Developer project documentation', 'Business or government registration', 'Something else']");
if (r.length === rn) { console.error('MISS: b2b form options'); process.exitCode = 1; }
r = r.replace('e.g. Received an ASMT-10 notice for FY 2023-24, reply due in 12 days.', 'e.g. 60-unit project at handover: parent Khata needs bifurcation and each unit an e-Khata.');
fs.writeFileSync(RF, r);
console.log('render.js form options patched; GST left in render:', (r.match(/GST/g) || []).length);
