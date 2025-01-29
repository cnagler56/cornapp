import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

const URL = 'http://localhost:8081';

export const fetchCornEstimate = createAsyncThunk(
  'cornguess/fetchCornEstimate',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${URL}/cornestimates`, {
        withCredentials: true,  
      });
      return response.data;  
    } catch (error) {
      return thunkAPI.rejectWithValue('Error fetching corn estimate');
    }
  }
);

const initialState = {
  estimates: [],  
  status: 'idle',  
  error: null,  
};

export const CornGuessSlice = createSlice({
  name: 'cornguess',
  initialState,
  reducers: {},  
  extraReducers: (builder) => {
    builder
      .addCase(fetchCornEstimate.pending, (state) => {
        state.status = 'loading';  
      })
      .addCase(fetchCornEstimate.fulfilled, (state, action) => {
        state.status = 'succeeded';  
        state.estimates = action.payload;  
      })
      .addCase(fetchCornEstimate.rejected, (state, action) => {
        state.status = 'failed';  
        state.error = action.payload;  
      });
  },
});

export default CornGuessSlice.reducer;
