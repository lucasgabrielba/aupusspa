import { Layout } from '@/components/common/Layout';
import { EnergyChart } from '@/features/admin/components/management-framework/energy-chart';
import LeaseTableCard from '@/features/admin/components/management-framework/lease-table-card';
import { ManagementFrameworkMetricCards } from '@/features/admin/components/management-framework/management-framework-metric-cards';
import { TitleCardAdmin } from '@/features/admin/components/title-card-admin';

export function ManagementFrameworkPage() {
  return (
    <Layout>
      <Layout.Main>
        <TitleCardAdmin title='Quadro de Gerenciamento' description='Acompanhe o consumo total, valores acumulados e o número de unidades consumidoras cadastradas' />
        <ManagementFrameworkMetricCards />
        <EnergyChart />
        <LeaseTableCard />
      </Layout.Main>
    </Layout>
  );
}
