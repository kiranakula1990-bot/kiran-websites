import { ContentPage } from './content-model';

// Resource articles. Product facts and dilutions come from public/assets/data/evochem-data.json.
// Rules: no certification claims, no kill claims or contact times, no invented figures, cleaning Ã¢â€°Â  sanitising.

export const ARTICLES: ContentPage[] = [
  // 1 Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
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
          'OPC: high-foaming alkaline detergents for fat and protein, high-foaming acidic detergents for scale and inorganic soil, and chlorinated alkaline foam where the plantÃ¢â‚¬â„¢s hygiene plan calls for it.',
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
      { path: '/resources/foaming-vs-non-foaming-alkaline-detergents/', label: 'Foaming vs low-foaming alkaline detergents', eyebrow: 'Related guide' },
    ],
  },

  // 2 Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
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
      'Most cleaning problems in food plants come from a mismatch between the soil and the chemistry. A detergent that removes fat easily may do almost nothing to mineral scale, and an acid that dissolves scale will leave a greasy film behind. The first question is never Ã¢â‚¬Å“which product is strongestÃ¢â‚¬Â but Ã¢â‚¬Å“what is the soil made ofÃ¢â‚¬Â.',
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
      { path: '/resources/foaming-vs-non-foaming-alkaline-detergents/', label: 'Foaming vs low-foaming alkaline detergents', eyebrow: 'Related guide' },
    ],
  },

  // 3 Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
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
          'After the wash, the final rinse removes detergent and loosened soil. Without a rinse aid, water forms droplets that dry into spots, particularly in hard water. A rinse aid lowers surface tension so the water sheets off and the ware dries faster. Blaze Rinse is designed to be used with Blaze Auto; it also helps neutralise mineral deposits and remove residue. Its label dilution is 0.2 to 0.5 ml in 1 litre of water at a temperature of 80 to 90 Ã‚Â°C.',
        ],
        products: ['dishwasher-rinse-aid-blaze-rinse'],
      },
      {
        heading: 'Water hardness and temperature',
        bullets: [
          'Hard water uses up detergent and leaves scale on ware and inside the machine. Check your water hardness and adjust dosing within the label range.',
          'Scale on heating elements and spray arms reduces wash performance; descale the machine on a schedule your technical adviser recommends.',
          'Keep wash and rinse temperatures at the machine manufacturerÃ¢â‚¬â„¢s settings. A rinse that is too cool leaves ware wet and spotted.',
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

  // 4 Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
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
      { q: 'Should I use hot water in the solution tank?', a: 'Follow the machine manufacturerÃ¢â‚¬â„¢s guidance. Many machines are designed for cold or warm water only.' },
      { q: 'What should I do if the recovery tank is full of foam?', a: 'Stop the machine, empty and rinse the recovery tank, and check the float and filter for moisture. Then check the product and the dilution before restarting.' },
      { q: 'Can one product work across all floors?', a: 'A neutral cleaner suits most daily maintenance, but greasy production and kitchen floors need a degreasing product. Our technical team can help match products to areas.' },
    ],
    related: [
      { path: '/solutions/floor-care-chemicals/', label: 'Floor care chemicals', eyebrow: 'Solution' },
      { path: '/industries/manufacturing-warehousing/', label: 'Manufacturing and warehousing', eyebrow: 'Industry' },
      { path: '/products/industrial-cleaning-degreasing-chemicals/', label: 'Industrial cleaning and degreasing chemicals', eyebrow: 'Products' },
    ],
  },

  // 5 Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
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
          'Free pouring, Ã¢â‚¬Å“a splash in the bucketÃ¢â‚¬Â, is the main cause of waste. It also tends to over-strength solutions, which leave residue on floors and glass and then need extra rinsing. Cleaning chemical dilution control simply means the same measured quantity goes into the same volume of water every time.',
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

  // 6 Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
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
          'Weigh the load and load to the machineÃ¢â‚¬â„¢s rated dry capacity.',
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

  // 7 Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
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
      { q: 'Is it safe to store all sanitisers together?', a: 'No. Keep chlorine and peracetic acid products apart, keep alcohol away from heat and oxidisers, and follow each productÃ¢â‚¬â„¢s MSDS.' },
    ],
    related: [
      { path: '/solutions/sanitization-chemicals/', label: 'Sanitisation chemicals', eyebrow: 'Solution' },
      { path: '/industries/food-processing/', label: 'Food processing hygiene', eyebrow: 'Industry' },
      { path: '/products/food-processing-hygiene-chemicals/', label: 'Food processing hygiene chemicals', eyebrow: 'Products' },
      { path: '/resources/foaming-vs-non-foaming-alkaline-detergents/', label: 'Foaming vs low-foaming alkaline detergents', eyebrow: 'Related guide' },
    ],
  },
  {
    kind: 'article',
    slug: 'foaming-vs-non-foaming-alkaline-detergents',
    date: '2026-11-12',
    name: 'Foaming vs low-foaming detergents',
    title: 'Foaming vs Non-Foaming Alkaline Detergents for Food Plants | Evochem',
    description: 'When to use foaming or low-foaming alkaline detergent in food processing: equipment, contact time, rinsing and cost drivers. Evochem. Request a sample.',
    h1: 'Foaming vs Non-Foaming Alkaline Detergents: Which One Does Your Food Plant Need?',
    tagline: 'Choose foam for open surfaces and low foam for closed cleaning systems.',
    banner: 'assets/image/foaming-vs-non-foaming-alkaline-detergents-food-plant.jpeg',
    bannerAlt: 'Stainless steel food processing equipment showing foaming and low-foaming cleaning',
    primaryKeyword: 'foaming vs non-foaming alkaline detergent',
    summary: 'A practical guide to choosing foaming or low-foaming alkaline detergent by equipment, cleaning method, rinse needs and soil.',
    readTime: 7,
    intro: [
      'Use a foaming alkaline detergent on open surfaces, where the foam clings to vertical and hard-to-reach areas and shows where the product has been applied. Use a low-foaming alkaline detergent, often called non-foaming, in closed CIP circuits, soak tanks and other pumped systems, where foam causes problems. The right choice depends on your equipment and cleaning method, not only the soil.',
      'This guide compares foam behaviour. To choose between alkaline and acidic chemistry, read our guide to alkaline vs acidic cleaners.'
    ],
    sections: [
      {
        heading: '1. Choose by equipment: a quick decision guide',
        paragraphs: [
          'Start with the way the equipment is cleaned. Open surfaces are usually cleaned with a foam application and manual or low-pressure rinsing. Closed systems circulate detergent through pipes, tanks and equipment, so excess foam can interfere with pumping and return flow.'
        ],
        table: {
          headers: ['Equipment or cleaning task', 'Preferred detergent behaviour', 'Why'],
          rows: [
            ['Conveyors, tables and hoppers', 'Foaming alkaline', 'Clings to accessible open surfaces and makes coverage visible.'],
            ['Walls, floors and machine exteriors', 'Foaming alkaline', 'Useful on vertical and broad open surfaces.'],
            ['CIP pipework and closed tanks', 'Low-foaming alkaline', 'Supports pumping, circulation and return flow.'],
            ['COP tanks and soak baths', 'Low-foaming alkaline', 'Suitable for immersion and recirculating applications.'],
            ['Tray washers and pumped systems', 'Low-foaming alkaline', 'Excess foam can disrupt mechanical operation.']
          ]
        },
        bullets: [
          'Unsure or working with rinse-sensitive equipment? Send our technical team your equipment list and cleaning method before selecting a product.'
        ]
      },
      {
        heading: '2. What makes a detergent foaming or low-foaming?',
        paragraphs: [
          'Foam is produced when surfactants help stabilise air bubbles in a cleaning solution. A high-foaming formulation is designed to create a visible layer that clings to open surfaces. This can help an operator see where the solution has been applied and keep it in contact with vertical surfaces.',
          'A low-foaming formulation is designed to control foam during circulation, pumping or immersion. The term non-foaming is commonly used in searches, but practical industrial products are more accurately described as low-foaming: the goal is controlled foam, not an unsupported promise of zero foam.',
          'Visible foam is an application aid. It does not prove that a surface is clean, that the correct contact time has elapsed or that sanitising has taken place.'
        ]
      },
      {
        heading: '3. When to use a foaming alkaline detergent',
        paragraphs: [
          'Foaming alkaline detergents are generally suited to open plant cleaning (OPC). The foam can cling to accessible vertical surfaces and help operators see the areas covered during cleaning. Typical applications include conveyors, processing tables, hoppers, floors, walls and the outside of machinery.',
          'Alkaline chemistry is commonly selected for food soils such as fats, oils and proteins. The exact product, dilution, application method and rinse procedure must be selected for the soil and surface and followed according to the product label.'
        ],
        products: [
          'alkaline-foam-cleaner-alkalox-foam',
          'high-foaming-alkaline-detergent-clastox-foam',
          'chlorinated-alkaline-foam-cleaner-chlorox-foam'
        ]
      },
      {
        heading: '4. When to use a low-foaming alkaline detergent',
        paragraphs: [
          'Low-foaming alkaline detergents are generally suited to closed or pumped cleaning systems. In CIP circuits, solution is circulated through pipework, tanks and internal equipment surfaces. Excess foam can interfere with pumps, reduce effective circulation and cause problems in return lines or tanks.',
          'Low-foaming products can also be considered for COP tanks, soak baths and tray washers where the equipment relies on immersion, pumping or recirculation. Confirm the product is suitable for the system materials and operating conditions.'
        ],
        products: [
          'low-foam-alkaline-detergent-clastox-plus',
          'alkaline-cip-detergent-clastox-50'
        ]
      },
      {
        heading: '5. Foaming vs low-foaming alkaline detergent: comparison',
        table: {
          headers: ['Factor', 'Foaming alkaline detergent', 'Low-foaming alkaline detergent'],
          rows: [
            ['Typical cleaning method', 'Open plant cleaning (OPC)', 'CIP, COP, soak and pumped systems'],
            ['Application', 'Foam lance or suitable open-surface application', 'Measured solution circulated, pumped or used in a tank'],
            ['Coverage visibility', 'Visible foam helps show application coverage', 'Foam is controlled; coverage is not judged by a foam layer'],
            ['Vertical surfaces', 'Foam can cling to accessible vertical surfaces', 'Not generally selected for visible foam cling'],
            ['Pumps and return lines', 'Usually unsuitable where foam disrupts circulation', 'Designed for controlled foam in circulation'],
            ['Rinsing', 'May require more water and time to clear visible foam', 'Rinse according to the product label and validated cycle']
          ]
        },
        paragraphs: [
          'These are general selection principles, not a substitute for equipment-specific validation. Always check the product label and confirm compatibility with the cleaning system.'
        ]
      },
      {
        heading: '6. Contact time and rinsing: what should operators check?',
        paragraphs: [
          'Contact time depends on the soil, temperature, concentration, surface and product instructions, not on foam alone. On open surfaces, foam can help keep the solution on the soil. In CIP, contact is achieved through the validated combination of flow, temperature and time.',
          'Both foaming and low-foaming detergents need to be rinsed as directed before the next hygiene step. Visible foam may take additional water and time to clear from surfaces and drains. In closed systems, verify the rinse according to the plant procedure and product instructions. Do not assume that clear-looking water alone proves that every residue has been removed.'
        ]
      },
      {
        heading: '7. What affects the cost of cleaning?',
        paragraphs: [
          'Compare cost per use rather than price per litre. The main cost drivers include the dilution required, the amount and type of soil, water consumption, rinse time, labour, equipment efficiency and production downtime.',
          'A product that performs at a suitable use concentration and fits the cleaning system may reduce avoidable rework or rinse time. The right comparison should be based on a plant trial and the actual cleaning procedure. Evochem provides product recommendations and quotations based on the application; prices are not listed in this guide.'
        ]
      },
      {
        heading: '8. Can a food plant use both types?',
        paragraphs: [
          'Yes. Many food plants use foaming alkaline detergent for open surfaces and low-foaming alkaline detergent for closed systems. This is not a choice that has to be made once for the entire facility: match the product to each piece of equipment and its cleaning method.',
          'Do not mix different detergents in one solution. Do not use a foaming product in a CIP circuit unless the equipment and product instructions specifically allow it. Rinse between products and never mix chlorinated products with acids. Follow the safety data sheet, wear the specified protective equipment and use the validated plant procedure.'
        ]
      },
      {
        heading: '9. Evochem alkaline detergent range',
        paragraphs: [
          'The following products illustrate the available foaming and low-foaming options. Confirm the suitability, use concentration and application method against the current product label and your plant conditions.'
        ],
        table: {
          headers: ['Product', 'Type and typical application', 'Label dilution'],
          rows: [
            ['Alkalox Foam', 'High-foaming alkaline detergent for open plant cleaning', '2%â€“5%'],
            ['Clastox Foam', 'High-foaming alkaline detergent for open plant cleaning', '2%â€“5%'],
            ['Chlorox Foam', 'Chlorinated alkaline foam cleaner for open plant cleaning', '1%â€“5%'],
            ['Clastox Plus', 'Low-foaming heavy-duty alkaline detergent for CIP and soak tanks', '0.5%â€“5%'],
            ['Clastox 50', 'High-performance alkaline detergent for CIP and soak tanks', '0.5%â€“5%']
          ]
        },
        products: [
          'alkaline-foam-cleaner-alkalox-foam',
          'high-foaming-alkaline-detergent-clastox-foam',
          'chlorinated-alkaline-foam-cleaner-chlorox-foam',
          'low-foam-alkaline-detergent-clastox-plus',
          'alkaline-cip-detergent-clastox-50'
        ]
      }
    ],
    faqs: [
      { q: 'Do foaming and low-foaming detergents need different contact times?', a: 'Contact time depends on the soil, the temperature, the concentration and the product, not on foam alone. The difference is how the contact is achieved. Foam clings to open surfaces and stays wet, so it can hold the product on the soil. In a CIP circuit, contact comes from flow, temperature and time. Follow the label and your plantâ€™s validated cleaning cycle.' },
      { q: 'Do they need different rinsing?', a: 'Both need a thorough rinse before sanitising, and you should always follow the label. Foam generally takes more rinse water and time to clear from drains and surfaces. Low-foaming products suit circuits and lines where rinse time and water are limited. Check the rinse until no detergent remains.' },
      { q: 'Which is cheaper?', a: 'Compare cost per use, not price per litre. The main drivers are the dilution used, the soil load, the rinse water and time, labour and the downtime of the line. A product that needs a lower dilution or a shorter rinse can cost less to use. We do not quote prices here. Ask our technical team for a quote based on your plant.' },
      { q: 'Which should I use on which equipment?', a: 'Foaming alkaline detergent suits open plant cleaning: conveyors, tables, hoppers, floors, walls and the outside of machines. Low-foaming alkaline detergent suits CIP pipework and tanks, clean-out-of-place (COP) tanks, soak baths and tray washers. Send us your equipment list and we will match products to each item.' },
      { q: 'Can I use both in the same plant, or combine them?', a: 'Yes, most plants use both: foam for open surfaces and low-foam for closed systems. Do not mix different detergents in one solution, and do not use a foaming product inside a CIP circuit. Rinse between products and never mix chlorinated products with acids.' }
    ],
    related: [
      { path: '/resources/alkaline-vs-acidic-cleaners-food-industry/', label: 'Alkaline vs acidic cleaners', eyebrow: 'Related guide' },
      { path: '/resources/cip-vs-opc-cleaning/', label: 'CIP vs OPC cleaning', eyebrow: 'Related guide' },
      { path: '/resources/food-contact-surface-sanitizers-guide/', label: 'Food-contact surface sanitisers', eyebrow: 'Related guide' },
      { path: '/solutions/open-plant-cleaning-chemicals/', label: 'Open plant cleaning chemicals', eyebrow: 'Solution' },
      { path: '/solutions/cip-cleaning-chemicals/', label: 'CIP cleaning chemicals', eyebrow: 'Solution' },
      { path: '/products/food-processing-hygiene-chemicals/', label: 'Food processing hygiene chemicals', eyebrow: 'Products' }
    ],
    note: 'Product selection and dilution must follow the current product label, equipment requirements and your plantâ€™s validated cleaning procedure. Review this guide every six months.'
  },
  {
    kind: 'article',
    slug: 'cleanroom-disinfectant-validation-guide',
    name: 'Cleanroom disinfectant validation',
    title: 'Cleanroom Disinfectant Validation Guide | Pharma & Healthcare | Evochem',
    description: 'What makes a disinfectant cleanroom-validated: standards, contact time, surfaces and the documents QA needs. A guide for pharma and healthcare. Evochem.',
    h1: 'Cleanroom Disinfectant Validation: What Pharma and Healthcare Facilities Need',
    tagline: 'A practical guide to validation evidence, standards, contact time, surface compatibility and audit documentation.',
    banner: 'assets/image/cleanroom-disinfectant-validation-pharma-healthcare.jpg',
    bannerAlt: 'Pharmaceutical cleanroom worker in protective gown beside stainless steel equipment',
    heroImage: 'assets/image/cleanroom-disinfectant-validation-pharma-healthcare.jpg',
    primaryKeyword: 'cleanroom disinfectant validation',
    summary: 'Understand what disinfectant validation should demonstrate, which standards are commonly referenced, and what your QA team should keep ready for an audit.',
    date: '2026-11-13',
    readTime: 8,
    opening: 'A cleanroom-validated disinfectant has documented, tested performance against the organisms, contact time and surfaces of your own cleanroom, not just a general antimicrobial claim. That includes sporicidal data where it is needed. ISO 14644 classifies the air cleanliness of a cleanroom but does not validate disinfectants, so your QA team needs its own validation file.',
    intro: [
      "Pharma and healthcare facilities often ask suppliers for a 'validated' disinfectant, but the word means different things to different people. This guide explains what validation should show, which standards are usually referred to, how contact time and rotation work, and what documents your QA team should be able to produce when an auditor asks."
    ],
    quickFacts: [
      {
        label: 'What it is',
        value: 'Documented proof that a disinfectant works against the organisms, surfaces and contact time relevant to your own cleanroom.'
      },
      {
        label: 'Standards usually referred to',
        value: 'EN 13697 and EN 16615 are surface-test methods; USP <1072> is guidance; EU GMP Annex 1 (2022) requires the disinfection process to be validated. ISO 14644 classifies cleanroom air cleanliness; it is not a disinfectant test.'
      },
      {
        label: 'Contact time',
        value: 'Use the contact time in the validation data for the product and surface. The surface must remain wet throughout. Sporicidal claims generally need longer contact times.'
      },
      {
        label: 'Surface compatibility',
        value: 'Test the actual surfaces in the facility or justify the representative materials used.'
      },
      {
        label: 'Rotation',
        value: 'Use more than one type of disinfectant, including a sporicidal agent periodically, as decided by the QA team.'
      },
      {
        label: 'Who decides',
        value: 'The QA and microbiology team, based on room grade, environmental monitoring data and the facility risk assessment.'
      }
    ],
    ctaGroups: [
      {
        heading: 'Need cleaning products or supporting documents for your facility?',
        buttons: [
          { label: 'Request a Free Sample & SDS', url: 'https://evochem.co.in/contactus/', style: 'primary' },
          { label: 'WhatsApp Evochem', url: 'https://wa.me/917483837722?text=Hello%20Evochem%2C%20I%20would%20like%20a%20free%20sample%20and%20the%20SDS%20for%20your%20cleaning%20products%20for%20a%20pharma%20or%20healthcare%20facility.', style: 'secondary' },
          { label: 'Call +91 74838 37722', url: 'tel:+917483837722', style: 'secondary' }
        ]
      },
      {
        heading: 'Discuss the cleaning needs of your facility',
        buttons: [
          { label: 'Talk to Our Technical Team', url: 'https://evochem.co.in/contactus/', style: 'primary' },
          { label: 'WhatsApp Your Area List', url: 'https://wa.me/917483837722?text=Hello%20Evochem%2C%20please%20advise%20which%20of%20your%20cleaning%20products%20suit%20the%20non-classified%20areas%20of%20our%20facility.', style: 'secondary' },
          { label: 'Email Your Questions', url: 'mailto:info@ennwin.in?subject=Sample%20and%20SDS%20request', style: 'secondary' }
        ]
      },
      {
        heading: 'Speak with Evochem',
        buttons: [
          { label: 'Request a Free Sample & SDS', url: 'https://evochem.co.in/contactus/', style: 'primary' },
          { label: 'WhatsApp Evochem', url: 'https://wa.me/917483837722?text=Hello%20Evochem%2C%20I%20would%20like%20a%20free%20sample%20and%20the%20SDS%20for%20your%20cleaning%20products%20for%20a%20pharma%20or%20healthcare%20facility.', style: 'secondary' },
          { label: 'Call +91 74838 37722', url: 'tel:+917483837722', style: 'secondary' },
          { label: 'Email info@ennwin.in', url: 'mailto:info@ennwin.in?subject=Sample%20and%20SDS%20request', style: 'secondary' }
        ]
      }
    ],
    sections: [
      {
        heading: '1. What does â€œcleanroom-validated disinfectantâ€ mean?',
        paragraphs: [
          'A disinfectant is cleanroom-validated when there is documented evidence that it works in the way you use it. A supplierâ€™s label claim, such as â€œkills 99.9% of germsâ€, is a starting point. Validation goes further and answers five questions:'
        ],
        bullets: [
          'Which organisms were tested, including spores where relevant?',
          'What contact time was used?',
          'Which surfaces were tested?',
          'How much soil or interfering substance was present?',
          'What result counted as a pass?'
        ],
        table: undefined
      },
      {
        heading: '2. ISO 14644 and disinfectants: what is the link?',
        paragraphs: [
          'ISO 14644 is a family of standards for cleanrooms. ISO 14644-1 classifies the cleanliness of air by the number of particles present. It tells you how clean the room air must be; it does not set out how to test a disinfectant.',
          'The link is indirect. The room class and grade set how strict contamination control has to be, and that determines how much evidence is needed for disinfectants.'
        ]
      },
      {
        heading: '3. Standards that are usually referred to',
        paragraphs: [
          'These are references facilities and suppliers most often mention. Your QA team decides which apply to your site.'
        ],
        table: {
          headers: ['Reference', 'What it covers', 'Points to note'],
          rows: [
            ['EU GMP Annex 1 (2022)', 'Manufacture of sterile medicinal products, including cleaning and disinfection', 'Requires the disinfection process to be validated and a contamination control strategy. Names no single test standard.'],
            ['EN 13697', 'Surface test without mechanical action', 'Commonly used as a lab test. It has no standard spore test, so spore claims often use a modified method.'],
            ['EN 16615', 'Surface test with mechanical action (wiping)', 'Closer to real wiping or mopping practice.'],
            ['USP <1072>', 'Guidance on disinfectants and antiseptics', 'Often used to design spore and surface studies.'],
            ['ISO 14644-1', 'Classification of cleanroom air cleanliness by particles', 'Not a disinfectant test.'],
            ['Revised Schedule M (India)', 'Good manufacturing practice for Indian pharmaceutical manufacturers', 'Check the current text and your regulatorâ€™s expectations for your product type.']
          ]
        }
      },
      {
        heading: '4. Sporicidal claims: what to check',
        paragraphs: [
          'Spores are much harder to kill than ordinary bacteria. Alcohols do not kill bacterial spores. A product should only be called sporicidal if it has been tested against spores, in the way and for the time you will use it.'
        ],
        bullets: [
          'Ask which spore-forming organism was used.',
          'Ask for the contact time that applies to the sporicidal claim.',
          'Ask whether the test used the same surfaces and soil as your room.',
          'Remember that sporicides can be harsher on some surfaces, so check compatibility first.'
        ],
      },
      {
        heading: '5. Contact time and surface compatibility',
        paragraphs: [
          'Contact time is how long the surface must stay wet with disinfectant for it to work. It is set by validation data for that product, not by a general rule. If the surface dries before the time is up, the result is not covered by the data. Wiping dry too early is a common cause of failure.',
          'Surface compatibility has two sides: whether the disinfectant still works on the surface, and whether it damages the surface or leaves residue. Validation on stainless steel alone is not enough for glass, flooring or plastics.'
        ],
        table: {
          headers: ['Surface type', 'What to check', 'What validation should show'],
          rows: [
            ['Stainless steel', 'Corrosion from repeated chloride or oxidiser use', 'Efficacy and no damage over repeated use'],
            ['Glass and windows', 'Residue and streaking', 'Efficacy, and that residue can be removed'],
            ['Epoxy or vinyl flooring', 'Softening, dulling and slip risk', 'Efficacy on that exact flooring'],
            ['Painted walls and ceilings', 'Paint damage and residue', 'Efficacy on that coating'],
            ['Plastics and gaskets', 'Cracking, swelling or clouding', 'Efficacy and material compatibility']
          ]
        }
      },
      {
        heading: '6. Rotation: why it matters',
        paragraphs: [
          'Rotation means using more than one type of disinfectant, with different modes of action, on a planned schedule. Annex 1 expects more than one type, including periodic use of a sporicidal agent. A common structure is:'
        ],
        bullets: [
          'A broad-spectrum disinfectant for routine use.',
          'A sporicidal agent at a planned interval.',
          'A sporicidal agent after a monitoring excursion or a maintenance shutdown, if the corrective-action plan says so.'
        ]
      },
      {
        heading: '7. The audit documentation checklist',
        paragraphs: [
          'Auditors want evidence, not just a claim. Your QA team should be able to produce the following on demand:'
        ],
        bullets: [
          'Validation report for each disinfectant: standard or method, organisms, contact time, soil load, surfaces and pass criteria.',
          'Certificate of analysis for the batch in use.',
          'SDS for every product.',
          'Proof of sterility where the disinfectant is required to be sterile, such as in higher-grade areas.',
          'In-use expiry data for prepared solutions and dilution records.',
          'Rotation SOP and the schedule actually followed.',
          'Cleaning records: what was used, where, when and by whom.',
          'Environmental monitoring data, including results before and after disinfection.',
          'Staff training records.',
          'Records of any product change, the reason for it and whether re-validation was done.'
        ]
      },
      {
        heading: '8. The cleaning step, and where Evochem fits',
        paragraphs: [
          'Cleaning comes before disinfection. Detergent removes soil and residue that would shield microorganisms. For classified areas, the detergent also needs to suit the validation and, in higher-grade areas, may need to be sterile. That decision belongs to the QA team.',
          'Evochem manufactures cleaning products for the housekeeping side of pharma and healthcare facilities, such as non-classified and support areas: corridors, offices, washrooms, floors and hand hygiene. Evochem does not list a cleanroom or hospital-grade disinfectant. For classified areas, use a disinfectant your QA team has validated and approved.',
          'EVO 7 neutral floor cleaner is intended for daily floor cleaning; EVO 2 hard surface cleaner is for walls, counters and fixtures; and professional hand hygiene products are available for staff. See the healthcare facilities page for the full range, along with guides on healthcare cleaning protocols and choosing a low-foam floor cleaner.',
          'Share your area list and SOPs with the technical team. They can advise which products may suit which areas and which areas need a validated disinfectant from another source. SDS documents are available for every Evochem product on request.'
        ],
        products: [
          'neutral-floor-cleaner-evo-7',
          'hard-surface-cleaner-evo-2'
        ]
      }
    ],
    faqs: [
      {
        q: 'What documentation shows that a disinfectant is validated for a cleanroom?',
        a: 'Generally, the validation report should name the test standard or method, test organisms including spores where relevant, contact time, soil load, surfaces tested and pass criteria. It should be supported by the CoA, SDS and, where required, proof of sterility. QA decides what is required for each room grade.'
      },
      {
        q: 'What contact time should be used?',
        a: 'Use the contact time in the validation data, not a general figure. It depends on the product, the claim (sporicidal contact times are generally longer than bactericidal ones), the organism and the surface. The surface must stay visibly wet for the whole time.'
      },
      {
        q: 'Which surfaces must be tested?',
        a: 'Test the actual surfaces in the facility, such as stainless steel, glass, epoxy or vinyl flooring, painted walls and plastics, or use justified representative materials. A pass on stainless steel alone does not prove suitability for every surface.'
      },
      {
        q: 'Why rotate disinfectants, and does it prevent resistance?',
        a: 'Guidance such as EU GMP Annex 1 expects more than one type of disinfectant, with a sporicidal agent used periodically. The aim is to cover bacteria, fungi and spores and reduce the chance of resistant flora building up. Resistance in practice is debated, so base rotation on your own monitoring data and risk assessment.'
      },
      {
        q: 'Can I get an SDS before I decide?',
        a: 'Yes. Evochem provides an SDS for each product on request. Evochem supplies cleaning products for floors, surfaces, washrooms and hand hygiene, and does not list a cleanroom or hospital-grade disinfectant. Use a validated disinfectant approved by your QA team for classified areas.'
      },
      {
        q: 'How do we stay audit-ready?',
        a: 'Keep a controlled file for each product: validation report, CoA, SDS, in-use expiry data and rotation SOP. Maintain dated records of what was used, where and by whom, along with dilution, environmental monitoring and staff training records.'
      }
    ],
    related: [
      { path: '/resources/healthcare-cleaning-protocols/', label: 'Healthcare cleaning chemicals and protocols', eyebrow: 'Related guide' },
      { path: '/resources/food-contact-surface-sanitizers-guide/', label: 'Food-contact surface sanitiser types compared', eyebrow: 'Related guide' },
      { path: '/resources/low-foam-floor-cleaner-scrubber-dryer/', label: 'Low-foam floor cleaner for scrubber-dryer machines', eyebrow: 'Related guide' },
      { path: '/resources/reduce-housekeeping-chemical-consumption/', label: 'How to reduce housekeeping chemical consumption and cost per use', eyebrow: 'Related guide' },
      { path: '/resources/', label: 'All articles', eyebrow: 'Resources' }
    ],
    inlineLinks: [
      { path: '/products/neutral-floor-cleaner-evo-7/', label: 'EVO 7 neutral floor cleaner', eyebrow: 'Product' },
      { path: '/products/hard-surface-cleaner-evo-2/', label: 'EVO 2 hard surface cleaner', eyebrow: 'Product' },
      { path: '/products/professional-hand-hygiene-products/', label: 'Professional hand hygiene products', eyebrow: 'Product' },
      { path: '/industries/healthcare/', label: 'Healthcare facilities', eyebrow: 'Industry' },
      { path: '/resources/healthcare-cleaning-protocols/', label: 'Healthcare cleaning protocols', eyebrow: 'Related guide' },
      { path: '/resources/low-foam-floor-cleaner-scrubber-dryer/', label: 'Choosing a low-foam floor cleaner', eyebrow: 'Related guide' }
    ],
    disclaimer: 'Disclaimer: This article is general information, not regulatory or legal advice. Standards, guidance and regulations change, and what applies to your facility depends on your products, room grades and regulator. Follow your QA team, your site SOPs and the current official texts. Evochem is a brand of Ennwin Industries Private Limited. Evochem products are cleaning products. Any sanitising or disinfecting use is only as stated in the product data.'
  },
];
