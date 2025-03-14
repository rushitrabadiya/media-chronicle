
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const categories = [
    { name: 'Politics', path: '/category/politics' },
    { name: 'Technology', path: '/category/technology' },
    { name: 'Business', path: '/category/business' },
    { name: 'Culture', path: '/category/culture' },
    { name: 'Science', path: '/category/science' },
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/careers' },
    { name: 'Advertise', path: '/advertise' },
  ];

  const legal = [
    { name: 'Terms of Use', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Cookie Policy', path: '/cookies' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'Youtube' },
  ];

  return (
    <footer className="bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold tracking-tight text-primary">Insight</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Delivering insightful news and analysis on the topics that matter most. Stay informed with our comprehensive coverage.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-background text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link 
                    to={category.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legal.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for weekly updates.
            </p>
            <div className="space-y-2">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0" 
                />
                <Button 
                  type="submit" 
                  className="rounded-l-none"
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our <Link to="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Insight. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                Accessibility
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                Sitemap
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                RSS Feed
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
