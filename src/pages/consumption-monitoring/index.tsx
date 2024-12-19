import { Layout } from '@/components/common/Layout';
import { ConsumerUnitsMap } from '@/features/consumption-monitoring/components/consumer-unit-map';
import { ConsumptionMonitoring } from '@/features/consumption-monitoring/components/consumption-monitoring';
import { MonthlyBillDetails } from '@/features/consumption-monitoring/components/monthly-bill-details';
import { SearchUC } from '@/features/consumption-monitoring/components/search-uc';

export function ConsumptionMonitoringPage() {
  return (
    <Layout>
      <Layout.Main className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 h-full">
          <ConsumptionMonitoring className="h-full" />
        </div>
        <div className="lg:col-span-1 h-full">
          <MonthlyBillDetails className="h-full" />
        </div>
        <div className="lg:col-span-2 h-full">
          <ConsumerUnitsMap />
        </div>
        <div className="lg:col-span-1 h-full">
          <SearchUC />
        </div>
      </Layout.Main>
    </Layout>
  );
}


