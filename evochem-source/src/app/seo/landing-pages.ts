// Keyword landing pages from the October 2026 SEO priority brief.
// One primary keyword per page; product facts and dilutions come from assets/data/evochem-data.json.
// Do not add certification claims (NSF, GreenPro, ISO scope) or customer names here until they are confirmed.

export interface LandingSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  /** Product codes from evochem-data.json, shown as linked product lines. */
  products?: string[];
}

export interface LandingFaq { q: string; a: string; }

export interface LandingPage {
  slug: string;
  primaryKeyword: string;
  title: string;
  description: string;
  h1: string;
  tagline: string;
  banner: string;
  bannerAlt: string;
  intro: string[];
  sections: LandingSection[];
  faqs: LandingFaq[];
  /** Other landing pages / site paths to link in "Related". */
  related: { path: string; label: string; eyebrow: string }[];
}

// The food processing, commercial kitchen and CIP landing pages moved to /industries/food-processing/,
// /products/commercial-kitchen-cleaning-chemicals/ and /solutions/cip-cleaning-chemicals/ (src/app/content/).
export const LANDING_PAGES: LandingPage[] = [
  {
    slug: 'cleaning-chemicals-manufacturer-bangalore',
    primaryKeyword: 'cleaning chemicals manufacturer in Bangalore',
    title: 'Cleaning Chemicals Manufacturer in Bangalore | Evochem',
    description: 'Cleaning chemicals manufacturer in Bengaluru and industrial cleaning chemicals supplier in Bangalore: made at Anekal, with bulk supply for local businesses.',
    h1: 'Cleaning Chemicals Manufacturer in Bangalore',
    tagline: 'Industrial, housekeeping and food-industry cleaning chemicals, made in Bengaluru',
    banner: 'assets/image/Manufacturing&Warehouse.jpg',
    bannerAlt: 'Evochem manufacturing in Bengaluru',
    intro: [
      'Evochem is a cleaning chemicals manufacturer based in Bengaluru. Our products are made at our facility at Sannuthi Shubharam Estate, Marsur Gate, Anekal, and supplied to businesses in Bangalore and, with pan-India delivery, across India. Evochem is a brand of Ennwin Industries Private Limited.',
      'Buying from a local manufacturer means you deal directly with the people who make the product, and can get technical support and training for your housekeeping and sanitation teams.',
      'As an industrial cleaning chemicals manufacturer in Bangalore, Evochem is also a direct cleaning products supplier in Bangalore: an industrial cleaning chemicals supplier in Bangalore for factories, a housekeeping chemicals supplier in Bangalore for offices and hospitals, a hotel cleaning chemicals supplier in Bangalore for hotels and restaurants, and a food industry cleaning chemical supplier in Karnataka for dairies, poultry and food plants. Being a cleaning chemical manufacturer in South India, close to customers in Bengaluru, keeps delivery times short.',
    ],
    sections: [
      {
        heading: 'Industrial cleaning chemicals supplier in Bangalore',
        paragraphs: [
          'For factories, warehouses and cold storage, we supply heavy-duty floor cleaners and oil and grease removers that work at low concentrations.',
        ],
        products: ['Novel HD', 'Novel OGR', 'EVO 7'],
      },
      {
        heading: 'Housekeeping chemicals manufacturer in Bangalore',
        paragraphs: [
          'For offices, tech parks, schools, hospitals and places of worship, the EVO housekeeping range covers bathrooms, toilets, glass, floors, furniture and steel surfaces.',
        ],
        products: ['EVO 1', 'EVO 6', 'EVO 3', 'EVO 2', 'EVO SP'],
      },
      {
        heading: 'Hotel, restaurant and food-industry chemicals',
        paragraphs: [
          'Bengaluru\'s hotels, restaurants, cloud kitchens and food processors use our Blaze kitchen care, Flox laundry care and food-industry foam cleaners and sanitisers.',
        ],
        products: ['Blaze Auto', 'Blaze Kitchen Care', 'Flox Star', 'Alkalox Foam', 'Sanix Peraxy'],
      },
      {
        heading: 'Commercial cleaning products supplier in Bengaluru',
        bullets: [
          'Made at our own plant in Anekal, Bengaluru.',
          'Bulk packs in 5 L, 20 L, 50 L and 200 L drums.',
          'Dilution guidance and MSDS for every product.',
          'Technical support: product selection, preventive maintenance and staff training.',
          'Supply to businesses across Bangalore, with pan-India delivery.',
        ],
      },
      {
        heading: 'Visit or contact us',
        paragraphs: [
          'Evochem (Ennwin Industries Private Limited), M/s. Sannuthi Shubharam Estate, #170/1, Marsur Gate, Anekal, Bengaluru – 562106, Karnataka, India. Phone +91 74838 37722 or +91 96635 38037, email info@ennwin.in.',
        ],
      },
    ],
    faqs: [
      { q: 'Where is Evochem\'s manufacturing facility?', a: 'Our facility is at Sannuthi Shubharam Estate, #170/1, Marsur Gate, Anekal, Bengaluru – 562106, Karnataka.' },
      { q: 'Do you supply cleaning chemicals to businesses in Bangalore?', a: 'Yes. We supply offices, hotels, restaurants, hospitals, factories, warehouses and food processors in Bangalore, and deliver across India.' },
      { q: 'What types of cleaning chemicals do you manufacture?', a: 'We manufacture housekeeping chemicals, industrial floor cleaners and degreasers, kitchen care and dishwashing products, laundry chemicals, hand hygiene products, and food-industry foam cleaners, CIP detergents and sanitisers.' },
      { q: 'Can I buy in bulk directly from the manufacturer?', a: 'Yes. Contact us on WhatsApp, email or phone for pricing, MOQ and packaging options. Bulk packs go up to 200 L drums.' },
    ],
    related: [
      { path: '/industries/food-processing/', label: 'Food processing cleaning chemicals', eyebrow: 'Food manufacturing' },
      { path: '/products/commercial-kitchen-cleaning-chemicals/', label: 'Commercial kitchen cleaning chemicals', eyebrow: 'Food service' },
      { path: '/contactus/', label: 'Contact Evochem for a quote', eyebrow: 'Get in touch' },
    ],
  },
];
