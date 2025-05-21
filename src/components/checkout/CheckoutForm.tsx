
import React from 'react';
import { Button } from '@/components/ui/button';

interface CheckoutFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    paymentMethod: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const CheckoutForm = ({ formData, handleChange, handleSubmit }: CheckoutFormProps) => {
  return (
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
          <option value="IN">India</option>
        </select>
      </div>
      
      <div className="mt-8">
        <Button type="submit" className="w-full bg-kimaya-primary text-white hover:bg-opacity-90">
          Continue to Payment
        </Button>
      </div>
    </form>
  );
};

export default CheckoutForm;
