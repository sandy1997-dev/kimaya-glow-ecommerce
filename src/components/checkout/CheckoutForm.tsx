
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface CheckoutFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pinCode: string;
    country: string;
    paymentMethod: string;
    gstNumber: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 
  'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 
  'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 
  'Uttarakhand', 'West Bengal', 'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Puducherry'
];

const CheckoutForm = ({ formData, handleChange, handleSubmit }: CheckoutFormProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Delivery Information
        </h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-gray-700 font-medium">
              First Name *
            </Label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border-gray-200 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl"
              placeholder="Enter your first name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-gray-700 font-medium">
              Last Name *
            </Label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border-gray-200 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-medium">
              Email Address *
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-gray-200 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-700 font-medium">
              Mobile Number *
            </Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              className="border-gray-200 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl"
              placeholder="10-digit mobile number"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="address" className="text-gray-700 font-medium">
            Complete Address *
          </Label>
          <Input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="border-gray-200 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl"
            placeholder="House/Flat No., Street, Landmark"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="city" className="text-gray-700 font-medium">
              City *
            </Label>
            <Input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="border-gray-200 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl"
              placeholder="Enter city"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="state" className="text-gray-700 font-medium">
              State *
            </Label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
            >
              <option value="">Select State</option>
              {indianStates.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="pinCode" className="text-gray-700 font-medium">
              PIN Code *
            </Label>
            <Input
              type="text"
              id="pinCode"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              required
              pattern="[0-9]{6}"
              className="border-gray-200 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl"
              placeholder="6-digit PIN"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="gstNumber" className="text-gray-700 font-medium">
            GST Number (Optional for Business)
          </Label>
          <Input
            type="text"
            id="gstNumber"
            name="gstNumber"
            value={formData.gstNumber}
            onChange={handleChange}
            className="border-gray-200 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl"
            placeholder="GST Number (if applicable)"
          />
        </div>
        
        <div className="pt-6">
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-4 rounded-xl text-lg font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
          >
            Continue to Payment
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
