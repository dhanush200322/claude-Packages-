# Premium Universal Frontend Package & Skills Library

A domain-independent, production-ready frontend foundation combining Next.js App Router, Tailwind CSS, Framer Motion, Zustand, TanStack Query, and the `.claude/skills/ui-ux-pro-max` AI design engine.

---

## 🌟 What This Repository Is

This repository is **NOT** a finished website, SaaS app, or demo dashboard.

It is a **Master Frontend Foundation** designed with a single goal:

> **Build once. Reuse everywhere.**

Any future web application — SaaS, AI agent platform, e-commerce, CRM, fintech, healthcare, portfolio, agency, marketing landing page, or internal dashboard — can be initialized directly from this foundation.

---

## 📦 Master Architecture & Stack

```text
cluade Packages/
├── .claude/
│   └── skills/
│       └── ui-ux-pro-max/            <-- Preserved AI Design Intelligence Skill
├── app/
│   ├── layout.tsx                    <-- Global Root Layout with Providers & Fonts
│   ├── page.tsx                      <-- Minimal Foundation Overview
│   ├── providers.tsx                 <-- Theme, TanStack Query, Sonner Toast Providers
│   └── globals.css                   <-- CSS Variables & Design Tokens (Light/Dark/System)
├── components/
│   ├── ui/                           <-- Core Primitives (Button, Input, Card, Badge, Switch, Dialog, Select, Dropdown, Skeleton, Tabs, Accordion, Tooltip, Avatar, Separator, Toast, etc.)
│   ├── layout/                       <-- Layout Primitives (Navbar, Sidebar, Topbar, Footer, PageHeader, PageContainer, SplitLayout)
│   ├── navigation/                   <-- Navigation (Breadcrumbs, MobileDrawer, Pagination)
│   ├── forms/                        <-- React Hook Form + Zod Form Field Wrappers
│   ├── tables/                       <-- TanStack Table Integration with Sorting & Filtering
│   ├── charts/                       <-- Recharts Components & KPI Cards
│   ├── ai/                           <-- AI Chat, Message, Tool Call & Agent Cards
│   └── blocks/                       <-- Domain-Independent Marketing, Feature & Auth Blocks
├── hooks/                            <-- Reusable Custom Hooks (useMediaQuery, etc.)
├── lib/
│   ├── utils.ts                      <-- cn() helper (clsx + tailwind-merge)
│   ├── animations.ts                 <-- Framer Motion presets & reduced-motion handling
│   └── query-client.ts               <-- TanStack Query client configuration
├── store/
│   └── use-app-store.ts              <-- Zustand global UI state store
├── types/
│   └── index.ts                      <-- Strict TypeScript interfaces
├── config/
│   ├── site.ts                       <-- Site Identity Config
│   ├── theme.ts                      <-- Theme Tokens & Radius Config
│   ├── navigation.ts                 <-- Navigation Link Hierarchies
│   └── features.ts                   <-- Feature Flags & Toggles
├── tailwind.config.js                <-- Tailwind CSS Configuration with HSL Color Tokens
├── tsconfig.json                     <-- Strict TypeScript Config with Path Aliases (@/*)
└── README.md                         <-- Master Documentation
```

---

## 🛠️ Core Technology Suite

- **Framework**: Next.js 15 (App Router) + React 18 / 19 + TypeScript (Strict Mode)
- **Styling**: Tailwind CSS + `clsx` + `tailwind-merge` + `class-variance-authority`
- **Animations**: Framer Motion 11 (Reduced-motion aware)
- **Icons**: Lucide React
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Form Validation**: React Hook Form + Zod
- **Tables & Charts**: TanStack Table + Recharts
- **Graph & Diagrams**: ReactFlow + Mermaid
- **Notifications & Themes**: Sonner + Next Themes (Light/Dark/System)
- **AI Design Engine**: `.claude/skills/ui-ux-pro-max` (67 styles, 96 palettes, 57 font pairings)

---

## 🚀 How to Use This Foundation for a New Project

1. **Clone / Initialize this repository** as your project base.
2. **Consult the AI Design Skill**:
   Use `.claude/skills/ui-ux-pro-max` to select the color palette, typography, layout pattern, and animations tailored to your target industry.
3. **Customize `config/site.ts`**:
   Update `name`, `description`, and `links` without touching core components.
4. **Build your pages**:
   Compose pages using the reusable primitives from `@/components/ui/`, `@/components/layout/`, `@/components/forms/`, `@/components/tables/`, `@/components/charts/`, and `@/components/ai/`.

---

## 🧪 Verification Commands

Verify project integrity using the built-in commands:

```bash
# 1. Install dependencies
npm install

# 2. Run TypeScript strict type-checking
npx tsc --noEmit

# 3. Create production build
npm run build
```

---

## 🔒 License & Usage

Private / Proprietary — Reusable Master Frontend Boilerplate System.
