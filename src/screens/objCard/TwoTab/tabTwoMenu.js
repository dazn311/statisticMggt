import React,{ useState, useCallback,useEffect } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeStyles } from '@material-ui/core/styles';  
import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Snackbar from "@material-ui/core/Snackbar";


import SelectorMggt from '../../../components/selectorMggt';

import DatePicker from './DatePicker';
import DatePickerEnd from './DatePickerEnd';
import SearchPanel from './SearchPanel';
import TabObjsEvent from './TabObjsEvent';
import StateElements from './stateElements';


import {
  fetchObjectsListAsync,
  setMessageError
} from '../../../store/adminPanelTrest/adminPanelTrest.actions';

import {  selectObjsInfoPage } from '../../../store/adminPanelTrest/StatisticPage.selectors';
import { selectErrorFetch } from '../../../store/adminPanelTrest/adminPanelTrest.selectors';


  
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
    // minWidth:1400,
  },
  // amObjs:{alignSelf: 'center',marginLeft:10, padding: '4px 16px'},
  seeMore: {
    marginTop: theme.spacing(1),
    width: window.innerWidth > 500 ? 'calc(100% - 8px)' : '100%'
    
  },
  btnSearch: {height:  '43px', marginLeft: 2, marginTop: 4, backgroundColor: theme.palette.primary.main},
  btnSearchMobile: {height:  '43px', marginLeft: 0, marginTop: 8, width: '100%', backgroundColor: theme.palette.primary.main},
  datePick: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    // color: theme.palette.primary.main,
    // color: 'rgba(0, 0, 0, 0.87)',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    // backgroundColor: theme.palette.background.paper,
    padding: '5px',
    borderRadius: '4px',
    margin: '5px 0px',
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  }
}));


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const valueForBtnMggt = {'смежные':'0','МГГТ':'1','Всем':'2'};
const valueForBtnInWork = {'Новые':'0','В работе':'1','согласованные':'2','Все':'10'};
const valueForBtnOgh = {'ОДХ':'ОДХ','ОО':'ОО','ДТ':'ДТ','Все':'allKind'};

const filterInitial = () => {
  const endDate = new Date().toISOString().split('T')[0];
  // console.log('endDate initial ', endDate)
  return { objectType: '2', organization: '0',limit: '15', offset: '0', dateStart: '2021-01-01', dateEnd: endDate,  objKind:'allKind', objStatus:'10', sortCol:'date', sortType:'desc'  }
}




const analizeObjs = (objs) => {
  // selectObjs
  // console.log('analizeObjs', objs.length);
}



//idObj={idObj} currObj={currObj} />
////////////////////////////////////////////////
const TabOneMenu = ({ fetchObjectsList, selectObjs,selectObjsInfoPage, selectErrorFetch, setMessageError,idObj }) => {

  const [amObjsValue, setAmObjsValue] = useState({totalAmount: 0, withRecs: 0, withoutRecs: 0, tabFiltValueLength: 0, tabValueLength: 0, inWork: 0,inEndWork: 0 }); // выводить статистику
  const [amObjsValueCurrent, setAmObjsValueCurrent] = useState({totalAmount: 0, withRecs: 0, withoutRecs: 0, tabFiltValueLength: 0, tabValueLength: 0, inWork: 0,inEndWork: 0 }); // выводить статистику
  // const [tabValue, setTabValue] = useState([]); // выводить статистику
  const [isLoading, setIsLoading] = useState(false); // выводить статистику
  const [offsetSt, setOffsetSt] = useState('0'); // выводить статистику
  // 19.03.21
  const [stFilterVal, setStFilterVal] = useState(filterInitial); // выводить статистику
  const [stFilterSearch, setStFilterSearch] = useState({ objName:'', orgName:''}); // выводить статистику

  const classes = useStyles();

  console.log('TabOneMenu -- selectObjs ', selectObjs)
  console.log('TabOneMenu -- isLoading ', isLoading)

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
    // fetchObjectsList(stFilterVal.objectType, stFilterVal.organization, limitPlus, newOffset, startDate, endDatePlus, stFilterSearch.objName, stFilterSearch.orgName, newAllKind , stFilterVal.objStatus, stFilterVal.sortCol, stFilterVal.sortType)


  },[stFilterVal,stFilterSearch,fetchObjectsList]);


  useEffect(() => {

    if (selectObjsInfoPage.totalAmount > amObjsValue.totalAmount){
      setAmObjsValue(selectObjsInfoPage);
    }

    setAmObjsValueCurrent(selectObjsInfoPage);

  }, [selectObjsInfoPage.totalAmount, amObjsValue.totalAmount, selectObjsInfoPage, setAmObjsValue, setAmObjsValueCurrent])


  const handleClose = (event, reason) => {
    setMessageError('');
    setIsLoading(false);
  };

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
    // fetchObjectsList(stFilterVal.objectType, stFilterVal.organization, limitPlus, newOffset, startDate, endDatePlus, stFilterSearch.objName, stFilterSearch.orgName, newAllKind , stFilterVal.objStatus, stFilterVal.sortCol, stFilterVal.sortType)
    // console.log('TabOneMenu -- 4  fetchObjectsList  offset',offset);
  },[stFilterVal.objectType, stFilterVal.organization, stFilterVal.limit,   stFilterVal.dateStart, stFilterVal.dateEnd, stFilterSearch.objName, stFilterSearch.orgName, stFilterVal.objKind, stFilterVal.objStatus, stFilterVal.sortCol, stFilterVal.sortType, fetchObjectsList]);

  ///////////////////////////////////////////
  useEffect(() => {
    // setTabValue(selectObjs);
    // setIsLoading(false);

  },[selectObjs]);

///////////////////////////////////////////
  useEffect(() => {

    if ( selectObjs && selectObjs.length < 1){
      // console.log('TabOneMenu -- 444  fetchObjectsList  offset');
      setIsLoading(true);
      // fetchSearchObj('0');
    }else {
      analizeObjs(selectObjs);
    }

  },[fetchSearchObj,selectObjs]);

  ///////////////////////////////////////////



  const setSearchTextObj = useCallback((val) => {
    setStFilterSearch({...stFilterSearch, objName: val });
    // setStFilterVal({...stFilterVal, offset: '0' } );
  } ,[stFilterSearch,stFilterVal]);

  const setSearchTextOrg = useCallback((val) => {
    setStFilterSearch({...stFilterSearch, orgName: val } );
    // setStFilterVal({...stFilterVal, offset: '0' } );
  } ,[stFilterSearch,stFilterVal]);

  const setDateStart = useCallback((val) => {
    setStFilterVal({...stFilterVal, dateStart: val, offset: '0' } );
  },[stFilterVal]);
  const setDateEnd = useCallback((val) => {
    setStFilterVal({...stFilterVal, dateEnd: val, offset: '0' } );
  },[stFilterVal]);

  ///////////////////////////////////////////
  // const valueItems = {val:10, smeg: 'смежные'};
  // uniq objs
  return (
      <React.Fragment> 
        <div className={classes.seeMore}>
          <StateElements amObjsValue={amObjsValue} amObjsValueCurrent={amObjsValueCurrent} selectObjs={selectObjs} />
          <div className={classes.datePick}>
            <SearchPanel  setSearchTextObj={setSearchTextObj} setSearchTextOrg={setSearchTextOrg} />

            <div  style={{display:'flex', justifyContent: 'flex-start', flexWrap: window.innerWidth < 500 ? 'nowrap': 'nowrap', width: '100%', maxWidth: 414}}  >
              <DatePicker setDateStart={setDateStart} />
              <DatePickerEnd setDateEnd={setDateEnd} />
            </div>

            <Button  onClick={()=>{fetchSearchObj('0')}} className={window.innerWidth < 500 ? classes.btnSearchMobile : classes.btnSearch} >
              Поиск 
            </Button>

          </div>
            <TabObjsEvent tabValue={selectObjs} isLoading={isLoading} amObjsValue={amObjsValue} isOpenD={true} stFilterSearch={stFilterSearch}  setPageT={setPageT}  offset={offsetSt} />
           
        </div>
        <Grid item xs={12} style={{display: selectErrorFetch ? 'block': 'none'}} >
          <Paper className={classes.paper}>
            {/* <TabLoader  /> */}

            <Snackbar open={selectErrorFetch} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="error">
                {selectErrorFetch}
              </Alert>
            </Snackbar>
          </Paper>
        </Grid>
      </React.Fragment>
  );
}


const mapStateToProps = createStructuredSelector ({
  // selectObjs: selectObjsPage, // события короткие данные для таблицы
  selectObjsInfoPage: selectObjsInfoPage, // события короткие данные для таблицы
  selectErrorFetch: selectErrorFetch,
});

const mapDispatchToProps = (dispatch) => ({
    setMessageError: () => dispatch(setMessageError()),
    fetchObjectsList: (objectType, organization, limit, offset, startDate, endDate,objName, orgName,   objKind, objStatus, sortCol, sortType) => dispatch(fetchObjectsListAsync(objectType, organization, limit, offset, startDate, endDate, objName, orgName,   objKind, objStatus, sortCol, sortType)),
});
export default connect(mapStateToProps,mapDispatchToProps)(TabOneMenu); 
