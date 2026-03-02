import Header from '@/components/header';
import Footer from '@/components/footer';

const PrivacyPolicyPage = () => {
  return (
    <div className="relative min-h-dvh w-full flex flex-col overflow-x-hidden bg-black text-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16 pt-20  lg:pb-20 lg:pt-30 flex-1 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">Privacy Policy</h1>

        <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              Welcome to our Privacy Policy. This document explains how we collect, use, disclose, and safeguard your
              information when you visit our website and use our application. Please read this privacy policy carefully.
              If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
            <p className="mb-4">
              We may collect information about you in a variety of ways. The information we may collect includes:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-gray-100">Personal Data:</strong> Personally identifiable information, such as
                your email address or other contact details you voluntarily provide to us.
              </li>
              <li>
                <strong className="text-gray-100">Derivative Data:</strong> Information our servers automatically
                collect when you access the site, such as your IP address, your browser type, your operating system,
                your access times, and the pages you have viewed.
              </li>
              <li>
                <strong className="text-gray-100">Web3 & Wallet Information:</strong> Public blockchain addresses,
                wallet identifiers, and transaction history associated with the wallet you connect to our application.
                This data is inherently public on the blockchain.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Use of Your Information</h2>
            <p className="mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized
              experience. Specifically, we may use information collected about you via the site to:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Create, manage, and secure your account or session.</li>
              <li>Process transactions and provide the services requested.</li>
              <li>Improve our website and application to better serve you.</li>
              <li>Respond to customer service requests and provide support.</li>
              <li>Monitor and analyze usage and trends to improve your experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information may be
              disclosed as follows:
              <br />
              <br />
              <strong className="text-gray-100">By Law or to Protect Rights:</strong> If we believe the release of
              information about you is necessary to respond to legal process, to investigate or remedy potential
              violations of our policies, or to protect the rights, property, and safety of others, we may share your
              information as permitted or required by any applicable law, rule, or regulation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal
              information. While we have taken reasonable steps to secure the personal information you provide to us,
              please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method
              of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Changes to This Policy</h2>
            <p>
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert
              you about any changes by updating the "Last updated" date of this Privacy Policy. You are encouraged to
              periodically review this Privacy Policy to stay informed of updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at our support channels or
              via email.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
