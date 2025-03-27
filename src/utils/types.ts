
// User type definition
export interface User {
  id: string;
  email: string;
  name?: string;
  role?: 'user' | 'admin';
  avatar?: string;
}

// Article interface
export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  coverImage: string;
  publishedAt: Date;
  readTime: number;
  categories: Category[];
  author?: Author;
}

// Category interface
export interface Category {
  id: string;
  name: string;
  slug: string;
}

// Author interface
export interface Author {
  id: string;
  name: string;
  bio?: string;
  avatar?: string;
}

// Story interface
export interface Story {
  id: string;
  title: string;
  coverImage: string;
  authorName: string;
  authorImage: string;
  content?: string;
  publishedAt?: Date;
}

// Comment interface
export interface Comment {
  id: string;
  content: string;
  authorName: string;
  authorAvatar?: string;
  createdAt: Date;
  likes: number;
}
