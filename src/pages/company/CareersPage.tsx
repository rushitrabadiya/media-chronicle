
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h1 className="text-3xl font-display font-bold mb-6">Careers at Insight</h1>
            <p className="text-lg mb-6">
              Join our team of talented journalists, editors, and digital media professionals 
              dedicated to delivering insightful news and engaging content.
            </p>

            <div className="bg-secondary/30 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Why Work With Us?</h2>
              <ul className="space-y-2">
                <li>Work with a diverse team of journalism professionals</li>
                <li>Competitive salary and benefits package</li>
                <li>Opportunities for professional development and growth</li>
                <li>Flexible work arrangements</li>
                <li>Make an impact through meaningful journalism</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">Open Positions</h2>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="text-xl font-bold">Senior Political Correspondent</h3>
                <p className="text-muted-foreground mb-2">Full-time · Remote with some travel</p>
                <p className="mb-4">
                  We're looking for an experienced political correspondent to cover national
                  politics and policy developments. The ideal candidate has a strong background
                  in political reporting and a deep understanding of governmental processes.
                </p>
                <button className="text-primary font-medium hover:underline">View Details</button>
              </div>

              <div className="border-b pb-6">
                <h3 className="text-xl font-bold">Technology Editor</h3>
                <p className="text-muted-foreground mb-2">Full-time · Hybrid</p>
                <p className="mb-4">
                  Join our technology desk to lead coverage on emerging technologies, digital trends,
                  and the tech industry. The role involves managing a team of writers and shaping our
                  technology reporting strategy.
                </p>
                <button className="text-primary font-medium hover:underline">View Details</button>
              </div>

              <div className="border-b pb-6">
                <h3 className="text-xl font-bold">Social Media Specialist</h3>
                <p className="text-muted-foreground mb-2">Full-time · Remote</p>
                <p className="mb-4">
                  We're seeking a creative and data-driven social media specialist to grow our
                  presence across platforms and engage with our audience. The ideal candidate
                  has experience in news media and a passion for storytelling.
                </p>
                <button className="text-primary font-medium hover:underline">View Details</button>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">How to Apply</h2>
              <p className="mb-4">
                To apply for any of the positions listed above, please send your resume, cover letter,
                and portfolio (if applicable) to <span className="font-medium">careers@insight.com</span>.
              </p>
              <p>
                We review applications on a rolling basis and will contact qualified candidates for interviews.
                Thank you for your interest in joining Insight!
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CareersPage;
