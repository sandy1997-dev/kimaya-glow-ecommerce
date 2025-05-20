
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
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col">
      <div className="relative">
        <Link to={`/products/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="h-64 w-full object-cover"
          />
        </Link>
        
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-kimaya-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
            NEW
          </div>
        )}
        
        {product.featured && !product.isNew && (
          <div className="absolute top-2 left-2 bg-kimaya-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
            FEATURED
          </div>
        )}
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <span className="text-sm text-kimaya-accent mb-1 capitalize">{product.category}</span>
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="text-xl font-cormorant font-semibold text-kimaya-primary mb-2">{product.name}</h3>
        </Link>
        
        <p className="text-kimaya-primary opacity-80 text-sm mb-4 flex-grow line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-kimaya-primary font-medium">${product.price.toFixed(2)}</span>
          
          <Button 
            onClick={() => addToCart(product, 1)}
            variant="outline"
            size="sm"
            className="border-kimaya-primary text-kimaya-primary hover:bg-kimaya-primary hover:text-white"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
