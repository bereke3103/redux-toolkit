import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePostById } from '../features/post/postSlice';

const PostItem = (props) => {
  const dispatch = useDispatch();

  const todoItem = (id) => {
    dispatch(deletePostById(id));
  };

  return (
    <div
      onClick={() => todoItem(props.id)}
      className="flex w-full bg-indigo-500 hover:bg-indigo-300 transition-all py-1 px-2 text-white rounded-sm cursor-pointer mt-4"
    >
      {props.title}
    </div>
  );
};

export default PostItem;
