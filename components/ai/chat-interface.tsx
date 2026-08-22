"use client"

import * as React from "react"
import { AIMessage, AgentStatus } from "@/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Bot, User, Send, Sparkles, Terminal } from "lucide-react"

interface AIChatInterfaceProps {
  messages: AIMessage[]
  agentStatus?: AgentStatus
  onSendMessage?: (content: string) => void
  loading?: boolean
}

export function AIChatInterface({
  messages,
  agentStatus,
  onSendMessage,
  loading = false,
}: AIChatInterfaceProps) {
  const [input, setInput] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || loading) return
    onSendMessage?.(input)
    setInput("")
  }

  return (
    <div className="flex flex-col h-[600px] w-full rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
      {/* Top Agent Header */}
      <div className="flex items-center justify-between border-b px-4 py-3 bg-muted/30">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Bot className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold">{agentStatus?.name || "AI Agent"}</h4>
            <p className="text-xs text-muted-foreground">{agentStatus?.model || "Claude 3.5 / Gemini 1.5"}</p>
          </div>
        </div>
        <Badge variant={agentStatus?.status === "thinking" ? "warning" : "success"} className="capitalize">
          <Sparkles className="h-3 w-3 mr-1 animate-pulse" />
          {agentStatus?.status || "Ready"}
        </Badge>
      </div>

      {/* Messages Feed */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.role !== "user" && (
              <div className="h-7 w-7 rounded-full bg-muted flex items-center justify-center text-muted-foreground shrink-0 mt-1">
                <Bot className="h-3.5 w-3.5" />
              </div>
            )}

            <div className="space-y-2 max-w-[80%]">
              <div
                className={`rounded-2xl px-4 py-2.5 text-sm ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground rounded-tr-xs"
                    : "bg-muted text-foreground rounded-tl-xs"
                }`}
              >
                {msg.content}
              </div>

              {/* Optional Tool Calls display */}
              {msg.toolCalls?.map((tc, i) => (
                <Card key={i} className="p-3 text-xs font-mono bg-background border-dashed">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Terminal className="h-3.5 w-3.5" />
                    <span>Tool Action: {tc.name}</span>
                  </div>
                  <pre className="text-[11px] overflow-x-auto text-foreground/80">
                    {JSON.stringify(tc.args, null, 2)}
                  </pre>
                </Card>
              ))}
            </div>

            {msg.role === "user" && (
              <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground shrink-0 mt-1">
                <User className="h-3.5 w-3.5" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <form onSubmit={handleSubmit} className="border-t p-3 flex items-center gap-2 bg-background">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask AI agent..."
          disabled={loading}
          className="flex-1"
        />
        <Button type="submit" size="icon" disabled={loading || !input.trim()}>
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  )
}
