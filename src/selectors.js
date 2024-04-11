

export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;
export const getCount = (state) => state.posts.count;

// export const selectPostsByUser = createSelector(
//     [selectAllPosts, (state, userId) => userId],
//     (posts, userId) => posts.filter(post => post.userId === userId)
// )

export const getCornYields = state => state.yields;
// export const getAcreage = state => state.acres;

export const getEstimates = state => state.cornguess