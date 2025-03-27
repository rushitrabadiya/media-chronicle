import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ArticleCard from '@/components/articles/ArticleCard';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StoriesSlider from '@/components/stories/StoriesSlider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Index: React.FC = () => {
  // Mock stories data
  const stories = [
    {
      id: "1",
      title: "Tech Evolution in 2023",
      coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=900&q=80",
      authorName: "Alex Johnson",
      authorImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      id: "2",
      title: "Future of AI",
      coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=900&q=80",
      authorName: "Samantha Lee",
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      id: "3",
      title: "Climate Solutions",
      coverImage: "https://images.unsplash.com/photo-1569163139500-56d8c1d5361a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=900&q=80",
      authorName: "Marcus Green",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      id: "4",
      title: "Travel Trends",
      coverImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=900&q=80",
      authorName: "Emma Wilson",
      authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80",
    },
    {
      id: "5",
      title: "Culinary Innovations",
      coverImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=900&q=80",
      authorName: "David Chang",
      authorImage: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80",
    },
  ];

  // Default placeholder images for news without images
  const placeholderImages = [
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  ];

  // Function to get a random placeholder image
  const getRandomPlaceholder = () => {
    const randomIndex = Math.floor(Math.random() * placeholderImages.length);
    return placeholderImages[randomIndex];
  };

  // Mock news articles with default placeholder images
  const newsArticles = [
    {
      id: '1',
      title: 'The Future of Sustainable Energy: Breakthroughs in Renewable Resources',
      slug: 'future-sustainable-energy',
      excerpt: 'Recent advancements in renewable energy technologies are changing how we think about sustainability. Scientists have discovered new methods that could revolutionize green power generation and storage.',
      coverImage: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=900&q=80',
      publishedAt: new Date('2023-10-15'),
      readTime: 8,
      categories: [{ id: '1', name: 'Technology', slug: 'technology' }],
    },
    {
      id: '2',
      title: 'Global Markets React to Latest Economic Policy Shifts',
      slug: 'global-markets-economic-policy',
      excerpt: 'Financial experts analyze the implications of new economic policies on global markets and investment strategies.',
      coverImage: getRandomPlaceholder(),
      publishedAt: new Date('2023-10-12'),
      readTime: 6,
      categories: [{ id: '2', name: 'Business', slug: 'business' }],
    },
    {
      id: '3',
      title: 'The Science Behind Climate Change: New Research Findings',
      slug: 'science-climate-change',
      excerpt: 'Leading scientists publish groundbreaking research on climate patterns and their implications for global policy.',
      coverImage: getRandomPlaceholder(),
      publishedAt: new Date('2023-10-10'),
      readTime: 7,
      categories: [{ id: '3', name: 'Science', slug: 'science' }],
    },
    {
      id: '4',
      title: 'Political Landscape Shifts Following Latest Elections',
      slug: 'political-landscape-elections',
      excerpt: 'Analysis of recent election results and what they signal for upcoming policy decisions and governance.',
      coverImage: getRandomPlaceholder(),
      publishedAt: new Date('2023-10-08'),
      readTime: 5,
      categories: [{ id: '4', name: 'Politics', slug: 'politics' }],
    },
    {
      id: '5',
      title: 'Virtual Reality in Education: Transforming Learning Experiences',
      slug: 'vr-education-transformation',
      excerpt: 'How VR technology is being implemented in classrooms to create immersive educational experiences.',
      coverImage: getRandomPlaceholder(),
      publishedAt: new Date('2023-10-05'),
      readTime: 4,
      categories: [{ id: '1', name: 'Technology', slug: 'technology' }],
    },
    {
      id: '6',
      title: 'New Archaeological Discovery Rewrites Ancient History',
      slug: 'archaeological-discovery-history',
      excerpt: 'Archaeologists unearth artifacts that challenge our understanding of ancient civilizations.',
      coverImage: getRandomPlaceholder(),
      publishedAt: new Date('2023-10-03'),
      readTime: 6,
      categories: [{ id: '5', name: 'Culture', slug: 'culture' }],
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
        {/* Stories Section */}
        <section className="py-2">
          <div className="page-container">
            <h2 className="text-xl font-display font-bold mb-2 px-4">Stories</h2>
            <StoriesSlider stories={stories} />
          </div>
        </section>

        {/* Main News Section */}
        <section className="py-8">
          <div className="page-container">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-display font-bold">Latest News</h2>
              <Link to="/articles">
                <Button variant="ghost" className="text-primary">
                  View all <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            {/* Featured News */}
            <div className="mb-10">
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={newsArticles[0].coverImage} 
                      alt={newsArticles[0].title} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <CardHeader className="p-0 mb-2">
                      <CardTitle className="text-2xl">{newsArticles[0].title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-4">{newsArticles[0].excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          {new Date(newsArticles[0].publishedAt).toLocaleDateString()} · {newsArticles[0].readTime} min read
                        </span>
                        <Link to={`/article/${newsArticles[0].slug}`}>
                          <Button variant="default" size="sm">Read More</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles.slice(1).map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
