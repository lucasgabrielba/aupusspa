import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menubar } from "@/components/ui/menubar";
import { MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Building, ChevronDown, DollarSign, FileOutput, Zap } from "lucide-react";
import React from "react";
import ChartsSection from "./charts-section";

export default function EnergyDashboardRenter() {


  const [selected, setSelected] = React.useState("Mês atual");
  const options = ["Mês atual", "6 meses", "1 ano", "Selecionar período"];

  const handleSelect = (option: string) => {
    setSelected(option);
  };


  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2 w-full max-w-2xl">
            {/* Mobile */}
            <Menubar className="lg:hidden justify-start p-1 border-input bg-card rounded-sm">
              <MenubarMenu>
                <MenubarTrigger className="w-full flex items-center justify-between data-[state=open]:bg-card rounded-sm gap-2">
                  <span>{selected}</span>
                  <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
                </MenubarTrigger>
                <MenubarContent align="start" alignOffset={-4} className="w-[--radix-menubar-trigger-width] bg-card">
                  {options.map((option) => (
                    <MenubarItem key={option} onClick={() => handleSelect(option)} className="cursor-pointer">
                      {option}
                    </MenubarItem>
                  ))}
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            {/* Desktop */}
            <div className="hidden lg:flex justify-start bg-primary gap-2 rounded-sm h-10 items-center p-1">
              {options.map((option) => (
                <Button
                  key={option}
                  variant={selected === option ? "default" : "ghost"}
                  className={`h-8 px-3 py-1 rounded-xs ${
                    selected === option
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

        {/* Charts */}
        <ChartsSection/>

      </div>
    </div>
  );
}
