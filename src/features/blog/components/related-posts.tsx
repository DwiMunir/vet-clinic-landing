'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Clock } from 'lucide-react';
import { BLOG_POSTS_DATA } from '../data/blog-posts.data';

interface RelatedPostsProps {
  relatedSlugs: string[];
}

export function RelatedPosts({ relatedSlugs }: RelatedPostsProps) {
  const t = useTranslations('blogDetail');
  const tBlog = useTranslations('blog');

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        {t('relatedArticles')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {relatedSlugs.map((relatedSlug, index) => {
          const relatedData = BLOG_POSTS_DATA[relatedSlug];
          return (
            <motion.article
              key={relatedSlug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${relatedSlug}`} className="group block">
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                  <div className="relative h-56">
                    <Image
                      src={relatedData.image}
                      alt={t(`${relatedSlug}.title`)}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-semibold">
                        {tBlog(`categories.${relatedData.category}`)}
                      </span>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>
                          {relatedData.readTime} {tBlog('minRead')}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-secondary transition-colors">
                      {t(`${relatedSlug}.title`)}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.article>
          );
        })}
      </div>
    </>
  );
}
