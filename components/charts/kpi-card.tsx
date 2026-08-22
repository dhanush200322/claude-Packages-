import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { MetricCardData } from "@/types"
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react"

export function KPICard({ title, value, change, changeType, timeframe }: MetricCardData) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        {changeType === "increase" && <ArrowUpRight className="h-4 w-4 text-emerald-500" />}
        {changeType === "decrease" && <ArrowDownRight className="h-4 w-4 text-rose-500" />}
        {changeType === "neutral" && <Minus className="h-4 w-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change !== undefined && (
          <p className="text-xs text-muted-foreground mt-1">
            <span
              className={
                changeType === "increase"
                  ? "text-emerald-500 font-semibold"
                  : changeType === "decrease"
                  ? "text-rose-500 font-semibold"
                  : ""
              }
            >
              {change > 0 ? `+${change}%` : `${change}%`}
            </span>{" "}
            {timeframe || "from last month"}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
