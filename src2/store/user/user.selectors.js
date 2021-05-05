import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  curUser => curUser
);

export const selectActiveDataUser = createSelector(
  [selectUser],
  user => user.activeDataUser
);
