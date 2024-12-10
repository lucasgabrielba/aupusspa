import { EnergyCompensationCard } from "./energy-compensation-card";
import { EnergyConsumptionCard } from "./energy-consumption-card";
import { OpportunitiesCard } from "./opportunities-card";
import { PaymentStatusCard } from "./payment-status-card";

export function ChartsArea() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4">
      <EnergyConsumptionCard />
      <OpportunitiesCard />
      <EnergyCompensationCard />
      <PaymentStatusCard />
    </div>
  );
}