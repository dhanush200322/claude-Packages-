import Link from "next/link"
import { ChevronRight } from "lucide-react"

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-1 text-sm text-muted-foreground">
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <div key={index} className="flex items-center">
            {index > 0 && <ChevronRight className="mx-1.5 h-3.5 w-3.5 opacity-50 shrink-0" />}
            {isLast || !item.href ? (
              <span className="font-medium text-foreground">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-foreground transition-colors">
                {item.label}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}
