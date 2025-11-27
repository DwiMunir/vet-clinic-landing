import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/api-client';
import { BLOG_POSTS, BLOG_POSTS_DATA } from '../data/blog-posts.data';
import type { BlogPost, BlogPostDetail } from '../types/blog.types';

// Query keys
export const blogKeys = {
  all: ['blog'] as const,
  lists: () => [...blogKeys.all, 'list'] as const,
  list: (filters?: { category?: string; search?: string }) =>
    [...blogKeys.lists(), filters] as const,
  details: () => [...blogKeys.all, 'detail'] as const,
  detail: (slug: string) => [...blogKeys.details(), slug] as const,
} as const;

// Fetch all blog posts
export function useBlogPostsQuery(filters?: {
  category?: string;
  search?: string;
}) {
  return useQuery({
    queryKey: blogKeys.list(filters),
    queryFn: async () => {
      // Real API call - uncomment when backend ready
      // return apiClient.get<BlogPost[]>('/blog/posts', { params: filters });

      // Mock implementation using local data
      let filteredPosts = [...BLOG_POSTS];

      if (filters?.category && filters.category !== 'all') {
        filteredPosts = filteredPosts.filter(
          (p) => p.category === filters.category,
        );
      }

      if (filters?.search) {
        filteredPosts = filteredPosts.filter((p) =>
          p.slug.toLowerCase().includes(filters.search!.toLowerCase()),
        );
      }

      return new Promise<BlogPost[]>((resolve) => {
        setTimeout(() => resolve(filteredPosts), 400);
      });
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
}

// Fetch single blog post detail
export function useBlogPostQuery(slug: string) {
  return useQuery({
    queryKey: blogKeys.detail(slug),
    queryFn: async () => {
      // Real API call - uncomment when backend ready
      // return apiClient.get<BlogPostDetail>(`/blog/posts/${slug}`);

      // Mock implementation
      const postDetail = BLOG_POSTS_DATA[slug];
      return new Promise<BlogPostDetail | undefined>((resolve) => {
        setTimeout(() => resolve(postDetail), 300);
      });
    },
    enabled: !!slug,
  });
}
