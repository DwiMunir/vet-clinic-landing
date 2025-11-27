# Clean Code Architecture - Feature-Based Structure

## ✅ Struktur Baru yang Sudah Dibuat

### `/src/features/` - Feature Modules (Isolated & Focused)

```
src/features/
└── auth/
    ├── components/           # UI Components khusus auth
    │   ├── auth-form-header.tsx
    │   ├── form-divider.tsx
    │   ├── password-input.tsx
    │   ├── signin-form.tsx
    │   ├── signup-form.tsx
    │   ├── social-button.tsx
    │   └── text-input.tsx
    ├── hooks/               # Custom hooks untuk auth logic
    │   ├── use-signin-form.ts
    │   └── use-signup-form.ts
    ├── schemas/             # Validation schemas (Zod)
    │   └── auth.schema.ts
    ├── services/            # API calls & business logic
    │   └── auth.service.ts
    ├── types/               # TypeScript interfaces
    │   └── auth.types.ts
    └── index.ts             # Barrel export

```

## 🎯 Keuntungan Struktur Baru

### 1. **Isolation** - Setiap feature terisolasi
- Mudah dipindah/hapus tanpa mempengaruhi feature lain
- Dependencies jelas terlihat

### 2. **Fokus** - Satu folder = satu feature
- `auth/` berisi semua yang berhubungan dengan authentication
- Tidak perlu cari-cari di berbagai folder

### 3. **Scalability** - Mudah ditambahkan
```
src/features/
├── auth/
├── shop/      <- Next feature
├── blog/      <- Next feature
└── booking/   <- Next feature
```

### 4. **Maintainability** - Mudah di-maintain
- Semua terkait satu feature ada di satu tempat
- Update cukup edit di folder feature tersebut

### 5. **Clean Code** - Lebih readable
**Before:**
```tsx
// page.tsx (200+ lines)
- form state
- validation
- API calls
- UI components
- all mixed together
```

**After:**
```tsx
// page.tsx (40 lines)
import { AuthFormHeader, SignInForm } from '@/features/auth';

export default function SignInPage() {
  return <SignInForm />;
}
```

## 📝 Cara Menggunakan

### Import dari feature module:
```tsx
import { 
  SignInForm,
  useSignInForm,
  authService,
  type SignInFormData 
} from '@/features/auth';
```

### Pages menjadi sangat simple:
```tsx
// src/app/[locale]/signin/page.tsx
export default function SignInPage() {
  const t = useTranslations('auth');
  
  return (
    <>
      <Header />
      <main>
        <AuthFormHeader title={t('signIn.title')} subtitle={t('signIn.subtitle')} />
        <SignInForm />
      </main>
      <Footer />
    </>
  );
}
```

## 🚀 Next Steps

Lanjutkan pattern yang sama untuk feature lain:

1. **Shop Feature** (`/features/shop/`)
   - components/ (ProductCard, ProductGrid, CategoryFilter, etc)
   - hooks/ (useProductFilter, useFavorites, etc)
   - types/ (Product, Category, etc)
   - data/ (products.data.ts)

2. **Blog Feature** (`/features/blog/`)
   - components/ (BlogCard, BlogDetail, etc)
   - hooks/ (useBlogFilter, etc)
   - types/ (BlogPost, etc)
   - data/ (blog-posts.data.ts)

3. **Cart Feature** (`/features/cart/`)
   - components/ (CartDrawer, CartItem, etc)
   - hooks/ (useCart - pindah dari contexts)
   - types/ (CartItem, etc)

## 💡 Best Practices

1. **Satu feature = satu folder**
2. **Barrel exports** (`index.ts`) untuk clean imports
3. **Hooks untuk logic**, components untuk UI
4. **Services untuk API calls**
5. **Types untuk TypeScript safety**
6. **Schemas untuk validation**

---

File ini adalah dokumentasi struktur baru. Hapus file ini setelah semua feature selesai di-refactor.
