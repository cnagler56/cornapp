import {Link} from 'react-router-dom'
import Nav from './Nav'


import React from 'react'

const DashHeader = (props) => {
  return (
    <header className="Header">
    <h1>
      {props.title}
      </h1>
      <Nav/>
      </header>
  )
}

export default DashHeader
