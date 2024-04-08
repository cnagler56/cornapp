import React from 'react'
import {useSelector} from 'react-redux'
import {auth} from '../Slices/usersSlice'
import {Link} from 'react-router-dom'

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Header = (props) => {
  const users = useSelector(state => state.loggedin)

  let welcomeMessage;
  if (users.firstName && users.lastName) {
    const capitalizedFirstName = capitalizeFirstLetter(users.firstName);
    const capitalizedLastName = capitalizeFirstLetter(users.lastName);
    welcomeMessage = `Welcome ${capitalizedFirstName} ${capitalizedLastName}`;
  } else {
     welcomeMessage = <Link to= "/Signin">Log In You Coward</Link> ;
    
  }

  return (
    <header className="Header">
      <h1>
        {props.title}
        </h1>
        <div className='welcome'>
          {welcomeMessage}
          </div>

   
        </header>
  )
}

export default Header