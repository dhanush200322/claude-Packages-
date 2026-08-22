"use client"

import Link from "next/link"
import { sidebarNavigation } from "@/config/navigation"
import { useAppStore } from "@/store/use-app-store"
import { cn } from "@/lib/utils"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"

export function Sidebar() {
  const { sidebarOpen, toggleSidebar } = useAppStore()

  return (
    <aside
      className={cn(
        "flex flex-col border-r bg-sidebar text-sidebar-foreground transition-all duration-300 min-h-screen",
        sidebarOpen ? "w-64" : "w-16"
      )}
    >
      <div className="flex h-16 items-center justify-between px-4 border-b">
        {sidebarOpen && <span className="font-semibold text-sm">Navigation</span>}
        <button
          onClick={toggleSidebar}
          className="p-1 rounded-md hover:bg-sidebar-accent text-sidebar-foreground/70 hover:text-sidebar-foreground"
        >
          {sidebarOpen ? <PanelLeftClose className="h-5 w-5" /> : <PanelLeftOpen className="h-5 w-5" />}
        </button>
      </div>

      <nav className="flex-1 space-y-6 p-4 overflow-y-auto">
        {sidebarNavigation.map((group, idx) => (
          <div key={idx} className="space-y-2">
            {sidebarOpen && (
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {group.title}
              </h4>
            )}
            <ul className="space-y-1">
              {group.children?.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  >
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
