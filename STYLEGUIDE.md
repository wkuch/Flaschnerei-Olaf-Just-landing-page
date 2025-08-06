# Flaschnerei Olaf Just - Website Styleguide

This document outlines the design system and styling conventions used across the Flaschnerei Olaf Just website.

## 🎨 Brand Colors

### Primary Palette
- **Orange Primary**: `#ea580c` (orange-600) - Main brand color, CTAs, accents
- **Orange Hover**: `#dc2626` (orange-700) - Hover states, focus states
- **White**: `#ffffff` - Text on dark backgrounds, card backgrounds
- **Slate-50**: `#f8fafc` - Light section backgrounds
- **Slate-800**: `#1e293b` - Primary dark text, headers
- **Slate-900**: `#0f172a` - Footer, navigation backgrounds

### Semantic Colors
- **Background**: `hsl(0 0% 100%)` - Main page background
- **Foreground**: `hsl(222.2 84% 4.9%)` - Primary text
- **Muted**: `hsl(215.4 16.3% 46.9%)` - Secondary text
- **Border**: `hsl(214.3 31.8% 91.4%)` - Component borders

## 📝 Typography

### Font Families
- **Headings**: `'Playfair Display', serif` - Elegant, craftsmanship feel
- **Body Text**: `'Source Sans Pro', system-ui, -apple-system, sans-serif` - Clean, readable

### Custom Typography Classes
```css
.heading-primary {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.heading-secondary {
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.2;
}

.heading-accent {
  font-family: 'Playfair Display', serif;
  font-weight: 800;
  letter-spacing: -0.02em;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
```

### Typography Scale
- **Hero Heading**: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl`
- **Section Headings**: `text-4xl`
- **Card Titles**: `text-xl` or `text-2xl`
- **Body Text**: `text-lg sm:text-xl md:text-2xl` (hero), `text-base` (standard)
- **Small Text**: `text-sm` or `text-xs`

## 🧩 Component Library

### UI Framework
Built on **shadcn/ui** with Tailwind CSS customizations.

### Core Components
- `Button` - Primary and outline variants
- `Card` - Content containers with shadows
- `Separator` - Section dividers
- Icons from **Lucide React**

### Button Patterns
```tsx
// Primary CTA
<Button 
  size="lg" 
  className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
>

// Outline variant
<Button 
  variant="outline" 
  size="lg" 
  className="border-white text-white bg-transparent hover:bg-white hover:text-slate-800"
>
```

### Card Patterns
```tsx
<Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-orange-600 craft-card hover-lift overflow-hidden">
```

## 📐 Layout System

### Container Pattern
```tsx
<div className="container mx-auto px-4">
  <div className="max-w-6xl mx-auto"> // For hero sections
  <div className="max-w-4xl mx-auto"> // For content pages
  <div className="max-w-3xl mx-auto"> // For text content
</div>
```

### Grid Systems
- **Services**: `grid md:grid-cols-2 lg:grid-cols-3 gap-8`
- **Footer**: `grid md:grid-cols-3 gap-8`
- **Responsive Flex**: `flex flex-col sm:flex-row gap-4 sm:gap-6`

### Spacing Scale
- **Section Padding**: `py-20` (standard), `py-24` (hero)
- **Content Margins**: `mb-8`, `mb-12`, `mb-16`
- **Element Gaps**: `gap-4`, `gap-6`, `gap-8`
- **Container Padding**: `px-4` (mobile), `px-2` (when needed)

## 🎭 Visual Design Language

### Craftsmanship-Inspired Patterns
```css
/* Background patterns for sections */
.services-pattern {
  background-image: 
    radial-gradient(circle at 3px 3px, rgba(0,0,0,0.025) 1px, transparent 0),
    linear-gradient(45deg, rgba(0,0,0,0.008) 50%, transparent 50%);
  background-size: 16px 16px, 24px 24px;
}

.section-pattern-1 {
  background-image: 
    radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 0);
  background-size: 20px 20px;
}
```

### Decorative Elements
```css
.craft-divider {
  position: relative;
}

.craft-divider::before {
  /* Orange gradient line */
  width: 60px;
  height: 2px;
  background: linear-gradient(to right, transparent, #ea580c, transparent);
}

.craft-divider::after {
  /* Central orange dot */
  width: 8px;
  height: 8px;
  background: #ea580c;
  border-radius: 50%;
  box-shadow: 0 0 0 2px white, 0 0 0 3px #ea580c;
}
```

### Hover Effects
```css
.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(234, 88, 12, 0.1);
}
```

## 📱 Responsive Design

### Breakpoint Strategy
- **Mobile First**: Base styles for mobile
- **SM**: `640px` - Small tablets, large phones
- **MD**: `768px` - Tablets
- **LG**: `1024px` - Desktops
- **XL**: `1280px` - Large desktops

### Common Responsive Patterns
```tsx
// Text sizing
className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"

// Spacing adjustments
className="px-6 sm:px-8 py-3 sm:py-4"

// Layout changes
className="flex flex-col sm:flex-row gap-4 sm:gap-6"

// Grid responsiveness
className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
```

## 🏗️ Component Usage Patterns

### Header Component
- Fixed header with `sticky top-0 z-50`
- Logo + brand name combination
- Contact info hidden on mobile (`hidden md:flex`)
- Orange accent color for brand text and icons

### Hero Section
- Rotating background images with smooth transitions
- Dark overlay for text readability: `bg-gradient-to-br from-black/70 via-slate-900/80 to-black/70`
- Responsive text sizing and spacing
- Two-button CTA pattern (primary + outline)

### Services Section  
- Card-based layout with left orange border
- Hover effects with `hover-lift` class
- Square aspect ratio images with hover zoom
- Background pattern for visual interest

### Footer
- Three-column layout on desktop
- Dark slate background (`bg-slate-900`)
- Orange hover states for links
- Separator line before copyright

### Legal Pages (Impressum/Datenschutz)
- Light background (`bg-slate-50`)
- Structured content with clear hierarchy
- Orange accent links
- Consistent header/footer inclusion

## 🎯 Interactive Elements

### Links & Hover States
- **Standard Links**: `hover:text-orange-600 transition-colors`
- **Phone/Email Links**: Include Lucide icons with orange color
- **Router Links**: Use React Router `Link` component

### Transitions
- **Standard**: `transition-colors` (200ms default)
- **Complex**: `transition-shadow duration-300`
- **Transforms**: `transition-all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`

### Focus States
- Form elements use shadcn/ui defaults
- Buttons maintain brand orange focus colors
- Links use underline and color change

## 📋 Code Conventions

### Class Ordering
1. Layout (flex, grid, position)
2. Sizing (width, height, padding, margin)
3. Typography (font, text-size, text-color)
4. Background & borders
5. Effects (shadow, transitions)
6. Custom classes (craft-*, hover-*, etc.)

### Custom Class Naming
- `craft-*` - Craftsmanship-themed decorative elements
- `hover-*` - Hover effect classes
- `heading-*` - Typography variants
- `*-pattern` - Background pattern classes
- `premium-*` - Enhanced styling classes

## 🚀 Performance Considerations

### Image Optimization
- Use WebP format where possible
- Implement lazy loading for hero carousel
- Optimize image sizes for different viewports

### CSS Organization
- Custom styles in `src/index.css`
- Layer-based organization (`@layer base`)
- Utility-first approach with Tailwind
- Minimal custom CSS for specific design elements

## 🔍 Accessibility

### Color Contrast
- Orange (#ea580c) on white meets WCAG AA standards
- Dark slate text on light backgrounds for readability
- Sufficient contrast for all text elements

### Interactive Elements
- Focus indicators for keyboard navigation
- Semantic HTML structure
- Alt text for all images
- Proper heading hierarchy (h1 → h2 → h3)

---

*This styleguide should be updated as the design system evolves. Always reference this document when adding new components or pages to maintain consistency.*