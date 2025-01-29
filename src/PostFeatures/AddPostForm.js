import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {addNewPost} from '../Slices/postsSlice'
import {selectAllPosts} from '../Slices/postsSlice'
import {selectAllUsers} from '../Slices/usersSlice'
import {useNavigate} from 'react-router-dom'
import { Form, Button } from "react-bootstrap";

const AddPostForm = () => {
    const dispatch = useDispatch()
    const logged = useSelector(state => state.loggedin)
    const [title, setTitle] = useState('Planting')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    const navigate = useNavigate()
    const users = useSelector(selectAllUsers)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

 
    const canSave = [title, content].every(Boolean) && addRequestStatus === 'idle' && (logged.userId > 0)
  

    const onSavePostClicked = () => {
        const name = logged.user.firstName + " " + logged.user.lastName
        const city = logged.user.city
        
        const currentDate = new Date()
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
        const day = String(currentDate.getDate()).padStart(2, '0');
       
        const hours = String(currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');
        const seconds = String(currentDate.getSeconds()).padStart(2, '0');
  
         
        const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`
        const state = logged.user.state
        const userId = logged.user.userId
        console.log("1")
        if (true) {
            try {
                console.log("2")
                setAddRequestStatus('pending')
                dispatch(addNewPost( {title, content, name, city, state, userId, date:formattedDate}))

                setTitle('')
                setContent('')
                // setUserId('')
                navigate('/PostList')
            } catch (err) {
                console.error('Failed to save the post', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }

    }


    return (
        <>
         <h2 ></h2>
        <section className="contain">
           <div>
            
            <Form style={{width:"50%", height:"50%"}}>
                <Form.Group>
                <label htmlFor="postTitle" className='adds'>Title</label>
                <Form.Select
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    className="postTitle"
                    style={{fontWeight: 'bold'}}
                    value={title}
                    onChange={onTitleChanged}
                >
                         <option value={"Planting"}>Planting</option>
                         <option value={"Weather"}>Weather</option>
                         <option value={"Harvest"}>Harvest</option>
                         <option value={"Marketing"}>Marketing</option>
                         <option value={"Other"}>Other</option>
                         </Form.Select>
                </Form.Group>
                 <Form.Group>
                <label htmlFor="postContent"  className='adds'>Content</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    className="postTitle"
                    value={content}
                    onChange={onContentChanged}
                    disabled = {logged.user.name}
                />
                </Form.Group>
                <Button
              
                    type="button"
                    onClick={onSavePostClicked}
                    // disabled={!canSave} 
                    style={{marginTop:"5px", textAlign:"center", width:"100%"}}
                >{(logged.user.name) ? "You Must Be Logged In" : "Save Post"}</Button>
            </Form>
            </div>
        
        </section>
        </>
    )
}

export default AddPostForm

