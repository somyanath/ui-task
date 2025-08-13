import React from 'react';
import type { Product, CartItem } from '../types';
import { StarRating } from './ui/StarRating';
import { Button } from './ui/Button';
import { HeartIcon } from './icons/HeartIcon';
import { CartIcon } from './icons/CartIcon';

interface ProductCardProps {
  product: Product;
  cartItem?: CartItem;
  onAddToCart: (product: Product) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveFromCart: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  cartItem,
  onAddToCart,
  onUpdateQuantity,
  onRemoveFromCart,
}) => {
  const formatPrice = (price: number) => {
    return `${product.currency}${price.toLocaleString()}`;
  };

  return (
    <div className="bg-gray-100 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
      {/* Badge and Favorite */}
      <div className="flex items-center justify-between p-4 lg:p-6">
        <div>
          {product.badge && product.badge}
          <StarRating rating={product.rating} size="sm" />
        </div>
        <button className="p-2 bg-white border border-gray-300 rounded-full transition-colors">
          <HeartIcon width={20} height={20} color="#6B7280" />
        </button>
      </div>

      {/* Product Image */}
      <div className="aspect-square flex items-center justify-center rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-row justify-between space-y-3 bg-white p-4 lg:p-6">
        <div>
        <h3 className="text-sm lg:text-base font-light text-black">
          {product.name}
        </h3>
        
        
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 line-through">
            {formatPrice(product.originalPrice)}
          </span>
          <span className="text-sm font-medium text-black">
            {formatPrice(product.discountedPrice)}
          </span>
        </div>
        </div>

        {/* Add to Cart / Quantity Controls */}
        <div className="pt-2 flex flex-col justify-between items-center">
          {!cartItem ? (
            <Button
              variant="primary"
              size="sm"
              className="w-full rounded-full text-sm font-light"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
              <CartIcon width={24} height={24} color="#fff" />
            </Button>
          ) : (
            <div className="flex flex-col items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-sm font-medium transition-colors"
                  onClick={() => onUpdateQuantity(product.id, cartItem.quantity - 1)}
                >
                  −
                </button>
                <span className="text-sm font-medium min-w-[2rem] text-center">
                  {cartItem.quantity}
                </span>
                <button
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-sm font-medium transition-colors"
                  onClick={() => onUpdateQuantity(product.id, cartItem.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="text-xs text-red-600 hover:text-red-700 font-medium transition-colors"
                onClick={() => onRemoveFromCart(product.id)}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};