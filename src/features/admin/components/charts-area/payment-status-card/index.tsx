import { RadialBar, RadialBarChart } from "recharts";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
  { name: "Adimplentes", R$: 110329, fill: "hsl(var(--chart-3))" },
  { name: "Inadimplentes", R$: 5329, fill: "hsl(var(--chart-1))" },
];

const chartConfig = {
  Adimplentes: {
    label: "Adimplentes",
    color: "hsl(var(--chart-1))",
  },
  Inadimplentes: {
    label: "Inadimplentes",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function PaymentStatusCard() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="pb-4">
        <div>
          <CardDescription className="">Adimplentes</CardDescription>
          <div className="flex gap-2 items-baseline">
            <div className="text-lg font-bold">R$ 110.329,00</div>
            <div className="text-xs ">120 usuários</div>
          </div>
        </div>
        <div className="mt-4">
          <CardDescription className="">Inadimplentes</CardDescription>
          <div className="flex gap-2 items-baseline">
            <div className="text-lg font-bold">R$ 5.329,23</div>
            <div className="text-xs ">15 usuários</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-0 flex justify-center items-center">
        <ChartContainer
          config={chartConfig}
          className="aspect-square max-h-[250px] mx-auto"
        >
          <RadialBarChart
            data={chartData}
            innerRadius={40}
            outerRadius={100}
            barSize={100}
            startAngle={90}
            endAngle={-20}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="name" />}
            />
            <RadialBar
              dataKey="R$"
              background={{ fill: "hsl(var(--chart-background))" }}
              cornerRadius={5}
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
