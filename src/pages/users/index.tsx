import { Layout } from '@/components/common/Layout';
import { UsersTable } from '@/features/users/components/users-table';

export function UsersPage() {
  return (
    <Layout>
      <Layout.Main>
        <UsersTable />
      </Layout.Main>
    </Layout>
  );
}
