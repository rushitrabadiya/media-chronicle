
import React from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import StoryItem from './StoryItem';
import { Link } from 'react-router-dom';

interface Story {
  id: string;
  title: string;
  coverImage: string;
  authorName: string;
  authorImage?: string;
}

interface StoriesSliderProps {
  stories: Story[];
}

const StoriesSlider: React.FC<StoriesSliderProps> = ({ stories }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (!stories.length) return null;

  return (
    <div className="relative px-2 my-6">
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 z-10 rounded-full bg-secondary/80 shadow-sm"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <ScrollArea 
          ref={scrollRef}
          className="w-full overflow-x-auto"
          orientation="horizontal"
        >
          <div className="flex space-x-4 py-2 px-4">
            {/* Create Story Item */}
            <Link to="/create-story" className="block">
              <div className="relative w-20 h-32 md:w-24 md:h-36 rounded-xl overflow-hidden border-2 border-dashed border-muted-foreground/40 flex flex-col items-center justify-center hover-scale bg-muted/30">
                <Plus className="h-6 w-6 text-muted-foreground mb-2" />
                <span className="text-xs text-muted-foreground">Create</span>
              </div>
            </Link>
            
            {/* Story Items */}
            {stories.map((story) => (
              <StoryItem
                key={story.id}
                id={story.id}
                title={story.title}
                coverImage={story.coverImage}
                authorName={story.authorName}
                authorImage={story.authorImage}
              />
            ))}
          </div>
        </ScrollArea>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 z-10 rounded-full bg-secondary/80 shadow-sm"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default StoriesSlider;
