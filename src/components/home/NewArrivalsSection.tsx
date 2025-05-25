
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const NewArrivalsSection = () => {
  const newArrivals = products.filter(product => product.isNew);

  return (
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
  );
};

export default NewArrivalsSection;
