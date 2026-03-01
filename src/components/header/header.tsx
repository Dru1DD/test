import { useState } from 'react';
import { useNavigate } from 'react-router';
import LogoutIcon from '@/components/logout';
import BurgerMenuIcon from '@/components/burger-menu';
import CommunityDropdown from './community-dropdown';
import { socialLinks } from './constant';

interface HeaderProps {
  connected: boolean;
  signed_in: boolean;
  username: string;
  points: number;
  on_connect_x: () => void;
  on_disconnect_x: () => void;
}

const Header = ({ connected, signed_in, username, points, on_connect_x, on_disconnect_x }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogoClicked = () => {
    navigate('/', { replace: true });
  };
  const handleSuiLogoClicked = () => {
    window.open('https://x.com/SuiNetwork', '_blank');
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 lg:px-16 py-4 bg-transparent border-b border-[#FFFFFF29]">
      <div className="hidden lg:flex justify-center items-center gap-2">
        <img
          src="/urchin-logo.svg"
          alt="logo"
          className="w-32.5 h-10 object-contain cursor-pointer"
          onClick={handleLogoClicked}
        />
        <div className="mx-2 w-0.5 h-8 rounded-full bg-[#363636]" />
        <img
          src="/sui-logo.svg"
          alt="logo"
          className="w-30 h-10 object-contain cursor-pointer"
          onClick={handleSuiLogoClicked}
        />
      </div>
      <img
        src="/logo-mb.svg"
        alt="logo"
        className="lg:hidden w-32.75 h-10 object-contain "
        onClick={handleLogoClicked}
      />
      <div className="flex-spacer" />
      <div className="flex justify-center items-center gap-5">
        <a
          href="https://claimr.io/how-it-works"
          target="_blank"
          rel="noreferrer"
          className="hidden lg:block text-white hover:underline underline-offset-2 transition-all duration-200"
        >
          How it works
        </a>
        <a
          href="https://claimr.io/manifesto"
          target="_blank"
          rel="noreferrer"
          className="hidden lg:block text-white hover:underline underline-offset-2 transition-all duration-200"
        >
          Manifesto
        </a>
        <CommunityDropdown />
        {!signed_in && (
          <button
            className="ml-5 bg-transparent border-2 border-green text-green uppercase px-4.25 py-3 rounded-xl cursor-pointer hover:bg-green hover:text-black transition-all duration-200"
            onClick={on_connect_x}
          >
            Connect X
          </button>
        )}
        {connected && signed_in && (
          <div className="ml-5 rounded-xl bg-[#303030]  border-white px-4.25 py-3 flex justify-center items-center gap-2">
            <div className="flex items-center text-white font-semibold gap-2">
              {points} <img src="/coin.svg" alt="coin" />
            </div>
            <div className="hidden lg:block text-[#383838]">|</div>
            <span className="hidden lg:block text-white font-semibold mx-2">{username}</span>
            <div className="hidden lg:block text-[#383838]">|</div>

            <button onClick={on_disconnect_x} className="hidden lg:block px-4 py-3">
              <LogoutIcon />
            </button>
          </div>
        )}
      </div>
      <div className="lg:hidden ml-5">
        <BurgerMenuIcon isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#111111] flex flex-col items-center py-6 gap-6 border-t border-dark-tertiary shadow-xl z-50">
          <a
            href="https://claimr.io/how-it-works"
            target="_blank"
            rel="noreferrer"
            className="text-white text-lg font-medium hover:text-green transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How it works
          </a>
          <a
            href="https://claimr.io/manifesto"
            target="_blank"
            rel="noreferrer"
            className="text-white text-lg font-medium hover:text-green transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Manifesto
          </a>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-white text-lg font-medium hover:text-green transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
