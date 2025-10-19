import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { getState }) => {
    const state = getState();
    const { isSearch, searchParam, limit } = state.products;
    let url;
    if (isSearch) {
      url = `https://dummyjson.com/products/search?q=${searchParam}`;
    }
    if (!isSearch) {
      url = `https://dummyjson.com/products?limit=${limit}&skip=0`;
    }

    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
    isSearch: false,
    searchParam: "",
    limit: 24,
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
        state.items = action.payload.products;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
