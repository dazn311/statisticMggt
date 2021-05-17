
import axios from "axios";


import AdminActionTypes,{ FetchData, FetchDataStaticPage, FetchDataUsersPage, FetchDataObjsPage, FetchDataGenPage, dataUsersPage } from './adminPanelTrest.types';
// import Moment from 'react-moment';
import moment from 'moment';


export const appendUser = (item) => ({
  type: FetchDataUsersPage.DISPATCH_APPEND_USER_TO_LOCAL_DB_FOR_USERS_PAGE,
  payload: item
});

export const  appendAllUsers = (item) => ({
  type: FetchDataUsersPage.FETCH__USERS_TO_LOCAL_DB_FOR_USERS_PAGE,
  payload: item
});


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






//////////////////////////////--for object page --//////////////////////////////////////
// for obj page, tab1

export const setObjForObjsPage = (items) => ({
  type: FetchDataObjsPage.FETCH__OBJS_TO_LOCAL_DB_FOR_OBJS_PAGE,
  // payload: items
  payload: items.data.objects
});

// for obj page, tab1
export const setObjForObjsInfoPage = (items) => ({
  type: FetchDataObjsPage.FETCH__OBJSINFO_TO_LOCAL_DB_FOR_OBJS_PAGE,
  payload: items
});

// for obj page, tab1
export const setObjForObjRectPage = (items) => ({
  type: FetchDataObjsPage.FETCH__OBJS_EVENTS_TO_LOCAL_DB_FOR_OBJS_PAGE,
  payload: items
});

// for obj page, tab1
export const setObjCurrentForDetailPage = (items) => ({
  type: FetchDataObjsPage.FETCH__OBJ_CURRENT_FOR_OBJ_DETAIL_PAGE,
  payload: items
});


///////////////////////////////////////////////////////////////////
// for obj page, tab1
export const setAmountUsersForGenPage = (items) => ({
  type: FetchDataGenPage.FETCH__AMOUNT__USERS_TO_LOCAL_DB_FOR_GEN_PAGE,
  payload: items
});
 
export const setGenStatsPage = (items) => ({
  type: FetchDataGenPage.FETCH__ALL_DATA_FOR_GEN_PAGE,
  payload: items
});
///////////////////////////////////////////////////////////////////
// for users page, tab1
export const setUsersFilterForUsersPage = (items) => ({
  type: dataUsersPage.SET_USER_FILTER_FOR_USERS_PAGE,
  payload: items
});

export const setOrgNameFilterForUsersPage = (items) => ({
  type: dataUsersPage.SET_ORG_NAME_FILTER_FOR_USERS_PAGE,
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
    // console.log('postData -- url,data',url,data)
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




////// Stats Page /////
// Для верхней таблицы "graphics" пользователей он-лайн
//290421 Dashboard page -- LineChartWrap
export const fetchAmountUsersForGraphicsAsync = (startDate='2021-02-12T00:00:00.000Z',endDate)  => { 
  return (dispatch) => { 
    postData(urlUserOnline, { startDate: startDate, endDate: endDate})
        .then((users) => {
          dispatch(putDataUsersOnline(users));
        })
        .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};












// Для верхней таблицы "graphics" пользователей он-лайн
// putDataUsersOfStartDayOnline  putDataUsersOfEndDayOnline
//290421 не используется
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
//290421 не используется
export const fetchAmountUsersOfEndDayGraphicsAsync = (startDate='2021-02-12T08:00:00.000Z',endDate='2021-02-12T18:00:00.000Z')  => {
  return (dispatch) => {
    postData(urlUserOnlineByInterval, { startDate: startDate, endDate: endDate})
        .then((users) => {
          dispatch(putDataUsersOfEndDayOnline(users));
        })
        .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};



// Для верхней таблицы "graphics" новые события  
//290421 Dashboard page
export const fetchAmountNewEventsForGraphicAsync = (startDate='2021-02-12T08:00:00.000Z',endDate) => {

  return (dispatch) => {
    postData(urlQueryAmount, {type: 'new_rec', startDate: startDate, endDate: endDate})
        .then((eventss) => {
          dispatch(putNewEventsGraphic(eventss));
        })
        .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};

// Для верхней таблицы "graphics" завершенные события  
//290421 Dashboard page
export const fetchAmountEndEventsForGraphicAsync = (startDate='2021-02-12T08:00:00.000Z',endDate) => {
  return (dispatch) => {
    postData(urlQueryAmount, {type: 'done_rec', startDate: startDate, endDate: endDate})
        .then((eventss) => {
          dispatch(putEndEventsGraphic(eventss));
        })
        .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};

// Для нежней таблицы "Количество ОГХ" //290421 Dashboard page
export const fetchAmountOGHForDashboardAsync = () => {
  return (dispatch) => {
    postData(urlQueryObjTotal, {})
        .then((objOGH) => {
          dispatch(putOGH(objOGH));
        })
        .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};

 //290421 Dashboard page
export const fetchAmountOGHToDayAsync = () => {

  var start0 = moment().startOf('day').toISOString();
  
  return (dispatch) => {
    postData('https://ismggt.ru/query/objects/total', {startDate: start0})
        .then((objTodayOGH ) => {
          dispatch(putOGHforToDay(objTodayOGH));
        })
        .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};

 //290421 Dashboard page
export const fetchAmountOGHToThreeDaysAsync = () => {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 3);

  return (dispatch) => {
    postData('https://ismggt.ru/query/objects/total', {startDate: startDate})
        .then((objMonthOGH) => {
          dispatch(putOGHforTreeDays(objMonthOGH));
        })
        .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};

//290421 Dashboard page
export const fetchAmountOGHToWeekAsync = () => {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 7);
  

  return (dispatch) => {
    postData('https://ismggt.ru/query/objects/total', {startDate: startDate.toISOString()})
        .then((objWeekOGH) => {
          dispatch(putOGHforWeek(objWeekOGH));
        })
        .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};


// Для нежней таблицы "новых событий" на Главной странице  
// 290421 Dashboard page
export const fetchEventsPointShortAsync = ({limit= 1000, offset= 0}) => {
    // console.log('start fetchEventsPointShortAsync');

  return (dispatch) => {
    postData('https://ismggt.ru/query/events/last/short', {
        limit:limit,
        offset: offset
        // limit:135120
    })
        .then((eventss) => {
          // console.log('fetchEventsPointShortAsync -- events',eventss);
          dispatch(putEventsPointShort(eventss));
        })
        .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};



// Для страницы отчета о "новых событиях" /stats/ogh
//290421 не используется
export const fetchEventForPeriodAsync = ({startDate, endDate}) => {

  if(!startDate){
    return false;
  }
  if(!startDate){
    return false;
  }
  return (dispatch) => {
    postData('https://ismggt.ru/query/events/last/short', {limit:11160, startDate:startDate, endDate:endDate})
        .then((eventss) => {
          dispatch(putEventsForPeriodShort(eventss));
        })
        .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};


// Для страницы отчетов "новых событий" - /stats/ogh
// первая вкладка  //290421 Dashboard page
export const fetchEventFromPeriodAsync = (start, end) => {
  // console.log('fetchEventFromPeriodAsync run: ',start,end);
  return (dispatch) => {
    const startDate = start;
    const endDate = end;
    postData('https://ismggt.ru/query/events/last/short', {limit:51160, startDate:startDate, endDate:endDate})
        .then((eventss) => {
          // console.log('fetchEventFromPeriodAsync then: ',eventss);
          dispatch(putEventsForPeriodShort(eventss));
        })
        .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};

// Для страницы отчетов "новых событий" - /stats/ogh
// первая вкладка
export const fetchEventFromPeriodAsync2 = (start, end) => {
  return (dispatch) => {
    const startDate = start;
    const endDate = end;
    postData('http://localhost:3005/api/new_events', {limit:160, startDate:startDate, endDate:endDate}) //'2021-02-03T22:00:00.000Z'
        .then((eventss) => {
          dispatch(putEventsForPeriodShort(eventss));
        })
        .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};


 

 //290421 ObjPage page - TwoTab
// Для ObjPage & historyChanges pages Tab2 //290421 historyChanges page - TwoTab
export const fetchAllEventsGraphicAsync = (type='new_rec',startDate='2021-02-12T08:00:00.000Z',endDate='2021-02-15T18:00:00.000Z') => {
  return (dispatch) => {
    postData('https://ismggt.ru/query/events/amount', {type: type, startDate: startDate, endDate: endDate})
        .then((eventss) => {
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




 //290421 ObjPage page - TwoTab
// Для ObjPage & historyChanges pages Tab2 //290421 historyChanges page - TwoTab
export const fetchAllUsersGraphicAsync = (startDate='2021-02-08T08:00:00.000Z',endDate='2021-02-15T18:00:00.000Z')  => {
  return (dispatch) => {
  
    postData('https://ismggt.ru/query/users/online', { startDate: startDate, endDate: endDate})
        .then((users) => {
          dispatch(setDataUsersOnlineToGraphicToStaticPage(users));
        })
        .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};


 
//// setDataUsersNewGraphicToStaticPage setDataUsersDelGraphicToStaticPage setDataUsersEndGraphicToStaticPage setDataUsersBlockGraphicToStaticPage
// Для страницы 2 отчетов "tab 3"
//290421 не используется
export const fetchUsersThirdTabStaticPageGraphicAsync = (type, startDate='2021-02-08T08:00:00.000Z',endDate='2021-02-15T18:00:00.000Z')  => {
  // console.log('fetchUsersThirdTabStaticPageGraphicAsync --type:', type);
  return (dispatch) => {
  
    postData('https://ismggt.ru/query/events/last/short', {type: type, startDate: startDate, endDate: endDate})
        .then((users) => {
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
// Для ObjPage 2 отчетов "tab 3" //290421 historyChanges page - ThirdTab
export const fetchNewOGHThirdTabStaticPageGraphicAsync = (type, startDate='2021-01-08T08:00:00.000Z',endDate='2021-02-19T18:00:00.000Z')  => {
  return (dispatch) => {
    postData('https://ismggt.ru/query/objects/total', {startDate: startDate, endDate: endDate})
        .then((users) => {
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

////////////////////////////////////////


// Для страницы Users

async function postDataAx(url = '', data = {}, type='post') {

  try {
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    const response = await axios.post(
        url,
        { data: data },
        {mode: 'no-cors', 'Content-Type': 'application/x-www-form-urlencoded'});

    return response.data;
  } catch (e) {
    console.log(`😱 Axios request failed: ${e}`);
    
  }

  return  [{"user_fio":"Матвеев Владимир Олегович","login":"matvey","password":"1234","user_fio_lit":"Матвеев В.О."}]; // parses JSON response into native JavaScript objects
}

export const appendUserAsync = (data)  => {
  // console.log('👉 appendUserAsync start:' );
  // return (dispatch) => {
  //   postDataAx('http://localhost:3003/api/users/append', {'data':data})
  //     .then((user) => {
  //       //{"user_fio":"Матвеев Владимир Олегович","login":"matvey","password":"1234","user_fio_lit":"Матвеев В.О."}
  //         // console.log('👉 appendUserAsync then user:',user.data );
  //         dispatch(appendUser(user.data));
  //       })
  //     .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  // };
  
  return (dispatch) => {
          // console.log('👉 appendUserAsync then user:',user.data );
          dispatch(appendUser(data))
        };
    
};

// fetchAllUsersFromDB
export const fetchAllUsersFromDB0 = (limit=20)  => {
   return (dispatch) => {
    postDataAx('http://localhost:3005/api/users', {'limit':limit},'get')
        .then((user) => {
           dispatch(appendAllUsers(user));
        })
        .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};
// work with func & proc in postgress fetchAllUsersFromDB 18.03.21
export const fetchAllUsersFromDB2 = (limit=20)  => {
  // console.log('👉 fetchAllUsersFromDB start:' );
  return (dispatch) => {
     postDataAx('http://localhost:3005/query/users', {'login':'s333',"password":"s333"},'post') //work
        .then((user) => {
           dispatch(appendAllUsers(user));
        })
        .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};

 //290421 UsersPage page - TabOneMenu
export const fetchAllUsersFromDB = (limit=20)  => {
  // console.log('👉 fetchAllUsersFromDB start:' );
  return (dispatch) => {
    postDataAx('https://ismggt.ru/query/users/list', {},'post') //work
        .then((user) => {
           dispatch(appendAllUsers(user));
        })
        .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};


// put http://localhost:3005/api/user (updateUser)  //290421 Dashboard page
export const fetchUpdateUsersFromDB = (userData)  => {
   const {user_fio, login, password, user_fio_lit, id} = userData;
   return (dispatch) => {
    postDataAx('http://localhost:3005/api/user', {user_fio:user_fio, login:login, password:password, user_fio_lit:user_fio_lit, id:id},'put')
        .then((user) => {
           dispatch(appendAllUsers(user));
        })
        .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};




// goncharov alex

// Для страницы  "objects" - /stats/objs
// первая вкладка


// fetchObjectsList(2,0,1000 , 0 , startDate, endDate, 'A');  //290421 ObjPage page - TabOneMenu
export const fetchObjectsListAsync = (objectType='2', organization='0', limit='100' ,
                                      offset='0', startDate='2021-01-01T10:00:00.000Z',
                                      endDate='2021-05-15T22:00:00.000Z', objName='',
                                      orgName='',  objKind='' , objStatus=10,
                                      sortCol='date' , sortType='desc') => {
  // console.log('999 fetchObjectsListAsync -- objectType, organization, limit, offset, startDate, endDate, objName, orgName,  objKind, objStatus, sortCol, sortType', objectType, organization, limit, offset, startDate, endDate, objName, orgName,  objKind, objStatus, sortCol, sortType);

  return (dispatch) => {
    postData('https://ismggt.ru/query/objects/list', {objectType:objectType, organization:organization, limit:limit , offset:offset, startDate:startDate, endDate:endDate ,objName:objName , orgName: orgName , objKind:objKind , objStatus:objStatus , sortCol:sortCol , sortType:sortType })
        .then((eventsList) => {
           dispatch(setObjForObjsPage(eventsList));
          dispatch(setObjForObjsInfoPage(eventsList));
        })
        .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};


// Для страницы  "objects" - /stats/objs
// первая вкладка Список событий на объекте
// Адрес: https://ismggt.ru/query/object/recs/list
 //170521 ObjCard page - Tab1
export const fetchObjRectListAsync = (objectID, limit=1060, offset=0) => {
   return (dispatch) => {

     postData('https://ismggt.ru/query/object/recs/list', {objectID:objectID, limit:limit, offset:offset})
        .then((eventss) => {
           dispatch(setObjForObjRectPage(eventss));
        })
        .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};


  
 //290421 ObjPage page - TabObjs
export const setObjCurrForDetailPageAsync = ( object ) => {
  // console.log('setObjCurrForDetailPageAsync run: ',object );
  return (dispatch) => {
    dispatch(setObjCurrentForDetailPage(object));
  };
};



//////////Gen Page ///////////

//290421 Dashboard page
export const setMessageError = (mess) => {
  // console.log('setMessageError run: ',mess );
  return (dispatch) => {
     dispatch(putDataUsersOnlineError(mess));
  };
};

//290421 Dashboard page
export const fetchAmountUsersAsync = () => {
  // console.log('fetchAmountUsersAsync run: ' );
  return (dispatch) => {
    postData('http://localhost:3005/query/users/amount', {})
        .then((data) => {
          // console.log('fetchAmountUsersAsync then: ',data);
          dispatch(setAmountUsersForGenPage(data));
        })
        .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};

//290421 Dashboard page
export const fetchGenStatsAsync = () => {
   return (dispatch) => {
    postData('https://ismggt.ru/query/stats/daily', {})
        .then((data) => {
           dispatch(setGenStatsPage(data));
        })
        .catch(error => dispatch(putDataUsersOnlineError(error.message)));
  };
};


///////for users page //////////////
 //290421 UsersPage page - TabOneMenu
export const setUsersNameFilterTxtForUsersPage = (userNameFilter) => {
   return (dispatch) => { 
          dispatch(setUsersFilterForUsersPage(userNameFilter)); 
  };
};
 //290421 UsersPage page - TabOneMenu
export const setOrgNameFilterTxtForUsersPage = (orgNameFilter) => {
  // console.log('setOrgNameFilterTxtForUsersPage run: ', orgNameFilter);
  return (dispatch) => { 
          dispatch(setOrgNameFilterForUsersPage(orgNameFilter)); 
  };
};
   

