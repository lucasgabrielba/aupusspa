"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

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
  { category: "Ponta", value: 740, fill: "hsl(var(--chart-1))" },
  { category: "Fora Ponta", value: 52890, fill: "hsl(var(--chart-2))" },
  { category: "Reserva", value: 43157, fill: "hsl(var(--chart-3))" },
];

const chartConfig = {
  Ponta: {
    label: "Ponta",
    color: "hsl(var(--chart-1))",
  },
  "Fora Ponta": {
    label: "Fora Ponta",
    color: "hsl(var(--chart-2))",
  },
  Reserva: {
    label: "Reserva",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function EnergyConsumptionCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Consumo de Energia</CardTitle>
        <CardDescription>Último mês</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            width={400}
            height={250}
            data={chartData}
            layout="vertical"
            margin={{
              left: 20,
            }}
          >
            <YAxis
              dataKey="category"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="value" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="value" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Consumo eficiente este mês <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Dados de consumo energético (kWh)
        </div>
      </CardFooter>
    </Card>
  );
}
