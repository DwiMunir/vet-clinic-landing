# VetCare Clinic - Landing Page

Modern, scalable landing page untuk klinik hewan menggunakan Next.js 14+ dengan design pattern yang sesuai industri.

## 🏗️ Architecture & Design Patterns

### 1. **Feature-Based Organization**
```
src/
├── app/                    # Next.js App Router
├── components/
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Layout components (Header, Footer)
│   └── sections/          # Feature sections (Hero, Services, etc)
├── lib/                   # Utility functions
├── types/                 # TypeScript types & interfaces
├── constants/             # App constants & data
└── config/                # Configuration files
```

### 2. **Component Patterns**

#### **Composition Pattern**
Components dibangun dengan composition untuk reusability maksimal:
- `Container` untuk consistent spacing
- `Section` untuk section layout
- `SectionHeader` untuk section titles

#### **Variant System (CVA)**
Menggunakan `class-variance-authority` untuk type-safe variant system pada Button component:
```typescript
variant: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
size: 'default' | 'sm' | 'lg' | 'icon'
```

### 3. **Type Safety**

**Strict TypeScript** dengan interfaces untuk semua data:
- `Service`, `Testimonial`, `TeamMember`
- `ContactFormData`, `ApiResponse`
- Form validation dengan type-safe error handling

### 4. **Separation of Concerns**

- **Data Layer**: Constants file untuk static data
- **Logic Layer**: Validation & utility functions
- **Presentation Layer**: Reusable components
- **Configuration**: Environment & site config

### 5. **Scalability Features**

#### **Configuration Management**
```typescript
// config/env.ts - Environment variables dengan type safety
// config/site.ts - Site metadata
```

#### **Validation Layer**
```typescript
// lib/validations.ts - Form validation logic
validateContactForm(data) // Returns typed errors
```

#### **Utility Functions**
```typescript
// lib/utils.ts
cn() // className merger
debounce() // Performance optimization
throttle() // Event handling
```

## 🎨 Design System

### UI Components
- ✅ Button dengan multiple variants
- ✅ Input & Textarea
- ✅ Card system (Header, Content, Footer)
- ✅ Container untuk consistent layout
- ✅ Section dengan reusable header

### Layout Components
- ✅ Responsive Header dengan mobile menu
- ✅ Footer dengan contact info & social links

### Feature Sections
- ✅ Hero dengan CTA & stats
- ✅ Services grid
- ✅ About dengan features
- ✅ Testimonials dengan rating
- ✅ Contact form dengan validation

## 🚀 Best Practices Implemented

### 1. **Performance**
- Server Components by default
- Client Components hanya untuk interaktivitas
- Debounce & throttle utilities ready

### 2. **Accessibility**
- Semantic HTML
- ARIA labels
- Keyboard navigation support

### 3. **Code Quality**
- TypeScript strict mode
- Consistent naming conventions
- Clear file structure

### 4. **Maintainability**
- Single Responsibility Principle
- DRY (Don't Repeat Yourself)
- Clear component boundaries

### 5. **Extensibility**
- Easy to add new services
- Modular component system
- Config-driven content

## 📦 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: Radix UI primitives
- **Icons**: Lucide React
- **Linting**: Biome

## 🔧 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Lint & format
npm run lint
npm run format
```

## 📝 Adding New Features

### Menambah Service Baru
Edit `src/constants/index.ts`:
```typescript
export const SERVICES: Service[] = [
  {
    id: 'new-service',
    title: 'New Service',
    description: '...',
    icon: 'IconName', // dari lucide-react
    features: ['Feature 1', 'Feature 2']
  }
]
```

### Menambah Section Baru
1. Buat component di `src/components/sections/new-section.tsx`
2. Import & tambahkan ke `src/app/page.tsx`
3. Update navigation di `src/constants/index.ts`

### Menambah Form Field
1. Update type di `src/types/index.ts`
2. Update validation di `src/lib/validations.ts`
3. Update form component

## 🎯 Future Enhancements

- [ ] API integration (contact form submission)
- [ ] Image optimization dengan next/image
- [ ] Animation dengan framer-motion
- [ ] Blog section dengan MDX
- [ ] Multi-language support (i18n)
- [ ] Dark mode implementation
- [ ] Analytics integration
- [ ] SEO optimization dengan metadata
- [ ] Testing (Jest, React Testing Library)
- [ ] Storybook untuk component documentation

## 📚 Documentation

Lihat [ARCHITECTURE.md](./ARCHITECTURE.md) untuk detail lengkap tentang arsitektur dan design patterns.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📄 License

Private project - All rights reserved
