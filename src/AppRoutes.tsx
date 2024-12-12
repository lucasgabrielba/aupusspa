import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Login } from './pages/login';
import { AppTemplate } from './pages/AppTemplate';
import { ConsumptionMonitoringPage } from './pages/consumption-monitoring';
import { OpportunitiesPage } from './pages/opportunities';
import { InvoicesPage } from './pages/invoices';
import { PowerGenerationPage } from './pages/power-generation';
import { BenefitedPage } from './pages/power-generation/benefited';
import { AdminPage } from './pages/admin';
import { ManagementFrameworkPage } from './pages/admin/management-framework';

export const appRoutes = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <AppTemplate />,
    children: [
      {
        index: true,
        element: <Navigate to="/monitoramento-de-consumo" />,
      },
      {
        path: 'monitoramento-de-consumo',
        element: <ConsumptionMonitoringPage />,
      },
      {
        path: '/geracao-de-energia',
        children: [
          {
            index: true,
            element: <PowerGenerationPage />,
          },
          {
            path: 'beneficiadas',
            element: <BenefitedPage />,
          },
        ],
      },
      {
        path: 'rastreador-de-oportunidades',
        children: [
          {
            index: true,
            element: <OpportunitiesPage />,
          },
        ],
      },
      {
        path: '/faturas',
        children: [
          {
            index: true,
            element: <InvoicesPage />,
          },
        ],
      },
      {
        path: '/administrador',
        children: [
          {
            index: true,
            element: <Navigate to="/administrador/monitoramento-de-clientes" />,
          },
          {
            path: 'monitoramento-de-clientes',
            element: <AdminPage />,
          },
          {
            path: 'quadro-de-gerenciamento',
            element: <ManagementFrameworkPage />,
          },
        ],
      },
      {
        path: '*',
        element: <Navigate to="/monitoramento-de-consumo" />,
      },
    ],
  },
]);