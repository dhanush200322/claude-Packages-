"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export interface PopoverProps {
  trigger: React.ReactNode
  children: React.ReactNode
  className?: string
  align?: "left" | "right" | "center"
}

export function Popover({ trigger, children, className, align = "center" }: PopoverProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const popoverRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const alignClasses = {
    left: "left-0",
    right: "right-0",
    center: "left-1/2 -translate-x-1/2",
  }

  return (
    <div className="relative inline-block text-left" ref={popoverRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "absolute z-50 mt-2 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md ring-1 ring-black/5 outline-none",
              alignClasses[align],
              className
            )}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
