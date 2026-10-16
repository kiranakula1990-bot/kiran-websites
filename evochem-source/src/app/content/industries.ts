import { ContentPage } from './content-model';

// Industry pages (/industries/<slug>/). Products are referenced by permanent slug from evochem-data.json.
// Content rules: no certification or kill claims, no customer names, no invented results; dilutions only from data.

export const INDUSTRIES: ContentPage[] = [
  // 1. Food and beverage processing (migrated from the live landing page food-processing-cleaning-chemicals)
  {
    kind: 'industry',
    slug: 'food-processing',
    name: 'Food and beverage processing',
    title: 'Food Processing Cleaning Chemicals Manufacturer | Evochem',
    description: 'Food processing cleaning chemicals made in India: foam cleaners, CIP detergents and food-industry sanitisers for dairy, meat, poultry and beverage plants.',
    h1: 'Food Processing Cleaning Chemicals',
    tagline: 'Foam cleaners, CIP detergents and sanitisers for food and beverage plants',
    banner: 'assets/image/FoodProcessing.jpg',
    bannerAlt: 'Food processing plant cleaning',
    primaryKeyword: 'food processing cleaning chemicals',
    summary: 'Foam cleaners, alkaline CIP detergents and food-industry sanitisers for dairy, meat, beverage and packaged food plants.',
    intro: [
      'Evochem manufactures food processing cleaning chemicals at its plant in Anekal, Bengaluru, and supplies them in bulk to food and beverage producers across India. The range covers the main stages of a food plant sanitation programme: removing fats, proteins and scale, cleaning closed circuits, and sanitising food-contact surfaces before production restarts.',
      'Each product comes with clear dilution guidance and a Material Safety Data Sheet (MSDS), and our technical team helps you choose the right chemistry for your soils, water hardness and equipment.',
    ],
    sections: [
      {
        heading: 'Food industry cleaning chemicals for every type of soil',
        paragraphs: [
          'Food plants deal with very different soils: animal fat and protein in meat, poultry and seafood processing, milk residues and milkstone in dairies, sugars in beverage lines, and mineral scale wherever the water is hard. A single general-purpose cleaner rarely handles all of them, so the range is split by job.',
        ],
        bullets: [
          'Alkaline detergents to break down fats, oils and proteins.',
          'Acidic detergents to remove scale, mineral deposits and inorganic soils.',
          'Chlorinated alkaline cleaners that clean and sanitise in one step for daily cleaning.',
          'Sanitisers based on quaternary ammonium, peracetic acid or alcohol for pre-cleaned surfaces.',
        ],
      },
      {
        heading: 'Open plant cleaning: foam cleaners for floors, walls and equipment',
        paragraphs: [
          'High-foaming detergents cling to vertical surfaces, conveyors and machine frames, which gives the chemistry time to work before rinsing. Choose the alkaline, acidic, chlorinated or alkali-free version according to the soil and the surface.',
        ],
        products: [
          'alkaline-foam-cleaner-alkalox-foam',
          'high-foaming-alkaline-detergent-clastox-foam',
          'acidic-foam-cleaner-acidox-foam',
          'chlorinated-alkaline-foam-cleaner-chlorox-foam',
          'multipurpose-foam-detergent-neutrox-foam',
        ],
      },
      {
        heading: 'Clean-in-place (CIP) and heavy-duty alkaline cleaning',
        paragraphs: [
          'For pipelines, tanks, heat exchangers and bottle washers, low-foaming alkaline detergents penetrate milk residues and animal fats and resist hard-water scaling. The range does not include an acid CIP detergent, so where your circuit needs an acid step for scale or milkstone, ask our technical team to recommend one that matches your equipment.',
        ],
        products: ['alkaline-cip-detergent-clastox-50', 'low-foam-alkaline-detergent-clastox-plus'],
      },
      {
        heading: 'Food plant sanitation: sanitisers for food-contact surfaces',
        paragraphs: [
          'Sanitising is a separate step from cleaning. These products are for surfaces that have already been cleaned and rinsed, to reduce microorganisms before production restarts. Sanix Duo combines a detergent with a quaternary ammonium sanitiser for lighter soils, while Sanixol is a ready-to-use alcohol-based product that does not need rinsing.',
        ],
        products: [
          'peracetic-acid-sanitizer-sanix-peraxy',
          'quat-sanitizer-sanix-quat',
          'cleaner-sanitizer-sanix-duo',
          'alcohol-surface-sanitizer-sanixol',
        ],
      },
      {
        heading: 'Beverage, brewery and packaged food lines',
        paragraphs: [
          'Beverage and bottling plants mainly deal with sugars, product residues and hard-water scale on fillers, conveyors and bottle washers. Breweries and distilleries add organic deposits in vessels and transfer lines. Packaged and preserved food units see a mix of oils, starches and spices on mixers, kettles and packing tables.',
          'In each case the pattern is the same: an alkaline detergent for organic soil, an acidic foam where scale builds up on open surfaces, a rinse, then a sanitiser on the cleaned surface. Share your line layout and water analysis and we will suggest a sequence and dilutions.',
        ],
      },
      {
        heading: 'Food factory hygiene for people',
        paragraphs: [
          'Hand hygiene at line entry points is part of every food safety plan. The Lush range covers colourless, perfume-free handwash and hand sanitiser for production and packing staff.',
        ],
        products: [
          'perfume-free-hand-wash-lush-care',
          'antibacterial-hand-wash-lush-care-plus',
          'gel-hand-sanitizer-lush-care-gel',
          'liquid-hand-sanitizer-lush-care-rub',
        ],
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
          'MSDS available for every product.',
          'Technical support for product selection, dilution set-up and staff training.',
        ],
      },
    ],
    faqs: [
      { q: 'What cleaning chemicals are used in food processing plants?', a: 'Most food plants use alkaline detergents for fats and proteins, acidic detergents for scale and mineral deposits, and sanitisers for pre-cleaned food-contact surfaces. Chlorinated alkaline cleaners can combine cleaning and sanitising for daily cleaning. Evochem supplies alkaline products in foam and low-foam versions and an acidic foam cleaner for open surfaces.' },
      { q: 'What is the difference between cleaning and sanitising in a food plant?', a: 'Cleaning removes visible soil such as fat, protein, sugar and scale. Sanitising reduces microorganisms on a surface that is already clean. Sanitisers work poorly on dirty surfaces, so the usual sequence is pre-rinse, clean, rinse, then sanitise.' },
      { q: 'Which Evochem products are suitable for dairy plants?', a: 'Alkalox Foam and Clastox Foam handle open-plant cleaning, Clastox 50 and Clastox Plus are heavy-duty alkaline detergents for milk residues and CIP circuits, and Sanix Peraxy or Sanix Quat are used to sanitise pre-cleaned surfaces. For an acid CIP step, ask our technical team.' },
      { q: 'Do you supply food processing cleaning chemicals in bulk across India?', a: 'Yes. Evochem manufactures in Bengaluru and supplies in 5 L, 20 L, 50 L and 200 L packs with pan-India delivery. Contact us for pricing, MOQ and lead times.' },
      { q: 'Can you help us choose the right chemicals for our plant?', a: 'Yes. Share your process, soils, water hardness and equipment, and our technical team will recommend products, dilutions and a cleaning sequence, and can support training for your sanitation team.' },
    ],
    related: [
      { path: '/solutions/cip-cleaning-chemicals/', label: 'CIP cleaning chemicals for dairy, beverage and food plants', eyebrow: 'Solution' },
      { path: '/industries/dairy-processing/', label: 'Dairy cleaning chemicals and CIP', eyebrow: 'Industry' },
      { path: '/industries/poultry-meat-processing/', label: 'Poultry and meat processing hygiene', eyebrow: 'Industry' },
    ],
  },

  // 2. Dairy processing
  {
    kind: 'industry',
    slug: 'dairy-processing',
    name: 'Dairy processing',
    title: 'Dairy Cleaning Chemicals for CIP and Plant Hygiene | Evochem',
    description: 'Dairy cleaning chemicals for milk plants: alkaline CIP detergents for tanks and pasteurisers, foam cleaners, sanitisers and handwash. Made in Bengaluru.',
    h1: 'Dairy Cleaning Chemicals and Dairy Plant CIP Chemicals',
    tagline: 'Alkaline CIP detergents, foam cleaners and sanitisers for milk and milk-product plants',
    banner: 'assets/image/Methods-of-improving-hygiene-in-Dairy-supply-chain.jpg',
    bannerAlt: 'Stainless steel dairy processing tanks',
    primaryKeyword: 'dairy cleaning chemicals',
    summary: 'Alkaline CIP detergents, open-plant foam cleaners, sanitisers and staff hand hygiene for milk, curd, ghee and milk-product plants.',
    intro: [
      'Milk leaves two kinds of soil behind. Fat and protein film forms on every surface it touches, and on heated surfaces such as pasteuriser plates and evaporators, calcium and protein bake on as milkstone. A dairy cleaning programme has to remove both, every cycle, before a sanitiser can do its job.',
      'Evochem manufactures dairy cleaning chemicals in Bengaluru for milk chilling centres, processing plants and milk-product units. This page sets out how the range fits the main cleaning jobs in a dairy, and where you should ask our technical team for a product we do not make.',
    ],
    sections: [
      {
        heading: 'CIP of tanks, silos, pasteurisers and pipelines',
        paragraphs: [
          'Silos, balance tanks, pasteurisers, separators, tankers and filling lines are normally cleaned in place. The alkaline wash does most of the work, dissolving milk fat and protein. Because the solution recirculates, it must be low-foaming, and in hard-water areas it needs sequestering agents to stop scale forming. Clastox 50 and Clastox Plus are heavy-duty alkaline detergents built for this, with a dilution range of 0.5% to 5% depending on soil.',
          'There is no acid CIP detergent in the Evochem range. Where milkstone or mineral scale builds up on heated surfaces, your circuit will need an acid step after the alkaline wash; ask our technical team to recommend one that suits your equipment and water. Acidox Foam is a foaming acid for open surfaces and is not intended for recirculating CIP.',
        ],
        steps: [
          'Pre-rinse with water to push out residual milk.',
          'Alkaline wash to dissolve fat and protein.',
          'Intermediate rinse.',
          'Acid step where milkstone or scale builds up (ask our technical team for this product).',
          'Final rinse, then sanitise the cleaned circuit before production.',
        ],
        products: ['alkaline-cip-detergent-clastox-50', 'low-foam-alkaline-detergent-clastox-plus'],
      },
      {
        heading: 'Open-plant foam cleaning: floors, walls and equipment exteriors',
        paragraphs: [
          'Outside the closed circuits, milk splashes on floors, walls, tank legs, conveyors and packing machines. High-foaming detergents cling to these surfaces so the chemistry has time to lift the soil before rinsing. Use an alkaline foam for fat and protein, Acidox Foam for scale and inorganic deposits on open surfaces, and Chlorox Foam where you want a chlorinated alkaline cleaner for daily cleaning. Neutrox Foam is alkali-free for general cleaning of floors, walls and utensils.',
        ],
        products: [
          'high-foaming-alkaline-detergent-clastox-foam',
          'alkaline-foam-cleaner-alkalox-foam',
          'acidic-foam-cleaner-acidox-foam',
          'chlorinated-alkaline-foam-cleaner-chlorox-foam',
          'multipurpose-foam-detergent-neutrox-foam',
        ],
      },
      {
        heading: 'Sanitising cleaned dairy surfaces',
        paragraphs: [
          'Sanitising is a separate step that reduces microorganisms on a surface that has already been cleaned and rinsed. Sanix Peraxy, a peracetic acid sanitiser, is commonly used after CIP. Sanix Quat suits pre-cleaned open surfaces, and Sanixol is a ready-to-use alcohol-based sanitiser for small parts and surfaces that should not be rinsed again. Sanix Duo combines cleaning and sanitising for lightly soiled areas.',
        ],
        products: [
          'peracetic-acid-sanitizer-sanix-peraxy',
          'quat-sanitizer-sanix-quat',
          'alcohol-surface-sanitizer-sanixol',
          'cleaner-sanitizer-sanix-duo',
        ],
      },
      {
        heading: 'Hand hygiene for dairy staff',
        paragraphs: [
          'Handwash points at changing rooms and line entries should use a product that leaves no perfume or colour behind. Lush Care and Lush Care Plus are colourless and perfume-free, and Lush Care Gel is a waterless hand sanitiser for use after washing.',
        ],
        products: [
          'perfume-free-hand-wash-lush-care',
          'antibacterial-hand-wash-lush-care-plus',
          'gel-hand-sanitizer-lush-care-gel',
        ],
      },
      {
        heading: 'What to share with us before a trial',
        bullets: [
          'The list of circuits and open areas, with their soils and cleaning frequency.',
          'Water hardness at the plant.',
          'How you currently dose and heat CIP solutions.',
          'Any surfaces such as aluminium or soft metals that need care.',
        ],
      },
    ],
    faqs: [
      { q: 'What chemicals are used for dairy plant CIP?', a: 'A typical dairy CIP uses a low-foaming alkaline detergent to remove fat and protein, an acid step where milkstone forms, and a sanitiser after the final rinse. Evochem supplies the alkaline detergents and sanitisers; ask our technical team for the acid step.' },
      { q: 'Can Acidox Foam be used in a CIP circuit?', a: 'Acidox Foam is a high-foaming acidic detergent for open surfaces, so it is not suited to recirculating CIP where foam must stay low. Ask our technical team for an acid product for your circuits.' },
      { q: 'What is milkstone and how is it removed?', a: 'Milkstone is a deposit of milk protein and minerals that builds up on heated surfaces such as pasteuriser plates. It is removed by a regular alkaline wash followed by an acid step suited to your equipment.' },
      { q: 'Do you supply dairy cleaning chemicals in drums?', a: 'Yes. Products are supplied in 5 L, 20 L, 50 L and 200 L packs with pan-India delivery and an MSDS for each product.' },
    ],
    related: [
      { path: '/solutions/cip-cleaning-chemicals/', label: 'CIP cleaning chemicals', eyebrow: 'Solution' },
      { path: '/case-studies/dairy-cip-cleaning-programme/', label: 'Dairy CIP cleaning programme', eyebrow: 'Case study' },
      { path: '/resources/cip-vs-opc-cleaning/', label: 'CIP vs open-plant cleaning', eyebrow: 'Guide' },
    ],
  },

  // 3. Poultry and meat processing
  {
    kind: 'industry',
    slug: 'poultry-meat-processing',
    name: 'Poultry and meat processing',
    title: 'Poultry Processing Cleaning Chemicals | Evochem',
    description: 'Poultry processing cleaning chemicals for meat plants: foam cleaners for fat and blood, chlorinated alkaline daily cleaning, sanitisers, drains and handwash.',
    h1: 'Poultry Processing Cleaning Chemicals for Meat Plants',
    tagline: 'Foam cleaners, sanitisers and hand hygiene for poultry, meat and seafood processing plants',
    banner: 'assets/image/close-up-floor-wiper-mop-cleaning-industrial-plant-scaled.webp',
    bannerAlt: 'Floor cleaning in an industrial processing plant',
    primaryKeyword: 'poultry processing cleaning chemicals',
    summary: 'Foam cleaning, chlorinated alkaline daily cleans, sanitisers, drain care and hand hygiene for poultry and meat processing plants.',
    intro: [
      'Poultry and meat processing plants produce some of the heaviest soils in the food industry: animal fat, protein, blood and tissue on conveyors, evisceration lines, cutting tables, chillers and floors. The soil load is high every shift, so the cleaning programme has to be fast, repeatable and easy for the sanitation crew to follow.',
      'Evochem supplies poultry processing cleaning chemicals to processing plants, not farms. The range below covers foam cleaning of equipment and structures, heavy-duty alkaline soaking, sanitising, floors and drains, and hand hygiene for line staff.',
    ],
    sections: [
      {
        heading: 'Foam cleaning of conveyors, evisceration areas and cutting rooms',
        paragraphs: [
          'After a dry clean-up and pre-rinse, foam is applied to conveyors, shackle lines, machine frames, walls and floors. The foam clings to vertical and overhead surfaces and gives the alkaline chemistry time to break down fat and protein before rinsing. Clastox Foam and Alkalox Foam are high-foaming alkaline detergents for these soils. Neutrox Foam is an alkali-free option for general cleaning of utensils, walls and less soiled areas.',
        ],
        products: [
          'high-foaming-alkaline-detergent-clastox-foam',
          'alkaline-foam-cleaner-alkalox-foam',
          'multipurpose-foam-detergent-neutrox-foam',
        ],
      },
      {
        heading: 'Chlorinated alkaline daily clean and scale control',
        paragraphs: [
          'Chlorox Foam is a chlorinated alkaline cleaner for daily cleaning in meat and poultry plants, and works as a 2-in-1 cleaner and sanitiser. It is useful where blood and protein stains build up on surfaces. Where hard water or scalding leaves mineral deposits on stainless steel and tiles, Acidox Foam removes scale and inorganic soils on open surfaces. Do not mix chlorinated and acidic products; rinse thoroughly between them.',
          'Crates, trays, hooks and dismantled parts can be soaked or washed in a heavy-duty alkaline detergent such as Clastox Plus, which penetrates animal fats.',
        ],
        products: [
          'chlorinated-alkaline-foam-cleaner-chlorox-foam',
          'acidic-foam-cleaner-acidox-foam',
          'low-foam-alkaline-detergent-clastox-plus',
        ],
      },
      {
        heading: 'Sanitising after cleaning',
        paragraphs: [
          'Once surfaces are clean and rinsed, a sanitiser reduces microorganisms before production restarts. Sanix Peraxy, based on peracetic acid, and Sanix Quat, based on quaternary ammonium, are used on pre-cleaned food-contact surfaces. Sanixol is ready to use and does not need rinsing, which suits knives, small tools and touch points between cleans. Sanix Duo cleans and sanitises lightly soiled surfaces in one step.',
        ],
        products: [
          'peracetic-acid-sanitizer-sanix-peraxy',
          'quat-sanitizer-sanix-quat',
          'alcohol-surface-sanitizer-sanixol',
          'cleaner-sanitizer-sanix-duo',
        ],
      },
      {
        heading: 'Floors, drains and loading areas',
        paragraphs: [
          'Fat that reaches the drains hardens into sludge and causes odour and slow drainage. Blaze Drain is a non-acidic drain maintainer that breaks down grease and fat build-up. For dispatch bays, loading docks and plant-room floors with oil and grease from vehicles and machinery, Novel OGR is a low-foam floor cleaner.',
        ],
        products: ['drain-cleaner-blaze-drain', 'oil-grease-remover-novel-ogr'],
      },
      {
        heading: 'Hand hygiene and boot-wash stations',
        paragraphs: [
          'Staff entering production should wash hands with a colourless, perfume-free handwash, then use a hand sanitiser. At boot-wash points, boots should be cleaned of fat and debris before any sanitising step; ask our technical team which product and dilution suits your boot-wash or foot-dip set-up.',
        ],
        products: [
          'antibacterial-hand-wash-lush-care-plus',
          'perfume-free-hand-wash-lush-care',
          'gel-hand-sanitizer-lush-care-gel',
        ],
      },
    ],
    faqs: [
      { q: 'What is the usual cleaning sequence in a poultry processing plant?', a: 'Dry clean-up to remove solids, pre-rinse, foam with an alkaline or chlorinated alkaline cleaner, rinse, then sanitise the cleaned surfaces. Acid cleaning is added periodically where scale builds up.' },
      { q: 'Is Chlorox Foam a sanitiser as well as a cleaner?', a: 'Chlorox Foam is a chlorinated alkaline cleaner that functions as a 2-in-1 cleaner and sanitiser for daily cleaning. Many plants still apply a separate sanitiser on food-contact surfaces after cleaning.' },
      { q: 'Do you supply chemicals for poultry farms?', a: 'This range is for processing plants: slaughter, cutting, packing and cold rooms. For farm or livestock applications, contact our team before ordering.' },
      { q: 'How do we stop drains from blocking with fat?', a: 'Remove solids before washing down, and use a drain maintainer such as Blaze Drain regularly to break down grease and fat sludge.' },
    ],
    related: [
      { path: '/case-studies/poultry-plant-hygiene-programme/', label: 'Poultry plant hygiene programme', eyebrow: 'Case study' },
      { path: '/solutions/open-plant-cleaning-chemicals/', label: 'Open-plant foam cleaning chemicals', eyebrow: 'Solution' },
      { path: '/solutions/sanitization-chemicals/', label: 'Sanitisation chemicals', eyebrow: 'Solution' },
    ],
  },

  // 4. Hospitality and commercial kitchens
  {
    kind: 'industry',
    slug: 'hospitality',
    name: 'Hospitality and commercial kitchens',
    title: 'Hotel Cleaning Chemicals Supplier for Hospitality | Evochem',
    description: 'Hotel cleaning chemicals supplier for housekeeping, kitchens and laundry: room and washroom cleaners, dishwash, degreasers, linen care and guest handwash.',
    h1: 'Hotel Cleaning Chemicals Supplier for Hotels and Restaurants',
    tagline: 'Housekeeping, kitchen, laundry and hand hygiene products from one manufacturer',
    banner: 'assets/image/Hospitality&FoodService.png',
    bannerAlt: 'Hotel restaurant and food service',
    primaryKeyword: 'hotel cleaning chemicals supplier',
    summary: 'One supplier for hotel housekeeping, commercial kitchen, laundry and guest hand hygiene chemicals.',
    intro: [
      'A hotel runs several cleaning operations under one roof: housekeeping for rooms and public areas, a commercial kitchen and dishwash, an in-house or outsourced laundry, and washrooms that guests judge you by. Lodges, quick service restaurants and cloud kitchens run smaller versions of the same mix.',
      'Evochem is a hotel cleaning chemicals supplier that manufactures all four ranges in Bengaluru. Buying from one manufacturer means one set of dilution charts and MSDS sheets, one point of contact for training, and fewer products on the store shelf.',
    ],
    sections: [
      {
        heading: 'Housekeeping: guest rooms, washrooms and public areas',
        paragraphs: [
          'The EVO range is concentrated and organised by task. EVO 2 is a slightly alkaline hard surface cleaner for floors, walls and fixtures, EVO 7 a neutral floor cleaner for daily mopping or machines, EVO 1 a bathroom cleaner for soap scum and lime deposits, and EVO 6 a thick toilet bowl cleaner. EVO 3 handles glass and mirrors, EVO 4 restores wooden furniture, EVO SP polishes non-food-contact stainless steel and EVO 5 freshens rooms and corridors. For carpets, EVO 101 is a shampoo and EVO 103 a prespotter for stubborn stains.',
        ],
        products: [
          'hard-surface-cleaner-evo-2',
          'neutral-floor-cleaner-evo-7',
          'bathroom-cleaner-evo-1',
          'toilet-bowl-cleaner-evo-6',
          'glass-cleaner-concentrate-evo-3',
          'furniture-maintainer-evo-4',
          'carpet-shampoo-evo-101',
          'air-freshener-evo-5',
        ],
      },
      {
        heading: 'Commercial kitchens, dishwash and QSR back-of-house',
        paragraphs: [
          'Blaze Auto and Blaze Rinse work together in automatic dishwashers; Blaze Auto is not recommended for soft metals such as aluminium. Blaze Dish handles pot-wash and manual dishwashing, and Blaze Dip removes tea, coffee and burnt-food stains from crockery. Blaze Kitchen Care and Blaze Multi Plus cut grease on surfaces, floors and walls, Blaze Grill removes carbon from ovens, fryers and hoods, and Blaze Drain keeps kitchen drains clear of grease. Blaze Tab chlorine tablets sanitise cleaned food-contact surfaces and vegetables.',
        ],
        products: [
          'dishwasher-detergent-blaze-auto',
          'dishwasher-rinse-aid-blaze-rinse',
          'dishwashing-liquid-blaze-dish',
          'crockery-destainer-blaze-dip',
          'kitchen-care-concentrate-blaze-kitchen-care',
          'oven-grill-cleaner-blaze-grill',
          'chlorine-tablets-blaze-tab',
          'drain-cleaner-blaze-drain',
        ],
      },
      {
        heading: 'Hotel laundry: bed linen, towels and F&B linen',
        paragraphs: [
          'Hotel linen carries body soils, cosmetics and, from the restaurant, food and oil stains. The Flox range covers main wash, alkaline boosting for heavy soil, chlorine destaining of white linen, neutralising in the final rinse to prevent yellowing, and softening. Flox Star is dosed at 5 to 15 ml per kg of dry linen and Flox Soft Care at 2 ml per kg of dry linen.',
        ],
        products: [
          'main-wash-laundry-detergent-flox-star',
          'heavy-duty-liquid-laundry-detergent-flox-build',
          'laundry-chlorine-destainer-flox',
          'laundry-sour-neutralizer-flox-sour',
          'fabric-softener-flox-soft-care',
        ],
      },
      {
        heading: 'Guest and staff hand hygiene',
        paragraphs: [
          'Guest washrooms and lobbies call for a handwash that feels premium, while kitchen staff need a colourless, perfume-free product that leaves nothing on food. Lush Pearl and Lush Foamy suit guest areas; Lush Care Plus and Lush Care Gel suit kitchens and service areas.',
        ],
        products: [
          'luxury-hand-wash-lush-pearl',
          'foaming-hand-wash-lush-foamy',
          'antibacterial-hand-wash-lush-care-plus',
          'gel-hand-sanitizer-lush-care-gel',
        ],
      },
      {
        heading: 'Keeping consumption under control',
        bullets: [
          'Dilution charts for each concentrate, posted where the team mixes solutions.',
          'Training for housekeeping, stewarding and laundry staff on the right product for each job.',
          'Bulk 5 L, 20 L, 50 L and 200 L packs to reduce packaging and reorder frequency.',
        ],
      },
    ],
    faqs: [
      { q: 'Can one supplier cover housekeeping, kitchen and laundry chemicals for a hotel?', a: 'Yes. Evochem manufactures housekeeping, kitchen, laundry and hand hygiene ranges, so a hotel can source them from one manufacturer with one set of dilution guidance and MSDS.' },
      { q: 'Which products do cloud kitchens and QSRs usually need?', a: 'Most need a dishwash detergent, a kitchen degreaser, an oven and grill cleaner, a drain maintainer, a food-contact sanitiser such as Blaze Tab, and a perfume-free handwash for staff.' },
      { q: 'Do you train housekeeping and kitchen staff?', a: 'Yes. Our technical team provides dilution guidance and training so each team uses the right product and quantity for the job.' },
      { q: 'Can I use the same cleaner for guest-room floors and the kitchen floor?', a: 'Guest-room floors usually need a neutral or mildly alkaline cleaner, while kitchen floors carry grease and need a degreaser. Using the right product for each area gives better results and avoids residues.' },
    ],
    related: [
      { path: '/solutions/commercial-kitchen-hygiene/', label: 'Commercial kitchen hygiene', eyebrow: 'Solution' },
      { path: '/case-studies/hotel-housekeeping-kitchen-programme/', label: 'Hotel housekeeping and kitchen programme', eyebrow: 'Case study' },
      { path: '/products/institutional-housekeeping-chemicals/', label: 'Institutional housekeeping chemicals', eyebrow: 'Product range' },
    ],
  },

  // 5. Healthcare facilities
  {
    kind: 'industry',
    slug: 'healthcare',
    name: 'Healthcare facilities',
    title: 'Hospital Housekeeping Chemicals for Healthcare | Evochem',
    description: 'Hospital housekeeping chemicals for floors, washrooms, surfaces, kitchens and linen, plus staff hand hygiene. For use within your infection-control protocol.',
    h1: 'Hospital Housekeeping Chemicals for Healthcare Facilities',
    tagline: 'Cleaning products for floors, washrooms, surfaces, kitchens, laundry and hand hygiene in hospitals and clinics',
    banner: 'assets/image/HealthCareFacility.jpg',
    bannerAlt: 'Hospital corridor and patient care area',
    primaryKeyword: 'hospital housekeeping chemicals',
    summary: 'Floor, washroom, surface, kitchen, laundry and hand hygiene products for hospitals and clinics, used within your infection-control protocol.',
    intro: [
      'Hospitals, nursing homes, diagnostic centres and clinics clean around the clock, across wards, OPD areas, corridors, washrooms, staff canteens, patient kitchens and linen rooms. The housekeeping team needs products that are simple to dilute correctly, safe on the surfaces in use and consistent from shift to shift.',
      'Evochem manufactures hospital housekeeping chemicals for the cleaning side of that work. Product choice, frequencies and any disinfection step in clinical areas should follow your facility’s infection-control protocol. Our products are for cleaning, and where stated in the product data, for sanitising surfaces that have already been cleaned.',
    ],
    sections: [
      {
        heading: 'Floors and hard surfaces in wards and corridors',
        paragraphs: [
          'Cleaning removes the soil that would otherwise shield microorganisms, so it comes before any sanitising or disinfection step your protocol specifies. EVO 7 is a neutral floor cleaner for daily mopping and scrubber-dryers that leaves no residue or marks. EVO 2 is a slightly alkaline, non-abrasive hard surface cleaner for walls, counters, bed frames and fixtures. EVO 3 cleans glass partitions and mirrors.',
        ],
        products: ['neutral-floor-cleaner-evo-7', 'hard-surface-cleaner-evo-2', 'glass-cleaner-concentrate-evo-3', 'cream-cleaner-evo-zap'],
      },
      {
        heading: 'Washrooms and patient toilets',
        paragraphs: [
          'Washrooms see soap scum, hard-water scale and urine deposits. EVO 1 is an organic-acid bathroom cleaner for sinks, showers and fittings, EVO 6 a thick toilet bowl cleaner that clings to the bowl, and EVO 9 a heavy-duty descaler for periodic deep cleaning of tiles and ceramics. EVO 5 helps control odours in corridors and toilets.',
        ],
        products: ['bathroom-cleaner-evo-1', 'toilet-bowl-cleaner-evo-6', 'heavy-duty-descaler-evo-9', 'air-freshener-evo-5'],
      },
      {
        heading: 'Patient and staff kitchens',
        paragraphs: [
          'Hospital kitchens follow the same clean-then-sanitise sequence as any food service kitchen. Blaze Kitchen Care removes grease from surfaces and utensils, Blaze Auto and Blaze Rinse run the dishwasher, and Blaze Tab chlorine tablets are used to sanitise cleaned food-contact surfaces and vegetables.',
        ],
        products: [
          'kitchen-care-concentrate-blaze-kitchen-care',
          'dishwasher-detergent-blaze-auto',
          'dishwasher-rinse-aid-blaze-rinse',
          'chlorine-tablets-blaze-tab',
        ],
      },
      {
        heading: 'Hospital linen',
        paragraphs: [
          'Linen from wards and theatres is often heavily stained and is handled under the facility’s own segregation and wash protocol. Within that process, Flox Star is a concentrated main wash detergent, the Flox chlorine destainer removes stains from white linen, and Flox Sour neutralises alkalinity and bleach residue in the final rinse so fabric does not yellow. Flox Star is dosed at 5 to 15 ml per kg of dry linen.',
        ],
        products: ['main-wash-laundry-detergent-flox-star', 'laundry-chlorine-destainer-flox', 'laundry-sour-neutralizer-flox-sour'],
      },
      {
        heading: 'Hand hygiene for staff and visitors',
        paragraphs: [
          'Lush Care and Lush Care Plus are colourless, perfume-free handwashes suited to frequent use by staff. Lush Care Rub and Lush Care Gel are waterless hand sanitisers for use at points where a sink is not at hand. Place and use them as your hand hygiene policy requires.',
        ],
        products: [
          'perfume-free-hand-wash-lush-care',
          'antibacterial-hand-wash-lush-care-plus',
          'liquid-hand-sanitizer-lush-care-rub',
          'gel-hand-sanitizer-lush-care-gel',
        ],
      },
      {
        heading: 'Working with your infection-control team',
        bullets: [
          'Share your housekeeping SOPs and area classification, so we match products to each area rather than the other way round.',
          'Use the dilution given in the product data for each product, and mix fresh solutions as your SOP specifies.',
          'Keep the MSDS for every product in the housekeeping store and at mixing points.',
          'Ask our technical team to train supervisors and new housekeeping staff on product selection and dilution.',
        ],
      },
    ],
    faqs: [
      { q: 'Are these products disinfectants for clinical areas?', a: 'No claim is made here that they disinfect clinical areas. They are cleaning products, and some sanitise pre-cleaned surfaces as stated in their product data; your infection-control team should specify any disinfectant and where it is used.' },
      { q: 'Why does cleaning come before sanitising or disinfection?', a: 'Soil and organic matter reduce how well sanitisers and disinfectants work. Removing soil first lets the next step act on a clean surface.' },
      { q: 'Which floor cleaner suits hospital corridors with scrubber-dryers?', a: 'EVO 7 is a neutral floor cleaner suitable for manual and machine cleaning and is designed not to leave residues or marks.' },
      { q: 'Can you train our housekeeping staff?', a: 'Yes. We provide dilution guidance and training on product use, and MSDS for every product, to support your own protocols.' },
    ],
    related: [
      { path: '/resources/healthcare-cleaning-protocols/', label: 'Healthcare cleaning protocols', eyebrow: 'Guide' },
      { path: '/solutions/washroom-cleaning-chemicals/', label: 'Washroom cleaning chemicals', eyebrow: 'Solution' },
      { path: '/solutions/hand-hygiene/', label: 'Hand hygiene products', eyebrow: 'Solution' },
    ],
  },

  // 6. Commercial laundry
  {
    kind: 'industry',
    slug: 'commercial-laundry',
    name: 'Commercial laundry',
    title: 'Hotel Laundry Chemicals and Institutional Detergent | Evochem',
    description: 'Hotel laundry chemicals and institutional laundry detergent: destainer, sour and softener for OPLs, hotel laundries, hospital linen and institutions.',
    h1: 'Hotel Laundry Chemicals and Institutional Laundry Detergent',
    tagline: 'Detergents, boosters, destainers, sours and softeners for on-premise and institutional laundries',
    banner: 'assets/image/CommercialLaundries.jpg',
    bannerAlt: 'Commercial laundry washer-extractors',
    primaryKeyword: 'hotel laundry chemicals',
    summary: 'Laundry chemicals for on-premise, hotel, hospital and institutional laundries, with guidance on machines, linen types and supplier questions.',
    intro: [
      'A laundry that washes for a hotel, hospital, hostel or industrial client is a business with its own costs: water, power, labour, chemicals and linen replacement. The chemical programme affects all of them. A detergent that leaves residue means more rinses; a destainer overdosed on coloured linen means early replacement.',
      'Evochem manufactures laundry chemicals for hotels and institutions in Bengaluru and supports laundries with dosing guidance and staff training. This page looks at the laundry as an operation. For the wash process step by step, see our laundry hygiene solution page.',
    ],
    sections: [
      {
        heading: 'Types of laundry we supply',
        bullets: [
          'On-premise laundries (OPLs) in hotels, resorts and serviced apartments.',
          'Hospital and nursing-home linen rooms, working within their own infection-control protocol.',
          'Institutional laundries for hostels, training centres, hospitals and factories.',
          'Commercial laundries washing for several hotels, restaurants or clinics.',
        ],
      },
      {
        heading: 'Machines and how they affect chemical choice',
        paragraphs: [
          'Washer-extractors are the most common machine in Indian OPLs and institutional laundries. Liquid products suit automatic dosing pumps, which give consistent dosing load after load; powders suit laundries that dose by hand. Where both are available, the choice usually comes down to how you dose and how you store stock.',
          'Water hardness matters as much as the machine. Hard water reduces detergent performance and can leave linen grey and stiff, so share your water analysis when you ask for a dosing chart.',
        ],
      },
      {
        heading: 'Matching products to linen and soil',
        paragraphs: [
          'White cotton bed linen and towels tolerate a chlorine destainer; coloured and polyester-blend linen generally needs a gentler process. Restaurant napkins and kitchen cloths carry oil and fat that benefit from a pre-wash or alkaline booster. Doses below are per kg of dry linen, as given in the product data.',
        ],
        bullets: [
          'Pre-wash for oily linen: Flox (Pre-Wash Detergent), 2 to 4 ml per kg of dry linen.',
          'Main wash: Flox Star liquid, 5 to 15 ml per kg of dry linen, or Star Powder, 5 to 15 g per kg of dry linen.',
          'Alkaline booster for heavy soil: Flox Build, 5 to 15 ml per kg of dry linen.',
          'Destaining whites: Flox (Laundry Chlorine Destainer), 3 to 15 ml per kg of dry linen.',
          'Final rinse neutraliser: Flox Sour liquid, 5 to 15 ml per kg of dry linen, or Flox Rinse powder, 5 to 15 g per kg of dry linen.',
          'Softening: Flox Soft Care, 2 ml per kg of dry linen.',
        ],
        products: [
          'pre-wash-laundry-detergent-flox',
          'main-wash-laundry-detergent-flox-star',
          'laundry-detergent-powder-star-powder',
          'heavy-duty-liquid-laundry-detergent-flox-build',
          'laundry-chlorine-destainer-flox',
          'laundry-sour-neutralizer-flox-sour',
          'laundry-neutralizing-powder-flox-rinse',
          'fabric-softener-flox-soft-care',
        ],
      },
      {
        heading: 'Hygiene for laundry staff and the laundry room',
        paragraphs: [
          'Staff sorting soiled linen should wash hands regularly, and the laundry floor collects lint, detergent spills and water. A handwash and hand sanitiser at the sorting area, and a neutral floor cleaner for the room, complete the set.',
        ],
        products: ['perfume-free-hand-wash-lush-care', 'liquid-hand-sanitizer-lush-care-rub', 'neutral-floor-cleaner-evo-7'],
      },
      {
        heading: 'What to ask a laundry chemical supplier',
        bullets: [
          'Is the supplier the manufacturer, and can it supply consistently in the pack sizes you use?',
          'Will it provide a dosing chart per programme, based on your machines, linen and water?',
          'Is an MSDS available for every product?',
          'Who trains your operators, and who do you call when results change?',
          'Are the product names and doses on the chart the same as on the drums in your store?',
        ],
      },
    ],
    faqs: [
      { q: 'What chemicals does a hotel laundry need?', a: 'Most hotel laundries use a main wash detergent, an alkaline booster for heavy soil, a chlorine destainer for whites, a sour to neutralise the final rinse, and a fabric softener. A pre-wash helps with oily F&B linen.' },
      { q: 'Should we use liquid or powder laundry detergent?', a: 'Liquids suit automatic dosing pumps and give consistent doses; powders suit manual dosing. Evochem supplies both, so choose based on how your laundry doses.' },
      { q: 'Why does white linen turn yellow?', a: 'Residual alkalinity and bleach left in fabric is a common cause. A sour such as Flox Sour or Flox Rinse in the final rinse neutralises these residues.' },
      { q: 'Can you prepare a dosing chart for our machines?', a: 'Yes. Share your machine capacities, linen types, soil levels and water hardness, and our technical team will recommend products and doses per kg of dry linen.' },
    ],
    related: [
      { path: '/solutions/laundry-hygiene/', label: 'Laundry hygiene: the wash process', eyebrow: 'Solution' },
      { path: '/products/commercial-laundry-chemicals/', label: 'Commercial laundry chemicals range', eyebrow: 'Product range' },
      { path: '/resources/commercial-laundry-wash-process/', label: 'Commercial laundry wash process guide', eyebrow: 'Guide' },
    ],
  },

  // 7. Manufacturing and warehousing
  {
    kind: 'industry',
    slug: 'manufacturing-warehousing',
    name: 'Manufacturing and warehousing',
    title: 'Factory Cleaning Chemicals Supplier in India | Evochem',
    description: 'Factory cleaning chemicals for oily shop floors, machine-shop grease, warehouses and cold stores, plus washroom, canteen and heavy-duty hand wash products.',
    h1: 'Factory Cleaning Chemicals Supplier for Manufacturing and Warehousing',
    tagline: 'Floor degreasers, washroom, canteen and hand hygiene products for factories, warehouses and cold storage',
    banner: 'assets/image/Manufacturing&Warehouse.jpg',
    bannerAlt: 'Factory and warehouse floor',
    primaryKeyword: 'factory cleaning chemicals supplier',
    summary: 'Floor degreasers, machine-shop cleaning, washroom, canteen and heavy-duty hand wash products for factories, warehouses and cold storage.',
    intro: [
      'Factories and warehouses have cleaning needs that office-grade products do not meet. Machine shops and assembly lines leave oil, grease, coolant and carbon on the floor; forklifts track tyre marks and dust through warehouses; and workers need washrooms, canteens and handwash points that stay usable across shifts.',
      'Evochem manufactures factory cleaning chemicals in Bengaluru and supplies plants, warehouses and cold stores across India in bulk packs. The range below covers production floors, support areas and the people who work in them.',
    ],
    sections: [
      {
        heading: 'Oily floors and machine-shop grease',
        paragraphs: [
          'Novel HD is a heavy-duty floor cleaner for the worst areas: tar, grease, carbon and industrial spills on heavily soiled floors. Novel OGR is a low-foam oil and grease remover with rapid emulsifying action, suited to scrubber-dryers and workshops where foam is a nuisance and a slip risk. Both are used at 2% to 5% depending on soil.',
          'For routine mopping of painted, epoxy or tiled floors in assembly and packing areas, EVO 7 is a neutral floor cleaner that suits manual and machine cleaning.',
        ],
        products: ['heavy-duty-floor-cleaner-novel-hd', 'oil-grease-remover-novel-ogr', 'neutral-floor-cleaner-evo-7'],
      },
      {
        heading: 'Warehouses and cold storage',
        paragraphs: [
          'Warehouse floors mainly carry dust, packaging debris and tyre marks, so a scrubber-dryer with a low-foam cleaner keeps aisles clean without wet residue. Cold stores holding food need the same clean-then-sanitise discipline as food plants for racks, doors and handling surfaces. Low temperatures affect how cleaning solutions behave, so ask our technical team before setting up a routine for chilled or frozen areas.',
        ],
        products: ['oil-grease-remover-novel-ogr', 'hard-surface-cleaner-evo-2', 'quat-sanitizer-sanix-quat'],
      },
      {
        heading: 'Washrooms and amenities',
        paragraphs: [
          'Shop-floor washrooms carry heavier traffic than office washrooms. EVO 1 removes soap scum and lime deposits from fittings, EVO 6 cleans toilet bowls, and EVO 9 is a heavy-duty descaler for periodic deep cleaning of tiles and ceramics. EVO 2 handles walls, partitions and changing-room benches.',
        ],
        products: ['bathroom-cleaner-evo-1', 'toilet-bowl-cleaner-evo-6', 'heavy-duty-descaler-evo-9', 'hard-surface-cleaner-evo-2'],
      },
      {
        heading: 'Canteens and pantries',
        paragraphs: [
          'Factory canteens are commercial kitchens with tight shift schedules. Blaze Kitchen Care removes grease from utensils, counters and floors, Blaze Auto and Blaze Rinse run dishwashers, Blaze Tab sanitises cleaned food-contact surfaces and vegetables, and Blaze Drain keeps canteen drains clear of fat.',
        ],
        products: [
          'kitchen-care-concentrate-blaze-kitchen-care',
          'dishwasher-detergent-blaze-auto',
          'dishwasher-rinse-aid-blaze-rinse',
          'chlorine-tablets-blaze-tab',
          'drain-cleaner-blaze-drain',
        ],
      },
      {
        heading: 'Hand hygiene for workers',
        paragraphs: [
          'Mechanics, machine operators and maintenance crews need a hand wash that removes oil and grease without drying the skin. Lush Power is a heavy-duty hand wash made for this. For general handwash points in canteens and washrooms, Lush Fresh is a mild everyday hand wash.',
        ],
        products: ['heavy-duty-hand-wash-lush-power', 'general-hand-wash-lush-fresh'],
      },
      {
        heading: 'Setting up a plant cleaning routine',
        bullets: [
          'Map the areas: production floor, machine shop, stores, loading bays, washrooms and canteen.',
          'Assign one product and one dilution to each area, and post the chart where solutions are mixed.',
          'Decide which areas are cleaned every shift, daily and weekly, and which need periodic deep cleaning.',
          'Train shift cleaning crews, and review consumption against area and frequency every month.',
        ],
      },
    ],
    faqs: [
      { q: 'What is the best cleaner for oily factory floors?', a: 'For heavy oil, grease and carbon, use a heavy-duty floor cleaner such as Novel HD. For routine degreasing with a scrubber-dryer, a low-foam cleaner such as Novel OGR is easier to manage.' },
      { q: 'Why use a low-foam floor cleaner in a factory?', a: 'Scrubber-dryers recover solution through a vacuum system, and excess foam can overflow the recovery tank. Low-foam products also leave less residue that could make floors slippery.' },
      { q: 'Do you have a hand wash for oily hands?', a: 'Yes. Lush Power is a heavy-duty hand wash for mechanics and workshop staff that removes oils, soils and greases while being gentle on skin.' },
      { q: 'Can you supply all our plant locations?', a: 'We supply pan-India in 5 L, 20 L, 50 L and 200 L packs. Share your locations and monthly volumes and our team will advise on supply.' },
    ],
    related: [
      { path: '/products/industrial-cleaning-degreasing-chemicals/', label: 'Industrial cleaning and degreasing chemicals', eyebrow: 'Product range' },
      { path: '/solutions/floor-care-chemicals/', label: 'Floor care chemicals', eyebrow: 'Solution' },
      { path: '/resources/low-foam-floor-cleaner-scrubber-dryer/', label: 'Low-foam floor cleaners for scrubber-dryers', eyebrow: 'Guide' },
    ],
  },

  // 8. Facility management and commercial buildings
  {
    kind: 'industry',
    slug: 'facility-management',
    name: 'Facility management and commercial buildings',
    title: 'Facility Management Cleaning Chemicals | Evochem',
    description: 'Facility management cleaning chemicals for offices, IT parks, malls and schools: concentrated housekeeping kits, floor, washroom, glass and carpet care.',
    h1: 'Facility Management Cleaning Chemicals for Commercial Buildings',
    tagline: 'Concentrated housekeeping kits for offices, IT parks, malls, schools and places of worship',
    banner: 'assets/image/CommercialBuildings.jpg',
    bannerAlt: 'Commercial office building',
    primaryKeyword: 'facility management cleaning chemicals',
    summary: 'Concentrated housekeeping kits, floor care, washroom, glass, carpet and hand hygiene products for facility managers and commercial buildings.',
    intro: [
      'Facility management companies and in-house admin teams look after offices, IT parks, malls, schools, colleges and places of worship, often across several sites. The cleaning has to look consistent everywhere, the chemical spend has to be predictable, and the products have to be simple enough for a rotating housekeeping team to use correctly.',
      'Evochem manufactures facility management cleaning chemicals in Bengaluru as concentrates with clear dilution ranges, so one drum goes a long way and every site can work from the same chart.',
    ],
    sections: [
      {
        heading: 'A standard housekeeping chemical kit',
        paragraphs: [
          'Most commercial buildings can run daily housekeeping on a short list of products. Keeping the list short makes training easier, reduces store inventory and makes it harder for staff to use the wrong product.',
        ],
        bullets: [
          'EVO 2 hard surface cleaner for desks, walls, counters and fixtures.',
          'EVO 7 neutral floor cleaner for daily mopping and machines.',
          'EVO 1 bathroom cleaner and EVO 6 toilet bowl cleaner for washrooms.',
          'EVO 3 glass cleaner concentrate for glass, mirrors and partitions.',
          'EVO 5 air freshener for washrooms, lifts and corridors.',
        ],
        products: [
          'hard-surface-cleaner-evo-2',
          'neutral-floor-cleaner-evo-7',
          'bathroom-cleaner-evo-1',
          'toilet-bowl-cleaner-evo-6',
          'glass-cleaner-concentrate-evo-3',
          'air-freshener-evo-5',
        ],
      },
      {
        heading: 'Dilution control and consumption',
        paragraphs: [
          'Overdosing is the most common reason chemical spend runs over budget, and it also leaves sticky residues that attract soil. Each EVO concentrate has a dilution range in its product data, for example 2% to 5% for EVO 2 and EVO 7 and 2% to 10% for EVO 3. Mixing in marked bottles or using dispensers, and posting a dilution chart in each janitor room, keeps usage consistent across sites.',
        ],
      },
      {
        heading: 'Floor care: lobbies, basements and food courts',
        paragraphs: [
          'Polished stone and vitrified tile in lobbies need a neutral cleaner that does not dull the finish. Basement parking and service areas pick up oil and tyre marks that need a degreaser; Novel OGR is a low-foam option for scrubber-dryers, and Novel HD handles heavy grease and tar. Food courts and cafeterias carry grease into the seating area, where a low-foam degreaser also works well.',
        ],
        products: ['neutral-floor-cleaner-evo-7', 'oil-grease-remover-novel-ogr', 'heavy-duty-floor-cleaner-novel-hd'],
      },
      {
        heading: 'Washrooms, steel, wood and carpets',
        paragraphs: [
          'High-traffic washrooms in malls and IT parks need periodic descaling as well as daily cleaning; EVO 9 is a heavy-duty descaler for tiles and ceramics, and EVO ZAP is a cream cleaner for scale, rust and soap scum on fittings. EVO SP polishes lift panels and other non-food-contact stainless steel, and EVO 4 maintains wooden furniture and fixtures. For carpeted offices and halls, use EVO 103 to pre-treat stains and EVO 101 to shampoo.',
        ],
        products: [
          'heavy-duty-descaler-evo-9',
          'cream-cleaner-evo-zap',
          'stainless-steel-polish-evo-sp',
          'furniture-maintainer-evo-4',
          'carpet-prespotter-evo-103',
          'carpet-shampoo-evo-101',
        ],
      },
      {
        heading: 'Hand hygiene in washrooms and entrances',
        paragraphs: [
          'Lush Pearl suits premium washrooms in offices and malls, Lush Foamy and Lush Fresh suit high-use washrooms in schools and campuses, and Lush Care Rub is a waterless hand sanitiser for reception desks and entrances.',
        ],
        products: [
          'luxury-hand-wash-lush-pearl',
          'foaming-hand-wash-lush-foamy',
          'general-hand-wash-lush-fresh',
          'liquid-hand-sanitizer-lush-care-rub',
        ],
      },
    ],
    faqs: [
      { q: 'What chemicals does an office housekeeping team need?', a: 'Usually a hard surface cleaner, a neutral floor cleaner, a bathroom cleaner, a toilet bowl cleaner, a glass cleaner and a handwash. Carpet, steel and furniture products are added where the building needs them.' },
      { q: 'How can we reduce housekeeping chemical consumption across sites?', a: 'Use concentrates, mix at the dilution given in the product data, use marked bottles or dispensers, and post a dilution chart in each janitor room. Our team can train supervisors on this.' },
      { q: 'Are these products suitable for schools and places of worship?', a: 'Yes. The EVO housekeeping range covers floors, washrooms, glass, furniture and carpets found in schools, colleges and places of worship.' },
      { q: 'Can you supply facility management companies with many sites?', a: 'Yes. We supply pan-India in 5 L, 20 L, 50 L and 200 L packs, with the same products and dilution guidance for every site.' },
    ],
    related: [
      { path: '/case-studies/facility-washroom-floor-care-programme/', label: 'Facility washroom and floor care programme', eyebrow: 'Case study' },
      { path: '/resources/reduce-housekeeping-chemical-consumption/', label: 'How to reduce housekeeping chemical consumption', eyebrow: 'Guide' },
      { path: '/solutions/washroom-cleaning-chemicals/', label: 'Washroom cleaning chemicals', eyebrow: 'Solution' },
    ],
  },
];
