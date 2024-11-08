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
  { month: "January", withGeneration: 150, withoutGeneration: 80 },
  { month: "February", withGeneration: 300, withoutGeneration: 120 },
  { month: "March", withGeneration: 200, withoutGeneration: 60 },
  { month: "April", withGeneration: 400, withoutGeneration: 100 },
  { month: "May", withGeneration: 250, withoutGeneration: 90 },
  { month: "June", withGeneration: 180, withoutGeneration: 50 },
];

const chartConfig = {
  withGeneration: {
    label: "Com Geração",
    color: "hsl(var(--chart-2))", // cor mais escura para "com geração"
  },
  withoutGeneration: {
    label: "Sem Geração",
    color: "hsl(var(--chart-3))", // cor mais clara para "sem geração"
  },
} satisfies ChartConfig;

export function CostWithWithoutGenerationChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Custo com e sem geração</CardTitle>
        <CardDescription>
          Considerando todas as 100 unidades selecionadas
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 12,
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
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="withoutGeneration"
              type="natural"
              fill="hsl(var(--chart-3))"
              fillOpacity={0.3}
              stroke="hsl(var(--chart-3))"
              stackId="a"
            />
            <Area
              dataKey="withGeneration"
              type="natural"
              fill="hsl(var(--chart-2))"
              fillOpacity={0.4}
              stroke="hsl(var(--chart-2))"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          Ao longo dos <strong>últimos 6 meses</strong>, o mês que você mais teve uma{" "}
          <strong>previsão próxima do real</strong> foi o mês de <strong>Abril</strong> com <strong>100 kWh</strong>.
        </p>
      </CardFooter>
    </Card>
  );
}
