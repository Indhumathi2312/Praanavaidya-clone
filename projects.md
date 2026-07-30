# HTML to Next.js Conversion Project

## Objective

Convert the provided HTML website into a **pixel-perfect Next.js application** while maintaining the **exact same UI, UX, layout, spacing, typography, colors, animations, interactions, and responsiveness**. The final output should be visually indistinguishable from the original HTML version across all supported screen sizes.

---

# Tech Stack

- Next.js (Latest Stable Version)
- JavaScript (.jsx) ONLY
- Tailwind CSS
- CSS Modules only if absolutely necessary
- No TypeScript
- No Bootstrap
- No Material UI
- No Chakra UI
- No jQuery

---

# Important Development Rules

## 1. Do NOT Create a New Project

The Next.js project is already created.

**Never create another project folder.**

Use the existing folder structure only.

Work inside the current project.

---

## 2. JavaScript Only

Use

- .jsx
- JavaScript

Do NOT use

- TypeScript
- .tsx
- .ts

No TypeScript configuration should be added.

---

## 3. Tailwind CSS Only

All styling must be done using Tailwind CSS.

Avoid writing custom CSS unless it is absolutely required for:

- Complex animations
- Browser-specific fixes
- Keyframes

Everything else should use Tailwind utility classes.

---

# Design Requirements

The converted website must match the HTML version exactly.

This includes:

- Layout
- Colors
- Typography
- Font weights
- Font sizes
- Line heights
- Letter spacing
- Icons
- Buttons
- Shadows
- Borders
- Border radius
- Hover effects
- Active states
- Animations
- Transitions
- Scroll behavior
- Spacing
- Alignment
- Card sizes
- Image sizes
- Backgrounds
- Gradients
- Opacity
- Overlays

Nothing should be redesigned.

Nothing should be modernized.

Nothing should be improved visually.

The goal is an exact clone.

---

# Responsive Requirements

The responsiveness must exactly match the original HTML version.

Support:

- 320px
- 375px
- 425px
- 640px
- 768px
- 1024px
- 1280px
- 1440px
- 1536px
- 1920px

Every breakpoint should behave exactly like the original website.

No layout shifts.

No broken alignment.

No overflow.

No unnecessary wrapping.

No CLS (Cumulative Layout Shift).

---

# Component Architecture

Split the UI into reusable components.

Example:

```
components/
    Navbar.jsx
    Hero.jsx
    Features.jsx
    About.jsx
    Services.jsx
    Testimonials.jsx
    FAQ.jsx
    CTA.jsx
    Footer.jsx
```

Create reusable UI where possible.

Example:

- Card
- Button
- Section Title
- Badge
- Feature Item
- Service Item

Avoid duplicate code.

Keep components small and maintainable.

---

# Folder Structure

Use the existing project folder only.

Example:

```
app/

components/

public/

styles/

utils/

```

Do not create unnecessary folders.

---

# Images

Never use online image URLs.

All images must come from local folders.

Example:

```
public/images/

public/assets/

public/icons/
```

Import images properly.

Optimize using Next.js Image component wherever possible.

---

# Videos

Videos must also be loaded from local folders.

Example:

```
public/videos/
```

Do not use CDN links.

Do not use remote video URLs.

---

# Icons

If icons already exist inside assets,

use those.

Otherwise use:

- Lucide React

or

- React Icons

Only if necessary.

---

# Fonts

Use the exact font from the HTML project.

If the font exists locally,

use local fonts.

Otherwise configure properly.

Font size, weight and spacing must match exactly.

---

# Animations

Recreate every animation.

Examples:

- Fade
- Slide
- Scale
- Hover
- Scroll animation
- Button interaction
- Navbar effects
- Reveal animation

Animation timing should match the original website.

---

# Navbar

Maintain exactly:

- Height
- Sticky behavior
- Fixed behavior
- Mobile menu
- Active links
- Hover effects
- Responsive menu

---

# Hero Section

Must exactly match:

- Heading
- Subheading
- CTA buttons
- Image placement
- Video placement
- Background
- Gradient
- Overlay
- Responsive behavior

---

# Sections

Every section must match the HTML version exactly.

Examples:

- Hero
- Features
- About
- Services
- Pricing
- Team
- Portfolio
- Testimonials
- FAQ
- CTA
- Footer

---

# Forms

Maintain:

- Validation
- Placeholder
- Focus states
- Error state
- Button loading state

---

# Performance

Optimize for:

- Fast loading

- Lazy loading

- Next.js Image

- Dynamic imports where needed

- Reusable components

- Clean rendering

Avoid unnecessary re-renders.

---

# Code Quality

Write code like a senior frontend engineer.

Requirements:

- Clean

- Readable

- Modular

- Reusable

- Maintainable

- Consistent naming

- Proper indentation

- Small components

- No duplicate code

- DRY Principle

- SOLID principles where applicable

---

# Accessibility

Maintain:

- Semantic HTML

- Proper alt text

- Keyboard navigation

- ARIA attributes where necessary

- Accessible buttons

- Accessible forms

---

# SEO

Use proper metadata.

Use semantic tags:

- header
- nav
- main
- section
- article
- footer

Maintain heading hierarchy.

---

# What Must NOT Change

Do NOT change:

- Design
- Layout
- Colors
- Font
- Typography
- Images
- Content
- Icons
- Section order
- Responsiveness
- Animations
- UX
- UI
- Button style

Everything should remain exactly like the HTML version.

---

# Expected Output

The final Next.js application should:

✅ Match the HTML website 100%

✅ Pixel-perfect UI

✅ Pixel-perfect responsiveness

✅ JSX only

✅ Tailwind CSS only

✅ Reusable components

✅ Clean folder structure

✅ No TypeScript

✅ No duplicate code

✅ Images loaded locally

✅ Videos loaded locally

✅ Optimized performance

✅ Production-ready code

✅ SEO-friendly

✅ Accessibility-friendly

✅ Easy to maintain

The finished project should be indistinguishable from the original HTML website while following modern Next.js development best practices.