import HeaderSection from '@/components/header-section';
import WhitelistSection from '@/components/whitelist-section';
import CardSection from '@/components/card-section';
import ChanceSection from '@/components/chance-section';
import QuestionSection from '@/components/question-section';
import Footer from '@/components/footer';

function App() {
  return (
    <main className="relative w-full max-w-[1440px] mx-auto min-h-screen overflow-hidden bg-black p-3 md:p-5 flex flex-col gap-3 md:gap-12">
      <HeaderSection />
      <WhitelistSection />
      <CardSection />
      <ChanceSection />
      <QuestionSection />
      <Footer />
    </main>
  );
}

export default App;
