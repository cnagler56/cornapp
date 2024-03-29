import React from 'react'
import {useSelector} from 'react-redux'
import {auth} from './UserFeatures/usersSlice'


const Header = (props) => {
  const users = useSelector(state => state.loggedin)
  console.log(users)
  return (
    <header className="Header">
      <h1>
        {props.title}
        </h1>
        {/* <div>`Welcome ${users.firstName} ${users.lastName}`</div> */}
        </header>
  )
}

export default Header