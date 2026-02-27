import { useNavigate } from 'react-router';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path, { replace: true });
  };
  return (
    <footer className="w-full flex flex-col-reverse md:flex-row md:justify-between md:items-center bg-black px-4 md:px-16 py-4 gap-4 md:gap-0">
      <span className="text-gray font-normal font-funnel-sans text-sm">© 2026 Urchin. All rights reserved.</span>
      <div className="flex gap-4 text-gray font-normal font-funnel-sans text-sm">
        <span
          onClick={() => handleNavigate('/privacy-policy')}
          className="hover:underline underline-offset-2 transition-all duration-200"
        >
          Privacy Policy
        </span>
        <span
          onClick={() => handleNavigate('/terms-of-use')}
          className="hover:underline underline-offset-2 transition-all duration-200"
        >
          Terms of Use
        </span>
      </div>
    </footer>
  );
};

export default Footer;
