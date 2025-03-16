
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Search, User, Menu, X, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  // Update scroll status
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page with the query
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  const categoryGroups = {
    'News': [
      { name: 'Politics', path: '/category/politics' },
      { name: 'Business', path: '/category/business' },
      { name: 'International', path: '/category/international' },
    ],
    'Topics': [
      { name: 'Technology', path: '/category/technology' },
      { name: 'Science', path: '/category/science' },
      { name: 'Health', path: '/category/health' },
      { name: 'Environment', path: '/category/environment' },
    ],
    'Culture': [
      { name: 'Arts', path: '/category/arts' },
      { name: 'Style', path: '/category/style' },
      { name: 'Food', path: '/category/food' },
      { name: 'Travel', path: '/category/travel' },
    ]
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-standard ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-soft py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
          >
            <span className="text-2xl font-display font-bold tracking-tight text-primary">Insight</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-standard hover:text-primary ${
                location.pathname === '/' ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium p-0 h-auto">
                  Categories <Filter className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {Object.entries(categoryGroups).map(([group, categories]) => (
                  <React.Fragment key={group}>
                    <DropdownMenuLabel>{group}</DropdownMenuLabel>
                    {categories.map((category) => (
                      <DropdownMenuItem key={category.path} asChild>
                        <Link to={category.path}>{category.name}</Link>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                  </React.Fragment>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link
              to="/trending"
              className={`text-sm font-medium transition-standard hover:text-primary ${
                location.pathname === '/trending' ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              Trending
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Desktop Search */}
            <div className="relative">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center">
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    className="w-60 pr-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <Button 
                    type="submit" 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-0"
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                </form>
              ) : (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  aria-label="Search" 
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>
            
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="p-0 h-8">
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                        {user?.profilePicture ? (
                          <img 
                            src={user.profilePicture} 
                            alt={`${user.firstName} ${user.lastName}`} 
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <User className="h-4 w-4 text-muted-foreground" />
                        )}
                      </div>
                      <span className="text-sm font-medium">{user?.firstName}</span>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/bookmarks">Bookmarks</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/auth/login">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth/register">
                  <Button variant="default" size="sm">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Search */}
            {isSearchOpen ? (
              <form 
                onSubmit={handleSearch} 
                className="fixed inset-x-0 top-0 p-4 bg-background z-50 flex items-center shadow-md"
              >
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="flex-1 mr-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <Button type="submit" variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </form>
            ) : (
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="Search"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
            )}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-[64px] bg-background z-40"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4 space-y-6">
              <div className="space-y-3 pt-4">
                <Link
                  to="/"
                  className={`block py-2 text-base font-medium transition-standard ${
                    location.pathname === '/' ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  Home
                </Link>

                <div className="py-2">
                  <p className="text-base font-medium mb-2">Categories</p>
                  <div className="grid grid-cols-2 gap-2 pl-2">
                    {Object.entries(categoryGroups).map(([group, categories]) => (
                      <div key={group} className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">{group}</p>
                        {categories.map((category) => (
                          <Link
                            key={category.path}
                            to={category.path}
                            className="block text-sm py-1 text-foreground/80 hover:text-primary"
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/trending"
                  className={`block py-2 text-base font-medium transition-standard ${
                    location.pathname === '/trending' ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  Trending
                </Link>
              </div>
              
              <div className="pt-6 border-t border-border">
                {isAuthenticated ? (
                  <div className="space-y-3">
                    <Link to="/profile" className="flex items-center space-x-3 py-2">
                      <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                        {user?.profilePicture ? (
                          <img 
                            src={user.profilePicture} 
                            alt={`${user.firstName} ${user.lastName}`} 
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <User className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{`${user?.firstName} ${user?.lastName}`}</p>
                        <p className="text-xs text-muted-foreground">{user?.email}</p>
                      </div>
                    </Link>
                    <Link to="/bookmarks" className="block py-2 text-sm">
                      Bookmarks
                    </Link>
                    <Link to="/settings" className="block py-2 text-sm">
                      Settings
                    </Link>
                    <Button className="w-full" variant="outline" onClick={logout}>
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-3">
                    <Link to="/auth/login">
                      <Button variant="outline" className="w-full">Sign In</Button>
                    </Link>
                    <Link to="/auth/register">
                      <Button variant="default" className="w-full">Sign Up</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
