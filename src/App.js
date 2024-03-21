import "bootstrap/dist/css/bootstrap.css"
import Header from "./Header"
import Nav from './Nav'
import Corn from './Corn'
import Soybeans from './Soybeans'
import PostList from './PostFeatures/PostList'
import BuySell from './BuySell'
import Footer from './Footer'
import Home from './Home'
import AddPostForm from './PostFeatures/AddPostForm'
import Layout from './components/Layout'
 import Public from "./components/Public"
import Signin from "./Signin"
import SinglePostPage from "./PostFeatures/SinglePostPage"
import { Routes, Route, Navigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
//  import { format } from 'date-fns';
import background from "./img/farm.jpg"
import EditPostForm from "./PostFeatures/EditPostForm"
import UsersList from './UserFeatures/UsersList'
import UserPage from './UserFeatures/UserPage'
import Display from "./Display"
import Test from "./Test"

function App() {
  const [search,setSearch] = useState('')


  return (
    <div className="outside"
    
    >
      
      <Header title="App Name" />
      <Nav />
      <div className="position">
       <Routes >        
          <Route path="/" element={<Layout />}>
          <Route index element={<PostList />} />
            <Route path="Home" element={<Home/>}/>
            {/* <Route index element={<Public/>}/> */}
            <Route path="Signin" element={<Signin/>}/>
            <Route path="Corn" element={<Corn/>}/>
            <Route path="/Soybeans" element={<Soybeans/>}/>
            <Route path="PostList" element={<PostList/>}></Route>         
            <Route path="/BuySell" element={<BuySell/>}/>
            <Route path="/display" element={<Display/>}/>
            <Route path="/test" element={<Test/>}/>
            
            <Route path="post">
              <Route index element={<AddPostForm />} />
              <Route path=":idposts" element={<SinglePostPage />} />
              <Route path="edit/:postId" element={<EditPostForm />} />
            </Route>

            <Route path="user">
              <Route index element={<UsersList />}/>
              <Route path=":userId" element={<UserPage />}/>
            </Route>

            <Route path="*" element={<Navigate to="/" replace />}/>
          </Route>
      </Routes>
 
      </div>
      <Footer />

    </div>
  );
}

export default App;
