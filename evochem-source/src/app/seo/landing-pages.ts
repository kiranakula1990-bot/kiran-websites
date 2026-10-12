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

export const LANDING_PAGES: LandingPage[] = [
  {
    slug: 'food-processing-cleaning-chemicals',
    primaryKeyword: 'food processing cleaning chemicals',
    title: 'Food Processing Cleaning Chemicals Manufacturer | Evochem',
    description: 'Food processing cleaning chemicals made in India: foam cleaners, CIP detergents and food-industry sanitisers for dairy, meat, poultry and beverage plants.',
    h1: 'Food Processing Cleaning Chemicals',
    tagline: 'Foam cleaners, CIP detergents and sanitisers for food and beverage plants',
    banner: 'assets/image/FoodProcessing.jpg',
    bannerAlt: 'Food processing plant cleaning',
    intro: [
      'Evochem manufactures food processing cleaning chemicals at its plant in Anekal, Bengaluru, and supplies them in bulk to food and beverage producers across India. The range covers every stage of a food plant sanitation programme: removing fats, proteins and scale, cleaning closed circuits, and sanitising food-contact surfaces before production restarts.',
      'Each product comes with clear dilution guidance and a Material Safety Data Sheet (MSDS), and our technical team helps you choose the right chemistry for your soils, water hardness and equipment.',
    ],
    sections: [
      {
        heading: 'Food industry cleaning chemicals for every type of soil',
        paragraphs: [
          'Food plants deal with very different soils. Animal fat and protein in meat, poultry and seafood processing, milk residues and milkstone in dairies, sugars in beverage lines, and mineral scale wherever the water is hard. A single general-purpose cleaner rarely handles all of them, so the range is split by job.',
        ],
        bullets: [
          'Alkaline detergents to break down fats, oils and proteins.',
          'Acidic detergents to remove scale, mineral deposits and inorganic soils.',
          'Chlorinated alkaline cleaners that clean and sanitise in one step.',
          'Sanitisers based on quaternary ammonium, peracetic acid or alcohol for pre-cleaned surfaces.',
        ],
      },
      {
        heading: 'Open plant cleaning: foam cleaners for floors, walls and equipment',
        paragraphs: [
          'High-foaming detergents cling to vertical surfaces, conveyors and machine frames, which gives the chemistry time to work before rinsing. Choose the alkaline, acidic or chlorinated version according to the soil.',
        ],
        products: ['Alkalox Foam', 'Clastox Foam', 'Acidox Foam', 'Chlorox Foam', 'Neutrox Foam'],
      },
      {
        heading: 'Clean-in-place (CIP) and heavy-duty alkaline cleaning',
        paragraphs: [
          'For pipelines, tanks, heat exchangers and bottle washers, low-foaming alkaline detergents penetrate milk residues and animal fats and resist hard-water scaling. See our CIP cleaning chemicals page for circuit-level guidance.',
        ],
        products: ['Clastox 50', 'Clastox Plus'],
      },
      {
        heading: 'Food plant sanitation: sanitisers for food-contact surfaces',
        paragraphs: [
          'Sanitising is a separate step from cleaning. These products are designed for surfaces that have already been cleaned, to reduce bacteria, fungi and viruses before production restarts.',
        ],
        products: ['Sanix Peraxy', 'Sanix Quat', 'Sanix Duo', 'Sanixol'],
      },
      {
        heading: 'Food factory hygiene for people',
        paragraphs: [
          'Hand hygiene at line entry points is part of every food safety plan. The Lush range covers handwash and hand sanitiser for production and packing staff.',
        ],
        products: ['Lush Care', 'Lush Care Plus', 'Lush Care Gel', 'Lush Care Rub'],
      },
      {
        heading: 'Sectors we supply',
        bullets: [
          'Dairy processing: milk, curd, ghee and milk-product lines.',
          'Meat, poultry and seafood processing.',
          'Beverage processing and bottling.',
          'Breweries and distilleries.',
          'Packaged and preserved foods.',
        ],
      },
      {
        heading: 'Why food manufacturers work with Evochem',
        bullets: [
          'Manufacturer, not a trader: formulations are made at our own plant in Bengaluru.',
          'Bulk packaging in 5 L, 20 L, 50 L and 200 L drums, with pan-India delivery.',
          'Dilution guidance for every product, so cost per litre in use stays predictable.',
          'MSDS for every product, plus wallcharts and signage for your cleaning procedures.',
          'Technical support for product selection, preventive maintenance and staff training.',
        ],
      },
    ],
    faqs: [
      { q: 'What cleaning chemicals are used in food processing plants?', a: 'Most food plants use a combination of alkaline detergents for fats and proteins, acidic detergents for scale and mineral deposits, and sanitisers for pre-cleaned food-contact surfaces. Chlorinated alkaline cleaners can combine cleaning and sanitising for daily cleaning. Evochem supplies all of these in foam and low-foam versions.' },
      { q: 'What is the difference between cleaning and sanitising in a food plant?', a: 'Cleaning removes visible soil such as fat, protein, sugar and scale. Sanitising reduces microorganisms on a surface that is already clean. Sanitisers work poorly on dirty surfaces, so the usual sequence is pre-rinse, clean, rinse, then sanitise.' },
      { q: 'Which Evochem products are suitable for dairy plants?', a: 'For dairies, Alkalox Foam and Clastox Foam handle open-plant cleaning, Clastox 50 and Clastox Plus are heavy-duty alkaline detergents for milk residues and CIP circuits, and Sanix Peraxy or Sanix Quat are used to sanitise pre-cleaned surfaces.' },
      { q: 'Do you supply food processing cleaning chemicals in bulk across India?', a: 'Yes. Evochem manufactures in Bengaluru and supplies in 5 L, 20 L, 50 L and 200 L packs with pan-India delivery. Contact us for pricing, MOQ and lead times.' },
      { q: 'Can you help us choose the right chemicals for our plant?', a: 'Yes. Share your process, soils, water hardness and equipment, and our technical team will recommend products, dilutions and a cleaning sequence, and can support training for your sanitation team.' },
    ],
    related: [
      { path: '/cip-cleaning-chemicals', label: 'CIP cleaning chemicals for dairy, beverage and food plants', eyebrow: 'CIP / COP solutions' },
      { path: '/commercial-kitchen-cleaning-chemicals', label: 'Commercial kitchen cleaning chemicals', eyebrow: 'Food service' },
      { path: '/categories/food-and-beverages-processing', label: 'All food and beverage processing products', eyebrow: 'Product range' },
    ],
  },

  {
    slug: 'commercial-kitchen-cleaning-chemicals',
    primaryKeyword: 'commercial kitchen cleaning chemicals',
    title: 'Commercial Kitchen Cleaning Chemicals Supplier | Evochem',
    description: 'Commercial kitchen cleaning chemicals for restaurants, hotels and cloud kitchens: dishwasher detergent and rinse aid, degreasers, oven cleaner and sanitisers.',
    h1: 'Commercial Kitchen Cleaning Chemicals',
    tagline: 'Dishwashing, degreasing and sanitising products for restaurants, hotels and cloud kitchens',
    banner: 'assets/image/kitchen.jpg',
    bannerAlt: 'Commercial kitchen cleaning',
    intro: [
      'Evochem\'s Blaze range covers the cleaning jobs of a busy commercial kitchen, from automatic dishwashing to heavy-duty degreasing and food-contact sanitising. We manufacture in Bengaluru and supply restaurants, quick service restaurants, cloud kitchens, hotels and institutional kitchens across India.',
      'Every product is concentrated and comes with dilution guidance, so your team uses the right amount for each task and your cost per wash stays under control.',
    ],
    sections: [
      {
        heading: 'Commercial dishwasher detergent and rinse aid',
        paragraphs: [
          'For automatic dishwashing machines, use a low-foaming machine detergent together with a rinse additive. Blaze Auto removes food soils in a single cycle, and Blaze Rinse helps dishes dry spotless and streak-free, even with hard water. Blaze Auto is not recommended for soft metals such as aluminium.',
        ],
        products: ['Blaze Auto', 'Blaze Rinse'],
      },
      {
        heading: 'Manual dishwashing liquid and destainer',
        paragraphs: [
          'For pot-wash and hand dishwashing, use a pH-balanced dishwashing liquid that cuts grease without damaging dishware. A chlorine-based destainer removes tea, coffee and burnt-food stains from cups and crockery by soaking or with a dosing pump.',
        ],
        products: ['Blaze Dish', 'Blaze Dip'],
      },
      {
        heading: 'Kitchen degreasers, oven and grill cleaner',
        paragraphs: [
          'Grease and carbon build up fastest on hoods, fryers, grills and ovens. Use a concentrated kitchen degreaser for daily surfaces, and an oven and grill cleaner for carbon deposits on burners, fryers and range hoods.',
        ],
        products: ['Blaze Kitchen Care', 'Blaze Multi Plus', 'Blaze Grill', 'Blaze Multi'],
      },
      {
        heading: 'Sanitising food-contact surfaces and vegetables',
        paragraphs: [
          'Chlorine tablets give a quick, measured way to sanitise food-contact surfaces, equipment and vegetables. For drains, a non-acidic drain maintainer breaks down grease and sludge without corrosive acids.',
        ],
        products: ['Blaze Tab', 'Blaze Drain'],
      },
      {
        heading: 'Commercial kitchen hygiene for staff',
        paragraphs: [
          'Hand hygiene stations at the pass, prep areas and washrooms complete the programme.',
        ],
        products: ['Lush Care Plus', 'Lush Care Gel'],
      },
      {
        heading: 'Restaurant cleaning chemicals supplier for every type of kitchen',
        bullets: [
          'Restaurants and quick service restaurants.',
          'Cloud kitchens and central kitchens.',
          'Hotels, lodges and banquet kitchens.',
          'Hospital, school and corporate canteens.',
        ],
        paragraphs: [
          'For a step-by-step view of the 10 key areas of a commercial kitchen and the product for each, see our commercial kitchen cleaning guide.',
        ],
      },
    ],
    faqs: [
      { q: 'What chemicals are used to clean a commercial kitchen?', a: 'A typical commercial kitchen uses a machine dishwashing detergent and rinse aid, a manual dishwashing liquid, a kitchen degreaser, an oven and grill cleaner, a food-contact sanitiser and a floor cleaner. Evochem\'s Blaze range covers each of these tasks.' },
      { q: 'Do I need a rinse aid with commercial dishwasher detergent?', a: 'Yes, for best results. The detergent removes soils, and the rinse aid helps water sheet off so dishes dry without spots or streaks, especially in hard water. Blaze Auto is designed to be used with Blaze Rinse.' },
      { q: 'How do I remove carbon from ovens, grills and fryers?', a: 'Use a heavy-duty oven and grill cleaner such as Blaze Grill at 2% to 5% dilution for regular cleaning, or undiluted on heavy deposits, then rinse thoroughly before the equipment is used again.' },
      { q: 'Do you supply restaurant cleaning chemicals in bulk?', a: 'Yes. Evochem manufactures in Bengaluru and supplies bulk packs with pan-India delivery. Contact us on WhatsApp, email or phone for pricing and packaging options.' },
      { q: 'Can you train our kitchen staff on the products?', a: 'Yes. Our technical team provides product selection guidance, wallcharts and training so your staff use the right product at the right dilution.' },
    ],
    related: [
      { path: '/solutions/KitchenCleaning', label: 'Commercial kitchen cleaning guide: 10 key areas', eyebrow: 'Cleaning guide' },
      { path: '/food-processing-cleaning-chemicals', label: 'Food processing cleaning chemicals', eyebrow: 'Food manufacturing' },
      { path: '/categories/hospitality-and-food-service', label: 'Hotel and hospitality cleaning products', eyebrow: 'Product range' },
    ],
  },

  {
    slug: 'cip-cleaning-chemicals',
    primaryKeyword: 'CIP cleaning chemicals manufacturer in India',
    title: 'CIP Cleaning Chemicals Manufacturer in India | Evochem',
    description: 'Alkaline CIP detergents and peracetic acid sanitiser for dairy, beverage and food plants. Manufactured in Bengaluru with dilution guidance and technical support.',
    h1: 'CIP Cleaning Chemicals Manufacturer in India',
    tagline: 'Clean-in-place (CIP) and clean-out-of-place (COP) chemicals for dairy, beverage and food plants',
    banner: 'assets/image/dairy.jpg',
    bannerAlt: 'Dairy plant CIP cleaning',
    intro: [
      'Evochem manufactures CIP cleaning chemicals in Bengaluru for dairies, beverage plants and food processors across India. Our low-foaming alkaline detergents are formulated to penetrate milk residues and animal fats while resisting hard-water scale, which makes them suitable for recirculating clean-in-place circuits.',
      'We supply each product with dilution guidance and an MSDS, and our technical team helps you set up the cleaning sequence for your pipelines, tanks and process equipment.',
    ],
    sections: [
      {
        heading: 'Alkaline CIP cleaner for the food industry',
        paragraphs: [
          'The alkaline step does most of the work in a CIP cycle, dissolving fats, proteins and milk residues. Foam must stay low in a recirculating circuit, so these detergents are formulated as low-foaming, with sequestering agents that prevent scale in hard water.',
        ],
        products: ['Clastox 50', 'Clastox Plus'],
      },
      {
        heading: 'Sanitising after CIP',
        paragraphs: [
          'Once the circuit is clean and rinsed, a sanitising step reduces microorganisms before production. Peracetic acid sanitisers are widely used for this because they work on pre-cleaned surfaces and break down after use.',
        ],
        products: ['Sanix Peraxy'],
      },
      {
        heading: 'A typical CIP sequence',
        bullets: [
          'Pre-rinse with water to remove loose product.',
          'Alkaline wash to dissolve fats, proteins and milk residues.',
          'Intermediate rinse.',
          'Acid step where mineral scale or milkstone builds up. Ask our team to match this step to your circuit.',
          'Final rinse, then sanitise before production.',
        ],
        paragraphs: [
          'Concentration, temperature, contact time and flow all affect results. We help you set these for each circuit and verify them during commissioning.',
        ],
      },
      {
        heading: 'CIP chemicals for dairy plants',
        paragraphs: [
          'Dairy circuits carry fat, protein and calcium-rich milk residues that form milkstone if they are not removed every cycle. Heavy-duty alkaline detergents with good scale prevention, followed by sanitising, keep pasteurisers, silos, tankers and filling lines clean.',
        ],
      },
      {
        heading: 'COP and equipment cleaning chemicals for the food industry',
        paragraphs: [
          'Parts that are dismantled and cleaned out of place, such as fittings, valves, filler parts and utensils, can be soaked or washed with the same alkaline detergents, then sanitised. For open surfaces around the equipment, see our food processing cleaning chemicals range.',
        ],
        products: ['Clastox Foam', 'Sanix Quat'],
      },
      {
        heading: 'Bottle washing',
        paragraphs: [
          'Clastox 50 is also used for returnable bottle cleaning, where strong alkaline detergency and scale prevention matter.',
        ],
      },
    ],
    faqs: [
      { q: 'What chemicals are used in CIP cleaning?', a: 'A CIP cycle usually uses an alkaline detergent to remove fats and proteins, an acid step to remove mineral scale where needed, and a sanitiser such as peracetic acid after the final rinse. Evochem manufactures low-foaming alkaline CIP detergents and a peracetic acid sanitiser.' },
      { q: 'Why must CIP detergents be low-foaming?', a: 'CIP solutions are pumped and recirculated at speed. Foam reduces contact with the pipe and tank walls and can cause pump cavitation, so CIP detergents are formulated to stay low-foaming.' },
      { q: 'What dilution should I use for Clastox 50?', a: 'Clastox 50 is typically used at 0.5% to 5% (5 ml to 50 ml per litre of water), depending on the soil. The right concentration, temperature and contact time depend on your circuit, and our team can help you set them.' },
      { q: 'Are your CIP chemicals suitable for dairy plants?', a: 'Yes. Clastox 50 and Clastox Plus are formulated to penetrate milk residues and animal fats and to prevent hard-water scale, which are the main challenges in dairy CIP.' },
      { q: 'Do you supply CIP chemicals across India?', a: 'Yes. We manufacture in Bengaluru and supply bulk packs, including 200 L drums, with pan-India delivery.' },
    ],
    related: [
      { path: '/food-processing-cleaning-chemicals', label: 'Food processing cleaning chemicals', eyebrow: 'Food manufacturing' },
      { path: '/product/clastox-50', label: 'Clastox 50 high performance alkaline detergent', eyebrow: 'Product' },
      { path: '/product/sanix-peraxy', label: 'Sanix Peraxy peracetic acid sanitiser', eyebrow: 'Product' },
    ],
  },

  {
    slug: 'cleaning-chemicals-manufacturer-bangalore',
    primaryKeyword: 'cleaning chemicals manufacturer in Bangalore',
    title: 'Cleaning Chemicals Manufacturer in Bangalore | Evochem',
    description: 'Evochem manufactures industrial, housekeeping and food-industry cleaning chemicals at Anekal, Bengaluru. Bulk supply for Bangalore businesses. Get a quote.',
    h1: 'Cleaning Chemicals Manufacturer in Bangalore',
    tagline: 'Industrial, housekeeping and food-industry cleaning chemicals, made in Bengaluru',
    banner: 'assets/image/Manufacturing&Warehouse.jpg',
    bannerAlt: 'Evochem manufacturing in Bengaluru',
    intro: [
      'Evochem is a cleaning chemicals manufacturer based in Bengaluru. Our products are made at our facility at Sannuthi Shubharam Estate, Marsur Gate, Anekal, and supplied to businesses in Bangalore and, with pan-India delivery, across India. Evochem is a brand of Ennwin Industries Private Limited.',
      'Buying from a local manufacturer means you deal directly with the people who make the product, and can get technical support and training for your housekeeping and sanitation teams.',
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
      { path: '/food-processing-cleaning-chemicals', label: 'Food processing cleaning chemicals', eyebrow: 'Food manufacturing' },
      { path: '/commercial-kitchen-cleaning-chemicals', label: 'Commercial kitchen cleaning chemicals', eyebrow: 'Food service' },
      { path: '/contactus', label: 'Contact Evochem for a quote', eyebrow: 'Get in touch' },
    ],
  },
];
