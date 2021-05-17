import { createSelector } from 'reselect';

const selectObj = state => state.obj;
const selectAdmin = state => state.adminPanel;


export const selectObjFilterSender = createSelector(
  [selectObj],
    obj => obj.curObjFilterSender
);

export const selectObjFilterOwn = createSelector(
  [selectObj],
    obj => obj.curObjFilterOwn
);


export const selectObjFilterDateStart = createSelector(
  [selectObj],
    obj => obj.curObjFilterDateStart
);

export const selectObjFilterDateEnd = createSelector(
  [selectObj],
    obj => obj.curObjFilterDateEnd
);


export const selectCurrentObj2 = createSelector(
    [selectAdmin, selectObjFilterSender],
    selectAdmin => selectAdmin.objRect.data.recs.filter(rec => rec.sender.orgname.includes(selectObjFilterSender))
);

export const selectCurrentObj = createSelector(
    [selectAdmin, selectObj],
    (selectAdmin, selectObj) => {
        if (selectAdmin.objRect){
            let filter01 = [];
            let filter02 = [];
            const filter0 = selectAdmin.objRect.data.recs.filter(elem => {
                const recDate = new Date(elem.rec_date);
                const startDate = new Date(selectObj.curObjFilterDateStart);
                const endDate = new Date(selectObj.curObjFilterDateEnd);

                return recDate >= startDate && recDate <= endDate && elem
                // (elem.rec_date || '').includes(selectObj.curObjFilterDateStart)
            }) ;
            // console.log('35555 filter0 length',filter0);
            const filter11 = filter0.filter(elem => (elem.sender.objname || '').toLowerCase().includes(selectObj.curObjFilterSender)) ;
            const filter12 = filter0.filter(elem => (elem.sender.orgname || '').toLowerCase().includes(selectObj.curObjFilterSender)) ;
            const filter13 = filter0.filter(elem => (elem.sender.username || '').toLowerCase().includes(selectObj.curObjFilterSender)) ;
            // console.log('35555 filter11 length',filter11.length);
            // console.log('35555 filter12 length',filter12.length);
            // console.log('35555 filter13 length',filter13.length);
            // console.log('35555 filter2 length',filter2.length);
            if (filter11.length) {
                filter01 = filter11;
            }else if (filter12.length) {
                filter01 = filter12;
            }else if (filter13.length) {
                filter01 = filter13;
            }

            if (filter01.length) {
                // console.log('45555 filter01',filter01)
                const filter21 = filter01.filter(elem => (elem.receip.objname || '').toLowerCase().includes(selectObj.curObjFilterOwn)) ;
                const filter22 = filter01.filter(elem => (elem.receip.orgname || '').toLowerCase().includes(selectObj.curObjFilterOwn)) ;
                const filter23 = filter01.filter(elem => (elem.receip.username || '').toLowerCase().includes(selectObj.curObjFilterOwn)) ;
                console.log('45555 filter21',filter21.length);
                console.log('45555 filter22',filter22.length);
                console.log('45555 filter23',filter23.length);
                if (filter21.length) {
                    filter01 = filter21;
                }else if (filter22.length) {
                    filter01 = filter22;
                }else if (filter23.length) {
                    filter01 = filter23;
                }
                if (filter21.length === 0 && filter22.length === 0 && filter23.length === 0 ) {
                    return [];
                }else {
                    return filter01;
                }


            }


        }else { return []; }
    }
)
