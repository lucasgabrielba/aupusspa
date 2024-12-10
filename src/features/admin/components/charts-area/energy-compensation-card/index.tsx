

import { RadialBarChart, RadialBar } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

const chartData = [
  { name: "Compensação", value: 200, fill: "#db2777" },
];

export function EnergyCompensationCard() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardDescription className="text-muted-foreground">
          Energia compensada
        </CardDescription>
        <div className="flex gap-2 items-baseline">
          <CardTitle className="text-4xl font-bold">1.000</CardTitle>
          <CardDescription>kWh</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <RadialBarChart
          width={250}
          height={250}
          innerRadius="70%"
          outerRadius="90%"
          data={chartData}
          startAngle={10}
          endAngle={-270}
        >
          <RadialBar
            dataKey="value"
            background={{ fill: "#f3f4f6" }}
            cornerRadius={10}
          />
          {/* Texto centralizado com cores baseadas no tema */}
          <text
            x={125}
            y={115}
            textAnchor="middle"
            dominantBaseline="middle"
            style={{
              fill: "var(--card-foreground)",
              fontSize: "1.875rem", // text-3xl
              fontWeight: "bold",
            }}
          >
            200
          </text>
          <text
            x={125}
            y={145}
            textAnchor="middle"
            dominantBaseline="middle"
            style={{
              fill: "var(--muted-foreground)",
              fontSize: "0.875rem", // text-sm
            }}
          >
            Visitors
          </text>
        </RadialBarChart>

      </CardContent>

      <CardFooter>
        <div className="mt-4 text-start text-sm text-muted-foreground">
          Esse mês você compensou{" "}
          <span className="font-bold text-foreground">12.584 kWh</span> a mais
        </div>
      </CardFooter>
    </Card>
  );
}
