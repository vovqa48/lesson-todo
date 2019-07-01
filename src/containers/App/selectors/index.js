import { createSelector } from 'reselect';

const getLoadingStatus = (state) => state.application.isLoading
const getHistory = (state) => state.router

export const getLoadingStatusState = createSelector([ getLoadingStatus ], (loading) => loading)
export const getHistoryState = createSelector([ getHistory ], (history) => history)