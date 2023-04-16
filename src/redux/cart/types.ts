export type CartItem = {
    title: string;
    // colors: string;
    price: number;
    type: string;
    size: number;
    imageUrl: string;
    id: string;
    count: number;
  };
  
export interface CartSliceState {
    totalPrice: number;
    items: CartItem[];
  }