export type BlogCategory =
  | 'health'
  | 'nutrition'
  | 'grooming'
  | 'behavior'
  | 'care';

export interface BlogPost {
  id: number;
  slug: string;
  image: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  author: string;
}

export interface BlogPostDetail {
  image: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  author: string;
  authorAvatar: string;
  relatedPosts: string[];
}

export interface BlogFilterState {
  searchQuery: string;
  selectedCategory: string;
}
