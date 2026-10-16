import { Product } from './catalogue';

// Keyword-led product names for the product page <title>, H1 and meta description (EVOCHEM PRIORITY.docx and the
// SEO Action Plan). Keyed by product slug: two products share the code "Flox". The data sheet name
// (product.title) stays in breadcrumbs, cards and the Product schema. Wording describes what the data sheet says
// the product is: no certification, kill or "eco-friendly" claims.
export const PRODUCT_HEADING: Record<string, string> = {
  'heavy-duty-floor-cleaner-novel-hd': 'Heavy-Duty Industrial Floor Cleaner',
  'oil-grease-remover-novel-ogr': 'Oil & Grease Remover Floor Cleaner',
  'heavy-duty-hand-wash-lush-power': 'Heavy-Duty Hand Wash for Workshops',
  'pre-wash-laundry-detergent-flox': 'Laundry Pre-Wash Detergent',
  'main-wash-laundry-detergent-flox-star': 'Commercial Laundry Main Wash Detergent',
  'heavy-duty-liquid-laundry-detergent-flox-build': 'Heavy-Duty Liquid Laundry Detergent',
  'laundry-chlorine-destainer-flox': 'Chlorine Destainer for Laundry',
  'laundry-detergent-powder-star-powder': 'Commercial Laundry Detergent Powder',
  'laundry-sour-neutralizer-flox-sour': 'Laundry Sour Neutraliser',
  'fabric-softener-flox-soft-care': 'Fabric Softener for Commercial Laundry',
  'laundry-neutralizing-powder-flox-rinse': 'Laundry Neutralising Powder',
  'multipurpose-foam-detergent-neutrox-foam': 'Neutral Multipurpose Foam Detergent',
  'alkaline-foam-cleaner-alkalox-foam': 'Alkaline Foam Cleaner for Food Plants',
  'acidic-foam-cleaner-acidox-foam': 'Acidic Foam Cleaner and Descaler',
  'chlorinated-alkaline-foam-cleaner-chlorox-foam': 'Chlorinated Alkaline Foam Cleaner',
  'high-foaming-alkaline-detergent-clastox-foam': 'High-Foaming Alkaline Detergent',
  'cleaner-sanitizer-sanix-duo': 'Cleaner-Sanitiser for Food and Dairy',
  'peracetic-acid-sanitizer-sanix-peraxy': 'Peracetic Acid Food Sanitiser',
  'low-foam-alkaline-detergent-clastox-plus': 'Low-Foam Alkaline CIP Detergent',
  'alkaline-cip-detergent-clastox-50': 'Alkaline CIP Detergent',
  'quat-sanitizer-sanix-quat': 'Quat Sanitiser for Food Industry',
  'alcohol-surface-sanitizer-sanixol': 'Alcohol Surface Sanitiser',
  'foaming-hand-wash-lush-foamy': 'Foaming Hand Wash',
  'general-hand-wash-lush-fresh': 'Commercial Handwash Liquid',
  'perfume-free-hand-wash-lush-care': 'Perfume-Free Hand Wash',
  'luxury-hand-wash-lush-pearl': 'Luxury Hand Wash for Hotels',
  'antibacterial-hand-wash-lush-care-plus': 'Antibacterial Handwash',
  'gel-hand-sanitizer-lush-care-gel': 'Gel Hand Sanitiser',
  'liquid-hand-sanitizer-lush-care-rub': 'Liquid Hand Sanitiser',
  'furniture-maintainer-evo-4': 'Wood Furniture Polish',
  'bathroom-cleaner-evo-1': 'Commercial Bathroom Cleaner',
  'hard-surface-cleaner-evo-2': 'Multipurpose Hard Surface Cleaner',
  'glass-cleaner-concentrate-evo-3': 'Commercial Glass Cleaner Concentrate',
  'air-freshener-evo-5': 'Commercial Air Freshener',
  'toilet-bowl-cleaner-evo-6': 'Toilet Bowl Cleaner for Commercial Use',
  'heavy-duty-descaler-evo-9': 'Heavy-Duty Descaler',
  'neutral-floor-cleaner-evo-7': 'Neutral Floor Cleaner Concentrate',
  'carpet-shampoo-evo-101': 'Carpet Shampoo Chemical',
  'stainless-steel-polish-evo-sp': 'Stainless Steel Polish',
  'carpet-prespotter-evo-103': 'Carpet Pre-Spotter',
  'cream-cleaner-evo-zap': 'Multipurpose Cream Cleaner',
  'neutral-multipurpose-detergent-blaze-multi': 'Neutral Multipurpose Detergent',
  'kitchen-care-concentrate-blaze-kitchen-care': 'Concentrated Kitchen Degreaser',
  'dishwasher-detergent-blaze-auto': 'Commercial Dishwasher Detergent',
  'dishwasher-rinse-aid-blaze-rinse': 'Commercial Rinse Aid',
  'dishwashing-liquid-blaze-dish': 'Commercial Dishwashing Liquid',
  'drain-cleaner-blaze-drain': 'Non-Acidic Liquid Drain Cleaner',
  'chlorine-tablets-blaze-tab': 'Chlorine Sanitising Tablets',
  'oven-grill-cleaner-blaze-grill': 'Oven and Grill Cleaner',
  'crockery-destainer-blaze-dip': 'Crockery and Cup Destainer',
  'kitchen-degreaser-concentrate-blaze-multi-plus': 'Kitchen Degreaser Concentrate',
};

/** H1 and title name for a product page: the keyword-led name, or the data sheet name. */
export function productHeading(product: Product): string {
  return PRODUCT_HEADING[product.slug] || product.title;
}
