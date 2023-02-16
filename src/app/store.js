import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/counter/Todo';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
