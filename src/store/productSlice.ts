import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Định nghĩa kiểu dữ liệu cho Product
type Product = {
  id: number;
  name: string;
  price: number;
};

type ProductState = {
  products: Product[];
  loading: boolean;
  error: string | null;
};

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

// ✅ Thunk để gọi API khi thêm sản phẩm
export const addProductAsync = createAsyncThunk(
  "product/addProductAsync",
  async (product: Omit<Product, "id">, { rejectWithValue }) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify(product),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      return { id: Date.now(), ...data }; // Fake ID vì API giả lập
    } catch (error ) {
      return rejectWithValue("Lỗi khi thêm sản phẩm" + error);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProductAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProductAsync.fulfilled, (state, action: PayloadAction<Product>) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(addProductAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { removeProduct } = productSlice.actions;
export default productSlice.reducer;
