import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import ProductApi from './api'

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (params, thunkAPI) => {
      const response = await ProductApi.getProduct()
      return response.data
    }
  )
const initialState = {
  productlist: [],
  isLoading: false
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
        state.isLoading = true
    })
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
        state.productlist = action.payload
        state.isLoading = false
    })
    builder.addCase(fetchProduct.rejected, (state, action) => {
        state.isLoading = false
    })
  },
})

// Action creators are generated for each case reducer function
export const {} = productSlice.actions

export default productSlice.reducer