import { CartesianGrid, Line, LineChart, XAxis, Tooltip, ResponsiveContainer, YAxis } from 'recharts'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import type { SalesEntry } from '@/types/sales'

interface ChartProps {
  data: SalesEntry[]
  title?: string
}

export function SalesChart({ data, title }: ChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title || 'Sales Chart'}</CardTitle>
        <CardDescription>January - April</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer height={400}>
          <LineChart data={data}>
            <CartesianGrid vertical={false} />
            <XAxis 
              dataKey="month" 
              tickLine={false} 
              axisLine={false} 
              tickMargin={8} 
              tickFormatter={(m) => m.slice(0, 3)} 
            />
            <YAxis 
              dataKey="sales" 
              tickLine={false} 
              axisLine={false} 
            />
            <Tooltip />
            <Line 
              dataKey="sales" 
              type="linear" 
              stroke="var(--chart-2)" 
              strokeWidth={2} 
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter>
        <div className="text-muted-foreground text-sm">
          Showing total sales for the first 4 months
        </div>
      </CardFooter>
    </Card>
  )
}
