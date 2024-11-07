import { Card } from "@/components/ui/card";
import { Building, DollarSign, Zap } from "lucide-react";

export function MetricCards() {

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto space-y-6">
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
      </div>
    </div>
  );
}
