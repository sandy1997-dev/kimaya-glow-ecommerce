
import { useState } from 'react';
import ProductGrid from '@/components/product/ProductGrid';
import { products, categories } from '@/data/products';
import { Button } from '@/components/ui/button';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="py-12">
      <div className="kimaya-container">
        <div className="mb-8">
          <h1 className="text-4xl font-cormorant font-semibold text-kimaya-primary mb-2">
            Our Products
          </h1>
          <p className="text-kimaya-primary opacity-80 mb-6">
            Discover our collection of natural skincare products made with carefully selected ingredients.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id 
                  ? "bg-kimaya-primary text-white" 
                  : "border-kimaya-primary text-kimaya-primary hover:bg-kimaya-primary hover:text-white"}
              >
                {category.name}
              </Button>
            ))}
          </div>
          
          {/* Featured Banner (only show on "all" filter) */}
          {selectedCategory === "all" && (
            <div className="bg-kimaya-secondary p-6 rounded-lg mb-8 flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-1/3 aspect-square bg-white rounded-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Featured product" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <span className="text-sm text-kimaya-accent font-medium">FEATURED COLLECTION</span>
                <h2 className="text-2xl font-cormorant font-semibold text-kimaya-primary mt-2 mb-3">
                  Summer Essentials
                </h2>
                <p className="text-kimaya-primary mb-4">
                  Our lightweight, hydrating products perfect for the summer season. 
                  Protect and nourish your skin with our natural formulations.
                </p>
                <Button className="bg-kimaya-primary text-white hover:bg-opacity-90">
                  Explore Collection
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-12">
            <p className="text-kimaya-primary text-lg">No products found in this category.</p>
            <Button 
              variant="outline"
              className="mt-4 border-kimaya-primary text-kimaya-primary hover:bg-kimaya-primary hover:text-white"
              onClick={() => setSelectedCategory("all")}
            >
              View All Products
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
