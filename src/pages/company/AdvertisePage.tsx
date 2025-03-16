
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const AdvertisePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h1 className="text-3xl font-display font-bold mb-6">Advertise With Us</h1>
            <p className="text-lg mb-6">
              Connect with our engaged audience through strategic advertising partnerships.
              Insight offers various advertising opportunities to help you reach your target audience.
            </p>

            <div className="bg-secondary/30 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Our Audience</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <p className="text-3xl font-bold text-primary mb-2">2.5M+</p>
                  <p className="font-medium">Monthly Readers</p>
                </div>
                <div className="p-4">
                  <p className="text-3xl font-bold text-primary mb-2">68%</p>
                  <p className="font-medium">College Educated</p>
                </div>
                <div className="p-4">
                  <p className="text-3xl font-bold text-primary mb-2">75%</p>
                  <p className="font-medium">Age 25-54</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Advertising Options</h2>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="text-xl font-bold">Display Advertising</h3>
                <p className="mb-3">
                  Showcase your brand with premium display ad placements across our website. We offer
                  various sizes and positions to ensure optimal visibility and engagement.
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Banner ads</li>
                  <li>Sidebar placements</li>
                  <li>In-article ads</li>
                  <li>Custom placements</li>
                </ul>
              </div>

              <div className="border-b pb-6">
                <h3 className="text-xl font-bold">Sponsored Content</h3>
                <p className="mb-3">
                  Share your story with our audience through professionally produced sponsored articles
                  that align with our editorial standards while highlighting your brand.
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Native articles</li>
                  <li>Brand storytelling</li>
                  <li>Thought leadership pieces</li>
                  <li>Product reviews</li>
                </ul>
              </div>

              <div className="border-b pb-6">
                <h3 className="text-xl font-bold">Newsletter Sponsorship</h3>
                <p className="mb-3">
                  Reach our dedicated subscribers directly in their inbox through our daily and weekly
                  newsletter sponsorships.
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Header sponsorship</li>
                  <li>Featured placement</li>
                  <li>Custom newsletters</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Contact Our Advertising Team</h2>
              <p className="mb-4">
                Ready to discuss advertising opportunities? Contact our advertising team to learn more
                about our offerings and how we can help you reach your marketing goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Request Media Kit
                </button>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Or email us directly at <span className="font-medium">advertising@insight.com</span>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdvertisePage;
