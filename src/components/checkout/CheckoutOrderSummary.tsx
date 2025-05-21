
import React from 'react';
import { CartItem } from '@/types/product';

interface CheckoutOrderSummaryProps {
  cartItems: CartItem[];
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
}

const CheckoutOrderSummary = ({ 
  cartItems, 
  subtotal, 
  shippingCost, 
  tax, 
  total 
}: CheckoutOrderSummaryProps) => {
  return (
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
  );
};

export default CheckoutOrderSummary;
