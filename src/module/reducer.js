import { createAsyncThunk } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'


const initialState = {
    users: [],
    yields: [],
    yield: []
}

export const USERS = "USERS"
export const FAILED = "FAILED"

let url = "http://localhost:8081"



export default (state = initialState, action) => {
    switch (action.type) {
        case USERS: {
            return {...state, ind: action.data}
        }

        default: {
            return {...state}
        }

    }

}
export const fetchUsers = createAsyncThunk('users', async () => {
    const response = await fetch('http://localhost:8081/getUsers');
    let data = await response.json();
    console.log(data)
    return data
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
    // return dispatch(getList())
console.log("success")


  })

// export function postUsers(firstName, lastName, email, password, city, state, interest){
// return async (dispatch,getState)=> {
//     console.log(email)
//     let response = await fetch('http://localhost:8080/users',
//         {
//             method: "POST",
//             body: JSON.stringify({
//                 firstName,
//                 lastName,
//                 email,
//                 password,
//                 city,
//                 state,
//                 interest
//             }),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         }

//         )
//     const data = await response.json;
//     if (!response.ok) {
//         return dispatch({type: FAILED, data: data})
//     }
//     return dispatch(getList())

// }

// }

// export function getList() {
//     return async (dispatch, getState) => {
//         const response = await fetch("http://localhost:8080/getList")
//         let data = await response.json();
//         if (!response.ok) {
//             return dispatch({type: FAILED, data: data.message})
//         }
//         return dispatch({type: USERS, data})
//     }
// }