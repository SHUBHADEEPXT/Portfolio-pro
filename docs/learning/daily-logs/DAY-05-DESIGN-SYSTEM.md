# 📘 Day 5 – Tailwind CSS & Design System

**Date**: August 17, 2025
**Branch**: `feature/day-05-design-system` (contributor → PR to main) 
**Focus**: Tailwind CSS setup, design tokens, Hero section, image handling, reusable components

---

## ✅ What We Did

1. **Tailwind CSS v4 Integration**
   - Installed Tailwind, PostCSS, and Autoprefixer in `frontend/package.json`
   - Fixed compatibility issues (v3 → v4) by rewriting `tailwind.config.js` in the new format
   - Defined custom design tokens (colors, shadows, border radius)
   - Updated `globals.css` with proper `@tailwind` directives
   - Commit: *Add Tailwind CSS v4 setup with custom design tokens*

2. **Project Structure Updates**
   - Created `frontend/src/components/` for reusable UI components
   - Created `frontend/src/lib/` for helper functions
   - Added `frontend/public/images/` for assets (profile, hero background, project thumbnails)
   - Commit: *Add project structure for components, lib, and assets*

3. **Hero Section Implementation**
   - Built `Hero.tsx` with name, tagline, CTAs, and profile image
   - Profile picture correctly served from `/public/images/hero/profile.jpg`
   - Commit: *Implement Hero component with profile image and CTA buttons*

4. **Page Integration**
   - Updated `app/page.tsx` (home) to render `Hero`
   - Updated `layout.tsx` to import global styles
   - Adjusted About and Projects pages to follow the design system
   - Commit: *Integrate Hero and design system updates into main pages*

5. **Troubleshooting Fixed**
   - **Tailwind theme error** (`theme(colors.neutral.400)`) → fixed config quoting
   - **Image not found** → solved by placing files in correct `/public/images` path
   - **PostCSS conflict** → kept one `postcss.config.js`, disabled old `.mjs`
   - Commit: *Fix Tailwind config and image resource issues*

---

## 🚀 Deliverables
- Hero section working with responsive design
- Tailwind v4 fully configured with tokens
- Profile picture rendering correctly
- Components + assets folder structure established
- Styled UI restored (gradients, shadows, rounded cards, badges)

---

## 📝 Insights
- **One source of truth**: Single PostCSS config prevents Tailwind from being skipped 
- **Quote carefully**: Always wrap `theme('colors...')` in quotes 
- **Global imports matter**: Place `@tailwind base/components/utilities` at the top of `globals.css`
- **Restart after config changes**: `rm -rf .next && npm run dev` 

---

## 🔮 What’s Next (Day 6 Preview)
- Build UI primitives under `src/components/ui/` (Button, Badge, Card)
- Replace ad-hoc classes with `cn()` helper + design tokens 
- Add placeholder images and test `next/image` settings for optimization 
