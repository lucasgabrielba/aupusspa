import { OrganizationDTO } from './organization-dto';
import { RoleDTO } from './role-dto';

export interface UserDTO {
  id: string;
  status: UserStatus;

  organizations?: OrganizationDTO[];
  current_organization_id?: string;
  current_organization?: OrganizationDTO;

  name: string;
  email: string;

  roles: UserRole[];

  role?: string;

  created_at: Date;
  updated_at: Date;
}

export enum UserStatus {
  ACTIVE = 'Ativo',
  INACTIVE = 'Inativo',
}

export interface UserRole extends RoleDTO {
  pivot: {
    model_type: string;
    model_id: string;
    role_id: number;
  };
}
