import type { Product } from '../types/product.types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: 'premium-dog-food',
    name: 'Premium Dog Food - Natural & Healthy',
    image:
      'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=800&h=600',
    category: 'food',
    price: 450000,
    rating: 4.8,
    reviews: 156,
    inStock: true,
    badge: 'bestseller',
  },
  {
    id: 2,
    slug: 'interactive-cat-toy',
    name: 'Interactive Cat Toy - Smart Play',
    image:
      'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&h=600',
    category: 'toys',
    price: 185000,
    rating: 4.6,
    reviews: 89,
    inStock: true,
    badge: 'new',
  },
  {
    id: 3,
    slug: 'grooming-kit',
    name: 'Complete Grooming Kit - Professional',
    image:
      'https://images.unsplash.com/photo-1581888227599-779811939961?w=800&h=600',
    category: 'grooming',
    price: 325000,
    rating: 4.7,
    reviews: 124,
    inStock: true,
  },
  {
    id: 4,
    slug: 'pet-carrier',
    name: 'Pet Carrier - Travel Comfort',
    image:
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600',
    category: 'accessories',
    price: 575000,
    rating: 4.9,
    reviews: 203,
    inStock: false,
  },
  {
    id: 5,
    slug: 'dental-care-set',
    name: 'Dental Care Set - Complete Health',
    image:
      'https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=800&h=600',
    category: 'health',
    price: 240000,
    rating: 4.5,
    reviews: 67,
    inStock: true,
    badge: 'bestseller',
  },
  {
    id: 6,
    slug: 'cozy-pet-bed',
    name: 'Cozy Pet Bed - Ultra Soft',
    image:
      'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600',
    category: 'accessories',
    price: 385000,
    rating: 4.8,
    reviews: 178,
    inStock: true,
  },
  {
    id: 7,
    slug: 'organic-treats',
    name: 'Organic Treats - Natural Ingredients',
    image:
      'https://images.unsplash.com/photo-1583512603806-077998240c7a?w=800&h=600',
    category: 'food',
    price: 150000,
    rating: 4.7,
    reviews: 134,
    inStock: true,
    badge: 'new',
  },
  {
    id: 8,
    slug: 'smart-water-fountain',
    name: 'Smart Water Fountain - Auto Fill',
    image:
      'https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=800&h=600',
    category: 'accessories',
    price: 475000,
    rating: 4.6,
    reviews: 92,
    inStock: true,
    badge: 'new',
  },
];

export const CATEGORIES = [
  'all',
  'food',
  'toys',
  'accessories',
  'grooming',
  'health',
] as const;
