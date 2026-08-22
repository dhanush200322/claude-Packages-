import { ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface SplitLayoutProps {
  left: ReactNode
  right: ReactNode
  className?: string
}

export function SplitLayout({ left, right, className }: SplitLayoutProps) {
  return (
    <div className={cn("grid min-h-screen grid-cols-1 lg:grid-cols-2", className)}>
      <div className="flex items-center justify-center p-8 border-b lg:border-b-0 lg:border-r bg-background">
        {left}
      </div>
      <div className="flex items-center justify-center p-8 bg-muted/20">
        {right}
      </div>
    </div>
  )
}
