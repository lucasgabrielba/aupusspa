import { Layout } from '@/components/common/Layout';
import { ChartsArea } from '@/features/power-plants/components/charts-area';
import { MetricCardsUsineiro } from '@/features/power-plants/components/metric-cards-usineiro';
import { PowerPlantsMap } from '@/features/power-plants/components/power-plants-map';
import { SearchPowerPlants } from '@/features/power-plants/components/search-power-plats';
import { TitleCardUsineiro } from '@/features/power-plants/components/title-card';

export function PowerPlantsPage() {
  return (
    <Layout>
      <Layout.Main>
        <TitleCardUsineiro
          title="Minhas usinas"
          description="Acompanhe o consumo total, valores acumulados e o número de usinas cadastradas"
        />
        <MetricCardsUsineiro />
        <ChartsArea />
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="flex-1 h-[300px] md:h-[400px]">
            <PowerPlantsMap />
          </div>
          <div className="w-full md:w-1/3 h-[300px] md:h-[400px]">
            <SearchPowerPlants />
          </div>
        </div>
      </Layout.Main>
    </Layout>
  );
}
