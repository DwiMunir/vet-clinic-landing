'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';

interface CategoryFilterProps {
  categories: readonly string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const t = useTranslations('shop');

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
      {/* Categories */}
      <motion.div
        className="flex flex-wrap gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            type="button"
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
  );
}
