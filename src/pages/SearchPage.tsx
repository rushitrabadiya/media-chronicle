
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ArticleCard from '@/components/articles/ArticleCard';
import { useToast } from '@/components/ui/use-toast';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { toast } = useToast();
  
  // Mock search results - in a real app, this would come from an API
  const allArticles = [
    {
      id: '1',
      title: 'Political Landscape Shifts Following Latest Elections',
      slug: 'political-landscape-elections',
      excerpt: 'Analysis of recent election results and what they signal for upcoming policy decisions and governance.',
      coverImage: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80',
      publishedAt: new Date('2023-10-08'),
      readTime: 5,
      categories: [{ id: '4', name: 'Politics', slug: 'politics' }],
    },
    {
      id: '2',
      title: 'New Bill Proposes Changes to Environmental Regulations',
      slug: 'new-bill-environmental-regulations',
      excerpt: 'Lawmakers debate the implications of a new bill that would reshape environmental policy across the nation.',
      coverImage: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80',
      publishedAt: new Date('2023-09-28'),
      readTime: 6,
      categories: [{ id: '4', name: 'Politics', slug: 'politics' }],
    },
    {
      id: '3',
      title: 'The Future of Sustainable Energy: Breakthroughs in Renewable Resources',
      slug: 'future-sustainable-energy',
      excerpt: 'Recent advancements in renewable energy technologies are changing how we think about sustainability.',
      coverImage: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=900&q=80',
      publishedAt: new Date('2023-10-15'),
      readTime: 8,
      categories: [{ id: '1', name: 'Technology', slug: 'technology' }],
    },
    {
      id: '4',
      title: 'Virtual Reality in Education: Transforming Learning Experiences',
      slug: 'vr-education-transformation',
      excerpt: 'How VR technology is being implemented in classrooms to create immersive educational experiences.',
      coverImage: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80',
      publishedAt: new Date('2023-10-05'),
      readTime: 4,
      categories: [{ id: '1', name: 'Technology', slug: 'technology' }],
    },
    {
      id: '5',
      title: 'Global Markets React to Latest Economic Policy Shifts',
      slug: 'global-markets-economic-policy',
      excerpt: 'Financial experts analyze the implications of new economic policies on global markets and investment strategies.',
      coverImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80',
      publishedAt: new Date('2023-10-12'),
      readTime: 6,
      categories: [{ id: '2', name: 'Business', slug: 'business' }],
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
      title: 'The Science Behind Climate Change: New Research Findings',
      slug: 'science-climate-change',
      excerpt: 'Leading scientists publish groundbreaking research on climate patterns and their implications for global policy.',
      coverImage: 'https://images.unsplash.com/photo-1581229876567-374f28aa7fe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80',
      publishedAt: new Date('2023-10-10'),
      readTime: 7,
      categories: [{ id: '3', name: 'Science', slug: 'science' }],
    },
  ];
  
  // Simple search function that looks for the query in title or excerpt
  const searchResults = query 
    ? allArticles.filter(article => 
        article.title.toLowerCase().includes(query.toLowerCase()) || 
        article.excerpt.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="page-container">
          <div className="mb-12">
            <h1 className="text-4xl font-display font-bold mb-4">Search Results</h1>
            <div className="h-1 w-24 bg-primary mb-6"></div>
            <p className="text-lg text-muted-foreground">
              {searchResults.length} results found for "{query}"
            </p>
          </div>
          
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchResults.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <h3 className="text-xl font-medium mb-2">No results found</h3>
              <p className="text-muted-foreground">
                Try different keywords or browse our categories.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchPage;
