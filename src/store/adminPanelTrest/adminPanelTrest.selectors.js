import { createSelector } from 'reselect';

const getSelectPoints = (state) => state.adminPanel;

////////////////////////////////////////////////////

export const selectCurrentPointId = createSelector(
    [getSelectPoints],
    adminPanel => adminPanel.currentPointId
)

export const selectAllPoints = createSelector(
    [getSelectPoints],
    adminPanel => adminPanel.points.items
)
export const selectAllObjects = createSelector(
    [getSelectPoints],
    adminPanel => adminPanel.objects
)
export const selectAllOrganisations = createSelector(
    [getSelectPoints],
    adminPanel => adminPanel.organizations
)
export const selectCountUsers = createSelector(
    [getSelectPoints],
    adminPanel => adminPanel.countUsers
)
export const selectCountOGH = createSelector(
    [getSelectPoints],
    adminPanel => adminPanel.countOGH
) 

// export const selectCountEventGraph = createSelector(
//     [getSelectPoints],
//     adminPanel => adminPanel.countEventGraph
// )
export const selectMessagesEventPoint = createSelector( 
    [getSelectPoints],
    adminPanel => adminPanel.messagesEventPoints
)
export const selectEventPoints = createSelector( 
    [getSelectPoints],
    adminPanel => adminPanel.eventPoints
)

export const selectStatusEventPoint = createSelector( 
    [getSelectPoints],
    adminPanel => adminPanel.statusEnumEventPoint
)
export const selectIsFetchingUserOnline = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.isFetchingUserOnline
)



// для "graphics" //////////////////////////////////////////////////// selectCountUsersOfStartDayGraph , selectCountUsersOfEndDayGraph
export const selectCountUsersGraph = createSelector(
    [getSelectPoints],
    adminPanel => adminPanel.countUsersGraph
)
export const selectCountUsersOfStartDayGraph = createSelector(
    [getSelectPoints],
    adminPanel => adminPanel.countUsersOfStartDayGraph
)
export const selectCountUsersOfEndDayGraph = createSelector(
    [getSelectPoints],
    adminPanel => adminPanel.countUsersOfEndDayGraph
)

//--
export const selectAmountEventGraph = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.amountEventGraph
)
export const selectAmountEndEventGraph = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.amountEndEventGraph
) 



// для "Количество ОГХ" ////////////////////////////////////////////////////
export const selectAmountOGH = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.countOGH
)
  

// Для "Ноые ОГХ" ////////////////////////////////////////////////////
export const selectAmountToDayOGH = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.amountOGHtoDay
) 
export const selectAmountToWeekOGH = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.amountOGHtoWeek
) 
export const selectAmountToTreeDaysOGH = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.amountOGHtoTreeDays
) 
 
 /////////////- Для нижней таблицы главная Дашборд -/////////////////////////////////////// 
 export const selectStatusEnumEventPointColor = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.statusEnumEventPointColor
) 

export const selectEventShortPoints = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.eventShortPoints
)


 ///////////////////- for Statics Page -///////////////////////////////// 
 export const fetchDataForEventShortPoints = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.fetchDataForEventShortPoints
)
 //////////////////////////////////////////////////// 

// для "- for Statics Page 2-" ////////////////////////////////////////////////////
export const selectNewEventsGraphOfStaticPage = createSelector(
    [getSelectPoints],
    adminPanel => adminPanel.newEventsGraphOfStaticPage
)

export const selectEndEventsGraphOfStaticPage = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.endEventsGraphOfStaticPage
)

export const selectUsersOnlineGraphOfStaticPage = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.usersOnlineGraphOfStaticPage
)
export const selectNewMessageGraphOfStaticPage = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.newMessageGraphOfStaticPage
) 


 //////////////////////////////////////////////////// 
 /// UsersTab
 export const selectUsersPage = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.users
) 
 //////////////////////////////////////////////////// 
 //////////////////////////////////////////////////// 
  
 //amountNewOGH