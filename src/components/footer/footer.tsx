import logoImage from '@/assets/images/logo.svg';
import FadeInDown from '@/components/fade-in-down';
import { socilConfig } from './config';

const Footer = () => {
  return (
    <footer className="w-full bg-dark-gray p-5 md:p-8 rounded-2xl md:rounded-[40px] flex flex-col gap-5 md:gap-[32px]">
      <div className="flex flex-wrap justify-center md:justify-between gap-3 md:gap-5 w-full items-center">
        {socilConfig.map((item, index) => (
          <FadeInDown key={index} delay={index * 80} duration={500}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (item.disabled) {
                  e.preventDefault();
                }
              }}
              className={`flex flex-col w-full sm:w-auto sm:flex-1 md:w-51.25 p-4 md:p-5 rounded-2xl items-center gap-2 ${item.bgColor} hover:opacity-75 transition-all duration-75 ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <img src={item.icon} alt={item.title} loading="lazy" className="w-8 h-8 md:w-auto md:h-auto" />
              <span className="text-sm md:text-base text-white font-semibold font-funnel-display">{item.title}</span>
            </a>
          </FadeInDown>
        ))}
      </div>
      <FadeInDown delay={400} duration={600}>
        <div className="w-full h-full flex flex-col gap-4 justify-center items-center pt-[40px]">
          <img src={logoImage} loading="lazy" className="w-28 md:w-35.5 h-auto" alt="logo" />
          <p className="text-sm md:text-base text-[#99A1AF] text-center max-w-100 font-funnel-sans mb-2">
            Social Prediction Market on SUI. Make predictions, earn social reputation, and turn every choice into fun
          </p>
          <span className="text-center font-funnel-sans text-[#99A1AF] text-xs md:text-base">
            © 2026 Urchin. All rights reserved.
          </span>
        </div>
      </FadeInDown>
    </footer>
  );
};

export default Footer;
