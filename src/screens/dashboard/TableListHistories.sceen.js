import * as React from 'react';
import _ from "lodash";

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { DataGrid } from '@material-ui/data-grid';

import { selectEventShortPoints, selectStatusEventPoint, selectStatusEnumEventPointColor } from '../../store/adminPanelTrest/adminPanelTrest.selectors'; 


const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
    // { field: 'color', headerName: '', width: 2 , padding: 0, type: 'string'},
    { field: 'date', headerName: 'Дата', type: 'string', width: 190, direction: 'desc' },
    { field: 'text', headerName: 'Описание события', width: 230 },
    {
        field: 'fullName',
        headerName: 'Пользователь',
        description: 'This column has a value getter and is not sortable.',
        // sortable: false,
        width: 480,
        // valueGetter: (params) =>
        // `${params.getValue('text') || ''} ${params.getValue('type') || ''}`,
    },
    { field: 'type', headerName: 'Тип изменения', width: 280 },
]; 

let rows = [
  // { id: 1, type: 'Snow', text: 'Jon', date: '35',fullName: 'Vasya' },
];



const TableList = ({ eventShortPoints, statusEventPoint,statusEnumEventPointColor }) => {
    rows = [];
    let nodesEvent = [];
    if (Array.isArray(eventShortPoints) ) {
      nodesEvent = _.orderBy(eventShortPoints, ['date'], ['desc']);
    }
    
    nodesEvent.map((nodeE,index) => {
        const dateFormatt =  nodeE.date.split('T')[0].split('-')[2] + '/' + nodeE.date.split('T')[0].split('-')[1] + '/' + nodeE.date.split('T')[0].split('-')[0] + ' (' +  nodeE.date.split('T')[1].slice(0,5) + ')';
        const orgUsrName = nodeE.user.username + '  (  ' + nodeE.user.orgname + '  )  ';
        let newNode = { id: index, date: dateFormatt, text: nodeE.text, fullName: orgUsrName, type: statusEventPoint[nodeE.type]};
        rows.push(newNode);
        return newNode
    });
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} onRowHover pageSize={5} loading={false} icons />
    </div>
  );
}

const mapStateToProps = createStructuredSelector ({
    eventShortPoints: selectEventShortPoints, // события короткие данные для таблицы
    statusEventPoint: selectStatusEventPoint, // классификация статусов "new_msg"
    statusEnumEventPointColor: selectStatusEnumEventPointColor, // for color elements
  });
  
  
export default connect(mapStateToProps)(TableList);