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

import { fetchEventFromPeriodAsync  } from '../../../store/adminPanelTrest/adminPanelTrest.actions'; 

import { selectEventShortPoints, selectStatusEventPoint, selectStatusEnumEventPointColor, fetchDataForEventShortPoints } from '../../../store/adminPanelTrest/adminPanelTrest.selectors'; 

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(color, date, nameEvent, userName, type) {
  return { color, date, nameEvent, userName, type };
}

let rows = [
  createData('new_rec','22/01/2021 (14:28)', 'Отправка сообщения', 'Тараскина Т.А.', 'новое сообщение в событии'),
  createData('new_rec','19/01/2021 (08:22)', 'Отправка сообщения', 'Администратор', 'новое сообщение в событии'),
  createData('new_rec','14/01/2021 (10:44)', 'Создание объекта', 'Васильев В.П.', 'новое сообщение в событии'),
];

const updateData = (eventShortPoints,statusEventPoint,statusEnumEventPointColor) => {
  rows = [];
  let nodesEvent = eventShortPoints;
  if (Array.isArray(eventShortPoints) ) {
      nodesEvent = _.orderBy(eventShortPoints, ['date'], ['desc']);
      
  }

  nodesEvent.map((nodeE) => {
    if (nodeE == null) {
      return []
    }
      const dateFormatt =  nodeE.date || '02-02-2021';
      let newNode = createData(statusEnumEventPointColor[nodeE.type], dateFormatt, nodeE.text, nodeE.user.username, statusEventPoint[nodeE.type]);
      rows.push(newNode);
      
      return newNode
  });
}

const TabOGH = ({ eventShortPoints, statusEventPoint,statusEnumEventPointColor, fetchEventFromPeriod, dataOfFetchForEvent,searchValue, fieldValue }) => {
  const [tabValue, settabValue] = useState([]);
  const classes = useStyles();

  // console.log('init fieldValue',fieldValue);
  useEffect(() => {
    updateData(eventShortPoints.data.nodes,statusEventPoint, statusEnumEventPointColor);
    settabValue(rows);
  },[eventShortPoints,statusEventPoint,statusEnumEventPointColor]);

  useEffect(() => {
    let endDate   = dataOfFetchForEvent.endDate;
    let startDate = dataOfFetchForEvent.startDate;
    // console.log('endDate',endDate);
    if ( endDate !== '0'){
      fetchEventFromPeriod(startDate, endDate);
    }
    
  },[fetchEventFromPeriod,dataOfFetchForEvent])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{padding: '6px 0px 6px 0px', width: '2px', maxWidth: '2px'}}></TableCell>
            <TableCell>Дата</TableCell>
            <TableCell align="right">Описание события</TableCell>
            <TableCell align="right">Пользователь</TableCell>
            <TableCell align="right">Тип изменения</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tabValue
          .filter((item, idx) => item.[fieldValue].toLowerCase().includes(searchValue.toLowerCase()))
          .map((row, index) => (
            <TableRow key={index}>
              <TableCell align="left" style={{backgroundColor:row.color, padding: '6px 0px 6px 0px', width: '2px', maxWidth: '2px'}}></TableCell>
              <TableCell component="th" scope="row">
                {new Date(row.date).toLocaleString('Ru').slice(0,17)}
              </TableCell>
              <TableCell align="right">{row.nameEvent}</TableCell>
              <TableCell align="right">{row.userName}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = createStructuredSelector ({
    eventShortPoints: selectEventShortPoints, // события короткие данные для таблицы
    statusEventPoint: selectStatusEventPoint, // классификация статусов "new_msg"
    statusEnumEventPointColor: selectStatusEnumEventPointColor, // for color elements
    dataOfFetchForEvent: fetchDataForEventShortPoints, //  дата начала и конца для запроса
  });
  
const mapDispatchToProps = (dispatch) => ({
    // запрос для событий за период 
    fetchEventFromPeriod: (start,end) => dispatch(fetchEventFromPeriodAsync(start,end)),
});  
  export default connect(mapStateToProps,mapDispatchToProps)(TabOGH);