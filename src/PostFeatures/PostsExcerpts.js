import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

const PostsExcerpts = ({ postId }) => {
    const post = useSelector(state => selectPostById(state, postId))
    

    return (
        <article className="twitter">
            <span>
            <h4>{post.title}</h4>           
            </span>
            <p className="excerpt">{post.body.substring(0, 150)}...</p>
            <div className="postCredit">
                <span>
            <PostAuthor userId={post.userId} />
   
                </span>
                {/* <TimeAgo timestamp={post.date} /> */}
                <span>
                <p>{post.time}</p>
                <Link to={`post/${post.id}`}>View Post</Link>
                </span>
                
            </div>
            {/* <ReactionButtons post={post} /> */}
        </article>
    )
}
export default PostsExcerpts
