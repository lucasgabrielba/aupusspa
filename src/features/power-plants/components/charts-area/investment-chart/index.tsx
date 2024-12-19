import { Bar, BarChart, CartesianGrid, Cell, LabelList } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
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
  { month: "Janeiro", value: 186 },
  { month: "Fevereiro", value: 205 },
  { month: "Março", value: -207 },
  { month: "Abril", value: 173 },
  { month: "Maio", value: -209 },
  { month: "Junho", value: 214 },
];

const chartConfig = {
  value: {
    label: "Retorno",
  },
} satisfies ChartConfig;

export function InvestmentChart() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-md">Retorno do seu investimento</CardTitle>
        <CardDescription>Detalhe dos últimos 6 meses</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ChartContainer config={chartConfig}>
          <BarChart width={500} height={300} data={chartData}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel hideIndicator />}
            />
            <Bar dataKey="value" fillOpacity={1}>
              <LabelList position="top" dataKey="month" fill="var(--card-foreground)" />
              {chartData.map((item) => (
                <Cell
                  key={item.month}
                  fill={
                    item.value > 0
                      ? "hsl(var(--chart-2))"
                      : "hsl(var(--chart-1))"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
