import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
  image: string;
  category: string;
  addOns?: {
    id: number;
    name: string;
    price: number;
    image: string;
  }[];
}

interface MenuState {
  items: MenuItem[];
  categories: string[];
  activeCategory: string;
  offers: MenuItem[];
  isLoading: boolean;
  error: string | null;
}

const initialState: MenuState = {
  items: [],
  categories: [],
  activeCategory: 'breakfast',
  offers: [],
  isLoading: false,
  error: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuItems: (state, action: PayloadAction<MenuItem[]>) => {
      state.items = action.payload;
      // Extract unique categories
      state.categories = [...new Set(action.payload.map(item => item.category))];
    },
    
    setActiveCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload;
    },
    
    setOffers: (state, action: PayloadAction<MenuItem[]>) => {
      state.offers = action.payload;
    },
    
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setMenuItems,
  setActiveCategory,
  setOffers,
  setLoading,
  setError,
} = menuSlice.actions;

export default menuSlice.reducer; 