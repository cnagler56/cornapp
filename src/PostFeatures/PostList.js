import {useSelector, useDispatch} from 'react-redux'
import {selectPostIds, getPostsError, getPostsStatus} from './postsSlice'
// import AddPostForm from './AddPostForm'
// import PostAuthor from './PostAuthor'
// import ReactionButtons from './ReactionButtons'
// import {useEffect} from 'react'
import PostsExcerpts from './PostsExcerpts'

const PostList = () => {
  const orderedPostIds = useSelector(selectPostIds)
  const error = useSelector(getPostsError)
  const postsStatus = useSelector(getPostsStatus)
console.log(orderedPostIds)
let content;

// 
  content = orderedPostIds.map(postId => <PostsExcerpts key={postId} postId={postId} />)
// } else if (postsStatus === 'failed') {
//   content = <p>{error}</p>
// }
  return (
  <>
        <section className="contain">
            {content}
        </section>
    </>
  )
}
export default PostList