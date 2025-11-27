export type ProductCategory = 'food' | 'toys' | 'accessories' | 'grooming' | 'health';
export type ProductBadge = 'bestseller' | 'new';

export interface Product {
  id: number;
  slug: string;
  name: string;
  image: string;
  category: ProductCategory;
  price: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  badge?: ProductBadge;
}

export interface ProductFilterState {
  searchQuery: string;
  selectedCategory: string;
  favorites: number[];
}
