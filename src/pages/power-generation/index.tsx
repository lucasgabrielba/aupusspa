import { Layout } from '@/components/common/Layout';
import { ConsumerUnitsMap } from '@/features/consumption-monitoring/components/consumer-unit-map';
import { SearchUC } from '@/features/consumption-monitoring/components/search-uc';
import { GenerationMonitoring } from '@/features/power-generation/components/generation-monitoring';
import Dashboard from '@/features/power-generation/components/generation-monitoring/dashboard';
import { GenerationData } from '@/features/power-generation/components/generation-monitoring/generation-data';

export function PowerGenerationPage() {
  return (
    <Layout>
      <Layout.Main className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 h-full">
          <GenerationMonitoring className="h-full" />
        </div>
        <div className="lg:col-span-1 h-full">
          <GenerationData className="h-full" />
        </div>

        <div className='lg:col-span-3 w-full'>
        <Dashboard/>
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
