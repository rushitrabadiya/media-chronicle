
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Article } from '@/utils/types';

interface ArticleCardProps {
  article: Partial<Article>;
  variant?: 'default' | 'compact' | 'horizontal';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  article, 
  variant = 'default' 
}) => {
  const {
    id = '1',
    title = 'Article Title',
    slug = 'article-slug',
    excerpt = 'Article excerpt goes here...',
    coverImage = 'https://source.unsplash.com/random/800x600/?news',
    publishedAt = new Date(),
    readTime = 5,
    categories = [],
  } = article;

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(publishedAt instanceof Date ? publishedAt : new Date(publishedAt));

  if (variant === 'compact') {
    return (
      <Link to={`/article/${slug}`} className="group">
        <div className="relative flex flex-col overflow-hidden rounded-lg transition-all hover:shadow-soft">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={coverImage}
              alt={title}
              className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="mt-3 flex flex-col space-y-2">
            {categories.length > 0 && (
              <Badge variant="secondary" className="w-fit">
                {categories[0].name}
              </Badge>
            )}
            <h3 className="font-display text-base font-medium line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <span className="flex items-center">
                <Calendar className="mr-1 h-3 w-3" />
                {formattedDate}
              </span>
              <span className="flex items-center">
                <Clock className="mr-1 h-3 w-3" />
                {readTime} min read
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'horizontal') {
    return (
      <Link to={`/article/${slug}`} className="group">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-4">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={coverImage}
                alt={title}
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="col-span-8 flex flex-col justify-center space-y-2">
            {categories.length > 0 && (
              <Badge variant="secondary" className="w-fit">
                {categories[0].name}
              </Badge>
            )}
            <h3 className="font-display text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground line-clamp-2">{excerpt}</p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {formattedDate}
              </span>
              <span className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                {readTime} min read
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Default card layout
  return (
    <Link to={`/article/${slug}`} className="group">
      <div className="relative flex h-full flex-col overflow-hidden rounded-lg transition-all hover:shadow-soft">
        <div className="aspect-[16/10] overflow-hidden rounded-lg">
          <img
            src={coverImage}
            alt={title}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-4 flex flex-col space-y-3 p-1">
          {categories.length > 0 && (
            <Badge variant="secondary" className="w-fit">
              {categories[0].name}
            </Badge>
          )}
          <h3 className="font-display text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {formattedDate}
              </span>
              <span className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                {readTime} min read
              </span>
            </div>
            <span className="flex items-center text-sm font-medium text-primary group-hover:translate-x-0.5 transition-transform">
              Read more <ArrowRight className="ml-1 h-3 w-3" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
