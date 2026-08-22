"use client"

import { ReactNode } from "react"
import { Sidebar } from "./sidebar"
import { Topbar } from "./topbar"

export interface DashboardLayoutProps {
  children: ReactNode
  breadcrumbs?: ReactNode
  userProfile?: { name: string; avatar?: string }
}

export function DashboardLayout({ children, breadcrumbs, userProfile }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-x-hidden">
        <Topbar breadcrumbs={breadcrumbs} userProfile={userProfile} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
