"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Layers, Sparkles, Cpu, CheckCircle2, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto px-6 py-16 w-full">
        <div className="flex flex-col items-center text-center space-y-6">
          <Badge variant="secondary" className="px-3.5 py-1.5 text-xs font-semibold gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-indigo-500 animate-pulse" />
            Universal Master Foundation
          </Badge>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Premium Frontend Package & Skills Library
          </h1>

          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            A domain-independent, production-ready frontend foundation combining Next.js App Router, Tailwind CSS, Framer Motion, Zustand, TanStack Query, and the <code className="bg-muted px-1.5 py-0.5 rounded text-foreground font-mono text-sm">ui-ux-pro-max</code> AI design engine.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              View Architecture
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card>
            <CardHeader>
              <div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-2">
                <Layers className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg">Unified Packages</CardTitle>
              <CardDescription>
                Tailwind CSS, Framer Motion, Base UI, Zustand, TanStack Query, Recharts & Sonner pre-configured.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-2">
                <Cpu className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg">Design Skills Engine</CardTitle>
              <CardDescription>
                Integrated <code className="text-xs font-mono">ui-ux-pro-max</code> skill for automatic color, font, layout, and UX generation.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-2">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg">Domain Independent</CardTitle>
              <CardDescription>
                Adaptable to SaaS, AI agent apps, e-commerce, CRM, fintech, dashboards, or marketing sites.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
