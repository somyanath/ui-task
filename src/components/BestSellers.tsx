import React from "react";
import type { ContentData, Product, CartItem } from "../types";
import { ProductCard } from "./ProductCard";

interface BestSellersProps {
  bestSellers: ContentData["bestSellers"];
  cartItems: CartItem[];
  onAddToCart: (product: Product) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveFromCart: (productId: string) => void;
}

export const BestSellers: React.FC<BestSellersProps> = ({
  bestSellers,
  cartItems,
  onAddToCart,
  onUpdateQuantity,
  onRemoveFromCart,
}) => {
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
            onAddToCart={onAddToCart}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveFromCart={onRemoveFromCart}
          />
        ))}
      </div>
    </section>
  );
};
