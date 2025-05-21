
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

// Mock wishlist data - in a real app this would come from a database
const mockWishlistItems = [
  {
    id: "1",
    name: "Traditional Silk Saree",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1610189310444-04df119d0fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Handcrafted silk saree with intricate traditional design"
  },
  {
    id: "2",
    name: "Embroidered Kurta",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1611043714658-af3e56bc5299?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Beautiful embroidered kurta with traditional patterns"
  }
];

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState(mockWishlistItems);
  const { addToCart } = useCart();
  
  const handleRemoveFromWishlist = (id: string) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
    toast.success("Item removed from wishlist");
  };
  
  const handleMoveToCart = (item: typeof mockWishlistItems[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      description: item.description
    }, 1); // Adding the second argument (quantity) which was missing
    handleRemoveFromWishlist(item.id);
    toast.success("Item moved to cart");
  };
  
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-cormorant text-kimaya-primary">My Wishlist</h1>
        <div className="flex items-center gap-2">
          <Heart size={20} className="text-kimaya-primary" />
          <span>{wishlistItems.length} items</span>
        </div>
      </div>
      
      {wishlistItems.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {wishlistItems.map(item => (
            <div key={item.id} className="border rounded-lg overflow-hidden bg-white shadow-sm">
              <div className="relative h-64">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => handleRemoveFromWishlist(item.id)}
                  className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-50"
                >
                  <Heart size={16} className="text-red-500 fill-red-500" />
                </button>
              </div>
              <div className="p-4">
                <Link to={`/products/${item.id}`} className="block mb-2">
                  <h3 className="text-lg font-medium text-kimaya-primary hover:underline">{item.name}</h3>
                </Link>
                <p className="text-kimaya-primary font-medium mb-4">${item.price.toFixed(2)}</p>
                
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleMoveToCart(item)}
                    className="flex-1"
                  >
                    Move to Cart
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleRemoveFromWishlist(item.id)}
                    className="flex-1"
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-kimaya-secondary flex items-center justify-center">
            <Heart size={28} className="text-kimaya-primary" />
          </div>
          <h2 className="text-xl mb-2">Your wishlist is empty</h2>
          <p className="text-muted-foreground mb-6">Find items you love and add them to your wishlist</p>
          <Button asChild>
            <Link to="/products">Browse Products</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
