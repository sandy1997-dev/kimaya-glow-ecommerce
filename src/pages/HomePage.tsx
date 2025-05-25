
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const HomePage = () => {
  const featuredProducts = products.filter(product => product.featured);
  const newArrivals = products.filter(product => product.isNew);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Nature Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="floating-leaves"></div>
          <div className="nature-particles"></div>
          <div className="organic-shapes"></div>
        </div>
        
        <div className="kimaya-container relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="terminal-text text-xs mb-4 animate-fade-in nature-terminal">
                {`> Initializing Kimaya Natural Skincare Protocol...`}
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-cormorant font-bold text-kimaya-primary mb-6 nature-text animate-fade-in">
                Natural Skincare <br />
                <span className="bg-gradient-to-r from-kimaya-primary via-green-600 to-kimaya-accent bg-clip-text text-transparent organic-glow">
                  for Radiant Skin
                </span>
              </h1>
              
              <p className="text-kimaya-primary text-xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                Experience the transformative power of nature with our handcrafted skincare products made from ethically sourced botanical ingredients.
              </p>
              
              <div className="flex space-x-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Button className="nature-btn text-lg px-8 py-4">
                  <Link to="/products">Shop Now</Link>
                </Button>
                <Button variant="outline" className="border-2 border-kimaya-primary text-kimaya-primary hover:bg-kimaya-primary hover:text-white text-lg px-8 py-4 nature-btn-outline">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
              
              {/* Nature-themed Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-in" style={{ animationDelay: '0.9s' }}>
                <div className="text-center nature-card p-4 rounded-lg">
                  <div className="text-2xl font-bold text-kimaya-primary font-orbitron organic-glow">100%</div>
                  <div className="text-sm text-kimaya-accent">Natural</div>
                </div>
                <div className="text-center nature-card p-4 rounded-lg">
                  <div className="text-2xl font-bold text-kimaya-primary font-orbitron organic-glow">1000+</div>
                  <div className="text-sm text-kimaya-accent">Happy Customers</div>
                </div>
                <div className="text-center nature-card p-4 rounded-lg">
                  <div className="text-2xl font-bold text-kimaya-primary font-orbitron organic-glow">0</div>
                  <div className="text-sm text-kimaya-accent">Animal Testing</div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="relative h-96 md:h-[500px] nature-glass rounded-3xl flex items-center justify-center overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=600&fit=crop" 
                  alt="Kimaya Skincare Products" 
                  className="h-full w-full object-cover rounded-3xl transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Nature Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-emerald-400/10 rounded-3xl" />
                <div className="absolute inset-0 nature-shimmer rounded-3xl" />
                
                {/* Organic Scanning Lines */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent animate-pulse" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
                
                {/* Nature Corner Accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-green-500 leaf-border" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-green-500 leaf-border" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-emerald-400 leaf-border" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-emerald-400 leaf-border" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 nature-bg opacity-30"></div>
        <div className="kimaya-container relative z-10">
          <h2 className="text-4xl font-cormorant font-bold text-kimaya-primary text-center mb-4 nature-text">
            Why Choose Kimaya?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 via-kimaya-primary to-emerald-400 mx-auto rounded-full mb-16" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "100% Natural",
                description: "We use only pure, natural ingredients sourced responsibly from trusted partners.",
                icon: "🌿"
              },
              {
                title: "Cruelty-Free",
                description: "We never test on animals and ensure our suppliers follow the same ethical standards.",
                icon: "🦋"
              },
              {
                title: "Eco-Friendly",
                description: "Our packaging is sustainable and recyclable to minimize environmental impact.",
                icon: "🌍"
              }
            ].map((benefit, index) => (
              <div key={benefit.title} className="text-center p-8 nature-card rounded-2xl floating-element" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="nature-icon-container w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 text-3xl">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-cormorant font-bold text-kimaya-primary mb-4 nature-text">
                  {benefit.title}
                </h3>
                <p className="text-kimaya-primary opacity-80">
                  {benefit.description}
                </p>
                
                {/* Nature progress indicator */}
                <div className="nature-progress-bar mt-6" />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 forest-pattern opacity-10"></div>
        <div className="kimaya-container relative z-10">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-cormorant font-bold text-kimaya-primary nature-text">
                Featured Products
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 via-kimaya-primary to-emerald-400 rounded-full mt-2" />
            </div>
            
            <Link 
              to="/products" 
              className="text-kimaya-primary border-b-2 border-kimaya-primary hover:opacity-80 transition-opacity font-orbitron tracking-wider nature-link"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} style={{ animationDelay: `${index * 0.2}s` }} className="nature-product-wrapper">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 organic-waves opacity-20"></div>
        <div className="kimaya-container relative z-10">
          <h2 className="text-4xl font-cormorant font-bold text-kimaya-primary text-center mb-4 nature-text">
            What Our Customers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="nature-testimonial-card p-6 rounded-lg">
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
            
            <div className="nature-testimonial-card p-6 rounded-lg">
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
            
            <div className="nature-testimonial-card p-6 rounded-lg">
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
      <section className="py-20 relative">
        <div className="absolute inset-0 botanical-pattern opacity-15"></div>
        <div className="kimaya-container relative z-10">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-cormorant font-bold text-kimaya-primary nature-text">
                New Arrivals
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 via-kimaya-primary to-emerald-400 rounded-full mt-2" />
            </div>
            
            <Link 
              to="/products" 
              className="text-kimaya-primary border-b-2 border-kimaya-primary hover:opacity-80 transition-opacity font-orbitron tracking-wider nature-link"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newArrivals.map(product => (
              <div key={product.id} className="nature-product-wrapper">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
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
    </div>
  );
};

export default HomePage;
