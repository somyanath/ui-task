export interface Product {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  currency: string;
  rating: number;
  badge: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}