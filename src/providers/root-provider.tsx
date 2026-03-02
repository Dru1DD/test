import { type ReactNode } from 'react';

import { DAppKitProvider } from '@mysten/dapp-kit-react';
import { dAppKit } from '@/lib/dapp-kit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ClaimrWrapper } from '@/components/claimr-wrapper';
import { ClaimrProvider } from '@/hooks/use-claimr';

const queryClient = new QueryClient();

export function RootProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <DAppKitProvider dAppKit={dAppKit}>
        <ClaimrProvider>
          <ClaimrWrapper>{children}</ClaimrWrapper>
        </ClaimrProvider>
      </DAppKitProvider>
    </QueryClientProvider>
  );
}
