import Footer from "@/components/footer";
import Header from "@/components/header";
import useLogin from "./hooks/use-login";

const App = () => {
  const { signed_in } = useLogin();

  return (
    <div className="page">
      <Header />
      <div className="flex-spacer" />
      {!signed_in && (
        <div className="w-full h-full text-white flex justify-center items-center">
          You are in
        </div>
      )}
      {/* <div style={{ display: signed_in ? "block" : "none" }}>
        <div className="flex-spacer" />
        <div className="claimr-container">
          <div id={CLAIMR_CONTAINER_ID} />
        </div>
      </div> */}
      <div className="flex-spacer" />
      <Footer />
    </div>
  );
};

export default App;
