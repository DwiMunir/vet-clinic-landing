import type { BlogPost, BlogPostDetail } from '../types/blog.types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: 'cat-nutrition-guide',
    image:
      'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=800&q=80',
    category: 'nutrition',
    date: '2024-11-15',
    readTime: '5',
    author: 'Dr. Sarah Johnson',
  },
  {
    id: 2,
    slug: 'common-cat-diseases',
    image:
      'https://images.unsplash.com/photo-1573865526739-10c1dd7aa8a7?w=800&q=80',
    category: 'health',
    date: '2024-11-10',
    readTime: '7',
    author: 'Dr. Mike Chen',
  },
  {
    id: 3,
    slug: 'grooming-tips',
    image:
      'https://images.unsplash.com/photo-1501820488136-72669149e0d4?w=800&q=80',
    category: 'grooming',
    date: '2024-11-05',
    readTime: '4',
    author: 'Jessica Lee',
  },
  {
    id: 4,
    slug: 'cat-behavior-understanding',
    image:
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80',
    category: 'behavior',
    date: '2024-10-28',
    readTime: '6',
    author: 'Dr. Emily Roberts',
  },
  {
    id: 5,
    slug: 'kitten-care-basics',
    image:
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&q=80',
    category: 'care',
    date: '2024-10-20',
    readTime: '8',
    author: 'Dr. Sarah Johnson',
  },
  {
    id: 6,
    slug: 'senior-cat-health',
    image:
      'https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?w=800&q=80',
    category: 'health',
    date: '2024-10-15',
    readTime: '6',
    author: 'Dr. Mike Chen',
  },
];

export const BLOG_POSTS_DATA: Record<string, BlogPostDetail> = {
  'cat-nutrition-guide': {
    image:
      'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=1200&q=80',
    category: 'nutrition',
    date: '2024-11-15',
    readTime: '5',
    author: 'Dr. Sarah Johnson',
    authorAvatar:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80',
    relatedPosts: ['common-cat-diseases', 'kitten-care-basics'],
  },
  'common-cat-diseases': {
    image:
      'https://images.unsplash.com/photo-1573865526739-10c1dd7aa8a7?w=1200&q=80',
    category: 'health',
    date: '2024-11-10',
    readTime: '7',
    author: 'Dr. Mike Chen',
    authorAvatar:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&q=80',
    relatedPosts: ['cat-nutrition-guide', 'senior-cat-health'],
  },
  'grooming-tips': {
    image:
      'https://images.unsplash.com/photo-1501820488136-72669149e0d4?w=1200&q=80',
    category: 'grooming',
    date: '2024-11-05',
    readTime: '4',
    author: 'Jessica Lee',
    authorAvatar:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80',
    relatedPosts: ['cat-behavior-understanding', 'kitten-care-basics'],
  },
  'cat-behavior-understanding': {
    image:
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&q=80',
    category: 'behavior',
    date: '2024-10-28',
    readTime: '6',
    author: 'Dr. Emily Roberts',
    authorAvatar:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80',
    relatedPosts: ['grooming-tips', 'kitten-care-basics'],
  },
  'kitten-care-basics': {
    image:
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=1200&q=80',
    category: 'care',
    date: '2024-10-20',
    readTime: '8',
    author: 'Dr. Sarah Johnson',
    authorAvatar:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80',
    relatedPosts: ['cat-nutrition-guide', 'common-cat-diseases'],
  },
  'senior-cat-health': {
    image:
      'https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?w=1200&q=80',
    category: 'health',
    date: '2024-10-15',
    readTime: '6',
    author: 'Dr. Mike Chen',
    authorAvatar:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&q=80',
    relatedPosts: ['common-cat-diseases', 'cat-nutrition-guide'],
  },
};

export const BLOG_CATEGORIES = [
  'all',
  'health',
  'nutrition',
  'grooming',
  'behavior',
  'care',
] as const;
