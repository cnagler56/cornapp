import { useSelector } from 'react-redux'
import { selectAllUsers } from './usersSlice'
import { Link } from 'react-router-dom'

const UsersList = () => {
    const users = useSelector(selectAllUsers)
    console.log(users)
  
    const renderedUsers = users.map(user => (
        <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.firstName} {user.lastName}</Link>
            <div>{user.city}</div>
            <div>{user.state}</div>
        </li>
       
    ))
    


    return (
        <section className="contain">
            <h2>Users</h2>

            <ul>{renderedUsers}</ul>
        </section>
    )
}

export default UsersList