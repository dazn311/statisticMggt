'strick'
import React, { useEffect, useState } from 'react';
import _ from "lodash";

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
 
import { fetchObjectsListAsync  } from '../../../store/adminPanelTrest/adminPanelTrest.actions'; 
 
import {  selectEventShortPoints, selectStatusEventPoint, selectStatusEnumEventPointColor, fetchDataForEventShortPoints } from '../../../store/adminPanelTrest/adminPanelTrest.selectors'; 
import { selectObjsPage } from '../../../store/adminPanelTrest/objsPage.selectors'; 

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(color, objName, organization, objType) {
  return { color, objName, organization, objType };
}
 
let rows = [];
// let objsType = ['смежные объекты','объекты в разработке (наши)','все объекты'];
// let objsTypeColor = ['red','green','yellow'];

const refactData = (objectsList,statusEventPoint,statusEnumEventPointColor) => {
  rows = [];
  if ( Object.keys(objectsList).length === 0 ){
    return false}

  let nodeObjects = {};
  console.log('refactData -- nodeObjects',objectsList);
  if (Array.isArray(objectsList) ) {
      nodeObjects = _.orderBy(objectsList, ['objName'], ['asc']);
      rows = nodeObjects;
  }
  if (nodeObjects == null) {
    rows = []
  }

  if ( Object.keys(nodeObjects).length === 0 ){
    return false}
  // console.log('rerender refactData');
  rows = [];
  nodeObjects.map((nodeE) => {

    let newNode = createData('red', nodeE.objName, nodeE.organization.orgname, nodeE.objType);
    rows.push(newNode);
    
    return newNode
  });
}

const UserComponent = ({username,orgname}) => (<>
  <div style={{display: 'flex', flexDirection:'column'}} >
    <div>{username}</div>
    <div style={{fontSize:'12', color:'gray'}}>{orgname}</div>
  </div>
</>)
////////////////////////////

const TabObjs = ({ selectObjs, fetchObjectsList, selectEventShort, statusEventPoint,statusEnumEventPointColor,  searchValue, fieldValue }) => {
  const [tabValue, settabValue] = useState([]);
  const classes = useStyles();

  console.log('rerender Tab1 : selectEventShort.data.nodes');

  const printUserId = (e) => {
    console.log('row.userID',e);
  }
 
  useEffect(() => {
    if (selectObjs.data.objects !== {}){
      refactData(selectObjs.data.objects, statusEventPoint, statusEnumEventPointColor);
    settabValue(rows);
    }
    
    console.log('useEffect selectObjs',selectObjs.data.objects);
  },[selectObjs.data.objects, statusEventPoint, statusEnumEventPointColor]);
  
   

  // console.log('TabObjs selectObjs',selectObjs);

  useEffect(() => {
     
    fetchObjectsList(2,0);
    console.log('useEffect selectEventShort');
  },[fetchObjectsList]);

  // useEffect(() => {
  //   let {startDate, endDate}   = datesOfFetchForEvent;
  //   // let startDate = datesOfFetchForEvent.startDate;
  //   // console.log('endDate',endDate);
  //   // console.log('useEffect fetchEventFromPeriod 1');
  //   if ( endDate !== '0' && startDate !== '0' && startDate <= endDate){
  //     // console.log('useEffect fetchEventFromPeriod 2');
  //     // fetchEventFromPeriod(startDate, endDate);
      
  //   }
     
  // },[fetchEventFromPeriod, datesOfFetchForEvent]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{padding: '6px 0px 6px 0px', width: '4px', maxWidth: '2px'}}></TableCell>
            <TableCell align="right">Наименование объекта</TableCell> 
            <TableCell align="right">Балансодержатель</TableCell>
            <TableCell align="right">Тип</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(tabValue).length && tabValue
          // .filter((item, idx) => item.[fieldValue].toLowerCase().includes(searchValue.toLowerCase()))
          .map((row, index) => (
            <TableRow key={index} onClick={()=> { printUserId(row.objID)}}>
              <TableCell align="left" style={{backgroundColor:row.color, padding: '6px 0px 6px 0px', width: '4px', maxWidth: '4px'}}></TableCell>
              <TableCell component="th" scope="row">
                {row.objName}
              </TableCell>
              <TableCell align="right">{row.organization}</TableCell>
              <TableCell align="right">{row.objType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
 
const mapStateToProps = createStructuredSelector ({
    selectObjs: selectObjsPage, // события короткие данные для таблицы
    selectEventShort: selectEventShortPoints, // события короткие данные для таблицы
    statusEventPoint: selectStatusEventPoint, // классификация статусов "new_msg"
    statusEnumEventPointColor: selectStatusEnumEventPointColor, // for color elements
    datesOfFetchForEvent: fetchDataForEventShortPoints, //  дата начала и конца для запроса
  });
  
  const mapDispatchToProps = (dispatch) => ({
    // Для  
    fetchObjectsList: (objectType, organization, offset) => dispatch(fetchObjectsListAsync(objectType, organization, offset)),
  });  
  export default connect(mapStateToProps,mapDispatchToProps)(TabObjs); 