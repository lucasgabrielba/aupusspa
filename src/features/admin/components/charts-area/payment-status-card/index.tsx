import { RadialBar, RadialBarChart } from "recharts";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

const chartData = [
  { name: "Adimplentes", value: 110329, fill: "#2563eb" },
  { name: "Inadimplentes", value: 5329, fill: "#dc2626" },
];

export function PaymentStatusCard() {
  return (
    <Card className="w-full h-full flex flex-col justify-between">
      <CardHeader>
        <div>
          <CardDescription>Adimplentes</CardDescription>
          <div className="flex gap-2 items-baseline">
            <div className="text-lg font-bold">R$ 110.329,00</div>
            <div className="text-xs text-muted-foreground">120 usuários</div>
          </div>
        </div>
        <div>
          <CardDescription>Inadimplentes</CardDescription>
          <div className="flex gap-2 items-baseline">
            <div className="text-lg font-bold">R$ 5.329,23</div>
            <div className="text-xs text-muted-foreground">15 usuários</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex justify-center">
        <RadialBarChart
          width={300}
          height={300}
          innerRadius="50%"
          outerRadius="90%"
          data={chartData}
          startAngle={90}
          endAngle={-270}
        >
          <RadialBar
            dataKey="value"
            background={{ fill: "#f3f4f6" }}
            cornerRadius={5}
          />
        </RadialBarChart>
      </CardContent>
    </Card>
  );
}
