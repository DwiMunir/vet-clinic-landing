'use client';

import { useTranslations } from 'next-intl';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { useCart } from '@/features/cart';
import { motion } from 'framer-motion';
import {
  ShopHero,
  CategoryFilter,
  ProductGrid,
  PromoSection,
  PRODUCTS,
  CATEGORIES,
  useProductFilter,
  useFavorites,
  type Product,
} from '@/features/shop';

export default function ShopPage() {
  const t = useTranslations('shop');
  const { addToCart } = useCart();

  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
  } = useProductFilter(PRODUCTS);

  const { favorites, toggleFavorite } = useFavorites();

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <ShopHero searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        {/* Filters Section */}
        <Section className="bg-white py-8 border-b">
          <Container>
            <CategoryFilter
              categories={CATEGORIES}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
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

            <ProductGrid
              products={filteredProducts}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              onAddToCart={handleAddToCart}
            />

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
        <PromoSection />
      </main>
      <Footer />
    </>
  );
}
