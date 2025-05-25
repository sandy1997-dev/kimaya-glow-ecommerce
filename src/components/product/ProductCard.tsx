
import { Link } from 'react-router-dom';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="hologram-card rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col group card-3d floating-element">
      <div className="relative overflow-hidden">
        <Link to={`/products/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </Link>
        
        {/* Holographic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-kimaya-secondary/20 to-kimaya-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Scanning Line Effect */}
        <div className="absolute inset-0 scan-line-effect opacity-0 group-hover:opacity-100" />
        
        {product.isNew && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-kimaya-primary to-kimaya-accent text-white px-4 py-2 rounded-full text-xs font-semibold neon-glow animate-pulse">
            NEW
          </div>
        )}
        
        {product.featured && !product.isNew && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-kimaya-accent to-kimaya-primary text-white px-4 py-2 rounded-full text-xs font-semibold neon-glow">
            FEATURED
          </div>
        )}
        
        {/* Futuristic Corner Accent */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-kimaya-primary opacity-50" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-kimaya-primary opacity-50" />
      </div>
      
      <div className="p-6 flex-grow flex flex-col relative">
        {/* Data Stream Indicators */}
        <div className="absolute top-0 right-2 h-full w-px bg-gradient-to-b from-transparent via-kimaya-accent to-transparent opacity-30 data-stream" />
        
        <span className="text-sm text-kimaya-accent mb-2 capitalize font-orbitron tracking-wider opacity-80">{product.category}</span>
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="text-xl font-cormorant font-semibold text-kimaya-primary mb-3 group-hover:neon-text transition-all duration-300">{product.name}</h3>
        </Link>
        
        <p className="text-kimaya-primary opacity-80 text-sm mb-6 flex-grow line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-kimaya-primary font-bold text-lg font-orbitron">
            ₹{product.price.toFixed(2)}
          </span>
          
          <Button 
            onClick={() => addToCart(product, 1)}
            className="futuristic-btn border-0 hover:scale-105 transition-all duration-300"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
        
        {/* Terminal-style product ID */}
        <div className="mt-3 text-xs font-mono text-kimaya-accent opacity-50">
          ID: {product.id.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
