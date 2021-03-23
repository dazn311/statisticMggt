import { UserActionTypes } from './user.types';
// import ORGANIZATIONS_DATA from '../adminPanelTrest/adminPanelTrest.data';

const INITIAL_STATE = {
  // curUser: ORGANIZATIONS_DATA.currentUser
  curUser: ''
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      console.log(' case UserActionTypes.SET_CURRENT_USER:',action.payload);
      return {
        ...state,
        curUser: action.payload
      };
    default:
      return state;
  }
};
 
export default userReducer;
