import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { XAxis, YAxis, Bar, BarChart, PieChart, Pie, Cell } from "recharts";
import PayingDetailsCard from "./paying-details-card";

export default function ChartsSection() {
  const economyValue = 1000;
  const economyPercentage = 4;

  const data = [
    { month: "Abr", current: 99, previous: 66 },
    { month: "Maio", current: 99, previous: 66 },
    { month: "Jun", current: 99, previous: 66 },
    { month: "Jul", current: 99, previous: 66 },
    { month: "Ago", current: 99, previous: 66 },
    { month: "Set", current: 99, previous: 66 },
  ];

  const COLORS = ["rgb(236, 72, 153)", "#e2e8f0"];
  const donutData = [
    { name: "Economy", value: economyPercentage },
    { name: "Rest", value: 100 - economyPercentage },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* Chart 1 */}
      <PayingDetailsCard/>

      {/* Chart 2 */}
      <Card className="rounded-sm">
        <CardHeader className="pb-2">
          <h3 className="text-card-foreground font-normal text-sm">Consumo mensal de todas as unidades</h3>
          <div className="text-4xl font-bold">
            1.254.187{" "}
            <span className="text-sm font-normal text-card-foreground">kWh em média</span>
          </div>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              current: { label: "Atual", color: "rgb(236, 72, 153)" },
              previous: { label: "Anterior", color: "rgb(59, 130, 246)" },
            }}
          >
            <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: 'rgb(156 163 175)' }} />
              <YAxis hide={true} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="current" fill="rgb(236, 72, 153)" radius={[4, 4, 0, 0]} barSize={20} />
              <Bar dataKey="previous" fill="rgb(59, 130, 246)" radius={[4, 4, 0, 0]} barSize={20} />
            </BarChart>
          </ChartContainer>
          <div className="text-sm text-card-foreground w-full">
            <div className="flex flex-col gap-1 w-full">
              <p>Nos últimos 6 meses as unidades consumiram <strong className="text-card-foreground">53.305 kWh</strong>.</p>
              <p>Você consumiu <strong className="text-card-foreground">12.584 kWh</strong> a menos em relação ao ano anterior.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chart 3 */}
      <Card className="rounded-sm flex flex-col">
        <CardHeader className="pb-2">
          <h3 className="text-card-foreground font-normal text-sm">Economia</h3>
          <div className="text-4xl font-bold">R$ {economyValue.toLocaleString()}</div>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
          <div className="relative">
            <PieChart width={160} height={160}>
              <Pie
                data={donutData}
                dataKey="value"
                innerRadius={60}
                outerRadius={80}
                startAngle={90}
                endAngle={-270}
              >
                {donutData.map((_entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
            <div className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full">
              <span className="text-2xl font-bold text-card-foreground">{economyPercentage}%</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="mt-auto text-sm text-card-foreground">
          Esse mês vc economizou R$120,00 com aluguel de usina
        </CardFooter>
      </Card>
    </div>
  );
}
