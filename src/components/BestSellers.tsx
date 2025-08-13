import React from "react";
import type { ContentData } from "../types";
import { ProductCard } from "./ProductCard";
import { useCartContext } from "../context/useCartContext";

interface BestSellersProps {
  bestSellers: ContentData["bestSellers"];
}

export const BestSellers: React.FC<BestSellersProps> = ({ bestSellers }) => {
  const { cartItems, addToCart, updateQuantity, removeFromCart } =
    useCartContext();
  const getCartItem = (productId: string) => {
    return cartItems.find((item) => item.id === productId);
  };

  return (
    <section className="py-12 lg:py-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 lg:mb-12">
        <h2 className="text-3xl lg:text-5xl font-normal text-black">
          {bestSellers.title}
        </h2>
        <a
          href={bestSellers.viewAllLink}
          className="text-lg lg:text-xl font-light text-black underline hover:text-gray-600 transition-colors"
        >
          {bestSellers.viewAllText}
        </a>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 lg:gap-6">
        {bestSellers.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cartItem={getCartItem(product.id)}
            onAddToCart={addToCart}
            onUpdateQuantity={updateQuantity}
            onRemoveFromCart={removeFromCart}
          />
        ))}
      </div>
    </section>
  );
};
