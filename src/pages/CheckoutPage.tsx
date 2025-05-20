
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

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
    // Here we would normally process the payment and order
    // For now, we'll just simulate a successful order
    setTimeout(() => {
      clearCart();
      navigate('/order-confirmation');
    }, 1500);
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
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-medium text-kimaya-primary mb-6">
                Shipping Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-kimaya-primary mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-kimaya-accent/50 rounded-md focus:outline-none focus:ring-1 focus:ring-kimaya-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-kimaya-primary mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-kimaya-accent/50 rounded-md focus:outline-none focus:ring-1 focus:ring-kimaya-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-kimaya-primary mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-kimaya-accent/50 rounded-md focus:outline-none focus:ring-1 focus:ring-kimaya-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-kimaya-primary mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-kimaya-accent/50 rounded-md focus:outline-none focus:ring-1 focus:ring-kimaya-primary"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="address" className="block text-kimaya-primary mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-kimaya-accent/50 rounded-md focus:outline-none focus:ring-1 focus:ring-kimaya-primary"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label htmlFor="city" className="block text-kimaya-primary mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-kimaya-accent/50 rounded-md focus:outline-none focus:ring-1 focus:ring-kimaya-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="state" className="block text-kimaya-primary mb-1">
                    State/Province
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-kimaya-accent/50 rounded-md focus:outline-none focus:ring-1 focus:ring-kimaya-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="zipCode" className="block text-kimaya-primary mb-1">
                    ZIP/Postal Code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-kimaya-accent/50 rounded-md focus:outline-none focus:ring-1 focus:ring-kimaya-primary"
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label htmlFor="country" className="block text-kimaya-primary mb-1">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-kimaya-accent/50 rounded-md focus:outline-none focus:ring-1 focus:ring-kimaya-primary"
                >
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AU">Australia</option>
                </select>
              </div>
              
              <h2 className="text-xl font-medium text-kimaya-primary mb-6">
                Payment Information
              </h2>
              
              <div className="mb-6">
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit"
                      checked={formData.paymentMethod === 'credit'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-kimaya-primary">Credit Card</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-kimaya-primary">PayPal</span>
                  </label>
                </div>
              </div>
              
              {formData.paymentMethod === 'credit' && (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="cardNumber" className="block text-kimaya-primary mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-2 border border-kimaya-accent/50 rounded-md focus:outline-none focus:ring-1 focus:ring-kimaya-primary"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="expiry" className="block text-kimaya-primary mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        id="expiry"
                        placeholder="MM/YY"
                        className="w-full px-4 py-2 border border-kimaya-accent/50 rounded-md focus:outline-none focus:ring-1 focus:ring-kimaya-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="cvv" className="block text-kimaya-primary mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        placeholder="123"
                        className="w-full px-4 py-2 border border-kimaya-accent/50 rounded-md focus:outline-none focus:ring-1 focus:ring-kimaya-primary"
                      />
                    </div>
                  </div>
                </div>
              )}
              
              <div className="mt-8">
                <Button type="submit" className="w-full bg-kimaya-primary text-white hover:bg-opacity-90">
                  Complete Order
                </Button>
              </div>
            </form>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-medium text-kimaya-primary mb-6">
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map(item => (
                  <div key={item.product.id} className="flex justify-between">
                    <div className="flex">
                      <div className="w-16 h-16 mr-3">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div>
                        <h4 className="text-kimaya-primary">{item.product.name}</h4>
                        <p className="text-sm text-kimaya-primary opacity-80">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <span className="text-kimaya-primary">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-kimaya-accent/30 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-kimaya-primary">Subtotal</span>
                  <span className="text-kimaya-primary">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-kimaya-primary">Shipping</span>
                  <span className="text-kimaya-primary">${shippingCost.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-kimaya-primary">Tax (7%)</span>
                  <span className="text-kimaya-primary">${tax.toFixed(2)}</span>
                </div>
                
                <div className="border-t border-kimaya-accent/30 pt-2 mt-2 flex justify-between">
                  <span className="font-medium text-kimaya-primary">Total</span>
                  <span className="font-medium text-kimaya-primary">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
