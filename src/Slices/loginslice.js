import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:8081';

export const auth = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post(`${URL}/login`, { email, password }, { withCredentials: true });

      const user = response.data;
      
      
      localStorage.setItem('user', JSON.stringify(user));


      return { user };
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'An error occurred. Please try again.';
      return thunkAPI.rejectWithValue(errorMsg);
    }
  }
);


const getUserFromLocalStorage = () => {
  const userFromStorage = localStorage.getItem('user');
  try {
    return userFromStorage ? JSON.parse(userFromStorage) : null;
  } catch (error) {
    console.error('Error parsing user data from localStorage:', error);
    return null;
  }
};

const loginslice = createSlice({
  name: 'auth',
  initialState: {
    user: getUserFromLocalStorage(), 
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(auth.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(auth.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        localStorage.setItem('user', JSON.stringify(action.payload.user));
      })
      .addCase(auth.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { logout } = loginslice.actions;
export default loginslice.reducer;
