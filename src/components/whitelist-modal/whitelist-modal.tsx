/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback, useRef } from 'react';
import { useCurrentAccount, useDAppKit, ConnectModal } from '@mysten/dapp-kit-react';
import { X } from 'lucide-react';
import { saveToWhitelist } from '@/lib/supabase';
import xIcon from '@/assets/images/social/x.svg';
import telegramIcon from '@/assets/images/social/telegram.svg';
import gratulationIcon from '@/assets/images/gratulations.svg';
import CheckIcon from '../check-icon';
import Button from '../button';

interface WhitelistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const truncateAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

const WhitelistModal = ({ isOpen, onClose }: WhitelistModalProps) => {
  const [email, setEmail] = useState('');
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  const [connectModalOpen, setConnectModalOpen] = useState(false);
  const [followedX, setFollowedX] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const account = useCurrentAccount();
  const { disconnectWallet } = useDAppKit();
  const connectModalRef = useRef<any>(null);

  useEffect(() => {
    const modal = connectModalRef.current;
    if (!modal) return;

    const handleClosed = () => {
      setConnectModalOpen(false);
    };

    const handleCancel = () => {
      setConnectModalOpen(false);
    };

    modal.addEventListener('closed', handleClosed);
    modal.addEventListener('cancel', handleCancel);

    return () => {
      modal.removeEventListener('closed', handleClosed);
      modal.removeEventListener('cancel', handleCancel);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      setSaved(false);
      setFollowedX(false);
      setError(null);
      setEmail('');
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleSave = useCallback(async () => {
    if (!account?.address || saved || saving) return;

    setError(null);
    setSaving(true);

    try {
      const result = await saveToWhitelist({
        wallet_address: account.address,
        email: email || undefined,
      });

      if (result === 'success') {
        setSaved(true);
      } else if (result === 'duplicate') {
        setError('This wallet is already on the waitlist!');
      } else {
        setError('Failed to join waitlist. Please try again.');
      }
    } catch (err) {
      console.error('Error in handleSave:', err);
      setError('Failed to join waitlist. Please try again.');
    } finally {
      setSaving(false);
    }
  }, [account?.address, email, saved, saving]);

  const handleFollowX = () => {
    if (followedX) return;
    window.open('https://x.com/urchinspace', '_blank');
    setFollowedX(true);
  };

  const handleTelegramFollowClicked = () => {
    window.open('https://t.me/urchin_chat', '_blank');
  };

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleConnectWalletClicked = async () => {
    setConnectModalOpen(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
      onClick={handleBackdropClick}
    >
      <div
        className="relative w-full max-w-md bg-gray rounded-[20px] p-6 md:p-8 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {saved ? (
          <div className="text-center space-y-6">
            <div className="text-6xl">
              <img src={gratulationIcon} alt="Gratulation" className="w-28.5 h-29.5 mx-auto" />
            </div>
            <h2 className="text-2xl md:text-3xl font-funnel-display text-white">Congrats!</h2>
            <p className="text-white font-funnel-sans font-normal text-lg text-left">
              You're on the waitlist! Don't forget to join our Telegram and keep in touch on X.
            </p>

            <div className="pt-4">
              <Button
                onClick={handleTelegramFollowClicked}
                className={`btn-3d-white py-4! flex items-center justify-center gap-3 w-full rounded-xl transition-colors font-funnel-sans bg-transparent hover:bg-dark-gray/30 text-white`}
              >
                <img src={telegramIcon} alt="Telegram" className="w-5 h-5" />
                Join Telegram
              </Button>

              <Button
                onClick={handleFollowX}
                className={`mt-5 btn-3d-white py-4! flex items-center justify-center gap-3 w-full rounded-xl transition-colors font-funnel-sans bg-transparent hover:bg-dark-gray/30 text-white`}
              >
                <img src={xIcon} alt="X" className="w-5 h-5" />
                Visit out X
              </Button>
            </div>

            <Button
              onClick={onClose}
              className="w-full py-4! rounded-xl font-funnel-sans btn-3d-purple-small bg-purple text-white hover:opacity-90 cursor-pointer transition-all mt-4"
              labelStyle="text-lg! md:text-lg!"
              label="Close"
            />
          </div>
        ) : (
          <>
            <h2 className="text-2xl md:text-3xl font-funnel-display text-white text-center mb-6">Join the waitlist</h2>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-white text-lg font-funnel-display">Step 1: Connect your wallet</label>
                  {account && <CheckIcon />}
                </div>
                {account ? (
                  <div className="flex items-center justify-between bg-dark-gray rounded-xl px-4 py-3 mt-5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-white font-funnel-sans">{truncateAddress(account.address)}</span>
                    </div>
                    <button
                      onClick={() => {
                        disconnectWallet();
                        setConnectModalOpen(false);
                        setSaved(false);
                        setError(null);
                      }}
                      className="text-white/60 hover:text-white text-sm font-funnel-sans transition-colors"
                    >
                      Change
                    </button>
                  </div>
                ) : (
                  <div className="w-full mt-5">
                    <Button
                      label="Connect a wallet"
                      className="py-2! btn-3d-gray bg-white rounded-xl w-full"
                      labelStyle="font-funnel-sans text-lg! md:text-lg! font-normal!"
                      onClick={handleConnectWalletClicked}
                    />
                    <ConnectModal open={connectModalOpen} ref={connectModalRef} />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-white text-lg font-funnel-display">Step 2: Follow us on X</label>
                  {followedX && <CheckIcon />}
                </div>
                <Button
                  onClick={handleFollowX}
                  className={`btn-3d-white py-2! flex items-center justify-center gap-3 w-full rounded-xl transition-colors font-funnel-sans ${
                    followedX
                      ? 'bg-green-600/20 text-green-400  border-green-600 btn-3d-none cursor-default! hover:opacity-100!'
                      : 'bg-transparent hover:bg-dark-gray/30 text-white '
                  }`}
                >
                  <img src={xIcon} alt="X" className="w-5 h-5" />
                  {followedX ? 'Following on X' : 'Follow us on X'}
                </Button>

                <label className="block mt-5  text-white text-lg font-funnel-display">Optional steps</label>

                <div className="space-y-2">
                  <label className="block text-white/80 text-sm font-funnel-sans">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-dark-gray text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-white transition-all font-funnel-sans placeholder:text-white/30"
                  />
                </div>

                <Button
                  onClick={handleTelegramFollowClicked}
                  className={`btn-3d-white mt-2 py-2! flex items-center justify-center gap-3 w-full rounded-xl transition-colors font-funnel-sans bg-transparent hover:bg-dark-gray/30 text-white`}
                >
                  <img src={telegramIcon} alt="Telegram" className="w-5 h-5" />
                  Join Telegram
                </Button>
              </div>

              {error && (
                <div className="text-red-400 text-sm font-funnel-sans text-center bg-red-400/10 rounded-xl px-4 py-3">
                  {error}
                </div>
              )}

              <Button
                onClick={handleSave}
                disabled={!account || !followedX || saving}
                className={`w-full py-2! rounded-xl font-funnel-sans font-semibold text-lg transition-all mt-4 ${
                  account && followedX
                    ? 'bg-purple btn-3d-purple-small text-white hover:opacity-90 cursor-pointer'
                    : 'bg-dark-gray text-white/40 cursor-not-allowed'
                }`}
                labelStyle="text-lg md:text-lg! font-normal"
                label={saving ? 'Saving...' : 'Join the waitlist'}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WhitelistModal;
