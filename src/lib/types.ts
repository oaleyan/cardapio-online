
export type Category = 'vegetariano' | 'vegano' | 'com carne' | 'frutos do mar';
export type Tag = 'saudável' | 'fast food' | 'refeição leve' | 'doce' | 'picante';

export interface Dish {
  id: string;
  name: string;
  image: string;
  price: number;
  category: Category;
  tags: Tag[];
  description: string;
  rating?: number;
}

export interface CartItem extends Dish {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  addItem: (dish: Dish) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}