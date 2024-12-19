import { OrganizationDTO } from './organization-dto';

export interface UserDTO {
  id: string;
  status: UserStatus;

  organizations?: OrganizationDTO[];
  current_organization_id?: string;
  current_organization?: OrganizationDTO;

  name: string;
  email: string;

  roles: UserRole[];

  abilities: UserAbilities[];

  role?: string;

  created_at: Date;
  updated_at: Date;
}

export enum UserStatus {
  ACTIVE = 'Ativo',
  INACTIVE = 'Inativo',
}

export interface UserRole {
  organizationId: string;
  name: string;
}

export type UserAbilities =
  | 'Home'
  | 'Dashboard'
  | 'Settings'
  | 'ConsumptionMonitoring'
  | 'PowerGeneration'
  | 'OpportunitiesTracking'
  | 'Invoices'
  | 'PowerPlants'
  | 'ConsumptionMonitoringRenter'
  | 'Admin';