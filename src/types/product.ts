
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  ingredients?: string[];
  benefits?: string[];
  size?: string;
  inStock: boolean;
  featured?: boolean;
  isNew?: boolean;
  rating?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
