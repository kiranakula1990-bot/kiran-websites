// Solution pages: how a cleaning process works, which products fit each step, and how it differs from adjacent processes.
// Products are referenced by permanent slug from public/assets/data/evochem-data.json. Dilutions are quoted only from
// that file. No certification claims, kill claims, customer names, prices or invented results (handover section 9).

import { ContentPage } from './content-model';

export const SOLUTIONS: ContentPage[] = [
  // 1. CIP — migrated from the live landing page /cip-cleaning-chemicals (src/app/seo/landing-pages.ts).
  {
    kind: 'solution',
    slug: 'cip-cleaning-chemicals',
    name: 'CIP cleaning',
    title: 'CIP Cleaning Chemicals Manufacturer in India | Evochem',
    description: 'Low-foaming alkaline CIP detergents and peracetic acid sanitiser for dairy, beverage and food plants, made in Bengaluru with dilution guidance and support.',
    h1: 'CIP Cleaning Chemicals Manufacturer in India',
    tagline: 'Low-foaming alkaline detergents and sanitiser for clean-in-place circuits in dairy, beverage and food plants',
    banner: 'assets/image/dairy.jpg',
    bannerAlt: 'Dairy plant pipelines and tanks cleaned in place',
    primaryKeyword: 'CIP cleaning chemicals',
    summary: 'Low-foaming alkaline CIP detergents and a peracetic acid sanitiser for pipelines, tanks, heat exchangers and fillers.',
    intro: [
      'Evochem manufactures CIP cleaning chemicals in Bengaluru for dairies, beverage plants and food processors across India. Our low-foaming alkaline detergents are formulated to penetrate milk residues and animal fats while resisting hard-water scale, which makes them suitable for recirculating clean-in-place circuits.',
      'We supply each product with dilution guidance and an MSDS, and our technical team helps you set up the cleaning sequence for your pipelines, tanks and process equipment. CIP is for closed equipment only; floors, walls, conveyors and equipment exteriors are cleaned by open plant cleaning (OPC) with foam, which needs a different type of detergent.',
    ],
    sections: [
      {
        heading: 'Alkaline CIP cleaner for the food industry',
        paragraphs: [
          'The alkaline step does most of the work in a CIP cycle, dissolving fats, proteins and milk residues. Foam must stay low in a recirculating circuit, so these detergents are formulated as low-foaming, with sequestering agents that help prevent scale in hard water. Both are used at 0.5% to 5% (5 ml to 50 ml per litre of water) depending on soil.',
        ],
        products: ['alkaline-cip-detergent-clastox-50', 'low-foam-alkaline-detergent-clastox-plus'],
      },
      {
        heading: 'A typical CIP sequence',
        steps: [
          'Pre-rinse with water to remove loose product.',
          'Alkaline wash to dissolve fats, proteins and milk residues.',
          'Intermediate rinse.',
          'Acid step where mineral scale or milkstone builds up. Our range does not include an acid CIP detergent, so ask our technical team to match this step to your circuit.',
          'Final rinse with clean water.',
          'Sanitise the cleaned circuit before production restarts.',
        ],
        paragraphs: [
          'Concentration, temperature, circulation time and flow all affect results. We help you set these for each circuit and review them with your team.',
        ],
      },
      {
        heading: 'Sanitising after CIP',
        paragraphs: [
          'Cleaning removes soil; sanitising is a separate step that reduces microorganisms on surfaces that are already clean. Once the circuit is cleaned and rinsed, a peracetic acid sanitiser is circulated at the label dilution, which for Sanix Peraxy is 0.1% to 3% v/v depending on the volume.',
        ],
        products: ['peracetic-acid-sanitizer-sanix-peraxy'],
      },
      {
        heading: 'CIP or open plant cleaning: which applies where',
        bullets: [
          'CIP: closed equipment that is cleaned without dismantling, such as pipelines, silos, tanks, pasteurisers, heat exchangers and filler circuits. The solution is pumped and recirculated, so it must be low-foaming.',
          'OPC: open surfaces such as floors, walls, drains, conveyors and machine exteriors. A high-foaming detergent is applied so it clings to the surface.',
          'COP: parts removed from the line and soaked or washed in a tank. This is covered on our open plant cleaning page.',
          'Never put a high-foaming foam cleaner into a CIP circuit.',
        ],
      },
      {
        heading: 'CIP chemicals for dairy plants',
        paragraphs: [
          'Dairy circuits carry fat, protein and calcium-rich milk residues that form milkstone if they are not removed every cycle. Heavy-duty alkaline detergents with good scale prevention, followed by sanitising, keep pasteurisers, silos, tankers and filling lines clean.',
        ],
      },
      {
        heading: 'Bottle washing',
        paragraphs: [
          'Clastox 50 is also used for returnable bottle cleaning, where strong alkaline detergency and scale prevention matter.',
        ],
      },
    ],
    faqs: [
      { q: 'What chemicals are used in CIP cleaning?', a: 'A CIP cycle usually uses an alkaline detergent to remove fats and proteins, an acid step to remove mineral scale where needed, and a sanitiser such as peracetic acid after the final rinse. Evochem manufactures low-foaming alkaline CIP detergents and a peracetic acid sanitiser; for the acid step, ask our technical team.' },
      { q: 'Why must CIP detergents be low-foaming?', a: 'CIP solutions are pumped and recirculated at speed. Foam reduces contact with the pipe and tank walls and can cause pump cavitation, so CIP detergents are formulated to stay low-foaming.' },
      { q: 'What is the difference between CIP and OPC?', a: 'CIP cleans the inside of closed equipment by circulating a low-foaming solution. OPC cleans open surfaces such as floors, walls and conveyors, usually with a high-foaming detergent applied by a foam unit.' },
      { q: 'What dilution should I use for Clastox 50?', a: 'Clastox 50 is typically used at 0.5% to 5% (5 ml to 50 ml per litre of water), depending on the soil. The right concentration, temperature and circulation time depend on your circuit, and our team can help you set them.' },
      { q: 'Are your CIP chemicals suitable for dairy plants?', a: 'Yes. Clastox 50 and Clastox Plus are formulated to penetrate milk residues and animal fats and to prevent hard-water scale, which are the main challenges in dairy CIP.' },
      { q: 'Do you supply CIP chemicals across India?', a: 'Yes. We manufacture in Bengaluru and supply bulk packs, including 200 L drums, with pan-India delivery.' },
    ],
    related: [
      { path: '/solutions/open-plant-cleaning-chemicals/', label: 'Open plant cleaning chemicals and foam cleaning', eyebrow: 'Solution' },
      { path: '/industries/dairy-processing/', label: 'Cleaning and hygiene for dairy processing', eyebrow: 'Industry' },
      { path: '/resources/cip-vs-opc-cleaning/', label: 'CIP vs OPC cleaning explained', eyebrow: 'Guide' },
    ],
  },

  // 2. Open plant cleaning (OPC) and clean-out-of-place (COP).
  {
    kind: 'solution',
    slug: 'open-plant-cleaning-chemicals',
    name: 'Open plant cleaning (OPC)',
    title: 'Open Plant Cleaning Chemicals and Foam Cleaners | Evochem',
    description: 'Open plant cleaning (OPC) chemicals for food plants: alkaline, acidic, chlorinated and neutral foam cleaners for floors, walls, conveyors and equipment.',
    h1: 'Open Plant Cleaning Chemicals and Foam Cleaning',
    tagline: 'Foam cleaners for floors, walls, conveyors and equipment exteriors, plus soak cleaning of dismantled parts',
    banner: 'assets/image/FoodProcessing.jpg',
    bannerAlt: 'Foam cleaning of food processing equipment',
    primaryKeyword: 'open plant cleaning chemicals',
    summary: 'Alkaline, acidic, chlorinated and neutral foam cleaners for open surfaces, and low-foam detergents for soaking dismantled parts.',
    intro: [
      'Open plant cleaning (OPC) covers every surface in a food plant that your sanitation team can reach directly: floors, walls, drains, conveyors, machine frames and the outside of tanks and fillers. The usual method is foam cleaning. A high-foaming detergent is applied through a foam unit or lance, clings to vertical and overhead surfaces, and gives the chemistry time to loosen fat, protein and scale before it is rinsed away.',
      'OPC is different from clean-in-place (CIP), where a low-foaming solution is pumped through closed pipelines and tanks. Foam cleaners must never go into a CIP circuit, and CIP detergents are not designed to cling to walls. Evochem manufactures foam cleaners for each soil type in Bengaluru, with dilution guidance and an MSDS for every product.',
    ],
    sections: [
      {
        heading: 'A typical foam cleaning sequence',
        steps: [
          'Prepare the area: protect electrical equipment, remove product and packaging, and dry-clean gross soil from floors and belts.',
          'Pre-rinse with low-pressure water, top to bottom, to remove loose soil.',
          'Apply foam from the bottom up so the whole surface is covered evenly, at the dilution for your soil.',
          'Leave the foam to work for the time set in your cleaning procedure, without letting it dry on the surface.',
          'Rinse from the top down, including drains and the floor under equipment.',
          'Inspect for remaining soil, then sanitise food-contact surfaces.',
        ],
      },
      {
        heading: 'Choosing alkaline, acidic, chlorinated or neutral foam',
        paragraphs: [
          'Match the foam to the soil. Most daily cleaning is alkaline; an acidic foam is added where scale and mineral film build up.',
        ],
        bullets: [
          'Alkaline foam for fat, oil, protein and general food soils in dairies, meat plants and preserved-food lines: Alkalox Foam or Clastox Foam, both at 2% to 5% depending on soil.',
          'Acidic foam for scale, mineral deposits, particulate matter and inorganic soils: Acidox Foam at 2% to 5%. Use it periodically, or in alternation with an alkaline foam, where hard water leaves deposits.',
          'Chlorinated alkaline foam for daily cleaning where a combined clean-and-sanitise step suits the area: Chlorox Foam at 1% to 5%.',
          'Neutral, alkali-free foam for general cleaning of floors, walls, utensils and equipment where strong alkali is not needed: Neutrox Foam at 2% to 5%.',
          'Never mix acidic and chlorinated products. Rinse thoroughly between an acid step and a chlorinated step.',
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
        heading: 'Clean-out-of-place (COP): soaking dismantled parts',
        paragraphs: [
          'Parts removed from the line, such as valves, fittings, filler parts, knives, trays and utensils, are cleaned out of place in a soak tank or wash trough. Foam is not wanted here, so use a heavy-duty low-foaming alkaline detergent: Clastox Plus or Clastox 50 at 0.5% to 5% depending on soil.',
        ],
        steps: [
          'Dismantle the parts and pre-rinse them.',
          'Soak in the alkaline detergent solution, brushing crevices, threads and seals.',
          'Rinse with clean water.',
          'Sanitise at the label dilution and let the parts drain on a clean rack before reassembly.',
        ],
        products: ['low-foam-alkaline-detergent-clastox-plus', 'alkaline-cip-detergent-clastox-50'],
      },
      {
        heading: 'Sanitising after open plant cleaning',
        paragraphs: [
          'Foam cleaning removes soil. Unless a chlorinated cleaner is used as a combined step, it does not sanitise. After the final rinse, food-contact surfaces such as belts, tables and filler exteriors are sanitised to reduce microorganisms on the cleaned surface. Our sanitisation guide explains how to choose between quat, peracetic acid and alcohol-based products.',
        ],
        products: ['quat-sanitizer-sanix-quat', 'peracetic-acid-sanitizer-sanix-peraxy'],
      },
    ],
    faqs: [
      { q: 'What is open plant cleaning?', a: 'Open plant cleaning is the cleaning of exposed surfaces in a food plant, such as floors, walls, drains, conveyors and equipment exteriors. It is usually done with a high-foaming detergent applied by a foam unit, then rinsed.' },
      { q: 'Why use foam instead of spraying detergent solution?', a: 'Foam clings to vertical, overhead and irregular surfaces, so the detergent stays in contact long enough to loosen soil. It also shows the operator which areas have been covered.' },
      { q: 'Can foam cleaners be used in a CIP system?', a: 'No. Foam reduces contact inside pipes and tanks and can cause pump problems. Use a low-foaming CIP detergent such as Clastox 50 or Clastox Plus for closed circuits.' },
      { q: 'How often should an acidic foam cleaner be used?', a: 'It depends on your water hardness and soils. Where scale or mineral film builds up, schedule Acidox Foam periodically between alkaline cleans; our technical team can help you set the frequency.' },
      { q: 'What is the difference between OPC and COP?', a: 'OPC cleans surfaces where they stand. COP cleans parts that are removed from the line and soaked or washed in a tank, using a low-foaming detergent.' },
    ],
    related: [
      { path: '/solutions/cip-cleaning-chemicals/', label: 'CIP cleaning chemicals for closed circuits', eyebrow: 'Solution' },
      { path: '/industries/poultry-meat-processing/', label: 'Cleaning and hygiene for poultry and meat processing', eyebrow: 'Industry' },
      { path: '/resources/alkaline-vs-acidic-cleaners-food-industry/', label: 'Alkaline vs acidic cleaners in the food industry', eyebrow: 'Guide' },
    ],
  },

  // 3. Commercial kitchen hygiene — migrated from legacy solution type KitchenCleaning (solutionTypes.json).
  {
    kind: 'solution',
    slug: 'commercial-kitchen-hygiene',
    name: 'Commercial kitchen hygiene',
    title: 'Commercial Kitchen Cleaning Schedule and Process | Evochem',
    description: 'A commercial kitchen cleaning schedule by area: ovens, degreasing, floors, cold rooms, cutting boards, dishes and sinks, with daily, weekly and monthly tasks.',
    h1: 'Commercial Kitchen Cleaning Schedule: 10 Key Areas',
    tagline: 'What to clean, with which product and how often, across the 10 key areas of a commercial kitchen',
    banner: 'assets/image/Important-hygiene-steps-for-food-service-business.jpg',
    bannerAlt: 'Chef cleaning a commercial kitchen work surface',
    primaryKeyword: 'commercial kitchen cleaning schedule',
    summary: 'A step-by-step cleaning process and daily, weekly and monthly schedule for the 10 key areas of a commercial kitchen.',
    intro: [
      'A commercial kitchen stays hygienic when every area has a defined task, a defined product and a defined frequency. This page sets out the cleaning process for the 10 key areas of a restaurant, hotel, cloud kitchen or canteen kitchen, and a daily, weekly and monthly schedule you can adapt to your menu and service hours.',
      'It is a process guide; for the full Blaze range and how to choose between products, see our commercial kitchen cleaning chemicals range. Throughout, keep cleaning and sanitising separate: cleaning removes grease and food soil, and sanitising reduces microorganisms on a surface that is already clean.',
    ],
    sections: [
      {
        heading: '1. Ovens',
        paragraphs: [
          'Clean ovens at least weekly, and always let the oven cool fully first. Use Blaze Grill at 2% to 5% for regular cleaning, or directly on heavy baked-on deposits, then rinse thoroughly before the oven is used again.',
        ],
        products: ['oven-grill-cleaner-blaze-grill'],
      },
      {
        heading: '2. Degreasing hoods, fryers and splashbacks',
        paragraphs: [
          'Grease builds up fastest on range hoods, fryer exteriors, burners and walls behind the line. Degrease them daily with a concentrated kitchen degreaser, and use Blaze Grill where grease has carbonised.',
        ],
        products: ['neutral-multipurpose-detergent-blaze-multi', 'kitchen-degreaser-concentrate-blaze-multi-plus', 'oven-grill-cleaner-blaze-grill'],
      },
      {
        heading: '3. Floors',
        paragraphs: [
          'Sweep, then mop or scrub with Blaze Multi for routine soil, or Blaze Multi Plus where fat and oil are tracked from the line. Clean under equipment and around drains every day, and let floors dry before service.',
        ],
        products: ['neutral-multipurpose-detergent-blaze-multi', 'kitchen-degreaser-concentrate-blaze-multi-plus', 'hard-surface-cleaner-evo-2'],
      },
      {
        heading: '4. Coolers and refrigerators',
        paragraphs: [
          'Wipe door seals and handles daily. Each week, empty shelves in rotation, wash them with a mild cleaner, rinse and dry before restocking, and discard spilled or expired food to prevent odours and cross-contamination.',
        ],
        products: ['hard-surface-cleaner-evo-2', 'neutral-floor-cleaner-evo-7', 'neutral-multipurpose-detergent-blaze-multi', 'kitchen-degreaser-concentrate-blaze-multi-plus'],
      },
      {
        heading: '5. Freezers',
        paragraphs: [
          'Defrost as the equipment manufacturer recommends to stop ice build-up, then clean the interior, shelves and gaskets with a diluted cleaner, rinse and dry before restarting.',
        ],
        products: ['hard-surface-cleaner-evo-2', 'neutral-multipurpose-detergent-blaze-multi'],
      },
      {
        heading: '6. Cutting boards',
        paragraphs: [
          'After each task, scrape off debris, wash with Blaze Multi or Blaze Multi Plus, rinse, then sanitise. Blaze Tab is used at 1 tablet in 5 litres of water for general sanitisation and 1 tablet in 20 litres for vegetables. Air-dry boards on a rack.',
        ],
        products: ['neutral-multipurpose-detergent-blaze-multi', 'kitchen-degreaser-concentrate-blaze-multi-plus', 'chlorine-tablets-blaze-tab'],
      },
      {
        heading: '7. Countertops and prep surfaces',
        paragraphs: [
          'Clean prep surfaces between tasks and at the end of each shift with a cleaner suited to the surface material, then sanitise food-contact areas.',
        ],
        products: ['neutral-multipurpose-detergent-blaze-multi', 'kitchen-degreaser-concentrate-blaze-multi-plus', 'hard-surface-cleaner-evo-2'],
      },
      {
        heading: '8. Dishes, pots and pans',
        paragraphs: [
          'For pot-wash, use Blaze Dish for food and greasy soil, and Blaze Multi Plus for heavy fat on pans. Soak stained cups and crockery in Blaze Dip at 4% to 10% depending on soil.',
        ],
        products: ['dishwashing-liquid-blaze-dish', 'kitchen-degreaser-concentrate-blaze-multi-plus', 'crockery-destainer-blaze-dip'],
      },
      {
        heading: '9. Dishwashing machines',
        paragraphs: [
          'Dose Blaze Auto at 3 to 5 ml per litre of water and Blaze Rinse at 0.2 to 0.5 ml per litre at 80 to 90°C. Blaze Auto is not recommended for soft metals such as aluminium. Clean filters and spray arms at the end of each day.',
        ],
        products: ['dishwasher-detergent-blaze-auto', 'dishwasher-rinse-aid-blaze-rinse'],
      },
      {
        heading: '10. Sinks and drains',
        paragraphs: [
          'Clean sinks after each service with Blaze Multi, and use Blaze Drain, a non-acidic drain maintainer, to break down grease and sludge before drains slow or block.',
        ],
        products: ['drain-cleaner-blaze-drain', 'neutral-multipurpose-detergent-blaze-multi', 'kitchen-degreaser-concentrate-blaze-multi-plus'],
      },
      {
        heading: 'Daily, weekly and monthly cleaning schedule',
        bullets: [
          'After each task or shift: clean and sanitise cutting boards and prep surfaces; wash dishes, pots and pans; wipe up spills.',
          'Daily at close: degrease hoods, fryers and splashbacks; clean floors including under equipment; clean sinks and treat drains; wipe refrigerator seals and handles; clean dishwasher filters.',
          'Weekly: clean ovens and grills; wash hood filters; clean refrigerator shelves in rotation; destain cups and crockery.',
          'Monthly: defrost and deep clean freezers; clean walls, ceilings and the areas behind heavy equipment; review dosing on the dishwasher with our technical team.',
        ],
      },
    ],
    faqs: [
      { q: 'How often should a commercial kitchen be deep cleaned?', a: 'Daily and weekly tasks stop soil building up, and most kitchens add a monthly deep clean of freezers, walls, ceilings and the areas behind heavy equipment. High-volume or fried-food menus may need these tasks more often.' },
      { q: 'Should I clean or sanitise first?', a: 'Clean first, then sanitise. Sanitisers work on surfaces that are already free of grease and food soil, so the usual order is remove debris, wash, rinse, sanitise.' },
      { q: 'Can one product be used across the whole kitchen?', a: 'Blaze Multi is a neutral cleaner for floors, walls, utensils and general surfaces, but heavy grease, carbon and machine dishwashing each need their own product. Sanitising is always a separate step.' },
      { q: 'Can you train our kitchen staff on this schedule?', a: 'Yes. Our technical team provides product selection, dilution guidance and training so your staff use the right product at the right dilution.' },
    ],
    related: [
      { path: '/products/commercial-kitchen-cleaning-chemicals/', label: 'Commercial kitchen cleaning chemicals range', eyebrow: 'Product range' },
      { path: '/industries/hospitality/', label: 'Cleaning and hygiene for hotels and hospitality', eyebrow: 'Industry' },
      { path: '/resources/commercial-dishwasher-detergent-rinse-aid-guide/', label: 'Commercial dishwasher detergent and rinse aid guide', eyebrow: 'Guide' },
    ],
  },

  // 4. Washroom cleaning — migrated from legacy solution type BathroomCleaning (solutionTypes.json).
  {
    kind: 'solution',
    slug: 'washroom-cleaning-chemicals',
    name: 'Washroom cleaning',
    title: 'Restroom Cleaning Chemicals and Washroom Routine | Evochem',
    description: 'Restroom cleaning chemicals and a washroom routine for offices, hotels and facilities: toilets, urinals, sinks, mirrors, floors, stalls and soap dispensers.',
    h1: 'Restroom Cleaning Chemicals and Washroom Cleaning Routine',
    tagline: 'The right product for each of the 8 key areas of a washroom, and a routine your team can follow every shift',
    banner: 'assets/image/Link-Between-Toilet-and-Brand-Reputation.jpg',
    bannerAlt: 'Clean commercial washroom with sinks and mirrors',
    primaryKeyword: 'restroom cleaning chemicals',
    summary: 'Restroom cleaning chemicals for the 8 key areas of a washroom, with a shift routine and weekly deep-clean tasks.',
    intro: [
      'Washrooms are the most heavily used and most closely judged rooms in any office, hotel, hospital, mall or factory. They collect two very different kinds of soil: limescale, soap scum and hard-water marks on fittings, and organic soil, stains and odour in toilets and urinals. A good routine uses the right product for each, works from cleaner areas to dirtier ones, and finishes with the floor.',
      'This page covers the 8 key areas of a washroom and a routine your housekeeping team can follow every shift. For the complete EVO range, including products for offices, lobbies and rooms, see our institutional housekeeping chemicals range.',
    ],
    sections: [
      {
        heading: 'Countertops and backsplashes',
        paragraphs: ['EVO 1 uses organic acid to cut through soap scum, dirt and lime deposits on porcelain, plastic and stainless steel. Use it at 2% to 5% depending on soil, then wipe dry.'],
        products: ['bathroom-cleaner-evo-1'],
      },
      {
        heading: 'Glass and mirrors',
        paragraphs: ['Mirrors are the first thing users notice. EVO 3 at 2% to 10% removes dust, fingerprints and haze without leaving residue.'],
        products: ['glass-cleaner-concentrate-evo-3'],
      },
      {
        heading: 'Sinks and taps',
        paragraphs: ['Clean sinks and taps with EVO 1 to remove water stains and soap scum, use EVO ZAP cream cleaner on stubborn scale or rust marks, and finish exposed stainless steel with EVO SP.'],
        products: ['bathroom-cleaner-evo-1', 'cream-cleaner-evo-zap', 'stainless-steel-polish-evo-sp'],
      },
      {
        heading: 'Hand soap',
        paragraphs: ['Keep dispensers filled with a handwash that suits the users: Lush Fresh for frequent everyday use, Lush Foamy in foaming dispensers, and Lush Pearl for guest-facing washrooms.'],
        products: ['general-hand-wash-lush-fresh', 'foaming-hand-wash-lush-foamy', 'luxury-hand-wash-lush-pearl'],
      },
      {
        heading: 'Floors',
        paragraphs: ['Mop floors last, with EVO 7 for daily maintenance or EVO 2 for heavier soil, both at 2% to 5%. Descale wet-area tiles and grout periodically with EVO 9.'],
        products: ['neutral-floor-cleaner-evo-7', 'hard-surface-cleaner-evo-2', 'heavy-duty-descaler-evo-9'],
      },
      {
        heading: 'Door stalls and touchpoints',
        paragraphs: ['Door handles, stall locks and flush buttons are touched by every user. Wipe them every clean with EVO 2, and polish steel partitions and fittings with EVO SP.'],
        products: ['hard-surface-cleaner-evo-2', 'stainless-steel-polish-evo-sp'],
      },
      {
        heading: 'Dispensers',
        paragraphs: ['Wipe the outside of soap, paper and sanitiser dispensers with EVO 2 at every clean, and clean nozzles when refilling so they do not drip or clog.'],
        products: ['hard-surface-cleaner-evo-2', 'stainless-steel-polish-evo-sp'],
      },
      {
        heading: 'Toilets and urinals',
        paragraphs: ['EVO 6 is a thick toilet bowl cleaner that clings under the rim, dissolving stains and deposits. Use EVO 5 where odour persists, but treat it as a finishing touch, not a substitute for cleaning.'],
        products: ['toilet-bowl-cleaner-evo-6', 'air-freshener-evo-5'],
      },
      {
        heading: 'A washroom cleaning routine for every shift',
        steps: [
          'Ventilate the room, place wet-floor signs and put on gloves.',
          'Empty bins and pick up litter.',
          'Apply EVO 6 under toilet and urinal rims so it works while you clean elsewhere.',
          'Clean mirrors and glass with EVO 3.',
          'Clean countertops, sinks and taps with EVO 1, then wipe dry.',
          'Wipe handles, locks, flush buttons and dispensers with EVO 2.',
          'Brush and flush toilets and urinals, using a separate, colour-coded cloth and brush.',
          'Refill soap, paper and dispensers.',
          'Mop the floor last, working towards the exit.',
        ],
        paragraphs: ['Weekly, add descaling of tiles and grout with EVO 9 and polishing of steel with EVO SP.'],
      },
    ],
    faqs: [
      { q: 'Which chemicals are needed to clean a washroom?', a: 'Most washrooms need an acidic bathroom cleaner for fittings, a toilet bowl cleaner, a glass cleaner, a floor or hard-surface cleaner and handwash. A descaler and steel polish are useful for weekly tasks.' },
      { q: 'How do I remove limescale from taps and tiles?', a: 'Use EVO 1 for routine scale and soap scum, EVO 9 for heavier scale on tiles and ceramics, and EVO ZAP cream on stubborn spots. Test on a small area first and rinse after use.' },
      { q: 'How often should restrooms be cleaned?', a: 'Set the frequency by footfall. High-traffic restrooms usually need a full clean at least once per shift, with checks and touch-ups in between.' },
      { q: 'Does an air freshener replace cleaning?', a: 'No. EVO 5 neutralises odours in the air, but odour usually comes from soil in toilets, urinals, drains and floors, which has to be cleaned away.' },
    ],
    related: [
      { path: '/products/institutional-housekeeping-chemicals/', label: 'Institutional housekeeping chemicals range', eyebrow: 'Product range' },
      { path: '/industries/facility-management/', label: 'Cleaning chemicals for facility management', eyebrow: 'Industry' },
      { path: '/solutions/floor-care-chemicals/', label: 'Industrial floor cleaner and floor care', eyebrow: 'Solution' },
    ],
  },

  // 5. Floor care.
  {
    kind: 'solution',
    slug: 'floor-care-chemicals',
    name: 'Floor care',
    title: 'Industrial Floor Cleaner and Floor Care Chemicals | Evochem',
    description: 'Industrial floor cleaner and floor care chemicals for factories, warehouses, kitchens and offices: low-foam scrubber-dryer cleaners, degreasers and descalers.',
    h1: 'Industrial Floor Cleaner and Floor Care Chemicals',
    tagline: 'Choosing a floor cleaner by soil, surface and method, from manual mopping to scrubber-dryers',
    banner: 'assets/image/close-up-floor-wiper-mop-cleaning-industrial-plant-scaled.webp',
    bannerAlt: 'Floor being mopped in an industrial plant',
    primaryKeyword: 'industrial floor cleaner',
    summary: 'How to choose a neutral, heavy-duty or low-foam floor cleaner for manual and machine cleaning, plus tile descaling and carpets.',
    intro: [
      'Floors carry the heaviest and most varied soil in any building: oil, grease, tyre marks, tar and carbon in factories and warehouses; fat and food soil in kitchens; footfall dirt in offices and lobbies; and scale on wet-area tiles. The right floor cleaner depends on three things: the soil, the floor surface, and whether you clean by hand or by machine.',
      'This guide explains how to make that choice. Floor care is one part of a wider programme: washrooms, kitchens and food production areas each have their own process, covered on our other solution pages.',
    ],
    sections: [
      {
        heading: 'Manual mopping or scrubber-dryer cleaning',
        paragraphs: [
          'Manual mopping suits smaller areas and spot cleaning. Scrubber-dryers and single-disc machines suit large floors, but they need low-foam chemistry: foam fills the recovery tank, can reach the vacuum motor and leaves a residue on the floor. Never put a high-foaming product into a floor machine.',
          'Novel OGR is a low-foam oil and grease remover, and EVO 7 is a neutral cleaner suitable for both manual and machine cleaning.',
        ],
        products: ['oil-grease-remover-novel-ogr', 'neutral-floor-cleaner-evo-7'],
      },
      {
        heading: 'Neutral, heavy-duty or degreasing: matching the cleaner to the soil',
        bullets: [
          'Daily maintenance of sealed, polished or sensitive floors: EVO 7, neutral, at 2% to 5%. It removes dirt and grime without leaving residue or marks.',
          'General hard floors and walls: EVO 2, slightly alkaline and non-abrasive, at 2% to 5%.',
          'Oil, grease and water-soluble dirt in workshops, restaurants and factories: Novel OGR, low-foam, at 2% to 5%.',
          'Heavily soiled industrial floors with tar, grease, carbon or mineral deposits: Novel HD at 2% to 5%.',
          'Commercial kitchen floors: Blaze Multi, a neutral cleaner for floors, walls and utensils, at 2% to 5%.',
        ],
        products: [
          'neutral-floor-cleaner-evo-7',
          'hard-surface-cleaner-evo-2',
          'oil-grease-remover-novel-ogr',
          'heavy-duty-floor-cleaner-novel-hd',
          'neutral-multipurpose-detergent-blaze-multi',
        ],
      },
      {
        heading: 'Floor cleaning steps',
        steps: [
          'Sweep or dust-mop to remove loose dirt and grit.',
          'Place wet-floor signs.',
          'Dilute the cleaner at the dose for the soil, starting at the lower end of the range.',
          'Mop or scrub in sections, working towards the exit. With a scrubber-dryer, use only a low-foam product in the solution tank.',
          'On oily floors, rinse with clean water so no film is left.',
          'Let the floor dry before reopening, and empty and rinse machine tanks after use.',
        ],
      },
      {
        heading: 'Descaling tiles and wet areas',
        paragraphs: [
          'Hard water and soap leave scale and scum on tiles and ceramics in washrooms, kitchens and wash bays. EVO 9 dissolves this build-up at 2% to 10% and can be used as an occasional deep cleaner or more regularly where scale returns quickly. Test on a small area first, rinse well, and ask our team before using any acidic product on natural stone such as marble.',
        ],
        products: ['heavy-duty-descaler-evo-9'],
      },
      {
        heading: 'Carpets',
        paragraphs: [
          'Pre-treat heavy stains and traffic lanes with EVO 103 prespotter, then shampoo with EVO 101 at 2% to 10%, by machine, applicator, brush or sponge. Vacuum once the carpet is dry.',
        ],
        products: ['carpet-prespotter-evo-103', 'carpet-shampoo-evo-101'],
      },
    ],
    faqs: [
      { q: 'Why do scrubber-dryers need a low-foam floor cleaner?', a: 'Foam fills the machine’s recovery tank and can reach the vacuum motor, and it leaves residue on the floor. Use a low-foam product such as Novel OGR, or EVO 7, which suits machine cleaning.' },
      { q: 'What is the best industrial floor cleaner for oily factory floors?', a: 'Novel HD suits heavily soiled floors with grease, tar and carbon. Novel OGR suits oil and grease where a low-foam product is needed, including machine scrubbing.' },
      { q: 'Can a neutral floor cleaner be used every day?', a: 'Yes. EVO 7 is formulated for daily maintenance by hand or machine and does not leave residues or marks.' },
      { q: 'Does using more chemical clean floors better?', a: 'No. Overdosing leaves a film that attracts dirt and can make floors slippery. Dose to the soil within the stated range and rinse oily floors.' },
    ],
    related: [
      { path: '/resources/low-foam-floor-cleaner-scrubber-dryer/', label: 'Low-foam floor cleaners for scrubber-dryers', eyebrow: 'Guide' },
      { path: '/products/industrial-cleaning-degreasing-chemicals/', label: 'Industrial cleaning and degreasing chemicals', eyebrow: 'Product range' },
      { path: '/industries/manufacturing-warehousing/', label: 'Cleaning for manufacturing and warehousing', eyebrow: 'Industry' },
    ],
  },

  // 6. Laundry hygiene — migrated from legacy solution type LaundryCleaning (solutionTypes.json).
  {
    kind: 'solution',
    slug: 'laundry-hygiene',
    name: 'Laundry hygiene',
    title: 'Commercial Laundry Process and Linen Hygiene | Evochem',
    description: 'The commercial laundry process step by step: pre-wash, main wash, builder, chlorine destaining, sour and softener, with dosing per kg of dry linen for each.',
    h1: 'Commercial Laundry Process for Clean, Soft and Bright Linen',
    tagline: 'Each stage of the wash, what it does and how much to dose per kg of dry linen',
    banner: 'assets/image/washing.webp',
    bannerAlt: 'Commercial washing machines in a laundry',
    primaryKeyword: 'commercial laundry process',
    summary: 'The wash sequence from pre-wash to softener, with dosing per kg of dry linen, and how to manage stains, fabric life, whiteness and softness.',
    intro: [
      'Hotel, hospital and institutional linen is judged on three things: it must be clean, soft and bright. Each result comes from a specific stage of the wash, so a reliable commercial laundry process uses the right product at each stage rather than more of a single detergent. All Evochem laundry doses are stated per kg of dry linen, so weigh or estimate the load before dosing.',
      'This page explains the process. For the full Flox range, see our commercial laundry chemicals range, and our technical team can set a wash programme for each linen type and machine.',
    ],
    sections: [
      {
        heading: 'The wash sequence',
        steps: [
          'Pre-wash: Flox Pre-Wash Detergent, 2 to 4 ml per kg of dry linen, emulsifies and lifts oils, fat and grease, especially on kitchen and heavily soiled linen.',
          'Main wash: Flox Star at 5 to 15 ml per kg of dry linen, or Star Powder at 5 to 15 g per kg of dry linen, releases stains and soil and holds them in suspension so they do not redeposit.',
          'Builder: Flox Build, 5 to 15 ml per kg of dry linen, raises the alkalinity of the wash to loosen greasy and fatty stains. Use it with Flox Star for heavy soil, or on its own.',
          'Destaining: for white linen, Flox Laundry Chlorine Destainer at 3 to 15 ml per kg of dry linen removes stains in industrial machines.',
          'Rinse thoroughly to remove detergent and chlorine.',
          'Sour: in the final rinse, Flox Sour at 5 to 15 ml per kg of dry linen, or Flox Rinse powder at 5 to 15 g per kg of dry linen, neutralises remaining alkalinity and bleach residue to help prevent yellowing.',
          'Softening: Flox Soft Care, 2 ml per kg of dry linen, softens fabric, reduces static and makes ironing easier.',
        ],
        paragraphs: [
          'Within each range, the dose depends on soil level, water hardness and the machine. Start at the lower dose for lightly soiled linen.',
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
        heading: 'Stain removal',
        paragraphs: [
          'Sort linen by soil as well as colour. Send greasy kitchen and F&B linen through a pre-wash, and keep the chlorine destainer for white linen; for coloured items, ask our technical team.',
        ],
        products: ['pre-wash-laundry-detergent-flox', 'laundry-chlorine-destainer-flox'],
      },
      {
        heading: 'Fabric life',
        paragraphs: [
          'Linen lasts longer when every stage is dosed correctly. Excess alkali and chlorine left in the fabric weaken it over time, so dose the builder and destainer to the soil and always neutralise in the final rinse.',
        ],
        products: ['heavy-duty-liquid-laundry-detergent-flox-build', 'main-wash-laundry-detergent-flox-star', 'laundry-sour-neutralizer-flox-sour'],
      },
      {
        heading: 'Fabric whiteness',
        paragraphs: [
          'Dull or yellowed whites usually come from residual alkalinity, bleach residue or redeposited soil. A correct main wash, chlorine destaining for whites and a sour in the final rinse address all three.',
        ],
        products: ['laundry-chlorine-destainer-flox', 'laundry-sour-neutralizer-flox-sour', 'laundry-neutralizing-powder-flox-rinse'],
      },
      {
        heading: 'Fabric softness',
        paragraphs: [
          'Towels and bed linen that feel stiff or harsh reflect poorly on any guest room or ward. A measured softener in the final rinse keeps fabric comfortable and reduces static and rigidity.',
        ],
        products: ['fabric-softener-flox-soft-care'],
      },
    ],
    faqs: [
      { q: 'What does dosing per kg of dry linen mean?', a: 'The dose is calculated from the weight of the linen before it is wetted. For example, a 20 kg load at 10 ml per kg of dry linen needs 200 ml of product.' },
      { q: 'What is a laundry sour and why is it needed?', a: 'A sour is a mildly acidic product added to the final rinse. It neutralises the alkalinity and bleach residue left by the wash, which helps prevent yellowing and protects the fabric.' },
      { q: 'Can the chlorine destainer be used on coloured linen?', a: 'Flox Laundry Chlorine Destainer is designed for white linen. For coloured fabrics or uniforms, ask our technical team for a suitable programme.' },
      { q: 'Do I need both a main wash detergent and a builder?', a: 'For light soil, Flox Star alone is often enough. For heavily greasy or fatty soil, adding Flox Build increases the alkalinity of the wash and improves stain removal.' },
    ],
    related: [
      { path: '/products/commercial-laundry-chemicals/', label: 'Commercial laundry chemicals range', eyebrow: 'Product range' },
      { path: '/industries/commercial-laundry/', label: 'Chemicals for commercial laundries', eyebrow: 'Industry' },
      { path: '/resources/commercial-laundry-wash-process/', label: 'The commercial laundry wash process explained', eyebrow: 'Guide' },
    ],
  },

  // 7. Hand hygiene.
  {
    kind: 'solution',
    slug: 'hand-hygiene',
    name: 'Hand hygiene',
    title: 'Commercial Handwash Liquid and Hand Hygiene | Evochem',
    description: 'Commercial handwash liquid in bulk for food plants, kitchens, workshops, hotels and offices: perfume-free, heavy-duty, foaming, luxury handwash and sanitiser.',
    h1: 'Commercial Handwash Liquid and Hand Hygiene Programmes',
    tagline: 'Choosing handwash and hand sanitiser by user, and placing stations where they are needed',
    banner: 'assets/image/Hand-Hygiene.jpg',
    bannerAlt: 'Hands being washed with liquid handwash',
    primaryKeyword: 'commercial handwash liquid',
    summary: 'How to choose commercial handwash liquid and hand sanitiser for food handlers, workshops, guest areas and offices.',
    intro: [
      'Hand hygiene only works when people actually wash their hands, and they do that more readily when the product suits the job and the station is in the right place. A food handler needs a perfume-free handwash at line entry, a mechanic needs one that removes grease, and a hotel guest expects a pleasant, fragrant product. Choosing one handwash for every location usually means one of these users is poorly served.',
      'Evochem’s Lush range covers each of these needs with ready-to-use handwash and hand sanitiser, supplied in bulk packs for refilling dispensers. This page explains how to choose and where to place them; surface sanitising is covered separately in our sanitisation guide.',
    ],
    sections: [
      {
        heading: 'Handwash or hand sanitiser',
        paragraphs: [
          'Handwash with water physically removes dirt, grease and food soil, and is the basic step at every station. Hand sanitiser is waterless and quick-drying, and is used on clean, dry hands where your site procedure calls for an extra step, or where water is not available. It does not replace washing when hands are visibly soiled or greasy.',
        ],
        products: ['gel-hand-sanitizer-lush-care-gel', 'liquid-hand-sanitizer-lush-care-rub'],
      },
      {
        heading: 'Perfume-free handwash for food handlers',
        paragraphs: [
          'In food processing, pharmaceutical and food service areas, fragrance can transfer to product, so use a colourless, perfume-free handwash. Lush Care is formulated for frequent washing by plant personnel, and Lush Care Plus is an antibacterial handwash with no added colours or perfumes.',
        ],
        products: ['perfume-free-hand-wash-lush-care', 'antibacterial-hand-wash-lush-care-plus'],
      },
      {
        heading: 'Heavy-duty handwash for workshops',
        paragraphs: [
          'Maintenance teams, mechanics and warehouse staff handle oil and grease that ordinary handwash leaves behind. Lush Power removes stubborn oils, soils and greases while retaining the skin’s natural moisture, and is an antibacterial-free option.',
        ],
        products: ['heavy-duty-hand-wash-lush-power'],
      },
      {
        heading: 'Guest-facing and general washrooms',
        paragraphs: [
          'Lush Pearl is a luxury handwash with a pleasant fragrance for hotel rooms, lobbies and premium washrooms. Lush Fresh suits frequent everyday use in offices and schools, and Lush Foamy is a gentle foaming handwash for foam dispensers.',
        ],
        products: ['luxury-hand-wash-lush-pearl', 'general-hand-wash-lush-fresh', 'foaming-hand-wash-lush-foamy'],
      },
      {
        heading: 'Where to place hand hygiene stations',
        bullets: [
          'At production line entry and changing-room exits, before staff reach the food area.',
          'In and immediately outside toilets.',
          'At the kitchen pass, prep areas and pot-wash.',
          'At workshop and maintenance area exits.',
          'In guest washrooms, receptions and dining areas.',
        ],
      },
      {
        heading: 'Hand hygiene at line entry',
        steps: [
          'Wet hands with clean running water.',
          'Apply handwash and lather all surfaces, including between fingers, thumbs, nails and wrists.',
          'Rinse thoroughly.',
          'Dry with single-use towels or a hand dryer.',
          'Apply hand sanitiser to clean, dry hands if your site procedure requires it.',
          'Put on gloves where required.',
        ],
      },
    ],
    faqs: [
      { q: 'Which handwash is best for food handlers?', a: 'A colourless, perfume-free handwash such as Lush Care, or Lush Care Plus where an antibacterial handwash is specified. Both are formulated for frequent use by processing and food service staff.' },
      { q: 'Can hand sanitiser replace handwashing?', a: 'No. Sanitiser is for clean, dry hands. When hands are soiled or greasy, they must be washed with handwash and water first.' },
      { q: 'Which handwash removes oil and grease?', a: 'Lush Power is a heavy-duty handwash for mechanics, maintenance and workshop staff, made to remove stubborn oils and greases while being gentle on skin.' },
      { q: 'Why should food handlers use a perfume-free handwash?', a: 'Fragrance can transfer from hands to food, packaging and ingredients. A colourless, perfume-free handwash avoids this while still removing soil.' },
      { q: 'Where should handwash stations go in a food plant?', a: 'At every entry to production, usually after the changing room and before the hygiene barrier, and in or beside toilets and break areas. Each station needs handwash, running water and a means of drying hands.' },
      { q: 'Do you supply handwash in bulk for dispensers?', a: 'Yes. The Lush products are ready to use and supplied in bulk packs for refilling dispensers, with pan-India delivery.' },
    ],
    related: [
      { path: '/products/professional-hand-hygiene-products/', label: 'Professional hand hygiene products', eyebrow: 'Product range' },
      { path: '/industries/food-processing/', label: 'Cleaning and hygiene for food processing', eyebrow: 'Industry' },
      { path: '/solutions/sanitization-chemicals/', label: 'Choosing a food-contact surface sanitiser', eyebrow: 'Solution' },
    ],
  },

  // 8. Sanitisation.
  {
    kind: 'solution',
    slug: 'sanitization-chemicals',
    name: 'Sanitisation',
    title: 'Food-Contact Surface Sanitiser Selection Guide | Evochem',
    description: 'How to choose a food-contact surface sanitiser: quat, peracetic acid, chlorine tablets, alcohol-based or cleaner-sanitiser, always on pre-cleaned surfaces.',
    h1: 'Choosing a Food-Contact Surface Sanitiser',
    tagline: 'Quat, peracetic acid, chlorine, alcohol-based and combined cleaner-sanitisers, and when each fits',
    banner: 'assets/image/wipe.jpg',
    bannerAlt: 'Food-contact surface being wiped after cleaning',
    primaryKeyword: 'food-contact surface sanitiser',
    summary: 'The difference between cleaning and sanitising, and how to choose between quat, peracetic acid, chlorine and alcohol-based sanitisers.',
    intro: [
      'Cleaning and sanitising are two different jobs. Cleaning removes soil: fat, protein, sugar, food debris and scale. Sanitising reduces bacteria and other microorganisms on a surface that has already been cleaned. A sanitiser applied to a dirty surface is held back by the soil and cannot do its job, so sanitising always comes after cleaning and rinsing.',
      'Evochem manufactures several types of food-contact surface sanitiser, because plants, kitchens and packing areas have different needs. This page explains when each type fits. In every case, use the dilution on the label, and read the MSDS before use.',
    ],
    sections: [
      {
        heading: 'Clean first, then sanitise',
        steps: [
          'Remove food debris and gross soil.',
          'Clean with a detergent suited to the soil.',
          'Rinse off the detergent and loosened soil.',
          'Apply the sanitiser at the label dilution to the cleaned surface.',
          'Let the surface drain or air-dry, or rinse if the label or your site procedure requires it.',
          'Keep cleaned and sanitised equipment protected until use.',
        ],
      },
      {
        heading: 'Quat sanitiser for routine surfaces',
        paragraphs: [
          'Sanix Quat is a clear, quaternary ammonium sanitiser for pre-cleaned surfaces in food production, at 0.1% to 0.5% (1 ml to 5 ml per litre of water). It suits routine sanitising of tables, utensils, equipment and COP parts.',
        ],
        products: ['quat-sanitizer-sanix-quat'],
      },
      {
        heading: 'Peracetic acid sanitiser for circuits and high-level sanitation',
        paragraphs: [
          'Sanix Peraxy is an oxidising sanitiser made with peracetic acid, hydrogen peroxide and acetic acid, used at 0.1% to 3% v/v depending on the volume. It is the usual choice after CIP and where a high level of sanitation is needed on pre-cleaned surfaces. Handle the concentrate with the PPE shown on the MSDS.',
        ],
        products: ['peracetic-acid-sanitizer-sanix-peraxy'],
      },
      {
        heading: 'Chlorine tablets for kitchens and vegetables',
        paragraphs: [
          'Blaze Tab gives a measured dose without handling liquid concentrate: 1 tablet in 5 litres of water for general sanitisation of food-contact surfaces and equipment, and 1 tablet in 20 litres for vegetables. It suits commercial kitchens and smaller prep areas.',
        ],
        products: ['chlorine-tablets-blaze-tab'],
      },
      {
        heading: 'Alcohol-based sanitiser for quick, dry use',
        paragraphs: [
          'Sanixol combines alcohol with a quaternary ammonium compound and is ready to use. It leaves no residue and needs no rinsing, so it suits quick sanitising of clean, dry surfaces between tasks, such as packing tables, slicers and scales.',
        ],
        products: ['alcohol-surface-sanitizer-sanixol'],
      },
      {
        heading: 'Cleaner-sanitisers: when one step is enough',
        paragraphs: [
          'Sanix Duo combines detergent and quaternary ammonium sanitiser for lightly soiled areas, working in hard water at 2% to 5%. Chlorox Foam is a chlorinated alkaline foam that cleans and sanitises in one step during daily open plant cleaning. Heavily soiled surfaces still need a separate clean before sanitising.',
        ],
        products: ['cleaner-sanitizer-sanix-duo', 'chlorinated-alkaline-foam-cleaner-chlorox-foam'],
      },
      {
        heading: 'Safe use',
        bullets: [
          'Follow the label dilution: a stronger solution is not a better one.',
          'Never mix chlorine-based products with acids or with other chemicals.',
          'Prepare fresh solutions as your procedure specifies.',
          'Keep the MSDS at the point of use and train staff on PPE.',
        ],
      },
    ],
    faqs: [
      { q: 'What is the difference between cleaning and sanitising?', a: 'Cleaning removes visible soil such as fat, protein and food debris. Sanitising reduces microorganisms on a surface that is already clean.' },
      { q: 'Can a sanitiser be used on a dirty surface?', a: 'No. Soil uses up the sanitiser and stops it reaching the surface, so clean and rinse the surface first. Combined cleaner-sanitisers suit only lightly soiled areas.' },
      { q: 'Which sanitiser is used after CIP?', a: 'Peracetic acid sanitisers such as Sanix Peraxy are commonly circulated after the final rinse of a CIP cycle, at the label dilution.' },
      { q: 'Do I need to rinse after sanitising?', a: 'Sanixol is designed to be used without rinsing. For other sanitisers, follow the label and your site’s food safety procedure.' },
      { q: 'How do I sanitise vegetables?', a: 'Blaze Tab is used at 1 tablet in 20 litres of water for vegetable sanitisation. Wash vegetables in clean water first to remove soil.' },
    ],
    related: [
      { path: '/resources/food-contact-surface-sanitizers-guide/', label: 'Food-contact surface sanitisers guide', eyebrow: 'Guide' },
      { path: '/products/food-processing-hygiene-chemicals/', label: 'Food industry cleaning and sanitation chemicals', eyebrow: 'Product range' },
      { path: '/solutions/open-plant-cleaning-chemicals/', label: 'Open plant cleaning chemicals and foam cleaning', eyebrow: 'Solution' },
    ],
  },
];
