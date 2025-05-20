
import ProductGrid from '@/components/product/ProductGrid';
import { products } from '@/data/products';

const ProductsPage = () => {
  return (
    <div className="py-12">
      <div className="kimaya-container">
        <div className="mb-8">
          <h1 className="text-4xl font-cormorant font-semibold text-kimaya-primary mb-2">
            Our Products
          </h1>
          <p className="text-kimaya-primary opacity-80">
            Discover our collection of natural skincare products made with carefully selected ingredients.
          </p>
        </div>
        
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default ProductsPage;
