import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

const USERS_URL = 'http://localhost:8081/cornyields';
const USERS_GUESS = 'http://localhost:8081/cornGuess';

const initialState = []

// export const postCornYield = createAsyncThunk(
//     'cornYields/postCornYield',
//     async (cornYields, thunkAPI) => {
//       try {
//         const response = await axios.post('/api/corn-yields', cornYieldData);
//         return response.data;
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error.response.data);
//       }
//     }
//   );

export const fetchCornYield = createAsyncThunk('yields/fetchCornYield', async () => {
    const response = await axios.get(USERS_URL);
    return response.data
})

export const addCornGuess = createAsyncThunk('posts/cornGuess', async (yieldValues, userId=1) => {
    const response = await axios.post(USERS_GUESS, yieldValues)
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