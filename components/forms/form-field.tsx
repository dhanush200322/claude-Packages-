"use client"

import * as React from "react"
import { useFormContext, Controller } from "react-hook-form"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export interface FormFieldProps {
  name: string
  label?: string
  placeholder?: string
  type?: string
  description?: string
  className?: string
}

export function FormField({
  name,
  label,
  placeholder,
  type = "text",
  description,
  className,
}: FormFieldProps) {
  const { control, formState: { errors } } = useFormContext()
  const error = errors[name]?.message as string | undefined

  return (
    <div className={cn("space-y-1.5", className)}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            id={name}
            type={type}
            placeholder={placeholder}
            {...field}
            value={field.value ?? ""}
          />
        )}
      />
      {description && !error && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
      {error && (
        <p className="text-xs text-destructive font-medium">{error}</p>
      )}
    </div>
  )
}
