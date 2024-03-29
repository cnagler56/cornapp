import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';



export const loginAdapter = createEntityAdapter({
    selectId: (e) => e.id
})

const initialState = loginAdapter.getInitialState({
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    count: 0
}
)

 export const loginSelector = loginAdapter.getSelectors(state => state.loggedin)
 

export const loginslice = createSlice({
    name: 'loggedin',
    initialState,
    reducers: {
        loggedIn: loginAdapter.addOne
    }
     })

  export const {loggedin} = loginslice.actions
     
export default loginslice.reducer;