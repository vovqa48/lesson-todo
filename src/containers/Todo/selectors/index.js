import { createSelector } from 'reselect';

const getTodos = (state) => state.todo.todos;
const getTodosError = (state) => state.todo.error;

export const getTodosState = createSelector([ getTodos ], (todos) => todos);
export const getTodosErrorState = createSelector([ getTodosError ], (todosError) => todosError);