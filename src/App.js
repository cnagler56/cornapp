import "bootstrap/dist/css/bootstrap.css"
import Header from "./components/Header"
import Nav from './components/Nav'
import Can from './Can'
import Corn from './Corn'
import Soybeans from './Soybeans'
import PostList from './PostFeatures/PostList'
import BuySell from './BuySell'
import Footer from './components/Footer'
import Home from './Home'
import AddPostForm from './PostFeatures/AddPostForm'
import Layout from './components/Layout'
import Contact from './Contact'
import History from './History'
import Signin from "./Signin"
import SinglePostPage from "./PostFeatures/SinglePostPage"
import { Routes, Route, Navigate} from 'react-router-dom';
import EditPostForm from "./PostFeatures/EditPostForm"
import UsersList from './UserFeatures/UsersList'
import UserPage from './UserFeatures/UserPage'
import Test from "./Test"
import {useState, useEffect} from 'react'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');

  //   if (token) {
  //     console.log(token)
  //     setIsAuthenticated(true);
  //   }
  // }, []);

  return (
    <div className="outside"
    
    >
      
      <Header title="JustForAg" />
      <Nav />
      <div className="position">
       <Routes >        
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path="Posts" element={<PostList/>}/>
            <Route path="Signin" element={<Signin/>}/>
            { <Route path="Corn" element={<Corn/>}/> }
            <Route path="/Soybeans" element={<Soybeans/>}/>
            <Route path="PostList" element={<PostList/>}></Route>         
            <Route path="/BuySell" element={<BuySell/>}/>
            <Route path="/Test" element={<Test/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Can" element={<Can/>}/>
            <Route path="/History" element={<History/>}/>
            
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
