import { createSlice, createSelector, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';
import { sub } from 'date-fns';
import axios from 'axios';

const POSTS_URL = 'http://localhost:8081/posts';
const POSTS_FIL = 'http://localhost:8081/filter';

const postsAdapter = createEntityAdapter({
  selectId: (e) => e.idposts,
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = postsAdapter.getInitialState({
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  count: 0,
});

// Fetch all posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(`${POSTS_URL}`);
  return response.data;
});

// Fetch posts based on a filter (e.g., state)
export const fetchCertainPosts = createAsyncThunk('posts/fetchCertainPosts', async (state) => {
  const response = await axios.get(`${POSTS_URL}?state=${state}`);
  return response.data;
});

 
export const addNewPost = createAsyncThunk('posts/addNewPost', async ({ title, content, name, city, state, userId, date }) => {
    const response = await axios.post(
      `${POSTS_URL}/addpost`,
      { title, content, name, city, state, userId, date },
      { withCredentials: true }   
    );
    return response.data;  
  });

// Update a post
export const updatePost = createAsyncThunk('posts/updatePost', async (initialPost, { rejectWithValue }) => {
  const { id } = initialPost;
  try {
    const response = await axios.put(`${POSTS_URL}/${id}`, initialPost);
    return response.data; // Return the updated post data
  } catch (err) {
    return rejectWithValue('Failed to update post'); // Return error message in case of failure
  }
});

// Delete a post
export const deletePost = createAsyncThunk('posts/deletePost', async (initialPost) => {
  const { id } = initialPost;
  const response = await axios.delete(`${POSTS_URL}/${id}`);
  if (response?.status === 200) {
    return initialPost; // Return the post to remove from state
  }
  return `${response?.status}: ${response?.statusText}`; // Return error status text if delete fails
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // Action to add a reaction to a post
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.entities[postId];
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
    increaseCount(state, action) {
      state.count = state.count + 1;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const loadedPosts = action.payload.map((post, index) => {
          post.date = sub(new Date(), { minutes: index + 1 }).toISOString();
          post.reactions = { thumbsUp: 0, heart: 0 };
          return post;
        });
        postsAdapter.upsertMany(state, loadedPosts); // Upsert posts into the state
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        const newPost = action.payload;
        newPost.date = new Date().toISOString();
        newPost.reactions = { thumbsUp: 0, heart: 0 };
        postsAdapter.addOne(state, newPost); // Add the new post to the state
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log('Update could not complete');
          return;
        }
        action.payload.date = new Date().toISOString();
        postsAdapter.upsertOne(state, action.payload); // Upsert the updated post
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log('Delete could not complete');
          return;
        }
        const { id } = action.payload;
        postsAdapter.removeOne(state, id); // Remove the post from the state
      });
  },
});

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state) => state.posts);

export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;
export const getCount = (state) => state.posts.count;

// Selector to get posts by userId
export const selectPostsByUser = createSelector(
  [selectAllPosts, (state, userId) => userId],
  (posts, userId) => posts.filter((post) => post.userId === userId)
);

export const { increaseCount, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
