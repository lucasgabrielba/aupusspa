import { useOrganizationsStore } from '@/store/useOrganizationsStore';
import { OrganizationAbilities } from '@/types/dtos/organization-dto';
import { type ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type FeatureWrapperProps = {
  feature: OrganizationAbilities;
  children: ReactNode;
};

export function FeatureWrapper({ feature, children }: FeatureWrapperProps) {
  const navigate = useNavigate();
  const { abilities } = useOrganizationsStore();

  useEffect(() => {
    if (abilities && !abilities.includes(feature)) {
      navigate('/', { replace: true });
    }
  }, [abilities, feature, navigate]);

  return children;
}
