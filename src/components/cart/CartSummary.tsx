
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CartSummary = () => {
  const { totalPrice, cartItems } = useCart();
  
  const shippingCost = cartItems.length > 0 ? 5.99 : 0;
  const subtotal = totalPrice;
  const total = subtotal + shippingCost;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-cormorant font-semibold text-kimaya-primary mb-6">Order Summary</h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="text-kimaya-primary">Subtotal</span>
          <span className="text-kimaya-primary">${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-kimaya-primary">Shipping</span>
          <span className="text-kimaya-primary">${shippingCost.toFixed(2)}</span>
        </div>
        
        <div className="border-t border-kimaya-accent/30 pt-4 flex justify-between">
          <span className="font-medium text-kimaya-primary">Total</span>
          <span className="font-medium text-kimaya-primary">${total.toFixed(2)}</span>
        </div>
      </div>
      
      <Button
        className="w-full bg-kimaya-primary text-white hover:bg-opacity-90 mb-4"
        disabled={cartItems.length === 0}
      >
        <Link to="/checkout" className="w-full">
          Proceed to Checkout
        </Link>
      </Button>
      
      <Link to="/products" className="block text-center text-kimaya-primary hover:text-opacity-80">
        Continue Shopping
      </Link>
    </div>
  );
};

export default CartSummary;
