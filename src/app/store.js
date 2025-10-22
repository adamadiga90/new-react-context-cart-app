import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../feature/product/productsSlice";
import cartReducer from "../feature/cart/cartSlice";

export default configureStore({
  reducer: { products: productReducer, cart: cartReducer },
});
