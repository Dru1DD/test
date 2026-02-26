import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import useLogin from "./hooks/use-login";
import { CLAIMR_CONTAINER_ID } from "./constants/claimr";

const App = () => {
  const { signed_in } = useLogin();

  return (
    <div className="h-dvh flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
        {!signed_in && <Hero />}
        <div className={signed_in ? "flex-1" : "hidden"}>
          <div className="claimr-container">
            <div id={CLAIMR_CONTAINER_ID} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
