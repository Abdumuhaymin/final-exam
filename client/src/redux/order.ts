import { configureStore } from "@reduxjs/toolkit";
import orderItem from "./slice/order-item";

export const store = configureStore({
  reducer: {
    order: orderItem,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
