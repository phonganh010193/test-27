import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import CartApi from './api'

export const fetchCartList = createAsyncThunk(
    'cart/fetchCartList',
    async (params, thunkAPI) => {
      const response = await CartApi.getListCart()
      return response.data
    }
)

export const fetchUpdateCart = createAsyncThunk(
    'cart/fetchUpdateCart',
    async (params, thunkAPI) => {
        const response = await CartApi.updateListCart(params)
        return response.data
    }
)

export const fetchBlogList = createAsyncThunk(
  'blog/fetchBlogList',
  async (params, thunkAPI) => {
    const response = await CartApi.getListBlog()
    return response.data
  }
)
const initialState = {
  cartlist: [],
  blog: [],
  isLoading: false
}



export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCartList.pending, (state, action) => {
        state.isLoading = true
    })
    builder.addCase(fetchCartList.fulfilled, (state, action) => {
        state.cartlist = action.payload
        state.isLoading = false
    })
    builder.addCase(fetchCartList.rejected, (state, action) => {
        state.isLoading = false
    })
    builder.addCase(fetchBlogList.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchBlogList.fulfilled, (state, action) => {
      state.blog = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchBlogList.rejected, (state, action) => {
        state.isLoading = false
    })
  },
})

// Action creators are generated for each case reducer function
export const {} = cartSlice.actions

export default cartSlice.reducer