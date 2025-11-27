'use client';

import { useTranslations } from 'next-intl';
import { BlogCard } from './blog-card';
import type { BlogPost } from '../types/blog.types';

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  const t = useTranslations('blog');

  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">{t('noResults')}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <BlogCard key={post.id} post={post} index={index} />
      ))}
    </div>
  );
}
