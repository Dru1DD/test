import { useState } from 'react';

const PlusIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
  </svg>
);

const MinusIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
  </svg>
);

type FaqItem = {
  question: string;
  answer: string;
};

const FAQ = ({ items }: { items: FaqItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="border-[6px] border-[#2A2A2A] rounded-[24px] overflow-hidden text-white">
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-10 text-left font-medium"
            >
              <span className="text-xl md:text-4xl font-semibold font-funnel-display">{item.question}</span>

              <span className="ml-4 rounded-full bg-white text-black p-1">{isOpen ? <MinusIcon /> : <PlusIcon />}</span>
            </button>

            <div
              className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${isOpen ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'}
              `}
            >
              <div className="p-10 text-base md:text-2xl text-white/75 font-funnel-sans">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
