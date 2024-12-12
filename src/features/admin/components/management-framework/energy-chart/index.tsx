"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const data = [
  { time: "00:00", "Injetada": 3550, "Compensada": 2000 },
  { time: "01:00", "Injetada": 3300, "Compensada": 2000 },
  { time: "02:00", "Injetada": 2950, "Compensada": 2000 },
  { time: "03:00", "Injetada": 3100, "Compensada": 2000 },
  { time: "04:00", "Injetada": 3400, "Compensada": 2000 },
  { time: "05:00", "Injetada": 3500, "Compensada": 2000 },
  { time: "06:00", "Injetada": 3900, "Compensada": 2000 },
  { time: "07:00", "Injetada": 4250, "Compensada": 2000 },
  { time: "08:00", "Injetada": 4550, "Compensada": 2000 },
  { time: "09:00", "Injetada": 4700, "Compensada": 2000 },
  { time: "10:00", "Injetada": 4650, "Compensada": 2000 },
  { time: "11:00", "Injetada": 4550, "Compensada": 2000 },
  { time: "12:00", "Injetada": 4450, "Compensada": 2000 },
  { time: "13:00", "Injetada": 4400, "Compensada": 2000 },
  { time: "14:00", "Injetada": 4350, "Compensada": 2000 },
  { time: "15:00", "Injetada": 4400, "Compensada": 2000 },
  { time: "16:00", "Injetada": 4550, "Compensada": 2000 },
  { time: "17:00", "Injetada": 4650, "Compensada": 2000 },
  { time: "18:00", "Injetada": 4750, "Compensada": 2000 },
  { time: "19:00", "Injetada": 4650, "Compensada": 2000 },
  { time: "20:00", "Injetada": 4550, "Compensada": 2000 },
  { time: "21:00", "Injetada": 4400, "Compensada": 2000 },
  { time: "22:00", "Injetada": 4100, "Compensada": 2000 },
  { time: "23:00", "Injetada": 3800, "Compensada": 2000 },
];

const chartConfig = {
  Injetada: {
    label: "Injetada",
    color: "#1E90FF",
  },
  Compensada: {
    label: "Compensada",
    color: "#B22222",
  },
} satisfies ChartConfig;

export function EnergyChart() {
  return (
    <Card className="w-full h-3/6">
      <CardHeader>
        <CardTitle>Energia injetada X compensada</CardTitle>
        <CardDescription>Considerando todas as unidades selecionadas</CardDescription>
      </CardHeader>
      <CardContent className="h-3/4 p-4">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <AreaChart
            margin={{ top: 0, right: 0, left: 0, bottom: -100 }}
            data={data}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              unit="kW"
              ticks={[0, 1500, 3000, 4500, 6000]}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="Injetada"
              type="monotone"
              fill="#87CEEB"
              fillOpacity={0.6}
              stroke="#87CEEB"
            />
            <Area
              dataKey="Compensada"
              type="monotone"
              fill="#CD5C5C"
              fillOpacity={0.6}
              stroke="#CD5C5C"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
 }