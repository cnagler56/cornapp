import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectPostById } from "../Slices/postsSlice";
import SinglePostPage from './SinglePostPage'
import {ItemWrapper} from '../styledComponents'

const PostsExcerpts = ({ postId }) => {
    const post = useSelector(state => selectPostById(state, postId))
  

    return (
        <ItemWrapper>
            <span>
            <h4>{post.title}</h4>           
            </span>
            <p className="excerpt">{post.content.substring(0, 150)}...</p>
            <div className="postCredit">
                <span>
            <PostAuthor userId={post.userId} />
   
                </span>
                <p>{post.city} {post.state}</p>
                {/* <TimeAgo timestamp={post.date} /> */}
                <span>
                <p>{post.time}</p>
                <Link to={`post/${post.id}`}>View Post</Link>
                {/* <Link to={`post/307`}>View Post</Link> */}
                 
                </span>
                
            </div>
            {/* <ReactionButtons post={post} /> */}
        </ItemWrapper>
    )
}
export default PostsExcerpts
