import { ChartNoAxesColumn } from '@/components/icons/ChartNoAxesColumn';
import { UserAbilities } from '@/types/dtos/user-dto';
import {
  type LucideIcon,
  Activity,
  Zap,
  Magnet,
  DollarSign,
  Factory,
  Component,
  SquareActivity,
  Users,
} from 'lucide-react';

export type NavigationLink = {
  key: string;
  path: string;
  featureKey?: UserAbilities;
  icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  hint?: string;
  links?: NavigationLink[];
};

export const navigationLinks: Array<NavigationLink> = [
  {
    key: 'admin',
    featureKey: 'Admin',
    path: '/monitoramento-de-clientes',
    icon: ChartNoAxesColumn ,
    label: 'Monitoramento de Clientes',
    hint: 'Monitoramento de Clientes',
  },
  {
    key: 'admin',
    featureKey: 'Admin',
    path: '/clube-aupus',
    icon: Component,
    label: 'Clube Aupus',
    hint: 'Clube Aupus',
  },
  {
    key: 'consumptionMonitoring',
    featureKey: 'ConsumptionMonitoring',
    path: '/monitoramento-de-consumo',
    icon: Activity,
    label: 'Monitoramento de Consumo',
    hint: 'Monitoramento de Consumo',
  },
  {
    key: 'consumptionMonitoringRenter',
    featureKey: 'ConsumptionMonitoringRenter',
    path: 'locatario/monitoramento-de-consumo',
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
    links: [
      {
        key: 'powerGeneration',
        featureKey: 'PowerGeneration',
        path: '/geracao-de-energia/beneficiadas',
        icon: SquareActivity,
        label: 'Beneficiadas',
        hint: 'Beneficiadas',
      }
    ]
  },
  {
    key: 'powerPlants',
    featureKey: 'PowerPlants',
    path: '/minhas-usinas',
    icon: Factory,
    label: 'Minhas Usinas',
    hint: 'Minhas Usinas',
  },
  {
    key: 'opportunityTracker',
    featureKey: 'OpportunitiesTracking',
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
  {
    key: 'users',
    featureKey: 'Admin',
    path: '/usuarios',
    icon: Users,
    label: 'Usuários',
    hint: 'Usuários',
  }
];
