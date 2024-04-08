import {useSelector, useDispatch} from 'react-redux'
import {selectPostIds, selectAllPosts, getPostsError, getPostsStatus} from '../Slices/postsSlice'
import PostsExcerpts from './PostsExcerpts'
import Filter from './Filter'
import {PostWrapper, Box} from'../styledComponents'


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
<PostWrapper>
<Filter></Filter>
    <Box>

      <section style={{overflow: "scroll", height: "auto"}}>
          {content}
      </section>
      </Box>
      </PostWrapper>
      </section>
      </>
  )
}
export default PostList