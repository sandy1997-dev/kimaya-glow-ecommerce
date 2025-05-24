
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CartSummary = () => {
  const { totalPrice, cartItems } = useCart();
  
  const shippingCost = cartItems.length > 0 && totalPrice < 999 ? 99 : 0;
  const subtotal = totalPrice;
  const cgst = subtotal * 0.09; // 9% CGST
  const sgst = subtotal * 0.09; // 9% SGST
  const totalGst = cgst + sgst; // Total 18% GST
  const total = subtotal + shippingCost + totalGst;

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 sticky top-8">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Cart Summary
        </h2>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Shipping {totalPrice >= 999 && <span className="text-green-600 text-xs">(FREE)</span>}</span>
          <span>{shippingCost === 0 ? 'FREE' : `₹${shippingCost.toFixed(2)}`}</span>
        </div>
        
        <div className="bg-blue-50 p-3 rounded-lg space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>CGST (9%)</span>
            <span>₹{cgst.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>SGST (9%)</span>
            <span>₹{sgst.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm font-medium text-blue-700 pt-1 border-t border-blue-200">
            <span>Total GST (18%)</span>
            <span>₹{totalGst.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-3 mt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-800">Total</span>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              ₹{total.toFixed(2)}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">(Inclusive of all taxes)</p>
        </div>
      </div>
      
      <Button
        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white mb-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
        disabled={cartItems.length === 0}
      >
        <Link to="/checkout" className="w-full">
          Proceed to Checkout
        </Link>
      </Button>
      
      <div className="bg-green-50 p-3 rounded-lg mb-4">
        <div className="flex items-center text-green-700">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm font-medium">Free shipping on orders above ₹999</span>
        </div>
      </div>
      
      <Link to="/products" className="block text-center text-purple-600 hover:text-purple-800 font-medium">
        Continue Shopping
      </Link>
    </div>
  );
};

export default CartSummary;
