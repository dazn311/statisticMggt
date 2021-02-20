


import AdminActionTypes,{ FetchData, FetchDataStaticPage } from './adminPanelTrest.types';
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


/// for first page for graphics

export const putDataUsersOnline = (items) => ({
  type: FetchData.GET_USERS_ONLINE_SUCCESS,
  payload: items 
});

export const putDataUsersOfStartDayOnline = (items) => ({ 
  type: FetchData.GET_USERS_ONLINE_START_DAY,
  payload: items 
});

export const putDataUsersOfEndDayOnline = (items) => ({
  type: FetchData.GET_USERS_ONLINE_END_DAY,
  payload: items 
});
 
export const putEventsPointShort = (items) => ({
  type: FetchData.GET_EVENTS_POINT_START,
  payload: items 
});
/////////// -- for Statics page --////////////////////////////////////////////////

export const putEventsForPeriodShort = (items) => ({
  type: FetchData.FETCH_EVENT_TYPE_OF_DATE_FOR_STATISTIC_PAGE,
  payload: items 
});

export const dataStartforFetchEventsForPeriod = (startDate) => ({
  type: FetchData.DATA_START_FOR_FETCH_EVENT_TYPE_OF_DATE_FOR_STATISTIC_PAGE,
  payload: startDate 
});

export const dataEndforFetchEventsForPeriod = (endDate) => ({
  type: FetchData.DATA_END_FOR_FETCH_EVENT_TYPE_OF_DATE_FOR_STATISTIC_PAGE,
  payload: endDate 
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

//////////////////////////////////////////////////


export const setDataUsersOnlineToGraphicToStaticPage = (items) => ({
  type: FetchDataStaticPage.FETCH_USERS_ONLINE_TO_GRAPHIC_TO_STATISTIC_PAGE,
  payload: items 
});

export const setDataNewEventToGraphicToStaticPage = (items) => ({
  type: FetchDataStaticPage.FETCH_NEW_EVENT_TO_GRAPHIC_TO_STATISTIC_PAGE,
  payload: items 
});

export const setDataEndEventToGraphicToStaticPage = (items) => ({
  type: FetchDataStaticPage.FETCH_END_EVENT_TO_GRAPHIC_TO_STATISTIC_PAGE,
  payload: items 
});
export const setDataDenyEventToGraphicToStaticPage = (items) => ({
  type: FetchDataStaticPage.FETCH_DENY_EVENT_TO_GRAPHIC_TO_STATISTIC_PAGE,
  payload: items 
});

export const setDataNewMessageToGraphicToStaticPage = (items) => ({
  type: FetchDataStaticPage.FETCH_NEW_MESSAGE_TO_GRAPHIC_TO_STATISTIC_PAGE,
  payload: items 
});

/////////////////////- TAB 3-//////////////////////////////////// 

export const setDataUsersNewGraphicToStaticPage = (items) => ({
  type: FetchDataStaticPage.FETCH_USERS_NEW_TO_GRAPHIC_TO_STATISTIC_PAGE,
  payload: items 
});

export const setDataUsersDelGraphicToStaticPage = (items) => ({
  type: FetchDataStaticPage.FETCH_USERS_DEL_TO_GRAPHIC_TO_STATISTIC_PAGE,
  payload: items 
});

export const setDataUsersEndGraphicToStaticPage = (items) => ({
  type: FetchDataStaticPage.FETCH_USERS_END_TO_GRAPHIC_TO_STATISTIC_PAGE,
  payload: items 
});

export const setDataUsersBlockGraphicToStaticPage = (items) => ({
  type: FetchDataStaticPage.FETCH_USERS_BLOCK_TO_GRAPHIC_TO_STATISTIC_PAGE,
  payload: items 
});
// for static page, tab3
export const setNewOGHGraphicToStaticPage = (items) => ({
  type: FetchDataStaticPage.FETCH_AMOUNT_NEW_OGH_FOR_GRAPHIC_TO_STATISTIC_PAGE,
  payload: items 
});

/////////////////////////////////////////////////
const rootURL = 'https://ismggt.ru'; 
const urlUserOnline = rootURL + '/query/users/online';
const urlUserOnlineByInterval = rootURL + '/query/users/online/byinterval'; 
const urlQueryAmount = rootURL + '/query/events/amount'; 
const urlQueryObjTotal = rootURL + '/query/objects/total'; 
//'https://ismggt.ru/query/objects/total'

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



 

// Для верхней таблицы "graphics" пользователей он-лайн
export const fetchAmountUsersForGraphicsAsync = (startDate='2021-02-12T08:00:00.000Z',endDate='2021-02-12T19:02:00.000Z')  => {
  
  return (dispatch) => {
    // dispatch(putDataUsersOnlineStart());
    // https://ismggt.ru/
    // postData('https://ismggt.ru/query/users/online', { startDate: startDate, endDate: endDate})
    postData(urlUserOnline, { startDate: startDate, endDate: endDate})
      .then((users) => {
        // let chartData = users.data.chartData.slice(7,17);
        // console.log('query/users/online', users); // JSON data parsed by `response.json()` call
        dispatch(putDataUsersOnline(users));
      })
      .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  }; 
};












// Для верхней таблицы "graphics" пользователей он-лайн
// putDataUsersOfStartDayOnline  putDataUsersOfEndDayOnline
export const fetchAmountUsersOfStartDayGraphicsAsync = (startDate='2021-02-16T00:00:00.000Z',endDate='2021-02-12T07:02:00.000Z')  => {
  return (dispatch) => {
    postData(urlUserOnlineByInterval, { startDate: startDate, endDate: endDate})
      .then((users) => {
        // let chartData = users.data.chartData.slice(7,17);
        // console.log('query/users/online byinterval  start day', users); // JSON data parsed by `response.json()` call
        dispatch(putDataUsersOfStartDayOnline(users));
      })
      .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};

// fetchAmountUsersOfStartDayGraphicsAsync fetchAmountUsersOfEndDayGraphicsAsync
export const fetchAmountUsersOfEndDayGraphicsAsync = (startDate='2021-02-12T08:00:00.000Z',endDate='2021-02-12T18:00:00.000Z')  => {
  // console.log('fetchAmountUsersOfEndDayGraphicsAsync',startDate, endDate);

  return (dispatch) => {
    postData(urlUserOnlineByInterval, { startDate: startDate, endDate: endDate})
      .then((users) => {
        // let chartData = users.data.chartData.slice(7,17);
        // console.log('query/users/online byinterval end day', users); // JSON data parsed by `response.json()` call
        dispatch(putDataUsersOfEndDayOnline(users));
      })
      .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};



// Для верхней таблицы "graphics" новые события
export const fetchAmountNewEventsForGraphicAsync = (startDate='2021-02-12T08:00:00.000Z',endDate='2021-02-12T18:00:00.000Z') => {
  
  return (dispatch) => {
    // postData('https://ismggt.ru/query/events/amount', {type: 'new_rec', startDate: '2021-02-15T01:00:00.000Z'})
    postData(urlQueryAmount, {type: 'new_rec', startDate: startDate, endDate: endDate})
      .then((eventss) => {
        // console.log('events new_rec',eventss);
        dispatch(putNewEventsGraphic(eventss)); 
      })
      .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};
// Для верхней таблицы "graphics" завершенные события
export const fetchAmountEndEventsForGraphicAsync = (startDate='2021-02-12T08:00:00.000Z',endDate='2021-02-12T18:00:00.000Z') => {
  return (dispatch) => {
    postData(urlQueryAmount, {type: 'done_rec', startDate: startDate, endDate: endDate})
      .then((eventss) => {
        // console.log('events done_rec',eventss);
        dispatch(putEndEventsGraphic(eventss));
      })
      .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};

// Для нежней таблицы "Количество ОГХ"
export const fetchAmountOGHForDashboardAsync = () => {
  return (dispatch) => {
    postData(urlQueryObjTotal, {})
      .then((objOGH) => {
        // console.log('objOGH',objOGH);
        dispatch(putOGH(objOGH));
      })
      .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};


export const fetchAmountOGHToDayAsync = () => {

  var start0 = moment().startOf('day').toISOString();
  // console.log('start to query/objects/total',start0);

  return (dispatch) => {
    postData('https://ismggt.ru/query/objects/total', {startDate: start0})
      .then((objTodayOGH ) => {
        // console.log('objTodayOGH (query/objects/total)',objTodayOGH);
        dispatch(putOGHforToDay(objTodayOGH));
      })
      .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};


export const fetchAmountOGHToThreeDaysAsync = () => {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 3); 
  
  return (dispatch) => {
    postData('https://ismggt.ru/query/objects/total', {startDate: startDate})
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
  // console.log('startDate',startDate);


  return (dispatch) => {
    postData('https://ismggt.ru/query/objects/total', {startDate: startDate.toISOString()})
      .then((objWeekOGH) => {
        // console.log('objWeekOGH',objWeekOGH);
        dispatch(putOGHforWeek(objWeekOGH));
      })
      .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};


// Для нежней таблицы "новых событий"
export const fetchEventsPointShortAsync = () => {
  return (dispatch) => {
    postData('https://ismggt.ru/query/events/last/short', {limit:20})
      .then((eventss) => {
        dispatch(putEventsPointShort(eventss));
      })
      .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};

// Для страницы отчета о "новых событиях"
export const fetchEventForPeriodAsync = ({startDate, endDate}) => {

  if(!startDate){
    startDate = '2021-02-04T00-00-00.000Z';
  }
  if(!startDate){
    endDate = '2021-02-11T22-00-00.000Z';
  }
  return (dispatch) => {
    // console.log('startDate, endDate',startDate, endDate);
    postData('https://ismggt.ru/query/events/last/short', {limit:20, startDate:startDate, endDate:endDate})
      .then((eventss) => {
        // console.log('postData then, eventss',eventss);
        dispatch(putEventsForPeriodShort(eventss));
      })
      .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};


// Для страницы отчетов "новых событий"

export const fetchEventFromPeriodAsync = (start, end) => {
  return (dispatch) => { 
    const startDate = start;
    const endDate = end;
    postData('https://ismggt.ru/query/events/last/short', {limit:20, startDate:startDate, endDate:endDate}) //'2021-02-03T22:00:00.000Z'
      .then((eventss) => {
        // console.log('postData then, eventss',eventss);
        dispatch(putEventsForPeriodShort(eventss));
      })
      .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};


//fetchAllEventsGraphicAsynctype(type,startDate,endDate)
//fetchAllUsersGraphicAsync(startDate,endDate)

// Для страницы 2 отчетов "новых событий"
export const fetchAllEventsGraphicAsync = (type='new_rec',startDate='2021-02-12T08:00:00.000Z',endDate='2021-02-15T18:00:00.000Z') => {
  return (dispatch) => {
    postData('https://ismggt.ru/query/events/amount', {type: type, startDate: startDate, endDate: endDate})
      .then((eventss) => {
        // console.log('events all',eventss);
        if (type === 'new_rec'){
          dispatch(setDataNewEventToGraphicToStaticPage(eventss));
          
        }else if (type === 'done_rec'){
          dispatch(setDataEndEventToGraphicToStaticPage(eventss));
          
        }else if (type === 'deny_rec'){
          dispatch(setDataDenyEventToGraphicToStaticPage(eventss));
          
        }else if (type === 'new_msg'){
          dispatch(setDataNewMessageToGraphicToStaticPage(eventss));
          
        }
      })
      .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};





// Для страницы 2 отчетов "новых событий"
export const fetchAllUsersGraphicAsync = (startDate='2021-02-08T08:00:00.000Z',endDate='2021-02-15T18:00:00.000Z')  => {
  return (dispatch) => {
    // dispatch(putDataUsersOnlineStart());
     
    postData('https://ismggt.ru/query/users/online', { startDate: startDate, endDate: endDate})
      .then((users) => {
        // let chartData = users.data.chartData.slice(7,17);
        // console.log('fetchAllUsersGraphicAsync ', users); // JSON data parsed by `response.json()` call
        dispatch(setDataUsersOnlineToGraphicToStaticPage(users));
      })
      .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};


//// setDataUsersNewGraphicToStaticPage setDataUsersDelGraphicToStaticPage setDataUsersEndGraphicToStaticPage setDataUsersBlockGraphicToStaticPage
// Для страницы 2 отчетов "tab 3"
export const fetchUsersThirdTabStaticPageGraphicAsync = (type, startDate='2021-02-08T08:00:00.000Z',endDate='2021-02-15T18:00:00.000Z')  => {
  return (dispatch) => {
    // dispatch(putDataUsersOnlineStart());
     
    postData('https://ismggt.ru/query/events/last/short', {type: type, startDate: startDate, endDate: endDate})
      .then((users) => {
        // let chartData = users.data.chartData.slice(7,17);
        if (type === 'new_user'){
          dispatch(setDataUsersNewGraphicToStaticPage(users));
          
        }else if (type === 'del_user'){
          dispatch(setDataUsersDelGraphicToStaticPage(users));
          
        }else if (type === 'end_user'){
          dispatch(setDataUsersEndGraphicToStaticPage(users));
          
        }else if (type === 'block_user'){
          dispatch(setDataUsersBlockGraphicToStaticPage(users));
          
        }
      })
      .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};

 
//// 
// Для страницы 2 отчетов "tab 3"
export const fetchNewOGHThirdTabStaticPageGraphicAsync = (type, startDate='2021-01-08T08:00:00.000Z',endDate='2021-02-19T18:00:00.000Z')  => {
  return (dispatch) => {
    // dispatch(putDataUsersOnlineStart());
    // console.log('fetchNewOGHThirdTabStaticPageGraphicAsync start');
    postData('https://ismggt.ru/query/objects/total', {startDate: startDate, endDate: endDate})
      .then((users) => {
        // let chartData = users.data.chartData.slice(7,17);
        // console.log('fetchNewOGHThirdTabStaticPageGraphicAsync ',users);
        if (type === 'new_obj'){
          dispatch(setNewOGHGraphicToStaticPage(users));
          
        }else if (type === 'del_user2'){
          dispatch(setDataUsersDelGraphicToStaticPage(users));
          
        }else if (type === 'end_user2'){
          dispatch(setDataUsersEndGraphicToStaticPage(users));
          
        }else if (type === 'block_user2'){
          dispatch(setDataUsersBlockGraphicToStaticPage(users));
          
        }
      })
      .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};





  

