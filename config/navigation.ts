import { NavItem } from "@/types"

export const mainNavigation: NavItem[] = [
  { title: "Overview", href: "/" },
  { title: "Components", href: "#components" },
  { title: "Design System", href: "#design-system" },
  { title: "Architecture", href: "#architecture" },
]

export const sidebarNavigation: NavItem[] = [
  {
    title: "Foundation",
    href: "/",
    children: [
      { title: "Overview", href: "/" },
      { title: "Design System", href: "#tokens" },
    ],
  },
  {
    title: "UI Primitives",
    href: "#primitives",
    children: [
      { title: "Buttons & Inputs", href: "#forms" },
      { title: "Dialogs & Overlays", href: "#overlays" },
      { title: "Tables & Charts", href: "#data" },
      { title: "AI Components", href: "#ai" },
    ],
  },
]
