
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h1 className="text-3xl font-display font-bold mb-6">Cookie Policy</h1>
            <p className="text-lg mb-6">
              This Cookie Policy explains how Insight ("we", "us", or "our") uses cookies and similar
              technologies to recognize you when you visit our website. It explains what these technologies
              are and why we use them, as well as your rights to control our use of them.
            </p>

            <h2 className="text-2xl font-bold mb-4">What are cookies?</h2>
            <p className="mb-6">
              Cookies are small data files that are placed on your computer or mobile device when you visit
              a website. Cookies are widely used by website owners in order to make their websites work, or
              to work more efficiently, as well as to provide reporting information.
            </p>
            <p className="mb-6">
              Cookies set by the website owner (in this case, Insight) are called "first-party cookies".
              Cookies set by parties other than the website owner are called "third-party cookies". Third-party
              cookies enable third-party features or functionality to be provided on or through the website
              (e.g., advertising, interactive content, and analytics). The parties that set these third-party
              cookies can recognize your computer both when it visits the website in question and also when it
              visits certain other websites.
            </p>

            <h2 className="text-2xl font-bold mb-4">Why do we use cookies?</h2>
            <p className="mb-4">
              We use first-party and third-party cookies for several reasons. Some cookies are required for
              technical reasons in order for our website to operate, and we refer to these as "essential" or
              "strictly necessary" cookies. Other cookies also enable us to track and target the interests of
              our users to enhance the experience on our website. Third parties serve cookies through our website
              for advertising, analytics, and other purposes.
            </p>
            <div className="mb-6">
              <p className="font-medium mb-2">The specific types of cookies served through our website and the purposes they perform:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-medium">Essential cookies:</span> These cookies are strictly necessary to provide you with services
                  available through our website and to use some of its features, such as access to secure areas.
                </li>
                <li>
                  <span className="font-medium">Performance and functionality cookies:</span> These cookies are used to enhance the performance
                  and functionality of our website but are non-essential to their use. However, without these cookies,
                  certain functionality may become unavailable.
                </li>
                <li>
                  <span className="font-medium">Analytics and customization cookies:</span> These cookies collect information that is used either
                  in aggregate form to help us understand how our website is being used or how effective our marketing
                  campaigns are, or to help us customize our website for you.
                </li>
                <li>
                  <span className="font-medium">Advertising cookies:</span> These cookies are used to make advertising messages more relevant to
                  you. They perform functions like preventing the same ad from continuously reappearing, ensuring that
                  ads are properly displayed, and in some cases selecting advertisements that are based on your interests.
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">How can you control cookies?</h2>
            <p className="mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences
              by clicking on the appropriate opt-out links provided in the cookie banner when you first visit our website.
            </p>
            <p className="mb-6">
              You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject
              cookies, you may still use our website though your access to some functionality and areas of our website
              may be restricted. As the means by which you can refuse cookies through your web browser controls vary from
              browser to browser, you should visit your browser's help menu for more information.
            </p>

            <h2 className="text-2xl font-bold mb-4">How often will we update this Cookie Policy?</h2>
            <p className="mb-6">
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies
              we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy
              regularly to stay informed about our use of cookies and related technologies.
            </p>
            <p className="mb-6">
              The date at the top of this Cookie Policy indicates when it was last updated.
            </p>

            <h2 className="text-2xl font-bold mb-4">Contact us</h2>
            <p className="mb-4">
              If you have any questions about our use of cookies or other technologies, please email us at{' '}
              <span className="font-medium">privacy@insight.com</span> or write to us at:
            </p>
            <div className="pl-4 border-l-4 border-primary/20 mb-6">
              <p>Insight Media Group</p>
              <p>123 News Street</p>
              <p>Media City, MC 10001</p>
              <p>United States</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiePolicyPage;
