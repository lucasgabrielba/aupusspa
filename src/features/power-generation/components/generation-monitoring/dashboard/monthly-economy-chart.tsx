"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", economy: 150 },
  { month: "February", economy: 300 },
  { month: "March", economy: 200 },
  { month: "April", economy: 100 },
  { month: "May", economy: 200 },
  { month: "June", economy: 180 },
];

const chartConfig = {
  economy: {
    label: "Economia",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function MonthlyEconomyChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Economia mensal</CardTitle>
        <CardDescription>
          Análise da economia mensal de energia
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Area
              dataKey="economy"
              type="step"
              fill="hsl(var(--chart-2))"
              fillOpacity={0.4}
              stroke="hsl(var(--chart-2))"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          Economia acumulada ao longo dos <strong>últimos 6 meses</strong>, o mês que você
          mais economizou foi o mês de <strong>Abril</strong> com <strong>100 kWh</strong>.
        </p>
      </CardFooter>
    </Card>
  );
}
