/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useCallback, useEffect, useState } from 'react';
import { ConnectModal, useCurrentAccount, useDAppKit } from '@mysten/dapp-kit-react';
import { Transaction } from '@mysten/sui/transactions';
import { fromBase64 } from '@mysten/sui/utils';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import { CLAIMR_CONTAINER_ID } from '@/constants/claimr';

const HomePage = () => {
  const account = useCurrentAccount();
  const dAppKit = useDAppKit();

  const [open_modal, set_open_modal] = useState(false);
  const [connected, set_connected] = useState(false);
  const [signed_in, set_signed_in] = useState(false);
  const [username, set_username] = useState('');
  const [points, set_points] = useState(0);
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
    set_points((user_info.xp ?? 0) * (user_info.xp_mul ?? 1));
    if (user_info.twitter?.[0]?.account) {
      set_username('@' + user_info.twitter[0].account);
    } else {
      set_username(user_info.name ?? '');
    }
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
    <div className="relative min-h-screen flex flex-col overflow-x-hidden  overflow-y-auto">
      <Header
        connected={connected}
        signed_in={signed_in}
        username={username}
        points={points}
        on_connect_x={on_connect_x}
        on_disconnect_x={on_disconnect_x}
      />

      <main className="flex-1 overflow-y-hidden overflow-x-hidden pt-20 pb-20 lg:pt-30">
        <ConnectModal open={open_modal} />
        {!signed_in && <Hero on_connect_x={on_connect_x} />}

        <div className={signed_in ? 'block' : 'hidden'}>
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
