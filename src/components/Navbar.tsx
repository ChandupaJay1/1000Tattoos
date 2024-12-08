import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white dark:bg-dark shadow-lg" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold dark:text-white">INK MASTER</Link>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-4">
              <Link 
                to="/" 
                className={cn(
                  "px-3 py-2 transition-colors dark:text-gray-300",
                  isActive('/') ? "text-primary dark:text-primary" : "hover:text-primary-dark dark:hover:text-primary"
                )}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={cn(
                  "px-3 py-2 transition-colors dark:text-gray-300",
                  isActive('/about') ? "text-primary dark:text-primary" : "hover:text-primary-dark dark:hover:text-primary"
                )}
              >
                About
              </Link>
              <Link 
                to="/gallery" 
                className={cn(
                  "px-3 py-2 transition-colors dark:text-gray-300",
                  isActive('/gallery') ? "text-primary dark:text-primary" : "hover:text-primary-dark dark:hover:text-primary"
                )}
              >
                Gallery
              </Link>
              <Link 
                to="/artists" 
                className={cn(
                  "px-3 py-2 transition-colors dark:text-gray-300",
                  isActive('/artists') ? "text-primary dark:text-primary" : "hover:text-primary-dark dark:hover:text-primary"
                )}
              >
                Artists
              </Link>
              <Link 
                to="/contact" 
                className={cn(
                  "px-3 py-2 transition-colors dark:text-gray-300",
                  isActive('/contact') ? "text-primary dark:text-primary" : "hover:text-primary-dark dark:hover:text-primary"
                )}
              >
                Contact
              </Link>
            </div>
            
            <ThemeToggle />
            
            <Link 
              to="/appointment" 
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors"
            >
              Book Now
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600 dark:text-gray-300">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-dark-card">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className={cn(
                "block px-3 py-2 dark:text-gray-300",
                isActive('/') ? "text-primary dark:text-primary" : "hover:text-primary-dark dark:hover:text-primary"
              )}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "block px-3 py-2 dark:text-gray-300",
                isActive('/about') ? "text-primary dark:text-primary" : "hover:text-primary-dark dark:hover:text-primary"
              )}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/gallery" 
              className={cn(
                "block px-3 py-2 dark:text-gray-300",
                isActive('/gallery') ? "text-primary dark:text-primary" : "hover:text-primary-dark dark:hover:text-primary"
              )}
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/artists" 
              className={cn(
                "block px-3 py-2 dark:text-gray-300",
                isActive('/artists') ? "text-primary dark:text-primary" : "hover:text-primary-dark dark:hover:text-primary"
              )}
              onClick={() => setIsOpen(false)}
            >
              Artists
            </Link>
            <Link 
              to="/contact" 
              className={cn(
                "block px-3 py-2 dark:text-gray-300",
                isActive('/contact') ? "text-primary dark:text-primary" : "hover:text-primary-dark dark:hover:text-primary"
              )}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/appointment" 
              className="block bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}