
import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: "1",
    name: "Lavender Body Butter",
    description: "Ultra-rich body moisturizer with lavender essential oil to nourish dry skin and promote relaxation.",
    price: 26.99,
    image: "/placeholder.svg",
    category: "body butter",
    ingredients: ["Shea Butter", "Cocoa Butter", "Lavender Essential Oil", "Vitamin E"],
    benefits: ["Deep moisturizing", "Calming aromatherapy", "Long-lasting hydration"],
    size: "200g",
    inStock: true,
    featured: true,
    rating: 4.7
  },
  {
    id: "2",
    name: "Coffee Bean Exfoliating Scrub",
    description: "Energizing body scrub with ground coffee beans and coconut oil to remove dead skin cells and reveal smooth, glowing skin.",
    price: 22.99,
    image: "/placeholder.svg",
    category: "scrub",
    ingredients: ["Ground Coffee Beans", "Coconut Oil", "Brown Sugar", "Jojoba Oil"],
    benefits: ["Removes dead skin", "Improves circulation", "Reveals smoother skin"],
    size: "150g",
    inStock: true,
    isNew: true,
    rating: 4.6
  },
  {
    id: "3",
    name: "Gentle Oatmeal Soap",
    description: "Handcrafted natural soap with colloidal oatmeal and goat milk for sensitive skin. Free from harsh chemicals and artificial fragrances.",
    price: 12.99,
    image: "/placeholder.svg",
    category: "soap",
    ingredients: ["Saponified Oils", "Colloidal Oatmeal", "Goat Milk", "Honey"],
    benefits: ["Gentle cleansing", "Suitable for sensitive skin", "Natural ingredients"],
    size: "100g",
    inStock: true,
    isNew: true,
    rating: 4.8
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "body butter", name: "Body Butter" },
  { id: "scrub", name: "Scrubs" },
  { id: "soap", name: "Soaps" }
];
