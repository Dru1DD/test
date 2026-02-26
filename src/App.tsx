/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react';
import { useCurrentAccount, useDAppKit } from '@mysten/dapp-kit-react';
import { Transaction } from '@mysten/sui/transactions';
import { fromBase64 } from '@mysten/sui/utils';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import { CLAIMR_CONTAINER_ID } from './constants/claimr';

const App = () => {
  const account = useCurrentAccount();
  const dAppKit = useDAppKit();

  const [, set_open_modal] = useState(false);
  const [connected, set_connected] = useState(false);
  const [signed_in, set_signed_in] = useState(false);
  const [username, set_username] = useState('');

  const on_request = useCallback(
    async (
      _chain_id: string,
      _request: any,
      contract: string,
      _method: string,
      args: any[],
      _abi: any[],
      fee: string,
    ) => {
      try {
        const tx = new Transaction();
        const token_bytes = new TextEncoder().encode(account?.address + args[0]);
        const sig_bytes = fromBase64(args[1]);
        const [payment_coin] = tx.splitCoins(tx.gas, [tx.pure('u64', fee)]);
        const [package_id, pass_state_id] = contract.split('|');

        tx.moveCall({
          target: `${package_id}::pass_sbt::mint`,
          arguments: [
            tx.object(pass_state_id),
            tx.pure('vector<u8>', Array.from(token_bytes)),
            tx.pure('vector<u8>', Array.from(sig_bytes)),
            payment_coin,
            tx.object('0x6'),
          ],
        });

        const result = await dAppKit.signAndExecuteTransaction({
          transaction: tx,
        });
        // console.log(result.Transaction?.digest);
        return result.Transaction?.digest;
      } catch (err) {
        console.error('request error', err);
        return '';
      }
    },
    [account, dAppKit],
  );

  const on_user_info = (user_info: Record<string, any>) => {
    set_connected(true);
    set_signed_in(!!user_info.is_logged_in);
    set_username(user_info.name ?? '');
  };

  const on_connect_wallet = () => {
    set_open_modal(true);
  };

  const on_connect_x = async () => {
    (window as any)?.claimr?.platform_login?.('twitter');
  };

  const on_disconnect_wallet = async () => {
    if (account) {
      await dAppKit.disconnectWallet();
    }
  };

  const on_disconnect_x = async () => {
    set_signed_in(false);
    set_username('');
    (window as any)?.claimr?.logout?.();
  };

  useEffect(() => {
    const handler = (event: MessageEvent<any>) => {
      if (event.data?.event === 'widget::ready') {
        (window as any).claimr.on_request = on_request;
        (window as any).claimr.on_user_info = on_user_info;
        (window as any).claimr.on_connect_wallet = on_connect_wallet;
        (window as any).claimr.on_disconnect_wallet = on_disconnect_wallet;
        if (account?.address) {
          (window as any).claimr.select_wallet(account?.address);
        }
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, [on_request]);

  useEffect(() => {
    if (account?.address) {
      set_open_modal(false);
      if (connected) {
        (window as any).claimr.select_wallet(account?.address);
      }
    }
  }, [account]);

  return (
    <div className="h-dvh flex flex-col overflow-x-hidden">
      <Header
        connected={connected}
        signed_in={signed_in}
        username={username}
        on_connect_x={on_connect_x}
        on_disconnect_x={on_disconnect_x}
      />

      <main className="w-full h-full overflow-x-hidden">
        {!signed_in && <Hero />}

        <div className={signed_in ? 'block' : 'hidden'}>
          <div className="claimr-container">
            <div id={CLAIMR_CONTAINER_ID} />
          </div>
        </div>
      </main>
      <div className="flex-spacer" />
      <Footer />
    </div>
  );
};

export default App;
