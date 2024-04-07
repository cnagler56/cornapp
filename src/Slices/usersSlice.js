import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';
import axios from 'axios'



const USERS_URL = 'http://localhost:8081/user';



export const usersAdapter = createEntityAdapter()

export const userSelector = usersAdapter.getSelectors(state => state.users)
 


export const usersSlice = createSlice({
    name: 'users',
    initialState: usersAdapter.getInitialState(),
    reducers: {
       adduser: usersAdapter.addOne
      
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






export const addUser   = createAsyncThunk('users', async(firstName,lastName, email,password,city,state,interest)=> {
console.log("made it")
    //  const {firstName,lastName,email,password,city,state,interest} = payload
    console.log(lastName)
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
        // const data = await response.json;
    if (!response.ok) {
        // return dispatch({type: FAILED, data: data})
        console.log("failed")
    }
console.log("success")
return 2

  })


export const selectAllUsers = state => state.users;
export const selectUserById = (state, userId) => 
    state.users.find(user => user.id === userId)

    // export const {adduser} = usersSlice.actions


export default usersSlice.reducer;