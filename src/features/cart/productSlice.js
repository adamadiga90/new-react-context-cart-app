// https://dummyjson.com/products

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async ({ limit, skip, search }) => {
    const url = search?.isSearch
      ? `https://dummyjson.com/products/search?q=${search.name}`
      : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.products;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default productSlice.reducer;
