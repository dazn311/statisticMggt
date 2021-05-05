
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
// import _ from "lodash";

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress'; 
import Pagination from '@material-ui/lab/Pagination'; 

import { Random } from 'react-animated-text';
  
import MessAlert from './Messages.alert';
  
import { setObjCurrForDetailPageAsync  } from '../../../store/adminPanelTrest/adminPanelTrest.actions'; 
 
import { fetchDataForEventShortPoints } from '../../../store/adminPanelTrest/adminPanelTrest.selectors'; 
import { selectObjsInfoPage } from '../../../store/adminPanelTrest/StatisticPage.selectors';  
  
import EventDetail from './EventDetail';
 
const useStyles = makeStyles({
  progress: {
    width: '100%',
    '& > * + *': {
      marginTop: 4,
    },
    marginTop: 4,
  },
  table: {
    minWidth: 650,
    borderTop: '1px solid rgb(130 119 119 / 47%)'
  },
  cell: {
    minHeight: 20,  
    opacity: 0.3
  },
  cellOpacity: {
    minHeight: 20, 
    opacity: 0.1
  },
}); 

const LinearIndeterminate = () => {
  const classes = useStyles();

  return (
    <div className={classes.progress}>
      <LinearProgress />
      {/* <LinearProgress color="secondary" /> */}
    </div>
  );
}

////////////////////////////

// let pageCoutnt = 0;
const TabActive = ({ setObjCurrForDetailPage, tabValue, selectObjsInfo, isOpenD=true, setPageT,offset, isLoading }) => {

  const [page, setPage] = React.useState(1); 
  const [orgRow, setOrgName] = useState({});
  const [isOpenDetail, setIsOpenDetail] = useState(false); 
  
  const history = useHistory(); 
 

  useEffect(() => { 
    if (offset === '0'){
      setPage(1);
    }
    
  },[offset])

  const classes = useStyles();
   
  const handleChangePage = (event, newPage) => { 
      // setPageT(newPage);
      // setPage(newPage);
   // }
     
    // console.log('handleChangePage --newPage',newPage);
    // console.log('handleChangePage -- pageCoutnt',pageCoutnt);
  }; 

  // для детальной информации
  const closeDetail = () => {
    setIsOpenDetail(false);
  }


  const showEvents = (row) => { 
      // setOrgName(row);
      // setObjCurrForDetailPage(row);  
      
      // history.push({
      //   pathname: `/stats/obj/${row.objID}`, 
      //    row: row
      // });
  }
 
  let openRed = false, openGreen = false;

 
  if (!tabValue) { 
    openRed = true; 
  }else {
    openRed = false; 
  }
  
  const tabValue2 = []
  return ( 
    <>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{padding: '6px 0px 6px 0px', width: '4px', maxWidth: '2px'}}></TableCell>
            <TableCell align="right">Тип действия</TableCell> 
            <TableCell align="right">Дата</TableCell>
            <TableCell align="right">Информация</TableCell>  
          </TableRow>
        </TableHead>
        <TableBody>
          {tabValue2.length ?
           tabValue
          // .filter((row,i) => i < 16)
          .map((row, index) => (
            <TableRow key={index} onClick={()=> { showEvents(row)}}  style={ {backgroundColor: index % 2 === 0 ? '#80808038': '', opacity: isLoading  ? .3 : 1, scale: isLoading  ? .3 : 1}} >
              <TableCell align="left" style={{backgroundColor:row.color, padding: '6px 0px 6px 0px', width: '4px', maxWidth: '4px'}}></TableCell>
              <TableCell component="th" scope="row" style={ {  scale: isLoading  ? .3 : 1}}>
                {!isLoading ? row.objName : <Random text={row.objName}  effect="verticalFadeOut" effectDirection="down" effectChange={3.0} />}
              </TableCell>
              <TableCell align="right">
              {!isLoading ? row.objName : <Random text={row.organization.orgname}  effect="verticalFadeOut" effectDirection="down" effectChange={3.0} />}
                          </TableCell>
              <TableCell align="right">
              {!isLoading ? row.objType : <Random text={row.objType}  effect="verticalFadeOut" effectDirection="down" effectChange={3.0} />} 
              </TableCell> 
            </TableRow>
          )) : [{typeEv: 'new_rec', dateEvent:'02.05.21', messData:'новое событие'},
          {typeEv: 'new_rec', dateEvent:'02.05.21', messData:'новое событие'},
          {typeEv: 'new_rec', dateEvent:'02.05.21', messData:'новое событие'},
          {typeEv: 'new_msg', dateEvent:'02.05.21', messData:'новое событие'},
          {typeEv: 'new_msg', dateEvent:'02.05.21', messData:'новое событие'},
          {typeEv: 'done_rec', dateEvent:'02.05.21', messData:'новое событие'},
          {typeEv: 'new_msg', dateEvent:'02.05.21', messData:'новое событие'},
          {typeEv: 'new_msg', dateEvent:'02.05.21', messData:'новое событие'},
          {typeEv: 'new_msg', dateEvent:'02.05.21', messData:'новое событие'},
          {typeEv: 'new_rec', dateEvent:'02.05.21', messData:'новое событие'},
          {typeEv: 'done_rec', dateEvent:'02.05.21', messData:'новое событие'},
          {typeEv: 'new_msg', dateEvent:'02.05.21', messData:'новое событие'},
          {typeEv: 'new_msg', dateEvent:'02.05.21', messData:'новое событие'},
          {typeEv: 'done_rec', dateEvent:'02.05.21', messData:'новое событие'},
          {typeEv: 'new_rec', dateEvent:'02.05.21', messData:'новое событие'}].map((num, index) => (
            <TableRow key={index}    style={ {backgroundColor: index % 2 === 0 ? '#80808038': '' }} >
              <TableCell className={index % 2 === 0 ? classes.cell : classes.cellOpacity} align="left" style={{ width: '4px', maxWidth: '4px'}}><LinearIndeterminate /></TableCell>
              <TableCell className={index % 2 === 0 ? classes.cell : classes.cellOpacity} component="th" scope="row"> {num.typeEv} <LinearIndeterminate />  </TableCell>
              <TableCell className={index % 2 === 0 ? classes.cell : classes.cellOpacity} align="right">{num.dateEvent}<LinearIndeterminate /></TableCell>
              <TableCell className={index % 2 === 0 ? classes.cell : classes.cellOpacity} align="right">{num.messData}<LinearIndeterminate /></TableCell> 
            </TableRow>))   
        }
        </TableBody> 
      </Table>
      <div style={{display:'flex',margin: 18, opacity: isLoading ? .3 : 1}}> 
         <Pagination count={selectObjsInfo.totalPages} page={page} onChange={handleChangePage} color="primary" /> 
      </div>
     
    </TableContainer>
     
    <EventDetail  orgRow={orgRow}  isOpen={isOpenDetail} closeDetail={closeDetail} />
    <MessAlert  openRed={openRed} openGreen={openGreen} />
    </>
  );
}

const mapStateToProps = createStructuredSelector ({ 
    selectObjsInfo: selectObjsInfoPage, // события короткие данные для таблицы
    datesOfFetchForEvent: fetchDataForEventShortPoints, //  дата начала и конца для запроса
  });
  
  const mapDispatchToProps = (dispatch) => ({ 
    setObjCurrForDetailPage: (object ) => dispatch(setObjCurrForDetailPageAsync(object )),
  });  
  export default connect(mapStateToProps,mapDispatchToProps)(TabActive); 