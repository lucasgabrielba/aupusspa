import { Layout } from '@/components/common/Layout';
import { UserForm, UserType } from '@/features/users/components/new-user/user-form';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function NewUserPage() {
  const { type } = useParams();
  const [userType, setUserType] = useState(type);
  
  useEffect(() => {
    if (["cativo", "usineiro", "locatario"].includes(type)) {
      setUserType(type);
    }
  }, [type]);
  return (
    <Layout>
      <Layout.Main>
        <UserForm userType={userType as UserType} />
      </Layout.Main>
    </Layout>
  );
}