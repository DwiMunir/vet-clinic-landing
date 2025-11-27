'use client';

import { useTranslations } from 'next-intl';
import { ProductCard } from './product-card';
import type { Product } from '../types/product.types';

interface ProductGridProps {
  products: Product[];
  favorites: number[];
  onToggleFavorite: (productId: number) => void;
  onAddToCart: (product: Product) => void;
}

export function ProductGrid({
  products,
  favorites,
  onToggleFavorite,
  onAddToCart,
}: ProductGridProps) {
  const t = useTranslations('shop');

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">{t('noResults')}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          index={index}
          isFavorite={favorites.includes(product.id)}
          onToggleFavorite={onToggleFavorite}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
