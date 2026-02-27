import Header from '@/components/header';
import Footer from '@/components/footer';
import useLogin from '@/hooks/use-login';

const PrivacyPolicyPage = () => {
  const { connected, signed_in, username, on_connect_x, on_disconnect_x } = useLogin();
  return (
    <div className="min-h-dvh flex flex-col overflow-x-hidden overflow-y-scroll">
      <Header
        connected={connected}
        signed_in={signed_in}
        username={username}
        on_connect_x={on_connect_x}
        on_disconnect_x={on_disconnect_x}
      />

      <main className="overflow-x-hidden flex-1 justify-center items-center text-white">Privacy Policy</main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
