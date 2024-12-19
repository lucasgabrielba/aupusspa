import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { UserDTO } from '@/types/dtos/user-dto';

type UserStoreState = {
  user: UserDTO | null;
  setUser: (newUser: UserDTO) => void;
  updateUser: (partialUser: Partial<UserDTO>) => void;
  clearUser: () => void;

  abilities: string[] | null;
  setAbilities: (newAbilities: string[]) => void;
  updateAbilities: (partialAbilities: Partial<string[]>) => void;
};

export const useUserStore = create(
  persist<UserStoreState>(
    (set) => ({
      user: null,
      abilities: null,

      setUser: (newUser: UserDTO) =>
        set({
          user: newUser,
          abilities: newUser.abilities || null, 
        }),

      updateUser: (partialUser: Partial<UserDTO>) =>
        set((state) => ({
          user: { ...state.user, ...partialUser },
          abilities: partialUser.abilities
            ? partialUser.abilities
            : state.user?.abilities || state.abilities, 
        })),

      clearUser: () =>
        set({
          user: null,
          abilities: null,
        }),

      setAbilities: (newAbilities: string[]) => set({ abilities: newAbilities }),

      updateAbilities: (partialAbilities: Partial<string[]>) =>
        set((state) => ({
          abilities: state.abilities
            ? [...state.abilities, ...partialAbilities]
            : partialAbilities,
        })),
    }),
    {
      name: 'user-storage',
      version: 3,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
