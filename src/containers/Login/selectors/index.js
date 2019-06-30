import { createSelector } from 'reselect';

const getAuthStatus = (state) => state.user.isAuth;
const getName = (state) => state.user.name;
const getRole = (state) => state.user.role;
const getLoadingStatusOfUser = (state) => state.user.isLoading;
const getIsInitialDataFetchingOfUser = (state) => state.user.isInitialDataFetching;

export const getAuthStatusState = createSelector([ getAuthStatus ], (isAuth) => isAuth);
export const getNameState = createSelector([ getName ], (name) => name);
export const getRoleState = createSelector([ getRole ], (role) => role);
export const getLoadingStatusOfUserState = createSelector([ getLoadingStatusOfUser ], (loadingUser) => loadingUser);
export const getIsInitialDataFetchingOfUserState = createSelector([ getIsInitialDataFetchingOfUser ], (isInitialDataFetching) => isInitialDataFetching);