import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

const USERS_URL = 'http://localhost:8081/cornyields';

const initialState = []

export const fetchCornYield = createAsyncThunk('yields/fetchCornYield', async () => {
    const response = await axios.get(USERS_URL);
    return response.data
})

export const CornSlice = createSlice({
    name: 'yields',
    initialState,
    reducers: { },
    extraReducers(builder) {
        builder.addCase(fetchCornYield.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const getCornYields = state => state.yields;
export default CornSlice.reducer;