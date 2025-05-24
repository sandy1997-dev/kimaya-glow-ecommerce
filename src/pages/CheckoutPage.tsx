
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import CheckoutOrderSummary from '@/components/checkout/CheckoutOrderSummary';
import PaymentProcessing from '@/components/checkout/PaymentProcessing';

const CheckoutPage = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
    country: 'IN',
    paymentMethod: 'upi',
    gstNumber: ''
  });
  
  const [showPayment, setShowPayment] = useState(false);
  const [orderId, setOrderId] = useState('');
  
  const shippingCost = totalPrice >= 999 ? 0 : 99; // Free shipping above ₹999
  const subtotal = totalPrice;
  
  // Indian GST calculations
  const cgst = subtotal * 0.09; // 9% CGST
  const sgst = subtotal * 0.09; // 9% SGST
  const totalGst = cgst + sgst; // Total 18% GST
  
  const total = subtotal + shippingCost + totalGst;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate Indian order ID format
    const newOrderId = `KIM${Date.now()}${Math.floor(Math.random() * 1000)}`;
    setOrderId(newOrderId);
    setShowPayment(true);
    
    toast({
      title: "Order created successfully!",
      description: "Complete your payment using UPI, Net Banking, or Card.",
    });
  };
  
  const handlePaymentComplete = () => {
    setTimeout(() => {
      clearCart();
      navigate('/order-confirmation');
    }, 1000);
  };
  
  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="py-12 bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen">
      <div className="kimaya-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-cormorant font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Secure Checkout
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {!showPayment ? (
            <>
              <div className="lg:col-span-2">
                <CheckoutForm 
                  formData={formData}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />
              </div>
            </>
          ) : (
            <div className="lg:col-span-2">
              <PaymentProcessing 
                orderId={orderId} 
                amount={total} 
                onComplete={handlePaymentComplete}
              />
            </div>
          )}
          
          <div className="lg:col-span-1">
            <CheckoutOrderSummary
              cartItems={cartItems}
              subtotal={subtotal}
              shippingCost={shippingCost}
              cgst={cgst}
              sgst={sgst}
              totalGst={totalGst}
              total={total}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
