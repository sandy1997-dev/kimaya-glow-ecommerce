
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const HomePage = () => {
  const featuredProducts = products.filter(product => product.featured);
  const newArrivals = products.filter(product => product.isNew);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-kimaya-secondary py-20">
        <div className="kimaya-container">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-semibold text-kimaya-primary mb-4">
                Natural Skincare <br />for Radiant Skin
              </h1>
              <p className="text-kimaya-primary text-lg mb-6">
                Experience the transformative power of nature with our handcrafted skincare products made from ethically sourced botanical ingredients.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-kimaya-primary text-white hover:bg-opacity-90">
                  <Link to="/products">Shop Now</Link>
                </Button>
                <Button variant="outline" className="border-kimaya-primary text-kimaya-primary hover:bg-kimaya-primary hover:text-white">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-96 bg-kimaya-accent rounded-lg flex items-center justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Kimaya Skincare Products" 
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="kimaya-container">
          <h2 className="text-3xl font-cormorant font-semibold text-kimaya-primary text-center mb-12">
            Why Choose Kimaya?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-kimaya-light rounded-lg">
              <div className="bg-kimaya-secondary w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-kimaya-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-cormorant font-semibold text-kimaya-primary mb-2">
                100% Natural
              </h3>
              <p className="text-kimaya-primary">
                We use only pure, natural ingredients sourced responsibly from trusted partners.
              </p>
            </div>
            
            <div className="text-center p-6 bg-kimaya-light rounded-lg">
              <div className="bg-kimaya-secondary w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-kimaya-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-cormorant font-semibold text-kimaya-primary mb-2">
                Cruelty-Free
              </h3>
              <p className="text-kimaya-primary">
                We never test on animals and ensure our suppliers follow the same ethical standards.
              </p>
            </div>
            
            <div className="text-center p-6 bg-kimaya-light rounded-lg">
              <div className="bg-kimaya-secondary w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-kimaya-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-cormorant font-semibold text-kimaya-primary mb-2">
                Eco-Friendly
              </h3>
              <p className="text-kimaya-primary">
                Our packaging is sustainable and recyclable to minimize environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-16 bg-kimaya-light">
        <div className="kimaya-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-cormorant font-semibold text-kimaya-primary">
              Featured Products
            </h2>
            
            <Link 
              to="/products" 
              className="text-kimaya-primary border-b-2 border-kimaya-primary hover:opacity-80 transition-opacity"
            >
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-kimaya-secondary">
        <div className="kimaya-container">
          <h2 className="text-3xl font-cormorant font-semibold text-kimaya-primary text-center mb-12">
            What Our Customers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-5 h-5 text-yellow-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-kimaya-primary mb-4 text-center italic">
                "I've struggled with sensitive skin for years. Kimaya's products are the only ones that have never caused irritation. The Rose Petal Cleanser is now my holy grail!"
              </p>
              <p className="text-center font-medium text-kimaya-primary">- Emily R.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-5 h-5 text-yellow-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-kimaya-primary mb-4 text-center italic">
                "The Hibiscus Antioxidant Serum has completely transformed my complexion. My skin is brighter and more even-toned than it's been in years."
              </p>
              <p className="text-center font-medium text-kimaya-primary">- Michael T.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-5 h-5 text-yellow-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-kimaya-primary mb-4 text-center italic">
                "I love that these products are all-natural and still so effective. The Honey Oat Face Mask leaves my skin feeling incredibly soft and nourished."
              </p>
              <p className="text-center font-medium text-kimaya-primary">- Sarah L.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* New Arrivals Section */}
      <section className="py-16 bg-white">
        <div className="kimaya-container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-cormorant font-semibold text-kimaya-primary">
              New Arrivals
            </h2>
            
            <Link 
              to="/products" 
              className="text-kimaya-primary border-b-2 border-kimaya-primary hover:opacity-80 transition-opacity"
            >
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-kimaya-primary text-white">
        <div className="kimaya-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-cormorant font-semibold mb-4">
              Join Our Newsletter
            </h2>
            <p className="mb-6 opacity-90">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-kimaya-primary focus:outline-none"
              />
              <Button className="bg-kimaya-secondary text-kimaya-primary hover:bg-opacity-90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
