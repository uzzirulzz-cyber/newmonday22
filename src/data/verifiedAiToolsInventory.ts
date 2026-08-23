import type { Product } from '../types';

/**
 * PlayBeat-owned AI, creative, and developer inventory.
 * Buying prices are data-only. Selling price is calculated as buy × 1.35.
 * No marketplace links, offers, sold counts, or external badges are stored.
 */
const inventory = [
  ['CapCut Pro Subscription', 1.10, 'https://cdn.simpleicons.org/capcut/ffffff'],
  ['Cursor AI Pro Subscription', 8.00, 'https://cdn.simpleicons.org/cursor/ffffff'],
  ['Google AI Pro Subscription', 1.50, 'https://cdn.simpleicons.org/googlegemini/ffffff'],
  ['Adobe Creative Cloud Subscription', 13.39, 'https://cdn.simpleicons.org/adobe/ff0000'],
  ['Lovable AI Pro Subscription', 1.00, 'https://cdn.simpleicons.org/lovable/ffffff'],
  ['Canva Pro Subscription', 0.10, 'https://cdn.simpleicons.org/canva/00c4cc'],
  ['Grok SuperGrok Subscription', 15.00, 'https://cdn.simpleicons.org/x/ffffff'],
  ['Higgsfield Pro Subscription', 17.50, 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80'],
  ['Claude Pro Subscription', 23.82, 'https://cdn.simpleicons.org/anthropic/ffffff'],
  ['Replit Core Subscription', 9.75, 'https://cdn.simpleicons.org/replit/f26207'],
  ['Figma Pro Subscription', 3.00, 'https://cdn.simpleicons.org/figma/f24e1e'],
  ['Krea AI Basic Plan', 5.03, 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80'],
] as const;

export const VERIFIED_AI_TOOLS_INVENTORY: Product[] = inventory.map(([title, buy, image], index) => {
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
