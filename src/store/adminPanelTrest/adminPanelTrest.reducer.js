import ORGANIZATIONS_DATA from './adminPanelTrest.data';
import AdminActionTypes, {FetchData, FetchDataStaticPage, FetchDataUsersPage, FetchDataObjsPage, FetchDataGenPage} from './adminPanelTrest.types';
// import { fetchDataUsersOnline } from './adminPanelTrest.actions';
  
const INITIAL_STATE = {
    countUsers: ORGANIZATIONS_DATA.countUsers,
    countOGH: ORGANIZATIONS_DATA.countOGH,
    amountNewOGH: ORGANIZATIONS_DATA.amountNewOGH,
    amountOGHtoDay: ORGANIZATIONS_DATA.amountOGHtoDay,//graphic of first page
    amountOGHtoWeek: ORGANIZATIONS_DATA.amountOGHtoWeek,//graphic of first page
    amountOGHtoTreeDays: ORGANIZATIONS_DATA.amountOGHtoTreeDays,//graphic of first page
    countEventGraph: ORGANIZATIONS_DATA.countEventGraph,
    countUsersGraph: ORGANIZATIONS_DATA.countUsersGraph, //graphic of first page
    countUsersOfStartDayGraph: ORGANIZATIONS_DATA.countUsersOfStartDayGraph, //graphic of first page
    countUsersOfEndDayGraph: ORGANIZATIONS_DATA.countUsersOfEndDayGraph, //graphic of first page
    messagesEventPoints: ORGANIZATIONS_DATA.messagesEventPoints,
    statusEnumEventPoint: ORGANIZATIONS_DATA.statusEnumEventPoint,
    eventPoints: ORGANIZATIONS_DATA.eventPoints,
    eventShortPoints: ORGANIZATIONS_DATA.eventShortPoints, //for events page
    fetchDataForEventShortPoints: ORGANIZATIONS_DATA.fetchDataForEventShortPoints, //fetch for events page
    amountEventGraph: ORGANIZATIONS_DATA.amountEventGraph,
    amountEndEventGraph: ORGANIZATIONS_DATA.amountEndEventGraph,
    statusEnumEventPointColor: ORGANIZATIONS_DATA.statusEnumEventPointColor,
    newEventsGraphOfStaticPage: ORGANIZATIONS_DATA.newEventsGraphOfStaticPage, // for GraphOfStaticPage
    endEventsGraphOfStaticPage: ORGANIZATIONS_DATA.endEventsGraphOfStaticPage,// for GraphOfStaticPage
    usersOnlineGraphOfStaticPage: ORGANIZATIONS_DATA.usersOnlineGraphOfStaticPage,// for GraphOfStaticPage
    newMessageGraphOfStaticPage: ORGANIZATIONS_DATA.newMessageGraphOfStaticPage,// for GraphOfStaticPage
    denyEventsGraphOfStaticPage: ORGANIZATIONS_DATA.denyEventsGraphOfStaticPage,// for GraphOfStaticPage
    usersNewGraphOfStaticPage: ORGANIZATIONS_DATA.usersNewGraphOfStaticPage,// for GraphOfStaticPage    
    usersDelGraphOfStaticPage: ORGANIZATIONS_DATA.usersDelGraphOfStaticPage,// for GraphOfStaticPage
    usersBlockGraphOfStaticPage: ORGANIZATIONS_DATA.usersBlockGraphOfStaticPage,// for GraphOfStaticPage
    usersEndGraphOfStaticPage: ORGANIZATIONS_DATA.usersEndGraphOfStaticPage,// for GraphOfStaticPage
    users: ORGANIZATIONS_DATA.Users,// for UsersPage
    amountUsers: ORGANIZATIONS_DATA.amountUsers,// for Gen Page
    allUsersOfDB: ORGANIZATIONS_DATA.allUsersOfDB,// for UsersPage
    objs: ORGANIZATIONS_DATA.objs,// for Objects Page
    objsInfo: ORGANIZATIONS_DATA.objsInfo,// for Objects Page
    objCurrent: ORGANIZATIONS_DATA.objCurrent,// for Objects Page
    objRect: ORGANIZATIONS_DATA.objRect,// for Objects Page
    genStats: ORGANIZATIONS_DATA.genStats,// for Objects Page
    currentPointId: 1,
    isFetchingUserOnline: false,
    errorMessage: undefined,
};

  
const adminPandelReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AdminActionTypes.SET_CURRENT_POINT:
            return {...state, currentPointId: action.payload};

        case FetchData.GET_USERS_ONLINE_START:
            return {...state, isFetchingUserOnline: true};

        case FetchData.GET_USERS_ONLINE_SUCCESS:
            return {...state, countUsersGraph: action.payload};

        case FetchData.GET_USERS_ONLINE_START_DAY:
            return {...state, countUsersOfStartDayGraph: action.payload};

        case FetchData.GET_USERS_ONLINE_END_DAY:
            return {...state, countUsersOfEndDayGraph: action.payload};

        case FetchData.GET_USERS_ONLINE_FAILURE:
            return {...state, errorMessage: action.payload };

        case FetchData.GET_EVENTS_POINT_START: // for botton tab
                return {...state, eventShortPoints: action.payload}; 
        
        case FetchData.FETCH_EVENT_TYPE_OF_DATE_FOR_STATISTIC_PAGE: // for events page
                return {...state, eventShortPoints: action.payload};

        case FetchData.DATA_START_FOR_FETCH_EVENT_TYPE_OF_DATE_FOR_STATISTIC_PAGE: // DATA for events page
                const newDate = {...state.fetchDataForEventShortPoints, startDate: action.payload}
                return {...state, fetchDataForEventShortPoints: newDate}; 
        
        case FetchData.DATA_END_FOR_FETCH_EVENT_TYPE_OF_DATE_FOR_STATISTIC_PAGE: // DATA for events page
                const newEndDate = {...state.fetchDataForEventShortPoints, endDate: action.payload}
                return {...state, fetchDataForEventShortPoints: newEndDate}; 

        case FetchData.GET_NEW_EVENTS_FOR_GRAPHIC_START:
                return {...state, amountEventGraph: action.payload};

        case FetchData.GET_END_EVENTS_FOR_GRAPHIC_START:
                return {...state, amountEndEventGraph: action.payload};

        case FetchData.FETCH_COUNT_OGH_FOR_DASHBOARD:
                return {...state, countOGH: action.payload};

        case FetchData.FETCH_AMOUNT_OGH_TO_DAY_FOR_DASHBOARD:
                return {...state, amountOGHtoDay: action.payload};

        case FetchData.FETCH_AMOUNT_OGH_TO_TREE_DAYS_FOR_DASHBOARD:
            return {...state, amountOGHtoTreeDays: action.payload};

        case FetchData.FETCH_AMOUNT_OGH_TO_WEEK_FOR_DASHBOARD:
                return {...state, amountOGHtoWeek: action.payload};
        
        case FetchDataStaticPage.FETCH_NEW_EVENT_TO_GRAPHIC_TO_STATISTIC_PAGE:
                return {...state, newEventsGraphOfStaticPage: action.payload};
                
        case FetchDataStaticPage.FETCH_END_EVENT_TO_GRAPHIC_TO_STATISTIC_PAGE:
                return {...state, endEventsGraphOfStaticPage: action.payload};
               
        case FetchDataStaticPage.FETCH_DENY_EVENT_TO_GRAPHIC_TO_STATISTIC_PAGE:
                return {...state, denyEventsGraphOfStaticPage: action.payload};
       
        case FetchDataStaticPage.FETCH_USERS_ONLINE_TO_GRAPHIC_TO_STATISTIC_PAGE:
                return {...state, usersOnlineGraphOfStaticPage: action.payload};

        case FetchDataStaticPage.FETCH_NEW_MESSAGE_TO_GRAPHIC_TO_STATISTIC_PAGE:
                return {...state, newMessageGraphOfStaticPage: action.payload};


        case FetchDataStaticPage.FETCH_USERS_NEW_TO_GRAPHIC_TO_STATISTIC_PAGE:
                return {...state, usersNewGraphOfStaticPage: action.payload};

        case FetchDataStaticPage.FETCH_USERS_DEL_TO_GRAPHIC_TO_STATISTIC_PAGE:
                return {...state, usersDelGraphOfStaticPage: action.payload};

        case FetchDataStaticPage.FETCH_USERS_BLOCK_TO_GRAPHIC_TO_STATISTIC_PAGE:
                return {...state, usersBlockGraphOfStaticPage: action.payload};


        case FetchDataStaticPage.FETCH_USERS_END_TO_GRAPHIC_TO_STATISTIC_PAGE:
                return {...state, usersEndGraphOfStaticPage: action.payload};

        case FetchDataStaticPage.FETCH_AMOUNT_NEW_OGH_FOR_GRAPHIC_TO_STATISTIC_PAGE:
                return {...state, amountNewOGH: action.payload};

        case FetchDataUsersPage.DISPATCH_APPEND_USER_TO_LOCAL_DB_FOR_USERS_PAGE:
                const newArr = [...state.users, action.payload];
                return {...state, users: newArr};

        case FetchDataUsersPage.FETCH__USERS_TO_LOCAL_DB_FOR_USERS_PAGE:
                return {...state, allUsersOfDB: action.payload};

        case FetchDataObjsPage.FETCH__OBJS_TO_LOCAL_DB_FOR_OBJS_PAGE:
                // let ob = state.objs.concat(action.payload) ;
                return {...state, objs: action.payload}; 
        case FetchDataObjsPage.FETCH__OBJSINFO_TO_LOCAL_DB_FOR_OBJS_PAGE:
                return {...state, objsInfo: action.payload};   

        case FetchDataObjsPage.FETCH__OBJS_EVENTS_TO_LOCAL_DB_FOR_OBJS_PAGE:
                return {...state, objRect: action.payload};   

        case FetchDataObjsPage.FETCH__OBJ_CURRENT_FOR_OBJ_DETAIL_PAGE:
                return {...state, objCurrent: action.payload};          

        case FetchDataGenPage.FETCH__AMOUNT__USERS_TO_LOCAL_DB_FOR_GEN_PAGE:
                return {...state, amountUsers: action.payload};

        case FetchDataGenPage.FETCH__ALL_DATA_FOR_GEN_PAGE:
                return {...state, genStats: action.payload};


        default:
            return state;
    }
}

 
export default adminPandelReducer;