import React,{ useState, useCallback,useEffect } from 'react';

import { useHistory, useRouteMatch } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Button from '@material-ui/core/Button';

import SelectorMggt from '../../../components/selectorMggt';

import DatePicker from './DatePicker';
import DatePickerEnd from './DatePickerEnd';
import SearchPanel from './SearchPanel';
import TabActive from './TabActive';
import StateElements from './stateElements';


import { fetchObjectsListAsync  } from '../../../store/adminPanelTrest/adminPanelTrest.actions';

import { selectObjsPage, selectObjsInfoPage } from '../../../store/adminPanelTrest/StatisticPage.selectors';
import { selectCurrentUserShort } from '../../../store/user/user.selectors';



const valueForBtnMggt = {'Сообщение':'0','Новое событие':'1','Все':'2'};
// const valueForBtnInWork = {'Новые':'0','В работе':'1','согласованные':'2','Все':'10'};
// const valueForBtnOgh = {'ОДХ':'ОДХ','ОО':'ОО','ДТ':'ДТ','Все':'allKind'};


const filterInitial = () => {
  const endDate = new Date().toISOString().split('T')[0];
  console.log('endDate initial ', endDate)
  return { objectType: '2', organization: '0',limit: '15', offset: '0', dateStart: '2021-01-01', dateEnd: endDate,  objKind:'allKind', objStatus:'10', sortCol:'date', sortType:'desc'  }
}

const TabOneMenu = ({ fetchObjectsList, selectObjs,selectObjsInfoPage, selectCurrentUserShort }) => {

  const [amObjsValue, setAmObjsValue] = useState({totalAmount: 0, withRecs: 0, withoutRecs: 0, tabFiltValueLength: 0, tabValueLength: 0, inWork: 0,inEndWork: 0 }); // выводить статистику
  const [amObjsValueCurrent, setAmObjsValueCurrent] = useState({totalAmount: 0, withRecs: 0, withoutRecs: 0, tabFiltValueLength: 0, tabValueLength: 0, inWork: 0,inEndWork: 0 }); // выводить статистику
  // const [tabValue, setTabValue] = useState([]); // выводить статистику
  const [isLoading, setIsLoading] = useState([]); // выводить статистику
  const [offsetSt, setOffsetSt] = useState('0'); // выводить статистику
  // 19.03.21
  const [stFilterVal, setStFilterVal] = useState(filterInitial()); // выводить статистику
  const [stFilterSearch, setStFilterSearch] = useState({ objName:'', orgName:''}); // выводить статистику

  // const classes = useStyles();


  const match = useRouteMatch();
  const history = useHistory();
   

  useEffect(() => {
    history.push({
      pathname: `${match.url}/active`
    })
  },[])

  const setPageT = useCallback((val) => {

    setOffsetSt(val.toString());
    setIsLoading(true);

    const startDate = new Date(stFilterVal.dateStart).toISOString();
    const endDate = new Date(stFilterVal.dateEnd).toISOString();
    const endDatePlus = endDate.split("T")[0] + 'T22:22:00.000Z';

    const limitPlus = stFilterVal.limit;
    let newOffset = (val -1) * stFilterVal.limit;
    let newAllKind = stFilterVal.objKind === 'allKind' ? '' : stFilterVal.objKind;
    // console.log('88888 stFilterSearch.objName, stFilterSearch.orgName',stFilterSearch.objName, stFilterSearch.orgName);
    fetchObjectsList(stFilterVal.objectType, stFilterVal.organization, limitPlus, newOffset, startDate, endDatePlus, stFilterSearch.objName, stFilterSearch.orgName, newAllKind , stFilterVal.objStatus, stFilterVal.sortCol, stFilterVal.sortType)


  },[stFilterVal,stFilterSearch,fetchObjectsList]);


  useEffect(() => {

    if (selectObjsInfoPage.totalAmount > amObjsValue.totalAmount){
      setAmObjsValue(selectObjsInfoPage);
    }

    setAmObjsValueCurrent(selectObjsInfoPage);

  }, [selectObjsInfoPage.totalAmount, amObjsValue.totalAmount, selectObjsInfoPage, setAmObjsValue, setAmObjsValueCurrent])


///////////////////////////////////////////
  const fetchSearchObj = useCallback((offset) => {
    setIsLoading(true);
    const startDate = new Date(stFilterVal.dateStart).toISOString();
    const endDate = new Date(stFilterVal.dateEnd).toISOString();
    const endDatePlus = endDate.split("T")[0] + 'T22:22:00.000Z';
    const limitPlus = stFilterVal.limit;
    setOffsetSt('0');
    let newOffset = '0';
    if (offset !== '0'){newOffset = offset;}
    let newAllKind = stFilterVal.objKind === 'allKind' ? '' : stFilterVal.objKind;
    fetchObjectsList(stFilterVal.objectType, stFilterVal.organization, limitPlus, newOffset, startDate, endDatePlus, stFilterSearch.objName, stFilterSearch.orgName, newAllKind , stFilterVal.objStatus, stFilterVal.sortCol, stFilterVal.sortType)
    // console.log('TabOneMenu -- 4  fetchObjectsList  offset',offset);
  },[stFilterVal.objectType, stFilterVal.organization, stFilterVal.limit,   stFilterVal.dateStart, stFilterVal.dateEnd, stFilterSearch.objName, stFilterSearch.orgName, stFilterVal.objKind, stFilterVal.objStatus, stFilterVal.sortCol, stFilterVal.sortType, fetchObjectsList]);

  ///////////////////////////////////////////
  useEffect(() => {
 
    // setTabValue(selectObjs);
    setIsLoading(false);
  },[selectObjs]);

///////////////////////////////////////////
  useEffect(() => {

    if ( selectObjs && selectObjs.length < 1){
      // console.log('TabOneMenu -- 444  fetchObjectsList  offset');
      setIsLoading(true);
      fetchSearchObj('0');
    }

  },[fetchSearchObj,selectObjs]);

  ///////////////////////////////////////////


  const setRadioValue = useCallback((val) => {
    setStFilterVal({...stFilterVal, objectType: val, offset: '0' } );
  },[stFilterVal]);

  // const setRadioValInWork = useCallback((val) => {
  //   setStFilterVal({...stFilterVal, objStatus: val, offset: '0' } );
  // },[stFilterVal]);
  //
  // const setRadioValOdh = useCallback((val) => {
  //   setStFilterVal({...stFilterVal, objKind: val, offset: '0' } );
  // },[stFilterVal]);

  const setSearchTextObj = useCallback((val) => {
    setStFilterSearch({...stFilterSearch, objName: val });
    setStFilterVal({...stFilterVal, offset: '0' } );
  },[stFilterSearch,stFilterVal]);

  const setSearchTextOrg = useCallback((val) => {
    setStFilterSearch({...stFilterSearch, orgName: val } );
    setStFilterVal({...stFilterVal, offset: '0' } );
  },[stFilterSearch,stFilterVal]);

  const setDateStart = useCallback((val) => {
    setStFilterVal({...stFilterVal, dateStart: val, offset: '0' } );
  },[stFilterVal]);

  const setDateEnd = useCallback((val) => {
    setStFilterVal({...stFilterVal, dateEnd: val, offset: '0' } );
  },[stFilterVal]);

  ///////////////////////////////////////////
  // const valueItems = {val:10, smeg: 'смежные'};
  return (
      <React.Fragment>
        <div style={{display: 'flex', flexDirection: 'column'}}>

          <div style={{display: 'flex', flexDirection: 'row'}}>
            <StateElements curUser={selectCurrentUserShort}  />
          </div>

          <div style={{display: 'flex', flexDirection: window.innerWidth < 500 ? 'column' : 'row', justifyContent: 'flex-start', gap: 0}}>


              <SearchPanel  setSearchTextObj={setSearchTextObj} setSearchTextOrg={setSearchTextOrg} />





            <div style={{display: 'flex' , flexWrap: 'nowrap', flexDirection:  'row', justifyContent: 'space-between', gap: 0}}>
              <div >
                <DatePicker setDateStart={setDateStart} />
              </div>
              <div >
                <DatePickerEnd setDateEnd={setDateEnd} />
              </div>
            </div>

            <div style={{display: 'flex' , flexWrap: 'nowrap', flexDirection: window.innerWidth < 500 ? 'column' : 'row', justifyContent: 'flex-start', gap: 0}}>
              <SelectorMggt caption={'Тип'} defaultVal={stFilterVal.objectType} valueItems={valueForBtnMggt} setType={setRadioValue}  />
              <Button onClick={()=>{fetchSearchObj('0')}} style={{height: '43px', marginTop: 8 , marginRight: 0, maxWidth: window.innerWidth < 500 ? '100%' : 200}} variant="contained" color="primary" disabled={isLoading} >
                Поиск
              </Button>
            </div>
          </div>

          <div style={{ marginTop: 4}}>
            <TabActive tabValue={selectObjs} isLoading={isLoading} amObjsValue={amObjsValue} isOpenD={true}   setPageT={setPageT}  offset={offsetSt} />
          </div>
        </div>
      </React.Fragment>
  );
}


const mapStateToProps = createStructuredSelector ({
  selectObjs: selectObjsPage, // события короткие данные для таблицы
  selectObjsInfoPage: selectObjsInfoPage, // события короткие данные для таблицы
  selectCurrentUserShort: selectCurrentUserShort, // события короткие данные для таблицы
});

const mapDispatchToProps = (dispatch) => ({
    fetchObjectsList: (objectType, organization, limit, offset, startDate, endDate,objName, orgName,   objKind, objStatus, sortCol, sortType) => dispatch(fetchObjectsListAsync(objectType, organization, limit, offset, startDate, endDate, objName, orgName,   objKind, objStatus, sortCol, sortType)),
});
export default connect(mapStateToProps,mapDispatchToProps)(TabOneMenu); 
