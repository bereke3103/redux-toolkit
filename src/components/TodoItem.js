import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleted } from '../features/todo/todoSlice';
import { removeTodo } from '../features/todo/todoSlice';

const TodoItem = (props) => {
  const dispatch = useDispatch();

  const toggleTodoCompleted = (id) => {
    dispatch(toggleCompleted(id));
  };

  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="flex justify-between items-center my-2">
      <div
        onClick={() => toggleTodoCompleted(props.id)}
        className="text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400"
      >
        Complete
      </div>
      <div
        className={`text-sm ${
          props.completed ? 'line-through font-medium text-lime-400' : ''
        }`}
      >
        {props.todo}
      </div>
      <div
        onClick={() => removeTodoHandler(props.id)}
        className="text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer"
      >
        Delete
      </div>
    </div>
  );
};

export default TodoItem;
