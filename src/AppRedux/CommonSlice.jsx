
import { createSlice } from '@reduxjs/toolkit';



// Define the initial state using that type
const initialState = {
  error: '',
  loading: false,
  message: '',
};

export const commonSlice = createSlice({
  name: 'common',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = '';
      state.message = '';
    },
    fetchSuccess: (state) => {
      state.loading = false;
      state.error = '';
      state.message = '';
    },
    fetchError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.message = '';
    },
  }
});

export const {
  fetchStart,
  fetchSuccess,
  fetchError,
} = commonSlice.actions;
export default commonSlice.reducer;
