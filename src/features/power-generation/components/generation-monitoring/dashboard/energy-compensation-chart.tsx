"use client";

import * as React from "react";
import { CartesianGrid, Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const energyData = [
  { uc: "0000000000000001", compensation: 24.828 },
  { uc: "0000000000000002", compensation: 5.010 },
  { uc: "0000000000000003", compensation: 18.567 },
  { uc: "0000000000000004", compensation: 10.234 },
  { uc: "0000000000000005", compensation: 14.892 },
  { uc: "0000000000000006", compensation: 6.543 },
  { uc: "0000000000000007", compensation: 22.001 },
  { uc: "0000000000000008", compensation: 17.455 },
  { uc: "0000000000000009", compensation: 11.326 },
  { uc: "0000000000000010", compensation: 19.765 },
  // Adicione mais dados conforme necessário
];

const maxCompensation = {
  label: "Maior compensação",
  description: "UC 0000000000000001",
  value: 24.828,
};

const minCompensation = {
  label: "Menor compensação",
  description: "UC 0000000000000002",
  value: 5.010,
};

const chartConfig = {
  compensation: {
    label: "Compensação",
    color: "hsl(var(--chart-1))",
  },
};

export function EnergyCompensationChart() {
  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Compensação de Energia por unidade consumidora</CardTitle>
          <CardDescription>
            Distribuição da compensação de energia por unidade consumidora
          </CardDescription>
        </div>
        <div className="flex">
          <div className="flex flex-1 flex-col justify-center gap-1 bg-tertiary px-6 py-4 text-left sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
            <span className="text-xs text-tertiary-foreground">
              {maxCompensation.label} ({maxCompensation.description})
            </span>
            <span className="text-lg font-bold leading-none sm:text-3xl">
              {maxCompensation.value}/kWh
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
            <span className="text-xs text-card-foreground">
              {minCompensation.label} ({minCompensation.description})
            </span>
            <span className="text-lg font-bold leading-none sm:text-3xl">
              {minCompensation.value}/kWh
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6 mt-6">
        <ChartContainer className="aspect-auto h-[250px] w-full" config={chartConfig}>
          <BarChart
            data={energyData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="uc"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => value.slice(-4)} // Exibe apenas os últimos 4 dígitos
            />
            <YAxis />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="compensation"
                  labelFormatter={(value) => `UC: ${value}`}
                  formatter={(value) => `${value} kWh`}
                />
              }
            />
            <Bar dataKey="compensation" fill="hsl(var(--chart-1))" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
