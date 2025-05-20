
import { CartItem as CartItemType } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      updateQuantity(product.id, newQuantity);
    }
  };
  
  const subtotal = product.price * quantity;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-kimaya-accent/30 py-4">
      <div className="flex items-center flex-1 mb-4 sm:mb-0">
        <div className="w-20 h-20 mr-4">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        
        <div>
          <h3 className="font-medium text-kimaya-primary">{product.name}</h3>
          <p className="text-sm text-kimaya-primary opacity-80 capitalize">{product.category}</p>
          <p className="text-kimaya-primary">${product.price.toFixed(2)}</p>
        </div>
      </div>
      
      <div className="flex items-center">
        <div className="flex items-center border border-kimaya-accent rounded-md mr-6">
          <button
            onClick={() => updateQuantity(product.id, quantity - 1)}
            className="px-3 py-1 text-kimaya-primary hover:bg-kimaya-secondary transition-colors"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-12 text-center border-none focus:outline-none text-kimaya-primary"
            min="0"
          />
          <button
            onClick={() => updateQuantity(product.id, quantity + 1)}
            className="px-3 py-1 text-kimaya-primary hover:bg-kimaya-secondary transition-colors"
          >
            +
          </button>
        </div>
        
        <div className="w-24 text-right mr-4">
          <span className="font-medium text-kimaya-primary">${subtotal.toFixed(2)}</span>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => removeFromCart(product.id)}
          className="text-red-500 hover:text-red-700 hover:bg-red-50"
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
