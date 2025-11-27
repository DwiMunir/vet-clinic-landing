'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star, Heart, Search, SlidersHorizontal } from 'lucide-react';
import { useCart } from '@/contexts/cart-context';

const PRODUCTS = [
  {
    id: 1,
    slug: 'premium-dog-food',
    name: 'Premium Dog Food - Natural & Healthy',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=800&h=600',
    category: 'food',
    price: 450000,
    rating: 4.8,
    reviews: 156,
    inStock: true,
    badge: 'bestseller',
  },
  {
    id: 2,
    slug: 'interactive-cat-toy',
    name: 'Interactive Cat Toy - Smart Play',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&h=600',
    category: 'toys',
    price: 185000,
    rating: 4.6,
    reviews: 89,
    inStock: true,
    badge: 'new',
  },
  {
    id: 3,
    slug: 'grooming-kit',
    name: 'Complete Grooming Kit - Professional',
    image: 'https://images.unsplash.com/photo-1581888227599-779811939961?w=800&h=600',
    category: 'grooming',
    price: 325000,
    rating: 4.7,
    reviews: 124,
    inStock: true,
  },
  {
    id: 4,
    slug: 'pet-carrier',
    name: 'Pet Carrier - Travel Comfort',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600',
    category: 'accessories',
    price: 575000,
    rating: 4.9,
    reviews: 203,
    inStock: false,
  },
  {
    id: 5,
    slug: 'dental-care-set',
    name: 'Dental Care Set - Complete Health',
    image: 'https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=800&h=600',
    category: 'health',
    price: 240000,
    rating: 4.5,
    reviews: 67,
    inStock: true,
    badge: 'bestseller',
  },
  {
    id: 6,
    slug: 'cozy-pet-bed',
    name: 'Cozy Pet Bed - Ultra Soft',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600',
    category: 'accessories',
    price: 385000,
    rating: 4.8,
    reviews: 178,
    inStock: true,
  },
  {
    id: 7,
    slug: 'organic-treats',
    name: 'Organic Treats - Natural Ingredients',
    image: 'https://images.unsplash.com/photo-1583512603806-077998240c7a?w=800&h=600',
    category: 'food',
    price: 150000,
    rating: 4.7,
    reviews: 134,
    inStock: true,
    badge: 'new',
  },
  {
    id: 8,
    slug: 'smart-water-fountain',
    name: 'Smart Water Fountain - Auto Fill',
    image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=800&h=600',
    category: 'accessories',
    price: 475000,
    rating: 4.6,
    reviews: 92,
    inStock: true,
    badge: 'new',
  },
];

const CATEGORIES = ['all', 'food', 'toys', 'accessories', 'grooming', 'health'];

export default function ShopPage() {
  const t = useTranslations('shop');
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [favorites, setFavorites] = React.useState<number[]>([]);

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (product: typeof PRODUCTS[0]) => {
    addToCart({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <Section className="bg-linear-to-br from-blue-50 via-white to-orange-50 pt-32 pb-16">
          <Container>
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {t('hero.description')}
              </p>

              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder={t('hero.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-base rounded-full"
                />
              </div>
            </motion.div>
          </Container>
        </Section>

        {/* Filters Section */}
        <Section className="bg-white py-8 border-b">
          <Container>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Categories */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                      ? 'bg-secondary text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    {t(`categories.${category}`)}
                  </button>
                ))}
              </motion.div>

              {/* Sort & Filter */}
              <Button variant="outline" className="gap-2 rounded-full">
                <SlidersHorizontal size={18} />
                {t('filters')}
              </Button>
            </div>
          </Container>
        </Section>

        {/* Products Grid */}
        <Section className="bg-gray-50">
          <Container>
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600">
                {t('showingResults', { count: filteredProducts.length })}
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">{t('noResults')}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
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
                          <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full shadow-md ${product.badge === 'bestseller'
                            ? 'bg-orange-500 text-white'
                            : 'bg-blue-500 text-white'
                            }`}>
                            {t(`badges.${product.badge}`)}
                          </span>
                        </div>
                      )}

                      {/* Favorite Button - Top Right */}
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                      >
                        <Heart
                          size={18}
                          className={favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}
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
                              className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
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
                        onClick={() => handleAddToCart(product)}
                        size="sm"
                        className="w-full gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg h-11"
                        disabled={!product.inStock}
                      >
                        <ShoppingCart size={18} />
                        {product.inStock ? t('addToCart') : t('outOfStock')}
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Load More */}
            {filteredProducts.length > 0 && (
              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button size="lg" variant="outline" className="rounded-full">
                  {t('loadMore')}
                </Button>
              </motion.div>
            )}
          </Container>
        </Section>

        {/* Promo Banner */}
        <Section className="bg-linear-to-r from-orange-500 to-secondary text-white">
          <Container>
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('promo.title')}
              </h2>
              <p className="text-white/90 mb-8 text-lg">
                {t('promo.description')}
              </p>
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90 rounded-full px-8">
                {t('promo.cta')}
              </Button>
            </motion.div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
