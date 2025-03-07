import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../UserContext";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Header = () => {
  const { user, loggedIn } = useUser();
  const [refresh, setRefresh] = useState(0); 

  useEffect(() => {
    setRefresh((prev) => prev + 1);
  }, [loggedIn]); 

  let welcomeMessage;
  if (user && user.firstName && user.lastName && loggedIn) {
    const capitalizedFirstName = capitalizeFirstLetter(user.firstName);
    const capitalizedLastName = capitalizeFirstLetter(user.lastName);
    welcomeMessage = `Welcome ${capitalizedFirstName} ${capitalizedLastName}`;
  } else {
    welcomeMessage = (
      <Link to="/Signin" style={{ color: "white" }}>
        Log In You Coward
      </Link>
    );
  }

  return (
    <header className="Header">
      <h1 style={{ background: "transparent" }}>JustForAg</h1>
      <div className="welcome">{welcomeMessage}</div>
    </header>
  );
};

export default Header;
