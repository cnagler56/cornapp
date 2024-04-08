import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';
import axios from 'axios'



const URL = 'http://localhost:8081'


export const loginAdapter = createEntityAdapter()

 export const loginSelector = loginAdapter.getSelectors(state => state.loggedin)
 
 export const auth = createAsyncThunk('users/auth', async ({email, password}, thunkAPI) => {
    const loggedin = await axios.get(`${URL}/login?email=${email}&password=${password}`);
    if(loggedin.status > 200) {       
         return 1   }
      
         return loggedin.data
})

export const loginslice = createSlice({
    name: 'loggedIn',
    initialState: loginAdapter.getInitialState(),
    reducers: {
        loggedin: (state, action) => {
            state.loggedin.push(action.payload)
        }
    },
    extraReducers(builder) {
        builder.addCase(auth.fulfilled, (state, action) => {
           return action.payload
        })
    }
        
    
     })




  export const {loggedIn} = loginslice.actions
     
export default loginslice.reducer;