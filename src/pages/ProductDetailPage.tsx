
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { products } from '@/data/products';
import ProductDetail from '@/components/product/ProductDetail';
import ProductCard from '@/components/product/ProductCard';

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === productId);
  
  // Get related products (same category, excluding current product)
  const relatedProducts = product 
    ? products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4) 
    : [];
    
  useEffect(() => {
    if (!product) {
      navigate('/products');
    }
  }, [product, navigate]);
  
  if (!product) {
    return null;
  }

  return (
    <div className="py-12">
      <div className="kimaya-container">
        <div className="mb-12">
          <ProductDetail product={product} />
        </div>
        
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-cormorant font-semibold text-kimaya-primary mb-6">
              You May Also Like
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
