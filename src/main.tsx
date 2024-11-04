import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import '@/assets/globals.css';

import App from './App';
import { ThemeProvider } from './components/theme-provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
