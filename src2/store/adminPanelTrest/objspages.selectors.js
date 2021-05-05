import { createSelector } from 'reselect';

const getSelectPoints = (state) => state.adminPanel;


 //////////////////////////////////////////////////// 

// для "- for Statics Page 2-" ////////////////////////////////////////////////////

 //////////////////////////////////////////////////// 
 /// ObjsTab
 export const selectObjsPage = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.objs 
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

/// ObjsTab 
 export const selectObjCurrObj = createSelector( 
    getSelectPoints,
    adminPanel => adminPanel.objCurrent // []
) 
 
 //////////////////////////////////////////////////// 
 //////////////////////////////////////////////////// 
 //////////////////////////////////////////////////// 
  