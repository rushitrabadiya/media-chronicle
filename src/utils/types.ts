
// User type definition
export interface User {
  id: string;
  email: string;
  name?: string;
  role?: 'user' | 'admin' | 'editor' | 'moderator';
  avatar?: string;
  permissions?: string[];
}

// Login credentials interface
export interface LoginCredentials {
  email?: string;
  password: string;
  remember?: boolean;
  phoneNumber?: string;
  dialCode?: string;
}

// Register data interface
export interface RegisterData {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
  agreeToTerms?: boolean;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  dialCode?: string;
  pin?: string;
  address?: string;
  postcode?: string;
  city?: string;
  state?: string;
  country?: string;
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
  parentId?: string;
  subcategories?: Category[];
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

// Role interface
export interface Role {
  id: string;
  name: string;
  description?: string;
  permissions: Permission[];
  createdAt: Date;
  updatedAt: Date;
}

// Permission interface
export interface Permission {
  id: string;
  name: string;
  description?: string;
  module: string;
  action: 'create' | 'read' | 'update' | 'delete' | 'all';
}

// Menu interface
export interface Menu {
  id: string;
  name: string;
  path: string;
  icon?: string;
  parentId?: string;
  order: number;
  permissions?: string[];
  children?: Menu[];
}

// News interface
export interface News {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  coverImage: string;
  type: 'full' | 'short';
  publishedAt: Date;
  author: Author;
  categories: Category[];
}
