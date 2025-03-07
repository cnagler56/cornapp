import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Home from "./Home";
import Signin from "./Signin";
import Register from "./Register";
import Logout from "./Logout";
import PostList from "./PostFeatures/PostList";
import AddPostForm from "./PostFeatures/AddPostForm";
import SinglePostPage from "./PostFeatures/SinglePostPage";
import EditPostForm from "./PostFeatures/EditPostForm";
import UsersList from "./UserFeatures/UsersList";
import UserPage from "./UserFeatures/UserPage";
import Corn from "./Corn";
import Soybeans from "./Soybeans";
import BuySell from "./BuySell";
import Contact from "./Contact";
import Weather from "./Weather";
import History from "./History";
import Cattle from "./Cattle";
import USDA from "./USDA";
import Hogs from "./Hogs";
import NWS from "./NWS";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);
  const navigate = useNavigate();
  const checkAuthStatus = async () => {
    try {
      const response = await fetch("/me", {
        method: "GET",
        credentials: "include", // Ensures cookies (JSESSIONID) are sent
      });
  
      if (!response.ok) throw new Error("Not authenticated");
  
      const user = await response.json(); // Extract user details from response
      return user;
    } catch (error) {
      return null; // Not authenticated
    }
  };

  useEffect(() => {
    const updateAuthStatus = async () => {
      const user = await checkAuthStatus();
      if (user) {
        setUser(user);
        setLoggedIn(true);
      } else {
        setUser(null);
        setLoggedIn(false);
      }
    };
  
    updateAuthStatus();
    const interval = setInterval(updateAuthStatus, 20000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = (userResponse) => {
    console.log("User data before saving", userResponse);
    const userObject = Array.isArray(userResponse) ? userResponse[0] : userResponse;
    localStorage.setItem("user", JSON.stringify(userObject));
    navigate(-1)
    setTimeout(() => {
      setUser(userObject);
      setLoggedIn(true);
    }, 0);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ user, loggedIn, handleLogin, handleLogout }}>
      <div className="outside">
        <Header user={user} key={user?.userId} />
        <Nav loggedIn={loggedIn} />
        <div className="position">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="Signin" element={<Signin />} />
              <Route path="Register" element={<Register />} />
              <Route path="Logout" element={<Logout />} />
              <Route path="Posts" element={<PostList />} />
              <Route path="Corn" element={<Corn />} />
              <Route path="Soybeans" element={<Soybeans />} />
              <Route path="BuySell" element={<BuySell />} />
              <Route path="Contact" element={<Contact />} />
              <Route path="Weather" element={<Weather />} />
              <Route path="Cattle" element={<Cattle />} />
              <Route path="Hogs" element={<Hogs />} />
              <Route path="USDA" element={<USDA />} />
              <Route path="NWS" element={<NWS />} />
              <Route path="History" element={<History />} />
              <Route path="post">
                <Route index element={<AddPostForm />} />
                <Route path=":idposts" element={<SinglePostPage />} />
                <Route path="edit/:postId" element={<EditPostForm />} />
              </Route>
              <Route path="user">
                <Route index element={<UsersList />} />
                <Route path=":userId" element={<UserPage />} />
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
