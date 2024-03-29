import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';
import axios from 'axios'
import {loggedin} from './loginslice'
import {useDispatch} from 'react-redux'


const USERS_URL = 'http://localhost:8081/user';
const URL = 'http://localhost:8081'


export const usersAdapter = createEntityAdapter()

export const userSelector = usersAdapter.getSelectors(state => state.users)
 

export const usersSlice = createSlice({
    name: 'users',
    initialState: usersAdapter.getInitialState(),
    reducers: {
        loggedIn: usersAdapter.addOne,
      
     },
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})



export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {   
    const response = await axios.get(USERS_URL);
    return response.data
})




export const auth = createAsyncThunk('users/auth', async (email, password, dispatch) => {
 
    const response = await axios.get(`${URL}/login?email=${email}&password=bullhead`);
    if(response.status > 200) {       
         return 1   }
         console.log(response)
     dispatch(loggedin(response))


    return response
})

export const addUser = createAsyncThunk('users', async(payload)=> {
    console.log(firstName,lastName,email,password,city,state,interest)
    const {firstName,lastName,email,password,city,state,interest} = payload
    const response = await fetch('http://localhost:8081/register',
    {
                    method: "POST",
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        email,
                        password,
                        city,
                        state,
                        interest
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
                )
        const data = await response.json;
    if (!response.ok) {
        // return dispatch({type: FAILED, data: data})
        console.log("failed")
    }
console.log("success")


  })


export const selectAllUsers = state => state.users;
export const selectUserById = (state, userId) => 
    state.users.find(user => user.id === userId)

    // export const {loggedIn} = usersSlice.actions

export default usersSlice.reducer;