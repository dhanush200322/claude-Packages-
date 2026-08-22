import { ReactNode } from "react"

export type ThemeMode = "light" | "dark" | "system"

export interface NavItem {
  title: string
  href: string
  icon?: string | ReactNode
  disabled?: boolean
  external?: boolean
  badge?: string | number
  children?: NavItem[]
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    github?: string
    twitter?: string
    docs?: string
  }
}

export interface UserProfile {
  id: string
  name: string
  email: string
  avatar?: string
  role?: string
}

export interface MetricCardData {
  title: string
  value: string | number
  change?: number
  changeType?: "increase" | "decrease" | "neutral"
  timeframe?: string
  description?: string
}

export interface ChartDataPoint {
  label: string
  [key: string]: string | number
}

export interface AIMessage {
  id: string
  role: "user" | "assistant" | "system" | "tool"
  content: string
  timestamp: string
  tokens?: number
  model?: string
  toolCalls?: Array<{
    name: string
    args: Record<string, unknown>
    result?: unknown
  }>
}

export interface AgentStatus {
  id: string
  name: string
  status: "idle" | "thinking" | "executing" | "error"
  lastActive: string
  model: string
}
