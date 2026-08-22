# Master Frontend Project Generation Guide & Prompt Template

This guide documents the official, 10-step repeatable workflow for generating any new production frontend application using the **Premium Universal Frontend Foundation** and the **UI/UX Pro Max AI Design Engine**.

---

## 🏛️ Core Architectural Principle

> **The Master Foundation Repository is FROZEN.**

```text
MASTER FOUNDATION REPOSITORY (Frozen baseline)
        │
        ├── Premium Packages Suite
        ├── 24 Core UI Primitives
        ├── 8 Layout & 3 Navigation Systems
        ├── Form, Table, Chart & AI Systems
        ├── Design Tokens & Theme Engine
        └── UI/UX Pro Max AI Skills Engine (.claude/skills/ui-ux-pro-max/)
        │
        ▼ (Clone / Fork into a new workspace)
        │
NEW PROJECT REPOSITORY
        ├── Customize Design Tokens & Brand (config/, globals.css)
        ├── Assemble Layouts & Foundation Components
        ├── Build Project-Specific Pages (app/dashboard/, etc.)
        └── Connect to Backend / API
```

---

## 🔄 The 10-Step Project Generation Workflow

### STEP 1 — Define Project Requirements
Collect key domain inputs from the user or project spec:
- **Project Name & Industry** (e.g., AI SaaS, Fintech, E-commerce, Healthcare, CRM)
- **Target Users & Primary Goal**
- **Required Pages & Key Features**
- **Brand Colors, Theme Preference & Typography**

### STEP 2 — UI/UX Pro Max Design Intelligence Analysis
Use the built-in AI design skill (`.claude/skills/ui-ux-pro-max/`) to select optimal design tokens based on industry research:
```bash
python skills/ui-ux-pro-max/scripts/search.py "<product_type> <industry> <keywords>" --design-system
```
This automatically recommends:
- **UI Style**: Minimalism, Glassmorphism, Neumorphism, Bento Grid, Dark Mode, etc.
- **Color Palette**: Curated HSL color tokens for Light/Dark modes.
- **Typography Pairing**: Heading and body font pairings matching industry expectations.
- **Micro-Interactions**: Easing curves, duration tokens, reduced motion fallbacks.

### STEP 3 — Select & Map Foundation Components
Map project feature requirements directly to pre-built foundation primitives:

| Industry / Application | Recommended Foundation Primitives |
| :--- | :--- |
| **AI SaaS / AI Agent** | `Sidebar`, `Topbar`, `DashboardLayout`, `AIChatInterface`, `KPICard`, `AreaChartComponent`, `Button`, `Badge`, `Tabs`, `Dialog`, `Sonner Toast` |
| **E-Commerce Platform** | `Navbar`, `Footer`, `FeatureGrid`, `Card`, `Badge`, `Button`, `Select`, `Input`, `Dialog`, `Pagination`, `Sonner Toast` |
| **Fintech / Analytics** | `DashboardLayout`, `Sidebar`, `Topbar`, `KPICard`, `AreaChartComponent`, `DataTable`, `Select`, `Badge`, `Breadcrumbs`, `Pagination`, `Dialog` |
| **CRM / Enterprise** | `DashboardLayout`, `Sidebar`, `DataTable`, `FormField`, `Checkbox`, `RadioGroup`, `Select`, `Button`, `Badge`, `Tabs`, `Sonner Toast` |
| **Marketing / Landing** | `Navbar`, `Footer`, `MarketingHero`, `FeatureGrid`, `AuthCard`, `Accordion`, `Button`, `Badge` |

### STEP 4 — Customize Project-Specific Design Tokens
Customize brand identity in `config/site.ts` and HSL CSS variables in `app/globals.css` without altering primitive components:
```css
:root {
  --primary: 220 90% 56%;       /* Custom Brand Color */
  --primary-foreground: 0 0% 100%;
  --radius: 0.75rem;            /* Custom Border Radius */
}
```

### STEP 5 — Create Clean Project Directory Structure
Ensure standard Next.js App Router structure:
```text
app/
├── globals.css
├── layout.tsx
├── page.tsx
├── providers.tsx
├── (auth)/
│   └── login/page.tsx
├── dashboard/
│   └── page.tsx
components/
├── ui/           <-- Foundation Primitives
├── layout/       <-- Layout Components
├── navigation/   <-- Nav & Breadcrumbs
├── forms/        <-- Form Fields & Zod
├── tables/       <-- Data Table
├── charts/       <-- Recharts
└── ai/           <-- AI Chat Stream
config/
hooks/
lib/
store/
types/
```

### STEP 6 — Build Project Pages
Assemble pages using composed foundation primitives and generic blocks. Keep business logic separate from component primitives.

### STEP 7 — Enforce Responsive Breakpoints
Verify layout fluid behavior across 4 standard breakpoints:
- **Mobile** (`375px`)
- **Tablet** (`768px`)
- **Desktop** (`1024px`)
- **Large Desktop** (`1440px`)

### STEP 8 — Enforce Accessibility Standards
Verify:
- Keyboard navigation & focus visibility (`focus-visible:ring-2`)
- Semantic HTML tags (`<nav>`, `<header>`, `<main>`, `<aside>`, `<footer>`)
- ARIA labels on icon buttons
- Color contrast ratio (4.5:1 minimum)

### STEP 9 — Implement Purposeful Motion
Use Framer Motion variants from `lib/animations.ts` (`fadeIn`, `fadeUp`, `scaleIn`, `slideIn`, `staggerContainer`). Ensure reduced motion is respected.

### STEP 10 — Run Verification & Build Checks
Every generated project must pass the 3-step verification suite:
```bash
# 1. Type Check
npx tsc --noEmit

# 2. Lint Check
npm run lint

# 3. Production Build
npm run build
```

---

## 📋 Standard Project Generation Checklist

Use this checklist during project creation:

- [ ] **Project Requirements Analyzed** (Industry, Users, Main Goal)
- [ ] **Industry Identified** (SaaS, E-commerce, Fintech, Healthcare, etc.)
- [ ] **UI/UX Pro Max Consulted** (`.claude/skills/ui-ux-pro-max`)
- [ ] **Design Style & Direction Selected**
- [ ] **Color Palette Configured** (`app/globals.css`)
- [ ] **Typography Configured** (`app/globals.css` / `tailwind.config.js`)
- [ ] **Foundation Components Mapped**
- [ ] **Project Structure Initialized**
- [ ] **Pages Assembled** (`app/`)
- [ ] **Responsive Breakpoints Verified** (Mobile, Tablet, Desktop)
- [ ] **Accessibility Standards Verified** (Focus rings, ARIA, Keyboard nav)
- [ ] **Animations Configured** (`lib/animations.ts`)
- [ ] **Light / Dark / System Theme Verified**
- [ ] **TypeScript Passed** (`npx tsc --noEmit`)
- [ ] **Lint Passed** (`npm run lint`)
- [ ] **Production Build Passed** (`npm run build`)

---

## 🤖 Master Project Prompt Template

Copy and fill this prompt when requesting an AI coding agent to generate a new frontend project from this Master Foundation:

```markdown
# NEW FRONTEND PROJECT GENERATION REQUEST

You are operating on a fresh clone of the **Premium Universal Frontend Foundation**.

DO NOT rebuild or redesign the core component primitives. Use the existing foundation components, hooks, animations, and design skills engine.

## Project Specification

- **Project Name**: [e.g., PulseAI]
- **Industry**: [e.g., Healthcare AI SaaS]
- **Target Users**: [e.g., Medical Researchers & Clinicians]
- **Primary Goal**: [e.g., Analyze patient telemetry data with real-time AI assistant]
- **Required Pages**:
  1. Overview Dashboard (`app/page.tsx`)
  2. Patient Analytics (`app/analytics/page.tsx`)
  3. AI Telemetry Assistant (`app/assistant/page.tsx`)
  4. Settings (`app/settings/page.tsx`)
- **Design Direction**: [e.g., Clean Clinical Dark Mode with Vibrant Accent]
- **Brand Primary Color**: [e.g., Teal HSL: 173 58% 39%]
- **Theme Support**: Light / Dark / System (Default: Dark)
- **Special Requirements**: Real-time AI chat stream, KPI metrics cards, and data table filtering.

## Required Execution Steps

1. **Analyze Design Intelligence**: Use `.claude/skills/ui-ux-pro-max/` to select the color palette, typography, spacing, and responsive layout guidelines for the specified industry.
2. **Configure Design Tokens**: Apply project colors and theme preferences in `app/globals.css` and `config/site.ts`.
3. **Assemble Pages**: Compose the requested pages in `app/` using pre-built components from `components/ui/`, `components/layout/`, `components/tables/`, `components/charts/`, and `components/ai/`.
4. **Enforce Responsiveness & Accessibility**: Verify mobile drawer nav, focus rings, keyboard accessibility, and reduced-motion handling.
5. **Run Final Validation**:
   - `npx tsc --noEmit`
   - `npm run lint`
   - `npm run build`
6. **Report Summary**: Provide a clear report of pages created and validation results.
```

---

## 🔒 Final Reminder

```text
PREMIUM PACKAGES + REUSABLE PRIMITIVES + DESIGN SYSTEM + UI/UX PRO MAX SKILLS
=============================================================================
                     UNIVERSAL MASTER FOUNDATION (Frozen)

                                    +

                       NEW PROJECT SPECIFICATION
=============================================================================
                   NEW PRODUCTION FRONTEND APPLICATION
```
