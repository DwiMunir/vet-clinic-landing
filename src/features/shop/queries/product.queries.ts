import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api-client';
import { PRODUCTS } from '../data/products.data';
import type { Product } from '../types/product.types';

// Query keys
export const productKeys = {
  all: ['products'] as const,
  lists: () => [...productKeys.all, 'list'] as const,
  list: (filters?: { category?: string; search?: string }) =>
    [...productKeys.lists(), filters] as const,
  details: () => [...productKeys.all, 'detail'] as const,
  detail: (id: number) => [...productKeys.details(), id] as const,
} as const;

// Fetch all products
export function useProductsQuery(filters?: {
  category?: string;
  search?: string;
}) {
  return useQuery({
    queryKey: productKeys.list(filters),
    queryFn: async () => {
      // Real API call - uncomment when backend ready
      // return apiClient.get<Product[]>('/products', { params: filters });

      // Mock implementation using local data
      let filteredProducts = [...PRODUCTS];

      if (filters?.category && filters.category !== 'all') {
        filteredProducts = filteredProducts.filter(
          (p) => p.category === filters.category,
        );
      }

      if (filters?.search) {
        filteredProducts = filteredProducts.filter((p) =>
          p.name.toLowerCase().includes(filters.search!.toLowerCase()),
        );
      }

      return new Promise<Product[]>((resolve) => {
        setTimeout(() => resolve(filteredProducts), 500);
      });
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Fetch single product
export function useProductQuery(id: number) {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: async () => {
      // Real API call - uncomment when backend ready
      // return apiClient.get<Product>(`/products/${id}`);

      // Mock implementation
      const product = PRODUCTS.find((p) => p.id === id);
      return new Promise<Product | undefined>((resolve) => {
        setTimeout(() => resolve(product), 300);
      });
    },
  });
}

// Add to favorites mutation
export function useToggleFavoriteMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      productId,
      isFavorite,
    }: {
      productId: number;
      isFavorite: boolean;
    }) => {
      // Real API call - uncomment when backend ready
      // return apiClient.post('/favorites', { productId, isFavorite });

      // Mock implementation
      return new Promise<{ success: boolean }>((resolve) => {
        setTimeout(() => resolve({ success: true }), 300);
      });
    },
    onSuccess: () => {
      // Invalidate favorites query if you have one
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
  });
}
