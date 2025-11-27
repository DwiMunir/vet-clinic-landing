'use client';

import { useState, useMemo } from 'react';
import type { BlogPost } from '../types/blog.types';

export function useBlogFilter(posts: BlogPost[]) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'all' || post.category === selectedCategory;
      const matchesSearch = post.slug
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [posts, searchQuery, selectedCategory]);

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredPosts,
  };
}
