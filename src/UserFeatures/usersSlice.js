import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'
import {FAILED, REMOVE_TOKEN, STORE_TOKEN, initialState} from "../module/reducer";
import {useDispatch} from 'react-redux'


const USERS_URL = 'http://localhost:8081/user';
// const YIELD_URL = 'http://localhost:8081/cornGuess';
const URL = 'http://localhost:8081'








export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    
    const response = await axios.get(USERS_URL);
    console.log(response)
    return response.data
})




export const auth = createAsyncThunk('users/auth', async (email, password, dispatch) => {
    const response = await axios.get(`${URL}/login?email=${email}&password=bullhead`);
    if(response.status > 200) {
         return dispatch({type: FAILED, response: response.message})
        // return response
    }
     dispatch({STORE_TOKEN, response})
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