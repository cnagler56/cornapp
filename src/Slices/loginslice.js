import {createSlice, createAsyncThunk, createEntityAdapter} from '@reduxjs/toolkit';
import axios from 'axios'
// import {useSignIn} from 'react-auth-kit'
 


// const isAuthenticated= {}
const URL = 'http://localhost:8081'


export const loginAdapter = createEntityAdapter()

 export const loginSelector = loginAdapter.getSelectors(state => state.loggedin)
 
 export const auth = createAsyncThunk('users/auth', async ({email, password}, thunkAPI) => {
   try {
  const loggedin = await axios.get(`${URL}/login?email=${email}&password=${password}`);
    // const loggedin = await axios.get(`${URL}/login?email=3&password=3`);
    const token = await loggedin.data
    // localStorage.setItem('token', JSON.stringify(token))
     
    return token;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
         
})


  // export const getInto =  createAsyncThunk('users/getIn', async({username, password})  => {
  //   const token = await axios.get("http://localhost:8081/getIn",{username, password})
  //   console.log(token)
  //   return token.data
  // })     


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