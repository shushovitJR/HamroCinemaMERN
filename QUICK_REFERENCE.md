# Quick Reference - Design System & Components

## CSS Utility Classes

### Buttons
```jsx
// Primary action (red background)
<button className="btn-primary">Click me</button>

// Secondary action (gray background)
<button className="btn-secondary">Cancel</button>

// Success action (green background)
<button className="btn-success">Save</button>

// Danger action (red background)
<button className="btn-danger">Delete</button>

// Outline button
<button className="btn-outline">Outline Button</button>
```

### Cards
```jsx
// Standard card
<div className="card">Content here</div>

// Compact card (smaller padding)
<div className="card-compact">Content here</div>
```

### Badges
```jsx
// Default badge
<span className="badge">Label</span>

// Primary badge (red-tinted)
<span className="badge-primary">Active</span>

// Success badge (green-tinted)
<span className="badge-success">Completed</span>
```

### Alerts
```jsx
// Success alert
<div className="alert alert-success">Success message</div>

// Error alert
<div className="alert alert-error">Error message</div>

// Warning alert
<div className="alert alert-warning">Warning message</div>

// Info alert
<div className="alert alert-info">Info message</div>
```

### Container & Spacing
```jsx
// Full-width with responsive padding
<div className="container-fluid">Content</div>

// Section padding (py-16 to py-24)
<section className="section-padding">Content</section>

// Content area padding
<div className="content-padding">Content</div>
```

### Gradients
```jsx
// Red gradient for emphasis
<div className="gradient-primary">Content</div>

// Dark background gradient
<div className="gradient-dark">Content</div>
```

---

## Responsive Grid Examples

### 1-4 Column Grid (Movies, Bookings)
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
  {/* Items automatically adjust based on screen size */}
</div>
```

### 2-Column Grid
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {/* Mobile: 1 column, Tablet+: 2 columns */}
</div>
```

### 4-Column Grid
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* Mobile: 1 col, Tablet: 2 col, Desktop: 4 col */}
</div>
```

---

## Typography Classes

### Headings
```jsx
<h1>Page Title</h1>           {/* 3xl-5xl, bold */}
<h2>Section Title</h2>        {/* 2xl-4xl, bold */}
<h3>Subsection</h3>           {/* xl-2xl, semibold */}
<h4>Heading</h4>              {/* lg-xl, semibold */}
<h5>Sub-heading</h5>          {/* base-lg, semibold */}
<h6>Minor heading</h6>        {/* sm-base, semibold */}
```

### Text Truncation
```jsx
// Single line truncation
<p className="text-truncate">Very long text...</p>

// Multi-line ellipsis
<p className="line-clamp-2">Text that wraps...</p>
```

---

## Mobile-First Responsive Pattern

### Base (Mobile First)
```jsx
// Default: mobile styles
<div className="px-4 text-sm">Content</div>
```

### Tablet Enhancement
```jsx
// Add tablet styles with sm:, md: prefixes
<div className="px-4 sm:px-6 md:px-16 text-sm sm:text-base md:text-lg">
  Content
</div>
```

### Desktop Enhancement
```jsx
// Add desktop styles with lg:, xl: prefixes
<div className="px-4 sm:px-6 md:px-16 lg:px-36 text-sm sm:text-base md:text-lg lg:text-xl">
  Content
</div>
```

---

## Common Component Patterns

### Responsive Container
```jsx
<div className="container-fluid section-padding">
  <h2>Section Title</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* Grid items */}
  </div>
</div>
```

### Card Component
```jsx
<div className="card hover:shadow-xl transition-shadow">
  <h3>Card Title</h3>
  <p>Card content here</p>
  <button className="btn-primary mt-4">Action</button>
</div>
```

### Table with Mobile Fallback
```jsx
{/* Desktop table */}
<div className="hidden md:block overflow-x-auto">
  <table className="w-full">
    {/* Table structure */}
  </table>
</div>

{/* Mobile cards */}
<div className="md:hidden space-y-4">
  {data.map(item => (
    <div key={item.id} className="card">
      {/* Card structure */}
    </div>
  ))}
</div>
```

### Empty State
```jsx
<div className="card text-center py-16">
  <HeartIcon className="w-16 h-16 mx-auto text-gray-600 mb-4" />
  <h3 className="text-xl font-semibold text-gray-300 mb-2">No Items</h3>
  <p className="text-gray-500 mb-6">Add your first item now</p>
  <Link to="/path" className="btn-primary inline-block">Browse</Link>
</div>
```

---

## Color Classes Quick Reference

### Text Colors
- `text-white` - Main text
- `text-gray-300` - Secondary text
- `text-gray-400` - Tertiary text
- `text-gray-500` - Disabled/muted text
- `text-red-500` - Alert/error text

### Background Colors
- `bg-black` - Main background
- `bg-gray-950` - Card background
- `bg-gray-900` - Hover background
- `bg-red-600` - Primary action
- `bg-green-600` - Success action

### Border Colors
- `border-gray-800` - Default border
- `border-red-600` - Highlight border
- `border-gray-700` - Subtle border

---

## Hover & Interaction Effects

### Scale on Hover
```jsx
<div className="group hover:scale-105 transition-transform">
  <img className="group-hover:scale-110 transition-transform" src="" />
</div>
```

### Color Change on Hover
```jsx
<a className="text-gray-400 hover:text-red-500 transition-colors">Link</a>
```

### Shadow on Hover
```jsx
<div className="card hover:shadow-xl transition-shadow">Content</div>
```

### Combined Effects
```jsx
<button className="px-4 py-2 bg-red-600 hover:bg-red-700 hover:shadow-lg 
  active:scale-95 transition-all duration-200">
  Click me
</button>
```

---

## Spacing Reference

### Padding
- `p-2` = 8px
- `p-3` = 12px
- `p-4` = 16px
- `p-6` = 24px
- `p-8` = 32px

### Margin
- `m-2` = 8px
- `m-3` = 12px
- `m-4` = 16px
- `m-6` = 24px
- `m-8` = 32px

### Gap (in grids/flex)
- `gap-2` = 8px
- `gap-3` = 12px
- `gap-4` = 16px
- `gap-5` = 20px
- `gap-6` = 24px

---

## Breakpoint Reference

```
Mobile:   < 640px    (no prefix)
Tablet:   640px+     sm:
Medium:   768px+     md:
Desktop:  1024px+    lg:
Wide:     1280px+    xl:
```

### Usage Example
```jsx
// This means:
// Mobile: 12px padding, Mobile: text-sm
// Tablet: 16px padding, Tablet: text-base
// Desktop: 24px padding, Desktop: text-lg
<div className="px-3 sm:px-4 md:px-6 text-sm sm:text-base md:text-lg">
  Responsive content
</div>
```

---

## Form Styling

### Input Fields
```jsx
<input 
  type="text"
  className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white 
    focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/30 
    transition-colors"
  placeholder="Enter text"
/>
```

### Textarea
```jsx
<textarea 
  className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white 
    focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/30 
    transition-colors resize-vertical"
  placeholder="Enter text"
/>
```

### Select
```jsx
<select 
  className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white 
    focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/30 
    transition-colors"
>
  <option>Option 1</option>
</select>
```

---

## Icon Usage

### With Text
```jsx
import { Heart, Star, Share } from 'lucide-react'

<button className="flex items-center gap-2">
  <Heart className="w-5 h-5" />
  Add to Favourites
</button>
```

### Icon Only (Badge)
```jsx
<div className="flex items-center gap-2">
  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
  <span>4.5</span>
</div>
```

### Colored Icons
```jsx
<AlertCircle className="w-5 h-5 text-red-500" />
<CheckCircle className="w-5 h-5 text-green-500" />
<InfoIcon className="w-5 h-5 text-blue-500" />
```

---

## Common Patterns

### Section with Header
```jsx
<div className="container-fluid section-padding">
  <div className="mb-10">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
      Section Title
    </h2>
    <p className="text-gray-400">Section description</p>
  </div>
  {/* Content here */}
</div>
```

### Navigation Highlight
```jsx
<Link 
  to="/path"
  className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
    isActive 
      ? 'bg-red-600/20 text-red-500 border-l-2 border-red-600 font-semibold' 
      : 'text-gray-400 hover:text-white hover:bg-gray-900'
  }`}
>
  <Icon className="w-5 h-5" />
  <span>Menu Item</span>
</Link>
```

### Responsive Image
```jsx
<img 
  src={url}
  alt="Description"
  className="w-full aspect-video object-cover rounded-lg hover:scale-105 
    transition-transform duration-300"
/>
```

---

## Accessibility Checklist

- ✅ Use semantic HTML (header, nav, main, section, footer)
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Alt text on all images
- ✅ Labels associated with form inputs
- ✅ Color + text for all information
- ✅ Focus indicators visible on interactive elements
- ✅ Sufficient color contrast (WCAG AA)
- ✅ Touch targets at least 44px x 44px
- ✅ Keyboard navigation support
- ✅ ARIA labels where needed

---

## Performance Tips

1. Use `transition` sparingly - prefer `transition-colors`, `transition-transform`, etc.
2. Use `transform` and `opacity` for animations (GPU accelerated)
3. Avoid `animate-` unless necessary
4. Use `will-change` sparingly
5. Optimize images with proper `object-fit`
6. Use `lazy` loading for off-screen images
7. Minimize custom CSS - use Tailwind utilities
8. Group related styles together

---

This quick reference should help with implementation and consistency across the application!
