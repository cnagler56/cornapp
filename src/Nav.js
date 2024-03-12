import React from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {
  return (
    <nav className="Nav">
       
<ul>
    <li><Link to= "/Home">Home</Link></li>
    <li><Link to= "/Corn">Corn</Link></li>
    <li><Link to= "/Soybeans">Soybeans</Link></li>
    <li><Link to= "/PostList">Posts</Link></li>
    <li><Link to= "/user">Users</Link></li>
    <li><Link to= "/post">AddPosts</Link></li>
    <li><Link to="/display">Display</Link></li>
    <li><Link to= "/BuySell">Buy/Sell</Link></li>
    <li><Link to= "/Signin">Signin</Link></li>

</ul>
    </nav>
  )
}

export default Nav