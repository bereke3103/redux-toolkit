import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleCompleted: (state, action) => {
      const findTodo = state.todos.find((todo) => todo.id == action.payload);
      findTodo.completed = !findTodo.completed;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
  },
});

export const { addTodos, toggleCompleted, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
