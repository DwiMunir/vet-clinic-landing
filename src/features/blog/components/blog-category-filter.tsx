'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface BlogCategoryFilterProps {
  categories: readonly string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function BlogCategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: BlogCategoryFilterProps) {
  const t = useTranslations('blog');

  return (
    <motion.div
      className="flex flex-wrap gap-3 justify-center"
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
  );
}
