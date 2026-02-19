import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App.tsx';
import '@/styles/global.css';

import { DAppKitProvider } from '@mysten/dapp-kit-react';
import { dAppKit } from '../utils/dapp-kit.ts';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <DAppKitProvider dAppKit={dAppKit}>
        <App />
      </DAppKitProvider>
    </QueryClientProvider>
  </StrictMode>,
);
