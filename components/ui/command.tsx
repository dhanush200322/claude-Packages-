"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { Input } from "./input"
import { cn } from "@/lib/utils"

export interface CommandItem {
  id: string
  label: string
  icon?: React.ReactNode
  onSelect?: () => void
}

export interface CommandPaletteProps {
  items: CommandItem[]
  placeholder?: string
  className?: string
}

export function CommandPalette({
  items,
  placeholder = "Type a command or search...",
  className,
}: CommandPaletteProps) {
  const [query, setQuery] = React.useState("")

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className={cn("w-full max-w-md rounded-lg border bg-popover text-popover-foreground shadow-md overflow-hidden", className)}>
      <div className="flex items-center border-b px-3">
        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 px-0 h-11"
        />
      </div>
      <div className="max-h-60 overflow-y-auto p-1">
        {filteredItems.length === 0 ? (
          <p className="p-4 text-center text-xs text-muted-foreground">No results found.</p>
        ) : (
          filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => item.onSelect?.()}
              className="flex cursor-pointer items-center gap-2 rounded-sm px-2.5 py-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground select-none"
            >
              {item.icon && <span className="h-4 w-4 text-muted-foreground">{item.icon}</span>}
              <span>{item.label}</span>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
