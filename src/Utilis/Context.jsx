
import axios from './axios';
import React, { createContext, useState } from 'react'

export const productcontext = createContext();

const initialProducts = [
  {
    id: "1",
    title: "Classic Wrist Watch",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    category: "Accessories",
    price: 1499,
    description: "Elegant classic wrist watch with a premium design for everyday use."
  },
  {
    id: "2",
    title: "Premium Red Sneakers",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    category: "Footwear",
    price: 2499,
    description: "Comfortable sneakers with a stylish design and durable sole."
  },
  {
    id: "3",
    title: "Wireless Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    category: "Electronics",
    price: 1999,
    description: "Premium wireless headphones offering immersive sound quality."
  },
  {
    id: "4",
    title: "Professional Camera",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
    category: "Electronics",
    price: 45999,
    description: "Professional digital camera for photography and travel."
  },
  {
    id: "5",
    title: "Modern Sunglasses",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
    category: "Accessories",
    price: 1299,
    description: "Modern sunglasses with a stylish frame for everyday fashion."
  },
  {
    id: "6",
    title: "Leather Backpack",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    category: "Accessories",
    price: 2199,
    description: "Spacious backpack suitable for college, office and travel."
  },
  {
    id: "7",
    title: "Classic White T-Shirt",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    category: "Clothing",
    price: 799,
    description: "Comfortable cotton T-shirt with a minimal and timeless design."
  },
  {
    id: "8",
    title: "Running Sports Shoes",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600",
    category: "Footwear",
    price: 2999,
    description: "Lightweight sports shoes designed for running and workouts."
  },
  {
    id: "9",
    title: "Modern Desk Lamp",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600",
    category: "Home Decor",
    price: 1199,
    description: "Minimal desk lamp perfect for your workspace or bedside table."
  },
  {
    id: "10",
    title: "Ceramic Coffee Mug",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600",
    category: "Home Decor",
    price: 499,
    description: "Premium ceramic coffee mug for your daily coffee and tea."
  },
  {
    id: "11",
    title: "Luxury Leather Wallet",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600",
    category: "Accessories",
    price: 999,
    description: "Compact leather wallet with multiple card slots and a premium finish."
  },
  {
    id: "12",
    title: "Bluetooth Speaker",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",
    category: "Electronics",
    price: 1799,
    description: "Portable Bluetooth speaker with clear audio and powerful bass."
  },
  {
    id: "13",
    title: "Modern Office Chair",
    image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=600",
    category: "Furniture",
    price: 5999,
    description: "Comfortable modern office chair for long working hours."
  },
  {
    id: "14",
    title: "Stylish Denim Jacket",
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=600",
    category: "Clothing",
    price: 1899,
    description: "Classic denim jacket that adds style to your casual outfits."
  },
  {
    id: "15",
    title: "Premium Running Watch",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600",
    category: "Accessories",
    price: 3499,
    description: "Sporty watch with a modern design for active lifestyles."
  }
];

function Context(props) {

  const [products, setproducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");

    if (savedProducts !== null) {
      try {
        const parsedProducts = JSON.parse(savedProducts);

        if (Array.isArray(parsedProducts)) {
          return parsedProducts;
        }
      } catch (error) {
        console.log("Error loading products:", error);
      }
    }

    return initialProducts;
  });

  return (
    <productcontext.Provider value={[products, setproducts]}>
      {props.children}
    </productcontext.Provider>
  )
}

export default Context
