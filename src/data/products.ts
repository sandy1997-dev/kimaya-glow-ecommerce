
import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: "1",
    name: "Rose Petal Facial Cleanser",
    description: "A gentle, hydrating cleanser infused with organic rose petals and aloe vera to soothe and purify your skin without stripping its natural oils.",
    price: 24.99,
    image: "/placeholder.svg",
    category: "cleanser",
    ingredients: ["Organic Rose Water", "Aloe Vera", "Glycerin", "Chamomile Extract"],
    benefits: ["Removes impurities", "Hydrates", "Soothes sensitive skin"],
    size: "120ml",
    inStock: true,
    featured: true,
    rating: 4.8
  },
  {
    id: "2",
    name: "Cucumber Mint Toner",
    description: "Refresh and balance your skin with this alcohol-free toner featuring cucumber extract and peppermint essential oil.",
    price: 19.99,
    image: "/placeholder.svg",
    category: "toner",
    ingredients: ["Cucumber Extract", "Peppermint Oil", "Witch Hazel", "Hyaluronic Acid"],
    benefits: ["Balances pH", "Tightens pores", "Prepares skin for moisturizer"],
    size: "200ml",
    inStock: true,
    rating: 4.5
  },
  {
    id: "3",
    name: "Honey Oat Face Mask",
    description: "A nourishing weekly treatment that combines raw honey and colloidal oatmeal to exfoliate and moisturize all skin types.",
    price: 28.99,
    image: "/placeholder.svg",
    category: "mask",
    ingredients: ["Raw Honey", "Colloidal Oatmeal", "Shea Butter", "Vitamin E"],
    benefits: ["Gentle exfoliation", "Deep hydration", "Soothes irritation"],
    size: "100g",
    inStock: true,
    featured: true,
    rating: 4.9
  },
  {
    id: "4",
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
    id: "5",
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
    id: "6",
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
  { id: "cleanser", name: "Cleansers" },
  { id: "toner", name: "Toners" },
  { id: "moisturizer", name: "Moisturizers" },
  { id: "serum", name: "Serums" },
  { id: "mask", name: "Face Masks" },
  { id: "treatment", name: "Treatments" },
  { id: "body butter", name: "Body Butter" },
  { id: "scrub", name: "Scrubs" },
  { id: "soap", name: "Soaps" },
  { id: "lip care", name: "Lip Care" }
];
