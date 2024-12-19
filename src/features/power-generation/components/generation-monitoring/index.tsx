import { TitleCard } from "../../../../components/common/title-card";
import { MetricCards } from "./metric-cards";

export interface BillingData {
  month: string;
  hasInvoice: boolean;
}

export interface Unit {
  id: string;
  name: string;
  logoPath?: string;
}

interface GenerationMonitoringProps {
  className?: string;
}

export function GenerationMonitoring({ className }: GenerationMonitoringProps) {

  return (
    <div className={`flex flex-col w-full gap-6 ${className}`}>
      <TitleCard
        title="Geração de Energia"
        description="Acompanhe o consumo total, valores acumulados e o número de unidades consumidoras cadastradas"
         />
      <MetricCards />
    </div>
  );
}
