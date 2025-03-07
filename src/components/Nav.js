import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext"; // Import UserContext

const Nav = () => {
  const { loggedIn } = useContext(UserContext); // Use authentication state
  return (
    <nav className="Nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Corn">Corn</Link></li>
        <li><Link to="/Soybeans">Soybeans</Link></li>
        <li><Link to="/Posts">Posts</Link></li>
        <li><Link to="/user">Users</Link></li>
        <li><Link to="/BuySell">Buy/Sell</Link></li>
        <li><Link to="/Contact">Contact Us</Link></li>
        <li><Link to="/Cattle">Cattle</Link></li>
        <li><Link to="/Hogs">Hogs</Link></li>
        <li><Link to="/USDA">USDA</Link></li>
        <li><Link to="/Weather">Weather</Link></li>
        <li><Link to="/NWS">NWS</Link></li>
        {loggedIn ? (
          <li><Link to="/Logout">Logout</Link></li>
        ) : (
          <li><Link to="/Signin">Signin</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
