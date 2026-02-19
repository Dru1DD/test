import chanceImage from '@/assets/images/chance.svg';
import Button from '@/components/button';
import FadeInDown from '@/components/fade-in-down';
import { cardConfig } from './config';

const ChanceSection = () => {
  return (
    <section className="flex flex-col gap-5 md:gap-10 p-5 md:p-[48px] rounded-[40px] bg-purple">
      <FadeInDown duration={600}>
        <img src={chanceImage} alt="Chance" loading="lazy" className="w-full" />
      </FadeInDown>
      <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-6">
        {cardConfig.map((item, index) => (
          <FadeInDown key={`chance-card-${index}`} delay={index * 100} duration={600} className="flex-1">
            <div className="flex flex-col gap-2 bg-black/50 p-4 md:p-6 rounded-2xl h-full">
              <h2 className="text-xl md:text-[40px] font-semibold text-white font-funnel-display">{item.title}</h2>
              <p className="text-base md:text-[24px] md:leading-[100%] text-white/75 font-funnel-sans font-normal">
                {item.description}
              </p>
            </div>
          </FadeInDown>
        ))}
      </div>
      <FadeInDown delay={300} duration={600}>
        <Button label="Join the waitlist!" className="w-full bg-white text-black rounded-[40px]" />
      </FadeInDown>
    </section>
  );
};

export default ChanceSection;
