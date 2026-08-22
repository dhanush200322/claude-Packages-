"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface RadioOption {
  label: string
  value: string
  disabled?: boolean
}

export interface RadioGroupProps {
  options: RadioOption[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  name?: string
  className?: string
}

export function RadioGroup({
  options,
  value,
  defaultValue,
  onChange,
  name = "radio-group",
  className,
}: RadioGroupProps) {
  const [selectedValue, setSelectedValue] = React.useState(value || defaultValue || options[0]?.value)

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value)
    }
  }, [value])

  const handleSelect = (val: string) => {
    setSelectedValue(val)
    onChange?.(val)
  }

  return (
    <div role="radiogroup" className={cn("grid gap-2 select-none", className)}>
      {options.map((opt) => {
        const isChecked = selectedValue === opt.value
        return (
          <label
            key={opt.value}
            className={cn(
              "flex items-center gap-3 cursor-pointer text-sm font-medium leading-none",
              opt.disabled && "cursor-not-allowed opacity-50"
            )}
          >
            <button
              type="button"
              role="radio"
              aria-checked={isChecked}
              disabled={opt.disabled}
              onClick={() => handleSelect(opt.value)}
              className={cn(
                "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 flex items-center justify-center transition-colors",
                isChecked && "border-primary"
              )}
            >
              {isChecked && <span className="h-2 w-2 rounded-full bg-primary" />}
            </button>
            <span>{opt.label}</span>
          </label>
        )
      })}
    </div>
  )
}
