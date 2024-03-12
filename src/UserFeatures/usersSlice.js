import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'


const USERS_URL = 'http://localhost:8081/user';
const YIELD_URL = 'http://localhost:8081/cornGuess';
const URL = 'http://localhost:8081'

const initialState =  {
    token: null
}


const STORE_TOKEN = "STORE_TOKEN";
const REMOVE_TOKEN = "REMOVE_TOKEN";

// export default function (state = initialState, action) {
//     switch (action.type) {
//         case STORE_TOKEN: {
//             return {...state, token: action.data}
//         }
//         case REMOVE_TOKEN: {
//             return {...state, token: null}
//         }
//         return state
//     }
    
// }

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get(USERS_URL);
    console.log(response)
    return response.data
})

export const addCornGuess = createAsyncThunk('posts/cornGuess', async (guess) => {
    const response = await axios.post(YIELD_URL, guess)
    return response.data
})

// export const addBeanGuess = createAsyncThunk('posts/beanGuess', async (guess) => {
//     const response = await axios.post(YIELD_URL, guess)
//     return response.data
// })

export const auth = createAsyncThunk('users/auth', async (email, password) => {
    const response = await axios.get(`${URL}/login?email=${email}&password=bullhead`);
    console.log(response)
    return response.data
})

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: { },
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})


export const selectAllUsers = state => state.users;
export const selectUserById = (state, userId) => 
    state.users.find(user => user.id === userId)

export default usersSlice.reducer;