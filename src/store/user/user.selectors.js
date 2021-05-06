import { createSelector } from 'reselect';

const selectUser = state => state.curUser;
const selectCurUserShort = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  curUser => curUser
);
export const selectCurrentUserShort = createSelector(
  [selectCurUserShort],
  user => user.curUserShort
);
