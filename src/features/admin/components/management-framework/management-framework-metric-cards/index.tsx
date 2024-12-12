import { Card } from "@/components/ui/card";
import { Building, DollarSign, Zap } from "lucide-react";

export function ManagementFrameworkMetricCards() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* First row of cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Faturamento</span>
              <DollarSign className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">R$ 0,00</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Clientes</span>
              <Building className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">0</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Desconto médio</span>
              <DollarSign className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">0%</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Valor demanda G</span>
              <DollarSign className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">R$ 0,00</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Inadimplentes</span>
              <DollarSign className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">0%</div>
          </Card>
        </div>

        {/* Second row of cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Crédito acumulado</span>
              <Zap className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">0 kWh</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Usinas</span>
              <Building className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">0</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Valor em crédito acumulado</span>
              <DollarSign className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">R$ 0,00</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Ticket médio</span>
              <DollarSign className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">R$ 0,00</div>
          </Card>
        </div>
      </div>
    </div>
  );
}