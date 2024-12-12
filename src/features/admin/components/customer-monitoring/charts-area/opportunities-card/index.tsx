"use client";

import { Bar, BarChart, XAxis, YAxis, LabelList } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

const chartData = [
  { name: "Jan", atendidas: 67, solicitadas: 100 },
];

export function OpportunitiesCard() {
  return (
    <Card className="w-full h-full flex flex-col justify-between">
      <CardHeader>
        <CardDescription className="text-muted-foreground">
          Oportunidades Solicitadas
        </CardDescription>
        <div className="flex gap-2 items-baseline">
          <CardTitle className="text-4xl font-bold">1.187</CardTitle>
          <CardDescription>Por mês média</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center flex-grow">
        <BarChart
          width={250}
          height={100}
          data={chartData}
          layout="vertical"
          margin={{ bottom: 20, right: 60 }}
        >
          <YAxis
            dataKey="name"
            type="category"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "var(--card-foreground)" }}
          />
          <XAxis type="number" hide />
          <Bar
            dataKey="atendidas"
            fill="#2563eb"
            radius={[0, 2, 2, 0]}
            barSize={20}
          >
            <LabelList dataKey="atendidas" position="right" fill="#2563eb" />
          </Bar>
          <Bar
            dataKey="solicitadas"
            fill="#db2777"
            radius={[0, 2, 2, 0]}
            barSize={20}
          >
            <LabelList dataKey="solicitadas" position="right" fill="#db2777" />
          </Bar>
        </BarChart>

      </CardContent>
      <CardFooter>
        <div className="mt-4 text-sm text-muted-foreground text-start">
          Nos últimos 30 dias{" "}
          <span className="font-bold text-foreground">100</span> oportunidades se
          transformaram em novos projetos
        </div>
      </CardFooter>
    </Card>
  );
}
