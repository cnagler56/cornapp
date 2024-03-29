import {configureStore} from '@reduxjs/toolkit';
import usersReducer from '../UserFeatures/usersSlice';
import postsReducer from '../PostFeatures/postsSlice';
import yieldsReducer from '../CornSlice'
import yieldReducer from '../BeanSlice'
import loginReducer from '../loginslice'



export const store = configureStore({
    reducer: {
         users: usersReducer,
        posts: postsReducer,
        yields: yieldsReducer,
        yield: yieldReducer,
        cornYields: yieldsReducer,
        loggedin: loginReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})