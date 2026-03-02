import Footer from '@/components/footer';
import Header from '@/components/header';

const TermsOfUsePage = () => {
  return (
    <div className="relative min-h-dvh w-full flex flex-col overflow-x-hidden bg-black text-white">
      <Header />
      <main className="h-full max-w-4xl mx-auto px-6 py-16 pt-20  lg:pb-20 lg:pt-30 flex-1 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">Terms of Use</h1>

        <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using our application, you agree to be bound by these Terms of Use. If you do not agree
              with any part of these terms, you are prohibited from using the application and must discontinue use
              immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Wallet Connection and Security</h2>
            <p>
              To use certain features of our application, you may be required to connect a Web3 wallet. You acknowledge
              and agree that you are solely responsible for managing and maintaining the security of your wallet and
              private keys. We do not have access to your private keys and cannot recover your funds if you lose access
              to your wallet. Any actions taken using your connected wallet are your sole responsibility.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Nature of Blockchain and Smart Contracts</h2>
            <p className="mb-4">
              By using our platform, you acknowledge the inherent risks associated with blockchain technology and smart
              contracts, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-gray-100">Immutable Transactions:</strong> Transactions on the blockchain are
                irreversible. We cannot cancel, reverse, or refund any transaction once it has been executed.
              </li>
              <li>
                <strong className="text-gray-100">Network Risks:</strong> The performance of our application relies on
                underlying blockchain networks which may experience congestion, delays, or outages.
              </li>
              <li>
                <strong className="text-gray-100">Smart Contract Vulnerabilities:</strong> While we take reasonable
                precautions, smart contracts may contain undiscovered flaws or bugs. You engage with them at your own
                risk.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. No Financial Advice</h2>
            <p>
              The information provided on our platform is for informational purposes only and does not constitute
              financial, investment, or legal advice. You bear full responsibility for any financial or investment
              decisions you make while using our application. Always conduct your own research before interacting with
              digital assets.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Prohibited Activities</h2>
            <p className="mb-4">You agree not to engage in any of the following prohibited activities:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Using the application for any illegal, unauthorized, or fraudulent purposes.</li>
              <li>
                Exploiting, hacking, or attempting to interfere with the proper working of the application or its
                underlying smart contracts.
              </li>
              <li>Engaging in market manipulation, wash trading, or any form of deceptive behavior.</li>
              <li>Impersonating another person or entity.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Intellectual Property</h2>
            <p>
              Unless otherwise indicated, the application and all source code, databases, functionality, software,
              website designs, audio, video, text, photographs, and graphics on the site are owned or controlled by us
              and are protected by copyright and trademark laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Disclaimer of Warranties and Limitation of Liability
            </h2>
            <p>
              The application is provided on an "as-is" and "as-available" basis. We disclaim all warranties, express or
              implied, in connection with the application and your use thereof. In no event will we be liable to you or
              any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive
              damages arising from your use of the application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Modifications to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms of Use at any time. It is
              your responsibility to review these Terms periodically for changes. Your continued use of the application
              following the posting of any changes constitutes acceptance of those changes.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUsePage;
