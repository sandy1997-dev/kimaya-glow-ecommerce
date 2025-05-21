
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
    <nav className="bg-kimaya-light shadow-sm">
      <div className="kimaya-container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <h1 className="text-3xl text-kimaya-primary font-cormorant font-semibold">Kimaya</h1>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className={`${isActive('/') ? 'text-kimaya-primary font-semibold' : 'text-kimaya-primary hover:text-opacity-70'} transition-colors`}>
                Home
              </Link>
              <Link to="/products" className={`${isActive('/products') ? 'text-kimaya-primary font-semibold' : 'text-kimaya-primary hover:text-opacity-70'} transition-colors`}>
                Products
              </Link>
              <Link to="/about" className={`${isActive('/about') ? 'text-kimaya-primary font-semibold' : 'text-kimaya-primary hover:text-opacity-70'} transition-colors`}>
                About
              </Link>
              <Link to="/contact" className={`${isActive('/contact') ? 'text-kimaya-primary font-semibold' : 'text-kimaya-primary hover:text-opacity-70'} transition-colors`}>
                Contact
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/wishlist" className="relative">
              <Heart className="h-6 w-6 text-kimaya-primary" />
            </Link>
            
            <Link to="/profile" className="relative">
              <User className="h-6 w-6 text-kimaya-primary" />
            </Link>
            
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-kimaya-primary" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-kimaya-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
            
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6 text-kimaya-primary" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-md shadow-lg">
              <Link 
                to="/" 
                className={`${isActive('/') ? 'bg-kimaya-secondary' : ''} block px-3 py-2 rounded-md text-kimaya-primary hover:bg-kimaya-secondary`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className={`${isActive('/products') ? 'bg-kimaya-secondary' : ''} block px-3 py-2 rounded-md text-kimaya-primary hover:bg-kimaya-secondary`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/about" 
                className={`${isActive('/about') ? 'bg-kimaya-secondary' : ''} block px-3 py-2 rounded-md text-kimaya-primary hover:bg-kimaya-secondary`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`${isActive('/contact') ? 'bg-kimaya-secondary' : ''} block px-3 py-2 rounded-md text-kimaya-primary hover:bg-kimaya-secondary`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/profile" 
                className={`${isActive('/profile') ? 'bg-kimaya-secondary' : ''} block px-3 py-2 rounded-md text-kimaya-primary hover:bg-kimaya-secondary`}
                onClick={() => setIsMenuOpen(false)}
              >
                My Account
              </Link>
              <Link 
                to="/wishlist" 
                className={`${isActive('/wishlist') ? 'bg-kimaya-secondary' : ''} block px-3 py-2 rounded-md text-kimaya-primary hover:bg-kimaya-secondary`}
                onClick={() => setIsMenuOpen(false)}
              >
                Wishlist
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
