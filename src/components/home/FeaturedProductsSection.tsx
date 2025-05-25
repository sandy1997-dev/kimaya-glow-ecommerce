
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const FeaturedProductsSection = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <section className="py-20">
      <div className="kimaya-container">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-cormorant font-bold text-kimaya-primary">
              Featured Products
            </h2>
            <div className="w-24 h-1 bg-kimaya-primary rounded-full mt-2" />
          </div>
          
          <Link 
            to="/products" 
            className="text-kimaya-primary border-b-2 border-kimaya-primary link-hover"
          >
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
