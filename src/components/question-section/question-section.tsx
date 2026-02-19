import questionImage from '@/assets/images/questions.svg';
import FAQ from '@/components/faq';
import FadeInDown from '@/components/fade-in-down';
import { faqConfig } from './config';

const QuestionSection = () => {
  return (
    <section className="flex flex-col justify-center gap-5 md:gap-10">
      <FadeInDown duration={600}>
        <img src={questionImage} alt="Question" loading="lazy" />
      </FadeInDown>
      <FadeInDown delay={150} duration={600}>
        <FAQ items={faqConfig} />
      </FadeInDown>
    </section>
  );
};

export default QuestionSection;
