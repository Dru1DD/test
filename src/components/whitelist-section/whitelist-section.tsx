import { useState } from 'react';
import urchinVideo from '@/assets/images/urchin.mp4';
import videoPoster from '@/assets/images/preview.webp';
import Button from '@/components/button';
import FadeInDown from '@/components/fade-in-down';
import WhitelistModal from '@/components/whitelist-modal';

const WhitelistSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="w-full xl:h-108.5 flex flex-col xl:flex-row gap-3 md:gap-12 items-stretch">
        <FadeInDown duration={600} className="w-full xl:w-1/2 h-full flex flex-col justify-between gap-3 md:gap-6">
          <div className="p-5 lg:px-[30px] lg:py-[40px] bg-dark-gray text-white rounded-[40px]">
            <h1 className="text-xl md:text-[clamp(24px,2.2vw,32px)] font-funnel-sans font-semibold mb-2.5">
              Social Prediction Market on SUI.
            </h1>
            <p className="font-funnel-sans leading-relaxed text-[clamp(18px,2.2vw,32px)]">
              Make predictions, earn social reputation, and turn every choice into fun
            </p>
          </div>

          <Button
            className="w-full text-white bg-purple rounded-[40px] btn-3d-purple"
            label="Join the waitlist!"
            onClick={() => setIsModalOpen(true)}
          />
        </FadeInDown>

        <FadeInDown delay={200} duration={700} className="w-full xl:w-1/2 flex">
          <div className="aspect-video  w-full xl:flex-1 rounded-[40px] overflow-hidden bg-dark-gray">
            <video
              src={urchinVideo}
              poster={videoPoster}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center' }}
            />
          </div>
        </FadeInDown>
      </section>

      <WhitelistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default WhitelistSection;
