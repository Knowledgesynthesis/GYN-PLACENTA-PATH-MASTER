import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Settings } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">GYN & Placenta Path Master</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              <Home className="w-5 h-5" />
            </Link>
            <Link
              to="/settings"
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                isActive('/settings') ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              <Settings className="w-5 h-5" />
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <nav className="flex flex-col space-y-4 p-4">
              <Link
                to="/"
                className="flex items-center space-x-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
              <Link
                to="/settings"
                className="flex items-center space-x-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t mt-auto">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>Educational use only. Not for diagnosis, patient care, or clinical decision-making.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
