'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { BlogPost } from '../types/blog.types';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  const t = useTranslations('blog');

  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.article
        className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer h-full flex flex-col"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
      >
        {/* Image */}
        <div className="relative min-h-56 max-h-56 overflow-hidden">
          <Image
            src={post.image}
            alt={t(`posts.${post.slug}.title`)}
            fill
            className="object-cover transition-transform hover:scale-110 duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
              {t(`categories.${post.category}`)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>
                {post.readTime} {t('minRead')}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
            {t(`posts.${post.slug}.title`)}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {t(`posts.${post.slug}.excerpt`)}
          </p>

          {/* Author & CTA */}
          <div className="flex flex-col items-end justify-end pt-4 border-t flex-1">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-secondary hover:text-secondary/80 group"
              >
                {t('readMore')}
                <ArrowRight
                  size={16}
                  className="ml-1 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
