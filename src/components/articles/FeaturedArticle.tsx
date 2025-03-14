
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Article } from '@/utils/types';

interface FeaturedArticleProps {
  article: Partial<Article>;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  const {
    id = '1',
    title = 'Featured Article Title',
    slug = 'featured-article-slug',
    excerpt = 'Featured article excerpt with more details about the content...',
    coverImage = 'https://source.unsplash.com/random/1600x900/?news',
    publishedAt = new Date(),
    readTime = 8,
    categories = [],
  } = article;

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(publishedAt instanceof Date ? publishedAt : new Date(publishedAt));

  return (
    <Link to={`/article/${slug}`} className="group">
      <div className="relative grid md:grid-cols-2 gap-6 lg:gap-10 overflow-hidden rounded-lg">
        <div className="order-2 md:order-1 flex flex-col justify-center">
          {categories.length > 0 && (
            <Badge variant="secondary" className="mb-4 w-fit">
              {categories[0].name}
            </Badge>
          )}
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
            {title}
          </h2>
          <p className="text-muted-foreground mb-6 text-lg">{excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6 text-muted-foreground">
              <span className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {formattedDate}
              </span>
              <span className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                {readTime} min read
              </span>
            </div>
            <span className="hidden sm:flex items-center font-medium text-primary group-hover:translate-x-0.5 transition-transform">
              Read full article <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-[16/10] overflow-hidden rounded-lg">
            <img
              src={coverImage}
              alt={title}
              className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedArticle;
