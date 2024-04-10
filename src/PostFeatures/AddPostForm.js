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
        const name = logged.firstName + " " + logged.lastName
        const city = logged.city
        console.log(city)
        
        const time = '12/24/2022'
        const state = logged.state
        const userId = logged.userId
        if (canSave) {
            try {
                setAddRequestStatus('pending')
                console.log(city)
                dispatch(addNewPost( {title, content, time, name, city, state, userId}))

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
                />
                </Form.Group>
                <Button
              
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave} 
                    style={{marginTop:"5px", textAlign:"center", width:"100%"}}
                >Save Post</Button>
            </Form>
            </div>
        
        </section>
        </>
    )
}

export default AddPostForm

