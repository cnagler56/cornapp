

export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;
export const getCount = (state) => state.posts.count;

export const getCornYields = state => state.yields;
// export const getAcreage = state => state.acres;

export const getEstimates = state => state.cornguess
export const getLoggedIn = state => state.logged
export const getUSDA = state => state.usda