import { Layout } from '@/components/common/Layout';
import { TitleCard } from '@/components/common/title-card';
import InvoicesTable from '@/features/invoices-table';

export function InvoicesPage() {
  return (
    <Layout>
      <Layout.Main>
        <TitleCard title='Minhas faturas' description='Acompanhe a geração total de energia, valoresgerado e o número de beneficiários cadastradas' />
        <InvoicesTable/>
      </Layout.Main>
    </Layout>
  );
}
