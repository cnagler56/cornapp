import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'
import {useSelector} from 'react-redux'

const USERS_URL = 'http://localhost:8081/cornyields';
const USERS_GUESS = 'http://localhost:8081/cornGuess';

const initialState = []


export const fetchCornYield = createAsyncThunk('yields/fetchCornYield', async () => {
    const response = await axios.get(USERS_URL, { withCredentials: true });
    return response.data
})



export const addCornGuess = createAsyncThunk('posts/cornGuess', async ({yieldValues, userId}) => {
    // const response = await axios.post(USERS_GUESS, yieldValues)
    const response = await axios.post(USERS_GUESS, { yieldValues, userId }, { withCredentials: true });
    // const response = await axios.post({yieldValues, userId})
    return response.data
})

export const submitCornGuess = createAsyncThunk('cornGuess', async({grain, date, yiel, name, state, interest, userId}) => {
    // const response = await axios.post("http://localhost:8081/cornGuess",{grain, date, yiel, name, state, interest, userId})
    const response = await axios.post("http://localhost:8081/cornGuess", { grain, date, yiel, name, state, interest, userId }, { withCredentials: true });
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
        .addCase(submitCornGuess.fulfilled, (state, action) => {
            const existingUserIndex = state.findIndex(user => user.userId === action.payload.userId);
            
            if (existingUserIndex !== -1) {
                // Update existing user's yield
                state[existingUserIndex] = action.payload;
            } else {
                // Add new user's yield
                state.push(action.payload);
            }
        });
    }
})
export const getCornYields = state => state.yields;

export default CornSlice.reducer;