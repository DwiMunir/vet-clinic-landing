'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { ShopSearchBar } from './shop-search-bar';

interface ShopHeroProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export function ShopHero({ searchQuery, onSearchChange }: ShopHeroProps) {
  const t = useTranslations('shop');

  return (
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
          <p className="text-xl text-gray-600 mb-8">{t('hero.description')}</p>

          <ShopSearchBar value={searchQuery} onChange={onSearchChange} />
        </motion.div>
      </Container>
    </Section>
  );
}
