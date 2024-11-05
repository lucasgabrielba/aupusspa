import EnergyDashboard from "./energy-dashbard";
import { TitleCard } from "../../../../components/common/title-card";

export interface BillingData {
  month: string;
  hasInvoice: boolean;
}

export interface Unit {
  id: string;
  name: string;
  logoPath?: string;
}

interface ConsumptionMonitoringProps {
  className?: string;
}

export function ConsumptionMonitoring({ className }: ConsumptionMonitoringProps) {

  return (
    <div className={`flex flex-col w-full gap-6 ${className}`}>
      <TitleCard
        title="Monitoramento de Consumo"
        description="Acompanhe o consumo total, valores acumulados e o número de unidades consumidoras cadastradas"
         />
      <EnergyDashboard />
    </div>
  );
}
