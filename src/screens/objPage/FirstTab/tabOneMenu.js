import React,{ useState, useCallback,useEffect } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import _ from "lodash";

// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Divider from '@material-ui/core/Divider';

import RadioBtnMGGT from '../../../components/radioButtons';
import RadioBtnIW from '../../../components/radioBtnFow'; 
import RadioBtnODH from '../../../components/radioBtnODH'; 

import DatePicker from './DatePicker';
import DatePickerEnd from './DatePickerEnd';
import SearchPanel from './SearchPanel';
// import SearchPanelSec from './SearchPanelSecond';
import TabObjs from './TabObjs';
import StateElements from './stateElements';

  
  
import { fetchObjectsListAsync  } from '../../../store/adminPanelTrest/adminPanelTrest.actions'; 
 
// import { fetchDataForEventShortPoints } from '../../../store/adminPanelTrest/adminPanelTrest.selectors'; 
import { selectObjsPage, selectObjsInfoPage } from '../../../store/adminPanelTrest/StatisticPage.selectors';  

// let rows = [];

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'fit-content',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    '& svg': {
      margin: theme.spacing(1.5),
    },
    '& hr': {
      margin: theme.spacing(0, 0.5),
    },
    minWidth:1400,
  },
  amObjs:{alignSelf: 'center',marginLeft:10, padding: '4px 16px'},
  seeMore: {
    marginTop: theme.spacing(0),
    
  },
  datePick: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    color: 'rgba(0, 0, 0, 0.87)',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '4px',
    margin: '10px 0px',
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  }
}));


 

































 // {"objectType":"2", "organization":"0", "limit":"100" , "offset":"100", "startDate":"2021-02-19T22:00:00.000Z", "endDate":"2021-03-19T22:00:00.000Z", "objName": "", "orgName": "", "objType": "ОО","objKind":"","objStatus": "10", "sortCol":"date","sortType":"desc"}   

const TabOneMenu = ({ fetchObjectsList, selectObjs,selectObjsInfoPage }) => {

  const [amObjsValue, setAmObjsValue] = useState({totalAmount: 0, withRecs: 0, withoutRecs: 0, tabFiltValueLength: 0, tabValueLength: 0, inWork: 0,inEndWork: 0 }); // выводить статистику
  const [amObjsValueCurrent, setAmObjsValueCurrent] = useState({totalAmount: 0, withRecs: 0, withoutRecs: 0, tabFiltValueLength: 0, tabValueLength: 0, inWork: 0,inEndWork: 0 }); // выводить статистику
  const [tabValue, setTabValue] = useState([]); // выводить статистику
  const [offsetSt, setOffsetSt] = useState(0); // выводить статистику
  // const [rowsPerPage, setRowsPerPage] = React.useState(15);
  // 19.03.21
  //objectType='2', organization='0', limit='100' , offset='0', startDate='01-01-2021', endDate='21-03-2021', objName='A',  orgName='' , objKind='' , objStatus=10, sortCol='date' , sortType='desc'
  const [stFilterVal, setStFilterVal] = useState({ objectType: '2', organization: '0',limit: '15', offset: '0', dateStart: '2021-01-01', dateEnd: '2021-05-05',  objKind:'', objStatus:'10', sortCol:'date', sortType:'desc'  }); // выводить статистику
  const [stFilterSearch, setStFilterSearch] = useState({ objName:'', orgName:''}); // выводить статистику
 

  const setRowsPerPage = (rowsPerPage) => {
    setStFilterVal({...stFilterVal, limit:rowsPerPage})
  }


  const setPageT = useCallback((val) => {
    let newOffset;
    if ( val ===1){
      newOffset = parseInt(stFilterVal.offset)  +  parseInt(stFilterVal.limit);
      setStFilterVal({...stFilterVal, offset:  newOffset.toString() })
    }
    setOffsetSt(newOffset);

    },[stFilterVal]);





  useEffect(() => {

    if (selectObjsInfoPage.totalAmount > amObjsValue.totalAmount){
      setAmObjsValue(selectObjsInfoPage);
    }
    
    setAmObjsValueCurrent(selectObjsInfoPage);

  }, [selectObjsInfoPage.totalAmount, amObjsValue.totalAmount, selectObjsInfoPage, setAmObjsValue, setAmObjsValueCurrent])
  
   
  
   
  
  useEffect(() => {

    const startDate = new Date(stFilterVal.dateStart).toISOString();
    const endDate = new Date(stFilterVal.dateEnd).toISOString();
    const limitPlus = stFilterVal.limit;
    setOffsetSt(0);
    fetchObjectsList(stFilterVal.objectType, stFilterVal.organization, limitPlus, stFilterVal.offset, startDate, endDate, stFilterVal.objName, stFilterVal.orgName,  stFilterVal.objKind, stFilterVal.objStatus, stFilterVal.sortCol, stFilterVal.sortType  )

  }, [stFilterVal,fetchObjectsList])





  useEffect(() => {
    const startDate = new Date(stFilterVal.dateStart).toISOString();
    const endDate = new Date(stFilterVal.dateEnd).toISOString();
    const limitPlus = stFilterVal.limit ;
    setOffsetSt(0);
    // (objectType='2', organization='0', limit='100' , offset='0', startDate='01-01-2021', endDate='21-03-2021', objName='',  orgName='', objType="ОО" , objKind='' , objStatus=10, sortCol='date' , sortType='desc')
    fetchObjectsList(stFilterVal.objectType, stFilterVal.organization, limitPlus, 0, startDate, endDate, stFilterSearch.objName, stFilterSearch.orgName,  stFilterVal.objKind, stFilterVal.objStatus, stFilterVal.sortCol, stFilterVal.sortType)
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[fetchObjectsList, stFilterVal.objectType, stFilterVal.organization, stFilterVal.limit,  stFilterVal.dateStart, stFilterVal.dateEnd, stFilterVal.objKind, stFilterVal.objStatus, stFilterVal.sortCol, stFilterVal.sortType]);
  
  useEffect(() => {
    //if (selectObjs.length){
      //refactData(selectObjs);
      setTabValue(selectObjs); 

    //}
    
  },[selectObjs]);

  
  
  const classes = useStyles();

  const valueForBtnMggt = {other:'0',mggt:'1',all:'2'};
  // const valueForBtnOgh = {other:'ОДХ',mggt:'ОО',all:'ДТ'};
  const valueForBtnInWork = {newIW:'0',rabIW:'1',endIW:'2',all:'10'};
  const valueForBtnOgh = {newIW:'ОДХ',rabIW:'ОО',endIW:'ДТ',all:''};

  // const setAmountObj = useCallback((val) => {setAmObjsValue(val)},[]); 
  
  const fetchSearchObj = useCallback(() => {
    const startDate = new Date(stFilterVal.dateStart).toISOString();
    const endDate = new Date(stFilterVal.dateEnd).toISOString();
    const limitPlus = stFilterVal.limit;

    fetchObjectsList(stFilterVal.objectType, stFilterVal.organization, limitPlus, 0, startDate, endDate, stFilterSearch.objName, stFilterSearch.orgName,  stFilterVal.objKind, stFilterVal.objStatus, stFilterVal.sortCol, stFilterVal.sortType)
  
  },[stFilterVal.objectType, stFilterVal.organization, stFilterVal.limit,   stFilterVal.dateStart, stFilterVal.dateEnd, stFilterSearch.objName, stFilterSearch.orgName, stFilterVal.objKind, stFilterVal.objStatus, stFilterVal.sortCol, stFilterVal.sortType, fetchObjectsList]); 

 
  const setRadioValue = useCallback((val) => {setStFilterVal({...stFilterVal, objectType: val} );console.log('radObjOwnMggt :',val)},[stFilterVal]);
  const setRadioValOdh = useCallback((val) => {setStFilterVal({...stFilterVal, objKind: val} );console.log('objKind :',val)},[stFilterVal]);
  const setRadioValInWork = useCallback((val) => {setStFilterVal({...stFilterVal, objStatus: val} );console.log('radObjStatusInWork :',val)},[stFilterVal]);

  const setSearchTextObj = useCallback((val) => {setStFilterSearch({...stFilterSearch, objName: val} );console.log('stFilterSearch objName :',val)},[stFilterSearch]);
  const setSearchTextOrg = useCallback((val) => {setStFilterSearch({...stFilterSearch, orgName: val} );console.log('stFilterSearch orgName :',val)},[stFilterSearch]);

  const setDateStart = useCallback((val) => {setStFilterVal({...stFilterVal, dateStart: val} );console.log('dateStart :',val)},[stFilterVal]);
  const setDateEnd = useCallback((val) => {setStFilterVal({...stFilterVal, dateEnd: val} );console.log('dateEnd :',val)},[stFilterVal]);
  
  // const setRadioValInWork = useCallback((val) => {setRadioValIW(val);console.log('setRadioValInWork :',val)},[]);
      
  return ( 
    <React.Fragment>
       {/* <pre>{JSON.stringify(stFilterVal, null, 2)} </pre> */}
      <div className={classes.seeMore}>
        <StateElements amObjsValue={amObjsValue} />
        <StateElements amObjsValue={amObjsValueCurrent} />
        <div className={classes.datePick}>
            <SearchPanel fetchSearchObj={fetchSearchObj} setSearchTextObj={setSearchTextObj} setSearchTextOrg={setSearchTextOrg} /> 
            <div  style={{display:'flex', flexWrap:'nowrap'}}  >
              <RadioBtnMGGT  defaultVal={stFilterVal.objectType} setRadioValue={setRadioValue} valueForButtons={valueForBtnMggt} />
              <RadioBtnIW   defaultVal={stFilterVal.objStatus}  setRadioValueIW={setRadioValInWork}  valueForButtons={valueForBtnInWork}   />
              <RadioBtnODH   defaultVal={stFilterVal.objKind}  setRadioValue={setRadioValOdh}  valueForButtons={valueForBtnOgh}   />
            </div>
            <div  style={{display:'flex', flexWrap:'nowrap',margin:'4px 8px'}}  >
              <DatePicker setDateStart={setDateStart} /> 
            <DatePickerEnd setDateEnd={setDateEnd} /> 
            </div>
            
        </div>
        <TabObjs tabValue={tabValue} amObjsValue={amObjsValue} isOpenD={true}  rowsPerPage={stFilterVal.limit} setRowsPerPage={setRowsPerPage} setPageT={setPageT}  offset={offsetSt} /> 
        {/* <TabObjs tabValue={tabValue} amObjsValue={amObjsValue} isOpenD={true}  rowsPerPage={stFilterVal.limit} setRowsPerPage={setRowsPerPage} setPageT={setPageT}  offset={stFilterVal.offset} />  */}
        
      </div>
    </React.Fragment> 
  );
}


const mapStateToProps = createStructuredSelector ({
  selectObjs: selectObjsPage, // события короткие данные для таблицы
  selectObjsInfoPage: selectObjsInfoPage, // события короткие данные для таблицы
});

const mapDispatchToProps = (dispatch) => ({
  // Для  {"objectType":"2", "organization":"0", "limit":"100" , "offset":"100", "startDate":"2021-02-19T22:00:00.000Z", "endDate":"2021-03-19T22:00:00.000Z", "objName": "", "orgName": "", "objType": "ОО"}

  // {"objectType":"2", "organization":"0", "limit":"100" , "offset":"100", "startDate":"2021-02-19T22:00:00.000Z", "endDate":"2021-03-19T22:00:00.000Z", "objName": "", "orgName": "", "objType": "ОО","objKind":"","objStatus": "10", "sortCol":"date","sortType":"desc"}
  fetchObjectsList: (objectType, organization, limit, offset, startDate, endDate,objName, orgName,   objKind, objStatus, sortCol, sortType) => dispatch(fetchObjectsListAsync(objectType, organization, limit, offset, startDate, endDate, objName, orgName,   objKind, objStatus, sortCol, sortType)),
});  
export default connect(mapStateToProps,mapDispatchToProps)(TabOneMenu); 
