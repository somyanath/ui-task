import { useContext } from "react";
import { CartContext } from "./CartContextDefinition";

export const useCartContext = () => useContext(CartContext);
