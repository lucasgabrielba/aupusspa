import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { UserDTO } from '@/types/dtos/user-dto';

type UserStoreState = {
  user: UserDTO | null;
  setUser: (newUser: UserDTO) => void;
  updateUser: (partialUser: Partial<UserDTO>) => void;
  clearUser: () => void;
};

export const useUserStore = create(
  persist<UserStoreState>(
    (set) => ({
      user: null,
      setUser: (newUser: UserDTO) => set({ user: newUser }),
      updateUser: (partialUser: Partial<UserDTO>) =>
        set((state) => ({ user: { ...state.user, ...partialUser } })),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'user-storage',
      version: 3,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
