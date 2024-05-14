import {selectAllUsers} from '../Slices/usersSlice'
import { useSelector } from "react-redux"

import React from 'react'

const PostAuthor = ({userId}) => {
const users = useSelector(selectAllUsers)

 const author = users.find(user => user.userId == userId.toString())
// const author = users.find(user => user.userId == userId)


return <span><div> by {author ? author.firstName + " " + author.lastName + "    -->  " : 'Unknown author   '} </div>
    
<div> {author ? author.city + ", " + author.state : 'Unknown location'} </div></span>
}

export default PostAuthor
