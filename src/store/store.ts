import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import menuReducer from './features/menuSlice';
import userReducer from './features/userSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    menu: menuReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 