
import { useState } from 'react';
import { Product } from '@/types/product';
import ProductCard from './ProductCard';
import { categories } from '@/data/products';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  
  // Filter products by category
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        // Default to featured first
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
    }
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                selectedCategory === category.id
                  ? 'bg-kimaya-primary text-white'
                  : 'bg-kimaya-secondary text-kimaya-primary hover:bg-kimaya-accent hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="flex items-center">
          <label htmlFor="sort" className="mr-2 text-kimaya-primary">Sort by:</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white border border-kimaya-accent rounded-md px-2 py-1 text-kimaya-primary"
          >
            <option value="default">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
      
      {sortedProducts.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-kimaya-primary text-lg">No products found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
