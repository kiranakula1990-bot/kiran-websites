// Page content for Marvel Consultants v2. Original copy; facts limited to what the firm already publishes + public process knowledge.
'use strict';
const R = require('./render');
const { SITE, NAV, OLD_GUIDES } = R;
const WA = SITE.wa;
const p = (html) => ({ t: 'p', html });
const h2 = (text, id) => ({ t: 'h2', text, id });
const h3 = (text) => ({ t: 'h3', text });
const ul = (items) => ({ t: 'ul', items });
const check = (items, title) => ({ t: 'check', items, title });
const note = (html, warn) => ({ t: 'note', html, warn });
const faq = (items, title) => ({ t: 'faq', items, title });
const steps = (items, vert) => ({ t: 'steps', items, vert });
const cta = (title, text, href, label, ctaId) => ({ t: 'cta', title, text, href, label, cta: ctaId });
const table = (head, rows) => ({ t: 'table', head, rows });

const ENGAGEMENT_FAQ = [
  { q: 'Do I need to visit your office to start?', a: 'No. Most matters start with a call or WhatsApp and photographs of your documents. We meet at our Yeshwanthpur office or at the property when a physical inspection, signature or original document is needed.' },
  { q: 'How are your fees structured?', a: 'A fixed professional fee agreed before work starts, quoted after a free first assessment of your documents. Government fees, stamp duty and statutory charges are separate and paid to the authority. We do not quote a headline price for complex matters because the work depends on what the records show.' },
  { q: 'Can you guarantee the approval or the timeline?', a: 'No, and you should be wary of anyone who does. Approvals rest with BBMP, BDA, the Sub-Registrar or the concerned authority. What we control is a complete, correct application, follow-up with the office, and honest communication about where it stands.' },
];

// ---------- helpers to assemble a service page ----------
const SVC_PHOTOS = { '/business/registrations/': 'govt', '/real-estate/bbmp-plan-approval/': 'build', '/real-estate/project-compliance-liaison/': 'realestate-2', '/real-estate/property-documentation/': 'property-2' };
function service(o) {
  if (o.page && !o.page.photo && SVC_PHOTOS[o.page.path]) o.page.photo = SVC_PHOTOS[o.page.path];
  const blocks = [];
  if (o.intro) o.intro.forEach(x => blocks.push(p(x)));
  if (o.forWhom) { blocks.push(h2('Who this is for', 'who')); blocks.push(ul(o.forWhom)); }
  if (o.when) { blocks.push(h2(o.whenTitle || 'When you need it — common situations', 'when')); blocks.push({ t: 'situations', items: o.when }); }
  if (o.whatWeDo) { blocks.push(h2('What Marvel does', 'what')); blocks.push(check(o.whatWeDo)); }
  if (o.docs) { blocks.push(h2('Documents and information usually required', 'documents')); blocks.push(ul(o.docs)); if (o.docsNote) blocks.push(note(o.docsNote)); }
  if (o.process) { blocks.push(h2('Step-by-step process', 'process')); blocks.push(steps(o.process, true)); }
  if (o.timeline) { blocks.push(h2('Timeline and fees', 'timeline')); o.timeline.forEach(x => blocks.push(p(x))); }
  blocks.push(cta(o.ctaTitle || 'Not sure this is the right service?', o.ctaText || 'Send us the situation in a couple of lines. We will tell you what applies — and if it is something you can do yourself.', o.ctaHref || '/contact/', o.ctaLabel || 'Get a free assessment', 'service_mid'));
  if (o.issues) { blocks.push(h2('Common problems we see', 'issues')); blocks.push(ul(o.issues)); }
  if (o.why) { blocks.push(h2('Why Marvel Consultants', 'why')); blocks.push(ul(o.why)); }
  if (o.faqs) blocks.push(faq(o.faqs.concat(o.noEngagementFaq ? [] : ENGAGEMENT_FAQ.slice(0, 2))));
  if (o.related) { blocks.push(h2('Related services and guides', 'related')); blocks.push(ul(o.related.map(([l, h]) => `<a href="${h}">${l}</a>`))); }
  return Object.assign({ layout: 'page', section: 'service', ogType: 'article', blocks, updated: SITE.updated }, o.page);
}

const pages = [];

// =====================================================================
// HOME (index-new.html)
// =====================================================================
pages.push({
  path: '/', file: 'index.html', layout: 'home', section: 'hub',
  title: 'Property, tax and government compliance consultants in Bengaluru',
  metaTitle: 'Property Legal, BBMP & Liaisoning Services in Bengaluru | Marvel Consultants',
  desc: 'Marvel Consultants provides property legal verification, documentation, registration support, BBMP Khata and e-Khata, property tax, plan approvals and government liaisoning in Bengaluru — for owners, buyers, NRIs and real-estate developers. Talk to an expert.',
  image: 'shaking-hands.jpg',
  ctaBand: { title: 'Have a question or a property issue? Talk to Marvel.', text: 'Tell us what you are trying to do. We will say what needs doing, what it costs and how long it realistically takes — before you commit to anything.' },
  home: (block, actions) => require('./home').desktopHome(block, actions),
  mdBlocks: require('./home').HOME_MD_BLOCKS,
  blocks: [require('./home').HOME.faq.block],
});

// =====================================================================
// HUBS
// =====================================================================
pages.push({
  path: '/real-estate/', photo: 'realestate', layout: 'hub', section: 'hub',
  title: 'BBMP approvals, project compliance and government liaison for developers',
  metaTitle: 'BBMP Plan Approval, Project Compliance & Liaison for Builders in Bangalore | Marvel Consultants',
  desc: 'Marvel Consultants supports builders, developers and landowners in Bengaluru with BBMP and BDA plan approvals, Khata and e-Khata for projects, property tax assessment, documentation and government liaison across the project life-cycle.',
  eyebrow: 'For real estate & developers', crumbLabel: 'Real estate & developers',
  lede: 'Approvals, Khata for every unit, tax assessment, documentation and the office follow-up that keeps a project moving — proven at 350- and 590-unit scale. We work as the documentation partner alongside your architect, advocate and site team.',
  actions: [{ label: 'Talk to a consultant', href: '/contact/#business', cta: 'hub_re_talk' }, { label: 'WhatsApp', href: WA, kind: 'btn-wa', cta: 'hub_re_wa' }],
  image: 'bbmp.jpg',
  blocks: [
    { t: 'section', eyebrow: 'Capabilities', h2: 'What we handle across a project', blocks: [{ t: 'cards', items: [
      { title: 'BBMP & BDA plan approval', href: '/real-estate/bbmp-plan-approval/', text: 'Building plan sanction, plan alteration, layout approval and the eligibility check that comes before drawings — for residential, commercial and mixed projects.', emph: true },
      { title: 'Project compliance & government liaison', href: '/real-estate/project-compliance-liaison/', text: 'Commencement to completion: NOCs, utilities approvals, BBMP correspondence, inspections and the follow-up that closes files.' },
      { title: 'Property documentation for projects', href: '/real-estate/property-documentation/', text: 'Title chain, EC, conversion orders, Khata and tax records for the land parcel — organised, verified and ready for lenders, buyers and authorities.' },
      { title: 'Khata & e-Khata for projects', href: '/bbmp-e-khata-services.html', text: 'Parent Khata, bifurcation into units and e-Khata creation for every flat or site so that buyers can register without delay.' },
      { title: 'Property tax assessment', href: '/bbmp-property-tax-assessment-payment-bengaluru.html', text: 'First assessment of new construction, corrections of usage/area and arrears settlement before handover.' },
      { title: 'B Khata to A Khata for sites', href: '/bbmp/b-khata-to-a-khata-conversion/', text: 'Conversion for eligible sites in layouts, including the documentation for revenue-land origins.' },
    ] }] },
    { t: 'section', alt: true, eyebrow: 'Typical scenarios', h2: 'Where developers bring us in', blocks: [
      { t: 'situations', items: [
        { title: 'Before buying land', text: 'Title, EC, RTC/conversion, Khata and tax verification on the parcel; identifying encumbrances and boundary/measurement gaps before the agreement.' },
        { title: 'Before the plan is drawn', text: 'Eligibility — zoning, road width, Khata status, layout approval — so the architect draws what can actually be sanctioned.' },
        { title: 'During construction', text: 'Correspondence with BBMP on inspections and notices, utility approvals, and keeping the file complete.' },
        { title: 'At handover', text: 'Khata bifurcation and e-Khata for each unit, property tax assessment, and the document set every buyer\'s bank will ask for.' },
        { title: 'Inherited or partitioned land', text: 'Legal-heir and partition documentation, mutation and Khata for the developable parcel.' },
        { title: 'A stalled file', text: 'An approval or Khata that has been pending for months. We find where it is stuck and what the office actually needs to close it.' },
      ] },
      steps([
        { title: 'Scope', text: 'A written scope per stage — what we file, what the architect/advocate files, and what the developer provides.' },
        { title: 'Document the land', text: 'Verified title chain and records before anything is submitted.' },
        { title: 'File & follow', text: 'Applications filed with complete annexures; regular office follow-up; you get a status note, not a shrug.' },
        { title: 'Close & hand over', text: 'Sanctioned plans, Khata and tax records organised for sales, lenders and buyers.' },
      ]),
    ] },
    { t: 'section', eyebrow: 'Case studies', h2: 'Project-scale execution, on the record', text: 'Client names anonymised; published with the developer\'s knowledge. Turnaround figures are completed-project results for Marvel-coordinated work; authority processing remains with the authority.', blocks: [
      { t: 'cards', cols: 2, items: [
        { title: '350-unit residential project — end-to-end e-Khata', text: 'A leading residential developer required land e-Khata, Khata bifurcation and separate e-Khata records for all 350 units of a completed project. We reviewed the land and project documents, coordinated the land e-Khata, completed the bifurcation and managed each unit\'s individual e-Khata application. Delivered within a 45-day turnaround, giving the developer organised, updated municipal records for every unit.', ref: 'Anonymised · with knowledge' },
        { title: '590-unit development — approvals to unit records', text: 'A large residential development needed support across Building Plan Approval, Completion Certificate, Occupancy Certificate, Panchayat e-Khata, Khata bifurcation and individual e-Khata for all 590 units. We coordinated every stage end-to-end and completed the assignment within a 45-day turnaround — structured, unit-wise documentation that supported a smoother handover and future transactions.', ref: 'Anonymised · with knowledge' },
      ] },
      { t: 'trust', items: [['Since 2014', 'working daily with BBMP, BDA and Sub-Registrar offices'], ['940+ units', 'documented across the two projects above alone'], ['All BBMP zones', 'and panchayat offices, with a 14-member team'], ['Sobha · Pashmina', 'among developer teams we have supported']] },
      faq([
        { q: 'Do you replace our architect or advocate?', a: 'No. The architect prepares drawings and the advocate gives the title opinion. We handle the government-facing process — eligibility, documentation, filing, liaison and follow-up — and coordinate with both.' },
        { q: 'Can you get Khata for a project where the parent Khata is B Khata?', a: 'Sometimes. It depends on the layout\'s approval status, conversion and compliance. We assess eligibility for A Khata conversion first; if it is not eligible, we tell you plainly and explain what the B Khata means for buyers.' },
        { q: 'How do you charge for project work?', a: 'A scoped fee per stage or per unit (for Khata/e-Khata work), agreed in writing. Government fees, betterment charges and statutory levies are separate and paid to the authority.' },
        ENGAGEMENT_FAQ[2],
      ], 'Developer FAQs'),
      { t: 'form', kind: 'b2b', id: 'developer', subject: 'Marvel Website — Developer Enquiry', label: 'Talk to a consultant', options: ['BBMP / BDA plan approval', 'Khata / e-Khata for a project', 'Property tax assessment for new construction', 'Land documentation before purchase', 'A pending approval or file', 'Something else'] },
    ] },
  ],
  ctaBand: { title: 'Planning a project, or stuck on one?', text: 'Tell us the site and the stage. We will say what is needed and what is realistic.', actions: [{ label: 'Talk to a consultant', href: '/contact/#business', cta: 'band_re' }, { label: 'WhatsApp', href: WA, kind: 'btn-wa', cta: 'band_re_wa' }] },
});

pages.push({
  path: '/property/', photo: 'property-2', layout: 'hub', section: 'hub',
  title: 'Property owners: Khata, e-Khata, property tax and documents in Bengaluru',
  metaTitle: 'Property Documentation Help in Bangalore — Khata, e-Khata, Tax, Verification | Marvel Consultants',
  desc: 'Simple, reliable help for Bengaluru property owners: e-Khata, Khata transfer, B Khata to A Khata conversion, property tax, document verification before buying, sale readiness, plan approval and NRI property services. Start with your situation.',
  eyebrow: 'For property owners', crumbLabel: 'Property owners',
  lede: 'You do not need to know the name of the government procedure. Tell us what you are trying to do with the property, and we will identify what needs to be done — and help you get it done.',
  actions: [{ label: 'Tell us your property problem', href: '/contact/#problem', cta: 'hub_prop_form' }, { label: 'WhatsApp', href: WA, kind: 'btn-wa', cta: 'hub_prop_wa' }],
  image: 'ekhata-home-keys.jpg',
  blocks: [
    { t: 'section', eyebrow: 'Start with your situation', h2: 'What are you trying to do?', blocks: [{ t: 'cards', items: [
      { img: 'buy', title: 'I am buying a property', href: '/property/buy/', text: 'Title and document verification, Encumbrance Certificate, Khata and tax checks, registration support — before you pay.', more: 'Buyer journey' },
      { img: 'sell', title: 'I am selling a property', href: '/property/sell/', text: 'Khata in your name, e-Khata, tax cleared, EC and documents in order so the buyer\'s bank and registration go through.', more: 'Seller journey' },
      { img: 'own', title: 'I own a property', href: '/property/own/', text: 'e-Khata, Khata transfer after purchase or inheritance, property-tax assessment and corrections to names, measurements or usage.', more: 'Owner journey' },
      { img: 'build', title: 'I am building or developing', href: '/property/build/', text: 'BBMP or BDA plan approval, eligibility of the site, and the permissions that come with construction.', more: 'Build journey' },
      { img: 'resolve', title: 'I have a property problem', href: '/property/resolve/', text: 'Wrong name in records, B Khata, missing tax history, disputed measurements, a stuck application. We diagnose and recommend the next step.', more: 'Resolve journey', emph: true },
      { img: 'nri', title: 'I am an NRI', href: '/property/nri/', text: 'Remote documentation and government services with power of attorney, for owners living outside India.', more: 'NRI journey' },
    ] }, p('<strong>Know the service you need?</strong> <a href="/services/">Browse all services</a> — or read the <a href="/resources/">guides</a> first.')] },
    { t: 'section', alt: true, eyebrow: 'Most requested', h2: 'Property services in Bengaluru', blocks: [{ t: 'ledger', rows: [
      { ref: 'BBMP · e-Aasthi', title: 'BBMP e-Khata', href: '/bbmp-e-khata-services.html', who: 'Create, correct or download your digital Khata; now required for registration in BBMP limits.', items: [['Apply for e-Khata online (guide)', '/blog/e-khata-online-in-bangalore.html'], ['E-Aasthi, A/B Khata explained', '/blog/e-aasthi-a-khata-b-khata-conversion.html'], ['Complete e-Khata guide', '/blog/e-khata-online-bangalore-karnataka-complete-guide.html']], go: 'e-Khata service' },
      { ref: 'BBMP · mutation', title: 'Khata transfer', href: '/property/khata-transfer/', who: 'After purchase, inheritance, gift or partition — get the record into the right name.', items: [['Khata transfer guide', '/blog/khata-transfer-guide.html'], ['BDA Khata transfer', '/blog/bda-khata-transfer-guide.html'], ['Panchayat Khata guide', '/blog/panchayat-khata-guide.html']], go: 'Khata transfer' },
      { ref: 'BBMP · conversion', title: 'B Khata to A Khata conversion', href: '/bbmp/b-khata-to-a-khata-conversion/', who: 'Eligibility check, documentation and application for eligible sites and houses.', items: [['2026 conversion guide', '/blog/bbmp-b-khata-to-a-khata-conversion-bangalore-2026.html'], ['Fees, documents & process', '/blog/b-khata-to-a-khata-conversion-bangalore-fees-documents-process.html']], go: 'Conversion service' },
      { ref: 'BBMP · SAS', title: 'Property tax', href: '/bbmp-property-tax-assessment-payment-bengaluru.html', who: 'Assessment of new property, corrections, arrears and appeals against wrong demands.', items: [['Property tax service', '/bbmp-property-tax-assessment-payment-bengaluru.html']], go: 'Property tax' },
      { ref: 'Due diligence', title: 'Property document verification', href: '/property/document-verification/', who: 'Title chain, EC, Khata, tax and approvals checked before you buy — or before a dispute grows.', items: [['Buyer journey', '/property/buy/'], ['Resolve a property problem', '/property/resolve/']], go: 'Verification' },
    ] }] },
    { t: 'section', alt: true, eyebrow: 'Transparent fees', h2: 'Starting professional fees', text: 'Fixed fees confirmed before work starts. Government fees, stamp duty and statutory charges are always separate and paid to the authority. Complex matters are quoted after a free assessment.', blocks: [
      { t: 'table', head: ['Service', 'Starting professional fee', 'Typical time'], rows: [
        ['e-Khata creation / correction', 'from ₹15,000', '~45 days'],
        ['Khata transfer after purchase', 'from ₹15,000', '~45 days'],
        ['Khata transfer after inheritance', 'from ₹25,000', '~45 days'],
        ['B Khata → A Khata eligibility check', 'Free', '—'],
        ['Property tax correction / arrears', 'from ₹10,000', '~45 days'],
        ['Property document verification (before buying)', 'from ₹30,000', '~15 days'],
      ] },
      p('Timelines are typical completed-case durations for Marvel-coordinated work once the file is complete; authority processing remains with the authority.'),
    ] },
    { t: 'section', eyebrow: 'How it works', h2: 'From "something is wrong" to a corrected record', blocks: [
      steps([
        { title: 'Tell us', text: 'WhatsApp a few lines and photos of what you have — sale deed, tax receipt, Khata, any notice.' },
        { title: 'Assess', text: 'We check the official records and tell you what applies, what is missing and what it will cost. Free.' },
        { title: 'Execute', text: 'We prepare the application, file it, attend the ward or sub-registrar office and answer queries.' },
        { title: 'Complete', text: 'You receive the certificate, extract or corrected record, plus a note of what to keep and renew.' },
      ]),
      faq([
        { q: 'What is a Khata, and why does it matter?', a: 'A Khata is BBMP\'s account of a property for tax and identification — who is liable for property tax, and the property\'s number, size and use. It is not a title document, but it is required for building sanction, most bank loans, utility connections and a clean sale. See the <a href="/glossary/">glossary</a> for A Khata, B Khata, e-Khata, EC and other terms.' },
        { q: 'Which documents should I keep ready for any BBMP application?', a: 'Registered sale deed (or gift/partition/inheritance document), previous title documents, latest Encumbrance Certificate, property-tax-paid receipts, existing Khata certificate/extract if any, and identity and address proof of all owners. Building sanction or conversion orders where applicable.' },
        { q: 'Can I do this myself?', a: 'Often yes for straightforward cases — our guides show how. Owners come to us when records do not match, the property has a history (inheritance, partition, B Khata, revenue land), or an application has been rejected or is stuck.' },
        ...ENGAGEMENT_FAQ,
      ], 'Property owner FAQs'),
    ] },
  ],
});

pages.push({
  path: '/services/', photo: 'consult', layout: 'hub', section: 'hub',
  title: 'All services',
  metaTitle: 'All Services — Property Legal, BBMP & Liaisoning in Bengaluru | Marvel Consultants',
  desc: 'The complete catalogue of Marvel Consultants services in Bengaluru: property legal verification, agreements and deeds, registration support, POA, BBMP e-Khata, Khata transfer, B Khata to A Khata, property tax, plan approval, document verification, NRI property services and business registrations.',
  eyebrow: 'Service catalogue', lede: 'Every service we offer, grouped by who needs it. If you are not sure which applies, start from <a href="/property/">your situation</a> instead.',
  actions: [{ label: 'Not sure? Tell us your situation', href: '/contact/', kind: 'btn-outline', cta: 'services_unsure' }],
  blocks: [
    { t: 'section', tight: true, blocks: [{ t: 'ledger', rows: [
      { ref: 'Property owners', title: 'Khata, e-Khata, tax and documents', href: '/property/', who: 'Individuals, families and NRIs who own, buy, sell or inherit property in Bengaluru.', items: [['BBMP e-Khata (create, correct, download)', '/bbmp-e-khata-services.html'], ['Khata transfer / mutation', '/property/khata-transfer/'], ['B Khata to A Khata conversion', '/bbmp/b-khata-to-a-khata-conversion/'], ['Khata bifurcation & amalgamation', '/property/khata-transfer/#bifurcation'], ['BBMP property tax: assessment, correction, arrears, appeal', '/bbmp-property-tax-assessment-payment-bengaluru.html'], ['Property document verification (title, EC, Khata, tax)', '/property/document-verification/'], ['Encumbrance Certificate & certified copies', '/property/document-verification/#documents'], ['Sale-readiness documentation', '/property/sell/'], ['Buyer due diligence & registration support', '/property/buy/'], ['NRI property services with power of attorney', '/property/nri/'], ['Panchayat / BDA / BMRDA / BIAPPA Khata matters', '/blog/panchayat-khata-vs-e-khata.html']], go: 'Property owners' },
      { ref: 'Real estate & developers', title: 'Approvals, project compliance, liaison', href: '/real-estate/', who: 'Builders, developers, landowners and real-estate businesses.', items: [['BBMP & BDA building plan approval', '/real-estate/bbmp-plan-approval/'], ['Plan alteration & layout approval', '/real-estate/bbmp-plan-approval/'], ['Project compliance & government liaison', '/real-estate/project-compliance-liaison/'], ['Utilities & NOC approvals', '/real-estate/project-compliance-liaison/'], ['Land & title documentation for projects', '/real-estate/property-documentation/'], ['Khata & e-Khata for every unit', '/bbmp-e-khata-services.html'], ['Property tax first assessment', '/bbmp-property-tax-assessment-payment-bengaluru.html'], ['BBMP documentation & trade licence', '/bbmp.html']], go: 'Developers' },
      { ref: 'Legal services', title: 'Verification, agreements, deeds, registration, POA', href: '/legal-services/', who: 'Buyers, sellers, owners, NRIs and developers who need property legal documentation coordinated end-to-end.', items: NAV.legal.items, go: 'Legal services' },
    ] }, p('<strong>Not listed?</strong> If it involves a Bengaluru government office and property, ask — we either do it or tell you who does. <a href="/contact/">Contact us</a>.')] },
  ],
});


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
      { q: 'What happens after registration — do I still need Khata or e-Khata transfer?', a: 'Yes. Registration records the transaction; BBMP\'s record still shows the previous owner until the Khata transfer is filed and the e-Khata and tax account are updated. We handle this as the closing step of the engagement.' },
    ]),
  ],
  updated: SITE.updated,
});

// =====================================================================
// JOURNEYS (property owners)
// =====================================================================
function journey(o) {
  const blocks = [];
  o.intro.forEach(x => blocks.push(p(x)));
  blocks.push(h2('Does this sound like you?', 'situations'));
  blocks.push({ t: 'situations', items: o.situations });
  blocks.push(h2('What usually needs to be done', 'what'));
  blocks.push(steps(o.what, true));
  blocks.push(h2('Documents to gather', 'documents'));
  blocks.push(ul(o.docs));
  if (o.note) blocks.push(note(o.note, o.noteWarn));
  blocks.push(cta(o.ctaTitle, o.ctaText, '/contact/#problem', 'Tell us your situation', 'journey_mid'));
  blocks.push(h2('Services in this journey', 'services'));
  blocks.push({ t: 'cards', cols: 2, items: o.services });
  blocks.push(faq(o.faqs));
  if (o.guides) { blocks.push(h2('Read before you start', 'guides')); blocks.push({ t: 'guides', items: o.guides }); }
  return Object.assign({ layout: 'page', section: 'journey', crumbs: [['Property owners', '/property/']], blocks, updated: SITE.updated, asideTitle: 'Tell us your situation', asideText: 'Two lines and a photo of your documents on WhatsApp is enough to start. Free assessment, same working day.', asideHref: '/contact/#problem', asideCta: 'Tell us your property problem', image: 'ekhata-property-documents.jpg' }, o.page);
}

pages.push(journey({
  page: { path: '/property/buy/', photo: 'buy', title: 'Buying a property in Bengaluru: verify before you pay', metaTitle: 'Buying Property in Bangalore? Document Verification, EC, Khata & Registration Help | Marvel Consultants', desc: 'Before you pay for a property in Bengaluru, verify the title chain, Encumbrance Certificate, Khata (A or B), property tax and approvals. Marvel Consultants does the due diligence and supports registration and Khata transfer after purchase.', crumbLabel: 'Buying', eyebrow: 'Property owners · buying' },
  intro: ['Most property problems in Bengaluru are bought, not created. A site with a B Khata, a flat whose parent Khata was never bifurcated, a seller whose name does not match the tax record, an Encumbrance Certificate with a gap year — each of these is cheap to find before the agreement and expensive to fix after registration.', 'This journey covers the checks we run for buyers, what to ask the seller for, and what has to happen after registration so the property is genuinely yours in the government record, not just in the deed.'],
  situations: [
    { title: 'You have shortlisted a flat or site and the seller is pushing for a token advance', text: 'Verify first. A token paid before the documents are checked is the most common way buyers lose leverage.' },
    { title: 'The seller says "A Khata is in process" or "e-Khata will be done after sale"', text: 'These are not small details. Without e-Khata the registration may not go through; without A Khata your loan and plan approval may not.' },
    { title: 'Your bank has asked for documents you have never heard of', text: 'Mother deed, EC for 15–30 years, conversion order, sanctioned plan, occupancy certificate, Khata extract — we assemble and explain the set.' },
    { title: 'You are buying from a builder or in a new layout', text: 'Layout approval, parent Khata, bifurcation status and whether the unit can get its own e-Khata are the questions that matter.' },
    { title: 'You are buying inherited or family property', text: 'Legal-heir documents, partition or release deeds, and whether every heir is signing — or has a claim.' },
    { title: 'You already registered and now something does not match', text: 'Go to the <a href="/property/resolve/">resolve journey</a>; most post-purchase problems have a defined correction route.' },
  ],
  what: [
    { title: 'Document verification', text: 'We examine the title chain (mother deed to current owner), the Encumbrance Certificate for the full period, Khata certificate and extract, tax-paid receipts, and — for constructed property — the sanctioned plan and occupancy certificate. You get a written note of what is clean, what is missing and what is a risk.' },
    { title: 'Official record checks', text: 'Khata status (A or B), e-Khata existence and details on BBMP\'s e-Aasthi system, tax arrears, layout approval and, for converted land, the conversion order. Records are checked at source, not taken from the seller\'s file.' },
    { title: 'Agreement and registration support', text: 'The document set for the sub-registrar office, stamp duty and registration fee calculation on guidance value, and coordination on the day of registration.' },
    { title: 'After registration: Khata transfer and tax', text: 'The sale deed alone does not update BBMP\'s record. We file the Khata transfer (mutation) and update the property-tax account so notices and receipts come in your name. See <a href="/property/khata-transfer/">Khata transfer</a>.' },
  ],
  docs: ['Copies of the seller\'s sale deed and all prior title deeds (the "chain")', 'Encumbrance Certificate — we advise the period (typically 15–30 years)', 'Khata certificate and Khata extract; e-Khata printout from e-Aasthi if available', 'Latest property-tax-paid receipt and tax account details', 'For flats: sanctioned plan, occupancy certificate, parent Khata and bifurcation status', 'For sites: layout approval, conversion order (if revenue land), survey sketch', 'Seller identity proof and, where relevant, legal-heir or partition documents'],
  note: '<strong>A Khata is not a title document.</strong> It tells you the property is on BBMP\'s tax register, not that the seller owns it. Title comes from the deeds and the EC; Khata and tax records confirm the property is regular and up to date. Buyers need both checks.',
  ctaTitle: 'Send us the documents the seller has shared', ctaText: 'We will tell you within a working day whether the set is complete, what is missing, and whether anything in it should stop you.',
  services: [
    { title: 'Property document verification', href: '/property/document-verification/', text: 'Title chain, EC, Khata, tax and approvals reviewed with a written risk note.' },
    { title: 'Khata transfer after purchase', href: '/property/khata-transfer/', text: 'Mutation into your name at the BBMP ward office, with tax account update.' },
    { title: 'BBMP e-Khata', href: '/bbmp-e-khata-services.html', text: 'Confirm or create the e-Khata the registration will require.' },
    { title: 'B Khata to A Khata (if eligible)', href: '/bbmp/b-khata-to-a-khata-conversion/', text: 'For sites and houses whose Khata status is holding back a loan or plan approval.' },
  ],
  faqs: [
    { q: 'How many years of Encumbrance Certificate should I check when buying in Bengaluru?', a: 'At least 15 years is the common bank requirement; for older properties or where the title chain has several transfers, we recommend 30 years so every transaction in the chain appears on the EC. EC is obtained from the sub-registrar office online through Kaveri or in person.' },
    { q: 'Is it safe to buy a B Khata property?', a: 'It can be, at the right price and with eyes open: loans are harder, building plan sanction is generally not available, and resale is slower. Some B Khata properties are eligible for conversion to A Khata; we check eligibility before you decide, so the price reflects the reality.' },
    { q: 'Can registration happen without e-Khata?', a: 'Within BBMP limits the sub-registrar now requires the e-Khata (e-Aasthi) reference for the property. If the seller does not have one, it should be created before the sale date — this is a seller-side task that buyers should insist on.' },
    { q: 'What does document verification cost?', a: 'A fixed fee agreed after we see the size of the document set; it is a small fraction of stamp duty. Government fees for EC and certified copies are separate.' },
  ],
  guides: [OLD_GUIDES[2], OLD_GUIDES[3], OLD_GUIDES[7], OLD_GUIDES[5]],
}));

pages.push(journey({
  page: { path: '/property/sell/', photo: 'sell', title: 'Selling a property in Bengaluru: get the documents sale-ready', metaTitle: 'Selling Property in Bangalore — Khata, e-Khata, Tax & Documents Sale-Ready | Marvel Consultants', desc: 'Sell without last-minute delays: Khata in your name, e-Khata created, property tax cleared, Encumbrance Certificate and title documents in order so the buyer\'s bank and the sub-registrar have no objections. Marvel Consultants prepares the set.', crumbLabel: 'Selling', eyebrow: 'Property owners · selling' },
  intro: ['A sale in Bengaluru fails or stalls for boring reasons: the Khata is still in a previous owner\'s name, the property has no e-Khata, tax has arrears or the wrong built-up area, the EC shows an old loan that was never released. Buyers\' banks find these in days; sellers discover them after the token is paid.', 'This journey is the seller\'s checklist — what a buyer and their bank will ask for, and what you can fix before you list the property.'],
  situations: [
    { title: 'You inherited or were gifted the property and never transferred the Khata', text: 'Buyers will require the Khata and tax record in your name. This is a Khata transfer with legal-heir or gift documentation first.' },
    { title: 'The property has only a paper Khata or none on e-Aasthi', text: 'e-Khata is needed for registration in BBMP limits. Create or correct it before listing.' },
    { title: 'There is an old home loan on the EC', text: 'A release/discharge deed must be registered; otherwise the EC keeps showing the charge and the buyer\'s bank will refuse.' },
    { title: 'The built-up area or usage in the tax record is wrong', text: 'Correct the property-tax assessment first; buyers\' banks compare it with the sanctioned plan.' },
    { title: 'You are selling a B Khata site', text: 'Check conversion eligibility — an A Khata often moves the price more than the conversion costs.' },
    { title: 'You are an NRI seller', text: 'Power of attorney, TDS on the sale and remote execution — see the <a href="/property/nri/">NRI journey</a>.' },
  ],
  what: [
    { title: 'Seller-side document audit', text: 'We review your title chain, EC, Khata, e-Khata and tax record as a buyer\'s bank would, and list the gaps.' },
    { title: 'Fix the record', text: 'Khata transfer into your name, e-Khata creation or correction, property-tax correction and arrears clearance, release deed for closed loans, certified copies of missing deeds.' },
    { title: 'Assemble the sale file', text: 'A complete set — deeds, EC, Khata extract, e-Khata, tax receipts, sanctioned plan/OC where applicable — so the buyer has no reason to renegotiate.' },
    { title: 'Registration day', text: 'Stamp duty and registration fee on guidance value, sub-registrar coordination, and the post-sale hand-over note for the buyer\'s Khata transfer.' },
  ],
  docs: ['Your sale deed / gift deed / partition deed / inheritance documents', 'Prior title deeds (mother deed and chain)', 'Khata certificate and extract; e-Khata details', 'Property-tax-paid receipts for recent years', 'Encumbrance Certificate for the period you have owned it (and earlier)', 'Loan closure letter and release deed, if a loan was taken', 'Sanctioned plan and occupancy certificate for constructed property', 'Identity proof; power of attorney if you are not signing in person'],
  ctaTitle: 'Planning to list in the next few months?', ctaText: 'Send us what you have. We will tell you what a buyer\'s bank will object to and how long each fix takes — before the buyer finds it.',
  services: [
    { title: 'Khata transfer', href: '/property/khata-transfer/', text: 'Into your name after inheritance, gift or an old purchase.' },
    { title: 'BBMP e-Khata', href: '/bbmp-e-khata-services.html', text: 'Create or correct the e-Khata the registration will require.' },
    { title: 'Property tax correction & arrears', href: '/bbmp-property-tax-assessment-payment-bengaluru.html', text: 'Fix area, usage and arrears so the tax record matches the property.' },
    { title: 'Document verification', href: '/property/document-verification/', text: 'A seller-side audit — the same checks the buyer\'s bank will run.' },
  ],
  faqs: [
    { q: 'How long before listing should I start fixing the documents?', a: 'Two to three months is comfortable for Khata transfer and e-Khata; longer if a B Khata conversion or a legal-heir process is involved. Simple corrections take weeks. Start when you decide to sell, not when you find a buyer.' },
    { q: 'Do I need e-Khata to sell if the buyer is paying cash?', a: 'Yes — e-Khata is tied to registration at the sub-registrar office, not to the buyer\'s financing. Registration within BBMP limits needs it either way.' },
    { q: 'The Khata is in my late parent\'s name. Can I sell?', a: 'You need the Khata transferred to the legal heirs (all of them, or with the others\' release) before a clean sale. We handle the documentation and the ward-office application; a family settlement or release deed may need registration first.' },
  ],
  guides: [OLD_GUIDES[7], OLD_GUIDES[2], OLD_GUIDES[0]],
}));

pages.push(journey({
  page: { path: '/property/own/', photo: 'own', title: 'Owning property in Bengaluru: keep the record right', metaTitle: 'Property Owners in Bangalore — e-Khata, Khata Transfer, Property Tax, Corrections | Marvel Consultants', desc: 'Own a house, flat or site in Bengaluru? Keep the BBMP record correct: e-Khata, Khata transfer after purchase or inheritance, property-tax assessment and corrections to names, area or usage. Marvel Consultants handles the applications and follow-up.', crumbLabel: 'Owning', eyebrow: 'Property owners · owning' },
  intro: ['Ownership in Bengaluru has two layers: the registered deed, and BBMP\'s record of the property — Khata, e-Khata and the property-tax account. The deed rarely changes; the record must be kept current every time something happens: you buy, a parent passes away, you build, you extend, you rent to a business, or the city redraws a ward.', 'This journey covers the routine and not-so-routine tasks of keeping the record right, so that when you need a loan, a sanction or a sale, nothing is waiting to be fixed.'],
  situations: [
    { title: 'You bought recently and the Khata is still in the seller\'s name', text: 'File the Khata transfer now; tax notices and the official record follow the Khata, not the deed.' },
    { title: 'You have a paper Khata but nothing on e-Aasthi', text: 'Create the e-Khata — it is needed for registration, and increasingly for other BBMP services.' },
    { title: 'Your e-Khata shows the wrong name, spelling, dimensions or property number', text: 'Corrections go through BBMP with supporting documents; better done now than at sale time.' },
    { title: 'You built, extended or changed the use of the property', text: 'The property-tax assessment must be revised; under-declared area is a common reason for later demands with penalty.' },
    { title: 'You received a property-tax demand that looks wrong', text: 'Assessment corrections and appeals exist — but they are time-bound.' },
    { title: 'The property came to you by inheritance or partition', text: 'Khata transfer with legal-heir documents, and bifurcation if the property is being divided among heirs.' },
  ],
  what: [
    { title: 'Record check', text: 'We pull the current Khata, e-Khata and tax details from BBMP\'s systems and compare them with your deed and tax receipts.' },
    { title: 'Corrections and transfers', text: 'Khata transfer, e-Khata creation or correction, name/area/usage corrections, bifurcation or amalgamation — each with the ward-office paperwork it needs.' },
    { title: 'Property tax', text: 'Self-assessment for new or changed property, correction of past years, arrears settlement and appeals.' },
    { title: 'Keep it current', text: 'A one-page record of what is on file, plus reminders for tax due dates.' },
  ],
  docs: ['Registered sale deed / gift deed / partition deed / will and legal-heir certificate', 'Existing Khata certificate and extract, if any', 'Property-tax-paid receipts', 'Encumbrance Certificate (latest)', 'Sanctioned plan / occupancy certificate for buildings', 'Identity and address proof of all owners'],
  ctaTitle: 'Not sure what your record actually says?', ctaText: 'Share your Khata or tax receipt on WhatsApp. We will check the BBMP record against it and tell you if anything needs fixing.',
  services: [
    { title: 'BBMP e-Khata', href: '/bbmp-e-khata-services.html', text: 'Create, correct or download your e-Khata.' },
    { title: 'Khata transfer, bifurcation, amalgamation', href: '/property/khata-transfer/', text: 'After purchase, inheritance, gift, partition or merger of sites.' },
    { title: 'Property tax', href: '/bbmp-property-tax-assessment-payment-bengaluru.html', text: 'Assessment, corrections, arrears and appeals.' },
    { title: 'B Khata to A Khata', href: '/bbmp/b-khata-to-a-khata-conversion/', text: 'For eligible properties that need A Khata for a loan or sanction.' },
  ],
  faqs: [
    { q: 'What is the difference between a Khata certificate and a Khata extract?', a: 'The certificate confirms that a Khata exists in a named owner\'s name for a property; the extract gives the details recorded — property number, dimensions, built-up area, use and tax assessment. Banks and buyers usually want both.' },
    { q: 'How do I check if my property has an e-Khata?', a: 'Search on BBMP\'s e-Aasthi portal using the property identification details or owner name; the guide <a href="/blog/e-khata-online-in-bangalore.html">How to apply for BBMP e-Khata online</a> walks through it. If nothing appears, or the details are wrong, the e-Khata needs to be created or corrected.' },
    { q: 'I pay property tax every year. Does that mean my Khata is fine?', a: 'Not necessarily. Tax can be paid on a B Khata property, or in a previous owner\'s name. Tax receipts prove payment, not ownership or regularity — check the Khata and e-Khata separately.' },
  ],
  guides: [OLD_GUIDES[7], OLD_GUIDES[2], OLD_GUIDES[4], OLD_GUIDES[5]],
}));

pages.push(journey({
  page: { path: '/property/build/', photo: 'build', title: 'Building on your site in Bengaluru: approvals before construction', metaTitle: 'BBMP Building Plan Approval for Your Site in Bangalore — Eligibility & Process | Marvel Consultants', desc: 'Building a house or extending in Bengaluru? Check whether your site can get BBMP or BDA plan sanction, what documents and Khata status are required, and how the approval process works. Marvel Consultants handles eligibility, filing and follow-up.', crumbLabel: 'Building', eyebrow: 'Property owners · building' },
  intro: ['Construction without sanction is the most expensive shortcut in Bengaluru: it blocks the occupancy certificate, complicates the property-tax assessment, weakens resale and exposes the building to notices. But sanction is not automatic — the site\'s Khata, the layout\'s approval status, road width and setbacks decide whether a plan can be sanctioned at all.', 'This journey is for individual owners building or extending on their own site. Developers and builders should see the <a href="/real-estate/">real estate section</a>.'],
  situations: [
    { title: 'You own a site and want to build a house', text: 'The first question is eligibility — A Khata, approved layout, road width. Then drawings, then sanction.' },
    { title: 'You want to add a floor or extend', text: 'Plan alteration or a fresh sanction depending on the extent; the existing sanction and tax record must be in order.' },
    { title: 'Your site is B Khata or in a revenue layout', text: 'Sanction is generally not available; conversion to A Khata (if eligible) comes first. We tell you honestly if it is not.' },
    { title: 'Your architect has asked for documents you do not have', text: 'Khata extract, tax receipts, EC, conversion order, layout approval, survey sketch — we assemble the set.' },
    { title: 'You built already and now need to regularise or get an OC', text: 'Depends on the extent of deviation; we assess what is achievable and what is not.' },
  ],
  what: [
    { title: 'Eligibility check', text: 'Khata status, layout approval, zoning/land use, road width, site dimensions and any pending tax — before you pay for drawings.' },
    { title: 'Document set', text: 'Title deed, Khata certificate and extract, e-Khata, tax-paid receipt, EC, survey sketch, conversion order where applicable, and owner identity.' },
    { title: 'Application and sanction', text: 'Filing through BBMP\'s online building-plan system with the architect\'s drawings, fee calculation, response to scrutiny remarks, and follow-up to sanction.' },
    { title: 'After sanction', text: 'Commencement, inspections where required, completion/occupancy certificate, and first property-tax assessment of the new building.' },
  ],
  docs: ['Registered title deed and prior deeds', 'Khata certificate and extract (A Khata) and e-Khata', 'Latest property-tax-paid receipt', 'Encumbrance Certificate', 'Survey sketch / site plan; layout approval or conversion order', 'Architect\'s drawings prepared to BBMP bye-laws', 'Identity proof of all owners; consent where there are co-owners'],
  note: 'We do not prepare architectural drawings — a registered architect or engineer does. We handle eligibility, documentation, filing, scrutiny responses and office follow-up, and coordinate with your architect.',
  ctaTitle: 'Have a site and a plan in mind?', ctaText: 'Send the Khata and a tax receipt. We will tell you whether sanction is realistic before you spend on drawings.',
  services: [
    { title: 'BBMP & BDA plan approval', href: '/real-estate/bbmp-plan-approval/', text: 'Eligibility, filing, scrutiny and follow-up to sanction.' },
    { title: 'B Khata to A Khata conversion', href: '/bbmp/b-khata-to-a-khata-conversion/', text: 'Often the prerequisite for sanction on layout sites.' },
    { title: 'Property tax assessment', href: '/bbmp-property-tax-assessment-payment-bengaluru.html', text: 'First assessment of the new building after completion.' },
    { title: 'BBMP documentation & approvals', href: '/bbmp.html', text: 'Certified copies, EC and the wider BBMP approvals list.' },
  ],
  faqs: [
    { q: 'Can I get plan sanction on a B Khata site?', a: 'Generally no. BBMP building plan sanction is tied to A Khata / regular properties in approved layouts. For eligible sites the route is conversion to A Khata first; for others, we tell you plainly that sanction is not available and what the alternatives are.' },
    { q: 'What decides whether my site is eligible?', a: 'Khata status, whether the layout is approved (BDA/BMRDA/BBMP), the land-use zone, road width in front of the site, site dimensions and setbacks under the bye-laws, and whether tax is fully paid. We check each before filing.' },
    { q: 'How long does BBMP plan approval take?', a: 'It varies with the site, the completeness of the file and scrutiny remarks; we give a realistic estimate after the eligibility check rather than a generic number.' },
  ],
  guides: [OLD_GUIDES[0], OLD_GUIDES[1]],
}));

pages.push(journey({
  page: { path: '/property/resolve/', photo: 'resolve', title: 'Fix a property problem in Bengaluru: diagnosis first', metaTitle: 'Property Record Problems in Bangalore — Wrong Name, B Khata, Missing Records, Stuck Applications | Marvel Consultants', desc: 'Name mismatch across sale deed and Khata, B Khata, missing tax history, wrong measurements, rejected or stuck BBMP applications — Marvel Consultants diagnoses the actual problem in Bengaluru property records and recommends the right correction route.', crumbLabel: 'Resolving', eyebrow: 'Property owners · resolving a problem' },
  intro: ['Property problems rarely announce themselves by name. What you see is a rejected application, a bank that will not lend, a buyer who walked away, or a tax notice for the wrong amount. Underneath is usually one of a small number of record defects — and each has a defined correction route once it is identified correctly.', 'This is the journey for "something is wrong and I do not know what". We diagnose from the documents, tell you what the actual defect is, and what fixing it takes. Sometimes the answer is that nothing needs fixing.'],
  situations: [
    { title: 'The name on the Khata or tax record does not match the sale deed', text: 'Spelling, initials, missing middle name or a previous owner entirely — corrected through BBMP with the deed and identity documents.' },
    { title: 'The property is B Khata and you did not know', text: 'Check conversion eligibility; if not eligible, understand what it means for loans, sanction and sale.' },
    { title: 'Property-tax history is missing or has a gap', text: 'Arrears and reassessment — with the paperwork to show what was actually paid.' },
    { title: 'Dimensions or built-up area in the record differ from the deed or the plan', text: 'A correction application with the survey sketch and sanctioned plan.' },
    { title: 'An application was rejected or has been "in process" for months', text: 'We find the actual objection or the desk it is sitting on, and what closes it.' },
    { title: 'Inheritance with several heirs, or a partition never recorded', text: 'Legal-heir documentation, release or partition deed, and Khata transfer or bifurcation.' },
    { title: 'A flat with no e-Khata because the parent Khata was never bifurcated', text: 'A project-level problem that individual owners can still push forward, with the right documents.' },
    { title: 'A notice from BBMP you do not understand', text: 'Send it. We read it and tell you what it requires and by when.' },
  ],
  what: [
    { title: 'Diagnosis', text: 'You send the documents and the symptom. We check the official records and identify the defect — in writing, in plain language.' },
    { title: 'Recommendation', text: 'The correction route, what it costs, how long it realistically takes, and whether you can do it yourself.' },
    { title: 'Execution', text: 'If you engage us: the application, the ward or zonal office, the follow-up, and the queries.' },
    { title: 'Closure', text: 'The corrected record, plus a note of anything else we found that you should fix while at it.' },
  ],
  docs: ['Whatever you have: sale deed, Khata, tax receipts, EC, notices, rejection letters, application acknowledgements', 'For inheritance: death certificate, legal-heir/succession documents, family tree', 'For measurements: survey sketch, sanctioned plan'],
  note: '<strong>We say no when no is the answer.</strong> Some defects cannot be corrected at the ward office — a genuinely unauthorised layout, a title dispute, a building far outside the sanction. In those cases we tell you what the realistic options are, including when you need an advocate rather than a consultant.', noteWarn: true,
  ctaTitle: 'Describe the symptom, not the cure', ctaText: 'Tell us what happened — the rejection, the bank\'s objection, the notice. We will work out what it actually is.',
  services: [
    { title: 'Document verification & diagnosis', href: '/property/document-verification/', text: 'A written note of what is wrong and what fixes it.' },
    { title: 'Khata transfer & corrections', href: '/property/khata-transfer/', text: 'Names, heirs, bifurcation, amalgamation.' },
    { title: 'e-Khata corrections', href: '/bbmp-e-khata-services.html', text: 'Wrong details on e-Aasthi.' },
    { title: 'Property tax corrections & appeals', href: '/bbmp-property-tax-assessment-payment-bengaluru.html', text: 'Wrong demands, arrears, reassessment.' },
  ],
  faqs: [
    { q: 'My BBMP application was rejected. Can it be re-filed?', a: 'Usually yes, once the reason for rejection is addressed — most rejections are for missing or mismatched documents rather than ineligibility. We obtain the actual objection and re-file with the gap closed.' },
    { q: 'How do I know if a problem needs a lawyer or a consultant?', a: 'Disputes over who owns the property, court cases and contested wills need an advocate. Record defects — names, Khata, tax, e-Khata, measurements, approvals — are consultant work. If you are unsure, send it to us; we will tell you which, and refer you if it is the former.' },
    { q: 'Is the diagnosis free?', a: 'The first assessment is free. If the case needs a detailed record search or certified copies, we quote that before doing it.' },
  ],
  guides: [OLD_GUIDES[9], OLD_GUIDES[3], OLD_GUIDES[7], OLD_GUIDES[5]],
}));

pages.push(journey({
  page: { path: '/property/nri/', photo: 'nri', title: 'NRI property services in Bengaluru: handled remotely', metaTitle: 'NRI Property Services in Bangalore — Khata, e-Khata, Tax, Documentation with Power of Attorney | Marvel Consultants', desc: 'Living outside India and own property in Bengaluru? Marvel Consultants handles Khata transfer, e-Khata, property tax, document verification, sale readiness and BBMP applications remotely, working with a registered power of attorney. Clear updates by WhatsApp and email.', crumbLabel: 'NRI owners', eyebrow: 'Property owners · NRI' },
  intro: ['Bengaluru property owned from abroad accumulates problems quietly: tax in a relative\'s name, a Khata never transferred after a parent\'s passing, an e-Khata that was never created, a tenant who changed the use. Each is fixable — but the government offices need documents, signatures and presence that an NRI cannot easily give.', 'We act as the owner\'s representative in Bengaluru: assembling the documents, coordinating the power of attorney, filing, attending the office and reporting back, so that the matter progresses in your time zone as well as ours.'],
  situations: [
    { title: 'You inherited property in Bengaluru and the record is still in a parent\'s name', text: 'Legal-heir documentation and Khata transfer, coordinated with family members in India.' },
    { title: 'You want to sell and need the documents in order first', text: 'The <a href="/property/sell/">seller checklist</a> — done for you, with a POA holder executing where needed.' },
    { title: 'You are buying and cannot be here for the checks', text: 'Verification and registration support with a registered POA.' },
    { title: 'Property tax has not been paid, or is in the wrong name', text: 'Arrears, corrections and a clean account going forward.' },
    { title: 'You need a power of attorney that will be accepted here', text: 'Drafting guidance, execution abroad, and adjudication/registration in Karnataka so offices accept it.' },
    { title: 'You just want someone to check that everything is fine', text: 'A record audit — Khata, e-Khata, tax, EC — with a written status report.' },
  ],
  what: [
    { title: 'Remote assessment', text: 'Scanned documents by email or WhatsApp; we check the Bengaluru records and report what needs doing.' },
    { title: 'Power of attorney', text: 'We advise on the scope, execution before the Indian consulate or a notary abroad, and adjudication and registration in Karnataka. The POA holder can be a trusted relative or, for specific acts, arranged through us.' },
    { title: 'Execution', text: 'Applications, ward-office attendance, sub-registrar coordination, tax payments — with photographs of every acknowledgement.' },
    { title: 'Reporting', text: 'Status updates on WhatsApp/email at each step, and a closing file you can keep abroad.' },
  ],
  docs: ['Scans of title deeds, Khata, tax receipts, EC and any notices', 'Passport and overseas address proof; PAN', 'Legal-heir documents for inherited property', 'Power of attorney (we guide the drafting and execution)'],
  note: 'Tax on sale by an NRI (TDS deducted by the buyer, lower-deduction certificates, repatriation) is a tax-advisory matter; we coordinate with your chartered accountant, or advise on the compliance steps where they fall within our practice.',
  ctaTitle: 'Send scans; we will do the rest', ctaText: 'Tell us the situation and where you are. We will reply with what is needed, what it costs and a realistic timeline — by email or WhatsApp, at a time that suits your zone.',
  services: [
    { title: 'Khata transfer (inheritance, purchase)', href: '/property/khata-transfer/', text: 'Into your name, with legal-heir documentation where needed.' },
    { title: 'e-Khata creation & correction', href: '/bbmp-e-khata-services.html', text: 'Required for any future registration.' },
    { title: 'Property tax', href: '/bbmp-property-tax-assessment-payment-bengaluru.html', text: 'Arrears, corrections, ongoing payment.' },
    { title: 'Document verification', href: '/property/document-verification/', text: 'A record audit with a written status report.' },
  ],
  faqs: [
    { q: 'Does a power of attorney executed abroad work in Bengaluru?', a: 'Yes, if executed correctly (before the Indian consulate or a notary with apostille, as applicable) and then adjudicated/stamped and, where required, registered in Karnataka within the prescribed time after it reaches India. We guide the format so offices here accept it.' },
    { q: 'Can you pay my BBMP property tax for me?', a: 'Property tax is paid online; we can compute the correct amount, correct the assessment where it is wrong, and coordinate payment with you or your POA holder. We do not hold client funds.' },
    { q: 'How do we communicate?', a: 'WhatsApp and email, with calls scheduled to your time zone. Every filing and acknowledgement is photographed and shared.' },
  ],
  guides: [OLD_GUIDES[7], OLD_GUIDES[2], OLD_GUIDES[0]],
}));

// =====================================================================
// SERVICE PAGES — property
// =====================================================================
pages.push(service({
  page: { path: '/property/khata-transfer/', photo: 'property-2', title: 'Khata transfer in Bengaluru (BBMP mutation)', metaTitle: 'Khata Transfer in Bangalore — BBMP Mutation After Purchase, Inheritance, Gift | Marvel Consultants', desc: 'Get the BBMP Khata transferred to your name after a purchase, inheritance, gift or partition. Documents, process, fees, timelines and the mistakes that cause rejection — and Marvel Consultants\' end-to-end Khata transfer service in Bengaluru.', crumbs: [['Property owners', '/property/']], crumbLabel: 'Khata transfer', eyebrow: 'Property owners · service', lede: 'The sale deed makes you the owner; the Khata transfer makes BBMP\'s record say so. Until it is done, tax notices, the e-Khata and every future application still point at the previous owner.', actions: [{ label: 'Start a Khata transfer', href: '/contact/#problem', cta: 'svc_khata_start' }, { label: 'WhatsApp', href: WA, kind: 'btn-wa', cta: 'svc_khata_wa' }], service: { name: 'Khata transfer (BBMP mutation)', type: 'Property documentation service', offer: 'From ₹15,000 (purchase) / ₹25,000 (inheritance) professional fee; typically ~45 days. Government fees separate.' }, related: [['Khata transfer guide', '/blog/khata-transfer-guide.html'], ['BDA Khata transfer guide', '/blog/bda-khata-transfer-guide.html'], ['BBMP e-Khata services', '/bbmp-e-khata-services.html'], ['Property tax', '/bbmp-property-tax-assessment-payment-bengaluru.html']], image: 'ekhata-property-documents.jpg' },
  intro: ['Khata transfer — also called mutation — is BBMP\'s process for recording a change of ownership in the property register. It is required after every transfer of ownership: sale, gift, inheritance, partition, release or court decree. It is different from registration at the sub-registrar office, which records the transaction; transfer updates who is liable for property tax and who the Khata is issued to.'],
  forWhom: ['Buyers whose Khata and tax receipts are still in the seller\'s name', 'Legal heirs after the death of the recorded owner', 'Recipients under a gift deed or a family settlement', 'Co-owners dividing a property (bifurcation) or merging sites (amalgamation)', 'Owners of flats where the parent Khata was never bifurcated into units'],
  when: [
    { title: 'After purchase', text: 'Apply as soon as the sale deed is registered; tax and e-Khata follow the Khata.' },
    { title: 'After a death in the family', text: 'Transfer to legal heirs with the death certificate and succession documents; a release deed if some heirs are giving up their share.' },
    { title: 'Before a sale', text: 'Buyers\' banks will not proceed if the Khata is in a previous owner\'s name.' },
    { title: 'Before a loan or plan sanction', text: 'Both require the Khata in the applicant\'s name.' },
  ],
  whatWeDo: ['Check the current Khata, e-Khata and tax record against your deed and identify mismatches before filing', 'Prepare the application with the correct BBMP form and annexures for your type of transfer', 'Compute the transfer fee and arrange the affidavits and indemnities the ward office requires', 'File at the ward/zonal office (or online where the service is available), attend for verification and respond to queries', 'Follow up to issue of the Khata certificate and extract, then update the property-tax account and e-Khata', 'Handle bifurcation or amalgamation where the property is being divided or merged'],
  docs: ['Registered sale deed / gift deed / partition deed / release deed / will and probate or succession certificate', 'Previous Khata certificate and extract (in the previous owner\'s name)', 'Latest property-tax-paid receipt', 'Encumbrance Certificate for the recent period', 'Death certificate and legal-heir / family-tree documents for inheritance', 'Identity and address proof of the applicant(s); passport-size photographs', 'Affidavit / indemnity bond in the prescribed format, where required'],
  docsNote: 'The ward office checks that the name, property number and dimensions match across every document. Most rejections come from a mismatch — an initial missing, a site number written differently, a built-up area that differs from the tax record. We reconcile these before filing.',
  process: [
    { title: 'Record check', text: 'We obtain the existing Khata details and tax status and compare them with your deed.' },
    { title: 'Documentation', text: 'Application, annexures, affidavits; corrections identified and fixed first where possible.' },
    { title: 'Filing and fee', text: 'Submission at the jurisdictional BBMP office; transfer fee paid (a percentage of the stamp duty paid on the deed, as prescribed).' },
    { title: 'Verification', text: 'Office scrutiny and, where required, site or document verification; we respond to queries.' },
    { title: 'Issue', text: 'Khata certificate and extract issued in your name; we update the tax account and e-Khata.' },
  ],
  timeline: ['<strong>Starting professional fees:</strong> Khata transfer after purchase from ₹15,000; after inheritance from ₹25,000. Typical completion: about 45 days once the file is complete — inheritance and partition cases can take longer because of the additional documents.', 'BBMP\'s transfer fee is prescribed as a percentage of the stamp duty paid on the transfer document and is paid to BBMP. Our professional fee is fixed and confirmed before we start.'],
  issues: ['Name spelt differently in the sale deed, tax record and Aadhaar', 'Property number or dimensions differing between the deed and the Khata', 'Tax arrears in the previous owner\'s name', 'Parent Khata of an apartment never bifurcated, so the flat cannot get its own Khata', 'Missing link in the chain — a gift or release deed that was never registered', 'Heirs who have not signed a release, or a will that needs probate'],
  why: ['We have filed these applications at BBMP ward offices across Bengaluru for over a decade and know what each office asks for', 'Mismatches are found and fixed before filing, so the application is not rejected and re-queued', 'We handle the related steps — e-Khata and tax account — not only the transfer', 'Fixed fee, agreed in advance; BBMP fees paid to BBMP'],
  faqs: [
    { q: 'What is the difference between Khata transfer and Khata registration?', a: 'Khata registration creates a Khata for a property that has none (for example a newly formed site or a flat after bifurcation). Khata transfer changes the name on an existing Khata after ownership changes. Both go through BBMP; the documents differ.' },
    { q: 'Can Khata transfer be done online in Bengaluru?', a: 'BBMP has moved parts of the Khata process online through its e-Aasthi / Sakala-linked services, and e-Khata transfer is available for properties already on e-Aasthi. Paper Khata, inheritance and partition cases still involve the ward office. We use whichever route applies to your property.' },
    { q: 'How much does Khata transfer cost?', a: 'BBMP\'s fee is a prescribed percentage of the stamp duty paid on your deed. Our professional fee depends on the case type — sale, inheritance, bifurcation — and is quoted after we see the documents. There are no hidden "facilitation" charges.' },
    { q: 'Do I need Khata transfer for a flat?', a: 'Yes. Each flat should have its own Khata (bifurcated from the parent Khata of the building) and, within BBMP limits, its own e-Khata. If the builder never bifurcated the parent Khata, that has to be resolved first.' },
  ],
}));

pages.push(service({
  page: { path: '/property/document-verification/', photo: 'property-2', title: 'Property document verification in Bengaluru', metaTitle: 'Property Document Verification in Bangalore — Title, EC, Khata, Tax Check Before You Buy | Marvel Consultants', desc: 'Independent verification of property documents in Bengaluru: title chain, Encumbrance Certificate, Khata and e-Khata status, property tax, layout approval, sanctioned plan and occupancy certificate — with a written risk note. For buyers, sellers, lenders and owners resolving a problem.', crumbs: [['Property owners', '/property/']], crumbLabel: 'Document verification', eyebrow: 'Property owners · service', lede: 'A written answer to the only question that matters before you pay: is this property what the seller says it is, in the records that count?', actions: [{ label: 'Get documents verified', href: '/contact/#problem', cta: 'svc_verify_start' }, { label: 'WhatsApp', href: WA, kind: 'btn-wa', cta: 'svc_verify_wa' }], service: { name: 'Property document verification', type: 'Due diligence', offer: 'From ₹30,000 professional fee; typically ~15 days. Government fees separate.' }, related: [['Buying a property', '/property/buy/'], ['Resolve a property problem', '/property/resolve/'], ['BBMP documentation services', '/bbmp.html'], ['Panchayat Khata vs e-Khata', '/blog/panchayat-khata-vs-e-khata.html']], image: 'bbmp-ekhata-documents-required.jpg' },
  intro: ['Verification is not a legal opinion on title — an advocate gives that — and it is not a bank valuation. It is a documentary and record check: does the chain of deeds hold together, does the Encumbrance Certificate show what it should, is the Khata A or B, does BBMP\'s e-Aasthi record match the deed, is tax paid and correctly assessed, and is the building sanctioned. We check at source and report in writing.'],
  forWhom: ['Buyers before paying a token or signing an agreement', 'Sellers who want to know what a buyer\'s bank will find', 'NRIs auditing property held from abroad', 'Owners with an unexplained problem — a rejected application, a refused loan', 'Developers evaluating a land parcel (see <a href="/real-estate/property-documentation/">project documentation</a>)'],
  whatWeDo: ['Title chain review: mother deed to the current deed, with each transfer accounted for', 'Encumbrance Certificate: obtain (via Kaveri online services) or review, for the period appropriate to the property, and flag charges, gaps and mismatches', 'Khata and e-Khata: A or B status, names, dimensions and property number on BBMP\'s record versus the deed', 'Property tax: assessment details, arrears, and whether the built-up area and use match reality', 'Approvals: layout approval, conversion order for former agricultural land, sanctioned plan and occupancy certificate for buildings', 'Certified copies from the sub-registrar office where originals are missing', 'A written verification note listing findings, risks and the corrections required — in plain language'],
  docs: ['Whatever the seller or your file contains: deeds, Khata, tax receipts, EC, plans, OC', 'Property identification details (property number, ward, survey number for sites)', 'For revenue-land origins: RTC/Pahani, conversion order, layout approval'],
  process: [
    { title: 'Scope', text: 'You tell us the purpose — purchase, sale, loan, audit. We define the checks and the EC period.' },
    { title: 'Collect', text: 'Documents from you or the seller; official records and certified copies from the offices.' },
    { title: 'Verify', text: 'Cross-check every name, number and measurement across deeds, EC, Khata, e-Khata and tax.' },
    { title: 'Report', text: 'A written note: what is clean, what is missing, what is a risk, and what would fix each item.' },
  ],
  timeline: ['<strong>Starting professional fee:</strong> from ₹30,000, typically completed in about 15 days from receiving the documents; obtaining EC or certified copies from the sub-registrar adds time that depends on the office. Fixed fee confirmed on scope; government fees for EC and copies are separate.'],
  issues: ['EC that does not cover the full chain, or shows an unreleased loan', 'Seller\'s name differing across deed, Khata and Aadhaar', 'B Khata described as "A Khata in process"', 'Flats without bifurcated Khata or e-Khata', 'Built-up area in tax record far below the actual building — a future demand with penalty', 'Sites in layouts without approval, or on land without a conversion order'],
  why: ['We check the government record, not the seller\'s folder', 'Every finding comes with what it would take to fix — so you can negotiate price or walk away with facts', 'We refer you to an advocate when a title opinion, not a record check, is what you need'],
  faqs: [
    { q: 'Is document verification the same as a legal opinion?', a: 'No. A legal opinion on title is given by an advocate and covers ownership and enforceability. Our verification covers the documentary chain and the government records — Khata, e-Khata, tax, approvals, EC — which is what BBMP, the sub-registrar and most banks act on. For a purchase we recommend both; we coordinate with your advocate.' },
    { q: 'How is an Encumbrance Certificate obtained in Bengaluru?', a: 'From the jurisdictional sub-registrar office, online through the Kaveri Online Services portal or in person, for the property and period you specify. The EC lists registered transactions affecting the property — sales, mortgages, releases — in that period.' },
    { q: 'What does "clear title" mean in a verification note?', a: 'That the chain of registered deeds leads without gaps to the seller, the EC shows no unreleased charges for the period checked, and the records we checked are consistent with the deeds. It is a documentary conclusion, not a guarantee against unregistered claims — which is why a legal opinion complements it.' },
  ],
}));

// =====================================================================
// SERVICE PAGES — business
// =====================================================================
const BIZ_RELATED = [['All services', '/services/'], ['Legal services', '/legal-services/'], ['BBMP documentation & trade licence', '/bbmp.html'], ['Property & BBMP services', '/property/']];
const bizPage = (path, title, metaTitle, desc, lede, svc) => ({ path, title, metaTitle, desc, lede, crumbs: [['All services', '/services/']], eyebrow: 'Business registrations · service', actions: [{ label: 'Talk to a consultant', href: '/contact/#business', cta: 'svc_biz_talk' }, { label: 'WhatsApp', href: WA, kind: 'btn-wa', cta: 'svc_biz_wa' }], service: svc, related: BIZ_RELATED, image: 'gstservices.jpg', asideTitle: 'Talk to a consultant', asideText: 'Tell us what your business needs registered or renewed. A consultant replies the same working day.', asideHref: '/contact/#business', asideCta: 'Request a consultation' });

pages.push(service({
  page: Object.assign(bizPage('/business/registrations/', 'Business and government registrations in Bengaluru', 'Business Registrations in Bangalore — Trade Licence, Shops & Establishments, Professional Tax, Udyam, Company Setup | Marvel Consultants', 'The registrations a business needs to operate in Bengaluru: BBMP trade licence, Karnataka Shops & Establishments, professional tax, MSME/Udyam, PAN/TAN, and support for company, LLP and partnership formation. Marvel Consultants files and renews them.', 'Every registration is small on its own and a nuisance together. We keep the set current so an inspection, a tender or a bank never finds a gap.', { name: 'Business and government registrations', type: 'Business registration service' }), { crumbLabel: 'Registrations' }),
  intro: ['Operating a business in Bengaluru involves a stack of registrations with different authorities and different renewal cycles: BBMP for the trade licence, the Labour Department for Shops & Establishments, the Commercial Taxes Department for professional tax, the Ministry of MSME for Udyam, the Income Tax Department for PAN/TAN, and the Registrar of Companies for corporate entities. We handle the applications and the calendar.'],
  forWhom: ['New businesses setting up in Bengaluru', 'Businesses opening a branch, shop, clinic, restaurant or office', 'Companies and LLPs needing incorporation support and post-incorporation registrations', 'Businesses with lapsed registrations discovered during an inspection, tender or due diligence'],
  whatWeDo: ['BBMP trade licence: new, renewal and category changes, with the premises documents BBMP requires', 'Karnataka Shops & Commercial Establishments registration and renewals', 'Professional tax enrolment and registration (employer and employees) and periodic filings', 'MSME / Udyam registration and updates', 'PAN and TAN registration coordination', 'Company, LLP and partnership formation support with a company secretary/CA where statutory certification is required', 'A registrations register with renewal dates, and reminders'],
  docs: ['Constitution documents and identity proofs of owners/directors', 'Premises proof: rent agreement/ownership, NOC, utility bill', 'Photographs of premises (for trade licence), layout where required', 'Employee count and salary bands (professional tax, S&E)', 'Existing registrations, if any, and last renewals'],
  process: [
    { title: 'Requirement map', text: 'Which registrations apply to your activity and premises; which are one-time and which renew.' },
    { title: 'Applications', text: 'Filed with the correct authority, fees paid, acknowledgements shared.' },
    { title: 'Inspection support', text: 'Where BBMP or the Labour Department inspects, we prepare the premises and documents.' },
    { title: 'Renewal calendar', text: 'Reminders and renewals so nothing lapses.' },
  ],
  timeline: ['Most registrations are issued within weeks; BBMP trade licences can take longer where inspection is required. Government fees vary by registration and category and are paid to the authority. Our fee is fixed per registration or as an annual package.'],
  issues: ['Trade licence category not matching the actual activity', 'Shops & Establishments registration never taken for a "small" office', 'Professional tax enrolment missed, discovered when a bank or tender asks', 'Udyam details out of date after turnover growth'],
  why: ['We handle BBMP counters daily — the trade-licence process is familiar territory', 'One point of contact for the full set, with a calendar', 'Coordination with your CA or CS where certification is statutory'],
  faqs: [
    { q: 'Is a BBMP trade licence mandatory for an office?', a: 'BBMP requires a trade licence for trades and activities listed under its bye-laws carried on within its limits — most commercial premises, including many offices, shops, clinics and food businesses. The category and fee depend on the activity and area. We confirm applicability for your premises.' },
    { q: 'Is Shops & Establishments registration needed for a small office?', a: 'Yes. Shops & Establishments is a Karnataka labour-law registration for commercial establishments and applies irrespective of your other registrations.' },
    { q: 'What is professional tax in Karnataka?', a: 'A state tax on professions, trades and employment: employers deduct it from employees above the salary threshold and remit it, and the business itself pays an annual enrolment tax. Registration and periodic returns are required.' },
  ],
}));

// =====================================================================
// SERVICE PAGES — real estate
// =====================================================================
const RE_RELATED = [['Real estate & developers', '/real-estate/'], ['BBMP documentation & approvals', '/bbmp.html'], ['BBMP e-Khata services', '/bbmp-e-khata-services.html'], ['Property tax', '/bbmp-property-tax-assessment-payment-bengaluru.html'], ['B Khata to A Khata conversion', '/bbmp/b-khata-to-a-khata-conversion/']];
const rePage = (path, title, metaTitle, desc, lede, svc, crumbLabel) => ({ path, title, metaTitle, desc, lede, crumbs: [['Real estate & developers', '/real-estate/']], crumbLabel, eyebrow: 'Real estate & developers · service', actions: [{ label: 'Talk to a consultant', href: '/contact/#business', cta: 'svc_re_talk' }, { label: 'WhatsApp', href: WA, kind: 'btn-wa', cta: 'svc_re_wa' }], service: svc, related: RE_RELATED, image: 'bbmp.jpg', asideTitle: 'Discuss your project', asideText: 'Site, stage and what is pending. We will say what is needed and what is realistic.', asideHref: '/contact/#business', asideCta: 'Talk to a consultant' });

pages.push(service({
  page: rePage('/real-estate/bbmp-plan-approval/', 'BBMP and BDA building plan approval in Bengaluru', 'BBMP Plan Approval in Bangalore — Building Plan Sanction, Plan Alteration, Layout Approval | Marvel Consultants', 'Building plan sanction from BBMP or BDA in Bengaluru: eligibility (Khata, layout approval, road width, zoning), documents, the online application, scrutiny, fees and follow-up to sanction; plan alteration and layout approval. Marvel Consultants manages the government-facing process with your architect.', 'Sanction depends on the site before it depends on the drawing. We establish eligibility first, then carry the application through scrutiny to sanction.', { name: 'BBMP / BDA building plan approval', type: 'Approval liaison service' }, 'Plan approval'),
  intro: ['Building plan approval (sanction) is granted by BBMP for properties within its limits, and by BDA or the relevant planning authority for layouts under their jurisdiction. It is required before construction, extension or significant alteration, and it is the foundation of the occupancy certificate, the property-tax assessment and the property\'s marketability. Sanction is granted under the zoning regulations and building bye-laws — plot size, road width, setbacks, floor-area ratio, height and use — and is available only for regular (A Khata) properties in approved layouts, subject to land-use.'],
  forWhom: ['Developers and builders of residential, commercial and mixed-use projects', 'Individual owners building or extending on their own site (see also the <a href="/property/build/">build journey</a>)', 'Owners needing plan alteration for changes during construction', 'Landowners seeking layout approval for a parcel being developed into sites'],
  when: [
    { title: 'Before construction', text: 'Fresh sanction for a new building.' },
    { title: 'Extension or additional floors', text: 'Fresh sanction or alteration depending on extent; existing sanction and tax record must be in order.' },
    { title: 'Deviation during construction', text: 'Plan alteration approval before completion, where the deviation is within permissible limits.' },
    { title: 'Developing land into sites', text: 'Layout approval from the competent planning authority; Khata for the sites follows.' },
  ],
  whatWeDo: ['Eligibility assessment: Khata status, layout approval, land use/zoning, road width, dimensions, tax status — before drawings are commissioned', 'Assembly of the ownership and record documents the application requires', 'Coordination with your registered architect/engineer on drawings that meet the bye-laws', 'Online application on BBMP\'s building-plan approval system (or the relevant authority), fee computation and payment', 'Response to scrutiny remarks and technical queries; follow-up at the zonal office', 'Plan alteration, layout approval and related NOCs (fire, airport height, BWSSB/BESCOM where applicable)', 'Post-sanction: commencement, completion/occupancy certificate support and first property-tax assessment'],
  docs: ['Registered title deed and chain', 'Khata certificate and extract (A Khata), e-Khata', 'Latest property-tax-paid receipt; Encumbrance Certificate', 'Survey sketch / site plan; layout approval or conversion order', 'Architect\'s drawings and certificates in the prescribed format', 'Owner identity; co-owner consent; for companies, board resolution', 'NOCs as applicable to height, location or use'],
  process: [
    { title: 'Eligibility', text: 'Written note on whether sanction is achievable and under which parameters.' },
    { title: 'Documentation & drawings', text: 'Record set assembled; drawings prepared by the architect to the bye-laws.' },
    { title: 'Application & scrutiny', text: 'Online filing, fee payment, technical scrutiny, responses to remarks.' },
    { title: 'Sanction', text: 'Sanctioned plan and permit; conditions noted for construction and completion.' },
  ],
  timeline: ['Timelines depend on the site, the completeness of the file and scrutiny; we give a project-specific estimate after the eligibility check rather than a generic number. Sanction fees, betterment and other statutory charges are computed on the proposal and paid to the authority; our fee is scoped per project.'],
  issues: ['Sites in unapproved or partly approved layouts, or B Khata sites, submitted as if regular', 'Road width or setbacks that do not permit the intended building', 'Tax arrears or Khata not in the applicant\'s name', 'Drawings prepared before eligibility was checked, then redrawn', 'Deviations during construction that block the occupancy certificate'],
  why: ['We assess eligibility before you spend on drawings — and say no when sanction is not achievable', 'A decade of BBMP zonal-office work: we know what scrutiny asks for', 'One team for the record, the application, the follow-up and the post-sanction steps'],
  faqs: [
    { q: 'Can I get BBMP plan sanction on a B Khata property?', a: 'Generally not; sanction requires a regular (A Khata) property in an approved layout with permissible land use. Eligible B Khata properties can be converted first (see our <a href="/bbmp/b-khata-to-a-khata-conversion/">conversion service</a>); for others we explain the position honestly.' },
    { q: 'Who applies — the owner or the architect?', a: 'The application is in the owner\'s name and is filed with drawings and certificates from a registered architect/engineer. We manage the government-facing process and coordinate with the architect; we do not prepare architectural drawings ourselves.' },
    { q: 'What is the difference between plan sanction and an occupancy certificate?', a: 'Sanction permits construction as per the approved plan. The occupancy certificate (OC) is issued after completion, confirming the building conforms to the sanction and is fit for occupation. Deviations beyond permissible limits block the OC — which is why we advise on alteration approval during construction.' },
  ],
}));

pages.push(service({
  page: rePage('/real-estate/project-compliance-liaison/', 'Project compliance and government liaison in Bengaluru', 'Government Liaison & Project Compliance for Builders in Bangalore — BBMP, BDA, Utilities, NOCs | Marvel Consultants', 'Government liaison and compliance for real-estate projects in Bengaluru: BBMP and BDA correspondence, inspections and notices, utility connections and NOCs, Khata and e-Khata for units, property tax assessment and the office follow-up that keeps files moving from commencement to handover.', 'Projects stall on paperwork more often than on construction. We are the team that keeps the file complete and the office informed — from commencement to the day the last buyer registers.', { name: 'Project compliance and government liaison', type: 'Compliance liaison service' }, 'Project compliance & liaison'),
  intro: ['Between sanction and handover a project touches many desks: BBMP zonal engineers and revenue officers, BDA, BWSSB and BESCOM, the fire department and others depending on the building, the sub-registrar for every sale, and the property-tax office for assessment. Each has its own documents, inspections and timelines. Liaison is the discipline of knowing what each will ask, answering before it becomes a notice, and following up until a file actually closes.'],
  forWhom: ['Developers and builders with projects under construction or at handover', 'Real-estate businesses managing multiple sites', 'Landowners in joint-development agreements who need visibility on compliance', 'Project teams facing a notice, an inspection or a stalled approval'],
  whatWeDo: ['Compliance map for the project: every approval, NOC, connection and registration by stage, with owner and due date', 'BBMP and BDA correspondence: replies to notices, inspection coordination, submission of completion documents', 'Utility connections and NOCs: BWSSB water and sanitary, BESCOM power, fire NOC and other approvals as applicable', 'Khata bifurcation and e-Khata for every unit so buyers can register without delay; parent Khata regularisation where needed', 'Property tax: first assessment of the building and unit-wise records at handover', 'Buyer-document set: what each purchaser and their lender will ask for, prepared once', 'Status reporting to the developer: a monthly note of what is filed, pending and at risk'],
  docs: ['Sanctioned plan and permit; commencement certificate', 'Title and Khata records of the land', 'Existing approvals, NOCs and correspondence', 'Unit schedule and sale status for Khata/e-Khata work'],
  process: [
    { title: 'Map', text: 'Compliance schedule for the project, agreed with your team.' },
    { title: 'Run', text: 'Applications, correspondence, inspections and follow-up as the project progresses.' },
    { title: 'Handover', text: 'Units with Khata and e-Khata, tax assessed, documents packaged for buyers and lenders.' },
    { title: 'Close', text: 'File closed with the authority; records handed over to the association or owners.' },
  ],
  timeline: ['Engagements are scoped per project stage or as a retainer through construction; per-unit fees apply to Khata/e-Khata work. Statutory fees and charges are paid to the authorities.'],
  issues: ['Parent Khata never bifurcated, so buyers cannot get e-Khata and registrations stall', 'Completion documents submitted late, delaying the OC and tax assessment', 'Utility applications made without the sanction conditions being met', 'Notices from BBMP answered informally, leaving no record'],
  why: ['We work on both sides — for developers on approvals and for buyers fixing what projects left undone — so we know what handover should look like', 'Relationships with the offices that matter, used for follow-up, not shortcuts', 'A single accountable team from sanction to the last registration'],
  faqs: [
    { q: 'What is Khata bifurcation for a project?', a: 'Dividing the parent Khata of the land/building into individual Khatas for each flat or site, so that each unit has its own record for tax and e-Khata. Without it, buyers cannot obtain e-Khata or, increasingly, register.' },
    { q: 'Can you handle liaison for a project outside BBMP limits?', a: 'Yes, for BDA, BMRDA and BIAPPA jurisdictions and the relevant panchayat/municipal bodies around Bengaluru; the authorities and documents differ, and we scope accordingly.' },
    ENGAGEMENT_FAQ[2],
  ],
}));

pages.push(service({
  page: rePage('/real-estate/property-documentation/', 'Property and land documentation for projects in Bengaluru', 'Land Documentation & Title Records for Real Estate Projects in Bangalore — Title Chain, EC, RTC, Conversion, Khata | Marvel Consultants', 'Documentation for land parcels and real-estate projects in Bengaluru: title chain, Encumbrance Certificate, RTC/Pahani, conversion order, layout approval, Khata and tax records — obtained, verified and organised for lenders, buyers and authorities. Marvel Consultants builds the record set.', 'A project is only as bankable as its land file. We assemble, verify and organise the records so lenders, buyers\' advocates and authorities find what they need — and nothing they should not.', { name: 'Project land and property documentation', type: 'Documentation service' }, 'Project documentation'),
  intro: ['Land in and around Bengaluru comes with history: agricultural origins, conversion orders, multiple owners, partitions, layouts approved or not, and Khata under BBMP, BDA, BMRDA, BIAPPA or a panchayat. Before acquisition, before a joint-development agreement, before a lender\'s due diligence and before sales open, the documents must be complete and consistent. We extract, verify and organise them, and identify the gaps that need a legal or regulatory step.'],
  forWhom: ['Developers evaluating or acquiring land', 'Landowners entering joint-development agreements', 'Project teams preparing for lender due diligence or RERA-related documentation', 'Buyers\' groups or associations reconstructing a project\'s records'],
  whatWeDo: ['Document extraction: certified copies of sale deeds (digital and manual), Encumbrance Certificates (digital search report and manual), Khata certificates/extracts, Patta, Passbook, Chitta, agricultural and panchayat records', 'Verification: title chain, EC for the appropriate period, RTC/Pahani and mutation records for agricultural origins, conversion orders, layout approval, Khata and tax', 'Land and municipal record checks: ownership verification, legal and litigation record searches, municipal and panchayat records', 'Organisation: an indexed record set with a summary of gaps and the steps to close them (Khata transfer, conversion, bifurcation, corrections)', 'Coordination with your advocate for title opinion and with authorities for corrections'],
  docs: ['Whatever exists: deeds, EC, RTC, conversion order, layout plan, Khata, tax receipts', 'Survey numbers and village/ward details', 'Details of prior owners and transactions where known'],
  process: [
    { title: 'Scope', text: 'Purpose (acquisition, JDA, lender, sales), parcel details, period for EC and records.' },
    { title: 'Extract & verify', text: 'Records from the sub-registrar, revenue and municipal offices; cross-checked for consistency.' },
    { title: 'Report', text: 'Indexed record set and a gap note with recommended actions.' },
    { title: 'Close gaps', text: 'Corrections, transfers and conversions handled or coordinated.' },
  ],
  timeline: ['Depends on the parcel\'s history and the offices involved; certified copies and manual EC searches for older periods take longer. Scoped fee; government fees for copies and searches separate.'],
  issues: ['EC gaps for periods before digitisation', 'Conversion order missing or not matching the parcel', 'Unrecorded partitions and family arrangements', 'Layout approval for part of the land only', 'Khata in a deceased owner\'s name'],
  why: ['Document extraction and verification across Bengaluru\'s offices is core Marvel work — sub-registrar, revenue and municipal', 'We report what is missing, not only what is present', 'Coordination with advocates and lenders in their language'],
  faqs: [
    { q: 'What is the difference between RTC and Khata?', a: 'RTC (Record of Rights, Tenancy and Crops, or Pahani) is the revenue department\'s record for agricultural land, showing ownership and cultivation. Khata is the municipal (BBMP or other local body) record for a property within a town/city for tax purposes. Land that was agricultural and then converted moves from RTC-based records to Khata after conversion and inclusion in the local body.' },
    { q: 'Why does a project need a conversion order?', a: 'Agricultural land must be converted to non-agricultural use by the Deputy Commissioner before it can be lawfully used for residential or commercial development. Without it, layout approval, plan sanction and A Khata are not available.' },
  ],
}));

// =====================================================================
// INFO PAGES
// =====================================================================
pages.push({
  path: '/who-we-serve/', photo: 'consult', layout: 'hub', section: 'info',
  title: 'Who we serve',
  metaTitle: 'Who We Serve — Owners, Buyers, NRIs & Developers in Bengaluru | Marvel Consultants',
  desc: 'Marvel Consultants serves property owners, buyers and sellers, NRIs, and real-estate developers in Bengaluru — legal verification and documentation, BBMP Khata and e-Khata, property tax, approvals and government liaisoning.',
  eyebrow: 'Industries & clients', lede: 'One firm, four audiences. The offices are the same; the needs are not.',
  blocks: [
    { t: 'section', tight: true, blocks: [{ t: 'cards', items: [
      { title: 'Buyers, sellers & owners', href: '/legal-services/', text: 'Legal verification before you pay, agreements and deeds that match the records, registration support, and the Khata and tax work that follows — coordinated end-to-end.', more: 'Legal services' },
      { title: 'Real estate & developers', href: '/real-estate/', text: 'Builders, developers, landowners in joint development, and real-estate businesses — approvals, project compliance, Khata for units, land documentation.', more: 'Developer services' },
      { title: 'Property owners', href: '/property/', text: 'Individuals and families buying, selling, owning, building, inheriting or fixing property in Bengaluru — and NRIs handling it from abroad.', more: 'Property owner services' },
    ] }] },
    { t: 'section', alt: true, eyebrow: 'Also', h2: 'Professionals who refer clients to us', text: 'Chartered accountants, advocates, architects and property agents refer matters that need someone at the BBMP counter, the Sub-Registrar office or a registration desk. We work alongside you, keep you informed, and do not compete for your client.', blocks: [
      { t: 'situations', items: [
        { title: 'Chartered accountants', text: 'Khata, e-Khata, registration and property documentation for your clients\' property matters — handled at the offices while you keep the client relationship.' },
        { title: 'Advocates', text: 'Record extraction, verification and BBMP process work behind your title opinions and disputes.' },
        { title: 'Architects & engineers', text: 'Eligibility, documentation and follow-up for plan sanction so your drawings are not redrawn.' },
        { title: 'Property agents & channel partners', text: 'Seller-side document readiness and buyer-side verification that keep your deals from collapsing.' },
      ] },
    ] },
    { t: 'section', tight: true, blocks: [faq([{ q: 'Do you work outside Bengaluru?', a: 'Our practice is Bengaluru and the surrounding planning areas (BDA, BMRDA, BIAPPA and nearby panchayat jurisdictions), with remote coordination for NRI owners anywhere in the world.' }, { q: 'Do you serve individuals with small matters?', a: 'Yes — a single Khata transfer or e-Khata correction is a normal engagement. For simple cases we will also tell you how to do it yourself.' }])] },
  ],
});

pages.push({
  path: '/about/', photo: 'about', layout: 'page', section: 'info',
  title: 'About Marvel Consultants',
  metaTitle: 'About Marvel Consultants — Property, Tax & Government Compliance, Bengaluru',
  desc: 'Marvel Consultants is a Bengaluru professional services firm focused on property documentation, legal-service coordination, BBMP/BDA processes and government liaisoning since 2014. Meet the leadership team, our approach and how legal work is handled.',
  eyebrow: 'The firm', lede: 'A Bengaluru firm that knows the offices, reads the records and says plainly what can and cannot be done.',
  image: 'about1.jpg', related: [['Who we serve', '/who-we-serve/'], ['All services', '/services/'], ['Contact', '/contact/'], ['Careers', '/career.html'], ['Original about page', '/about.html']],
  blocks: [
    p('Marvel Consultants is a Bengaluru-based professional services firm focused on property documentation, legal-service coordination, BBMP/BDA processes and government liaisoning. Since 2014, we have helped property owners, NRIs and real-estate developers navigate records, approvals and documentation that often require coordination across multiple offices.'),
    p('Our role is practical: understand the objective, review the available records, identify what is missing, prepare the required documentation, coordinate specialist legal support where applicable, file and follow up with the relevant authorities, and keep the client informed until the engagement is completed.'),
    h2('How we work'),
    ul(['<strong>Assess first.</strong> A free first look at the documents, and a written note of what applies, what is missing and what it costs — before you commit.', '<strong>Execute end-to-end.</strong> We prepare, file, attend, answer queries and follow up. You are not handed a checklist.', '<strong>Plain language.</strong> You will know what is being filed and why. No jargon, no guarantees we cannot keep.', '<strong>Fixed fees.</strong> Professional fees agreed in advance; government fees paid to the authority, always separate.', '<strong>Confidentiality.</strong> Property and tax matters are private. We operate with discretion and do not publish client details without permission.']),
    h2('Meet our leadership'),
    p('Led by Sanjay Chintala and Kiran Akula, Marvel Consultants combines hands-on liaisoning expertise with strong client and project management. Since 2014, the firm has helped property owners, businesses and developers navigate documentation, municipal approvals and regulatory processes across Bengaluru and Karnataka.'),
    h3('Sanjay Chintala — Managing Partner, Property Documentation & Liaisoning'),
    p('Sanjay leads Marvel Consultants\' property documentation and liaisoning services. He works closely with property owners, businesses and developers, overseeing BBMP Khata and e-Khata matters, property-tax documentation, plan approvals and coordination with government departments. His practical, solution-oriented approach helps clients navigate complex procedures efficiently.'),
    h3('Kiran Akula — Managing Partner, Business Development & Client Relations'),
    p('Kiran leads business development, corporate relationships and client engagement at Marvel Consultants. He works with businesses, developers and property owners to understand their requirements, coordinate documentation and ensure effective delivery across property, regulatory and compliance assignments. He also supports the firm\'s strategic growth and service expansion.'),
    p('They are supported by a 14-member team handling documentation, filings and office follow-up across all BBMP zones and panchayat offices.'),
    { t: 'figure', img: 'consult', alt: 'Consultant reviewing property documents with clients', caption: 'Most matters begin with a document review — at our office, at the property, or over WhatsApp.' },
    h2('What we are — and are not'),
    p('Marvel Consultants provides property documentation, verification, registration support and government liaisoning. We are <strong>not</strong> a law firm: where a matter requires a formal legal opinion, legal representation or other professional advocacy services, the work is undertaken by enrolled advocates / associated legal counsel as applicable — coordinated within your engagement so you keep one point of contact. We are <strong>not</strong> a government agency, and we cannot promise an approval or a timeline that depends on an authority. We are <strong>not</strong> a documentation marketplace: we take on the cases that need judgement and follow-up, and we tell you when you can do a simple one yourself.'),
    h2('Office'),
    p(`${SITE.address.street}, ${SITE.address.locality} ${SITE.address.postal}. By appointment; most matters begin on WhatsApp or a call. <a href="/contact/">Contact details and directions</a>.`),
    faq([{ q: 'Since when has Marvel Consultants been operating?', a: 'Since 2014 — over a decade of property documentation and liaisoning work in Bengaluru.' }, { q: 'Are you affiliated with BBMP or any government authority?', a: 'No. We are a private professional services firm. We deal with the authorities on clients\' behalf as authorised representatives.' }, { q: 'How is legal work handled?', a: 'Marvel handles documentation, verification coordination, registration support and liaisoning. Formal legal opinions, litigation and court representation are undertaken by enrolled advocates / associated legal counsel as applicable to the engagement — coordinated so you have one point of contact.' }]),
  ],
});

pages.push({
  path: '/resources/', photo: 'consult-2', layout: 'hub', section: 'info',
  title: 'Guides and resources',
  metaTitle: 'Guides — BBMP Khata, e-Khata & Property Tax in Bengaluru | Marvel Consultants',
  desc: 'Practical guides written from real cases in Bengaluru: BBMP e-Khata, Khata transfer, B Khata to A Khata conversion, Panchayat and BDA Khata and e-Khata for businesses — plus a glossary of property terms.',
  eyebrow: 'Resources', lede: 'Written from the cases we handle. Read the process before you pay for it — many owners complete simple applications themselves after reading, and call us for the ones that go wrong.',
  blocks: [
    { t: 'section', tight: true, h2: 'Property and Khata guides', blocks: [{ t: 'guides', items: OLD_GUIDES }] },
    { t: 'section', alt: true, h2: 'Reference', blocks: [{ t: 'cards', items: [
      { title: 'Glossary of property and tax terms', href: '/glossary/', text: 'Khata, A/B Khata, e-Khata, e-Aasthi, EC, RTC, mutation, bifurcation, conversion, guidance value, ASMT-10, DRC-01A, sections 73/74 and more — in plain language.' },
      { title: 'How we work', href: '/how-we-work/', text: 'What happens after you contact us, how fees are set, what we need from you and what we do not do.' },
      { title: 'All guides (original blog)', href: '/blog.html', text: 'The full list of guides as published.' },
    ] }] },
  ],
});

pages.push({
  path: '/glossary/', photo: 'govt', layout: 'page', section: 'info',
  title: 'Glossary: property and BBMP terms used in Bengaluru',
  metaTitle: 'Glossary — Khata, e-Khata, e-Aasthi, EC, RTC, Mutation, POA, Guidance Value Explained | Marvel Consultants',
  desc: 'Plain-language definitions of the terms Bengaluru property owners meet: Khata, A Khata, B Khata, e-Khata, e-Aasthi, EPID, Encumbrance Certificate, RTC/Pahani, mutation, bifurcation, DC conversion, guidance value, plan sanction, occupancy certificate and power of attorney.',
  eyebrow: 'Reference', lede: 'Short definitions, written for property owners — not for lawyers.', crumbs: [['Resources', '/resources/']], crumbLabel: 'Glossary',
  related: [['Property owners', '/property/'], ['Legal services', '/legal-services/'], ['Guides', '/resources/']],
  blocks: [
    h2('Property and BBMP terms'),
    table(['Term', 'Meaning'], [
      ['<strong>Khata</strong>', 'BBMP\'s account of a property for tax and identification: owner liable for tax, property number, dimensions, use. Not a title document. Comes as a Khata certificate (existence, owner) and a Khata extract (details).'],
      ['<strong>A Khata</strong>', 'Khata in the main register, for properties complying with bye-laws and approved layouts. Needed for plan sanction, most bank loans and a clean sale.'],
      ['<strong>B Khata</strong>', 'Entry in the "B register" for properties with irregularities (unapproved layout, no conversion, deviations). Taxed, but with restricted rights. Some are eligible for conversion to A Khata.'],
      ['<strong>e-Khata</strong>', 'The digital Khata issued through BBMP\'s e-Aasthi system, with a property identifier. Now required for registration of property within BBMP limits.'],
      ['<strong>e-Aasthi</strong>', 'BBMP\'s online property record and e-Khata platform, where owners search, verify and apply for their digital Khata.'],
      ['<strong>EPID</strong>', 'The e-Khata property identification number assigned on e-Aasthi, used in applications such as Khata conversion.'],
      ['<strong>Khata transfer / mutation</strong>', 'Updating the Khata to the new owner after sale, gift, inheritance, partition or release. Different from registration of the deed.'],
      ['<strong>Khata bifurcation / amalgamation</strong>', 'Splitting one Khata into several (units of a building, divided sites, heirs) or merging adjacent properties into one.'],
      ['<strong>Encumbrance Certificate (EC)</strong>', 'Sub-registrar\'s certificate listing registered transactions (sales, mortgages, releases) on a property for a period. Obtained via Kaveri Online Services or the office.'],
      ['<strong>RTC / Pahani</strong>', 'Record of Rights, Tenancy and Crops — the revenue record for agricultural land, showing ownership and cultivation.'],
      ['<strong>DC conversion</strong>', 'Deputy Commissioner\'s order converting agricultural land to non-agricultural use; required before layout approval, sanction and A Khata.'],
      ['<strong>Guidance value</strong>', 'The government\'s minimum value for a property, on which stamp duty and registration fees are computed.'],
      ['<strong>Plan sanction</strong>', 'BBMP/BDA approval of a building plan under the bye-laws, required before construction.'],
      ['<strong>Occupancy certificate (OC)</strong>', 'Certificate after completion that the building conforms to the sanctioned plan and is fit for occupation.'],
      ['<strong>SAS</strong>', 'Self-Assessment Scheme for BBMP property tax: owners declare area and use and pay accordingly; under-declaration attracts penalty.'],
      ['<strong>BDA / BMRDA / BIAPPA</strong>', 'Bangalore Development Authority; Bangalore Metropolitan Region Development Authority; Bangalore International Airport Area Planning Authority — planning authorities for areas outside or overlapping BBMP.'],
      ['<strong>Power of attorney (POA)</strong>', 'Document authorising someone to act for the owner; for NRIs, executed abroad and adjudicated/registered in Karnataka.'],
    ]),
    p('Terms are explained for orientation; the law and BBMP procedures change. For your case, <a href="/contact/">ask us</a>.'),
  ],
});

pages.push({
  path: '/how-we-work/', photo: 'handshake', layout: 'page', section: 'info',
  title: 'How we work: from first message to closed file',
  metaTitle: 'How We Work — Assessment, Fees, Documents, What to Expect | Marvel Consultants',
  desc: 'What happens after you contact Marvel Consultants: free first assessment, a written scope and fixed fee, the documents we need, how filing and follow-up work, how you get updates, and what we do not do. Bengaluru property, BBMP and legal documentation matters.',
  eyebrow: 'Engagement', lede: 'No mystery about the process. This is what an engagement looks like, start to finish.', crumbs: [['Resources', '/resources/']], crumbLabel: 'How we work',
  related: [['Contact', '/contact/'], ['About', '/about/'], ['All services', '/services/']],
  blocks: [
    steps([
      { title: 'You tell us', text: 'WhatsApp, call or the form. Describe what you are trying to do or what went wrong. Photos of your documents help; originals are not needed yet.' },
      { title: 'We assess — free', text: 'We check the official records where possible and reply, usually the same working day, with what applies, what is missing and whether you can do it yourself.' },
      { title: 'Scope and fee', text: 'If you want us to handle it: a short written scope, a fixed professional fee, and the list of documents and government fees. You approve before work starts.' },
      { title: 'We execute', text: 'Preparation, filing, office attendance, replies to queries, and follow-up. You receive photographs of acknowledgements and a status note at each step.' },
      { title: 'Closure', text: 'The certificate, order, approval or reply — and a note of anything to keep, renew or do next.' },
    ], true),
    h2('Fees'),
    p('Fixed professional fees, quoted after assessment, per matter (per stage or per unit for project work). Government fees, stamp duty, betterment charges, pre-deposits and statutory levies are paid to the authority and are always separate. We do not charge "facilitation" or unexplained expenses.'),
    h2('What we need from you'),
    ul(['Documents as scans or photos to start; originals only when an office requires them', 'A decision-maker we can reach for approvals and signatures', 'Honesty about the history — an undisclosed deviation or dispute costs more later', 'For NRIs: a power of attorney, which we help you set up']),
    h2('What we do not do'),
    ul(['Guarantee approvals, timelines or outcomes that depend on an authority', 'Title opinions, litigation or court representation (we refer to advocates and work alongside them)', 'Statutory audit or certification reserved to chartered accountants / company secretaries (we coordinate with yours)', 'Anything that involves misrepresenting facts to an authority']),
    h2('Communication'),
    p('WhatsApp and phone during working hours, email for documents and formal notes. Calls scheduled for NRI clients\' time zones. Every filing is acknowledged with a photograph or portal reference.'),
    faq(ENGAGEMENT_FAQ),
  ],
});

pages.push({
  path: '/contact/', photo: 'consult', layout: 'hub', section: 'info',
  title: 'Contact Marvel Consultants',
  metaTitle: 'Contact Marvel Consultants — Talk to an Expert | Bengaluru',
  desc: 'Call, WhatsApp or write to Marvel Consultants in Bengaluru. Tell us your property problem or request a business consultation; a consultant replies the same working day. Office at Yeshwanthpur Industrial Suburb, Bengaluru 560022.',
  eyebrow: 'Contact', lede: 'Same-working-day replies. Two forms below — one for property owners, one for businesses and developers — or just call.',
  actions: [{ label: `Call ${SITE.phone1.display}`, href: `tel:${SITE.phone1.tel}`, cta: 'contact_call' }, { label: 'WhatsApp', href: WA, kind: 'btn-wa', cta: 'contact_wa' }],
  ctaBand: false,
  blocks: [
    { t: 'section', tight: true, blocks: [{ t: 'cards', items: [
      { title: 'Phone', text: `<a href="tel:${SITE.phone1.tel}">${SITE.phone1.name}: ${SITE.phone1.display}</a><br><a href="tel:${SITE.phone2.tel}">${SITE.phone2.name}: ${SITE.phone2.display}</a>` },
      { title: 'WhatsApp & email', text: `<a href="${WA}" target="_blank" rel="noopener">WhatsApp ${SITE.phone1.display}</a><br><a href="mailto:${SITE.email}">${SITE.email}</a>` },
      { title: 'Office', text: `${SITE.address.street},<br>${SITE.address.locality}, ${SITE.address.region} ${SITE.address.postal}<br><span class="small muted">9 am – 7 pm · visits by appointment.</span>` },
    ] }] },
    { t: 'section', alt: true, id: 'problem', eyebrow: 'Property owners', h2: 'Tell us your property problem', text: 'Describe what you are trying to do, or what went wrong. You do not need to know the procedure\'s name. A consultant replies the same working day with what applies and what it would take.', blocks: [{ t: 'form', kind: 'b2c', id: 'problem-form', subject: 'Marvel Website — Property Problem', label: 'Send my property problem' }] },
    { t: 'section', id: 'business', eyebrow: 'Developers & legal documentation', h2: 'Talk to a consultant', text: 'A project, an approval, legal documentation or a registration. Brief details are enough; we will ask for documents after reading.', blocks: [{ t: 'form', kind: 'b2b', id: 'business-form', subject: 'Marvel Website — Business / Developer Enquiry', label: 'Request a consultation' }] },
    { t: 'section', alt: true, tight: true, blocks: [faq([{ q: 'What happens after I send the form?', a: 'A consultant reads it and replies by WhatsApp or phone, normally the same working day, with a first assessment and — if needed — a request for specific documents. No fee for this step.' }, { q: 'Can I just WhatsApp photos of my documents?', a: 'Yes. That is how most matters start. Include a line on what you are trying to do.' }, { q: 'Where is the office?', a: `${SITE.address.street}, Bengaluru ${SITE.address.postal}, near Yeshwanthpur. Office hours 9 am – 7 pm; visits by appointment — most work does not require one.` }])] },
  ],
});

pages.push({
  path: '/contact/thank-you/', layout: 'page', section: 'info', noindex: true,
  title: 'Thank you — we have your message',
  metaTitle: 'Thank you | Marvel Consultants',
  desc: 'Your enquiry has reached Marvel Consultants. A consultant will reply the same working day.',
  eyebrow: 'Received', lede: 'A consultant will read it and reply by WhatsApp or phone, normally the same working day.', crumbs: [['Contact', '/contact/']], crumbLabel: 'Thank you',
  ctaBand: false,
  blocks: [
    h2('What happens next'),
    steps([{ title: 'We read it', text: 'A consultant — not a bot — reads your message and checks what records we can look at immediately.' }, { title: 'We reply', text: 'Same working day, by WhatsApp or phone, with a first assessment and any documents we need.' }, { title: 'You decide', text: 'If it needs our help, you get a written scope and a fixed fee before anything starts.' }], true),
    p(`In a hurry? Call <a href="tel:${SITE.phone1.tel}">${SITE.phone1.display}</a> or <a href="${WA}" target="_blank" rel="noopener">WhatsApp us</a>. Meanwhile, the <a href="/resources/">guides</a> may answer part of your question.`),
  ],
});

module.exports = pages;
