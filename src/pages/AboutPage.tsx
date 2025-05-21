
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="py-12">
      <div className="kimaya-container">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-cormorant font-semibold text-kimaya-primary mb-4 text-center">
            About Kimaya
          </h1>
          <p className="text-kimaya-primary max-w-3xl mx-auto text-center text-lg">
            We create natural skincare products that nurture your skin and respect our planet.
          </p>
        </div>
        
        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-cormorant font-semibold text-kimaya-primary mb-4">
              Our Story
            </h2>
            <p className="text-kimaya-primary mb-4">
              Kimaya was born from a simple belief: skincare should be natural, effective, and kind to our planet. Our founder, Maya, struggled for years with sensitive skin and couldn't find products that were both gentle and effective.
            </p>
            <p className="text-kimaya-primary mb-4">
              After studying herbalism and natural cosmetic formulation, Maya began creating her own remedies using plant-based ingredients from her garden. Friends and family were amazed by the results, and in 2018, Kimaya was officially launched.
            </p>
            <p className="text-kimaya-primary">
              Today, we remain committed to creating products that harness the power of nature's finest ingredients, formulated with care and respect for your skin and our environment.
            </p>
          </div>
          
          <div className="bg-kimaya-secondary p-6 rounded-lg h-80">
            <img 
              src="/placeholder.svg" 
              alt="Kimaya founder in garden" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        
        {/* Values Section */}
        <div className="bg-kimaya-light p-12 rounded-lg mb-16">
          <h2 className="text-3xl font-cormorant font-semibold text-kimaya-primary mb-8 text-center">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="bg-kimaya-secondary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-kimaya-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-cormorant font-semibold text-kimaya-primary mb-2">
                Natural Ingredients
              </h3>
              
              <p className="text-kimaya-primary">
                We use only the finest natural and organic ingredients, ethically sourced from trusted partners around the world.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <div className="bg-kimaya-secondary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-kimaya-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              
              <h3 className="text-xl font-cormorant font-semibold text-kimaya-primary mb-2">
                Ethical Practices
              </h3>
              
              <p className="text-kimaya-primary">
                We believe in fair trade, sustainable practices, and never testing on animals. Every product is cruelty-free and vegan.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <div className="bg-kimaya-secondary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-kimaya-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              
              <h3 className="text-xl font-cormorant font-semibold text-kimaya-primary mb-2">
                Environmental Responsibility
              </h3>
              
              <p className="text-kimaya-primary">
                Our packaging is made from recycled or biodegradable materials, and we continuously work to reduce our carbon footprint.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-cormorant font-semibold text-kimaya-primary mb-8 text-center">
            Meet Our Team
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Maya Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-cormorant font-semibold text-kimaya-primary mb-1">
                Maya Chen
              </h3>
              <p className="text-kimaya-primary opacity-80 mb-2">Founder & Formulator</p>
              <p className="text-kimaya-primary text-sm">
                Herbalist with over 10 years of experience in natural skincare.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="David Waters" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-cormorant font-semibold text-kimaya-primary mb-1">
                David Waters
              </h3>
              <p className="text-kimaya-primary opacity-80 mb-2">Operations Manager</p>
              <p className="text-kimaya-primary text-sm">
                Ensures sustainable practices across all our operations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-cormorant font-semibold text-kimaya-primary mb-1">
                Sarah Johnson
              </h3>
              <p className="text-kimaya-primary opacity-80 mb-2">Product Development</p>
              <p className="text-kimaya-primary text-sm">
                Cosmetic scientist specializing in natural formulations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="James Miller" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-cormorant font-semibold text-kimaya-primary mb-1">
                James Miller
              </h3>
              <p className="text-kimaya-primary opacity-80 mb-2">Customer Experience</p>
              <p className="text-kimaya-primary text-sm">
                Dedicated to ensuring your satisfaction with every purchase.
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-kimaya-primary text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-cormorant font-semibold mb-4">
            Experience the Kimaya Difference
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Join us in our mission for healthier skin and a healthier planet. Our natural products are formulated with care to bring out your skin's natural radiance.
          </p>
          <Button className="bg-kimaya-secondary text-kimaya-primary hover:bg-opacity-90">
            <Link to="/products">Shop Our Products</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
