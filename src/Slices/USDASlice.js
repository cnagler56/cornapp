import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUSDAYield = createAsyncThunk('usda/fetchUSDAYield', async () => {
    const response = await axios.get('http://localhost:8081/fetch-corn-yield');

    const modifiedData = response.data.map(item => ({
        ...item,
        loadTime: item.loadTime, 
    }));
    return modifiedData; 
});

const usdaSlice = createSlice({
    name: 'usda',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
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
