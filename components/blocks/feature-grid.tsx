import { ReactNode } from "react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export interface FeatureItem {
  icon?: ReactNode
  title: string
  description: string
}

export interface FeatureGridProps {
  items: FeatureItem[]
  columns?: 2 | 3 | 4
}

export function FeatureGrid({ items, columns = 3 }: FeatureGridProps) {
  const colClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={`grid ${colClasses[columns]} gap-6 w-full`}>
      {items.map((item, idx) => (
        <Card key={idx} className="transition-all hover:shadow-md">
          <CardHeader>
            {item.icon && (
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                {item.icon}
              </div>
            )}
            <CardTitle className="text-lg">{item.title}</CardTitle>
            <CardDescription className="leading-relaxed">{item.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}
