import { UserActionTypes, userData } from './user.types'; 
import {FetchData} from '../adminPanelTrest/adminPanelTrest.types';
import axios from "axios";

export const putDataUsersOnlineError = (errorMessage) => ({
  type: FetchData.GET_USERS_ONLINE_FAILURE,
  payload: errorMessage
});

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
}); 
///// for User Card Page 050521 //////////////////////////


export const setCurUserShort = user => ({
  type: userData.SET_USER_SHORT_CUR_FOR_USER_CARD_PAGE,
  payload: user
});

export const setCurUserAllData = user => ({
  type: userData.FETCH_USER_CURRENT_FOR_USER_CARD_DETAILS_PAGE,
  payload: user
});

export const setCurUserStatData = user => ({
  type: userData.FETCH_USER_STATS_FOR_USER_CARD_DETAILS_PAGE,
  payload: user
});

////////////////  for User Card Details Page Tab2 Active 210521 ///////////////////////////////////////

export const setErrorFetchUserData = erStr => ({
  type: userData.ERROR_FETCH_USER_DATA_CUR_FOR_USER_DETAILS_PAGE,
  payload: erStr
});

export const setRecTypeActive = type => ({
  type: userData.FILTER_USER_REC_TYPE_FOR_USER_ACTIVE_CARD_DETAILS_PAGE,
  payload: type
});

export const setFilterFieldObjActive = txt => ({
  type: userData.FILTER_USER_FIELD_FOR_USER_ACTIVE_CARD_DETAILS_PAGE,
  payload: txt
});

export const setFilterDateStartActive = date => ({
  type: userData.FILTER_USER_DATE_START_FOR_USER_ACTIVE_CARD_DETAILS_PAGE,
  payload: date
});

export const setFilterDateEndActive = date => ({
  type: userData.FILTER_USER_DATE_END_FOR_USER_ACTIVE_CARD_DETAILS_PAGE,
  payload: date
});

/////////////// for User Details Card Tab2 Actives 210521 ///////////////////////////////////

export const setErrorFetchUserDataAsync = (data)  => {
  // console.log('👉 setCurUserShortAsync start:' );
  return (dispatch) => { 
          dispatch(setErrorFetchUserData(data));
  };
};

export const setRecTypeActiveAsync = (data)  => {
  // console.log('👉 setCurUserShortAsync start:' );
  return (dispatch) => {
          dispatch(setRecTypeActive(data));
  };
};

export const setFilterFieldObjActiveAsync = (data)  => {
  // console.log('👉 setCurUserShortAsync start:' );
  return (dispatch) => {
    dispatch(setFilterFieldObjActive(data));
  };
};

export const setFilterDateStartActiveAsync = (data)  => {
  // console.log('👉 setCurUserShortAsync start:' );
  return (dispatch) => {
          dispatch(setFilterDateStartActive(data));
  };
};


export const setFilterDateEndActiveAsync = (data)  => {
  // console.log('👉 setCurUserShortAsync start:' );
  return (dispatch) => {
          dispatch(setFilterDateEndActive(data));
  };
};

/////////////// for User Card Page 050521 ///////////////////////////////////
export const setCurUserShortAsync = (data)  => {
  // console.log('👉 setCurUserShortAsync start:' );
  return (dispatch) => {
          dispatch(setCurUserShort(data));
  };
};

/////////////////////////

async function postData(url = '', userID = '') {
  try {
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    const response = await axios.post(url, 
      { userID: userID },
      {'Content-Type': 'application/x-www-form-urlencoded', 'mode': 'cors'});
    return response.data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
  
  return  'demo'; // parses JSON response into native JavaScript objects
}

// fetch for App.js get logined user in this app
export const fetchCurrentUserAsync = (id)  => {
  // console.log('👉 fetchCurrentUserAsync start:' );
  // return (dispatch) => {
  //   postData('http://localhost:3003/api/users', {'id':id})
  //     .then((user) => {
  //         dispatch(setCurrentUser(user.name))
  //       })
  //     .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  // };
};

// fetch for App.js get logined user in this app
// export const fetchCurrentUserAllDataAsync = (id)  => {
//   console.log('👉 fetchCurrentUserAllDataAsync start:' );
//   return (dispatch) => {
//     postData('http://localhost:3004/api/users', {'id':id})
//       .then((user) => {
//           dispatch(setCurUserAllData(user))
//         })
//       .catch(error => dispatch(putDataUsersOnlineError(error.message)));
//   };
// };


//290421 UsersPage page - TabOneMenu
export const fetchUserById = (userID)  => {
  // console.log('👉 fetchUserById start:',userID );
  return (dispatch) => {
    postData('https://ismggt.ru/query/user/info', userID,'post') //work
        .then((user) => {
          // console.log('👉 fetchUserById then:',user );
          dispatch(setCurUserAllData(user));
          dispatch(setErrorFetchUserDataAsync(null));
        })
        .catch(error => dispatch(setErrorFetchUserDataAsync(error.message)));
  };
};

//180521 UsersPage page - TabOneMenu
export const fetchUserStatsAsyncLocal = (userId)  => {
  // console.log('👉 fetchUserById start:',userID );
  return (dispatch) => {
    postData('http://localhost:3005/query/user', userId,'post') //work
        .then((userData) => {
          // console.log('👉 fetchUserStatsAsyncLocal then:',userData );
          if (userData === 'demo'){
              dispatch(setErrorFetchUserDataAsync('нет данных с сервера'));
          }else {
              dispatch(setCurUserStatData(userData));
              dispatch(setErrorFetchUserDataAsync(null));
          }

        })
        .catch(error => dispatch(setErrorFetchUserDataAsync(error.message)));
  };
};

//290421 UsersPage page - TabOneMenu
export const updateCurUserFullData = (userData)  => {
  // console.log('👉 updateCurUserFullData start:',userData );
  return (dispatch) => {
          dispatch(setCurUserAllData(userData));
  };
};





  
// async function postData2(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     // mode: 'cors', // no-cors, *cors, same-origin
//     mode: 'no-cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type':'application/x-www-form-urlencoded'
//       // 'Content-Type': 'application/json'

//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *client
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   // let text = await response.json();
//   // console.log('fetchCurrentUserAsync text',text);
//   // let json = await text.json();
//   // console.log('fetchCurrentUserAsync json',json);
//   // return  await response.json(); // parses JSON response into native JavaScript objects
//   return  response; // parses JSON response into native JavaScript objects
// }
 


// Для страницы 2 отчетов "tab 3"

 







// Для страницы 2 отчетов "tab 3"
export const fetchCurrentUserAsyncOld = (id)  => {
  
  // return (dispatch) => {
  //   // postData(`http://localhost:3003/api/users/${id}`, {id:id})
  //   console.log('fetchCurrentUserAsync start',id);
  //   postData('http://localhost:3003/api/users', {'id':id})
  //     .then((user) => {
  //       return user.text();
  //       // console.log('fetchCurrentUserAsync user',js);
  //         // dispatch(setCurrentUser(user.name))
  //       })
  //       .then(data => dispatch(setCurrentUser(data.name)))
  //     .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  // };
};
