import { createContext } from 'react';
import type { CartItem, Product } from '../types';

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  getCartItemCount: () => number;
  getCartItem: (productId: string) => CartItem | undefined;
  clearCart: () => void;
}

// Create context with a default empty implementation
export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  getCartItemCount: () => 0,
  getCartItem: () => undefined,
  clearCart: () => {},
});
