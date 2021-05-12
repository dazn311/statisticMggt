import { UserActionTypes, userData } from './user.types';
// import ORGANIZATIONS_DATA from '../adminPanelTrest/adminPanelTrest.data';
import USERS_DATA from './userPage.data';

const INITIAL_STATE = {
  curUserAllData: {}, // for user page info
  curUserShort: USERS_DATA.curUserShort , // for user page info
  curUser: USERS_DATA.curUser // in login
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      console.log(' case UserActionTypes.SET_CURRENT_USER:',action.payload);
      return {
        ...state,
        curUser: action.payload
      };
    case userData.SET_USER_SHORT_CUR_FOR_USER_CARD_PAGE:
      console.log(' case userData.SET_USER_SHORT_CUR_FOR_USER_CARD_PAGE:',action.payload);
      return {
        ...state,
        curUserShort: action.payload
      };
    case userData.FETCH_USER_CURRENT_FOR_USER_CARD_DETAILS_PAGE:
      console.log(' case userData.FETCH_USER_CURRENT_FOR_USER_CARD_DETAILS_PAGE:',action.payload);
      return {
        ...state,
        curUserAllData: action.payload
      };
    default:
      return state;
  }
};
 
export default userReducer;
