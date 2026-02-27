import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RootProvider } from './providers/root-provider.tsx';
import Routing from './routing.tsx';

import '@/styles/global.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RootProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </RootProvider>
  </QueryClientProvider>,
);
