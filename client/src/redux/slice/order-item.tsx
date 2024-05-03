import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface OrderedItem {
  product: any[];
}

const initialState: OrderedItem = {
  product: [],
};
const orderItem = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<any>) => {
      return { ...state, user: [...state.product, action.payload] };
    },
    deletProduct: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        user: state.product.filter((item) => item.id !== action.payload),
      };
    },
  },
});

export default orderItem.reducer;
export const { addProduct, deletProduct } = orderItem.actions;
