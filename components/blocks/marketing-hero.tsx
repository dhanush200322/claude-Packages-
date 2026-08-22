"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export interface MarketingHeroProps {
  badge?: string
  title: string
  subtitle: string
  primaryCta?: { text: string; onClick?: () => void }
  secondaryCta?: { text: string; onClick?: () => void }
  visual?: ReactNode
}

export function MarketingHero({
  badge,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  visual,
}: MarketingHeroProps) {
  return (
    <section className="relative overflow-hidden py-20 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center space-y-6">
        {badge && (
          <motion.div variants={fadeUp} initial="initial" animate="animate">
            <Badge variant="secondary" className="px-3.5 py-1 text-xs">
              {badge}
            </Badge>
          </motion.div>
        )}

        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl text-foreground leading-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {(primaryCta || secondaryCta) && (
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            {primaryCta && (
              <Button size="lg" onClick={primaryCta.onClick}>
                {primaryCta.text}
              </Button>
            )}
            {secondaryCta && (
              <Button variant="outline" size="lg" onClick={secondaryCta.onClick}>
                {secondaryCta.text}
              </Button>
            )}
          </motion.div>
        )}

        {visual && (
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="w-full pt-10"
          >
            {visual}
          </motion.div>
        )}
      </div>
    </section>
  )
}
