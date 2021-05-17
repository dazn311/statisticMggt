import React,{ useState, useCallback,useEffect } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeStyles } from '@material-ui/core/styles';  
import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Snackbar from "@material-ui/core/Snackbar";

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
import {  selectCurrentObj } from '../../../store/objs/obj.selectors';
import { selectErrorFetch } from '../../../store/adminPanelTrest/adminPanelTrest.selectors';


import { setCurFilterSenderAsync, setCurFilterOwnAsync, setCurDateStartAsync, setCurDateEndAsync} from '../../../store/objs/obj.actions'
  
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

// const valueForBtnMggt = {'смежные':'0','МГГТ':'1','Всем':'2'};
// const valueForBtnInWork = {'Новые':'0','В работе':'1','согласованные':'2','Все':'10'};
// const valueForBtnOgh = {'ОДХ':'ОДХ','ОО':'ОО','ДТ':'ДТ','Все':'allKind'};

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
const TabTwoMenu = ({ selectObjs,selectObjsInfoPage, selectErrorFetch, setMessageError, selectCurrentObj, setCurFilterSender, setCurFilterOwn, setCurDateStart, setCurDateEnd }) => {

  const [amObjsValue, setAmObjsValue] = useState({totalAmount: 0, withRecs: 0, withoutRecs: 0, tabFiltValueLength: 0, tabValueLength: 0, inWork: 0,inEndWork: 0 }); // выводить статистику
  const [amObjsValueCurrent, setAmObjsValueCurrent] = useState({totalAmount: 0, withRecs: 0, withoutRecs: 0, tabFiltValueLength: 0, tabValueLength: 0, inWork: 0,inEndWork: 0 }); // выводить статистику

  const [isLoading, setIsLoading] = useState(false); // выводить статистику

  const classes = useStyles();

  // console.log('888 TabTwoMenu -- selectCurrentObj ', selectCurrentObj)

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

  const setSearchTextObj = useCallback((val) => {
    const lowText = val.toLowerCase();
    setCurFilterSender(lowText);
  } ,[setCurFilterSender]);

  const setSearchTextOrg = useCallback((val) => {
    const lowText = val.toLowerCase();
    setCurFilterOwn(lowText);
  } ,[setCurFilterOwn]);

  const setDateStart = useCallback((val) => {
    setCurDateStart(val);
  },[setCurDateStart]);
  const setDateEnd = useCallback((val) => {
    setCurDateEnd(val)
  },[setCurDateEnd]);

  return (
      <React.Fragment> 
        <div className={classes.seeMore}>
          <StateElements   selectObjs={selectObjs} />
          <div className={classes.datePick}>
            <SearchPanel  setSearchTextObj={setSearchTextObj} setSearchTextOrg={setSearchTextOrg} />

            <div  style={{display:'flex', justifyContent: 'flex-start', flexWrap: window.innerWidth < 500 ? 'nowrap': 'nowrap', width: '100%', maxWidth: 414}}  >
              <DatePicker setDateStart={setDateStart} />
              <DatePickerEnd setDateEnd={setDateEnd} />
            </div>


          </div>
            <TabObjsEvent tabValue={selectCurrentObj} isLoading={isLoading} amObjsValue={amObjsValue} isOpenD={true}   />
           
        </div>
        <Grid item xs={12} style={{display: selectErrorFetch ? 'block': 'none'}} >
          <Paper className={classes.paper}>
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
  selectCurrentObj: selectCurrentObj, // события короткие данные для таблицы
  selectObjsInfoPage: selectObjsInfoPage, // события короткие данные для таблицы
  selectErrorFetch: selectErrorFetch,
});

const mapDispatchToProps = (dispatch) => ({
    setCurFilterSender: (filter) => dispatch(setCurFilterSenderAsync(filter)),
    setCurFilterOwn: (filter) => dispatch(setCurFilterOwnAsync(filter)),
    setCurDateStart: (date) => dispatch(setCurDateStartAsync(date)),
    setCurDateEnd: (date) => dispatch(setCurDateEndAsync(date)),
    setMessageError: () => dispatch(setMessageError()),
});
export default connect(mapStateToProps,mapDispatchToProps)(TabTwoMenu);
