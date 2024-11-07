"use client";

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

const consumptionData = [
  { uc: "0000000000000001", consumption: 214.828 },
  { uc: "0000000000000002", consumption: 50.010 },
  { uc: "0000000000000003", consumption: 150.567 },
  { uc: "0000000000000004", consumption: 120.234 },
  { uc: "0000000000000005", consumption: 180.892 },
  { uc: "0000000000000006", consumption: 95.543 },
  { uc: "0000000000000007", consumption: 200.001 },
  { uc: "0000000000000008", consumption: 140.455 },
  { uc: "0000000000000009", consumption: 110.326 },
  { uc: "0000000000000010", consumption: 160.765 },
  // Adicione mais dados conforme necessário
];

const maxConsumption = {
  label: "Maior consumo",
  description: "UC 0000000000000001",
  value: 214.828,
};

const minConsumption = {
  label: "Menor consumo",
  description: "UC 0000000000000002",
  value: 50.010,
};

const chartConfig = {
  consumption: {
    label: "Consumo",
    color: "hsl(var(--chart-3))", // ajuste para a cor laranja
  },
};

export function MonthlyConsumptionChart() {
  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Média de consumo mensal por unidade consumidora</CardTitle>
          <CardDescription>
            Consumo médio mensal de energia por unidade consumidora
          </CardDescription>
        </div>
        <div className="flex">
          <div className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left bg-tertiary sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
            <span className="text-xs text-muted-foreground">
              {maxConsumption.label} ({maxConsumption.description})
            </span>
            <span className="text-lg font-bold leading-none sm:text-3xl">
              {maxConsumption.value.toLocaleString()}/kWh
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
            <span className="text-xs text-muted-foreground">
              {minConsumption.label} ({minConsumption.description})
            </span>
            <span className="text-lg font-bold leading-none sm:text-3xl">
              {minConsumption.value.toLocaleString()}/kWh
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer className="aspect-auto h-[250px] w-full" config={chartConfig}>
          <BarChart
            data={consumptionData}
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
                  nameKey="consumption"
                  labelFormatter={(value) => `UC: ${value}`}
                  formatter={(value) => `${value.toLocaleString()} kWh`}
                />
              }
            />
            <Bar dataKey="consumption" fill="hsl(var(--chart-3))" /> {/* Cor laranja ajustada */}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
