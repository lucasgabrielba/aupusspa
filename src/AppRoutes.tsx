import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Login } from './pages/login';
import { AppTemplate } from './pages/AppTemplate';
import { ConsumptionMonitoringPage } from './pages/consumption-monitoring';
import { OpportunitiesPage } from './pages/opportunities';
import { InvoicesPage } from './pages/invoices';
import { PowerGenerationPage } from './pages/power-generation';
import { BenefitedPage } from './pages/power-generation/benefited';
import { ClientsMonitoringPage } from './pages/clients-monitoring';
import { ManagementFrameworkPage } from './pages/management-framework';
import { FeatureWrapper } from './components/common/FeatureWrapper';
import { PowerPlantsPage } from './pages/power-plants';
import { UsersPage } from './pages/users';
import { ConsumptionMonitoringRenterPage } from './pages/consumption-monitoring-renter';
import { DefaultRedirect } from './components/common/default-redirect';
import { NewUserPage } from './pages/users/new-user';

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
        element: (
          <DefaultRedirect />
        ),
      },
      {
        path: 'monitoramento-de-consumo',
        element: (
          <FeatureWrapper feature="ConsumptionMonitoring">
            <ConsumptionMonitoringPage />
          </FeatureWrapper>
        ),
      },
      {
        path: 'locatario/monitoramento-de-consumo',
        element: (
          <FeatureWrapper feature="ConsumptionMonitoringRenter">
            <ConsumptionMonitoringRenterPage />
          </FeatureWrapper>
        ),
      },
      {
        path: 'minhas-usinas',
        element: (
          <FeatureWrapper feature="PowerPlants">
            <PowerPlantsPage />
          </FeatureWrapper>
        ),
      },
      {
        path: '/geracao-de-energia',
        children: [
          {
            index: true,
            element: (
              <FeatureWrapper feature="PowerGeneration">
                <PowerGenerationPage />
              </FeatureWrapper>
            ),
          },
          {
            path: 'beneficiadas',
            element: (
              <FeatureWrapper feature="PowerGeneration">
                <BenefitedPage />
              </FeatureWrapper>
            ),
          },
        ],
      },
      {
        path: 'rastreador-de-oportunidades',
        children: [
          {
            index: true,
            element: (
              <FeatureWrapper feature="OpportunitiesTracking">
                <OpportunitiesPage />
              </FeatureWrapper>
            ),
          },
        ],
      },
      {
        path: '/faturas',
        children: [
          {
            index: true,
            element: (
              <FeatureWrapper feature="Invoices">
                <InvoicesPage />
              </FeatureWrapper>
            ),
          },
        ],
      },
      {
        path: 'monitoramento-de-clientes',
        element: (
          <FeatureWrapper feature="Admin">
            <ClientsMonitoringPage />
          </FeatureWrapper>
        ),
      },
      {
        path: 'clube-aupus',
        element: (
          <FeatureWrapper feature="Admin">
            <ManagementFrameworkPage />
          </FeatureWrapper>
        ),
      },
      {
        path: 'usuarios',
        children: [
          {
            index: true,
            element: (
              <FeatureWrapper feature="Admin">
                <UsersPage />
              </FeatureWrapper>
            ),
          },
          {
            path: 'novo/:type',
            element: (
              <FeatureWrapper feature="Admin">
                <NewUserPage />
              </FeatureWrapper>
            ),
          }
        ]
      },
      {
        path: '*',
        element: (
          <FeatureWrapper feature="ConsumptionMonitoring">
            <Navigate to="/monitoramento-de-consumo" />
          </FeatureWrapper>
        ),
      },
    ],
  },
]);
