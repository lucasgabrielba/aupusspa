import { InvestmentChart } from "./investment-chart";
import { PaymentStatusCard } from "./payment-status";

export function ChartsArea() {
  return (
    <div className="w-full flex gap-4 items-stretch flex-col lg:flex-row">
      <div className="flex-1">
        <InvestmentChart />
      </div>
      <div className="flex-1">
        <PaymentStatusCard />
      </div>
    </div>
  );
}
