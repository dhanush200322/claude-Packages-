import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="border-t bg-background py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Built for universal frontend development.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:underline">Documentation</a>
          <a href="#" className="hover:underline">GitHub</a>
          <a href="#" className="hover:underline">Skills Engine</a>
        </div>
      </div>
    </footer>
  )
}
