import type { Product } from '../types';

/** PlayBeat-owned AI tools inventory. Buying prices are data-only; storefront cards show selling prices. */
const inventory = [
  { id: 'pb-ai-capcut-pro', title: 'CapCut Pro Subscription', buy: 1.10, description: 'Verified CapCut Pro access for browser, PC, and mobile.', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=900&q=80' },
  { id: 'pb-ai-cursor-pro', title: 'Cursor AI Pro Subscription', buy: 8.00, description: 'Verified AI coding workspace subscription with instant delivery.', image: 'https://images.unsplash.com/photo-1555062539-38c8b487f3f0?auto=format&fit=crop&w=900&q=80' },
  { id: 'pb-ai-adobe-creative-cloud', title: 'Adobe Creative Cloud Subscription', buy: 13.39, description: 'Verified Creative Cloud access for professional design workflows.', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80' },
  { id: 'pb-ai-lovable-pro', title: 'Lovable Pro', buy: 12.95, description: 'Verified AI app-building workspace with instant digital delivery.', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80' },
  { id: 'pb-ai-grok-supergrok', title: 'Grok SuperGrok Subscription', buy: 15.00, description: 'Verified AI assistant subscription with fast account delivery.', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80' },
  { id: 'pb-ai-claude-pro', title: 'Claude Pro Subscription', buy: 5.85, description: 'Verified AI assistant access for writing, analysis, and research.', image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=900&q=80' },
  { id: 'pb-ai-replit-core', title: 'Replit Core Subscription', buy: 9.75, description: 'Verified cloud development workspace with AI coding tools.', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80' },
  { id: 'pb-ai-krea-basic', title: 'Krea AI Basic Plan', buy: 5.03, description: 'Verified AI image and creative generation access.', image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80' },
] as const;

export const VERIFIED_AI_TOOLS_INVENTORY: Product[] = inventory.map((item) => {
  const sellingPrice = Number((item.buy * 1.35).toFixed(2));
  return {
    id: item.id,
    title: item.title,
    slug: item.id,
    shortDescription: item.description,
    description: item.description,
    categoryId: 'saas-tools',
    categoryName: 'AI Tools',
    subcategory: 'Verified PlayBeat Inventory',
    productType: 'digital',
    productSource: 'internal',
    price: sellingPrice,
    compareAtPrice: sellingPrice,
    costPrice: item.buy,
    discountPercent: 0,
    images: [item.image],
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
    sku: `PB-AI-${item.id.replace('pb-ai-', '').toUpperCase()}`,
    status: 'published',
    createdAt: '2026-08-23T00:00:00.000Z',
    updatedAt: '2026-08-23T00:00:00.000Z',
  };
});
