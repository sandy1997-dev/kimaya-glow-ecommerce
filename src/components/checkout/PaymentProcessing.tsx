
import { useState } from 'react';
import { Loader2, CreditCard, Smartphone, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface PaymentProcessingProps {
  orderId: string;
  amount: number;
  onComplete: () => void;
}

const PaymentProcessing = ({ orderId, amount, onComplete }: PaymentProcessingProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState('upi');
  const { toast } = useToast();

  const handleProcessPayment = () => {
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Payment Successful! 🎉",
        description: `Order #${orderId} confirmed. You'll receive a confirmation SMS shortly.`,
      });
      onComplete();
    }, 2000);
  };

  const paymentMethods = [
    {
      id: 'upi',
      name: 'UPI',
      description: 'Google Pay, PhonePe, Paytm, etc.',
      icon: Smartphone,
      popular: true
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      description: 'Visa, Mastercard, RuPay',
      icon: CreditCard,
      popular: false
    },
    {
      id: 'netbanking',
      name: 'Net Banking',
      description: 'All major banks supported',
      icon: Building2,
      popular: false
    }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Secure Payment
          </h2>
          <p className="text-gray-600 text-sm">256-bit SSL encrypted</p>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4 mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-gray-700 font-medium">Order ID</span>
          <span className="text-gray-800 font-semibold">{orderId}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700 font-medium">Amount to Pay</span>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            ₹{amount.toFixed(2)}
          </span>
        </div>
      </div>
      
      <div className="space-y-4 mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose Payment Method</h3>
        {paymentMethods.map((method) => {
          const IconComponent = method.icon;
          return (
            <div
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                selectedMethod === method.id
                  ? 'border-purple-500 bg-purple-50 shadow-md'
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
              }`}
            >
              {method.popular && (
                <div className="absolute -top-2 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${
                  selectedMethod === method.id 
                    ? 'bg-purple-500 text-white' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  <IconComponent size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">{method.name}</h4>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
                <div className={`w-4 h-4 rounded-full border-2 ${
                  selectedMethod === method.id
                    ? 'border-purple-500 bg-purple-500'
                    : 'border-gray-300'
                }`}>
                  {selectedMethod === method.id && (
                    <div className="w-full h-full rounded-full bg-white scale-50"></div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <Button 
        onClick={handleProcessPayment} 
        disabled={isProcessing}
        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 rounded-xl text-lg font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
      >
        {isProcessing ? (
          <>
            <Loader2 className="mr-3 h-5 w-5 animate-spin" />
            Processing Payment...
          </>
        ) : (
          <>
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Pay ₹{amount.toFixed(2)} Securely
          </>
        )}
      </Button>
      
      <div className="mt-6 flex items-center justify-center text-center">
        <div className="flex items-center space-x-4 text-xs text-gray-500">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            SSL Secured
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            RBI Guidelines
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            100% Safe
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentProcessing;
