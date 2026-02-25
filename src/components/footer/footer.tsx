const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 w-full flex justify-between items-center bg-black px-16 py-6">
      <span className="text-gray font-normal font-funnel-sans text-sm">
        © 2026 Urchin. All rights reserved.
      </span>
      <span className="text-gray font-normal font-funnel-sans text-sm gap-2">
        <a
          href="https://claimr.io/terms-and-conditions"
          target="_blank"
          rel="noreferrer"
          className="hover:underline underline-offset-2 transition-all duration-200"
        >
          Terms and Conditions
        </a>
        <a
          href="https://claimr.io/privacy-policy"
          target="_blank"
          rel="noreferrer"
          className="ml-2 hover:underline underline-offset-2 transition-all duration-200"
        >
          Privacy Policy
        </a>
      </span>
    </footer>
  );
};

export default Footer;
