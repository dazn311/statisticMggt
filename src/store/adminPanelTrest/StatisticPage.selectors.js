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