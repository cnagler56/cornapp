import {configureStore} from '@reduxjs/toolkit';
import usersReducer from '../Slices/usersSlice';
import postsReducer from '../Slices/postsSlice';
import yieldsReducer from '../Slices/CornSlice'
import yieldReducer from '../Slices/BeanSlice'
import loginReducer from '../Slices/loginslice'
import cornguessReducer from '../Slices/CornGuessSlice'
import usdaReducer from '../Slices/USDASlice'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        posts: postsReducer,
        yields: yieldsReducer,
        yield: yieldReducer,
        cornYields: yieldsReducer,
        loggedin: loginReducer,
        cornguess: cornguessReducer,
        usda: usdaReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})