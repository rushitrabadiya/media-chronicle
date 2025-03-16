
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="page-container max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">About Insight</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground mb-8">
              Founded in 2023, Insight is dedicated to delivering accurate, timely, and insightful news coverage across a wide range of topics.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
            <p>
              At Insight, we believe in the power of quality journalism to inform, educate, and inspire. Our mission is to provide readers with comprehensive, unbiased reporting that helps them understand the world around them and make informed decisions.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Team</h2>
            <p>
              Our team consists of experienced journalists, editors, and content creators who are passionate about delivering high-quality news and analysis. With backgrounds spanning from political science to technology, our diverse team brings a wide range of perspectives to our coverage.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Values</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Accuracy:</strong> We are committed to factual reporting and rigorous fact-checking.</li>
              <li><strong>Independence:</strong> We maintain editorial independence and are not influenced by political or commercial interests.</li>
              <li><strong>Integrity:</strong> We uphold the highest ethical standards in our journalism.</li>
              <li><strong>Innovation:</strong> We embrace new technologies and formats to deliver news in engaging ways.</li>
              <li><strong>Inclusivity:</strong> We strive to represent diverse perspectives and voices in our coverage.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p>
              We welcome feedback and inquiries from our readers. Please visit our <a href="/contact" className="text-primary hover:underline">Contact</a> page to get in touch with our team.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
