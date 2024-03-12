import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom"
 import {Provider} from "react-redux"
 import reducer from "./module/reducer";
import {store} from './app/store';
import {fetchUsers} from './UserFeatures/usersSlice'
import {fetchPosts} from './PostFeatures/postsSlice'
import {fetchCornYield} from './CornSlice'
import {fetchBeanYield} from './BeanSlice'

store.dispatch(fetchUsers())
 store.dispatch(fetchPosts())
store.dispatch(fetchCornYield())
store.dispatch(fetchBeanYield())

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
      <Route path="/*" element={<App/>} />
      </Routes>   
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


