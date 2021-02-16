const AdminActionTypes = {
    SET_CURRENT_POINT: 'SET_CURRENT_POINT',
};

export const FetchData = {
    GET_USERS_ONLINE_START: 'GET_USERS_ONLINE_START', //  query/users/online
    GET_USERS_ONLINE_SUCCESS: 'GET_USERS_ONLINE_SUCCESS', 
    GET_USERS_ONLINE_FAILURE: 'GET_USERS_ONLINE_FAILURE', 
    GET_EVENTS_POINT_START: 'GET_EVENTS_POINT_START', 
    GET_EVENTS_END_POINT_START: 'GET_EVENTS_END_POINT_START', 
    GET_NEW_EVENTS_FOR_GRAPHIC_START: 'GET_NEW_EVENTS_FOR_GRAPHIC_START', //putNewEventsGraphic
    GET_END_EVENTS_FOR_GRAPHIC_START: 'GET_END_EVENTS_FOR_GRAPHIC_START', //putNewEventsGraphic
    FETCH_COUNT_OGH_FOR_DASHBOARD: 'FETCH_COUNT_OGH_FOR_DASHBOARD', //putNewEventsGraphic
    FETCH_AMOUNT_OGH_FOR_DASHBOARD: 'FETCH_AMOUNT_OGH_FOR_DASHBOARD', //putNewEventsGraphic
    FETCH_AMOUNT_OGH_TO_WEEK_FOR_DASHBOARD: 'FETCH_AMOUNT_OGH_TO_WEEK_FOR_DASHBOARD', //putNewEventsGraphic
    FETCH_AMOUNT_OGH_TO_DAY_FOR_DASHBOARD: 'FETCH_AMOUNT_OGH_TO_DAY_FOR_DASHBOARD', //putNewEventsGraphic
    FETCH_AMOUNT_OGH_TO_TREE_DAYS_FOR_DASHBOARD: 'FETCH_AMOUNT_OGH_TO_TREE_DAYS_FOR_DASHBOARD', //putNewEventsGraphic
    FETCH_EVENT_TYPE_OF_DATE_FOR_STATISTIC_PAGE: 'FETCH_EVENT_TYPE_OF_DATE_FOR_STATISTIC_PAGE', //from TabOGH
    DATA_START_FOR_FETCH_EVENT_TYPE_OF_DATE_FOR_STATISTIC_PAGE: 'DATA_START_FOR_FETCH_EVENT_TYPE_OF_DATE_FOR_STATISTIC_PAGE', //from TabOGH
    DATA_END_FOR_FETCH_EVENT_TYPE_OF_DATE_FOR_STATISTIC_PAGE: 'DATA_END_FOR_FETCH_EVENT_TYPE_OF_DATE_FOR_STATISTIC_PAGE', //from TabOGH 
};

export const FetchDataStaticPage = {
    FETCH_NEW_EVENT_TO_GRAPHIC_TO_STATISTIC_PAGE: 'FETCH_NEW_EVENT_TO_GRAPHIC_TO_STATISTIC_PAGE', //from TabOGH
    FETCH_END_EVENT_TO_GRAPHIC_TO_STATISTIC_PAGE: 'FETCH_END_EVENT_TO_GRAPHIC_TO_STATISTIC_PAGE', //from TabOGH
    FETCH_DENY_EVENT_TO_GRAPHIC_TO_STATISTIC_PAGE: 'FETCH_DENY_EVENT_TO_GRAPHIC_TO_STATISTIC_PAGE', //from TabOGH
    FETCH_USERS_ONLINE_TO_GRAPHIC_TO_STATISTIC_PAGE: 'FETCH_USERS_ONLINE_TO_GRAPHIC_TO_STATISTIC_PAGE', //from TabOGH
    FETCH_NEW_MESSAGE_TO_GRAPHIC_TO_STATISTIC_PAGE: 'FETCH_NEW_MESSAGE_TO_GRAPHIC_TO_STATISTIC_PAGE', //from TabOGH
};
   
export default AdminActionTypes;
  