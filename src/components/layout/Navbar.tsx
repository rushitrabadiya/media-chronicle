
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, User, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="fixed w-full bg-background/95 backdrop-blur z-50 border-b">
      <div className="px-4 md:px-6 py-3 page-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-display font-bold text-xl md:text-2xl">NewsApp</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button variant={isActive('/') ? 'default' : 'ghost'}>Home</Button>
            </Link>
            <Link to="/category/technology">
              <Button variant={isActive('/category/technology') ? 'default' : 'ghost'}>Technology</Button>
            </Link>
            <Link to="/category/business">
              <Button variant={isActive('/category/business') ? 'default' : 'ghost'}>Business</Button>
            </Link>
            <Link to="/category/science">
              <Button variant={isActive('/category/science') ? 'default' : 'ghost'}>Science</Button>
            </Link>
            <Link to="/category/health">
              <Button variant={isActive('/category/health') ? 'default' : 'ghost'}>Health</Button>
            </Link>
          </nav>

          {/* Right Section (Search & User Menu) */}
          <div className="flex items-center space-x-1">
            <Link to="/search">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </Link>

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                    <span className="sr-only">User menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    {user?.email || "User"}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link to="/profile" className="w-full">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/admin" className="w-full flex items-center">
                      <LayoutDashboard className="h-4 w-4 mr-2" />
                      Admin Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth/login">
                <Button>Login</Button>
              </Link>
            )}

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link to="/" className="text-lg font-medium">Home</Link>
                  <Link to="/category/technology" className="text-lg font-medium">Technology</Link>
                  <Link to="/category/business" className="text-lg font-medium">Business</Link>
                  <Link to="/category/science" className="text-lg font-medium">Science</Link>
                  <Link to="/category/health" className="text-lg font-medium">Health</Link>
                  <Link to="/admin" className="text-lg font-medium flex items-center">
                    <LayoutDashboard className="h-4 w-4 mr-2" />
                    Admin Dashboard
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
