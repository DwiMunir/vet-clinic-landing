'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import type { BlogPostDetail } from '../types/blog.types';

interface BlogDetailHeaderProps {
  slug: string;
  postData: BlogPostDetail;
}

export function BlogDetailHeader({ slug, postData }: BlogDetailHeaderProps) {
  const t = useTranslations('blogDetail');
  const tBlog = useTranslations('blog');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Back Button */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-secondary mb-8 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>{t('backToBlog')}</span>
      </Link>

      {/* Category Badge */}
      <div className="mb-4">
        <span className="bg-secondary text-white text-sm font-semibold px-4 py-2 rounded-full">
          {tBlog(`categories.${postData.category}`)}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        {t(`${slug}.title`)}
      </h1>

      {/* Meta Info */}
      <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full overflow-hidden relative">
            <Image
              src={postData.authorAvatar}
              alt={postData.author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-gray-900">{postData.author}</p>
            <p className="text-sm text-gray-500">{t('author')}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={18} />
          <span>
            {new Date(postData.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={18} />
          <span>
            {postData.readTime} {tBlog('minRead')}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
