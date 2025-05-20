
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
    name: "Avocado Night Cream",
    description: "Rich, overnight moisturizer packed with avocado oil and shea butter to repair and rejuvenate your skin while you sleep.",
    price: 32.99,
    image: "/placeholder.svg",
    category: "moisturizer",
    ingredients: ["Avocado Oil", "Shea Butter", "Jojoba Oil", "Rosehip Seed Oil"],
    benefits: ["Deep moisturizing", "Anti-aging properties", "Skin repair"],
    size: "50ml",
    inStock: true,
    isNew: true,
    rating: 4.7
  },
  {
    id: "5",
    name: "Tea Tree Blemish Treatment",
    description: "A targeted spot treatment with tea tree oil and witch hazel to reduce blemishes and prevent future breakouts.",
    price: 16.99,
    image: "/placeholder.svg",
    category: "treatment",
    ingredients: ["Tea Tree Oil", "Witch Hazel", "Salicylic Acid", "Aloe Vera"],
    benefits: ["Reduces inflammation", "Fights bacteria", "Clears pores"],
    size: "15ml",
    inStock: true,
    rating: 4.4
  },
  {
    id: "6",
    name: "Hibiscus Antioxidant Serum",
    description: "Brighten and protect your skin with this powerful antioxidant serum containing hibiscus extract and vitamin C.",
    price: 39.99,
    image: "/placeholder.svg",
    category: "serum",
    ingredients: ["Hibiscus Extract", "Vitamin C", "Ferulic Acid", "Green Tea Extract"],
    benefits: ["Brightens complexion", "Fights free radicals", "Evens skin tone"],
    size: "30ml",
    inStock: true,
    isNew: true,
    featured: true,
    rating: 4.9
  },
  {
    id: "7",
    name: "Lavender Body Butter",
    description: "Ultra-rich body moisturizer with lavender essential oil to nourish dry skin and promote relaxation.",
    price: 26.99,
    image: "/placeholder.svg",
    category: "body",
    ingredients: ["Cocoa Butter", "Lavender Oil", "Coconut Oil", "Vitamin E"],
    benefits: ["Intense hydration", "Calming scent", "Soothes dry skin"],
    size: "200g",
    inStock: true,
    rating: 4.6
  },
  {
    id: "8",
    name: "Almond Lip Balm",
    description: "Soothe and moisturize chapped lips with this sweet almond oil and honey lip balm.",
    price: 8.99,
    image: "/placeholder.svg",
    category: "lip care",
    ingredients: ["Sweet Almond Oil", "Beeswax", "Honey", "Vitamin E"],
    benefits: ["Repairs dry lips", "Long-lasting moisture", "Naturally sweet flavor"],
    size: "15g",
    inStock: true,
    rating: 4.3
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
  { id: "body", name: "Body Care" },
  { id: "lip care", name: "Lip Care" }
];
