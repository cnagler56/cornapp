import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = []


export const fetchCornEstimate = createAsyncThunk('estimates/fetch', async () => {
    const estimate = await axios.get("http://localhost:8081/cornestimates")
    console.log(estimate.data)
    return estimate.data
})



export const CornGuessSlice = createSlice({
    name: 'cornguess',
    initialState,
    reducers: { },
    extraReducers(builder) {
        builder.addCase(fetchCornEstimate.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export default CornGuessSlice.reducer;