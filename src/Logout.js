import React from 'react'
import {useNavigate} from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()
console.log(localStorage.token)
    
    // navigate('/')
  return localStorage.removeItem('token');
}

export default Logout
