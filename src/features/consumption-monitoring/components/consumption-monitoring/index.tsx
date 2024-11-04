import EnergyDashboard from "./energy-dashbard";
import { MonitoringCard } from "./monitoring-card";

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

  const billingDataMock: BillingData = {
    month: 'outubro',
    hasInvoice: true,
  };

  const unitsMock: Unit[] = [
    {
      id: '1',
      name: 'Unidade 1',
      logoPath: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      name: 'Unidade 2',
    },
    {
      id: '3',
      name: 'Unidade 3',
    },
  ]


  return (
    <div className={`flex flex-col w-full gap-6 ${className}`}>
      <MonitoringCard billingData={billingDataMock} units={unitsMock} />
      <EnergyDashboard />
    </div>
  );
}
