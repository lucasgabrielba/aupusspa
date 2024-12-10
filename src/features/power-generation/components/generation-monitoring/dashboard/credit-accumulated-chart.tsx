

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

const creditData = [
  { uc: "0000000000000001", credit: 100000 },
  { uc: "0000000000000002", credit: 10000 },
  { uc: "0000000000000003", credit: 50000 },
  { uc: "0000000000000004", credit: 30000 },
  { uc: "0000000000000005", credit: 70000 },
  { uc: "0000000000000006", credit: 20000 },
  { uc: "0000000000000007", credit: 90000 },
  { uc: "0000000000000008", credit: 45000 },
  { uc: "0000000000000009", credit: 25000 },
  { uc: "0000000000000010", credit: 60000 },
  // Adicione mais dados conforme necessário
];

const maxCredit = {
  label: "Maior crédito",
  description: "UC 0000000000000001",
  value: 100000,
};

const minCredit = {
  label: "Menor crédito",
  description: "UC 0000000000000002",
  value: 10000,
};

const chartConfig = {
  credit: {
    label: "Crédito",
    color: "hsl(var(--chart-2))", // ajuste para a cor verde
  },
};

export function CreditAccumulatedChart() {
  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Crédito acumulado por unidade consumidora</CardTitle>
          <CardDescription>
            Consumo médio mensal de energia por unidade consumidora
          </CardDescription>
        </div>
        <div className="flex">
          <div className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left bg-tertiary sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
            <span className="text-xs text-muted-foreground">
              {maxCredit.label} ({maxCredit.description})
            </span>
            <span className="text-lg font-bold leading-none sm:text-3xl">
              {maxCredit.value.toLocaleString()} créditos
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left sm:border-l sm:border-t-0 sm:px-8 sm:py-6">
            <span className="text-xs text-muted-foreground">
              {minCredit.label} ({minCredit.description})
            </span>
            <span className="text-lg font-bold leading-none sm:text-3xl">
              {minCredit.value.toLocaleString()} créditos
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6 mt-6">
        <ChartContainer className="aspect-auto h-[250px] w-full" config={chartConfig}>
          <BarChart
            data={creditData}
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
                  nameKey="credit"
                  labelFormatter={(value) => `UC: ${value}`}
                  formatter={(value) => `${value.toLocaleString()} créditos`}
                />
              }
            />
            <Bar dataKey="credit" fill="hsl(var(--chart-2))" /> {/* Cor verde ajustada */}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
