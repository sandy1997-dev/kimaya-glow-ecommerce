
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const OrderConfirmationPage = () => {
  // In a real app, we'd get the order details from an API
  const orderNumber = `KM-${Math.floor(100000 + Math.random() * 900000)}`;
  
  return (
    <div className="py-12">
      <div className="kimaya-container max-w-3xl">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-cormorant font-semibold text-kimaya-primary mb-4">
            Thank You For Your Order!
          </h1>
          
          <p className="text-kimaya-primary mb-6">
            Your order <span className="font-medium">{orderNumber}</span> has been successfully placed.
            We've sent a confirmation email with your order details.
          </p>
          
          <div className="bg-kimaya-light p-6 rounded-lg mb-8">
            <h2 className="text-xl font-medium text-kimaya-primary mb-4">
              What's Next?
            </h2>
            
            <ul className="text-left space-y-3">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-kimaya-primary">
                  Your order will be processed within 1-2 business days.
                </span>
              </li>
              
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-kimaya-primary">
                  You'll receive a shipping confirmation email with tracking information.
                </span>
              </li>
              
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-kimaya-primary">
                  Delivery typically takes 3-5 business days within the US.
                </span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-kimaya-primary text-white hover:bg-opacity-90">
              <Link to="/products">Continue Shopping</Link>
            </Button>
            <Button variant="outline" className="border-kimaya-primary text-kimaya-primary hover:bg-kimaya-primary hover:text-white">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
