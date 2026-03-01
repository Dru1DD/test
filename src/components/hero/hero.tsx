import Card from './card';

interface HeroProps {
  on_connect_x: () => void;
}

const Hero = ({ on_connect_x }: HeroProps) => {
  return (
    <section className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center px-4 md:px-8 lg:px-8 xl:px-16 lg:pr-8 xl:pr-32 py-8 gap-8 lg:gap-8 xl:gap-16 lg:h-full">
      <div className="flex flex-col items-start gap-4 md:gap-6 lg:gap-8 w-full lg:max-w-md xl:max-w-xl">
        <div className="flex items-center gap-3">
          <span
            className="w-3 h-3 rounded-full pulse-dot"
            style={{
              background: '#A6FA90',
            }}
          />
          <span className="text-white text-base md:text-xl lg:text-2xl font-normal">
            Urchins activated: <span className="text-[#FFD955] font-bold">5,501</span>
          </span>
        </div>

        <h1 className="text-[40px] md:text-[64px] xl:text-[75px] font-bold text-white font-funnel-display leading-[1] tracking-normal text-nowrap uppercase">
          Grab your
          <br />
          early access
          <br />
          to Urchin
        </h1>

        <p className="text-[#FFFFFFB2] text-base md:text-xl xl:text-[24px] font-normal font-funnel-sans">
          The first gamified, social prediction platform for
          <br className="hidden md:block" />
          humans and AI agents
        </p>

        <button
          onClick={on_connect_x}
          className="w-full md:w-auto bg-[#AA3EEE] hover:bg-[#9B2EDE] hover:translate-y-0.5 hover:opacity-60 text-white uppercase font-semibold px-6 pt-4 pb-4 rounded-lg cursor-pointer transition-all duration-200 border-b-2 border-[#6500A4]"
        >
          Access with X
        </button>
      </div>

      <Card />
    </section>
  );
};

export default Hero;
