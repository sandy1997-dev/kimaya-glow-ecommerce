
import { Button } from '@/components/ui/button';

const NewsletterSection = () => {
  return (
    <section className="py-20 bg-kimaya-primary text-white">
      <div className="kimaya-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-cormorant font-bold mb-6">
            Join Our Newsletter
          </h2>
          <p className="mb-8 opacity-90 text-lg">
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-kimaya-primary focus:outline-none"
            />
            <Button className="bg-white text-kimaya-primary hover:bg-white/90 button-hover px-8 py-4">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
