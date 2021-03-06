import { createSelector } from 'reselect';

const getSelectPoints = (state) => state.adminPanel;


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
export const selectDenyEventsGraphOfStaticPage = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.denyEventsGraphOfStaticPage
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
 //////////////////////////////////////////////////// 
 //////////////////////////////////////////////////// 
  
 export const selectUsersNewGraphOfStaticPage = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.usersNewGraphOfStaticPage
)

 export const selectUsersDelGraphOfStaticPage = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.usersDelGraphOfStaticPage
)

 export const selectUsersBlockGraphOfStaticPage = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.usersBlockGraphOfStaticPage
)

 export const selectUsersEndGraphOfStaticPage = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.usersEndGraphOfStaticPage
)

 //statusEnumEventPointColor
 
 ///////////////////- for Statics Page, tab3 -///////////////////////////////// 
export const selectAmountNewOGH = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.amountNewOGH
)

 //////////////////////////////////////////////////// 
 /// ObjsTab
 export const selectObjsPage = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.objs
    // adminPanel => adminPanel.objsInfo.length ? adminPanel.objsInfo.data.objects : []  
) 
/// ObjsTab
 export const selectObjsInfoPage = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.objsInfo
    // adminPanel => adminPanel.objsInfo 
) 
 //////////////////////////////////////////////////// 
 /// ObjsTab
 export const selectObjRectPage = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.objRect.data.recs // []
) 

/// ObjsTab
 export const selectObjRectAmount = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.objRect.amount // []
) 

/// Gen page Tab
 export const selectGenStats = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.genStats // []
) 
 
 //////////////////////////////////////////////////// 
 //////////////////////////////////////////////////// 
 //////////////////////////////////////////////////// 