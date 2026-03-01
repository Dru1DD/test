const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 w-full flex flex-col-reverse md:flex-row md:justify-between md:items-center px-4 md:px-16 py-4 gap-4 md:gap-0">
      <span className="text-gray font-normal font-funnel-sans text-sm">© 2026 Urchin. All rights reserved.</span>
      <div className="flex gap-4 text-gray font-normal font-funnel-sans text-sm">
        <a
          href="https://claimr.io/terms-and-conditions"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-2 transition-all duration-200"
        >
          Privacy Policy
        </a>
        <a
          href="https://claimr.io/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-2 transition-all duration-200"
        >
          Terms of Use
        </a>
      </div>
    </footer>
  );
};

export default Footer;
