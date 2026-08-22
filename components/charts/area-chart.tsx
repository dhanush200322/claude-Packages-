"use client"

import * as React from "react"
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { ChartDataPoint } from "@/types"

interface AreaChartProps {
  data: ChartDataPoint[]
  dataKey: string
  categoryKey?: string
  color?: string
  height?: number
}

export function AreaChartComponent({
  data,
  dataKey,
  categoryKey = "label",
  color = "hsl(var(--primary))",
  height = 300,
}: AreaChartProps) {
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsAreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.4} />
              <stop offset="95%" stopColor={color} stopOpacity={0.0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey={categoryKey} stroke="currentColor" opacity={0.5} fontSize={12} />
          <YAxis stroke="currentColor" opacity={0.5} fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              borderColor: "hsl(var(--border))",
              borderRadius: "var(--radius)",
              color: "hsl(var(--card-foreground))",
            }}
          />
          <Area type="monotone" dataKey={dataKey} stroke={color} fillOpacity={1} fill="url(#colorArea)" />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  )
}
