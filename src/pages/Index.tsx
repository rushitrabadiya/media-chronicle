
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FeaturedArticle from '@/components/articles/FeaturedArticle';
import ArticleCard from '@/components/articles/ArticleCard';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index: React.FC = () => {
  // Mock data
  const featuredArticle = {
    id: '1',
    title: 'The Future of Sustainable Energy: Breakthroughs in Renewable Resources',
    slug: 'future-sustainable-energy',
    excerpt: 'Recent advancements in renewable energy technologies are changing how we think about sustainability. Scientists have discovered new methods that could revolutionize green power generation and storage.',
    coverImage: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=900&q=80',
    publishedAt: new Date('2023-10-15'),
    readTime: 8,
    categories: [{ id: '1', name: 'Technology', slug: 'technology' }],
  };

  const mainArticles = [
    {
      id: '2',
      title: 'Global Markets React to Latest Economic Policy Shifts',
      slug: 'global-markets-economic-policy',
      excerpt: 'Financial experts analyze the implications of new economic policies on global markets and investment strategies.',
      coverImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80',
      publishedAt: new Date('2023-10-12'),
      readTime: 6,
      categories: [{ id: '2', name: 'Business', slug: 'business' }],
    },
    {
      id: '3',
      title: 'The Science Behind Climate Change: New Research Findings',
      slug: 'science-climate-change',
      excerpt: 'Leading scientists publish groundbreaking research on climate patterns and their implications for global policy.',
      coverImage: 'https://images.unsplash.com/photo-1581229876567-374f28aa7fe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80',
      publishedAt: new Date('2023-10-10'),
      readTime: 7,
      categories: [{ id: '3', name: 'Science', slug: 'science' }],
    },
    {
      id: '4',
      title: 'Political Landscape Shifts Following Latest Elections',
      slug: 'political-landscape-elections',
      excerpt: 'Analysis of recent election results and what they signal for upcoming policy decisions and governance.',
      coverImage: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80',
      publishedAt: new Date('2023-10-08'),
      readTime: 5,
      categories: [{ id: '4', name: 'Politics', slug: 'politics' }],
    },
  ];

  const trendingArticles = [
    {
      id: '5',
      title: 'Virtual Reality in Education: Transforming Learning Experiences',
      slug: 'vr-education-transformation',
      excerpt: 'How VR technology is being implemented in classrooms to create immersive educational experiences.',
      coverImage: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80',
      publishedAt: new Date('2023-10-05'),
      readTime: 4,
      categories: [{ id: '1', name: 'Technology', slug: 'technology' }],
    },
    {
      id: '6',
      title: 'New Archaeological Discovery Rewrites Ancient History',
      slug: 'archaeological-discovery-history',
      excerpt: 'Archaeologists unearth artifacts that challenge our understanding of ancient civilizations.',
      coverImage: 'https://images.unsplash.com/photo-1532598187460-98fe8826d1e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80',
      publishedAt: new Date('2023-10-03'),
      readTime: 6,
      categories: [{ id: '5', name: 'Culture', slug: 'culture' }],
    },
    {
      id: '7',
      title: 'The Rise of Plant-Based Diets: Health and Environmental Benefits',
      slug: 'plant-based-diets-benefits',
      excerpt: 'Exploring the growing trend of plant-based eating and its impact on health and sustainability.',
      coverImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80',
      publishedAt: new Date('2023-10-01'),
      readTime: 5,
      categories: [{ id: '6', name: 'Health', slug: 'health' }],
    },
    {
      id: '8',
      title: 'Artificial Intelligence Ethics: Balancing Innovation and Responsibility',
      slug: 'ai-ethics-innovation',
      excerpt: 'The ethical considerations surrounding AI development and implementation in various industries.',
      coverImage: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80',
      publishedAt: new Date('2023-09-28'),
      readTime: 7,
      categories: [{ id: '1', name: 'Technology', slug: 'technology' }],
    },
  ];

  // Smooth scroll to top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow pt-24">
        {/* Hero Section with Featured Article */}
        <section className="py-8 md:py-12">
          <div className="page-container">
            <FeaturedArticle article={featuredArticle} />
          </div>
        </section>

        {/* Main Articles */}
        <section className="py-10 bg-secondary/30">
          <div className="page-container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-display font-bold">Latest News</h2>
              <Link to="/articles">
                <Button variant="ghost" className="text-primary">
                  View all <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {mainArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* Category Sections */}
        <section className="py-12">
          <div className="page-container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-display font-bold">Trending Now</h2>
              <Link to="/trending">
                <Button variant="ghost" className="text-primary">
                  More trending <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {trendingArticles.slice(0, 2).map((article) => (
                <ArticleCard 
                  key={article.id} 
                  article={article} 
                  variant="horizontal" 
                />
              ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingArticles.slice(2, 6).map((article) => (
                <ArticleCard 
                  key={article.id} 
                  article={article} 
                  variant="compact" 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-primary/5">
          <div className="page-container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium text-primary mb-2 block">Stay Updated</span>
              <h2 className="text-3xl font-display font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Get the latest news, features, and updates delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button>Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                By subscribing, you agree to our Privacy Policy and consent to receive news from us.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
