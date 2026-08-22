"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export interface CheckboxProps {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  className?: string
  id?: string
  label?: string
}

export function Checkbox({
  checked = false,
  onCheckedChange,
  disabled = false,
  className,
  id,
  label,
}: CheckboxProps) {
  const [isChecked, setIsChecked] = React.useState(checked)

  React.useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  const toggle = () => {
    if (disabled) return
    const next = !isChecked
    setIsChecked(next)
    onCheckedChange?.(next)
  }

  return (
    <div className="inline-flex items-center gap-2 select-none">
      <button
        type="button"
        role="checkbox"
        id={id}
        aria-checked={isChecked}
        disabled={disabled}
        onClick={toggle}
        className={cn(
          "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer flex items-center justify-center transition-colors",
          isChecked ? "bg-primary text-primary-foreground" : "bg-background",
          className
        )}
      >
        {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
      </button>
      {label && (
        <label
          htmlFor={id}
          onClick={toggle}
          className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      )}
    </div>
  )
}
