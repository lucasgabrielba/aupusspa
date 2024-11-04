import { History } from '../utils/history';

export interface OrganizationDTO {
  id: string;
  status: OrganizationStatus;

  name: string;
  email: string;
  phones: string[];
  document?: string;

  history: History[];
  preferences: OrganizationPreferences;
  abilities: OrganizationAbilities[];
  brand: OrganizationBrand;

  created_at: Date;
  updated_at: Date;
}

export enum OrganizationStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  FREE_TRIAL = 'free_trial',
}

export interface OrganizationPreferences {
  multiple_items_per_order: boolean;

  warranty_days: number;
  estimated_completion_days: number;
  max_days_under_evaluation: number;
  max_days_waiting_for_repair: number;

  closure_terms: string;
  service_terms: string;
  withdrawal_terms: string;
  warranty_terms: string;
}

export interface OrganizationBrand {
  name: string;
  logoPath: string;
  bannerPath: string;
}

export type OrganizationAbilities =
  | 'Dashboard'
  | 'Settings'
  | 'ConsumptionMonitoring'
  | 'PowerGeneration'
  | 'OpportunityTracker'
  | 'Invoices'
