import AdminActionTypes,{ FetchData } from './adminPanelTrest.types';
// import Moment from 'react-moment';
import moment from 'moment';


export const setCurrentPoint = (item) => ({
  type: AdminActionTypes.SET_CURRENT_POINT,
  payload: item
});

export const putDataUsersOnlineStart = () => ({
  type: FetchData.GET_USERS_ONLINE_START
});
export const putDataUsersOnlineError = (errorMessage) => ({
  type: FetchData.GET_USERS_ONLINE_FAILURE,
  payload: errorMessage
});

export const putDataUsersOnline = (items) => ({
  type: FetchData.GET_USERS_ONLINE_SUCCESS,
  payload: items 
});

export const putEventsPointShort = (items) => ({
  type: FetchData.GET_EVENTS_POINT_START,
  payload: items 
});
/////////// -- for Graphics --////////////////////////////////////////////////
export const putNewEventsGraphic = (items) => ({
  type: FetchData.GET_NEW_EVENTS_FOR_GRAPHIC_START,
  payload: items 
});

export const putEndEventsGraphic = (items) => ({
  type: FetchData.GET_END_EVENTS_FOR_GRAPHIC_START, //amountEndEventGraph
  payload: items 
});
///////////////////////////////////////////////////////////

export const putOGH = (items) => ({
  type: FetchData.FETCH_COUNT_OGH_FOR_DASHBOARD, //amountEndEventGraph
  payload: items 
});

export const putOGHforToDay = (items) => ({
  type: FetchData.FETCH_AMOUNT_OGH_TO_DAY_FOR_DASHBOARD, //amountEndEventGraph
  payload: items 
});
export const putOGHforWeek = (items) => ({
  type: FetchData.FETCH_AMOUNT_OGH_TO_WEEK_FOR_DASHBOARD, //amountEndEventGraph
  payload: items 
});
export const putOGHforTreeDays = (items) => ({
  type: FetchData.FETCH_AMOUNT_OGH_TO_TREE_DAYS_FOR_DASHBOARD, //amountEndEventGraph
  payload: items 
});
 

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}



// Для нежней таблицы "новых событий"
export const fetchEventsPointShortAsync = () => {
  return (dispatch) => {
    postData('http://176.53.160.74:1000/query/events/last/short', {limit:20})
      .then((eventss) => {
        dispatch(putEventsPointShort(eventss));
      })
      .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};

// Для нежней таблицы "graphics"
export const fetchAmountUsersForGraphicsAsync = () => {
  return (dispatch) => {
    dispatch(putDataUsersOnlineStart());
    
    postData('http://176.53.160.74:1000/query/users/online', {})
      .then((users) => {
        // let chartData = users.data.chartData.slice(7,17);
        console.log('query/users/online', users); // JSON data parsed by `response.json()` call
        dispatch(putDataUsersOnline(users));
      })
      .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};

export const fetchAmountNewEventsForGraphicAsync = () => {
  return (dispatch) => {
    postData('http://176.53.160.74:1000/query/events/amount', {type: 'new_rec'})
      .then((eventss) => {
        // console.log('eventss',eventss);
        dispatch(putNewEventsGraphic(eventss));
      })
      .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};

export const fetchAmountEndEventsForGraphicAsync = () => {
  return (dispatch) => {
    postData('http://176.53.160.74:1000/query/events/amount', {type: 'done_rec'})
      .then((eventss) => {
        // console.log('eventss',eventss);
        dispatch(putEndEventsGraphic(eventss));
      })
      .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};

// Для нежней таблицы "Количество ОГХ"
export const fetchAmountOGHForDashboardAsync = () => {
  return (dispatch) => {
    postData('http://176.53.160.74:1000/query/objects/total', {})
      .then((objOGH) => {
        // console.log('objOGH',objOGH);
        dispatch(putOGH(objOGH));
      })
      .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};

// const parseISOString = (s)=> {
//   var b = s.split(/\D+/);
//   return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
// }

export const fetchAmountOGHToDayAsync = () => {
  // const startDate = new Date();//.toISOString();
  // startDate.setHours(0,0,0,0);
  // startDate.toISOString();
  // console.log('startDate',startDate); 

  // var start0 = moment().startOf('day').toISOString();
  var start0 = moment().startOf('day').toISOString();
  console.log('start0',start0);


  var start = new Date('2021-02-09 23:50').toISOString();

  // start.toISOString();
  //adminPanelTrest.actions.js:151 start 
  console.log('start',start);

  // var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
  // var localISOTime = (new Date(Date.now() + tzoffset)).toISOString().slice(0, -1);
  // var localISOTime = (new Date(Date.now() + tzoffset)).toISOString().slice(0, -1);
  // console.log('localISOTime',localISOTime);

  return (dispatch) => {
    postData('http://176.53.160.74:1000/query/objects/total', {startDate: start0})
      .then((objTodayOGH ) => {
        console.log('objTodayOGH (query/objects/total)',objTodayOGH);
        dispatch(putOGHforToDay(objTodayOGH));
      })
      .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};


export const fetchAmountOGHToThreeDaysAsync = () => {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 3); 
  
  // startDate.toISOString();
  // console.log('startDate',startDate);
  return (dispatch) => {
    postData('http://176.53.160.74:1000/query/objects/total', {startDate: startDate})
      .then((objMonthOGH) => {
        // console.log('objTreeDayshOGH',objMonthOGH);
        dispatch(putOGHforTreeDays(objMonthOGH));
      })
      .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};

export const fetchAmountOGHToWeekAsync = () => {
  const startDate = new Date();
  // console.log(startDate.getDate() - 7);
  startDate.setDate(startDate.getDate() - 7); 
  // console.log(startDate);


  return (dispatch) => {
    postData('http://176.53.160.74:1000/query/objects/total', {startDate: startDate})
      .then((objWeekOGH) => {
        // console.log('objWeekOGH',objWeekOGH);
        dispatch(putOGHforWeek(objWeekOGH));
      })
      .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};




