

import { BarChart, Bar } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const chartData = [
  { name: "Consumo", ponta: 740, foraPonta: 52890, reserva: 43157 },
];

export function EnergyConsumptionCard() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardDescription className="text-muted-foreground">
          Consumo de energia kWh/mês
        </CardDescription>
        <CardTitle className="text-4xl font-bold">97.187</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <BarChart
          width={300}
          height={40}
          data={chartData}
          layout="vertical"
          stackOffset="expand"
          margin={{ top: 10 }}
        >
          <Bar dataKey="ponta" fill="#1d4ed8" barSize={20} />
          <Bar dataKey="foraPonta" fill="#f59e0b" barSize={20} />
          <Bar dataKey="reserva" fill="#dc2626" barSize={20} />
        </BarChart>
        <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm text-muted-foreground">
          <div>
            <span className="font-medium">Ponta</span>
            <div className="text-blue-600 font-bold">740</div>
          </div>
          <div>
            <span className="font-medium">Fora ponta</span>
            <div className="text-yellow-600 font-bold">52.890</div>
          </div>
          <div>
            <span className="font-medium">Reserva</span>
            <div className="text-red-600 font-bold">43.157</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
