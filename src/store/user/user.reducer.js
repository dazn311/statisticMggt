import { UserActionTypes } from './user.types';
import data from '../adminPanelTrest/adminPanelTrest.data';

const INITIAL_STATE = {
  curUser: data.currentUser
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        curUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
