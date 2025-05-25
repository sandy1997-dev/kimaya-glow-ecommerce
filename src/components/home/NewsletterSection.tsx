
import { Button } from '@/components/ui/button';

const NewsletterSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-kimaya-primary to-emerald-600 opacity-90" />
      <div className="absolute inset-0 nature-overlay"></div>
      <div className="kimaya-container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-cormorant font-bold mb-6 text-white nature-text">
            Join Our Newsletter
          </h2>
          <p className="mb-8 opacity-90 text-white text-lg">
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-kimaya-primary focus:outline-none nature-glass border border-white/30"
            />
            <Button className="nature-btn px-8 py-4">
              Subscribe
            </Button>
          </form>
          
          {/* Nature data visualization */}
          <div className="mt-8 text-center nature-terminal text-sm">
            {`> Newsletter subscribers: 2,847 and counting...`}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
