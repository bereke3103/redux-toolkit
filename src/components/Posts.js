import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostItem from './PostItem';
import { getPosts } from '../features/post/postSlice';

const Posts = () => {
  const posts = useSelector((state) => state.posts.posts);

  const dispatch = useDispatch();
  const getAllPosts = () => {
    dispatch(getPosts());
  };
  return (
    <div>
      <button
        onClick={getAllPosts}
        type="submit"
        className="bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm"
      >
        Get posts
      </button>

      {posts?.map((p) => (
        <PostItem key={p.id} {...p} />
      ))}
    </div>
  );
};

export default Posts;
