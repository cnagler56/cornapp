import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

const USERS_URL = 'http://localhost:8081/beans';

const initialState = []

export const fetchBeanYield = createAsyncThunk('beans/fetchBeanYield', async () => {
    const response = await axios.get(USERS_URL);
    console.log(response)
    return response.data
})

export const BeanSlice = createSlice({
    name: 'yield',
    initialState,
    reducers: { },
    extraReducers(builder) {
        builder.addCase(fetchBeanYield.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const getBeanYields = state => state.yield;


export default BeanSlice.reducer;