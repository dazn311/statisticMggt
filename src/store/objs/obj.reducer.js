import { objData } from './obj.types';

const INITIAL_STATE = {
  curObjAllData: {}, // for user page info
  curObjFilterSender: '',
  curObjFilterOwn: '',
  curObjFilterDateStart: '2021-01-01',
  curObjFilterDateEnd: new Date().toISOString().split('T')[0],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case objData.SET_FILTER_SENDER_FOR_OBJ_CARD_PAGE:
      return {
        ...state,
        curObjFilterSender: action.payload
      };
    case objData.SET_FILTER_OWN_FOR_OBJ_CARD_PAGE:
      return {
        ...state,
        curObjFilterOwn: action.payload
      };
    case objData.SET_OBJ_CURRENT_FOR_OBJ_CARD_PAGE:
      // console.log(' case userData.FETCH_USER_CURRENT_FOR_USER_CARD_DETAILS_PAGE:',action.payload);
      return {
        ...state,
        curObjAllData: action.payload
      };
    case objData.SET_FILTER_DATE_START_FOR_OBJ_CARD_PAGE:
      // console.log(' case userData.FETCH_USER_CURRENT_FOR_USER_CARD_DETAILS_PAGE:',action.payload);
      return {
        ...state,
        curObjFilterDateStart: action.payload
      };
    case objData.SET_FILTER_DATE_END_FOR_OBJ_CARD_PAGE:
      // console.log(' case userData.FETCH_USER_CURRENT_FOR_USER_CARD_DETAILS_PAGE:',action.payload);
      return {
        ...state,
        curObjFilterDateEnd: action.payload
      };
    default:
      return state;
  }
};
 
export default userReducer;
