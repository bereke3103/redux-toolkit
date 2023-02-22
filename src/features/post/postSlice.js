import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  posts: [],
};

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch(setPosts(res.data));
  }
);

export const deletePostById = createAsyncThunk(
  'posts/deletePostById',
  async (id, { rejectWithValue, dispatch }) => {
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    dispatch(deletePost(id));
  }
);

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id != action.payload);
    },
  },
  extraReducers: {
    [getPosts.pending]: () => console.log('pending'),
    [getPosts.fulfilled]: () => console.log('fullfiend'),
    [getPosts.rejected]: () => console.log('rejected'),
  },
});

export const { setPosts, deletePost } = postSlice.actions;
export default postSlice.reducer;
