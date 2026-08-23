import type { Product } from '../types';

/**
 * PlayBeat-owned AI, creative, and developer inventory.
 * Buying prices are data-only. Selling price is calculated as buy × 1.35.
 * No marketplace links, offers, sold counts, or external badges are stored.
 */
const inventory = [
  ['CapCut Pro Subscription', 1.10],
  ['Cursor AI Pro Subscription', 8.00],
  ['Google AI Pro Subscription', 1.50],
  ['Adobe Creative Cloud Subscription', 13.39],
  ['Lovable AI Pro Subscription', 1.00],
  ['Canva Pro Subscription', 0.10],
  ['Grok SuperGrok Subscription', 15.00],
  ['Higgsfield Pro Subscription', 17.50],
  ['Claude Pro Subscription', 23.82],
  ['Replit Core Subscription', 9.75],
  ['Figma Pro Subscription', 3.00],
  ['Krea AI Basic Plan', 5.03],
] as const;

const image = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80';

export const VERIFIED_AI_TOOLS_INVENTORY: Product[] = inventory.map(([title, buy], index) => {
  const sellingPrice = Number((buy * 1.35).toFixed(2));
  const id = `pb-ai-tool-${index + 1}`;
  return {
    id,
    title,
    slug: id,
    shortDescription: 'Verified PlayBeat AI tools inventory with digital delivery.',
    description: 'Verified PlayBeat AI tools inventory with digital delivery.',
    categoryId: 'saas-tools',
    categoryName: 'AI Tools',
    subcategory: 'Verified PlayBeat Inventory',
    productType: 'digital',
    productSource: 'internal',
    price: sellingPrice,
    compareAtPrice: sellingPrice,
    costPrice: buy,
    discountPercent: 0,
    images: [image],
    variations: [],
    instantDeliveryFormat: 'account_credentials',
    deliveryInstructions: 'Verified PlayBeat digital delivery instructions are provided after checkout.',
    tags: ['ai tools', 'verified inventory', 'playbeat digital'],
    isFeatured: false,
    isTrending: false,
    isTrendingWeek: false,
    isBestSeller: false,
    isFlashDeal: false,
    isLimitedTime: false,
    rating: 5,
    reviewCount: 0,
    stock: 100,
    lowStockThreshold: 10,
    sku: `PB-AI-${String(index + 1).padStart(3, '0')}`,
    status: 'published',
    createdAt: '2026-08-23T00:00:00.000Z',
    updatedAt: '2026-08-23T00:00:00.000Z',
  };
});
