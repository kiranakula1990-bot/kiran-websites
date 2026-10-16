// Product category pages (one per product group in evochem-data.json). The page template renders a grid of every
// product in the category after the intro, so sections here give selection guidance rather than listing products.
// Products are referenced by permanent slug. No certification claims, kill claims, customer names, prices or
// invented results (handover section 9).

import { ContentPage } from './content-model';

export const CATEGORIES: ContentPage[] = [
  // Group 1.
  {
    kind: 'category',
    slug: 'industrial-cleaning-degreasing-chemicals',
    name: 'Industrial hygiene',
    title: 'Industrial Degreasers and Cleaning Chemicals | Evochem',
    description: 'Industrial degreaser manufacturer in India: heavy-duty floor cleaner, low-foam oil and grease remover and workshop hand wash for factories and warehouses.',
    h1: 'Industrial Cleaning Chemicals and Degreasers',
    tagline: 'The Novel range for oil, grease, carbon and heavy soil in factories, workshops and warehouses',
    banner: 'assets/image/cateback1.webp',
    bannerAlt: 'Industrial cleaning and degreasing chemicals',
    primaryKeyword: 'industrial degreasers',
    summary: 'Heavy-duty floor cleaner, low-foam oil and grease remover and heavy-duty handwash for industrial sites.',
    intro: [
      'Factories, workshops, warehouses, loading bays and cold storage deal with the toughest soil in any building: lubricating oil, hydraulic fluid, grease, tyre marks, tar, carbon and mineral deposits ground into the floor by forklifts and foot traffic. Evochem’s Novel range is made for this soil, and works at low concentrations so you use less product per clean.',
      'Choose by three things: how heavy the soil is, whether you clean by hand or with a scrubber-dryer, and who else on site needs cleaning products. The range also includes a heavy-duty handwash for the maintenance and workshop staff who handle the same oils and greases. Every product is made in Bengaluru and comes with dilution guidance and an MSDS.',
    ],
    sections: [
      {
        heading: 'Heavy-duty cleaner or low-foam degreaser',
        paragraphs: [
          'Novel HD is the stronger choice for heavily soiled floors, breaking down tar, grease, carbon and mineral deposits. Novel OGR removes grease, oil and water-soluble dirt with a rapid, high-emulsifying action, and its low-foam formula suits scrubber-dryers and areas where foam would slow rinsing or leave floors slippery.',
        ],
        bullets: [
          'Heavy, ground-in soil on factory and warehouse floors: Novel HD.',
          'Oil and grease in workshops, restaurants and factories, or any machine scrubbing: Novel OGR.',
          'Never put a high-foaming product into a scrubber-dryer.',
        ],
        products: ['heavy-duty-floor-cleaner-novel-hd', 'oil-grease-remover-novel-ogr'],
      },
      {
        heading: 'Getting the dilution right',
        paragraphs: [
          'Both Novel HD and Novel OGR are used at 2% to 5% (20 ml to 50 ml per litre of water) depending on soil. Start at the lower end for routine cleaning and increase only for heavy soil. Overdosing leaves a film that attracts dirt and can make floors slippery, so sweep before cleaning and rinse oily floors with clean water afterwards.',
        ],
      },
      {
        heading: 'Hand cleaning for workshop and maintenance staff',
        paragraphs: [
          'Lush Power removes stubborn oils, soils and greases from hands while retaining natural moisture, and is an antibacterial-free option. Place it at workshop exits and maintenance bays so staff wash before breaks and before entering clean areas.',
        ],
        products: ['heavy-duty-hand-wash-lush-power'],
      },
      {
        heading: 'Building a site cleaning routine',
        paragraphs: [
          'Industrial floors stay safe and presentable when light cleaning happens often and heavy cleaning is planned, rather than waiting for soil to build up.',
        ],
        bullets: [
          'Every shift: dry-sweep traffic aisles and deal with spills straight away. Absorb free oil first, then clean the area so no film is left.',
          'Daily: scrub production aisles, canteens and entrances with Novel OGR, by hand or with a scrubber-dryer.',
          'Weekly or as needed: heavy-clean loading bays, workshop floors and the areas around machines and compressors with Novel HD.',
          'Always: keep a handwash station with Lush Power at workshop exits.',
        ],
      },
    ],
    faqs: [
      { q: 'How should I clean up an oil spill on a factory floor?', a: 'Contain and absorb the free oil first, then clean the area with Novel OGR or Novel HD at the dilution for the soil, and rinse so no slippery film is left.' },
      { q: 'Which product should I use in a scrubber-dryer?', a: 'Use Novel OGR, which is low-foam. Foam fills the recovery tank of a floor machine, so high-foaming products should not be used.' },
      { q: 'What dilution do Novel HD and Novel OGR need?', a: 'Both are used at 2% to 5% (20 ml to 50 ml per litre of water) depending on soil. Start low and increase only for heavier soil.' },
      { q: 'Are these products suitable for food production areas?', a: 'Food production areas usually use food-industry cleaners and sanitisers from our food processing hygiene range. Ask our technical team which products fit each area of your plant.' },
      { q: 'Do you supply industrial cleaning chemicals in bulk?', a: 'Yes. We manufacture in Bengaluru and supply 5 L, 20 L, 50 L and 200 L packs with pan-India delivery.' },
    ],
    related: [
      { path: '/solutions/floor-care-chemicals/', label: 'Industrial floor cleaner and floor care', eyebrow: 'Solution' },
      { path: '/industries/manufacturing-warehousing/', label: 'Cleaning for manufacturing and warehousing', eyebrow: 'Industry' },
      { path: '/resources/low-foam-floor-cleaner-scrubber-dryer/', label: 'Low-foam floor cleaners for scrubber-dryers', eyebrow: 'Guide' },
    ],
  },

  // Group 2.
  {
    kind: 'category',
    slug: 'commercial-laundry-chemicals',
    name: 'Laundry care',
    title: 'Commercial Laundry Chemicals Manufacturer | Evochem',
    description: 'Commercial laundry chemicals from a laundry chemical supplier in India: pre-wash, main wash, builder, chlorine destainer, sour and softener for hotels.',
    h1: 'Commercial Laundry Chemicals',
    tagline: 'The Flox range for every stage of the wash, from pre-wash to final rinse',
    banner: 'assets/image/cateback2.webp',
    bannerAlt: 'Commercial laundry chemicals',
    primaryKeyword: 'commercial laundry chemicals',
    summary: 'Pre-wash, main wash, builder, chlorine destainer, sour and softener for on-premise and commercial laundries.',
    intro: [
      'Evochem’s Flox range covers each stage of a commercial wash: a pre-wash detergent for oils and fats, liquid and powder main wash detergents, an alkaline builder, a chlorine destainer for white linen, liquid and powder sours to neutralise the final rinse, and a concentrated fabric softener. Hotels, hospitals, institutional laundries and commercial laundries use them in washer-extractors and industrial machines.',
      'Select products by soil type, linen type and the way you dose. All doses are stated per kg of dry linen, and our technical team can set a wash programme for each linen type and machine. Every product is made in Bengaluru and supplied with an MSDS.',
    ],
    sections: [
      {
        heading: 'Liquid or powder main wash',
        paragraphs: [
          'Flox Star is a concentrated liquid detergent with anti-redeposition agents, safe on all water-washable fabrics in hot and cold water, at 5 to 15 ml per kg of dry linen. Star Powder suspends oily particulates and prevents redeposition at 5 to 15 g per kg of dry linen. Liquids suit automatic dosing systems; powder suits manual dosing.',
          'For heavy grease and fat, add Flox Build, an alkaline builder, at 5 to 15 ml per kg of dry linen, or pre-wash kitchen linen with Flox Pre-Wash Detergent at 2 to 4 ml per kg of dry linen.',
        ],
        products: ['main-wash-laundry-detergent-flox-star', 'laundry-detergent-powder-star-powder', 'heavy-duty-liquid-laundry-detergent-flox-build'],
      },
      {
        heading: 'Destaining and neutralising',
        paragraphs: [
          'Flox Laundry Chlorine Destainer removes stains from white linen in industrial machines at 3 to 15 ml per kg of dry linen. After the alkaline and chlorine stages, a sour in the final rinse neutralises residual alkalinity and bleach to help prevent yellowing: Flox Sour (liquid) at 5 to 15 ml, or Flox Rinse (powder) at 5 to 15 g, per kg of dry linen.',
        ],
        products: ['laundry-chlorine-destainer-flox', 'laundry-sour-neutralizer-flox-sour', 'laundry-neutralizing-powder-flox-rinse'],
      },
      {
        heading: 'Choosing by linen type',
        bullets: [
          'Hotel bed and bath linen: main wash, chlorine destainer for whites, sour, then Flox Soft Care at 2 ml per kg of dry linen.',
          'F&B linen, napkins and kitchen cloths: pre-wash plus main wash and builder for fat and grease.',
          'Coloured linen and uniforms: main wash and sour; do not use the chlorine destainer, and ask our team for a programme.',
          'Hospital and institutional linen: ask our technical team to match the programme to your requirements.',
        ],
      },
    ],
    faqs: [
      { q: 'Which chemicals does a commercial laundry need?', a: 'Most laundries use a main wash detergent, a builder for heavy soil, a chlorine destainer for whites, a sour for the final rinse and a fabric softener. A pre-wash detergent helps with greasy kitchen linen.' },
      { q: 'How much detergent should I use per kg of linen?', a: 'Flox Star is dosed at 5 to 15 ml per kg of dry linen and Star Powder at 5 to 15 g per kg of dry linen, depending on soil and water hardness.' },
      { q: 'What is the difference between Flox Sour and Flox Rinse?', a: 'Both neutralise alkalinity in the final rinse to prevent yellowing. Flox Sour is a liquid and Flox Rinse is a mildly acidic powder.' },
      { q: 'When is fabric softener added?', a: 'Flox Soft Care is added in the final rinse at 2 ml per kg of dry linen. It softens fabric, reduces static cling and makes ironing easier.' },
      { q: 'Why does white linen turn yellow over time?', a: 'Yellowing usually comes from alkalinity or bleach residue left in the fabric, or from soil redepositing during the wash. A correct main wash and a sour in the final rinse help prevent it.' },
      { q: 'Do you supply laundry chemicals in bulk?', a: 'Yes. We supply bulk packs up to 200 L drums with pan-India delivery, and provide dosing guidance and staff training.' },
    ],
    related: [
      { path: '/solutions/laundry-hygiene/', label: 'The commercial laundry process step by step', eyebrow: 'Solution' },
      { path: '/industries/commercial-laundry/', label: 'Chemicals for commercial laundries', eyebrow: 'Industry' },
      { path: '/industries/hospitality/', label: 'Cleaning and hygiene for hotels and hospitality', eyebrow: 'Industry' },
    ],
  },

  // Group 3. The industry page /industries/food-processing/ owns "food processing cleaning chemicals".
  {
    kind: 'category',
    slug: 'food-processing-hygiene-chemicals',
    name: 'Food processing hygiene',
    title: 'Food Industry Cleaning and Sanitation Chemicals | Evochem',
    description: 'Food industry cleaning and sanitation chemicals: foam cleaners, low-foam CIP detergents and sanitisers for dairy, meat, poultry, beverage and food plants.',
    h1: 'Food Industry Cleaning and Sanitation Chemicals',
    tagline: 'Foam cleaners, low-foam CIP detergents and sanitisers for food and beverage plants',
    banner: 'assets/image/cateback3.webp',
    bannerAlt: 'Food industry cleaning and sanitation chemicals',
    primaryKeyword: 'food industry cleaning and sanitation chemicals',
    summary: 'Foam cleaners, CIP detergents and sanitisers for dairy, meat, poultry, beverage and food plants.',
    intro: [
      'This range covers the two halves of food plant hygiene: cleaning, which removes fat, protein, sugar and scale, and sanitation, which reduces microorganisms on surfaces that are already clean. It includes high-foaming cleaners for open surfaces, low-foaming alkaline detergents for CIP circuits and soak tanks, a combined cleaner-sanitiser, and quat, peracetic acid and alcohol-based sanitisers.',
      'Select products by method (foam, CIP or soak), by soil (organic or mineral) and by the sanitising step your food safety plan specifies. Dairies, meat and poultry processors, beverage plants and packaged-food producers use them across production areas. Every product is made in Bengaluru with dilution guidance and an MSDS.',
    ],
    sections: [
      {
        heading: 'Foaming or low-foaming',
        paragraphs: [
          'High-foaming cleaners such as Alkalox Foam, Clastox Foam, Acidox Foam, Chlorox Foam and Neutrox Foam are for open plant cleaning: the foam clings to floors, walls, conveyors and equipment exteriors. Inside closed circuits and in soak tanks, foam gets in the way, so use the low-foaming alkaline detergents Clastox 50 and Clastox Plus at 0.5% to 5%. The range does not include an acid CIP detergent; for that step, ask our technical team.',
        ],
        products: ['alkaline-cip-detergent-clastox-50', 'low-foam-alkaline-detergent-clastox-plus'],
      },
      {
        heading: 'Alkaline, acidic, chlorinated or neutral',
        bullets: [
          'Alkaline for fats, oils and proteins: Alkalox Foam or Clastox Foam at 2% to 5%.',
          'Acidic for scale, mineral deposits and inorganic soils: Acidox Foam at 2% to 5%.',
          'Chlorinated alkaline to clean and sanitise in one daily step: Chlorox Foam at 1% to 5%.',
          'Neutral and alkali-free for general cleaning of floors, walls, utensils and equipment: Neutrox Foam at 2% to 5%.',
          'Never mix acidic and chlorinated products; rinse between them.',
        ],
      },
      {
        heading: 'Choosing a sanitiser',
        paragraphs: [
          'Sanix Quat (0.1% to 0.5%) suits routine sanitising of pre-cleaned surfaces and utensils. Sanix Peraxy (0.1% to 3% v/v depending on the volume) is an oxidising peracetic acid sanitiser, commonly used after CIP. Sanixol is ready to use and needs no rinsing, for quick sanitising of clean, dry surfaces. Sanix Duo (2% to 5%) cleans and sanitises lightly soiled areas in one step, including in hard water.',
        ],
        products: ['quat-sanitizer-sanix-quat', 'peracetic-acid-sanitizer-sanix-peraxy', 'alcohol-surface-sanitizer-sanixol', 'cleaner-sanitizer-sanix-duo'],
      },
      {
        heading: 'Matching the range to your plant',
        bullets: [
          'Dairy: Clastox 50 or Clastox Plus for CIP of silos, pasteurisers and fillers, alkaline foam for open surfaces, Acidox Foam where milkstone and scale appear, and Sanix Peraxy after CIP.',
          'Meat, poultry and seafood: Alkalox Foam or Clastox Foam for fat and protein, Chlorox Foam for daily clean-and-sanitise, and Sanix Quat for knives, trays and tables.',
          'Beverage and bottling: Clastox 50 for circuits and returnable bottles, Acidox Foam for scale on fillers and conveyors, and Sanix Peraxy for sanitising.',
          'Packaged and preserved foods: Neutrox Foam or alkaline foam for production areas, and Sanixol for quick sanitising of packing tables.',
        ],
      },
    ],
    faqs: [
      { q: 'What is the difference between cleaning and sanitation chemicals?', a: 'Cleaning chemicals remove soil such as fat, protein and scale. Sanitation chemicals reduce microorganisms on surfaces that have already been cleaned and rinsed.' },
      { q: 'Which products are used for CIP?', a: 'Clastox 50 and Clastox Plus are low-foaming alkaline detergents for CIP, and Sanix Peraxy is used to sanitise the cleaned circuit. Ask our technical team about the acid step.' },
      { q: 'When should I use an acidic foam cleaner?', a: 'Use Acidox Foam where scale, mineral deposits or inorganic soils build up, typically on a periodic schedule alongside alkaline foam cleaning.' },
      { q: 'Can you help set up a sanitation programme for our plant?', a: 'Yes. Share your process, soils, water hardness and equipment, and our technical team will recommend products, dilutions and a cleaning sequence, and can train your sanitation team.' },
    ],
    related: [
      { path: '/industries/food-processing/', label: 'Food processing cleaning chemicals by sector', eyebrow: 'Industry' },
      { path: '/solutions/cip-cleaning-chemicals/', label: 'CIP cleaning chemicals for closed circuits', eyebrow: 'Solution' },
      { path: '/solutions/sanitization-chemicals/', label: 'Choosing a food-contact surface sanitiser', eyebrow: 'Solution' },
    ],
  },

  // Group 4.
  {
    kind: 'category',
    slug: 'professional-hand-hygiene-products',
    name: 'Personal care',
    title: 'Handwash and Hand Sanitiser Manufacturer India | Evochem',
    description: 'Bulk handwash liquid supplier and hand sanitiser manufacturer in India: perfume-free, antibacterial, heavy-duty, foaming and luxury handwash and sanitiser.',
    h1: 'Commercial Handwash and Hand Sanitiser Products',
    tagline: 'The Lush range of handwash and hand sanitiser for food plants, kitchens, workshops, hotels and offices',
    banner: 'assets/image/cateback4.webp',
    bannerAlt: 'Professional hand hygiene products',
    primaryKeyword: 'handwash and hand sanitiser',
    summary: 'Ready-to-use handwash and hand sanitiser for food handlers, workshops, guest washrooms and offices.',
    intro: [
      'Evochem’s Lush range gives businesses a handwash or hand sanitiser for each type of user: perfume-free and antibacterial handwash for food processing, pharmaceutical and food service staff, a heavy-duty handwash for workshops, mild and foaming handwash for frequent everyday use, a luxury handwash for guest areas, and gel and liquid hand sanitisers.',
      'Select by who uses the station, what is on their hands, and what the area requires: fragrance-free products where food is handled, grease removal where oil is handled, and a pleasant experience where guests wash. All Lush products are ready to use, so there is no dilution to get wrong. Most sites need two or three products rather than one: for example, a perfume-free handwash at production entry, a heavy-duty handwash in the workshop, and a general or luxury handwash in staff and guest washrooms. Our team can help you map products to each station.',
    ],
    sections: [
      {
        heading: 'Choosing by user',
        bullets: [
          'Food handlers and production staff: Lush Care, colourless and perfume-free, or Lush Care Plus, an antibacterial handwash with no added colours or perfumes.',
          'Mechanics, maintenance and warehouse staff: Lush Power for oils and greases.',
          'Offices, schools and staff washrooms: Lush Fresh for frequent use, or Lush Foamy.',
          'Hotel rooms, lobbies and premium washrooms: Lush Pearl.',
        ],
        products: ['perfume-free-hand-wash-lush-care', 'antibacterial-hand-wash-lush-care-plus', 'heavy-duty-hand-wash-lush-power'],
      },
      {
        heading: 'Handwash and hand sanitiser',
        paragraphs: [
          'Handwash with water removes dirt, grease and food soil and is the basic step at every station. Lush Care Gel and Lush Care Rub are quick-drying, waterless sanitisers for clean, dry hands, used where your procedure calls for an extra step or where water is not available. Choose gel or liquid to suit your dispensers.',
        ],
        products: ['gel-hand-sanitizer-lush-care-gel', 'liquid-hand-sanitizer-lush-care-rub'],
      },
      {
        heading: 'Dispensers and refilling',
        paragraphs: [
          'Use Lush Foamy in foaming-pump dispensers and the liquid handwashes in standard pumps. Empty and clean a dispenser before refilling rather than topping it up, and keep bulk packs closed between refills.',
        ],
      },
      {
        heading: 'Placing hand hygiene stations',
        paragraphs: [
          'The best product does little if the station is in the wrong place. Put stations where hands get soiled and where they must be clean, and make sure each has water, handwash and a way to dry hands.',
        ],
        bullets: [
          'Food plants: at line entry after changing rooms, at re-entry after breaks, and in or beside toilets.',
          'Commercial kitchens: at the pass, prep areas and pot-wash.',
          'Healthcare and pharmaceutical areas: at ward and room entries, with sanitiser where your procedure requires it.',
          'Workshops and warehouses: at maintenance bays and before canteens.',
          'Hotels and offices: in every washroom and at receptions or dining areas.',
        ],
      },
    ],
    faqs: [
      { q: 'Which handwash should food handlers use?', a: 'A colourless, perfume-free handwash such as Lush Care, or Lush Care Plus where an antibacterial handwash is specified.' },
      { q: 'Do Lush products need to be diluted?', a: 'No. The Lush handwashes and sanitisers are ready to use.' },
      { q: 'Which handwash suits guest washrooms?', a: 'Lush Pearl is a luxury handwash with a pleasant fragrance for hotel rooms, lobbies and premium washrooms. Lush Fresh suits busy everyday washrooms.' },
      { q: 'Which handwash removes oil and grease?', a: 'Lush Power is a heavy-duty handwash for mechanics and maintenance staff that removes stubborn oils and greases while retaining the skin’s natural moisture.' },
      { q: 'Should hand sanitiser be used instead of handwash?', a: 'No. Hand sanitiser is for clean, dry hands. Soiled or greasy hands must be washed with handwash and water first.' },
      { q: 'Do you supply handwash in bulk?', a: 'Yes. Lush products are supplied in bulk packs for refilling dispensers, with pan-India delivery.' },
    ],
    related: [
      { path: '/solutions/hand-hygiene/', label: 'Commercial handwash liquid and hand hygiene', eyebrow: 'Solution' },
      { path: '/industries/healthcare/', label: 'Cleaning and hygiene for healthcare', eyebrow: 'Industry' },
      { path: '/industries/food-processing/', label: 'Cleaning and hygiene for food processing', eyebrow: 'Industry' },
    ],
  },

  // Group 5.
  {
    kind: 'category',
    slug: 'institutional-housekeeping-chemicals',
    name: 'Housekeeping',
    title: 'Housekeeping Chemicals Manufacturer in India | Evochem',
    description: 'Commercial cleaning chemicals manufacturer for offices, hotels and hospitals: bathroom, toilet, glass, floor, furniture, steel, carpet and descaling products.',
    h1: 'Housekeeping Chemicals Manufacturer in India',
    tagline: 'The EVO range for washrooms, floors, glass, furniture, steel and carpets',
    banner: 'assets/image/cateback5.webp',
    bannerAlt: 'Institutional housekeeping chemicals',
    primaryKeyword: 'housekeeping chemicals manufacturer in India',
    summary: 'Bathroom, toilet, glass, floor, furniture, steel, carpet and descaling products for offices, hotels, hospitals and schools.',
    intro: [
      'Evochem’s EVO range covers the daily and periodic tasks of a housekeeping team in offices, tech parks, hotels, hospitals, schools, malls and places of worship: washrooms and toilets, floors and hard surfaces, glass and mirrors, wooden furniture, stainless steel, carpets and odour control.',
      'Select products by surface and soil, not by room. Acidic products remove scale and soap scum, neutral and mildly alkaline products handle everyday dirt, and specialist products finish or protect surfaces. A small, well-chosen set of products, dosed correctly, keeps a housekeeping programme simple to train and easy to control. Every product is made in Bengaluru, supplied with an MSDS, and backed by dilution guidance and training for your housekeeping staff.',
    ],
    sections: [
      {
        heading: 'Acidic, neutral or mildly alkaline: matching chemistry to the soil',
        bullets: [
          'Scale, soap scum and lime on fittings: EVO 1, an organic-acid bathroom cleaner, at 2% to 5%.',
          'Heavy scale on tiles and ceramics: EVO 9 descaler at 2% to 10%. Test first, and ask our team before using acidic products on natural stone.',
          'Stubborn scale, rust and soap scum spots: EVO ZAP cream cleaner.',
          'Daily floor maintenance by hand or machine: EVO 7, neutral, at 2% to 5%.',
          'Floors, walls, counters and fixtures with heavier soil: EVO 2, slightly alkaline and non-abrasive, at 2% to 5%.',
        ],
        products: ['bathroom-cleaner-evo-1', 'heavy-duty-descaler-evo-9', 'neutral-floor-cleaner-evo-7', 'hard-surface-cleaner-evo-2'],
      },
      {
        heading: 'Concentrates and ready-to-use products',
        paragraphs: [
          'EVO 1, EVO 2, EVO 3, EVO 7, EVO 9 and EVO 101 are concentrates diluted to the soil, which keeps cost per litre in use low. EVO 4, EVO 5, EVO 6, EVO SP, EVO 103 and EVO ZAP are ready to use. Label diluted solutions and train staff on the dilution for each task so consumption stays predictable.',
        ],
      },
      {
        heading: 'Finishing, carpets and non-food-contact surfaces',
        paragraphs: [
          'EVO 4 furniture maintainer and EVO SP steel polish are for non-food-contact surfaces only; in kitchens, use our Blaze kitchen range. For carpets, pre-treat stains with EVO 103, shampoo with EVO 101, and vacuum once dry.',
        ],
        products: ['furniture-maintainer-evo-4', 'stainless-steel-polish-evo-sp', 'carpet-prespotter-evo-103', 'carpet-shampoo-evo-101'],
      },
      {
        heading: 'Toilets, glass and odour control',
        paragraphs: [
          'EVO 6 is a thick toilet bowl cleaner that clings under the rim to dissolve stains and deposits. EVO 3 glass cleaner concentrate, at 2% to 10%, removes dust, fingerprints and haze from windows, mirrors and glass partitions without residue. EVO 5 air freshener neutralises odours in the air with odour counteractants, and works best as a finishing step after the source of the odour has been cleaned away.',
        ],
        products: ['toilet-bowl-cleaner-evo-6', 'glass-cleaner-concentrate-evo-3', 'air-freshener-evo-5'],
      },
    ],
    faqs: [
      { q: 'What chemicals does a housekeeping team need?', a: 'A typical set is a bathroom cleaner, toilet bowl cleaner, glass cleaner, neutral floor cleaner, hard-surface cleaner and handwash, with a descaler, steel polish and carpet products for periodic tasks.' },
      { q: 'Which product removes limescale from washroom fittings?', a: 'EVO 1 handles routine scale and soap scum on porcelain, plastic and stainless steel. For heavier scale on tiles and ceramics, use EVO 9, and test on a small area first.' },
      { q: 'Can EVO 4 and EVO SP be used in kitchens?', a: 'They are for non-food-contact surfaces only. For kitchen surfaces, use products from our commercial kitchen range.' },
      { q: 'How can we control housekeeping chemical consumption?', a: 'Use concentrates at the stated dilution, measure rather than pour, and train staff on the dose for each task. Our technical team can help set this up.' },
      { q: 'Do you supply housekeeping chemicals in bulk?', a: 'Yes. We manufacture in Bengaluru and supply 5 L, 20 L, 50 L and 200 L packs with pan-India delivery.' },
    ],
    related: [
      { path: '/solutions/washroom-cleaning-chemicals/', label: 'Restroom cleaning chemicals and washroom routine', eyebrow: 'Solution' },
      { path: '/industries/facility-management/', label: 'Cleaning chemicals for facility management', eyebrow: 'Industry' },
      { path: '/resources/reduce-housekeeping-chemical-consumption/', label: 'How to reduce housekeeping chemical consumption', eyebrow: 'Guide' },
    ],
  },

  // Group 6 — migrated from the live landing page /commercial-kitchen-cleaning-chemicals (src/app/seo/landing-pages.ts).
  {
    kind: 'category',
    slug: 'commercial-kitchen-cleaning-chemicals',
    name: 'Commercial kitchen',
    title: 'Commercial Kitchen Cleaning Chemicals Supplier | Evochem',
    description: 'Commercial kitchen cleaning chemicals from a restaurant cleaning chemicals supplier: dishwasher detergent, rinse aid, degreasers, oven cleaner and sanitisers.',
    h1: 'Commercial Kitchen Cleaning Chemicals',
    tagline: 'Dishwashing, degreasing and sanitising products for restaurants, hotels and cloud kitchens',
    banner: 'assets/image/kitchen.jpg',
    bannerAlt: 'Commercial kitchen cleaning',
    primaryKeyword: 'commercial kitchen cleaning chemicals',
    summary: 'The Blaze range: dishwasher detergent and rinse aid, dishwashing liquid, degreasers, oven cleaner, drain maintainer and chlorine tablets.',
    intro: [
      'Evochem’s Blaze range covers the cleaning jobs of a busy commercial kitchen, from automatic dishwashing to heavy-duty degreasing and food-contact sanitising. We manufacture in Bengaluru and supply restaurants, quick service restaurants, cloud kitchens, hotels and institutional kitchens across India.',
      'Every product is concentrated and comes with dilution guidance, so your team uses the right amount for each task and your cost per wash stays under control.',
    ],
    sections: [
      {
        heading: 'Commercial dishwasher detergent, rinse aid and manual dishwashing',
        paragraphs: [
          'For automatic dishwashing machines, use a low-foaming machine detergent together with a rinse additive. Blaze Auto removes food soils in a single cycle at 3 to 5 ml per litre of water, and Blaze Rinse, at 0.2 to 0.5 ml per litre at 80 to 90°C, helps dishes dry spotless and streak-free, even with hard water. Blaze Auto is not recommended for soft metals such as aluminium.',
          'For pot-wash and hand dishwashing, use a pH-balanced dishwashing liquid such as Blaze Dish that cuts grease without damaging dishware. A chlorine-based destainer, Blaze Dip, removes tea, coffee and burnt-food stains from cups and crockery by soaking or with a dosing pump, at 4% to 10% depending on soil.',
        ],
        products: ['dishwasher-detergent-blaze-auto', 'dishwasher-rinse-aid-blaze-rinse', 'dishwashing-liquid-blaze-dish', 'crockery-destainer-blaze-dip'],
      },
      {
        heading: 'Kitchen degreasers, oven and grill cleaner',
        paragraphs: [
          'Grease and carbon build up fastest on hoods, fryers, grills and ovens. Use a concentrated kitchen degreaser such as Blaze Kitchen Care or Blaze Multi Plus for daily surfaces, Blaze Multi as a neutral cleaner for floors, walls and utensils, and Blaze Grill for carbon deposits on burners, fryers and range hoods. All four are used at 2% to 5%; Blaze Grill can also be applied directly on heavy deposits.',
        ],
        products: ['kitchen-care-concentrate-blaze-kitchen-care', 'kitchen-degreaser-concentrate-blaze-multi-plus', 'oven-grill-cleaner-blaze-grill', 'neutral-multipurpose-detergent-blaze-multi'],
      },
      {
        heading: 'Sanitising food-contact surfaces and vegetables, and maintaining drains',
        paragraphs: [
          'Chlorine tablets give a quick, measured way to sanitise food-contact surfaces, equipment and vegetables after cleaning: Blaze Tab is used at 1 tablet in 5 litres of water for general sanitisation and 1 tablet in 20 litres for vegetables. For drains, Blaze Drain, a non-acidic drain maintainer, breaks down grease and sludge without corrosive acids.',
        ],
        products: ['chlorine-tablets-blaze-tab', 'drain-cleaner-blaze-drain'],
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
          'Hand hygiene stations at the pass, prep areas and washrooms complete the programme. For a step-by-step view of the 10 key areas of a commercial kitchen and a daily, weekly and monthly schedule, see our commercial kitchen cleaning schedule.',
        ],
        products: ['antibacterial-hand-wash-lush-care-plus', 'gel-hand-sanitizer-lush-care-gel'],
      },
    ],
    faqs: [
      { q: 'What chemicals are used to clean a commercial kitchen?', a: 'A typical commercial kitchen uses a machine dishwashing detergent and rinse aid, a manual dishwashing liquid, a kitchen degreaser, an oven and grill cleaner, a food-contact sanitiser and a floor cleaner. Evochem’s Blaze range covers each of these tasks.' },
      { q: 'Do I need a rinse aid with commercial dishwasher detergent?', a: 'Yes, for best results. The detergent removes soils, and the rinse aid helps water sheet off so dishes dry without spots or streaks, especially in hard water. Blaze Auto is designed to be used with Blaze Rinse.' },
      { q: 'How do I remove carbon from ovens, grills and fryers?', a: 'Use a heavy-duty oven and grill cleaner such as Blaze Grill at 2% to 5% dilution for regular cleaning, or undiluted on heavy deposits, then rinse thoroughly before the equipment is used again.' },
      { q: 'Do you supply restaurant cleaning chemicals in bulk?', a: 'Yes. Evochem manufactures in Bengaluru and supplies bulk packs with pan-India delivery. Contact us on WhatsApp, email or phone for pricing and packaging options.' },
      { q: 'Can you train our kitchen staff on the products?', a: 'Yes. Our technical team provides product selection guidance, dilution guidance and training so your staff use the right product at the right dilution.' },
    ],
    related: [
      { path: '/solutions/commercial-kitchen-hygiene/', label: 'Commercial kitchen cleaning schedule: 10 key areas', eyebrow: 'Cleaning guide' },
      { path: '/industries/hospitality/', label: 'Cleaning and hygiene for hotels and hospitality', eyebrow: 'Industry' },
      { path: '/resources/commercial-dishwasher-detergent-rinse-aid-guide/', label: 'Commercial dishwasher detergent and rinse aid guide', eyebrow: 'Guide' },
    ],
  },
];
