export const getAuthStatusState = (state) => state.user.isAuth;
export const getNameState = (state) => state.user.name;
export const getRoleState = (state) => state.user.role;
export const getLoadingStatusOfUserState = (state) => state.user.isLoading;
export const getIsInitialDataFetchingOfUserState = (state) => state.user.isInitialDataFetching;