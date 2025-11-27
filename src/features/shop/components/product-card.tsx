'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Product } from '../types/product.types';

interface ProductCardProps {
  product: Product;
  index: number;
  isFavorite: boolean;
  onToggleFavorite: (productId: number) => void;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({
  product,
  index,
  isFavorite,
  onToggleFavorite,
  onAddToCart,
}: ProductCardProps) {
  const t = useTranslations('shop');

  return (
    <motion.div
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-110 duration-500"
        />

        {/* Badge - Top Left */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span
              className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full shadow-md ${product.badge === 'bestseller'
                  ? 'bg-orange-500 text-white'
                  : 'bg-blue-500 text-white'
                }`}
            >
              {t(`badges.${product.badge}`)}
            </span>
          </div>
        )}

        {/* Favorite Button - Top Right */}
        <button
          onClick={() => onToggleFavorite(product.id)}
          type="button"
          className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
        >
          <Heart
            size={18}
            className={
              isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
            }
          />
        </button>

        {/* Out of Stock Overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-white text-gray-900 text-sm font-bold px-4 py-2 rounded-full">
              {t('outOfStock')}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">
          {t(`categories.${product.category}`)}
        </p>

        {/* Name */}
        <h3 className="text-base font-bold text-gray-900 mb-3 line-clamp-2 min-h-12">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="mb-4">
          <span className="text-2xl font-bold text-orange-600">
            Rp {product.price.toLocaleString('id-ID')}
          </span>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={() => onAddToCart(product)}
          size="sm"
          className="w-full gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg h-11"
          disabled={!product.inStock}
        >
          <ShoppingCart size={18} />
          {product.inStock ? t('addToCart') : t('outOfStock')}
        </Button>
      </div>
    </motion.div>
  );
}
