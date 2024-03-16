import {useSelector, useDispatch} from 'react-redux'
import {selectPostIds, selectAllPosts, getPostsError, getPostsStatus} from './postsSlice'
import PostsExcerpts from './PostsExcerpts'
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Form, Button } from "react-bootstrap";
import Filter from './Filter'
import Postlist from '../Postlist.css'



const PostList = () => {

  const orderedPostIds = useSelector(selectPostIds)
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (postStatus === 'loading') {
      content = <p>"Loading..."</p>;
  } else if (postStatus === 'succeeded') {
      content = orderedPostIds.map(postId => <PostsExcerpts key={postId} postId={postId} />)
  } else if (postStatus === 'failed') {
      content = <p>{error}</p>;
  }

  return (
<>
<Filter></Filter>
    <main style={{height: '100%', width:'100%', border:'2px solid red'}}>

      <section style={{overflow: "scroll", maxHeight: "23em"}}>
          {content}
      </section>
      </main>
      </>
  )
}
export default PostList