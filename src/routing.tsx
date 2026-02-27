import { Route, Routes } from 'react-router';
import HomePage from '@/pages/home';
import PrivacyPolicyPage from '@/pages/privacy-policy';
import TermsOfUsePage from '@/pages/terms-of-use';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-of-use" element={<TermsOfUsePage />} />
    </Routes>
  );
};

export default Routing;
