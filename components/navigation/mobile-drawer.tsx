"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { slideInLeft } from "@/lib/animations"
import { cn } from "@/lib/utils"

export interface MobileDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
  title?: string
}

export function MobileDrawer({ open, onOpenChange, children, title }: MobileDrawerProps) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onOpenChange(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />
          <motion.div
            variants={slideInLeft}
            initial="initial"
            animate="animate"
            exit="exit"
            className={cn(
              "relative z-50 flex h-full w-80 max-w-[80vw] flex-col border-r bg-sidebar text-sidebar-foreground shadow-2xl p-6"
            )}
          >
            <div className="flex items-center justify-between border-b pb-4 mb-4">
              <h3 className="font-semibold text-lg">{title || "Menu"}</h3>
              <button
                onClick={() => onOpenChange(false)}
                className="rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
