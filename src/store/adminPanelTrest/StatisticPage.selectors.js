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
  
 //statusEnumEventPointColor