
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <div className="relative overflow-hidden">
        <Link to={`/products/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
        
        {product.isNew && (
          <div className="absolute top-3 left-3 bg-kimaya-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
            NEW
          </div>
        )}
        
        {product.featured && !product.isNew && (
          <div className="absolute top-3 left-3 bg-kimaya-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
            FEATURED
          </div>
        )}
      </div>
      
      <div className="p-6">
        <span className="text-sm text-kimaya-accent mb-2 capitalize block">{product.category}</span>
        <Link to={`/products/${product.id}`} className="block link-hover">
          <h3 className="text-xl font-cormorant font-semibold text-kimaya-primary mb-3">{product.name}</h3>
        </Link>
        
        <p className="text-kimaya-primary opacity-80 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-kimaya-primary font-bold text-lg">
            ₹{product.price.toFixed(2)}
          </span>
          
          <Button 
            onClick={() => addToCart(product, 1)}
            className="button-hover bg-kimaya-primary hover:bg-kimaya-primary/90"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
