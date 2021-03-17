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
import TablePagination from '@material-ui/core/TablePagination';
 
import { fetchObjectsListAsync  } from '../../../store/adminPanelTrest/adminPanelTrest.actions'; 
 
import { fetchDataForEventShortPoints } from '../../../store/adminPanelTrest/adminPanelTrest.selectors'; 
import { selectObjsPage } from '../../../store/adminPanelTrest/objsPage.selectors'; 

import EventDetail from './EventDetail';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(color, objName, organization, objType,objID, objCreationDate) {
  return { color, objName, organization, objType,objID, objCreationDate };
}
 
let rows = [];
// let objsType = ['смежные объекты','объекты в разработке (наши)','все объекты'];
// let objsTypeColor = ['red','green','yellow'];

const refactData = (objectsList) => {
  rows = [];
  if ( objectsList.length === 0 ){
    return false}

  let nodeObjects = {};
  // console.log('refactData -- nodeObjects',objectsList);
  if (Array.isArray(objectsList) ) {
      nodeObjects = _.orderBy(objectsList, ['objName'], ['asc']);
      rows = nodeObjects;
  }
  if (nodeObjects == null) {
    rows = []
  }

  if ( objectsList.length === 0 ){
    return false}
  // console.log('rerender refactData');
  rows = [];
  nodeObjects.map((nodeE) => { 
    var options = {year: 'numeric',month: 'numeric',day: 'numeric',timezone: 'UTC'};
    // const dateCreateObj = nodeE.objCreationDate ? nodeE.objCreationDate.split('T')[0] + ' ('+ nodeE.objCreationDate.split('T')[1] + ')' : '20.03.20';
    const newDate = new Date(nodeE.objCreationDate).toLocaleString("ru", options);

    let newNode = createData('red', nodeE.objName, nodeE.organization.orgname, nodeE.objType, nodeE.objID, newDate);
    rows.push(newNode);
    return newNode
  });
}

// const UserComponent = ({username,orgname}) => (<>
//   <div style={{display: 'flex', flexDirection:'column'}} >
//     <div>{username}</div>
//     <div style={{fontSize:'12', color:'gray'}}>{orgname}</div>
//   </div>
// </>)
////////////////////////////

const TabObjs = ({ selectObjs,  fetchObjectsList,  searchValue, fieldValue }) => {
  const [tabValue, settabValue] = useState([]);
  const [objIDfE, setObjIDfE] = useState(0);
  const [orgRow, setOrgName] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);

  // const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, tabValue.length - page * rowsPerPage);
  // console.log('rerender TabObjs -- emptyRows;',emptyRows);
  console.log('rerender TabObjs -- tabValue;',tabValue);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    console.log('handleChangePage',newPage);
  }; 

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    console.log('handleChangeRowsPerPage');
  };

  
 

  // let orgName ='ss';
  const printUserId = (row) => {
    // console.log('row.userID',row);
    setOrgName(row);
    // setObjIDfE(id);
    setIsOpen(true);
  }
 
  useEffect(() => {
    if (selectObjs.data.objects !== {}){
      refactData(selectObjs.data.objects);
    settabValue(rows);
    }
    // console.log('useEffect selectObjs',selectObjs.data.objects);
  },[selectObjs.data.objects]);
  
   
  const closeDetail = () => {
    setIsOpen(false);
  }

  useEffect(() => {
      //(objectType, organization,limit , offset)
    fetchObjectsList(2,0,160 ,1);
    // console.log('useEffect fetchObjectsList');
  },[fetchObjectsList]);

  // const handleBackButtonClick = (event) => {
  //   onChangePage(event, page - 1);
  // };

  //promyashin////

  // const handleNextButtonClick = (event) => {
  //   onChangePage(event, page + 1);
  // };


  return (
    <><TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{padding: '6px 0px 6px 0px', width: '4px', maxWidth: '2px'}}></TableCell>
            <TableCell align="right">Наименование объекта</TableCell> 
            <TableCell align="right">Балансодержатель</TableCell>
            <TableCell align="right">Тип</TableCell>
            <TableCell align="right">Дата создания</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tabValue && tabValue
          .filter((item, idx) => { return typeof item.[fieldValue] === 'string'  ? item.[fieldValue].toLowerCase().includes(searchValue.toLowerCase()) :' '})
          .filter((item, index) =>{ return index < rowsPerPage * page && index > rowsPerPage * (page -1)})
          .map((row, index) => (
            <TableRow key={index} onClick={()=> { printUserId(row)}}>
              <TableCell align="left" style={{backgroundColor:row.color, padding: '6px 0px 6px 0px', width: '4px', maxWidth: '4px'}}></TableCell>
              <TableCell component="th" scope="row">
                {row.objName}
              </TableCell>
              <TableCell align="right">{row.organization}</TableCell>
              <TableCell align="right">{row.objType}</TableCell>
              <TableCell align="right">{row.objCreationDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
      <TablePagination
              rowsPerPageOptions={[15, 25, 40, { label: 'Все', value: -1 }]}
              colSpan={5}
              count={rows.length}
              // rowsPerPage={rowsPerPage}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'объектов на странице' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              // ActionsComponent={TablePaginationActions}
            />
    </TableContainer>
    <EventDetail objID={objIDfE} orgRow={orgRow} tabValue={tabValue} isOpen={isOpen} closeDetail={closeDetail} />
    </>
  );
}
 
const mapStateToProps = createStructuredSelector ({
    selectObjs: selectObjsPage, // события короткие данные для таблицы
    datesOfFetchForEvent: fetchDataForEventShortPoints, //  дата начала и конца для запроса
  });
  
  const mapDispatchToProps = (dispatch) => ({
    // Для  
    fetchObjectsList: (objectType, organization, offset) => dispatch(fetchObjectsListAsync(objectType, organization, offset)),
  });  
  export default connect(mapStateToProps,mapDispatchToProps)(TabObjs); 