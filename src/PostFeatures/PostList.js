import {useSelector, useDispatch} from 'react-redux'
import {selectPostIds, selectAllPosts, getPostsError, getPostsStatus} from '../Slices/postsSlice'
import PostsExcerpts from './PostsExcerpts'
import Filter from './Filter'
import {PostWrapper, Box} from'../styledComponents'
import AddPostForm from './AddPostForm'

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
<section className="postpage">
<PostWrapper className='postchild'>
<Filter></Filter>
    <Box>

      <section style={{overflow: "scroll"}}>
          {content}
      </section>
      </Box>
      </PostWrapper>
      <div className="postchild2">
      <AddPostForm />
      </div>
      </section>
      

      </>
  )
}
export default PostList