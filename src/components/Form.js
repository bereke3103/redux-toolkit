import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addTodos } from '../features/todo/todoSlice';

const Form = () => {
  const [todoValue, setTodoValue] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    const newTodo = {
      id: v4(),
      todo: todoValue,
      completed: false,
    };
    dispatch(addTodos(newTodo));
    setTodoValue('');
  };

  return (
    <form className="w-full flex" onSubmit={(e) => e.preventDefault()}>
      <input
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        type="text"
        placeholder="Type something..."
        className="w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm"
      />
      <button
        type="submit"
        onClick={addTodoHandler}
        className="shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
