
import { useState } from 'react';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        
        <div className="p-6 flex flex-col">
          <span className="text-sm text-kimaya-accent mb-1 capitalize">{product.category}</span>
          <h1 className="text-3xl font-cormorant font-semibold text-kimaya-primary mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            {product.rating && (
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-sm text-kimaya-primary">
                  ({product.rating.toFixed(1)})
                </span>
              </div>
            )}
          </div>
          
          <p className="text-lg font-semibold text-kimaya-primary mb-4">${product.price.toFixed(2)}</p>
          
          <p className="text-kimaya-primary text-base mb-6">{product.description}</p>
          
          <div className="mb-6">
            <h3 className="font-medium text-kimaya-primary mb-2">Key Benefits:</h3>
            <ul className="list-disc list-inside text-kimaya-primary opacity-90">
              {product.benefits?.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium text-kimaya-primary mb-2">Ingredients:</h3>
            <p className="text-kimaya-primary opacity-90">
              {product.ingredients?.join(', ')}
            </p>
          </div>
          
          <div className="mt-auto">
            <div className="flex items-center mb-6">
              <label htmlFor="quantity" className="mr-4 text-kimaya-primary">Quantity:</label>
              <div className="flex items-center border border-kimaya-accent rounded-md">
                <button
                  onClick={decreaseQuantity}
                  className="px-3 py-1 text-kimaya-primary hover:bg-kimaya-secondary transition-colors"
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-12 text-center border-none focus:outline-none text-kimaya-primary"
                  min="1"
                />
                <button
                  onClick={increaseQuantity}
                  className="px-3 py-1 text-kimaya-primary hover:bg-kimaya-secondary transition-colors"
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-kimaya-primary text-white hover:bg-opacity-90"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              
              <Button
                variant="outline"
                className="border-kimaya-primary text-kimaya-primary hover:bg-kimaya-primary hover:text-white"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
