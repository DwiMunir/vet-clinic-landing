# Axios & React Query Implementation Guide

## 📚 Overview

Project ini menggunakan:
- **Axios** untuk HTTP client dengan interceptors
- **TanStack React Query** untuk server state management
- **React Hook Form** (ready to use)

---

## 🗂️ Struktur File

```
/src/lib/
├── axios.ts              # Axios instance dengan interceptors
├── api-client.ts         # Generic API client functions
└── query-provider.tsx    # React Query provider wrapper

/src/features/auth/
├── queries/
│   └── auth.queries.ts   # Auth queries & mutations
└── services/
    └── auth.service.ts   # Auth API calls dengan axios

/src/features/shop/
└── queries/
    └── product.queries.ts  # Product queries

/src/features/blog/
└── queries/
    └── blog.queries.ts     # Blog queries
```

---

## ⚙️ Configuration

### 1. Environment Variables

Create `.env.local`:
```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### 2. Axios Instance (`/src/lib/axios.ts`)

Features:
- ✅ Base URL configuration
- ✅ Request interceptor (auto-add auth token)
- ✅ Response interceptor (error handling)
- ✅ Automatic 401 redirect to signin

### 3. React Query Setup (`/src/lib/query-provider.tsx`)

Default options:
- `staleTime: 60 * 1000` (1 minute)
- `gcTime: 5 * 60 * 1000` (5 minutes)
- `refetchOnWindowFocus: false`
- `retry: 1`

---

## 🚀 Usage Examples

### Auth Feature

#### Sign In with Mutation
```tsx
import { useSignInMutation } from '@/features/auth';

function SignInPage() {
  const signInMutation = useSignInMutation();

  const handleSubmit = (data: SignInFormData) => {
    signInMutation.mutate(data, {
      onSuccess: (response) => {
        console.log('Logged in:', response.user);
      },
      onError: (error) => {
        console.error('Login failed:', error);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <button 
        type="submit" 
        disabled={signInMutation.isPending}
      >
        {signInMutation.isPending ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  );
}
```

#### Get Current User
```tsx
import { useGetMeQuery } from '@/features/auth';

function UserProfile() {
  const { data: user, isLoading, error } = useGetMeQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading user</div>;

  return <div>Welcome, {user?.name}</div>;
}
```

### Shop Feature

#### Fetch Products with Filters
```tsx
import { useProductsQuery } from '@/features/shop';

function ProductList() {
  const { data: products, isLoading } = useProductsQuery({
    category: 'food',
    search: 'premium'
  });

  if (isLoading) return <div>Loading products...</div>;

  return (
    <div>
      {products?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

#### Fetch Single Product
```tsx
import { useProductQuery } from '@/features/shop';

function ProductDetail({ productId }: { productId: number }) {
  const { data: product, isLoading } = useProductQuery(productId);

  if (isLoading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return <div>{product.name}</div>;
}
```

### Blog Feature

#### Fetch Blog Posts
```tsx
import { useBlogPostsQuery } from '@/features/blog';

function BlogList() {
  const { data: posts, isLoading } = useBlogPostsQuery({
    category: 'health'
  });

  if (isLoading) return <div>Loading posts...</div>;

  return (
    <div>
      {posts?.map(post => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
```

---

## 🔧 Direct API Calls (without React Query)

### Using API Client
```tsx
import { apiClient } from '@/lib/api-client';

// GET request
const data = await apiClient.get<Product[]>('/products');

// POST request
const response = await apiClient.post<AuthResponse>('/auth/signin', {
  email: 'user@example.com',
  password: 'password123'
});

// PUT request
await apiClient.put<Product>(`/products/${id}`, updatedData);

// DELETE request
await apiClient.delete(`/products/${id}`);
```

### Using Axios Instance Directly
```tsx
import { api } from '@/lib/axios';

const response = await api.get('/products');
const data = response.data;
```

---

## 📝 Creating New Queries

### Step 1: Create Query Keys
```typescript
export const featureKeys = {
  all: ['feature'] as const,
  lists: () => [...featureKeys.all, 'list'] as const,
  list: (filters?: any) => [...featureKeys.lists(), filters] as const,
  details: () => [...featureKeys.all, 'detail'] as const,
  detail: (id: number) => [...featureKeys.details(), id] as const,
};
```

### Step 2: Create Query Hook
```typescript
export function useFeatureQuery(id: number) {
  return useQuery({
    queryKey: featureKeys.detail(id),
    queryFn: () => apiClient.get<Feature>(`/features/${id}`),
    enabled: !!id,
  });
}
```

### Step 3: Create Mutation Hook
```typescript
export function useCreateFeatureMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateFeatureData) => 
      apiClient.post<Feature>('/features', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: featureKeys.lists() });
    },
  });
}
```

---

## 🎯 Best Practices

### 1. Query Keys
- Use consistent naming: `featureKeys.all`, `featureKeys.lists()`, etc.
- Include filters in query keys for proper caching

### 2. Error Handling
- Axios interceptor handles global errors (401, 500, etc.)
- Add specific error handling in `onError` callbacks

### 3. Loading States
- Use `isPending` for mutations
- Use `isLoading` for queries
- Use `isFetching` to show background refetch

### 4. Optimistic Updates
```typescript
useMutation({
  mutationFn: updateItem,
  onMutate: async (newData) => {
    await queryClient.cancelQueries({ queryKey: ['items'] });
    const previous = queryClient.getQueryData(['items']);
    queryClient.setQueryData(['items'], (old) => [...old, newData]);
    return { previous };
  },
  onError: (err, newData, context) => {
    queryClient.setQueryData(['items'], context.previous);
  },
});
```

---

## 🔐 Authentication Flow

1. User submits login form
2. `useSignInMutation` calls API
3. Response contains `token`
4. Token stored in `localStorage`
5. Axios interceptor adds token to all requests
6. On 401 error, user redirected to `/signin`

---

## 🛠️ Migration from Mock to Real API

### Current State (Mock)
```typescript
// Mock implementation
return new Promise((resolve) => {
  setTimeout(() => resolve(mockData), 1000);
});
```

### After Backend Ready
```typescript
// Real API call
return apiClient.post<AuthResponse>('/auth/signin', data);
```

Just uncomment the real API calls in:
- `/features/auth/services/auth.service.ts`
- `/features/shop/queries/product.queries.ts`
- `/features/blog/queries/blog.queries.ts`

---

## 📊 React Query DevTools

DevTools automatically included in development mode.
Access at bottom-right corner of your app.

Features:
- View all queries and their state
- Manually refetch queries
- Clear cache
- See query timings

---

## 🆘 Common Issues

### Issue: "Cannot read property 'data' of undefined"
**Solution**: Check if query is enabled and has loaded
```tsx
const { data, isLoading } = useQuery(...);
if (isLoading || !data) return <Loading />;
```

### Issue: Query not refetching
**Solution**: Check `staleTime` and manually invalidate
```tsx
queryClient.invalidateQueries({ queryKey: ['key'] });
```

### Issue: 401 Unauthorized
**Solution**: Check if token exists in localStorage
```tsx
const token = localStorage.getItem('auth_token');
```

---

## 📚 Resources

- [TanStack Query Docs](https://tanstack.com/query/latest)
- [Axios Docs](https://axios-http.com/)
- [React Hook Form](https://react-hook-form.com/)
