import { Layout } from '@/components/common/Layout';
import { ChartsArea } from '@/features/admin/components/charts-area';
import ClientsTable from '@/features/admin/components/clients-table';
import { MetricCardsAdmin } from '@/features/admin/components/metric-cards-admin';
import { TitleCardAdmin } from '@/features/admin/components/title-card-admin';
import { ConsumerUnitsMap } from '@/features/consumption-monitoring/components/consumer-unit-map';

export function AdminPage() {
  return (
    <Layout>
      <Layout.Main>
        <TitleCardAdmin title='Monitoramento de clientes' description='Acompanhe o consumo total, valores acumulados e o número de unidades consumidoras cadastradas' />
        <MetricCardsAdmin/>
        <ChartsArea/>
        <ClientsTable/>
        <ConsumerUnitsMap/>
      </Layout.Main>
    </Layout>
  );
}
