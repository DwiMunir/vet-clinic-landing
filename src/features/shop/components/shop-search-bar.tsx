'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface ShopSearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function ShopSearchBar({ value, onChange }: ShopSearchBarProps) {
  const t = useTranslations('shop');

  return (
    <motion.div
      className="relative max-w-xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        size={20}
      />
      <Input
        type="text"
        placeholder={t('hero.searchPlaceholder')}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-12 h-14 text-base rounded-full"
      />
    </motion.div>
  );
}
