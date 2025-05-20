
import { useCart } from '@/contexts/CartContext';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, clearCart } = useCart();
  
  return (
    <div className="py-12">
      <div className="kimaya-container">
        <h1 className="text-3xl font-cormorant font-semibold text-kimaya-primary mb-8">
          Your Cart
        </h1>
        
        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-xl text-kimaya-primary mb-4">Your cart is empty</h2>
            <p className="text-kimaya-primary opacity-80 mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Button className="bg-kimaya-primary text-white hover:bg-opacity-90">
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-medium text-kimaya-primary">
                    Items ({cartItems.length})
                  </h2>
                  <Button
                    variant="outline"
                    className="text-red-500 border-red-500 hover:bg-red-50 hover:text-red-600"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
                
                <div className="divide-y divide-kimaya-accent/30">
                  {cartItems.map(item => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
