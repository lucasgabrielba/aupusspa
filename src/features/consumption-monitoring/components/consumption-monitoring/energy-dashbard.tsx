import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Menubar } from "@/components/ui/menubar";
import { MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { cn } from "@/lib/utils";
import { Building, ChevronDown, DollarSign, FileOutput, Zap } from "lucide-react";
import React from "react";
import { XAxis, YAxis, Bar, BarChart } from "recharts";

export default function EnergyDashboard() {

  const units = 100;
  const totalCost = 200000;
  const kWh = 54.87;
  const highestMonth = "Outubro";
  const highestCost = 50;
  const consumptionStatus = "normal";
  const consumptionPercentage = 70;

  const [selected, setSelected] = React.useState("Mês atual");

  const options = [
    "Mês atual",
    "6 meses",
    "1 ano",
    "Selecionar período",
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "economy":
        return "bg-green-500";
      case "normal":
        return "bg-blue-500";
      case "excess":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };


  const handleSelect = (option) => {
    setSelected(option);
    console.log(`Selecionado: ${option}`);
  };


  const data = [
    { month: "Abr", current: 99, previous: 66 },
    { month: "Maio", current: 99, previous: 66 },
    { month: "Jun", current: 99, previous: 66 },
    { month: "Jul", current: 99, previous: 66 },
    { month: "Ago", current: 99, previous: 66 },
    { month: "Set", current: 99, previous: 66 },
  ]

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="w-full max-w-2xl">
              {/* Mobile View (Dropdown) */}
              <Menubar className="lg:hidden justify-start p-1 border-input bg-card rounded-sm">
                <MenubarMenu>
                  <MenubarTrigger className="w-full flex items-center justify-between data-[state=open]:bg-card rounded-sm gap-2">
                    <span>{selected}</span>
                    <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
                  </MenubarTrigger>
                  <MenubarContent align="start" alignOffset={-4} className="w-[--radix-menubar-trigger-width] bg-card">
                    {options.map((option) => (
                      <MenubarItem
                        key={option}
                        onClick={() => handleSelect(option)}
                        className="cursor-pointer"
                      >
                        {option}
                      </MenubarItem>
                    ))}
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>

              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-full max-w-2xl">
                    {/* Desktop View (In-line Buttons) */}
                    <div className="hidden lg:flex justify-start bg-primary gap-2 rounded-sm h-10 items-center p-1">
                      {options.map((option) => (
                        <Button
                          key={option}
                          variant={selected === option ? "default" : "ghost"}
                          className={`h-8 px-3 py-1 rounded-xs ${selected === option
                            ? "bg-card-foreground text-card"
                            : "hover:bg-card hover:text-card-foreground"
                            }`}
                          onClick={() => handleSelect(option)}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button variant="outline" className="bg-card-foreground text-card border-none rounded-sm">
            <FileOutput className="mr-2 h-4 w-4" />
            Exportar resultados
          </Button>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Valor Total</span>
              <DollarSign className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">R$ 1.116.226,64</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Consumo Total</span>
              <Zap className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">1.254.187 kWh</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Preço médio</span>
              <DollarSign className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">R$ /kWh</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Unidades</span>
              <Building className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">100</div>
          </Card>
        </div>


        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="w-full h-full flex flex-col justify-between rounded-sm">
            <CardHeader>
              <CardTitle>
                Custo total das unidades consumidoras
              </CardTitle>
              <CardDescription>{units} unidades no mês atual</CardDescription>
            </CardHeader>

            <CardContent className="flex-grow flex flex-col justify-center space-y-4 ">
              <div className="flex flex-col items-baseline gap-2 lg:flex-row">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-medium">R$</span>
                  <span className="text-4xl font-medium">{totalCost.toLocaleString()}</span>
                </div>
                <p className="text-sm text-card-foreground">Custo total dos últimos 6 meses</p>
              </div>

              <div className="space-y-2">
                <div className="h-10 w-full bg-transparent rounded-xs overflow-hidden relative">
                  <div
                    className={cn("h-full rounded-xs flex items-center justify-start text-card text-md px-4", getStatusColor(consumptionStatus))}
                    style={{ width: `${consumptionPercentage}%` }}
                  >
                    {kWh} kWh
                  </div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="mt-auto">
              <p className="text-sm">
                O mês de {highestMonth} foi o mês que as unidades tiveram o maior custo R$ {highestCost.toFixed(2)}
              </p>
            </CardFooter>
          </Card>

          <Card className="rounded-sm">
            <CardHeader className="pb-2">
              <h3 className="text-card-foreground font-normal text-sm">
                Consumo mensal de todas as unidades
              </h3>
              <div className="text-4xl font-bold">
                1.254.187{" "}
                <span className="text-sm font-normal text-card-foreground">kWh em média</span>
              </div>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  current: {
                    label: "Atual",
                    color: "rgb(236, 72, 153)",
                  },
                  previous: {
                    label: "Anterior",
                    color: "rgb(59, 130, 246)",
                  },
                }}
              >
                <BarChart
                  data={data}
                  margin={{
                    top: 10,
                    right: 10,
                    left: 10,
                    bottom: 10,
                  }}
                >
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: 'rgb(156 163 175)' }}
                  />
                  <YAxis hide={true} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="current"
                    fill="rgb(236, 72, 153)"
                    radius={[4, 4, 0, 0]}
                    barSize={20} // Reduzi o tamanho para caber melhor
                  />
                  <Bar
                    dataKey="previous"
                    fill="rgb(59, 130, 246)"
                    radius={[4, 4, 0, 0]}
                    barSize={20} // Reduzi o tamanho para caber melhor
                  />
                </BarChart>
              </ChartContainer>


              <div className="text-sm text-card-foreground w-full">

                <div className="flex flex-col gap-1 w-full">
                  <p>Nos últimos 6 meses as unidades consumiram{" "}<strong className="text-card-foreground">53.305 kWh</strong>.<br /></p>
                  <p>Você consumiu{" "}<strong className="text-card-foreground">12.584 kWh</strong> a menos em relação</p>
                  ao ano anterior.
                </div>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
