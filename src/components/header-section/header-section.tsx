import logoImage from '@/assets/images/logo-dark.svg';
import headerImage from '@/assets/images/header.svg';
import FadeInDown from '@/components/fade-in-down';

const HeaderSection = () => (
  <section className="p-5 md:p-10 h-full flex gap-5 md:gap-10 flex-col justify-center items-center rounded-[40px] bg-gold text-black">
    {/* <h1 className="sr-only">Urchin - The Premier On-Chain Prediction Platform</h1> */}
    <FadeInDown duration={600}>
      <img src={logoImage} className="w-15 md:w-28.5 h-5 md:h-6" alt="Logo" />
    </FadeInDown>
    <FadeInDown delay={150} duration={700}>
      <img src={headerImage} alt="Header" width={1350} height={361} fetchPriority="high" className="w-full h-auto" />
    </FadeInDown>
  </section>
);

export default HeaderSection;
