import React from 'react';
import { BadgeCheck, Bot, Film, ShieldCheck } from 'lucide-react';
import { ProductGrid } from './ProductGrid';
import type { Product } from '../../types';

interface VerifiedInventorySectionProps {
  id: string;
  title: string;
  eyebrow: string;
  icon: React.ComponentType<{ className?: string }>;
  products: Product[];
}

export const VerifiedInventorySection: React.FC<VerifiedInventorySectionProps> = ({ id, title, eyebrow, icon: Icon, products }) => (
  <section id={id} className="w-full py-12 lg:py-16 bg-[var(--pb-charcoal)] border-b border-[var(--pb-line)]">
    <div className="pb-container space-y-6">
      <div className="pb-section-header !mb-2 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-3 border-b border-[var(--pb-line)]">
        <div>
          <span className="pb-eyebrow"><Icon className="w-3 h-3" /> {eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">{title}</h2>
          <p className="text-[var(--pb-silver-3)] text-sm mt-1">Verified PlayBeat inventory with transparent selling prices.</p>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-emerald-400">
          <ShieldCheck className="w-4 h-4" /> Verified inventory only
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-3 py-2 text-[11px] text-emerald-300">
        <BadgeCheck className="w-4 h-4 shrink-0" />
        <span>Prices include the PlayBeat 35% inventory markup. No offers, offer counts, or marketplace links are shown.</span>
      </div>
      <ProductGrid products={products} />
    </div>
  </section>
);

export const VerifiedStreamingSection: React.FC<{ products: Product[] }> = ({ products }) => (
  <VerifiedInventorySection id="video-streaming-section" title="Verified Video Streaming" eyebrow="PlayBeat Inventory" icon={Film} products={products} />
);

export const VerifiedAiToolsSection: React.FC<{ products: Product[] }> = ({ products }) => (
  <VerifiedInventorySection id="ai-tools-section" title="Verified AI Tools" eyebrow="PlayBeat Inventory" icon={Bot} products={products} />
);
