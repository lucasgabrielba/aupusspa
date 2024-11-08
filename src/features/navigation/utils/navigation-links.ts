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
    path: '/monitoramento-de-consumo',
    icon: Activity,
    label: 'Monitoramento de Consumo',
    hint: 'Monitoramento de Consumo',
  },
  {
    key: 'powerGeneration',
    featureKey: 'PowerGeneration',
    path: '/geracao-de-energia',
    icon: Zap,
    label: 'Geração de Energia',
    hint: 'Geração de Energia',
  },
  {
    key: 'opportunityTracker',
    featureKey: 'OpportunityTracker',
    path: '/rastreador-de-oportunidades',
    icon: Magnet,
    label: 'Rastreador de Oportunidades',
    hint: 'Rastreador de Oportunidades',
  },
  {
    key: 'invoices',
    featureKey: 'Invoices',
    path: '/faturas',
    icon: DollarSign,
    label: 'Minhas Faturas',
    hint: 'Minhas Faturas',
  },
];
