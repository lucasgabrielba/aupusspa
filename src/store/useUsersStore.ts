import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { UserDTO } from '@/types/dtos/user-dto';

type UsersStoreState = {
  users: UserDTO[] | [];
  setUsers: (users: UserDTO[]) => void;
  addUser: (newUser: UserDTO) => void;
  updateUser: (userId: string, partialUser: Partial<UserDTO>) => void;
  removeUser: (userId: string) => void;
  clearUsers: () => void;
};

export const useUsersStore = create(
  persist<UsersStoreState>(
    (set) => ({
      users: [],
      setUsers: (users) => set({ users }),
      addUser: (newUser) => set((state) => ({ users: [...state.users, newUser] })),
      updateUser: (userId, partialUser) =>
        set((state) => ({
          users: state.users.map((user) =>
            user.id === userId ? { ...user, ...partialUser } : user
          ),
        })),
      removeUser: (userId) =>
        set((state) => ({
          users: state.users.filter((user) => user.id !== userId),
        })),
      clearUsers: () => set({ users: [] }),
    }),
    {
      name: 'users-storage',
      version: 3,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
