import { Layout } from '@/components/common/Layout';
import { ChartsArea } from '@/features/admin/components/charts-area';
import { MetricCardsAdmin } from '@/features/admin/components/metric-cards-admin';
import { TitleCardAdmin } from '@/features/admin/components/title-card-admin';

export function AdminPage() {
  return (
    <Layout>
      <Layout.Main>
        <TitleCardAdmin title='Monitoramento de clientes' description='Acompanhe o consumo total, valores acumulados e o número de unidades consumidoras cadastradas' />
        <MetricCardsAdmin/>
        <ChartsArea/>
      </Layout.Main>
    </Layout>
  );
}
