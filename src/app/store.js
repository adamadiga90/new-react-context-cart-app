import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../feature/product/productsSlice";

export default configureStore({
  reducer: { products: productReducer },
});
