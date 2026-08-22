"use client"

import * as React from "react"
import { ChevronDown, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export interface SelectOption {
  label: string
  value: string
}

export interface SelectProps {
  options: SelectOption[]
  value?: string
  placeholder?: string
  onChange?: (value: string) => void
  className?: string
  disabled?: boolean
}

export function Select({
  options,
  value,
  placeholder = "Select an option...",
  onChange,
  className,
  disabled = false,
}: SelectProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState(value || "")
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value)
    }
  }, [value])

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const selectedLabel = options.find((o) => o.value === selectedValue)?.label

  const handleSelect = (val: string) => {
    setSelectedValue(val)
    onChange?.(val)
    setIsOpen(false)
  }

  return (
    <div className={cn("relative w-full select-none", className)} ref={containerRef}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
      >
        <span className={selectedLabel ? "text-foreground" : "text-muted-foreground"}>
          {selectedLabel || placeholder}
        </span>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-black/5"
          >
            {options.map((opt) => {
              const isSelected = selectedValue === opt.value
              return (
                <div
                  key={opt.value}
                  onClick={() => handleSelect(opt.value)}
                  className={cn(
                    "relative flex cursor-pointer select-none items-center justify-between rounded-sm px-2.5 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
                    isSelected && "bg-accent/60 font-medium"
                  )}
                >
                  <span>{opt.label}</span>
                  {isSelected && <Check className="h-4 w-4 text-primary" />}
                </div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
