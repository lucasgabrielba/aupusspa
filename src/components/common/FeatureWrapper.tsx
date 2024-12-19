import { useUserStore } from '@/store/useUserStore';
import { UserAbilities } from '@/types/dtos/user-dto';
import { type ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type FeatureWrapperProps = {
  feature: UserAbilities;
  children: ReactNode;
};

export function FeatureWrapper({ feature, children }: FeatureWrapperProps) {
  const navigate = useNavigate();
  const { abilities } = useUserStore();

  useEffect(() => {
    if (abilities && !abilities.includes(feature)) {
      navigate('/', { replace: true });
    }
  }, [abilities, feature, navigate]);

  return children;
}
