
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@/components/ui/avatar';

interface StoryItemProps {
  id: string;
  title: string;
  coverImage: string;
  authorName: string;
  authorImage?: string;
}

const StoryItem: React.FC<StoryItemProps> = ({
  id,
  title,
  coverImage,
  authorName,
  authorImage,
}) => {
  return (
    <Link to={`/story/${id}`} className="block">
      <div className="relative group hover-scale">
        <div className="relative w-20 h-32 md:w-24 md:h-36 rounded-xl overflow-hidden border-2 border-background shadow-sm">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${coverImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
          </div>
          
          <div className="absolute bottom-2 left-0 right-0 px-2 text-center">
            <p className="text-xs text-white font-medium line-clamp-1">{title}</p>
          </div>
        </div>
        
        {/* Author avatar ring */}
        <div className="absolute -top-1 -left-1 p-[2px] bg-background rounded-full">
          <Avatar className="w-7 h-7 border-2 border-primary">
            {authorImage ? (
              <img src={authorImage} alt={authorName} />
            ) : (
              <span className="text-xs">{authorName.charAt(0)}</span>
            )}
          </Avatar>
        </div>
      </div>
    </Link>
  );
};

export default StoryItem;
