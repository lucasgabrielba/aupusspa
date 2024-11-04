import { useCallback } from 'react';

import { api } from '@/config/api';
import { useUserStore } from '@/store/useUserStore';
import { useOrganizationsStore } from '@/store/useOrganizationsStore';

interface Credentials {
  email: string;
  password: string;
}

export function useAuth() {
  const setUser = useUserStore((state) => state.setUser);
  const { setOrganizations, setOrganization } = useOrganizationsStore();

  const loginUser = useCallback(async (credentials: Credentials) => {
    await api.get('/sanctum/csrf-cookie');
    const response = await api.post('/auth/login', credentials);
    const token = response.data.token;
    localStorage.setItem('authToken', token);
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }, []);

 const fetchUser = useCallback(async () => {
    try {
      const response = await api.get('/auth/get-me');
      setUser(response.data);
      setOrganizations(response.data?.organizations);
      setOrganization(response.data?.current_organization_id);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }, []);

  return { loginUser, fetchUser };
}
