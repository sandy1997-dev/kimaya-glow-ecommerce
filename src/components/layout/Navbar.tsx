
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, Heart, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useCart } from '@/contexts/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { cartItems } = useCart();
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="glass-morphism shadow-lg border-b border-kimaya-accent/20 relative z-50">
      <div className="kimaya-container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <h1 className="text-3xl text-kimaya-primary font-cormorant font-semibold neon-text group-hover:scale-105 transition-transform duration-300">
                Kimaya
              </h1>
              <div className="ml-2 w-2 h-2 bg-kimaya-primary rounded-full pulse-glow" />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { path: '/', label: 'Home' },
                { path: '/products', label: 'Products' },
                { path: '/about', label: 'About' },
                { path: '/contact', label: 'Contact' }
              ].map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`${
                    isActive(item.path) 
                      ? 'text-kimaya-primary font-semibold neon-text' 
                      : 'text-kimaya-primary hover:text-kimaya-accent'
                  } transition-all duration-300 relative group`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-kimaya-primary transition-all duration-300 ${
                    isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/wishlist" className="relative group">
              <Heart className="h-6 w-6 text-kimaya-primary group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -inset-2 rounded-full bg-kimaya-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <Link to="/profile" className="relative group">
              <User className="h-6 w-6 text-kimaya-primary group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -inset-2 rounded-full bg-kimaya-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <Link to="/cart" className="relative group">
              <ShoppingCart className="h-6 w-6 text-kimaya-primary group-hover:scale-110 transition-transform duration-300" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-kimaya-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs pulse-glow">
                  {totalItems}
                </span>
              )}
              <div className="absolute -inset-2 rounded-full bg-kimaya-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:bg-kimaya-secondary/50"
              >
                <Menu className="h-6 w-6 text-kimaya-primary" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-morphism rounded-md shadow-xl border border-kimaya-accent/20 mt-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/products', label: 'Products' },
                { path: '/about', label: 'About' },
                { path: '/contact', label: 'Contact' },
                { path: '/profile', label: 'My Account' },
                { path: '/wishlist', label: 'Wishlist' }
              ].map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`${
                    isActive(item.path) ? 'bg-kimaya-secondary/30 neon-text' : ''
                  } block px-3 py-2 rounded-md text-kimaya-primary hover:bg-kimaya-secondary/20 transition-all duration-300`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
