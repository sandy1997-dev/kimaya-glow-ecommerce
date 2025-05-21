
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
    zipCode: '',
    country: 'US',
    paymentMethod: 'credit'
  });
  
  const [showPayment, setShowPayment] = useState(false);
  const [orderId, setOrderId] = useState('');
  
  const shippingCost = 5.99;
  const subtotal = totalPrice;
  const tax = subtotal * 0.07;
  const total = subtotal + shippingCost + tax;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate a sample order ID
    const newOrderId = `KM-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(newOrderId);
    setShowPayment(true);
    
    // In a real implementation, this would send the checkout data to the backend
    toast({
      title: "Order created!",
      description: "Please complete your payment.",
    });
  };
  
  const handlePaymentComplete = () => {
    // Here we would normally process the payment and order
    // For now, we'll just simulate a successful order
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
    <div className="py-12">
      <div className="kimaya-container">
        <h1 className="text-3xl font-cormorant font-semibold text-kimaya-primary mb-8">
          Checkout
        </h1>
        
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
              tax={tax}
              total={total}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
