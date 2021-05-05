import { createSelector } from 'reselect';

const selectUser = state => state.curUser;

export const selectCurrentUser = createSelector(
  [selectUser],
  curUser => curUser
);
