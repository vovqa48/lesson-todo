import { createSelector } from 'reselect';

const getUsers = (state) => state.users.users
const getUsersError = (state) => state.users.error

export const getUsersState = createSelector([ getUsers ], (users) => users)
export const getUsersErrorState = createSelector([ getUsersError ], (usersError) => usersError)