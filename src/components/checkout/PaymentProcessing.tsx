
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface PaymentProcessingProps {
  orderId: string;
  amount: number;
  onComplete: () => void;
}

const PaymentProcessing = ({ orderId, amount, onComplete }: PaymentProcessingProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleProcessPayment = () => {
    setIsProcessing(true);
    
    // This would be replaced with actual Razorpay integration code
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Payment successful",
        description: `Order #${orderId} has been processed successfully.`,
      });
      onComplete();
    }, 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-medium text-kimaya-primary mb-4">Complete Your Payment</h2>
      
      <div className="border border-kimaya-accent/30 rounded-md p-4 mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-kimaya-primary">Order ID</span>
          <span className="text-kimaya-primary font-medium">{orderId}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-kimaya-primary">Amount</span>
          <span className="text-kimaya-primary font-medium">${amount.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="grid gap-4 mb-6">
        <div>
          <h3 className="text-kimaya-primary mb-2">Payment Methods (Demo)</h3>
          <div className="flex space-x-3 mb-4">
            <div className="border border-kimaya-accent/50 rounded p-3 flex-1 text-center cursor-pointer hover:border-kimaya-primary">
              Credit Card
            </div>
            <div className="border border-kimaya-accent/50 rounded p-3 flex-1 text-center cursor-pointer hover:border-kimaya-primary">
              UPI
            </div>
            <div className="border border-kimaya-accent/50 rounded p-3 flex-1 text-center cursor-pointer hover:border-kimaya-primary">
              NetBanking
            </div>
          </div>
        </div>
      
        <Button 
          onClick={handleProcessPayment} 
          disabled={isProcessing}
          className="w-full bg-kimaya-primary text-white hover:bg-opacity-90"
        >
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Pay Now"
          )}
        </Button>
      </div>
      
      <div className="text-center text-sm text-kimaya-primary opacity-70">
        <p>This is a prototype payment screen. In a real implementation, we would integrate with Razorpay payment gateway.</p>
      </div>
    </div>
  );
};

export default PaymentProcessing;
