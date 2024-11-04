import * as React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useUserStore } from '@/store/useUserStore';
import LoginForm from '@/features/login/components/LoginForm';
import { Layout } from '@/components/common/Layout';

export function Login() {
  const emailInputRef = React.useRef<HTMLInputElement | null>(null);
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo') || '/dashboard';
  const navigate = useNavigate();
  const { user } = useUserStore();

  React.useEffect(() => {
    if (user?.id) {
      navigate(redirectTo);
    }

    if (emailInputRef.current) emailInputRef.current.focus();
  }, [user?.id, redirectTo, navigate]);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Layout>
        <Layout.Main className="flex items-center justify-center">
          <LoginForm />
        </Layout.Main>
      </Layout>
    </div>
  );
}
