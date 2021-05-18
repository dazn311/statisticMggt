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

export const selectCurrentUserAllData = createSelector(
  [selectCurUserShort],
  user => user.curUserAllData[0]
);


export const selectUserAllStatsData = createSelector(
  [selectCurUserShort],
  user => user.curUserStatsData
);
