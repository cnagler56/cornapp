import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {handleLogout} from '../App'


const Nav = () => {
   
  const isLoggedIn = JSON.parse(localStorage.getItem('token')); 
console.log(isLoggedIn)
  return (
    <nav className="Nav">
       
<ul>
    <li><Link to= "/Home">Home</Link></li>
    <li><Link to= "/Corn">Corn</Link></li>
    <li><Link to= "/Soybeans">Soybeans</Link></li>
    <li><Link to= "/PostList">Posts</Link></li>
    <li><Link to= "/user">Users</Link></li>
    {/* <li><Link to= "/post">AddPosts</Link></li> */}
  
    <li><Link to= "/BuySell">Buy/Sell</Link></li>
    {/* <li><Link to= "/Signin">Signin</Link></li> */}
    {isLoggedIn ? (
          <li><Link to= "/Logout">Logout</Link></li>
        ) : (
          <li><Link to="/Signin">Signin</Link></li>
        )}
    <li><Link to= "/Contact">Contact Us</Link></li>
    
    <li><Link to= "/USDA">USDA</Link></li>
    {/* <li><Link to= "/Can">CSS</Link></li> */}

</ul>
    </nav>
  )
}

export default Nav