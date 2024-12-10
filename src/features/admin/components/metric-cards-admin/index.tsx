import { Card } from "@/components/ui/card";
import { DollarSign, Zap, Building, Users, Activity, AlertTriangle, Box } from "lucide-react";

export function MetricCardsAdmin() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
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
              <span>Demanda FP</span>
              <Activity className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">x</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Demanda P</span>
              <Activity className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">x</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Preço médio</span>
              <DollarSign className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">R$ 250,00</div>
          </Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Clientes</span>
              <Users className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">10</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Grupo A</span>
              <Users className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">200</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Grupo B</span>
              <Users className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">100</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Unidades</span>
              <Building className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">100</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Inadimplência</span>
              <AlertTriangle className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">100</div>
          </Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Quantos clientes possui geração</span>
              <Users className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">100</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Quantidade de UGs</span>
              <Box className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">1000</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Energia injetada</span>
              <Zap className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">1.000 kWh</div>
          </Card>
        </div>
      </div>
    </div>
  );
}
