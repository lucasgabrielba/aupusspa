import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type {
  OrganizationBrand,
  OrganizationDTO,
  OrganizationPreferences,
} from '@/types/dtos/organization-dto';

type OrganizationsStoreState = {
  organizations: OrganizationDTO[] | null;
  setOrganizations: (newOrganizations: OrganizationDTO[]) => void;
  updateOrganization: (partialOrganization: Partial<OrganizationDTO>) => void;
  clearOrganizations: () => void;

  organization: OrganizationDTO | null;
  setOrganization: (organizationId: string) => void;
  clearorganization: () => void;

  preferences: OrganizationPreferences | null;
  setPreferences: (newPreferences: OrganizationPreferences) => void;
  updatePreferences: (
    partialPreferences: Partial<OrganizationPreferences>,
  ) => void;

  brand: OrganizationBrand | null;
  setBrand: (newBrand: OrganizationBrand) => void;
  updateBrand: (partialBrand: Partial<OrganizationBrand>) => void;
};

export const useOrganizationsStore = create(
  persist<OrganizationsStoreState>(
    (set, get) => ({
      organizations: null,
      setOrganizations: (newOrganizations: OrganizationDTO[]) =>
        set({ organizations: newOrganizations }),

      updateOrganization: (partialOrganization: Partial<OrganizationDTO>) =>
        set((state) => ({
          organizations: state.organizations?.map((org) =>
            org.id === partialOrganization.id
              ? { ...org, ...partialOrganization }
              : org,
          ) ?? null,
        })),

      clearOrganizations: () => set({ organizations: null }),

      organization: null,
      setOrganization: (organizationId: string) => {
        const organization = get().organizations?.find(
          (org) => org.id === organizationId,
        );
        if (organization) {
          set({
            organization: organization,
            brand: organization.brand,
            preferences: organization.preferences,
          });
        }
      },

      clearorganization: () => set({ organization: null }),

      preferences: null,
      setPreferences: (newPreferences: OrganizationPreferences) =>
        set({ preferences: newPreferences }),
      updatePreferences: (
        partialPreferences: Partial<OrganizationPreferences>,
      ) =>
        set((state) => ({
          preferences: { ...state.preferences, ...partialPreferences },
        })),

      brand: null,
      setBrand: (newBrand: OrganizationBrand) => set({ brand: newBrand }),
      updateBrand: (partialBrand: Partial<OrganizationBrand>) =>
        set((state) => ({ brand: { ...state.brand, ...partialBrand } })),
    }),
    {
      name: 'organization-storage',
      version: 3,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
