import { useState } from "react";
import useLogin from "@/hooks/use-login";
import LogoutIcon from "@/components/logout";
import BurgerMenuIcon from "@/components/burger-menu";

const Header = () => {
  const { connected, signed_in, username, on_connect_x, on_disconnect } =
    useLogin();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 left-0 z-50 flex justify-between items-center px-6 lg:px-16 py-6 bg-black">
      <img
        src="/logo.svg"
        alt="logo"
        className="hidden lg:block w-70 h-10 object-contain "
      />
      <img
        src="/logo-mb.svg"
        alt="logo"
        className="lg:hidden w-32.75 h-10 object-contain "
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
        <a
          href="https://claimr.io/community"
          target="_blank"
          rel="noreferrer"
          className="hidden lg:block text-white hover:underline underline-offset-2 transition-all duration-200"
        >
          Community
        </a>
        {connected && !signed_in && (
          <>
            <button
              className="bg-transparent border-2 border-green text-green uppercase px-4.25 py-3 rounded-xl cursor-pointer hover:bg-green hover:text-black transition-all duration-200"
              onClick={on_connect_x}
            >
              Connect X
            </button>
          </>
        )}
        {connected && signed_in && (
          <div className="rounded-xl bg-[#303030]  border-white px-4.25 py-3 flex justify-center items-center gap-2">
            <div className="flex items-center text-white font-semibold gap-2">
              123213 <img src="/coin.svg" alt="coin" />
            </div>
            <div className="hidden lg:block text-[#383838]">|</div>
            <span className="hidden lg:block text-white font-semibold mx-2">
              {username}
            </span>
            <div className="hidden lg:block text-[#383838]">|</div>

            <button
              onClick={on_disconnect}
              className="hidden lg:block px-4 py-3"
            >
              <LogoutIcon />
            </button>
          </div>
        )}
      </div>
      <div className="lg:hidden ml-5">
        <BurgerMenuIcon
          isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black flex flex-col items-center py-6 gap-6 border-t border-dark-tertiary shadow-xl">
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
          <a
            href="https://claimr.io/community"
            target="_blank"
            rel="noreferrer"
            className="text-white text-lg font-medium hover:text-green transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Community
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
