"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  position?: "top" | "bottom" | "left" | "right"
}

export function Tooltip({ content, children, position = "top" }: TooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false)

  const positionClasses = {
    top: "-top-10 left-1/2 -translate-x-1/2",
    bottom: "-bottom-10 left-1/2 -translate-x-1/2",
    left: "-left-28 top-1/2 -translate-y-1/2",
    right: "-right-28 top-1/2 -translate-y-1/2",
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={cn(
            "absolute z-50 whitespace-nowrap rounded bg-primary px-2.5 py-1 text-xs text-primary-foreground shadow-md transition-opacity duration-150",
            positionClasses[position]
          )}
        >
          {content}
        </div>
      )}
    </div>
  )
}
