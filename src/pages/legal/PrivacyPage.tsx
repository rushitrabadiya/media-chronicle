
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="page-container max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">
              Last Updated: October 1, 2023
            </p>
            
            <p className="lead text-lg mb-8">
              At Insight, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">1. Information We Collect</h2>
            <h3 className="text-lg font-semibold mt-6 mb-2">Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide to us when you register for an account, subscribe to our newsletter, respond to surveys, or contact us. This information may include your name, email address, mailing address, phone number, and other information you choose to provide.
            </p>
            
            <h3 className="text-lg font-semibold mt-6 mb-2">Usage Information</h3>
            <p>
              We automatically collect certain information about your device and how you interact with our Services, including your IP address, browser type, operating system, referring URLs, access times, and pages viewed.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
            <p>
              We may use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our Services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information, such as updates or security alerts</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Personalize your experience and deliver content relevant to your interests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Protect against, identify, and prevent fraud and other illegal activity</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8 mb-4">3. Cookies and Similar Technologies</h2>
            <p>
              We use cookies and similar technologies to collect information about your browsing activities and to distinguish you from other users of our Services. This helps us provide you with a good experience when you browse our Services and allows us to improve our site.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">4. Sharing Your Information</h2>
            <p>
              We may share your information with third parties in certain circumstances, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With service providers who perform services on our behalf</li>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights and property</li>
              <li>With your consent or at your direction</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8 mb-4">5. Your Choices</h2>
            <p>
              You have certain choices regarding the information we collect and how it is used:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You can opt out of receiving promotional emails by following the instructions in those emails</li>
              <li>You can configure your browser to refuse cookies or to alert you when cookies are being sent</li>
              <li>You can request access to, correction of, or deletion of your personal information</li>
            </ul>
            
            <h2 className="text-xl font-bold mt-8 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@insightnews.com" className="text-primary hover:underline">privacy@insightnews.com</a>.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;
