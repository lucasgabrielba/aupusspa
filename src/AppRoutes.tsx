import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Login } from './pages/login';
// import { FeatureWrapper } from './components/common/FeatureWrapper';
import { AppTemplate } from './pages/AppTemplate';
import { ConsumptionMonitoringPage } from './pages/consumption-monitoring';
import { OpportunitiesPage } from './pages/opportunities';
import { InvoicesPage } from './pages/invoices';
import { PowerGenerationPage } from './pages/power-generation';
import { BenefitedPage } from './pages/power-generation/benefited';

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
        path: '/monitoramento-de-consumo',
        children: [
          {
            index: true,
            element: (
              // <FeatureWrapper feature="ConsumptionMonitoring">
                <ConsumptionMonitoringPage />
              // </FeatureWrapper>
            ),
          },
        ],
      },
      {
        path: '/geracao-de-energia',
        children: [
          {
            index: true,
            element: (
              // <FeatureWrapper feature="PowerGeneration">
                <PowerGenerationPage />
              // </FeatureWrapper>
            ),
          },
          {
            path: 'beneficiadas',
            element: (
              // <FeatureWrapper feature="PowerGeneration">
                <BenefitedPage />
              // </FeatureWrapper>
            ),
          },
        ],
      },
      {
        path: '/rasreador-de-oportunidades',
        children: [
          {
            index: true,
            element: (
              // <FeatureWrapper feature="OpportunityTracker">
                <OpportunitiesPage />
              // </FeatureWrapper>
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
              // <FeatureWrapper feature="Invoices">
                <InvoicesPage />
              // </FeatureWrapper>
            ),
          },
        ],
      },
      {
        path: '*',
        element: <Navigate to={'/'} />,
      },
    ],
  },
]);
