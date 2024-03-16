import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {addNewPost} from './postsSlice'
import {selectAllPosts} from './postsSlice'
import {selectAllUsers} from '../UserFeatures/usersSlice'
import {useNavigate} from 'react-router-dom'
import { Form, Button } from "react-bootstrap";

const AddPostForm = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    const navigate = useNavigate()
    const users = useSelector(selectAllUsers)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const canSave = [title, content].every(Boolean) && addRequestStatus === 'idle'

    const onSavePostClicked = () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending')
                // dispatch(addNewPost({ title, body: content})).unwrap()
                dispatch(addNewPost( title, content))

                setTitle('')
                setContent('')
                // setUserId('')
                navigate('/')
            } catch (err) {
                console.error('Failed to save the post', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }

    }

//     const usersOptions = users.map(user => {
//         <option key={user.id} value={user.id}>
//             {user.name}
//         </option>
// })

    return (
        <>
         <h2 ></h2>
        <section className="contain">
           
           <div>
            <Form style={{width:"50%", height:"50%"}}>
                <Form.Group>
                <label htmlFor="postTitle" className='adds'>Post Type</label>
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
                {/* <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {/* {usersOptions} 
                 </select> */} 
                 <Form.Group>
                <label htmlFor="postContent"  className='adds'>Content</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    className="postTitle"
                    value={content}
                    onChange={onContentChanged}
                />
                </Form.Group>
                <Button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Save Post</Button>
            </Form>
            </div>
        </section>
        </>
    )
}

export default AddPostForm

