import { memo } from 'react';
import useClaimr from '@/hooks/use-claimr';
import { ConnectModal } from '@mysten/dapp-kit-react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import { CLAIMR_CONTAINER_ID } from '@/constants/claimr';

const HomePage = () => {
  const { open_modal, signed_in, on_connect_x } = useClaimr();
  return (
    <div className="relative min-h-screen w-full max-w-[1600px] mx-auto flex flex-col overflow-x-hidden overflow-y-auto">
      <Header />

      <main className="flex-1 overflow-y-hidden overflow-x-hidden pt-20  lg:pb-20 lg:pt-30">
        <ConnectModal open={open_modal} />
        {!signed_in && <Hero on_connect_x={on_connect_x} />}

        <div className={signed_in ? 'block h-full' : 'hidden'}>
          <div className="claimr-container">
            <div id={CLAIMR_CONTAINER_ID} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default memo(HomePage);
