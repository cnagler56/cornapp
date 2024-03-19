import {useSelector, useDispatch} from 'react-redux'
import {selectPostIds, selectAllPosts, getPostsError, getPostsStatus} from './postsSlice'
import PostsExcerpts from './PostsExcerpts'
import Filter from './Filter'
import Postlist from '../Postlist.css'
import Display from '../Display'



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
<section>
<div className="container">
<Filter></Filter>
    <main className ="box">

      <section style={{overflow: "scroll", height: "auto"}}>
          {content}
      </section>
      </main>
      </div>
      </section>
      </>
  )
}
export default PostList