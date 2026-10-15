import { ContentPage } from './content-model';

// Resource articles. Product facts and dilutions come from public/assets/data/evochem-data.json.
// Rules: no certification claims, no kill claims or contact times, no invented figures, cleaning ≠ sanitising.

export const ARTICLES: ContentPage[] = [
  // 1 ─────────────────────────────────────────────────────────────────────────
  {
    kind: 'article',
    slug: 'cip-vs-opc-cleaning',
    name: 'CIP vs OPC cleaning',
    title: 'CIP vs OPC Cleaning: Differences and Best Uses | Evochem',
    description: 'CIP vs OPC cleaning explained: clean-in-place, open plant cleaning and COP, typical sequences, chemistry choices, safety and how to choose for your plant.',
    h1: 'CIP vs OPC cleaning: what is the difference and when to use each',
    tagline: 'Two ways to clean a food plant, and why most plants need both.',
    banner: 'assets/image/dairy.jpg',
    bannerAlt: 'Stainless steel tanks and pipework in a dairy processing plant',
    primaryKeyword: 'CIP vs OPC cleaning',
    summary: 'How clean-in-place, open plant cleaning and clean-out-of-place differ, and how to decide which method each part of your plant needs.',
    date: '2026-10-15',
    readTime: 6,
    intro: [
      'Every food, dairy and beverage plant has two very different cleaning jobs. One is the inside of closed equipment: pipelines, tanks, heat exchangers and fillers that product flows through. The other is everything that is open to the room: conveyors, tables, floors, walls, drains and the outside of machines. Clean-in-place (CIP) and open plant cleaning (OPC) are the two methods designed for these jobs.',
      'A third method, clean-out-of-place (COP), sits between them. Parts are removed from a machine and washed in a tank or parts washer. Understanding where each method fits helps you choose the right chemistry, the right equipment and the right safety controls, and avoids the common mistake of using one product for every surface.',
      'This guide explains each method, the typical sequence of steps, the chemistry usually involved and a practical way to decide which approach a piece of equipment needs.',
    ],
    sections: [
      {
        heading: 'What clean-in-place (CIP) means',
        paragraphs: [
          'CIP cleans the internal surfaces of closed equipment without taking it apart. Cleaning solutions are pumped through the same lines and vessels the product uses, often from a dedicated CIP set with tanks, a pump, a heater and return lines. Spray balls or spray devices distribute solution inside tanks.',
          'Because the solution is recirculated under turbulent flow, the cleaning action comes from chemistry, temperature, time and flow velocity rather than scrubbing. Foam is a problem in a recirculating system: it causes pump cavitation, poor contact and overflowing tanks. CIP detergents therefore need to be low-foaming.',
        ],
        steps: [
          'Pre-rinse with water to push out loose product and soil.',
          'Circulate an alkaline detergent to remove fats, proteins and milk residues.',
          'Intermediate rinse to remove detergent and loosened soil.',
          'Where mineral deposits or milkstone build up, circulate an acid step, then rinse again.',
          'Sanitise the cleaned surfaces with a suitable sanitiser, following the label for rinse requirements.',
          'Verify: check rinse water, inspect where possible and record the cycle.',
        ],
        products: ['alkaline-cip-detergent-clastox-50', 'low-foam-alkaline-detergent-clastox-plus', 'peracetic-acid-sanitizer-sanix-peraxy'],
      },
      {
        heading: 'What open plant cleaning (OPC) means',
        paragraphs: [
          'OPC covers every surface that can be reached by hand or by a hose: conveyor belts, cutting tables, hoppers, floors, walls and the exterior of machines. Here the challenge is contact time on vertical and complex surfaces, so foam is useful rather than harmful. A foaming detergent applied with a foam lance or foam unit clings to surfaces, shows the operator where product has been applied and keeps the chemistry working on the soil.',
        ],
        steps: [
          'Dry clean: remove product scraps and debris by hand or with scrapers.',
          'Pre-rinse with low-pressure water from top to bottom.',
          'Apply foam detergent evenly, working from the bottom up so coverage is visible.',
          'Allow the foam to work, then agitate heavily soiled areas with brushes or pads.',
          'Rinse thoroughly from the top down so dirty water runs to the drain.',
          'Apply sanitiser to food-contact surfaces after cleaning, as directed on the label.',
        ],
        products: ['alkaline-foam-cleaner-alkalox-foam', 'acidic-foam-cleaner-acidox-foam', 'chlorinated-alkaline-foam-cleaner-chlorox-foam'],
      },
      {
        heading: 'Where clean-out-of-place (COP) fits',
        paragraphs: [
          'Some equipment is too intricate for CIP but too small or delicate for open foam cleaning: filler valves, gaskets, pump impellers, nozzles, moulds and small utensils. These are dismantled and washed in a COP tank, a soak bath or an agitated parts washer. A low-foam alkaline detergent is usually the right base, because COP tanks recirculate or agitate the solution. Parts are rinsed, sanitised and reassembled with clean hands and tools.',
        ],
      },
      {
        heading: 'Chemistry choices for each method',
        bullets: [
          'CIP: low-foam alkaline detergents for organic soil; an acid step for mineral scale. Evochem does not list a dedicated acid CIP detergent, so ask our technical team for the right option for your circuit.',
          'OPC: high-foaming alkaline detergents for fat and protein, high-foaming acidic detergents for scale and inorganic soil, and chlorinated alkaline foam where the plant’s hygiene plan calls for it.',
          'Neutral foam detergent for general areas and for surfaces where a strong alkali is not wanted.',
          'Sanitisers such as peracetic acid or quat, applied only to surfaces that have already been cleaned and rinsed.',
          'Always check that a product is compatible with the materials in your equipment, including soft metals, gaskets and coatings, and read the label before first use.',
        ],
      },
      {
        heading: 'Safety in CIP and OPC',
        paragraphs: [
          'CIP chemicals are handled in concentrate and often at elevated temperature, so the main risks are splashes during tank make-up and accidental opening of a line during a cycle. Interlocks, lock-out procedures and correct PPE matter. In OPC, the operator is close to the spray, so goggles, gloves, aprons and boots are essential, and foam should never be applied over live electrical panels.',
          'Never mix acid products with chlorinated products: the reaction can release chlorine gas. Keep acids and chlorinated alkalis in separate, labelled storage and rinse thoroughly between steps. Keep the MSDS for every product at the point of use.',
        ],
      },
      {
        heading: 'How to decide which method to use',
        bullets: [
          'If product flows through it and it cannot be opened easily, it is a CIP candidate.',
          'If you can see and reach the surface, it is an OPC job.',
          'If the part is small, intricate and removable, use COP.',
          'If a CIP circuit still leaves residue at dead legs or valves, add a periodic manual or COP clean for those parts.',
          'Match foam level to the method: low foam for CIP and COP, high foam for OPC.',
        ],
      },
    ],
    faqs: [
      { q: 'Can I use a foaming detergent in a CIP system?', a: 'No. Foam in a recirculating system causes pump problems and poor surface contact. Use a low-foaming detergent for CIP and keep foaming products for open plant cleaning.' },
      { q: 'Is an acid step needed in every CIP cycle?', a: 'Not always. The frequency of the acid step depends on the soil, water hardness and the product being processed. Our technical team can help you set a schedule for your plant.' },
      { q: 'Does CIP replace manual cleaning completely?', a: 'Rarely. Gaskets, valves, dead legs and the outside of equipment still need COP or open plant cleaning, and periodic inspection is needed to confirm the CIP is working.' },
      { q: 'Is cleaning the same as sanitising?', a: 'No. Cleaning removes soil; sanitising reduces microorganisms on a surface that is already clean. A sanitiser applied to a dirty surface cannot do its job properly.' },
      { q: 'Which Evochem products are low-foam for CIP?', a: 'Clastox 50 and Clastox Plus are alkaline detergents suited to recirculation. Confirm the dilution and materials compatibility with our team before use.' },
    ],
    related: [
      { path: '/solutions/cip-cleaning-chemicals/', label: 'CIP cleaning chemicals', eyebrow: 'Solution' },
      { path: '/solutions/open-plant-cleaning-chemicals/', label: 'Open plant cleaning chemicals', eyebrow: 'Solution' },
      { path: '/industries/dairy-processing/', label: 'Dairy processing hygiene', eyebrow: 'Industry' },
    ],
  },

  // 2 ─────────────────────────────────────────────────────────────────────────
  {
    kind: 'article',
    slug: 'alkaline-vs-acidic-cleaners-food-industry',
    name: 'Alkaline vs acidic cleaners',
    title: 'Alkaline vs Acidic Cleaner: Choosing for Food Plants | Evochem',
    description: 'Alkaline vs acidic cleaner for food plants: match fat, protein, milkstone, scale and sugar soils to the right chemistry, foam level and rotation schedule.',
    h1: 'Alkaline vs acidic cleaner: how to choose the right chemistry for food plants',
    tagline: 'Match the chemistry to the soil, not the other way round.',
    banner: 'assets/image/FoodProcessing.jpg',
    bannerAlt: 'Food processing line with stainless steel equipment',
    primaryKeyword: 'alkaline vs acidic cleaner',
    summary: 'A practical guide to choosing alkaline, acidic, chlorinated, neutral, foaming and low-foam cleaners by the soil you need to remove.',
    date: '2026-10-15',
    readTime: 6,
    intro: [
      'Most cleaning problems in food plants come from a mismatch between the soil and the chemistry. A detergent that removes fat easily may do almost nothing to mineral scale, and an acid that dissolves scale will leave a greasy film behind. The first question is never “which product is strongest” but “what is the soil made of”.',
      'Food soils fall into two broad families. Organic soils such as fats, oils, proteins and sugars respond to alkaline chemistry. Inorganic soils such as hard-water scale, milkstone and mineral deposits respond to acid chemistry. Chlorinated, neutral, foaming and low-foam products are variations that suit particular surfaces, methods and plant schedules.',
      'This guide maps common soils to chemistry, explains where foaming and low-foam products fit, and sets out how to rotate acid and alkaline cleaning safely. It is written for plant managers, QA teams and hygiene supervisors who choose products or set cleaning schedules.',
    ],
    sections: [
      {
        heading: 'Map the soil to the chemistry',
        bullets: [
          'Animal and vegetable fats and oils: alkaline detergent, which saponifies and emulsifies fat; warm water helps.',
          'Proteins (meat, poultry, milk, egg): alkaline detergent; chlorinated alkaline products help break down protein films.',
          'Sugars and starches: largely water-soluble, removed with warm water and an alkaline or neutral detergent; burnt-on sugar needs stronger alkaline action.',
          'Milkstone (a mix of protein, fat and minerals): alkaline clean first to remove the organic part, then an acid step for the mineral part.',
          'Hard-water scale and mineral deposits: acidic detergent.',
          'Light general soil on floors, walls and utensils: neutral or mild detergent.',
        ],
      },
      {
        heading: 'Alkaline cleaners',
        paragraphs: [
          'Alkaline detergents are the workhorse of food plant hygiene because most food soil is organic. They come in high-foaming versions for open surfaces and low-foaming versions for recirculating systems and machines. Products with chelating or sequestering agents keep hardness minerals in solution, which helps in hard water and reduces the scale that alkaline products can otherwise leave behind.',
        ],
        products: ['alkaline-foam-cleaner-alkalox-foam', 'high-foaming-alkaline-detergent-clastox-foam', 'low-foam-alkaline-detergent-clastox-plus'],
      },
      {
        heading: 'Acidic cleaners',
        paragraphs: [
          'Acidic detergents dissolve the mineral deposits that alkaline products cannot touch: hard-water scale on tanks and walls, the mineral layer of milkstone, and dull films on stainless steel. In open plant cleaning a high-foaming acid gives the contact time needed on vertical surfaces. For an acid step inside a CIP circuit, the range does not include a dedicated acid CIP detergent, so ask our technical team for advice suited to your system.',
        ],
        products: ['acidic-foam-cleaner-acidox-foam'],
      },
      {
        heading: 'Chlorinated, neutral, foaming and low-foam options',
        bullets: [
          'Chlorinated alkaline: combines alkaline cleaning with chlorine, useful for protein films and daily cleaning in meat, poultry, dairy and vegetable processing. Never combine with acids.',
          'Neutral or alkali-free: for general cleaning of floors, walls, utensils and equipment where strong alkali is not needed or not wanted.',
          'High-foaming: for open surfaces, applied by foam lance so the product clings and stays wet.',
          'Low-foaming: for CIP, COP tanks, tray washers and any recirculating or pumped system.',
        ],
        products: ['chlorinated-alkaline-foam-cleaner-chlorox-foam', 'multipurpose-foam-detergent-neutrox-foam'],
      },
      {
        heading: 'Rotating acid and alkaline cleaning',
        paragraphs: [
          'Many plants run alkaline cleaning daily and an acid clean on a periodic schedule, for example weekly, or whenever scale or a white film appears. The right frequency depends on water hardness, processing temperature and the product. Set it with your technical adviser and adjust it based on inspection. Signs that the acid step is due include a white or grey film on stainless steel, rough deposits on tank walls and slower drainage from surfaces that used to rinse clean.',
        ],
        steps: [
          'Dry clean and pre-rinse to remove loose soil.',
          'Apply the alkaline detergent first to remove fat and protein.',
          'Rinse thoroughly so no alkaline residue remains.',
          'Apply the acidic detergent to remove scale and mineral deposits.',
          'Rinse thoroughly again.',
          'Sanitise the clean surfaces, following the label for any rinse requirement.',
        ],
      },
      {
        heading: 'Materials compatibility and safety',
        paragraphs: [
          'Strong alkalis can attack aluminium, galvanised steel and some soft metals, and acids can damage certain metals, grouts and coatings. Before using any product on a new surface, check the label and ask our technical team about compatibility; test on a small area where in doubt. Store acids and chlorinated products apart, keep every container labelled, and make sure operators wear the PPE specified in the MSDS.',
        ],
      },
    ],
    faqs: [
      { q: 'Can I mix an alkaline and an acidic cleaner to save a step?', a: 'No. They neutralise each other and lose effectiveness, and mixing an acid with a chlorinated product can release chlorine gas. Apply them separately with a thorough rinse in between.' },
      { q: 'Why do I still see a white film after alkaline cleaning?', a: 'A white film is often mineral scale or milkstone, which alkaline detergents do not dissolve. An acid clean usually removes it.' },
      { q: 'Is a chlorinated alkaline cleaner a sanitiser?', a: 'Chlorox Foam is described as a 2-in-1 cleaner and sanitiser, but your hygiene plan should still define whether a separate sanitising step is needed on food-contact surfaces.' },
      { q: 'When should I choose a neutral detergent?', a: 'For light, general soil and for surfaces that may be sensitive to strong alkali. Neutrox Foam is an alkali-free option for floors, walls, utensils and equipment.' },
      { q: 'How do I know which dilution to use?', a: 'Start from the dilution on the product label and adjust within that range for the soil level. Our technical team can help you set dilutions for each area.' },
    ],
    related: [
      { path: '/solutions/open-plant-cleaning-chemicals/', label: 'Open plant cleaning chemicals', eyebrow: 'Solution' },
      { path: '/industries/food-processing/', label: 'Food processing hygiene', eyebrow: 'Industry' },
      { path: '/products/food-processing-hygiene-chemicals/', label: 'Food processing hygiene chemicals', eyebrow: 'Products' },
    ],
  },

  // 3 ─────────────────────────────────────────────────────────────────────────
  {
    kind: 'article',
    slug: 'commercial-dishwasher-detergent-rinse-aid-guide',
    name: 'Dishwasher detergent and rinse aid',
    title: 'Commercial Dishwasher Detergent and Rinse Aid Guide | Evochem',
    description: 'How commercial dishwasher detergent and rinse aid work together: water hardness, temperature, dosing pumps, spotting fixes and destaining crockery.',
    h1: 'Commercial dishwasher detergent and rinse aid: how they work together',
    tagline: 'Two products, one result: clean, dry, spot-free ware.',
    banner: 'assets/image/kitchen.jpg',
    bannerAlt: 'Commercial kitchen with dishwashing area',
    primaryKeyword: 'commercial dishwasher detergent and rinse aid',
    summary: 'How the detergent and rinse aid in a commercial dishwasher share the work, and how to fix spotting, streaking and stained crockery.',
    date: '2026-10-15',
    readTime: 6,
    intro: [
      'A commercial dishwasher in a hotel, restaurant, canteen or hospital kitchen depends on two chemicals: a detergent in the wash tank and a rinse aid in the final rinse. Each does a different job, and most dishwashing complaints, from greasy cutlery to spotted glasses, come from one of them being wrong, under-dosed or not dosed at all.',
      'The detergent removes food soil. The rinse aid helps water sheet off the ware so it dries quickly without spots or streaks. Water hardness, temperature and the dosing equipment determine how well both work.',
      'This guide explains how the pair works, using Blaze Auto and Blaze Rinse as the example, and covers troubleshooting, manual dishwashing and destaining. It is written for chefs, stewarding managers and kitchen supervisors.',
    ],
    sections: [
      {
        heading: 'What the detergent does',
        paragraphs: [
          'A machine dishwashing detergent must be low-foaming, because the wash pump recirculates solution at high pressure and foam reduces spray force. Blaze Auto is a low-foaming detergent engineered for automatic dishwashers. Its label dilution is 3 to 5 ml in 1 litre of water. It is not recommended on soft metals such as aluminium, so keep aluminium trays and pans for manual washing.',
        ],
        products: ['dishwasher-detergent-blaze-auto'],
      },
      {
        heading: 'What the rinse aid does',
        paragraphs: [
          'After the wash, the final rinse removes detergent and loosened soil. Without a rinse aid, water forms droplets that dry into spots, particularly in hard water. A rinse aid lowers surface tension so the water sheets off and the ware dries faster. Blaze Rinse is designed to be used with Blaze Auto; it also helps neutralise mineral deposits and remove residue. Its label dilution is 0.2 to 0.5 ml in 1 litre of water at a temperature of 80 to 90 °C.',
        ],
        products: ['dishwasher-rinse-aid-blaze-rinse'],
      },
      {
        heading: 'Water hardness and temperature',
        bullets: [
          'Hard water uses up detergent and leaves scale on ware and inside the machine. Check your water hardness and adjust dosing within the label range.',
          'Scale on heating elements and spray arms reduces wash performance; descale the machine on a schedule your technical adviser recommends.',
          'Keep wash and rinse temperatures at the machine manufacturer’s settings. A rinse that is too cool leaves ware wet and spotted.',
          'Pre-scrape plates so the wash tank is not overloaded with food soil, and change the tank water as the machine manual specifies.',
        ],
      },
      {
        heading: 'Dosing pumps and set-up',
        paragraphs: [
          'Hand-pouring detergent into a dishwasher is inconsistent: some cycles are under-dosed and some waste product. Peristaltic dosing pumps feed detergent into the wash tank and rinse aid into the rinse line automatically. Once set, they deliver the same concentration every cycle.',
        ],
        steps: [
          'Confirm the machine type, tank volume and rinse volume per cycle.',
          'Set the detergent pump to deliver within the label range for your water.',
          'Set the rinse aid pump to deliver within its label range.',
          'Run test racks and check results on glasses and cutlery.',
          'Mark the drum change point and check pump tubes and injection points weekly.',
        ],
      },
      {
        heading: 'Troubleshooting spotting, streaking and residue',
        bullets: [
          'Water spots on glasses: rinse aid empty or under-dosed, rinse too cool, or very hard water.',
          'Streaks or a sticky film: rinse aid over-dosed; reduce within the label range.',
          'Greasy ware: detergent under-dosed, tank water dirty, or wash temperature low.',
          'Food residue left on: blocked spray arms, overloaded racks or poor pre-scraping.',
          'White scale on ware and machine: hard water; review dosing and descale the machine.',
          'Foam in the machine: hand dishwashing liquid has been added to the tank; drain and refill.',
        ],
      },
      {
        heading: 'Manual dishwashing and destaining crockery',
        paragraphs: [
          'Pots, pans, aluminium ware and items too large for the machine are washed by hand with a manual dishwashing liquid such as Blaze Dish, followed by a clean water rinse. Tea and coffee stains, hard-water marks and burnt residues on cups and crockery build up over time and are not always removed in a normal wash. A chlorine-based destainer such as Blaze Dip is used by pre-soaking or through a dosing pump; its label dilution is 4% to 10% (40 ml to 100 ml in 1 litre of water) depending on soil. Rinse thoroughly after destaining and never mix chlorine products with acids.',
        ],
        products: ['dishwashing-liquid-blaze-dish', 'crockery-destainer-blaze-dip'],
      },
    ],
    faqs: [
      { q: 'Can I use dishwashing liquid in a commercial dishwasher?', a: 'No. Manual dishwashing liquids foam heavily, which reduces spray pressure and can overflow the machine. Use a low-foaming machine detergent such as Blaze Auto.' },
      { q: 'Do I need a rinse aid if my glasses look clean?', a: 'A rinse aid helps ware dry faster and without spots, especially in hard water. Without it, drying takes longer and spotting is more likely.' },
      { q: 'Why are my glasses streaky?', a: 'Streaks often mean too much rinse aid. Reduce the dose within the label range and check again.' },
      { q: 'Can Blaze Auto be used on aluminium?', a: 'It is not recommended on soft metals such as aluminium. Wash aluminium items by hand.' },
      { q: 'How often should crockery be destained?', a: 'It depends on water hardness and use. Many kitchens destain cups and crockery on a regular schedule when stains appear; our team can help set a routine.' },
    ],
    related: [
      { path: '/solutions/commercial-kitchen-hygiene/', label: 'Commercial kitchen hygiene', eyebrow: 'Solution' },
      { path: '/industries/hospitality/', label: 'Hospitality and food service', eyebrow: 'Industry' },
      { path: '/products/commercial-kitchen-cleaning-chemicals/', label: 'Commercial kitchen cleaning chemicals', eyebrow: 'Products' },
    ],
  },

  // 4 ─────────────────────────────────────────────────────────────────────────
  {
    kind: 'article',
    slug: 'low-foam-floor-cleaner-scrubber-dryer',
    name: 'Low-foam cleaner for scrubber dryers',
    title: 'Low-Foam Cleaner for Scrubber Dryer Machines | Evochem',
    description: 'Choosing a low-foam cleaner for scrubber dryer machines: why foam harms vacuum motors, degreasing vs neutral options, and disciplined dilution for floor care.',
    h1: 'Low-foam cleaner for scrubber dryer machines: how to choose the right floor chemical',
    tagline: 'The right floor chemical protects the machine as well as the floor.',
    banner: 'assets/image/close-up-floor-wiper-mop-cleaning-industrial-plant-scaled.webp',
    bannerAlt: 'Floor cleaning in an industrial plant',
    primaryKeyword: 'low-foam cleaner for scrubber dryer',
    summary: 'Why scrubber-dryers need low-foam chemicals, and how to choose between degreasing and neutral floor cleaners.',
    date: '2026-10-15',
    readTime: 5,
    intro: [
      'Scrubber-dryers clean large floor areas quickly in warehouses, factories, malls, hospitals and airports. They apply solution, scrub with brushes or pads, and vacuum the dirty water back into a recovery tank in one pass. The chemical you put in the solution tank affects not only how clean the floor gets but how long the machine lasts.',
      'The most common mistake is using a high-foaming detergent, often a general-purpose cleaner meant for mopping. Foam builds up in the recovery tank and causes problems that range from poor pick-up to a damaged vacuum motor.',
      'This guide explains why foam matters, how to choose between degreasing and neutral chemistry, and why dilution discipline is the single biggest factor in results and cost. It is written for facility managers, housekeeping heads and plant maintenance teams who run or specify scrubber-dryers.',
    ],
    sections: [
      {
        heading: 'Why foam damages scrubber-dryers',
        paragraphs: [
          'The vacuum system pulls air and dirty water from the squeegee into the recovery tank. Water drops out; air passes through a float shut-off and filter to the vacuum motor. Foam does not separate like water. It fills the tank, trips the float early so the machine stops picking up, or is drawn past the filter into the motor, where moisture causes failure.',
          'Foam can also come from the floor itself. Residue from a previous high-foam product, spilt drinks or soap, or carpet shampoo tracked onto hard floors can all raise foam in the recovery tank, even when the right chemical is in the solution tank. If foam appears on one floor and not another, look at what was used there before.',
        ],
        bullets: [
          'Recovery tank fills with foam long before it is full of water.',
          'Float shut-off triggers, so water is left on the floor and creates a slip hazard.',
          'Foam and moisture carried into the vacuum motor shorten its life.',
          'Residue left on the floor attracts dirt and makes it dull and slippery.',
        ],
      },
      {
        heading: 'Low-foam floor chemistry options',
        paragraphs: [
          'Choose a cleaner that is described as low-foam or suitable for machine use. Novel OGR is a low-foam oil and grease remover with rapid, high-emulsifying action for restaurants, workshops and factories. EVO 7 is a neutral floor cleaner suitable for both manual and machine-based cleaning and for daily maintenance. Both have a label dilution of 2% to 5% (20 ml to 50 ml in 1 litre of water) depending on soil.',
        ],
        products: ['oil-grease-remover-novel-ogr', 'neutral-floor-cleaner-evo-7'],
      },
      {
        heading: 'Degreasing vs neutral cleaners',
        bullets: [
          'Degreasing cleaners: for oily, greasy floors in kitchens, food plants, workshops, loading bays and production areas. Novel OGR fits here.',
          'Neutral cleaners: for daily maintenance of polished, coated or sensitive floors in offices, retail, hospitals and corridors, where residue and marks must be avoided. EVO 7 fits here.',
          'Heavy-duty cleaners: for periodic deep cleaning of heavily soiled industrial floors with tar, carbon and heavy grease. Novel HD is a heavy-duty floor cleaner; check with our technical team about foam level and machine suitability before using it in a scrubber-dryer.',
        ],
        products: ['heavy-duty-floor-cleaner-novel-hd'],
      },
      {
        heading: 'Dilution discipline',
        paragraphs: [
          'More chemical does not mean a cleaner floor. Over-strength solution leaves residue that the squeegee cannot fully remove, which makes floors sticky, dull and slippery, and it raises foam. Under-strength solution leaves soil behind. The answer is to measure every fill.',
        ],
        steps: [
          'Know the solution tank volume of each machine and mark it on the machine.',
          'Calculate the chemical quantity for the label dilution and the soil level of that area.',
          'Measure the chemical with a jug, pump or dispenser, never by eye.',
          'Add water first, then chemical, to reduce foam during filling.',
          'Record the fill on a simple log so supervisors can check consumption.',
        ],
      },
      {
        heading: 'Daily care for the machine',
        bullets: [
          'Empty and rinse the recovery tank after every use and leave it open to dry.',
          'Clean the float shut-off and vacuum filter regularly.',
          'Rinse brushes, pads and squeegee blades, and replace worn blades.',
          'If foam appears, a defoamer may help in the short term, but find and remove the cause, usually the wrong product or over-dosing.',
        ],
      },
    ],
    faqs: [
      { q: 'Can I use my mopping detergent in a scrubber-dryer?', a: 'Only if it is low-foaming and suitable for machine use. High-foam detergents fill the recovery tank with foam and can damage the vacuum motor.' },
      { q: 'Which Evochem floor cleaner is low-foam?', a: 'Novel OGR is a low-foam oil and grease remover. EVO 7 is a neutral floor cleaner suitable for manual and machine cleaning.' },
      { q: 'Why is my floor sticky after machine cleaning?', a: 'Usually the solution is too strong and leaves residue. Measure the chemical for each fill within the label dilution.' },
      { q: 'Should I use hot water in the solution tank?', a: 'Follow the machine manufacturer’s guidance. Many machines are designed for cold or warm water only.' },
      { q: 'What should I do if the recovery tank is full of foam?', a: 'Stop the machine, empty and rinse the recovery tank, and check the float and filter for moisture. Then check the product and the dilution before restarting.' },
      { q: 'Can one product work across all floors?', a: 'A neutral cleaner suits most daily maintenance, but greasy production and kitchen floors need a degreasing product. Our technical team can help match products to areas.' },
    ],
    related: [
      { path: '/solutions/floor-care-chemicals/', label: 'Floor care chemicals', eyebrow: 'Solution' },
      { path: '/industries/manufacturing-warehousing/', label: 'Manufacturing and warehousing', eyebrow: 'Industry' },
      { path: '/products/industrial-cleaning-degreasing-chemicals/', label: 'Industrial cleaning and degreasing chemicals', eyebrow: 'Products' },
    ],
  },

  // 5 ─────────────────────────────────────────────────────────────────────────
  {
    kind: 'article',
    slug: 'reduce-housekeeping-chemical-consumption',
    name: 'Reduce housekeeping chemical consumption',
    title: 'How to Reduce Housekeeping Chemical Consumption | Evochem',
    description: 'How to reduce housekeeping chemical consumption and cost per use with concentrates, measured dilution, dosing equipment, colour-coding and staff training.',
    h1: 'How to reduce housekeeping chemical consumption and cost per use',
    tagline: 'Control the dilution and the consumption controls itself.',
    banner: 'assets/image/CommercialBuildings.jpg',
    bannerAlt: 'Commercial building interior maintained by housekeeping teams',
    primaryKeyword: 'how to reduce housekeeping chemical consumption',
    summary: 'Practical ways to cut housekeeping chemical use and cost per use without lowering cleaning standards.',
    date: '2026-10-15',
    readTime: 6,
    intro: [
      'Housekeeping chemical budgets in hotels, hospitals, offices and facility management contracts often rise without any change in the area being cleaned. The cause is rarely the price of the product. It is usually how much product is used each time, and whether the right product is used for the task.',
      'The useful measure is cost per use: the cost of the solution that actually goes onto a floor, bathroom or glass surface, not the price per litre of concentrate. A concentrate that looks expensive per litre can be economical per use when it is diluted correctly, and a cheap product can be costly when staff pour it freely.',
      'This guide covers the practical controls that bring consumption down and keep cleaning results consistent.',
    ],
    sections: [
      {
        heading: 'Start with concentrates and cost per use',
        paragraphs: [
          'Concentrated products are diluted with water at the point of use, so you buy, store and transport less. Most Evochem housekeeping products carry a label dilution; for example EVO 2 hard surface cleaner and EVO 7 neutral floor cleaner are both 2% to 5% (20 ml to 50 ml in 1 litre of water) depending on soil, and EVO 3 glass cleaner concentrate is 2% to 10% (20 ml to 100 ml in 1 litre of water). To compare products fairly, work out the cost of one litre of ready-to-use solution at the dilution you actually need.',
        ],
        products: ['hard-surface-cleaner-evo-2', 'neutral-floor-cleaner-evo-7', 'glass-cleaner-concentrate-evo-3'],
      },
      {
        heading: 'Measure every dilution',
        paragraphs: [
          'Free pouring, “a splash in the bucket”, is the main cause of waste. It also tends to over-strength solutions, which leave residue on floors and glass and then need extra rinsing. Cleaning chemical dilution control simply means the same measured quantity goes into the same volume of water every time.',
        ],
        steps: [
          'Fix the bucket, trigger bottle and machine tank sizes used in each area.',
          'Calculate the chemical quantity for each container at the label dilution.',
          'Provide measuring jugs, pump tops or a dispenser so staff do not estimate.',
          'Label each refilled bottle with the product name and dilution.',
          'Display a simple dilution chart in the janitor room.',
        ],
      },
      {
        heading: 'Use dosing equipment where volume justifies it',
        bullets: [
          'Wall-mounted dilution dispensers fill buckets and bottles at a fixed ratio from the concentrate drum.',
          'Pump tops on 5 L cans deliver a set volume per stroke.',
          'Dosing pumps on dishwashers and laundry machines remove guesswork completely.',
          'Bulk packs of 20 L, 50 L or 200 L reduce packaging and the cost of frequent small purchases when paired with a controlled dispensing point.',
        ],
      },
      {
        heading: 'Colour-coding and the right product for each task',
        paragraphs: [
          'Using one strong product everywhere wastes chemical and can damage surfaces. A descaler is not needed for daily glass cleaning, and a degreaser is not needed on a carpeted office corridor. Match each product to the task and colour-code cloths, mops and buckets by area so products and tools are not mixed between washrooms, kitchens and general areas.',
        ],
        bullets: [
          'Daily washroom cleaning: a bathroom cleaner such as EVO 1; keep a heavy-duty descaler such as EVO 9 for periodic deep cleaning.',
          'Floors: a neutral floor cleaner for daily maintenance; a degreaser only where grease is present.',
          'Glass and mirrors: a glass cleaner concentrate at the lower end of its dilution for light soil.',
        ],
        products: ['bathroom-cleaner-evo-1', 'heavy-duty-descaler-evo-9'],
      },
      {
        heading: 'Avoid over-strength use',
        paragraphs: [
          'Staff often believe a stronger mix cleans better. In practice, excess detergent leaves a film that attracts dirt, dulls floors, makes them slippery and creates streaks on glass, so the area needs cleaning again sooner. Use the lower end of the label range for routine soil and the upper end only for heavy soil.',
          'Over-strength use also shortens the life of mops, pads and machine parts, and some residues need an extra rinse to remove, which costs labour and water as well as chemical. Supervisors should treat a strong chemical smell in a corridor or washroom as a sign that dilution needs checking.',
        ],
      },
      {
        heading: 'Train, monitor and review',
        steps: [
          'Train every new staff member on dilution, the product for each task and safe handling; refresh training regularly.',
          'Issue concentrate from one controlled point and record what goes out to each floor or site.',
          'Compare consumption against the area cleaned each month and look into sudden changes.',
          'Check results on the floor, not only the stock sheet: under-dilution shows up as poor cleaning.',
          'Ask our team for on-site dilution guidance and training when you change products or staff.',
        ],
      },
    ],
    faqs: [
      { q: 'Is a cheaper chemical always more economical?', a: 'Not necessarily. Compare cost per litre of diluted solution and the results achieved; a well-diluted concentrate can cost less per use than a cheaper ready-to-use product.' },
      { q: 'What is cleaning chemical dilution control?', a: 'It means mixing the same measured quantity of concentrate into the same volume of water every time, using jugs, pump tops or dispensers instead of free pouring.' },
      { q: 'Does a stronger solution clean better?', a: 'No. Over-strength solutions leave residue that attracts dirt and can make floors slippery. Use the label dilution for the soil level.' },
      { q: 'Do bulk packs reduce cost?', a: 'Larger packs reduce packaging and the number of small purchases, but only help if the concentrate is issued from a controlled point and measured at the point of use.' },
      { q: 'Can Evochem help set up dilution charts?', a: 'Yes. We provide technical support, dilution guidance and training for housekeeping teams.' },
    ],
    related: [
      { path: '/products/institutional-housekeeping-chemicals/', label: 'Institutional housekeeping chemicals', eyebrow: 'Products' },
      { path: '/industries/facility-management/', label: 'Facility management', eyebrow: 'Industry' },
      { path: '/solutions/washroom-cleaning-chemicals/', label: 'Washroom cleaning chemicals', eyebrow: 'Solution' },
    ],
  },

  // 6 ─────────────────────────────────────────────────────────────────────────
  {
    kind: 'article',
    slug: 'commercial-laundry-wash-process',
    name: 'Commercial laundry wash process',
    title: 'Commercial Laundry Wash Process: Step by Step | Evochem',
    description: 'The commercial laundry wash process step by step: pre-wash, main wash, builder, destaining, rinses, sour and softener, with dosing per kg of dry linen.',
    h1: 'The commercial laundry wash process, step by step',
    tagline: 'Each stage has one job. Get them in the right order.',
    banner: 'assets/image/CommercialLaundries.jpg',
    bannerAlt: 'Industrial washing machines in a commercial laundry',
    primaryKeyword: 'commercial laundry wash process',
    summary: 'Each stage of a commercial laundry wash, what chemical it uses and why linen turns yellow or grey when a stage goes wrong.',
    date: '2026-10-15',
    readTime: 6,
    intro: [
      'Hotel, hospital and commercial laundries wash large volumes of linen with heavy and varied soils: body oils, food, cosmetics, blood and kitchen grease. A good commercial laundry wash process breaks that job into stages, each with its own chemical, so that soil is removed, stains are treated, and linen comes out neutral, soft and ready to iron.',
      'Dosing is always calculated per kg of dry linen, so the first habit to build is weighing loads and not overloading machines. Overloading reduces mechanical action and wastes chemical.',
      'This guide walks through each stage in order, with the Evochem product and label dosing for each, and ends with the most common causes of yellow and grey linen. It is written for laundry managers, housekeeping heads and procurement teams.',
    ],
    sections: [
      {
        heading: 'The wash sequence',
        steps: [
          'Sort linen by colour, fabric and soil level; keep whites separate from coloureds.',
          'Weigh the load and load to the machine’s rated dry capacity.',
          'Pre-wash to loosen and emulsify oils and heavy soil, then drain.',
          'Main wash with detergent, and builder for heavy or greasy soil.',
          'Chlorine destaining for white cotton linen only, where stains remain.',
          'Rinse two or more times to remove detergent, alkali and loosened soil.',
          'Final rinse with a sour to neutralise residual alkali and chlorine, and softener if required.',
          'Extract, dry and finish.',
        ],
      },
      {
        heading: 'Pre-wash',
        paragraphs: [
          'A pre-wash removes the bulk of oil, fat and grease before the main wash, so the main wash chemicals are not used up on loose soil. Flox Pre-Wash Detergent is a surfactant blend that emulsifies and lifts oils, fat and grease. Label dosing is 2 to 4 ml per kg of dry linen. It can also be used alongside other detergents for heavier soil.',
        ],
        products: ['pre-wash-laundry-detergent-flox'],
      },
      {
        heading: 'Main wash and builder',
        paragraphs: [
          'The main wash does most of the cleaning. Flox Star is a concentrated synthetic detergent with anti-redeposition agents that hold soil in the water so it does not settle back onto fabric; label dosing is 5 to 15 ml per kg of dry linen. For heavily greasy linen such as kitchen cloths and chef whites, Flox Build is an alkaline builder that raises the pH of the wash water to loosen fatty stains, at 5 to 15 ml per kg of dry linen. Laundries that prefer powder can use Star Powder at 5 to 15 g per kg of dry linen.',
        ],
        products: ['main-wash-laundry-detergent-flox-star', 'heavy-duty-liquid-laundry-detergent-flox-build'],
      },
      {
        heading: 'Chlorine destaining: whites only',
        paragraphs: [
          'Chlorine destainer removes stains that detergent leaves behind on white linen. Flox Laundry Chlorine Destainer is designed for industrial laundry machines and is dosed at 3 to 15 ml per kg of dry linen. Use it only on white cotton and fabrics the manufacturer allows chlorine on; it will damage colours and can weaken some synthetics. Do not add it at the same time as the sour, and rinse well before the final rinse.',
        ],
        products: ['laundry-chlorine-destainer-flox'],
      },
      {
        heading: 'Rinses, sour and softener',
        paragraphs: [
          'After the wash and destaining, linen still holds alkali and chlorine residue. Thorough rinsing removes most of it; a sour in the final rinse neutralises the rest. Flox Sour is a liquid neutraliser at 5 to 15 ml per kg of dry linen, and Flox Rinse is a mildly acidic powder at 5 to 15 g per kg of dry linen. A softener such as Flox Soft Care, at 2 ml per kg of dry linen, softens fabric, reduces static and makes ironing easier. Towels that must stay absorbent may need little or no softener.',
        ],
        products: ['laundry-sour-neutralizer-flox-sour', 'fabric-softener-flox-soft-care'],
      },
      {
        heading: 'Why linen turns yellow or grey',
        bullets: [
          'Yellowing: residual alkali or chlorine left in the fabric, often because the sour stage was skipped or under-dosed, or rinsing was short. Body oils not fully removed can also yellow over time, especially after hot drying or ironing.',
          'Greying: soil redepositing onto fabric because of under-dosed detergent, overloaded machines, hard water, or too little rinsing.',
          'Mixed loads: coloured items washed with whites can transfer dye and dull the whole load.',
          'Harsh feel: too much alkali left in the fabric, or no softener where it is needed.',
          'If problems persist, review water hardness, temperatures and the dosing system with our technical team.',
        ],
      },
    ],
    faqs: [
      { q: 'Why is laundry dosing given per kg of dry linen?', a: 'Chemical demand depends on the weight of fabric and soil, not on the water volume alone. Weighing loads and dosing per kg of dry linen gives consistent results.' },
      { q: 'Can I use chlorine destainer on coloured linen?', a: 'No. Chlorine destainer is for white linen only. It will fade or damage coloured fabrics.' },
      { q: 'Do I need a sour if I rinse well?', a: 'A sour neutralises alkali and chlorine residue that rinsing alone may leave. Skipping it is a common cause of yellowing and harsh-feeling linen.' },
      { q: 'Should I use a builder on every load?', a: 'No. Use a builder such as Flox Build for heavily greasy or oily linen; lightly soiled loads usually only need the main wash detergent.' },
      { q: 'Can dosing pumps be used in laundry machines?', a: 'Yes. Automatic dosing pumps deliver each chemical at the right stage and help control consumption. Our team can advise on set-up.' },
    ],
    related: [
      { path: '/solutions/laundry-hygiene/', label: 'Laundry hygiene', eyebrow: 'Solution' },
      { path: '/industries/commercial-laundry/', label: 'Commercial laundry', eyebrow: 'Industry' },
      { path: '/products/commercial-laundry-chemicals/', label: 'Commercial laundry chemicals', eyebrow: 'Products' },
    ],
  },

  // 7 ─────────────────────────────────────────────────────────────────────────
  {
    kind: 'article',
    slug: 'food-contact-surface-sanitizers-guide',
    name: 'Food-contact surface sanitisers',
    title: 'Food Contact Surface Sanitiser: Types Compared | Evochem',
    description: 'Food contact surface sanitiser types compared: quat, peracetic acid, chlorine and alcohol, used after cleaning, with label rinse rules and safe storage.',
    h1: 'Food contact surface sanitiser types compared: quat, peracetic acid, chlorine and alcohol',
    tagline: 'Sanitising works only on a surface that is already clean.',
    banner: 'assets/image/Important-hygiene-steps-for-food-service-business.jpg',
    bannerAlt: 'Food service staff sanitising a preparation surface',
    primaryKeyword: 'food contact surface sanitiser',
    summary: 'A plain comparison of quat, peracetic acid, chlorine and alcohol sanitisers for food-contact surfaces, and how to use them safely.',
    date: '2026-10-15',
    readTime: 6,
    intro: [
      'A food contact surface sanitiser reduces microorganisms on surfaces such as cutting boards, conveyors, tables, utensils and processing equipment. It is the final step of a hygiene routine, not a substitute for cleaning. Food residue, fat and protein shield microorganisms and use up the active ingredient, so a sanitiser applied to a dirty surface cannot do its job.',
      'Food plants, commercial kitchens and dairies generally choose from four sanitiser families: quaternary ammonium compounds (quat), peracetic acid, chlorine and alcohol. Each has strengths and limits that make it a better fit for some tasks than others.',
      'This guide compares them in general terms and explains how to use them safely. Always follow the product label for dilution, contact time and rinse requirements, and record sanitising in your hygiene log so it can be checked.',
    ],
    sections: [
      {
        heading: 'Clean first, then sanitise',
        steps: [
          'Remove loose food and debris.',
          'Pre-rinse with water.',
          'Clean with a detergent suited to the soil and scrub where needed.',
          'Rinse off the detergent and loosened soil.',
          'Apply the sanitiser at the label dilution and leave it for the time stated on the label.',
          'Rinse with potable water if the label requires it, then allow to air dry.',
        ],
      },
      {
        heading: 'Quat (quaternary ammonium) sanitisers',
        paragraphs: [
          'Quat sanitisers are stable, have little odour and are not corrosive to most surfaces at use dilution, which makes them popular for general food-contact surfaces, utensils and equipment exteriors. They can leave a residual film, so check the label for whether a rinse is required. Quats can be affected by hard water and by some detergent residues, which is another reason to rinse well after cleaning. Sanix Quat is a quat sanitiser for pre-cleaned surfaces with a label dilution of 0.1% to 0.5% (1 ml to 5 ml in 1 litre of water). Sanix Duo combines quat with surfactants and sequestering agents as a cleaner cum sanitiser.',
        ],
        products: ['quat-sanitizer-sanix-quat', 'cleaner-sanitizer-sanix-duo'],
      },
      {
        heading: 'Peracetic acid sanitisers',
        paragraphs: [
          'Peracetic acid is an oxidising sanitiser that breaks down to acetic acid, oxygen and water, so it leaves little residue and does not foam, which suits CIP circuits as well as open surfaces. It works in cold water and is widely used in dairy, beverage and meat processing. The concentrate has a strong vinegar-like odour, is corrosive and must be handled with care and good ventilation. It can attack soft metals and some rubbers. Sanix Peraxy is formulated with peracetic acid, hydrogen peroxide and acetic acid for pre-cleaned surfaces, with a label dilution of 0.1% to 3% v/v depending on the volume.',
        ],
        products: ['peracetic-acid-sanitizer-sanix-peraxy'],
      },
      {
        heading: 'Chlorine sanitisers',
        paragraphs: [
          'Chlorine is inexpensive, acts quickly and is used for surfaces, equipment and washing vegetables. Its activity drops in the presence of organic soil and as the solution ages, so prepare fresh solution and replace it when it becomes dirty. Chlorine can corrode metals over time and bleach fabrics. Tablets make dosing simple: Blaze Tab is a chlorine tablet for food-contact surfaces, equipment and vegetables, at 1 tablet in 5 litres of water for general sanitisation and 1 tablet in 20 litres of water for vegetable sanitisation.',
        ],
        products: ['chlorine-tablets-blaze-tab'],
      },
      {
        heading: 'Alcohol-based sanitisers',
        paragraphs: [
          'Alcohol sanitisers are ready to use and evaporate quickly, which suits small surfaces, equipment that should not be wetted, slicers, probes and touch points between production runs. They are flammable, so keep them away from heat and open flames and store them in a cool, ventilated area. They are less suited to large areas or heavily wetted surfaces. Sanixol combines alcohol with quaternary ammonium compound and is described as residue-free and not requiring a rinse.',
        ],
        products: ['alcohol-surface-sanitizer-sanixol'],
      },
      {
        heading: 'Storage and safety',
        bullets: [
          'Never mix sanitisers with each other or with acids or other cleaners; chlorine and acid together release toxic gas.',
          'Store concentrates in original labelled containers, away from food, heat and direct sunlight.',
          'Keep oxidisers such as peracetic acid and chlorine apart from flammables and from each other.',
          'Wear the gloves and eye protection specified in the MSDS when handling concentrates.',
          'Prepare use solutions with measured doses and label any secondary containers.',
          'Rotate sanitiser types only as your hygiene plan directs, and ask our technical team if unsure.',
        ],
      },
    ],
    faqs: [
      { q: 'Can a sanitiser be used instead of a detergent?', a: 'No. Sanitisers are designed for surfaces that have already been cleaned. Soil left on the surface reduces their effect.' },
      { q: 'Do I need to rinse after sanitising?', a: 'It depends on the product. Check the label: some sanitisers need a potable water rinse on food-contact surfaces and some, such as Sanixol, are described as not requiring one.' },
      { q: 'Which sanitiser is best for CIP?', a: 'Non-foaming sanitisers such as peracetic acid are commonly used in CIP. Ask our technical team to confirm the right product and dilution for your system.' },
      { q: 'How often should chlorine solution be replaced?', a: 'Make it fresh for each shift or task and replace it whenever it looks dirty, because chlorine loses activity in the presence of soil.' },
      { q: 'Is it safe to store all sanitisers together?', a: 'No. Keep chlorine and peracetic acid products apart, keep alcohol away from heat and oxidisers, and follow each product’s MSDS.' },
    ],
    related: [
      { path: '/solutions/sanitization-chemicals/', label: 'Sanitisation chemicals', eyebrow: 'Solution' },
      { path: '/industries/food-processing/', label: 'Food processing hygiene', eyebrow: 'Industry' },
      { path: '/products/food-processing-hygiene-chemicals/', label: 'Food processing hygiene chemicals', eyebrow: 'Products' },
    ],
  },
];
