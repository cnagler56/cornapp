import React from 'react'
import {useSelector} from 'react-redux'
import {auth} from '../Slices/usersSlice'

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
    welcomeMessage = 'Log In you Coward';
  }

  return (
    <header className="Header">
      <h1>
        {props.title}
        </h1>
        <div className='welcome'>
        {/* {users.firstName && users.lastName ? 
          `Welcome ${users.firstName} ${users.lastName}` : 
          'Welcome Stranger' } */}
          {welcomeMessage}
          </div>

        {/* // <div className='welcome'>Welcome {users.firstName} {users.lastName}</div> */}
        </header>
  )
}

export default Header