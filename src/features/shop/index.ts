// Types
export type { Product, ProductCategory, ProductBadge } from './types/product.types';

// Data
export { PRODUCTS, CATEGORIES } from './data/products.data';

// Hooks
export { useProductFilter } from './hooks/use-product-filter';
export { useFavorites } from './hooks/use-favorites';

// Queries (React Query)
export {
  useProductsQuery,
  useProductQuery,
  useToggleFavoriteMutation,
  productKeys,
} from './queries/product.queries';

// Components
export { ShopHero } from './components/shop-hero';
export { ShopSearchBar } from './components/shop-search-bar';
export { CategoryFilter } from './components/category-filter';
export { ProductCard } from './components/product-card';
export { ProductGrid } from './components/product-grid';
export { PromoSection } from './components/promo-section';
