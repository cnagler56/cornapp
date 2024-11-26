import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch USDA data
export const fetchUSDAYield = createAsyncThunk(
  'usda/fetchUSDAYield',
  async () => {
    const response = await axios.get('http://localhost:8081/fetch-corn-yield');
    return response.data; // Return the data from the response
  }
);

const usdaSlice = createSlice({
  name: 'usda',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {}, // No reducers for now
  extraReducers: (builder) => {
    builder
      .addCase(fetchUSDAYield.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUSDAYield.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUSDAYield.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default usdaSlice.reducer;

