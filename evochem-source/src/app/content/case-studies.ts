import { ContentPage } from './content-model';

// Application case studies. These describe how Evochem typically sets up a hygiene programme for a type of site.
// They do not describe a named or identifiable customer and contain no results, figures or testimonials.

const NOTE =
  'Programme example: this case study describes how Evochem typically sets up a hygiene programme for this type of site. Customer names and site results are not published here.';

export const CASE_STUDIES: ContentPage[] = [
  // 1. Poultry processing plant
  {
    kind: 'case-study',
    slug: 'poultry-plant-hygiene-programme',
    name: 'Poultry processing plant hygiene programme',
    title: 'Poultry Plant Hygiene Programme: Case Study | Evochem',
    description:
      'How Evochem sets up a poultry plant hygiene programme: site assessment, foam cleaning, sanitising, dilution control, staff training and what to monitor.',
    h1: 'Case study: poultry plant hygiene programme',
    tagline: 'A structured cleaning and sanitising programme for a typical poultry processing site.',
    banner: 'assets/image/FoodProcessing.jpg',
    bannerAlt: 'Clean stainless steel processing line in a food plant',
    primaryKeyword: 'poultry plant hygiene programme',
    summary:
      'How Evochem typically structures the daily cleaning and sanitising programme for a poultry processing plant, from assessment to monitoring.',
    intro: [
      'This application case study describes a typical poultry processing plant: live receiving, slaughter and evisceration, chilling, cut-up and packing, with a sanitation crew working between shifts. It explains how Evochem usually builds a hygiene programme for a site of this kind and what the site should track to judge whether the programme is working.',
      'The aim is a repeatable routine that separates cleaning, which removes fat, protein and blood soil, from sanitising, which reduces microorganisms on surfaces that have already been cleaned.',
    ],
    sections: [
      {
        heading: 'The site and its hygiene challenges',
        paragraphs: [
          'Poultry soils are heavy in fat, protein and blood, and they bake on quickly where equipment runs warm. Conveyors, shackle lines, cutting tables, evisceration equipment and drains all hold soil in places that are hard to reach. Floors stay wet for most of the shift, and wash-down water carries fat into drains.',
        ],
        bullets: [
          'Fat and protein films on stainless steel, belts and plastic cutting boards.',
          'Short sanitation windows between production shifts.',
          'Hard-water scale building up on equipment and floors over time.',
          'Many staff at the handwash stations, often in a hurry.',
          'Chemical concentrations varying from one cleaner to the next when mixing by eye.',
        ],
      },
      {
        heading: 'Assessment',
        steps: [
          'Walk the site with the plant and quality managers, area by area, noting soil types, surfaces and equipment materials.',
          'Review the current cleaning sequence, products, dilution method and who does what on each shift.',
          'Check water supply, hose and foam equipment, and whether dosing or dilution equipment is in place.',
          'Identify hard-to-clean points: drains, conveyor undersides, hooks, chiller areas and packing tables.',
          'Agree priorities and the records the quality team needs for internal and customer audits.',
        ],
      },
      {
        heading: 'The cleaning programme',
        paragraphs: [
          'The daily routine follows a fixed order so that each step does its job on a surface prepared by the step before.',
        ],
        steps: [
          'Dry clean-up: remove offal, feathers and loose debris by hand or squeegee before any water is used.',
          'Pre-rinse with low-pressure water to remove loose soil, working from top to bottom.',
          'Apply Alkalox Foam or Clastox Foam at 2% to 5% depending on soil, so the foam clings to vertical surfaces and equipment.',
          'Scrub belts, cutting boards and contact points by hand where soil remains, then rinse thoroughly.',
          'Inspect visually and re-clean any area that still shows fat or protein film.',
          'Sanitise pre-cleaned food-contact surfaces with Sanix Peraxy at 0.1% to 3% v/v or Sanix Quat at 0.1% to 0.5%, as agreed for each area.',
          'Use Sanixol, ready to use, for quick sanitising of small tools and surfaces during production breaks.',
          'Periodically, use Acidox Foam at 2% to 5% to remove scale and inorganic deposits that alkaline cleaning leaves behind.',
          'Clean floors and drains last with Novel HD at 2% to 5%, so that dirty water does not run back onto cleaned equipment.',
        ],
      },
      {
        heading: 'Products used',
        paragraphs: [
          'The product set is kept small so that crews can learn it well. Dilutions quoted are from the product data and are set within these ranges for each area during the assessment.',
        ],
        products: [
          'alkaline-foam-cleaner-alkalox-foam',
          'high-foaming-alkaline-detergent-clastox-foam',
          'acidic-foam-cleaner-acidox-foam',
          'peracetic-acid-sanitizer-sanix-peraxy',
          'quat-sanitizer-sanix-quat',
          'alcohol-surface-sanitizer-sanixol',
          'heavy-duty-floor-cleaner-novel-hd',
          'antibacterial-hand-wash-lush-care-plus',
        ],
      },
      {
        heading: 'Training and documentation',
        bullets: [
          'Hands-on sessions with each sanitation shift on the cleaning sequence, foam application and correct dilution.',
          'Wall charts at the chemical store and each area showing product, dilution and purpose.',
          'MSDS for every product kept at the store, with guidance on handling and protective equipment.',
          'Handwash routine at plant entry and after breaks, using Lush Care Plus.',
          'A simple daily cleaning log, signed by the shift supervisor, for the quality team’s records.',
        ],
      },
      {
        heading: 'What the site monitors',
        paragraphs: [
          'Rather than relying on impressions, the site agrees in advance which checks it will use to judge the programme. These are things to monitor, reviewed together with our technical team.',
        ],
        bullets: [
          'Pre-operation visual inspection of equipment and contact surfaces before each shift starts.',
          'ATP swab readings on agreed points, if the site already uses ATP testing.',
          'Results from the site’s own or its customers’ microbiological surface testing programme.',
          'Findings and corrective actions from internal and customer audits.',
          'Chemical consumption per shift, compared with the agreed dilution plan.',
        ],
      },
      {
        heading: 'Review',
        paragraphs: [
          'The programme is reviewed with the plant after it has run for a while and whenever products, equipment or production volumes change. Dilutions, sequence and product choice are adjusted within the ranges above based on what the monitoring shows.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Why does the programme separate cleaning and sanitising?',
        a: 'A sanitiser works on surfaces that are already clean. Fat and protein left behind shield microorganisms, so the alkaline foam clean and rinse always come before the sanitiser step.',
      },
      {
        q: 'Which sanitiser is used on food-contact surfaces?',
        a: 'Sanix Peraxy, a peracetic acid sanitiser, or Sanix Quat, a quaternary ammonium sanitiser, are used on pre-cleaned surfaces. The choice per area is agreed during the assessment.',
      },
      {
        q: 'How often is acid cleaning needed?',
        a: 'It depends on water hardness and how quickly scale builds up. Acidox Foam is scheduled periodically, and the frequency is set with our technical team after the assessment.',
      },
      {
        q: 'Can Evochem train the night sanitation crew?',
        a: 'Yes. Training is arranged for each shift that does cleaning, and wall charts keep the sequence and dilutions visible between sessions.',
      },
    ],
    related: [
      { path: '/industries/poultry-meat-processing/', label: 'Poultry and meat processing', eyebrow: 'Industry' },
      { path: '/solutions/open-plant-cleaning-chemicals/', label: 'Open plant cleaning chemicals', eyebrow: 'Solution' },
      { path: '/products/food-processing-hygiene-chemicals/', label: 'Food processing hygiene chemicals', eyebrow: 'Products' },
    ],
    date: '2026-10-15',
    readTime: 5,
    note: NOTE,
  },

  // 2. Dairy plant
  {
    kind: 'case-study',
    slug: 'dairy-cip-cleaning-programme',
    name: 'Dairy plant CIP and open-plant cleaning programme',
    title: 'Dairy CIP Cleaning Programme: Case Study | Evochem',
    description:
      'How Evochem sets up a dairy CIP cleaning programme with open-plant foam cleaning: assessment, alkaline CIP, acid step, sanitising, training and monitoring.',
    h1: 'Case study: dairy CIP cleaning programme',
    tagline: 'Closed-circuit and open-plant cleaning for a typical milk processing site.',
    banner: 'assets/image/dairy.jpg',
    bannerAlt: 'Stainless steel tanks and pipework in a dairy plant',
    primaryKeyword: 'dairy CIP cleaning programme',
    summary:
      'How Evochem typically structures CIP and open-plant cleaning for a dairy processing site, from assessment to the checks the site monitors.',
    intro: [
      'This application case study describes a typical dairy plant: milk reception, storage silos, pasteurisation, processing lines for milk and curd, and a filling and packing hall. Tanks, pipelines and heat exchangers are cleaned in place (CIP), while fillers, floors, walls and external equipment surfaces are cleaned by hand or with foam (open-plant cleaning).',
      'Below is how Evochem usually builds a programme for a site of this type, and what the site should monitor to judge whether it is working.',
    ],
    sections: [
      {
        heading: 'The site and its hygiene challenges',
        paragraphs: [
          'Milk leaves two kinds of soil. Fat and protein are removed by alkaline cleaning. Milkstone, a mineral deposit made worse by hard water and heat, needs an acid step. Heat-treatment sections build up deposits fastest, while outer surfaces of fillers and conveyors collect splashes of milk and product throughout the shift.',
        ],
        bullets: [
          'Fat and protein films inside tanks, pipelines and plate heat exchangers.',
          'Milkstone and scale where water is hard and surfaces are heated.',
          'Spray-ball and circuit coverage gaps that leave soil in dead legs or tank tops.',
          'Milk splashes on fillers, crate washers, floors and drains in the packing hall.',
          'Inconsistent manual dosing of CIP tanks when concentrations are not checked.',
        ],
      },
      {
        heading: 'Assessment',
        steps: [
          'Map each CIP circuit with the plant engineer: tanks, lines, heat exchangers and the CIP set itself.',
          'Review the current CIP sequence, how detergent is added and how concentration is checked.',
          'Note water hardness and where scale or milkstone is visible.',
          'Walk the open areas: fillers, packing hall, crate wash, floors, walls and drains.',
          'Agree the records needed for CIP and for open-plant cleaning, and who signs them.',
        ],
      },
      {
        heading: 'The cleaning programme',
        paragraphs: [
          'CIP and open-plant cleaning run as two linked routines. The CIP sequence is set per circuit, so the steps below are the typical structure rather than fixed settings.',
        ],
        steps: [
          'CIP pre-rinse with water to push out residual milk.',
          'Alkaline circulation with Clastox 50 at 0.5% to 5% depending on soil, to remove fat and protein from tanks, lines and heat exchangers.',
          'Intermediate water rinse.',
          'Acid circulation to remove milkstone and scale. There is no acid CIP detergent in the Evochem range, so this step and its frequency are specified with our technical team for each site.',
          'Final rinse, then sanitise the cleaned circuit with Sanix Peraxy at 0.1% to 3% v/v where the plant includes a sanitising step.',
          'Open-plant cleaning of fillers and external surfaces: pre-rinse, apply Clastox Foam or Alkalox Foam at 2% to 5%, scrub contact points, rinse.',
          'Use Acidox Foam at 2% to 5% periodically on open surfaces where scale or inorganic deposits build up.',
          'Sanitise pre-cleaned open food-contact surfaces with Sanix Quat at 0.1% to 0.5%.',
          'Clean floors and drains in the packing hall last with Novel HD at 2% to 5%.',
        ],
      },
      {
        heading: 'Products used',
        paragraphs: [
          'Dilutions are taken from the product data and fixed within these ranges for each circuit and area.',
        ],
        products: [
          'alkaline-cip-detergent-clastox-50',
          'low-foam-alkaline-detergent-clastox-plus',
          'high-foaming-alkaline-detergent-clastox-foam',
          'alkaline-foam-cleaner-alkalox-foam',
          'acidic-foam-cleaner-acidox-foam',
          'peracetic-acid-sanitizer-sanix-peraxy',
          'quat-sanitizer-sanix-quat',
          'heavy-duty-floor-cleaner-novel-hd',
        ],
      },
      {
        heading: 'Training and documentation',
        bullets: [
          'Training for CIP operators on the sequence, product addition and checking concentration before circulation.',
          'Separate training for open-plant crews on foam application, rinsing and sanitising order.',
          'A CIP record per circuit noting date, steps completed, product and concentration, signed by the operator.',
          'MSDS for every product at the chemical store, with handling and protective equipment guidance.',
          'Perfume-free handwash, Lush Care, at entry to processing areas.',
        ],
      },
      {
        heading: 'What the site monitors',
        paragraphs: [
          'The site agrees in advance which checks it will use to judge the programme. These are items to monitor and review with our technical team, not outcomes promised.',
        ],
        bullets: [
          'Detergent concentration checks in the CIP tank before each alkaline circulation.',
          'Visual inspection of tank interiors, gaskets and heat exchanger plates when they are opened.',
          'ATP swab readings on agreed open surfaces, if the site uses ATP testing.',
          'The plant’s own product and surface microbiological test results.',
          'Audit findings and corrective actions related to cleaning.',
        ],
      },
      {
        heading: 'Review',
        paragraphs: [
          'The programme is reviewed with the plant once it has run for a while and whenever circuits, products or water conditions change. Concentrations and acid-step frequency are adjusted based on what monitoring shows.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Does Evochem supply an acid CIP detergent?',
        a: 'There is no acid CIP detergent in the current range. The acid step is specified with our technical team for each site, and Acidox Foam is used for open surfaces.',
      },
      {
        q: 'Which product is used for the alkaline CIP step?',
        a: 'Clastox 50, a high-performance alkaline detergent, is used for the alkaline circulation at 0.5% to 5% depending on soil. Clastox Plus is a low-foaming alternative for heavy-duty applications.',
      },
      {
        q: 'Why is foam cleaning used alongside CIP?',
        a: 'CIP only cleans the inside of closed equipment. Fillers, outer surfaces, floors and walls need open-plant cleaning, and foam clings to vertical surfaces so the detergent stays where it is needed.',
      },
      {
        q: 'Is sanitising part of every CIP cycle?',
        a: 'That depends on the plant’s own requirements. Where a sanitising step is used, it always follows cleaning and rinsing, because sanitisers work on surfaces that are already clean.',
      },
    ],
    related: [
      { path: '/industries/dairy-processing/', label: 'Dairy processing', eyebrow: 'Industry' },
      { path: '/solutions/cip-cleaning-chemicals/', label: 'CIP cleaning chemicals', eyebrow: 'Solution' },
      { path: '/resources/cip-vs-opc-cleaning/', label: 'CIP vs open-plant cleaning', eyebrow: 'Guide' },
    ],
    date: '2026-10-15',
    readTime: 5,
    note: NOTE,
  },

  // 3. Hotel
  {
    kind: 'case-study',
    slug: 'hotel-housekeeping-kitchen-programme',
    name: 'Hotel housekeeping, kitchen and laundry programme',
    title: 'Hotel Hygiene Programme: Rooms, Kitchen, Laundry | Evochem',
    description:
      'How Evochem sets up a hotel hygiene programme across housekeeping, kitchen and in-house laundry: assessment, products, dilution, training and monitoring.',
    h1: 'Case study: hotel hygiene programme for housekeeping, kitchen and laundry',
    tagline: 'One coordinated programme for guest rooms, public areas, the kitchen and the in-house laundry.',
    banner: 'assets/image/Hospitality&FoodService.png',
    bannerAlt: 'Hotel restaurant and service area',
    primaryKeyword: 'hotel hygiene programme',
    summary:
      'How Evochem typically structures a single hygiene programme across a hotel’s housekeeping, kitchen and in-house laundry.',
    intro: [
      'This application case study describes a typical full-service hotel: guest rooms, lobby and public washrooms, a restaurant and banquet kitchen, and an in-house laundry handling bed linen, towels and staff uniforms. Each department often buys its own chemicals, which leads to many overlapping products and inconsistent dilution.',
      'The programme below is how Evochem usually brings these areas under one plan, and what the hotel should monitor to judge whether it is working.',
    ],
    sections: [
      {
        heading: 'The site and its hygiene challenges',
        bullets: [
          'Guest rooms and bathrooms that must be cleaned quickly between check-out and check-in.',
          'Hard-water scale and soap scum on bathroom fittings, tiles and glass.',
          'Heavy grease on kitchen floors, hoods, fryers and grills.',
          'Dishwashers that leave spots or residue when detergent and rinse aid are not matched.',
          'Linen that greys or yellows when wash chemistry is not balanced.',
          'Several departments mixing chemicals by eye, with no common records.',
        ],
      },
      {
        heading: 'Assessment',
        steps: [
          'Meet the executive housekeeper, executive chef and laundry supervisor to understand each department’s routine.',
          'List every chemical currently in use and where overlaps exist.',
          'Check surfaces in rooms and public areas: stone, tile, glass, stainless steel and wood.',
          'Review kitchen cleaning schedules, dishwasher type and how detergent is dosed.',
          'Review the laundry wash process, machine types and linen categories.',
          'Agree a shared product list, dilution charts and checklists for each department.',
        ],
      },
      {
        heading: 'The cleaning programme',
        paragraphs: [
          'Each department keeps its own routine, but the products, dilutions and records follow one plan.',
        ],
        steps: [
          'Guest bathrooms: EVO 1 at 2% to 5% for fittings, tiles and soap scum; EVO 6 for toilet bowls; EVO 3 at 2% to 10% for mirrors and glass.',
          'Rooms and public areas: EVO 2 at 2% to 5% for hard surfaces, EVO 7 at 2% to 5% for daily floor mopping, and EVO 4 for wooden furniture.',
          'Periodic deep clean of bathrooms with EVO 9 at 2% to 10% where scale has built up.',
          'Kitchen daily: Blaze Multi Plus at 2% to 5% for surfaces, walls and floors; Blaze Grill at 2% to 5% for ovens, grills and fryers, used directly on heavy deposits.',
          'Kitchen sanitising: after cleaning, food-contact surfaces and vegetables are sanitised with Blaze Tab, 1 tablet in 5 litres for general sanitising and 1 tablet in 20 litres for vegetables.',
          'Dishwashing: Blaze Auto at 3 to 5 ml per litre with Blaze Rinse at 0.2 to 0.5 ml per litre in the final rinse.',
          'Laundry: Flox Star main wash at 5 to 15 ml per kg of dry linen, Flox Build where heavy soil needs extra alkalinity, and Flox Sour at 5 to 15 ml per kg of dry linen in the final rinse.',
        ],
      },
      {
        heading: 'Products used',
        products: [
          'bathroom-cleaner-evo-1',
          'toilet-bowl-cleaner-evo-6',
          'glass-cleaner-concentrate-evo-3',
          'hard-surface-cleaner-evo-2',
          'neutral-floor-cleaner-evo-7',
          'heavy-duty-descaler-evo-9',
          'kitchen-degreaser-concentrate-blaze-multi-plus',
          'oven-grill-cleaner-blaze-grill',
          'chlorine-tablets-blaze-tab',
          'dishwasher-detergent-blaze-auto',
          'dishwasher-rinse-aid-blaze-rinse',
          'main-wash-laundry-detergent-flox-star',
          'heavy-duty-liquid-laundry-detergent-flox-build',
          'laundry-sour-neutralizer-flox-sour',
        ],
      },
      {
        heading: 'Training and documentation',
        bullets: [
          'Short training sessions for room attendants, public-area staff, kitchen stewards and laundry operators.',
          'Colour-coded dilution charts at each chemical point, written for the people who use them.',
          'Room and kitchen cleaning checklists that supervisors sign off.',
          'A laundry wash chart per linen category with product and dosing per kg of dry linen.',
          'MSDS for every product, kept with the housekeeping store and the kitchen.',
        ],
      },
      {
        heading: 'What the site monitors',
        paragraphs: [
          'The hotel agrees in advance which checks it will use. These are items to monitor and review with our technical team.',
        ],
        bullets: [
          'Supervisor room inspections and recurring issues found on checklists.',
          'Guest feedback that mentions cleanliness.',
          'Visual checks on crockery and glassware after the dishwasher.',
          'Linen rejects and re-wash rates at the laundry.',
          'Kitchen hygiene audit findings, internal or external.',
          'Chemical consumption per department against the agreed dilution plan.',
        ],
      },
      {
        heading: 'Review',
        paragraphs: [
          'The programme is reviewed with department heads after it has run for a while, and again when menus, room count, laundry volume or equipment change.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Why bring housekeeping, kitchen and laundry under one programme?',
        a: 'A shared plan reduces overlapping products, keeps dilution consistent and gives the hotel one set of records and one supplier contact for technical support.',
      },
      {
        q: 'How is laundry dosing set?',
        a: 'Dosing is set per kg of dry linen for each linen category, within the ranges in the product data, and written on a wash chart at the machines.',
      },
      {
        q: 'Is the kitchen degreaser also a sanitiser?',
        a: 'No. Blaze Multi Plus cleans grease and food soil. Sanitising of food-contact surfaces is a separate step after cleaning, using Blaze Tab.',
      },
      {
        q: 'Can Evochem train staff across shifts?',
        a: 'Yes. Training is arranged for each department and shift, and dilution charts and checklists keep the routine consistent between sessions.',
      },
    ],
    related: [
      { path: '/industries/hospitality/', label: 'Hospitality', eyebrow: 'Industry' },
      { path: '/solutions/commercial-kitchen-hygiene/', label: 'Commercial kitchen hygiene', eyebrow: 'Solution' },
      { path: '/products/institutional-housekeeping-chemicals/', label: 'Institutional housekeeping chemicals', eyebrow: 'Products' },
    ],
    date: '2026-10-15',
    readTime: 5,
    note: NOTE,
  },

  // 4. Facility management (offices / IT park)
  {
    kind: 'case-study',
    slug: 'facility-washroom-floor-care-programme',
    name: 'Facility management washroom and floor-care programme',
    title: 'Washroom and Floor-Care Programme: Case Study | Evochem',
    description:
      'How Evochem sets up a washroom and floor-care programme for offices and IT parks: assessment, product selection, dilution control, training and monitoring.',
    h1: 'Case study: washroom and floor-care programme for an office campus',
    tagline: 'A practical routine for washrooms, floors and common areas in a large office or IT park.',
    banner: 'assets/image/CommercialBuildings.jpg',
    bannerAlt: 'Modern office buildings in a business park',
    primaryKeyword: 'washroom and floor-care programme',
    summary:
      'How Evochem typically structures washroom and floor-care cleaning for a facility management team running an office campus or IT park.',
    intro: [
      'This application case study describes a typical office campus or IT park managed by a facility management team: several towers, high-traffic washrooms on every floor, lobbies with stone flooring, cafeterias and pantries, and large areas cleaned by scrubber-dryer machines.',
      'Below is how Evochem usually builds a washroom and floor-care programme for a site like this, and what the facility team should monitor to judge whether it is working.',
    ],
    sections: [
      {
        heading: 'The site and its hygiene challenges',
        bullets: [
          'Washrooms used heavily through the day, with scale, soap scum and odour building up between cleans.',
          'Stone and vitrified tile floors in lobbies that dull when alkaline or residue-forming products are used.',
          'Scrubber-dryers that struggle with high-foam products.',
          'Grease carried from cafeterias and pantries onto nearby floors.',
          'Large housekeeping teams, often with frequent staff changes, mixing chemicals by eye.',
          'Clients and occupants who judge the whole facility by the state of its washrooms.',
        ],
      },
      {
        heading: 'Assessment',
        steps: [
          'Walk the campus with the facility manager: washrooms, lobbies, office floors, cafeterias and pantries.',
          'Record floor types and finishes, and which areas are cleaned by machine or by mop.',
          'List the products in use and how they are diluted and dispensed.',
          'Review the current washroom cleaning frequency and checklist.',
          'Agree a short product list, dilution charts and checklists by area.',
        ],
      },
      {
        heading: 'The cleaning programme',
        paragraphs: [
          'Daily routines are kept simple, with periodic deep cleaning scheduled separately.',
        ],
        steps: [
          'Washrooms, routine: EVO 1 at 2% to 5% for basins, fittings, tiles and urinals; EVO 6 for toilet bowls; EVO 3 at 2% to 10% for mirrors and glass partitions.',
          'Washrooms, periodic: EVO 9 at 2% to 10% for scale and scum on tiles and ceramics, scheduled by the facility team.',
          'Washroom drains: Blaze Drain, ready to use, to maintain drains prone to sludge build-up.',
          'Hand hygiene: Lush Foamy or Lush Fresh, ready to use, in washroom dispensers.',
          'Office and lobby floors: EVO 7 at 2% to 5% for daily mopping and scrubber-dryer cleaning, as it leaves no unwanted residue.',
          'Cafeteria and pantry floors: Novel OGR at 2% to 5%, a low-foam cleaner for grease and oil that suits scrubber-dryers.',
          'Service areas, basements and loading bays: Novel HD at 2% to 5% for heavy soil and oil.',
          'Hard surfaces, desks and counters: EVO 2 at 2% to 5%.',
        ],
      },
      {
        heading: 'Products used',
        products: [
          'bathroom-cleaner-evo-1',
          'toilet-bowl-cleaner-evo-6',
          'glass-cleaner-concentrate-evo-3',
          'heavy-duty-descaler-evo-9',
          'drain-cleaner-blaze-drain',
          'foaming-hand-wash-lush-foamy',
          'general-hand-wash-lush-fresh',
          'neutral-floor-cleaner-evo-7',
          'oil-grease-remover-novel-ogr',
          'heavy-duty-floor-cleaner-novel-hd',
          'hard-surface-cleaner-evo-2',
        ],
      },
      {
        heading: 'Training and documentation',
        bullets: [
          'Induction training for housekeeping staff on each product, its purpose and correct dilution.',
          'Refresher sessions when new staff join, so the routine survives team changes.',
          'Dilution charts at each janitor room and on machine trolleys.',
          'Washroom checklists on each door, signed at every round.',
          'MSDS for every product, kept with the housekeeping store.',
        ],
      },
      {
        heading: 'What the site monitors',
        paragraphs: [
          'The facility team agrees in advance which checks it will use. These are items to monitor and review with our technical team.',
        ],
        bullets: [
          'Supervisor washroom inspections and checklist completion.',
          'Occupant complaints or helpdesk tickets about washrooms and floors.',
          'Floor appearance on stone and tile, including residue, streaks and slipperiness.',
          'Findings from the client’s or facility’s own audits.',
          'Chemical consumption per tower or floor against the agreed dilution plan.',
        ],
      },
      {
        heading: 'Review',
        paragraphs: [
          'The programme is reviewed with the facility manager after it has run for a while and whenever occupancy, floor finishes or cleaning equipment change.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Which floor cleaner works with scrubber-dryers?',
        a: 'EVO 7 suits daily machine cleaning of office floors, and Novel OGR is a low-foam option for greasy cafeteria and pantry floors.',
      },
      {
        q: 'How is washroom scale handled?',
        a: 'EVO 1 handles routine soap scum and lime deposits. EVO 9 is scheduled periodically for heavier scale on tiles and ceramics.',
      },
      {
        q: 'Does washroom cleaning include sanitising?',
        a: 'Cleaning removes soil first. Where the facility wants surfaces sanitised as well, that step is added after cleaning and agreed with our technical team.',
      },
      {
        q: 'How does the programme cope with staff turnover?',
        a: 'A short product list, clear dilution charts and induction training for new staff keep the routine consistent as the team changes.',
      },
    ],
    related: [
      { path: '/industries/facility-management/', label: 'Facility management', eyebrow: 'Industry' },
      { path: '/solutions/washroom-cleaning-chemicals/', label: 'Washroom cleaning chemicals', eyebrow: 'Solution' },
      { path: '/resources/low-foam-floor-cleaner-scrubber-dryer/', label: 'Low-foam floor cleaners for scrubber-dryers', eyebrow: 'Guide' },
    ],
    date: '2026-10-15',
    readTime: 5,
    note: NOTE,
  },
];
