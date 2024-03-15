import {useSelector, useDispatch} from 'react-redux'
import {selectPostIds, selectAllPosts, getPostsError, getPostsStatus} from './postsSlice'
import PostsExcerpts from './PostsExcerpts'
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

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
      <section>
          {content}
      </section>
  )
}
export default PostList