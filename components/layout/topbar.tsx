"use client"

import { ReactNode } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon, Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"

export interface TopbarProps {
  breadcrumbs?: ReactNode
  userProfile?: { name: string; avatar?: string }
}

export function Topbar({ breadcrumbs, userProfile }: TopbarProps) {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-background/80 px-6 backdrop-blur-md">
      <div className="flex items-center gap-4">
        {breadcrumbs}
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-9 h-9" />
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle Theme"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>

        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="h-4 w-4" />
        </Button>

        {userProfile && (
          <Avatar src={userProfile.avatar} fallback={userProfile.name.substring(0, 2)} className="h-8 w-8" />
        )}
      </div>
    </header>
  )
}
