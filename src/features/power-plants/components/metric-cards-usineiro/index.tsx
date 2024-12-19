import { Card } from "@/components/ui/card";
import { DollarSign, Zap, Activity, AlertCircle } from "lucide-react";

export function MetricCardsUsineiro() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Primeira Linha */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Faturamento</span>
              <DollarSign className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">R$ 1.000.000,00</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Energia Gerada</span>
              <Zap className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">1.000.000 kWh</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Energia Injetada</span>
              <Zap className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">1.000.000 kWh</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Energia Compensada</span>
              <Zap className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">1.000.000 kWh</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Saldo em Créditos</span>
              <Zap className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">1.000.000 kWh</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Demanda</span>
              <Activity className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">0 kWh</div>
          </Card>
        </div>

        {/* Segunda Linha */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Valor Créditos</span>
              <DollarSign className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">R$ 1.000,00</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Impostos</span>
              <DollarSign className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">R$ 0,00</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Custo com Demanda</span>
              <AlertCircle className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">R$ 0,00</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Corretora</span>
              <DollarSign className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">R$ 0,00</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>O&M</span>
              <Activity className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">0 kWh</div>
          </Card>
          <Card className="p-4 rounded-sm">
            <div className="flex justify-between items-center text-card-foreground mb-2">
              <span>Receita</span>
              <DollarSign className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold">R$ 0,00</div>
          </Card>
        </div>
      </div>
    </div>
  );
}
