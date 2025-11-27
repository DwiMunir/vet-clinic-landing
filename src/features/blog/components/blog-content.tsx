'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface BlogContentProps {
  slug: string;
}

export function BlogContent({ slug }: BlogContentProps) {
  const t = useTranslations('blogDetail');

  return (
    <motion.div
      className="prose prose-lg max-w-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="text-gray-700 leading-relaxed space-y-6">
        {/* Introduction */}
        <p className="text-xl text-gray-900 font-medium">
          {t(`${slug}.introduction`)}
        </p>

        {/* Section 1 */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
          {t(`${slug}.section1.heading`)}
        </h2>
        <p>{t(`${slug}.section1.content`)}</p>

        {/* Section 2 */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
          {t(`${slug}.section2.heading`)}
        </h2>
        <p>{t(`${slug}.section2.content`)}</p>

        {/* Key Points */}
        <div className="bg-blue-50 border-l-4 border-secondary p-6 rounded-r-xl my-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {t('keyTakeaways')}
          </h3>
          <ul className="space-y-2 list-none pl-0">
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-1">✓</span>
              <span>{t(`${slug}.keyPoint1`)}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-1">✓</span>
              <span>{t(`${slug}.keyPoint2`)}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-1">✓</span>
              <span>{t(`${slug}.keyPoint3`)}</span>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
          {t(`${slug}.section3.heading`)}
        </h2>
        <p>{t(`${slug}.section3.content`)}</p>

        {/* Conclusion */}
        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
          {t('conclusion')}
        </h2>
        <p>{t(`${slug}.conclusion`)}</p>
      </div>
    </motion.div>
  );
}
