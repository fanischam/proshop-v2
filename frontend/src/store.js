import { configureStore } from '@reduxjs/toolkit';
import { api } from './slices/apiSlice';
import cartSliceReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cart: cartSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true,
});

export default store;
