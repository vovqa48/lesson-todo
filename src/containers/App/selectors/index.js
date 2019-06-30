import { createSelector } from 'reselect';

const getLoadingStatus = (state) => state.application.isLoading

export const getLoadingStatusState = createSelector([ getLoadingStatus ], (loading) => loading)