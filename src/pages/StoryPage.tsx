
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Heart, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';

// Mock data for stories
const mockStories = [
  {
    id: "1",
    title: "Tech Evolution in 2023",
    content: "Exploring the latest breakthroughs in technology.",
    coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=900&q=80",
    authorName: "Alex Johnson",
    authorImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80",
    publishedAt: new Date('2023-10-20'),
  },
  {
    id: "2",
    title: "Future of AI",
    content: "How artificial intelligence is reshaping our world.",
    coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=900&q=80",
    authorName: "Samantha Lee",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80",
    publishedAt: new Date('2023-10-19'),
  },
  {
    id: "3",
    title: "Climate Solutions",
    content: "Innovative approaches to combat climate change.",
    coverImage: "https://images.unsplash.com/photo-1569163139500-56d8c1d5361a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&h=900&q=80",
    authorName: "Marcus Green",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80",
    publishedAt: new Date('2023-10-18'),
  },
];

const StoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [story, setStory] = useState<any>(null);
  const [progress, setProgress] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);

  // Find story by ID
  useEffect(() => {
    if (id) {
      const foundStory = mockStories.find(s => s.id === id);
      if (foundStory) {
        setStory(foundStory);
        // Find index in mock stories array
        const index = mockStories.findIndex(s => s.id === id);
        setStoryIndex(index >= 0 ? index : 0);
      } else {
        navigate('/');
      }
    }
  }, [id, navigate]);

  // Progress bar
  useEffect(() => {
    if (!story) return;
    
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          // Navigate to next story
          const nextIndex = storyIndex + 1;
          if (nextIndex < mockStories.length) {
            navigate(`/story/${mockStories[nextIndex].id}`);
          } else {
            navigate('/'); // Back to home when all stories viewed
          }
          return 0;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [story, storyIndex, navigate]);

  const navigateStory = (direction: 'prev' | 'next') => {
    let nextIndex;
    if (direction === 'prev') {
      nextIndex = storyIndex - 1;
      if (nextIndex < 0) {
        navigate('/');
        return;
      }
    } else {
      nextIndex = storyIndex + 1;
      if (nextIndex >= mockStories.length) {
        navigate('/');
        return;
      }
    }
    navigate(`/story/${mockStories[nextIndex].id}`);
  };

  if (!story) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800">
        <div 
          className="h-full bg-primary transition-all" 
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Close Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 right-4 z-50 text-white"
      >
        <X className="h-6 w-6" />
      </button>
      
      {/* Navigation Buttons */}
      <button
        onClick={() => navigateStory('prev')}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 text-white"
        disabled={storyIndex === 0}
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      
      <button
        onClick={() => navigateStory('next')}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 text-white"
        disabled={storyIndex === mockStories.length - 1}
      >
        <ChevronRight className="h-8 w-8" />
      </button>
      
      {/* Story Content */}
      <div className="relative w-full h-full md:w-[400px] md:h-[80vh] md:rounded-lg overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${story.coverImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
        </div>
        
        {/* Author Info */}
        <div className="absolute top-6 left-4 right-4 flex items-center">
          <Avatar className="w-10 h-10 border-2 border-primary mr-3">
            {story.authorImage ? (
              <img src={story.authorImage} alt={story.authorName} />
            ) : (
              <span>{story.authorName.charAt(0)}</span>
            )}
          </Avatar>
          <div>
            <p className="text-white font-medium">{story.authorName}</p>
            <p className="text-white/70 text-xs">
              {new Date(story.publishedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        
        {/* Story Content */}
        <div className="absolute bottom-20 left-4 right-4">
          <h1 className="text-2xl text-white font-bold mb-3">{story.title}</h1>
          <p className="text-white/90">{story.content}</p>
        </div>
        
        {/* Actions */}
        <div className="absolute bottom-6 left-4 right-4 flex items-center justify-between">
          <Button variant="ghost" size="icon" className="text-white">
            <Heart className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <Share className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
