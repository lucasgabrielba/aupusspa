import { RouterProvider } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Toaster } from './components/ui/toaster';
import { TooltipProvider } from './components/ui/tooltip';

import { appRoutes } from './AppRoutes';
import { FIFTEEN_MINUTES, FIVE_MINUTES, isDev } from './config/constants';
import { ThemeProvider } from './components/theme-provider';
import React from 'react';
import { configureAxios } from './config/api';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      gcTime: FIVE_MINUTES,
      staleTime: FIFTEEN_MINUTES,
    },
  },
});
export default function App() {
  React.useEffect(() => {
    configureAxios();
  }, []);

  return (
    <>
      <Analytics />
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          {isDev && (
            <ReactQueryDevtools
              initialIsOpen={false}
              buttonPosition="bottom-right"
            />
          )}
          <TooltipProvider>
            <RouterProvider router={appRoutes} />
            <Toaster />
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
