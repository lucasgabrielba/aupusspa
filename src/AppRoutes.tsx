import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Login } from './pages/login';
// import { FeatureWrapper } from './components/common/FeatureWrapper';
import { AppTemplate } from './pages/AppTemplate';
import { ConsumptionMonitoringPage } from './pages/consumption-monitoring';
import { OpportunitiesPage } from './pages/opportunities';
import { InvoicesPage } from './pages/invoices';

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
        path: '/consumption-monitoring',
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
        path: '/power-generation',
        children: [
          {
            index: true,
            element: (
              // <FeatureWrapper feature="PowerGeneration">
                <ConsumptionMonitoringPage />
              // </FeatureWrapper>
            ),
          },
        ],
      },
      {
        path: '/opportunity-tracker',
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
        path: '/invoices',
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
