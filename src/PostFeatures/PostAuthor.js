import {selectAllUsers} from '../UserFeatures/usersSlice'
import { useSelector } from "react-redux"

import React from 'react'

const PostAuthor = ({userId}) => {
const users = useSelector(selectAllUsers)

const author = users.find(user => user.id === userId)
 
return <span> by {author ? author.firstName + " " + author.lastName : 'Unknown author'} </span>
}

export default PostAuthor
