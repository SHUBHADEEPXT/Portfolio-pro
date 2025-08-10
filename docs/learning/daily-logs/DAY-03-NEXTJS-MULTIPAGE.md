# Day 3: Next.js Multi-Page Portfolio

**Date**: August 10, 2025
**Time Spent**: 3 hours
**Focus**: File-based routing, reusable Navigation, professional hero section

---

## 🎯 What I Accomplished Today

### ✅ Completed Tasks
- [x] Created 4 routes: `/`, `/about`, `/projects`, `/contact`
- [x] Built reusable `<Navigation />` with Next `<Link>` + active state
- [x] Implemented a clean hero section on Home
- [x] Verified fast client-side transitions + direct URL access
- [x] Updated docs: site map, navigation spec, and troubleshooting notes

### 📦 Artifacts Added
- `docs/architecture/site-map.md`
- `docs/architecture/navigation.md`
- `docs/troubleshooting/nextjs-routing.md`
- `daily_progress/challenges_faced_day03.md`

### 🗂️ App Structure (high level)

src/
└── app/
    ├── page.tsx               ← Home (/)
    ├── about/
    │   └── page.tsx           ← (/about)
    ├── projects/
    │   └── page.tsx           ← (/projects)
    ├── contact/
    │   └── page.tsx           ← (/contact)
    └── components/
        └── Navigation.tsx     ← Reusable navbar

---

## 🛠️ How I Built It (Steps I Followed)

- File-based routing mental model
- Created folders under app/ → each folder has a page.tsx → becomes a route.
- Used Next.js <Link> for in-app navigation (no full page reloads).
- Reusable Navigation
- Added src/app/components/Navigation.tsx as a client component.
- Used usePathname() to detect the active route and set aria-current="page".
- Home Hero
- Wrote concise headline + subtext for DevOps portfolio.
- Ensured responsive spacing and readable typography.
- Smoke Checks
- Direct URL access works for all routes.
- Back/forward browser navigation behaves correctly.
- Active link styling updates reliably on navigation.

---

## 🧠 Key Learnings & Notes

- Routing: Folder structure → URL mapping; app/<route>/page.tsx is required for each page.
- Client vs Server: Interactivity (active link) needs "use client" + usePathname() in Navigation.tsx.
- Accessibility: Use aria-current="page" for the active nav item; keep focus outlines.

---

## 🚧 Problems Faced & Fixes

1. Account Workflow Confusion
- Challenge: Started Day 2 development on main account (Shubhadeepxt) instead of contributor account (Difindot)
- Impact: Had to transfer work and establish proper dual-account workflow
- Solution: Committed existing work, switched accounts, established feature branch workflow
**Learning: Importance of consistent development workflow from project start**

2. Git Remote Configuration Issues
- Challenge: Local repository pointing to wrong remote when trying to push as DIFINDOXt
- Error: Permission denied to DIFINDOXT when pushing to SHUBHADEEPXT's repo
- Confusion: Understanding difference between origin vs contributor remotes
- Solution: Used correct remote (contributor) for DIFINDOXt's fork
**Learning: Remote management in collaborative Git workflows**

3. Pull Request Timing Issues
- Challenge: Created PR after first commit, then made 2 additional commits
- Problem: Additional commits had no active PR after closing the first one
- Confusion: How to handle commits made after PR closure
- Solution: Created new PR for the additional commits
**Learning: PR lifecycle and handling subsequent commits**

---

##📅 Tomorrow’s Plan (Day 4)

- Build polished Nav (mobile hamburger + focus states)
- Improve Hero (CTA + highlight cards)
- Add Projects placeholder cards (copy + layout only)

---
