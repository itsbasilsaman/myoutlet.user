import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  addOns?: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }[];
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  tax: number;
  total: number;
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  subtotal: 0,
  tax: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      
      // Recalculate totals
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.subtotal = state.items.reduce((total, item) => {
        const itemTotal = item.price * item.quantity;
        const addOnsTotal = item.addOns?.reduce((sum, addon) => sum + (addon.price * addon.quantity), 0) || 0;
        return total + itemTotal + addOnsTotal;
      }, 0);
      state.tax = state.subtotal * 0.05; // 5% tax
      state.total = state.subtotal + state.tax;
    },
    
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      
      // Recalculate totals
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.subtotal = state.items.reduce((total, item) => {
        const itemTotal = item.price * item.quantity;
        const addOnsTotal = item.addOns?.reduce((sum, addon) => sum + (addon.price * addon.quantity), 0) || 0;
        return total + itemTotal + addOnsTotal;
      }, 0);
      state.tax = state.subtotal * 0.05;
      state.total = state.subtotal + state.tax;
    },
    
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        
        // Recalculate totals
        state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
        state.subtotal = state.items.reduce((total, item) => {
          const itemTotal = item.price * item.quantity;
          const addOnsTotal = item.addOns?.reduce((sum, addon) => sum + (addon.price * addon.quantity), 0) || 0;
          return total + itemTotal + addOnsTotal;
        }, 0);
        state.tax = state.subtotal * 0.05;
        state.total = state.subtotal + state.tax;
      }
    },
    
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.subtotal = 0;
      state.tax = 0;
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer; 