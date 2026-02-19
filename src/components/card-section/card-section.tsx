import { cardsConfig } from './config';
import FadeInDown from '@/components/fade-in-down';

const CardSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-12">
      {cardsConfig.map((card, index) => (
        <FadeInDown key={index} delay={index * 150} duration={600}>
          <Card imgSrc={card.imgSrc} title={card.title} description={card.description} bgColor={card.bgColor} />
        </FadeInDown>
      ))}
    </section>
  );
};

interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
  bgColor: string;
}
const Card = ({ imgSrc, title, description, bgColor }: CardProps) => (
  <div className={`w-full h-auto md:h-179.5 flex flex-col ${bgColor} p-5 md:p-7 rounded-[40px]`}>
    <div className="flex justify-center items-center">
      <img src={imgSrc} alt={title} loading="lazy" className="object-cover max-h-48 md:max-h-none" />
    </div>
    <div className="flex flex-col gap-3 md:gap-10 justify-end mt-3 md:mt-5 h-full">
      <h3 className="text-2xl md:text-4xl text-white font-semibold font-funnel-display">{title}</h3>
      <p className="text-base md:text-2xl text-white/75 font-funnel-sans">{description}</p>
    </div>
  </div>
);

export default CardSection;
