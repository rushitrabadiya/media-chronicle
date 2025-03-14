
export interface User {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  dialCode?: string;
  profilePicture?: string;
  address?: string;
  postcode?: string;
  city?: string;
  state?: string;
  country?: string;
  role?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parentId?: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: User;
  categories: Category[];
  tags: Tag[];
  publishedAt: Date;
  updatedAt: Date;
  status: 'draft' | 'published' | 'scheduled';
  readTime: number;
  featured?: boolean;
}

export interface ShortNews {
  id: string;
  content: string;
  author: User;
  publishedAt: Date;
  categories?: Category[];
  tags?: Tag[];
}

export interface WebStory {
  id: string;
  title: string;
  slug: string;
  coverImage: string;
  slides: WebStorySlide[];
  author: User;
  publishedAt: Date;
  categories?: Category[];
  tags?: Tag[];
}

export interface WebStorySlide {
  id: string;
  image: string;
  caption?: string;
  link?: string;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  publishedAt: Date;
  articleId: string;
  parentId?: string;
}

export interface Permission {
  menuId: string;
  actions: ('READ' | 'CREATE' | 'EDIT' | 'DELETE')[];
}

export interface Role {
  id: string;
  name: string;
  permissions: Permission[];
}

export interface LoginCredentials {
  email?: string;
  phoneNumber?: string;
  password: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  dialCode?: string;
  password: string;
  pin?: string;
  address?: string;
  postcode?: string;
  city?: string;
  state?: string;
  country?: string;
}

export interface OtpVerification {
  email?: string;
  phoneNumber?: string;
  otp: string;
}

export interface PasswordReset {
  token: string;
  newPassword: string;
}
