# Portfolio Development Guidelines

## Stack Overview

### Core Technologies
- **Framework**: Next.js 16.1.1 with App Router
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS v4.1.18 with PostCSS
- **UI Components**: Radix UI primitives
- **Package Manager**: pnpm 9.15.0
- **Node Version**: >=18.0.0

### Key Dependencies
- **UI Framework**:
  - @radix-ui/react-accordion, avatar, separator, slot, tooltip
  - class-variance-authority (CVA) for component variants
  - tailwind-merge + clsx for conditional styling

- **Animation & Motion**:
  - motion 12.23.27
  - tailwindcss-animate

- **Icons**:
  - lucide-react
  - @radix-ui/react-icons

- **Content**:
  - @content-collections for MDX
  - react-markdown with remark-gfm and rehype-pretty-code
  - shiki for syntax highlighting

- **Theme**:
  - next-themes for dark/light mode
  - Custom theme provider with proper hydration

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/
│   ├── ui/             # Reusable UI components (shadcn/ui style)
│   ├── section/        # Page sections
│   ├── magicui/        # Special UI effects
│   └── mdx/            # MDX components
├── lib/                # Utilities and helpers
└── data/               # Static data (resume.tsx)
```

## Development Rules

### 1. Component Development

#### Naming Conventions
- **Components**: PascalCase (e.g., `ProjectCard.tsx`)
- **Files**: kebab-case for folders, PascalCase for component files
- **Props**: camelCase interfaces with descriptive names

#### Component Structure
```tsx
// Bad
export default function Component() {
  return <div>...</div>
}

// Good
interface ComponentProps {
  title: string;
  variant?: "default" | "secondary";
}

export default function Component({ title, variant = "default" }: ComponentProps) {
  return (
    <div className={cn(/* styles */)}>
      {title}
    </div>
  );
}
```

#### Using Class Variance Authority (CVA)
All UI components with variants MUST use CVA:

```tsx
const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        default: "variant-classes",
        secondary: "other-variant-classes",
      },
      size: {
        sm: "size-classes",
        md: "size-classes",
        lg: "size-classes",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);
```

### 2. TypeScript Rules

#### Strict Typing
- All components must have typed props
- Use interfaces for object shapes
- Leverage utility types when appropriate
- NO `any` types allowed

#### Import Organization
```tsx
// 1. React/Next.js imports
import { type ClassValue } from "clsx";
import * as React from "react";

// 2. Third-party libraries
import { cva, type VariantProps } from "class-variance-authority";

// 3. Internal imports (absolute paths)
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
```

### 3. Styling Guidelines

#### Tailwind Best Practices
- Use the `cn()` utility for conditional classes
- Avoid inline styles unless absolutely necessary
- Leverage CSS custom properties for theming
- Use responsive prefixes (`sm:`, `md:`, `lg:`) appropriately

#### Component Styling Pattern
```tsx
const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, ...props }, ref) => (
    <div
      className={cn(
        "base-classes",
        "hover:state-classes",
        "focus:state-classes",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
```

### 4. Reusability Patterns

#### UI Components (shadcn/ui style)
- Location: `src/components/ui/`
- Export both component and variants
- Use forwardRef for DOM elements
- Support `asChild` prop when using Radix primitives

#### Composition over Inheritance
```tsx
// Bad: Creating many similar components
const PrimaryButton = () => <Button variant="default">...</Button>
const SecondaryButton = () => <Button variant="secondary">...</Button>

// Good: Use variant system
<Button variant="default">...</Button>
<Button variant="secondary">...</Button>
```

### 5. Data Management

#### Static Data
- Keep in `src/data/` directory
- Use TypeScript interfaces for type safety
- Export const objects (not functions)

#### Component Data
- Use props for passing data
- Avoid direct imports of data in components
- Create data-fetching hooks when needed

### 6. Testing Requirements

#### Mandatory Testing Flow
1. **Unit Tests**: For all utility functions and hooks
2. **Component Tests**: For all UI components
3. **Integration Tests**: For user flows
4. **E2E Tests**: For critical paths

#### Testing Framework
- Use Jest/Vitest for unit tests
- Use React Testing Library for components
- Use Playwright/Cypress for E2E tests

### 7. Code Quality

#### ESLint Configuration
- Follow Next.js recommended config
- Use strict TypeScript rules
- No console.log in production code
- Proper import/export organization

#### Git Workflow
- Feature branches: `feature/description`
- Conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`
- All PRs must pass tests and linting
- Require reviews for all changes

## Mandatory Feature Development Process

### 1. Planning Phase
- Create task list using TaskCreate tool
- Define clear acceptance criteria
- Identify all affected components

### 2. Development Phase
- Update task to "in_progress"
- Write code following all guidelines
- Test as you go (unit tests first)

### 3. Testing Phase
- Run `npm run lint` - must pass
- Run all tests - must pass
- Manual testing in dev mode
- Visual regression testing if applicable

### 4. Completion Phase
- Update task to "completed"
- All tests must be green
- No console errors or warnings
- Code review completed

## Custom Skills Needed

Based on project analysis, we need these custom skills:

### 1. `/component` Skill
Creates new reusable components with proper structure:
- Generates component with TypeScript interfaces
- Includes CVA variants if needed
- Creates index barrel export
- Adds unit test template

### 2. `/test` Skill
Runs comprehensive test suite:
- Unit tests for new code
- Component integration tests
- E2E tests for features
- Coverage report generation

### 3. `/validate` Skill
Validates code quality:
- ESLint checking
- TypeScript compilation
- Accessibility audit
- Performance metrics

### 4. `/optimize` Skill
Optimizes existing code:
- Removes duplicate code
- Improves component reusability
- Optimizes bundle size
- Enhances performance

## Common Patterns

### 1. Responsive Design
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Cards */}
</div>
```

### 2. Theme Support
```tsx
<div className="bg-background text-foreground">
  {/* Theme-aware content */}
</div>
```

### 3. Loading States
```tsx
{isLoading ? (
  <Skeleton className="h-4 w-full" />
) : (
  <Content />
)}
```

### 4. Error Boundaries
```tsx
<ErrorBoundary fallback={<ErrorComponent />}>
  <RiskyComponent />
</ErrorBoundary>
```

## Performance Guidelines

### 1. Bundle Optimization
- Dynamic imports for large components
- Proper image optimization (next/image)
- Code splitting by routes

### 2. Runtime Performance
- Use React.memo for expensive components
- Implement virtual scrolling for long lists
- Debounce expensive handlers

### 3. SEO Best Practices
- Proper meta tags for all pages
- Semantic HTML5 structure
- Structured data where applicable
- OpenGraph and Twitter cards

## Security Guidelines

### 1. Content Security
- Sanitize all user inputs
- Use CSP headers (configured)
- No inline scripts or styles

### 2. API Security
- Validate all API responses
- Use HTTPS for all requests
- Implement rate limiting if needed

## Conclusion

This project maintains high standards for code quality, performance, and maintainability. Following these guidelines ensures:
- Consistent codebase
- Easy maintenance
- High performance
- Excellent developer experience

All features must be 100% tested and validated before completion. No exceptions.