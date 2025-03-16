
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="page-container max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">Terms of Use</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">
              Last Updated: October 1, 2023
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Insight website, mobile applications, or services (collectively, the "Services"), you agree to be bound by these Terms of Use. If you do not agree to these Terms, you may not access or use the Services.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">2. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. We will provide notice of any material changes by posting the updated Terms on this page with a new "Last Updated" date. Your continued use of the Services after such modifications constitutes your acceptance of the modified Terms.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">3. Accessing the Services</h2>
            <p>
              You are responsible for ensuring that your access to and use of the Services complies with applicable laws. We reserve the right to terminate or restrict your access to the Services for any reason, including violations of these Terms.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">4. User Accounts</h2>
            <p>
              Some features of the Services may require registration. You agree to provide accurate information when registering and to keep your account information updated. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">5. Intellectual Property</h2>
            <p>
              The content, organization, graphics, design, and other matters related to the Services are protected under applicable copyrights, trademarks, and other proprietary rights. You may not copy, distribute, modify, or create derivative works of any content from the Services without our express written permission.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Insight and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Services.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">7. Governing Law</h2>
            <p>
              These Terms and your use of the Services shall be governed by and construed in accordance with the laws of the United States, without giving effect to any principles of conflicts of law.
            </p>
            
            <h2 className="text-xl font-bold mt-8 mb-4">8. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at <a href="mailto:legal@insightnews.com" className="text-primary hover:underline">legal@insightnews.com</a>.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsPage;
