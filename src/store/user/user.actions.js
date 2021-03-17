import { UserActionTypes } from './user.types';
import { FetchData } from '../adminPanelTrest/adminPanelTrest.types';
import axios from "axios";

export const putDataUsersOnlineError = (errorMessage) => ({
  type: FetchData.GET_USERS_ONLINE_FAILURE,
  payload: errorMessage
});

//UserActionTypes.SET_CURRENT_USER
export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

  

async function postData(url = '', data = {}) {
    
  try {
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    const response = await axios.post(url, 
      { data: data },
      {'Content-Type': 'application/x-www-form-urlencoded', 'mode': 'no-cors'});

    return response.data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
  }
  
  return  'demo'; // parses JSON response into native JavaScript objects
}

export const fetchCurrentUserAsync = (id)  => {
  console.log('👉 fetchCurrentUserAsync start:' );
  // return (dispatch) => {
  //   postData('http://localhost:3003/api/users', {'id':id})
  //     .then((user) => {
  //         dispatch(setCurrentUser(user.name))
  //       })
  //     .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  // };
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
