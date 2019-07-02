import { createSelector } from 'reselect';

const getTodos = (state) => state.todo.todos;
const getTodo = (state) => state.todo.todo;
const getTodosError = (state) => state.todo.error;

export const getTodosState = createSelector([ getTodos ], (todos) => todos);
export const getTodoState = createSelector([ getTodo ], (todo) => todo);
export const getTodosErrorState = createSelector([ getTodosError ], (todosError) => todosError);