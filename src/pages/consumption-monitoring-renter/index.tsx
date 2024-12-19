import { Layout } from '@/components/common/Layout';
import { TitleCard } from '@/components/common/title-card';
import EnergyDashboardRenter from '@/features/consumption-monitoring-renter/components/energy-dashboard-renter';

export function ConsumptionMonitoringRenterPage() {
  return (
    <Layout>
      <Layout.Main>
          <TitleCard
            title="Monitoramento de Consumo"
            description="Acompanhe o consumo total, valores acumulados e o número de unidades consumidoras cadastradas"
          />
          <EnergyDashboardRenter/>
      </Layout.Main>
    </Layout>
  );
}


