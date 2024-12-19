import { useUserStore } from '@/store/useUserStore';
import { Navigate } from 'react-router-dom';

export function DefaultRedirect() {
  const { user } = useUserStore();

  if (!user) {
    return <Navigate to="/login" />;
  }

  const userRole = user.roles[0]?.name;
console.log("userRole", userRole);
  switch (userRole) {
    case 'Admin':
      return <Navigate to="/monitoramento-de-clientes" />;
    case 'Cativo':
      return <Navigate to="/monitoramento-de-consumo" />;
    case 'Locatário':
      return <Navigate to="/locatario/monitoramento-de-consumo" />;
    case 'Usineiro':
      return <Navigate to="/minhas-usinas" />;
    default:
      return;
  }
}
