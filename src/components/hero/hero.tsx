import useLogin from "@/hooks/use-login";

const Hero = () => {
  const { on_connect_x } = useLogin();

  return (
    <section className="w-full flex flex-col xl:flex-row justify-center xl:justify-between items-center px-4 md:px-8 lg:px-16 xl:pr-32 py-8 gap-8 xl:gap-16 xl:h-full">
      <div className="flex flex-col items-start gap-4 md:gap-6 lg:gap-8 w-full lg:max-w-xl">
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full pulse-dot"
            style={{
              background: "#A6FA90",
            }}
          />
          <span className="text-white text-base md:text-xl lg:text-2xl font-normal">
            Urchins activated:{" "}
            <span className="text-[#FFD955] font-bold">5,501</span>
          </span>
        </div>

        <h1 className="text-[40px] md:text-[64px] lg:text-[96px] font-bold text-white font-funnel-display leading-[1] tracking-normal uppercase">
          Grab your
          <br />
          early access
          <br />
          to Urchin
        </h1>

        <p className="text-[#FFFFFFB2] text-base md:text-xl lg:text-[24px] font-normal font-funnel-sans">
          The first gamified, social prediction platform for
          <br className="hidden md:block" />
          humans and AI agents
        </p>

        <button
          onClick={on_connect_x}
          className="w-full md:w-auto bg-[#AA3EEE] hover:bg-[#9B2EDE] text-white uppercase font-semibold px-6 pt-4 pb-[calc(18px-2px)] rounded-lg cursor-pointer transition-all duration-200 border-b-2 border-[#6500A4]"
        >
          Access with X
        </button>
      </div>

      <div className="relative flex-shrink-0 flex justify-center w-full xl:w-auto">
        <div
          className="absolute w-[400px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[600px] lg:h-[800px] rounded-full opacity-20"
          style={{
            background: "rgba(161, 242, 151, 0.67)",
            filter: "blur(200px)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(-15deg)",
          }}
        />
        <div
          className="absolute w-[400px] md:w-[600px] lg:w-[800px] h-[200px] md:h-[300px] lg:h-[400px] rounded-full opacity-50"
          style={{
            background: "rgba(163, 245, 149, 0.3)",
            filter: "blur(100px)",
            top: "80%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(-15deg)",
          }}
        />
        <img
          src="/main-card.png"
          alt="Early Access Pass Card"
          className="relative w-64 md:w-80 lg:w-[420px] h-auto object-contain transform rotate-3 hover:rotate-0 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default Hero;
