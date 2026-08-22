import * as React from "react"
import { cn } from "@/lib/utils"

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
}

export function Avatar({ src, alt = "", fallback, className, ...props }: AvatarProps) {
  const [hasError, setHasError] = React.useState(!src)

  return (
    <div
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border bg-muted text-muted-foreground items-center justify-center text-xs font-semibold select-none",
        className
      )}
      {...props}
    >
      {src && !hasError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          className="aspect-square h-full w-full object-cover"
        />
      ) : (
        <span>{fallback || alt?.substring(0, 2).toUpperCase() || "U"}</span>
      )}
    </div>
  )
}
