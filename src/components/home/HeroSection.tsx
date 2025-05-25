
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
