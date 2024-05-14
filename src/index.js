import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom"
 import {Provider} from "react-redux"
import {store, persistor} from './app/store';
import { PersistGate } from 'redux-persist/integration/react'
import {fetchUsers} from './Slices/usersSlice'
import {fetchPosts} from './Slices/postsSlice'
import {fetchCornYield} from './Slices/CornSlice'
import {fetchBeanYield} from './Slices/BeanSlice'
import {fetchCornEstimate} from './Slices/CornGuessSlice'

store.dispatch(fetchUsers())
 store.dispatch(fetchPosts())
store.dispatch(fetchCornYield())
 store.dispatch(fetchBeanYield())
 store.dispatch(fetchCornEstimate())

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter>
      <Routes>
      <Route path="/*" element={<App/>} />
      </Routes>   
    </BrowserRouter>
    {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);


