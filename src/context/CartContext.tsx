import React from "react";
import { CartContext } from "./CartContextDefinition";
import type { CartContextType } from "./CartContextDefinition";

interface CartProviderProps {
  children: React.ReactNode;
  value: CartContextType;
}

export const CartProvider: React.FC<CartProviderProps> = ({
  children,
  value,
}) => {
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
