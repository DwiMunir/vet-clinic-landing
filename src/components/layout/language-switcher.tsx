'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useRouter, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check } from 'lucide-react';

const languages = {
  en: { name: 'English', flag: '🇬🇧' },
  id: { name: 'Indonesia', flag: '🇮🇩' },
};

export function LanguageSwitcher() {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const currentLocale = (params.locale as string) || routing.defaultLocale;

  const handleLocaleChange = (locale: string) => {
    router.replace(pathname, { locale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Change language"
      >
        <Globe size={18} className="text-gray-600" />
        <span className="text-sm font-medium text-gray-700 hidden sm:inline">
          {(languages[currentLocale as keyof typeof languages]?.name === 'Indonesia' ? 'ID' : 'EN')}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50"
            >
              {routing.locales.map((locale) => {
                const isActive = locale === currentLocale;
                return (
                  <button
                    key={locale}
                    onClick={() => handleLocaleChange(locale)}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">
                        {languages[locale as keyof typeof languages]?.flag}
                      </span>
                      <span className="font-medium">
                        {languages[locale as keyof typeof languages]?.name}
                      </span>
                    </div>
                    {isActive && <Check size={16} className="text-blue-600" />}
                  </button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
