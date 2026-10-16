import { ContentSection } from './content-model';

// Extra sections for the October 2026 keyword brief (EVOCHEM PRIORITY.docx), appended to the end of the
// existing pages by site-content.ts. Each section works one keyword cluster into the page it was assigned to.
// Same content rules as the pages: facts only from evochem-data.json or the client's documents, no kill claims,
// no customer names. Certification wording follows the handover: NSF only for listed products, GreenPro
// "under application", ISO 9001 only as documentation on request (see seo/landing-pages.ts).
// Keyed by "<kind>:<slug>".
export const PRIORITY_SECTIONS: Record<string, ContentSection[]> = {
  'industry:food-processing': [
    {
      heading: 'Food plant sanitation chemicals by soil and surface',
      paragraphs: [
        'Food plant sanitation chemicals work best when each one is matched to a soil. As a protein soil remover and a fat and grease remover for food plant floors, walls and conveyors, an alkaline foam such as Alkalox Foam or Clastox Foam is applied first. For mineral deposits, a hard-water scale remover for food equipment such as Acidox Foam follows on a separate day or step. Each of these is an industrial foam cleaner for food processing: the foam clings to vertical surfaces so the chemistry has time to work before rinsing.',
        'Buyers often ask for food-safe cleaning chemicals. In practice that means products made for food plants, used at the label dilution and rinsed with potable water where the MSDS says so. These are the safer cleaning chemicals for food facilities: the right product for the soil, at the right strength, applied by trained staff. Our food factory hygiene chemicals cover cleaning, equipment cleaning chemicals for food industry lines and sanitising, so one supplier can support the whole programme.',
      ],
    },
  ],

  'solution:cip-cleaning-chemicals': [
    {
      heading: 'CIP chemicals for food industry and dairy circuits',
      paragraphs: [
        'Evochem is a CIP detergent manufacturer in India, producing CIP chemicals for food industry and beverage circuits at its plant in Anekal, Bengaluru. Clastox 50 and Clastox Plus are low-foaming, alkaline CIP cleaner options for tanks, pipelines and heat exchangers; they are the CIP chemicals for dairy industry users who need fat and milk-residue removal without foam in the pumps.',
        'If you are looking for an acid CIP cleaner, note that our range does not include one today; our technical team can advise on the acid step for your circuit.',
      ],
    },
    {
      heading: 'COP cleaning chemicals (clean-out-of-place)',
      paragraphs: [
        'Parts that cannot be cleaned in place, such as fillers, valves, nozzles, trays and moulds, are dismantled and cleaned in a soak tank or washer. Clean-out-of-place chemicals for this job are low-foaming, so Clastox Plus and Clastox 50 double as COP cleaning chemicals, followed by a sanitiser on the clean parts.',
      ],
    },
  ],

  'industry:dairy-processing': [
    {
      heading: 'Milk processing plant cleaning chemicals at a glance',
      paragraphs: [
        'Milk processing plant cleaning chemicals fall into three groups: alkaline detergents for fat and protein, acid products for milkstone and scale, and sanitisers. Dairy plant CIP chemicals from Evochem are the low-foaming Clastox range and Sanix Peraxy. For open surfaces and as a dairy equipment descaler on the outside of tanks, fillers and floors, Acidox Foam removes scale and inorganic soils.',
      ],
    },
  ],

  'industry:poultry-meat-processing': [
    {
      heading: 'Poultry equipment cleaning chemicals and meat plant sanitation',
      paragraphs: [
        'Meat processing cleaning chemicals have to remove animal fat, blood and protein before any sanitiser can work. Alkalox Foam and Chlorox Foam are the poultry equipment cleaning chemicals most plants start with, for evisceration lines, chillers, conveyors and crates. Poultry plant sanitation chemicals then finish the job: Sanix Quat or Sanix Peraxy as the processing equipment sanitiser on cleaned food-contact surfaces.',
      ],
    },
    {
      heading: 'Poultry farm disinfectant or processing plant sanitation?',
      paragraphs: [
        'Searches for a poultry farm disinfectant often come from processors. Evochem’s poultry range is for processing plants: cleaning and sanitising slaughter, evisceration, chilling and packing areas, equipment and crates. We do not list a farm biosecurity disinfectant for sheds; talk to our team about crate, equipment and processing-room hygiene.',
      ],
    },
  ],

  'category:commercial-kitchen-cleaning-chemicals': [
    {
      heading: 'Kitchen cleaning chemicals for restaurants, hotels and cloud kitchens',
      paragraphs: [
        'Evochem is a restaurant cleaning chemicals supplier and manufacturer of commercial kitchen hygiene products, with bulk packs for central kitchens and chains. Our kitchen cleaning chemicals for restaurants cover dishwashing, degreasing, drains and food-contact sanitising.',
        'For machines, Blaze Auto is an industrial dishwasher detergent and Blaze Rinse its rinse aid, so one dishwasher detergent and rinse aid supplier covers the whole machine. We are an automatic dishwashing liquid manufacturer, so the same products are available in 20 L and larger packs.',
        'For grease, Blaze Kitchen Care is a heavy-duty kitchen degreaser and kitchen degreaser chemical for floors, walls and utensils. Blaze Grill is the oven and grill cleaner and carbon remover chemical for burners, fryers and ovens, and it is also used as a chimney degreaser on range hoods.',
        'For manual washing, Blaze Dish is a concentrated dishwash liquid for restaurants; as a bulk dishwashing liquid supplier we pack it in 5 L to 50 L cans.',
      ],
    },
  ],

  'industry:hospitality': [
    {
      heading: 'Hotel housekeeping chemicals and hospitality cleaning products',
      paragraphs: [
        'Hotel housekeeping chemicals cover guest rooms, bathrooms, public areas and back-of-house. Our hospitality cleaning products include the EVO range for rooms and washrooms, carpet shampoo and pre-spotter, glass cleaner and steel polish. These housekeeping products for hotels are supplied as concentrates, so one can makes many litres of in-use solution.',
        'As a hotel cleaning chemical supplier in India, Evochem supplies hotels from its plant in Bengaluru in bulk packs, with dosing guidance for each product.',
      ],
    },
  ],

  'industry:facility-management': [
    {
      heading: 'Housekeeping chemicals for facility management contracts',
      paragraphs: [
        'Facility managers buy housekeeping chemicals for facility management across many sites, so a short, consistent product list matters more than a long catalogue. Our cleaning chemicals for corporate offices cover washrooms, floors, glass, desks and pantries with a handful of EVO products.',
        'Concentrated cleaning chemicals for facility management also lower freight, storage and packaging, which is why they are a practical starting point for sustainable cleaning chemicals for facilities. If you are comparing green cleaning products for offices or biodegradable commercial cleaning chemicals, ask us for product data sheets: some products, such as Flox Build, are formulated with biodegradable surfactants, and we will tell you plainly which ones are. Comparing cleaning chemicals with low cost per litre of in-use solution, rather than price per can, usually shows the real saving.',
        'For buyers comparing sustainable cleaning chemicals in India, concentrates are the practical place to start: one can makes many litres of in-use solution, so there is less packaging and freight per litre used.',
      ],
    },
  ],

  'industry:healthcare': [
    {
      heading: 'Healthcare cleaning chemicals for non-clinical areas',
      paragraphs: [
        'Our healthcare cleaning chemicals cover the housekeeping side of a hospital: EVO 7 as a neutral hospital floor cleaner for daily mopping and scrubber dryers, EVO 1 and EVO 6 for washrooms, and laundry and kitchen chemicals for the support departments.',
        'Looking for a hospital disinfectant supplier in India? Evochem supplies the hospital housekeeping chemicals above. For a surface disinfectant for healthcare facilities in clinical areas, use the hospital disinfectant your infection-control team has approved; Evochem does not list a hospital-grade disinfectant.',
      ],
    },
  ],

  'solution:floor-care-chemicals': [
    {
      heading: 'Floor cleaning chemical for scrubber machine and stone floors',
      paragraphs: [
        'A floor cleaning chemical for scrubber machine use must be low-foaming, or the recovery tank fills with foam. Novel OGR is a low-foam degreasing floor cleaner for oily floors, and EVO 7, a neutral cleaner made for manual and machine cleaning, suits daily maintenance. For marble and other acid-sensitive stone, a neutral cleaner such as EVO 7 is the marble-safe floor cleaner choice; avoid acidic descalers on stone and test on a small area first.',
        'For bulk buyers, Evochem supplies each floor cleaner chemical in India in 5 L, 20 L, 50 L and 200 L packs, with pan-India delivery from our plant in Bengaluru.',
      ],
    },
  ],

  'solution:washroom-cleaning-chemicals': [
    {
      heading: 'Urinal cleaner chemical and hard-water scale',
      paragraphs: [
        'Urine scale and hard-water lime build up fastest in urinals and around taps. EVO 1, an organic-acid bathroom cleaner, is the urinal cleaner chemical for daily use, and EVO 9 is the descaler for heavy deposits. These are hard-water cleaning chemicals, so use them on acid-resistant surfaces only. For daily cleaning of acid-sensitive surfaces, use EVO 2, an acid-free bathroom cleaner and hard surface cleaner.',
      ],
    },
  ],

  'category:institutional-housekeeping-chemicals': [
    {
      heading: 'Multipurpose cleaner concentrate and speciality surface care',
      paragraphs: [
        'EVO 2 is our multipurpose cleaner concentrate for floors, walls, counters and fixtures. For special surfaces, EVO 4 is the wood cleaner and polish for furniture and cupboards, and EVO ZAP is a commercial stain remover cream for rust, scale and soap scum. EVO 103 handles spots on carpets before shampooing.',
      ],
    },
  ],

  'category:commercial-laundry-chemicals': [
    {
      heading: 'Hotel laundry chemicals and institutional laundry detergent',
      paragraphs: [
        'Evochem is a laundry chemical supplier in India for hotels, hospitals and laundries. Our hotel laundry chemicals follow the wash process: Flox as a pre-wash (a liquid laundry presoak for heavily soiled linen), Flox Star as the main institutional laundry detergent, Flox Build as the alkaline booster, the Flox laundry destainer chemical (a chlorine destainer for white linen), Flox Sour as the laundry sour neutralizer and Flox Soft Care as the fabric softener for commercial laundry.',
      ],
    },
  ],

  'category:professional-hand-hygiene-products': [
    {
      heading: 'Bulk handwash liquid supplier for workplaces',
      paragraphs: [
        'As a bulk handwash liquid supplier and antibacterial handwash manufacturer, Evochem packs the Lush range in 5 L and larger cans for refilling dispensers. Lush Care Plus is the antibacterial handwash for food plants and kitchens. As a hand sanitiser manufacturer in India, we also make Lush Care Gel and Lush Care Rub.',
      ],
    },
  ],

  'category:food-processing-hygiene-chemicals': [
    {
      heading: 'Antibacterial multipurpose cleaner for food plants',
      paragraphs: [
        'Sanix Duo is a cleaner cum sanitiser: an antibacterial multipurpose cleaner that cleans and sanitises in one step on lightly soiled food-contact surfaces, including in hard water. It is one of the disinfectant surface cleaner options most food plants keep alongside their foam cleaners.',
      ],
    },
  ],

  'article:reduce-housekeeping-chemical-consumption': [
    {
      heading: 'How to reduce housekeeping chemical consumption: a checklist',
      bullets: [
        'Measure what each site uses per month, per product.',
        'Introduce cleaning chemical dilution control: dosing pumps or measured bottles instead of free pouring.',
        'Switch to concentrates and compare cost per litre of in-use solution.',
        'Train staff on the right product for each surface.',
        'Review the numbers every quarter with your supplier.',
      ],
    },
  ],
};
