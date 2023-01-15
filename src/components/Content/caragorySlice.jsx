import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import CatagoriesApi from './api'

export const fetchCatagories = createAsyncThunk(
    'catagories/fetchCatagories',
    async (params, thunkAPI) => {
      const response = await CatagoriesApi.getCatagories()
      return response.data
    }
  )
const initialState = {
  catagories: [],
  isLoading: false
}

export const counterSlice = createSlice({
  name: 'catagories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCatagories.pending, (state, action) => {
        state.isLoading = true
    })
    builder.addCase(fetchCatagories.fulfilled, (state, action) => {
        state.catagories = action.payload
        state.isLoading = false
    })
    builder.addCase(fetchCatagories.rejected, (state, action) => {
        state.isLoading = false
    })
  },
})

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions

export default counterSlice.reducer