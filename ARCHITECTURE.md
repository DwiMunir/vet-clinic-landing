# Project Structure

## Directory Organization

```
vet-clinic-landing/
├── public/                 # Static assets
│   └── images/            # Image assets
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   │
│   ├── components/        # React components
│   │   ├── ui/           # Base UI components (reusable)
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── card.tsx
│   │   │   ├── container.tsx
│   │   │   └── section.tsx
│   │   │
│   │   ├── layout/       # Layout components
│   │   │   ├── header.tsx
│   │   │   └── footer.tsx
│   │   │
│   │   └── sections/     # Page sections (features)
│   │       ├── hero-section.tsx
│   │       ├── services-section.tsx
│   │       ├── about-section.tsx
│   │       ├── testimonials-section.tsx
│   │       └── contact-section.tsx
│   │
│   ├── lib/              # Utility functions
│   │   ├── utils.ts      # General utilities (cn, debounce, etc)
│   │   └── validations.ts # Form validation logic
│   │
│   ├── types/            # TypeScript definitions
│   │   └── index.ts      # All type definitions
│   │
│   ├── constants/        # Static data & constants
│   │   └── index.ts      # App constants, services, testimonials
│   │
│   └── config/           # Configuration files
│       ├── site.ts       # Site metadata configuration
│       └── env.ts        # Environment variables
│
├── biome.json            # Biome linter config
├── components.json       # shadcn/ui config
├── next.config.ts        # Next.js config
├── package.json          # Dependencies
├── postcss.config.mjs    # PostCSS config
├── tsconfig.json         # TypeScript config
└── README.md            # Project documentation
```

## Design Patterns

### 1. Atomic Design Principles
- **Atoms**: Basic UI components (Button, Input)
- **Molecules**: Card components, form fields
- **Organisms**: Header, Footer, Sections
- **Templates**: Layout components
- **Pages**: Complete pages (page.tsx)

### 2. Separation of Concerns
- **Presentation**: Components (UI rendering)
- **Logic**: Lib folder (utilities, validation)
- **Data**: Constants (static content)
- **Configuration**: Config folder (env, site settings)

### 3. Component Composition
Components dibangun dengan composition pattern:
```typescript
<Section>
  <Container>
    <SectionHeader />
    <Card>
      <CardHeader />
      <CardContent />
    </Card>
  </Container>
</Section>
```

### 4. Type-Safe Data Management
Semua data memiliki TypeScript interfaces:
- Compile-time type checking
- IDE autocomplete
- Better refactoring support

### 5. Configuration-Driven Development
Content dan settings di-manage melalui config files:
- Easy to update content
- No need to modify components
- Consistent data structure

## Scalability Features

### Easy to Extend
- Add new service: Update constants
- Add new section: Create component, import to page
- Add new form field: Update types + validation

### Performance Optimized
- Server Components by default
- Client Components only when needed
- Utility functions for optimization (debounce, throttle)

### Maintainable Codebase
- Clear folder structure
- Single responsibility principle
- Consistent naming conventions
- Comprehensive type safety
