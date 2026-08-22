import { ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface PageContainerProps {
  children: ReactNode
  className?: string
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 py-6 w-full", className)}>
      {children}
    </div>
  )
}
