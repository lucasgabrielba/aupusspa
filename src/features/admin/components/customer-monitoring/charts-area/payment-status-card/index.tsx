
import { RadialBar, RadialBarChart } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

export const PaymentStatusCard = () => {
  const data = [
    { name: "Adimplentes", value: 110329, fill: "#36A2EB" },
    { name: "Inadimplentes", value: 5329, fill: "#FF6384" }
  ];

  const chartConfig = {
    Adimplentes: {
      label: "Adimplentes",
      color: "#36A2EB"
    },
    Inadimplentes: {
      label: "Inadimplentes",
      color: "#FF6384"
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-4">
        <div>
          <CardDescription>Adimplentes</CardDescription>
          <div className="flex gap-2 items-baseline">
            <div className="text-lg font-bold">{formatCurrency(110329)}</div>
            <div className="text-xs">120 usuários</div>
          </div>
        </div>
        <div className="mt-4">
          <CardDescription>Inadimplentes</CardDescription>
          <div className="flex gap-2 items-baseline">
            <div className="text-lg font-bold">{formatCurrency(5329.23)}</div>
            <div className="text-xs">15 usuários</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-0 flex justify-center items-center">
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <RadialBarChart
            width={250}
            height={250}
            innerRadius="30%"
            outerRadius="100%"
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <ChartTooltip
              content={<ChartTooltipContent 
                formatter={(value) => formatCurrency(value)}
                nameKey="name"
              />}
            />
            <RadialBar
              background
              dataKey="value"
              cornerRadius={5}
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
