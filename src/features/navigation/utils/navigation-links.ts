import { OrganizationAbilities } from '@/types/dtos/organization-dto';
import {
  type LucideIcon,
  Activity,
  Zap,
  Magnet,
  DollarSign,
} from 'lucide-react';

export type NavigationLink = {
  key: string;
  path: string;
  featureKey?: OrganizationAbilities;
  icon: LucideIcon;
  label: string;
  hint?: string;
  links?: NavigationLink[];
};

export const navigationLinks: Array<NavigationLink> = [
  {
    key: 'consumptionMonitoring',
    featureKey: 'ConsumptionMonitoring',
    path: '/consumption-monitoring',
    icon: Activity,
    label: 'Monitoramento de Consumo',
    hint: 'Monitoramento de Consumo',
  },
  {
    key: 'powerGeneration',
    featureKey: 'PowerGeneration',
    path: '/power-generation',
    icon: Zap,
    label: 'Geração de Energia',
    hint: 'Geração de Energia',
  },
  {
    key: 'opportunityTracker',
    featureKey: 'OpportunityTracker',
    path: '/opportunity-tracker',
    icon: Magnet,
    label: 'Rastreador de Oportunidades',
    hint: 'Rastreador de Oportunidades',
  },
  {
    key: 'invoices',
    featureKey: 'Invoices',
    path: '/invoices',
    icon: DollarSign,
    label: 'Minhas Faturas',
    hint: 'Minhas Faturas',
  },
];
