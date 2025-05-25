
import HeroSection from '@/components/home/HeroSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import FeaturedProductsSection from '@/components/home/FeaturedProductsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import NewArrivalsSection from '@/components/home/NewArrivalsSection';
import NewsletterSection from '@/components/home/NewsletterSection';

const HomePage = () => {
  return (
    <div className="relative">
      <HeroSection />
      <BenefitsSection />
      <FeaturedProductsSection />
      <TestimonialsSection />
      <NewArrivalsSection />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
