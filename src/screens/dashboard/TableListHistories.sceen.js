import * as React from 'react';
// import _ from "lodash";

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { DataGrid } from '@material-ui/data-grid';

import { selectEventShortPoints, selectStatusEventPoint, selectStatusEnumEventPointColor } from '../../store/adminPanelTrest/adminPanelTrest.selectors'; 
// import BackdropForAllPage from '../../components/blackDrop/black-drop.component';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import {useEffect} from "react";
import {useState} from "react";



const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
    // { field: 'color', headerName: '', width: 2 , padding: 0, type: 'string'},
    { field: 'date', headerName: 'Дата', type: 'string', width: 160, direction: 'desc' },
    { field: 'text', headerName: 'Описание события', width: 200 },
    {
        field: 'fullName',
        headerName: 'Пользователь',
        description: 'Эту колонку нельзя выбрать.',
        // sortable: false,
        width: 420,
        // valueGetter: (params) =>
        // `${params.getValue('text') || ''} ${params.getValue('type') || ''}`,
    },
    { field: 'type', headerName: 'Тип изменения', width: 260 },
]; 


let thisDate = new Date();
thisDate = thisDate.toISOString();
thisDate = thisDate.split('T')[0];

const TableList = ({ eventShortPoints, statusEventPoint,statusEnumEventPointColor,setData }) => {
    const [dataTab, setDataTab] = useState([]);
    let rows = [
        // { id: 1, type: 'Snow', text: 'Jon', date: '35',fullName: 'Vasya' },
    ];
    let allData = [];

    useEffect(() => {


        let amoutEventsAll = 0;

        let amoutAllMessagesOfLastDay = 0;
        let amoutEventsEndedOfLastDay = 0;
        let amoutEventsOfLastDay = 0;


        let arrListType = ["new_rec", "new_msg"];


        // rows = [];

        eventShortPoints.map((nodeE,index) => {
            const dateFormatt =  nodeE.date.split('T')[0].split('-')[2] + '/' + nodeE.date.split('T')[0].split('-')[1] + '/' + nodeE.date.split('T')[0].split('-')[0] + ' (' +  nodeE.date.split('T')[1].slice(0,5) + ')';
            const dateForStatics =  nodeE.date.split('T')[0];
            const orgUsrName = nodeE.user.username + '  (  ' + nodeE.user.orgname + '  )  ';
            let newNode = { id: index, date: dateFormatt, text: nodeE.text, fullName: orgUsrName, type: statusEventPoint[nodeE.type]};
            rows.push(newNode);
            // for statistics
            if (nodeE.type === 'new_rec'){
                amoutEventsAll += 1;
            }

            if ( dateForStatics === thisDate){
                amoutAllMessagesOfLastDay += 1;
                if (nodeE.type === 'new_rec'){
                    // console.log('99888  nodeE',nodeE);
                    amoutEventsOfLastDay += 1;
                }else if (nodeE.type === 'done_rec'){
                    amoutEventsEndedOfLastDay += 1;
                }
            }

            if ( !arrListType.includes(nodeE.type)){
                arrListType.push(nodeE.type);
            }



            return newNode
        });


        const amoutEventsAllDay = { name: 'Всего событий ', count: amoutEventsAll};

        const amoutAllMessages = { name: 'Всего сообщений сегодня ', count: amoutAllMessagesOfLastDay};
        const amoutEvents = { name: 'Всего событий сегодня ', count: amoutEventsOfLastDay};
        const amoutEventsEnded = { name: 'Всего согласованых событий сегодня ', count: amoutEventsEndedOfLastDay};

        console.log('amoutEventsAllDay,  amoutAllMessages,  amoutEvents,  amoutEventsEnded', amoutEventsAllDay , amoutAllMessages , amoutEvents , amoutEventsEnded);


        allData.push(amoutEvents);
        allData.push(amoutAllMessages);
        allData.push(amoutEventsEnded);
        allData.push(amoutEventsAllDay);


        setData(allData);
        setDataTab(rows);

        console.log('rows length',rows.length);

    },[eventShortPoints])





 
  if ( dataTab.length === 0){
    return (<div style={{width:'100%', display:'flex', justifyContent:'center'}}><CircularProgress size={34} color="secondary" /> </div>)
  }

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <DataGrid rows={dataTab} columns={columns} onRowHover pageSize={5} loading={false} icons />
    </div>
  );
} 

const mapStateToProps = createStructuredSelector ({
    eventShortPoints: selectEventShortPoints, // события короткие данные для таблицы
    statusEventPoint: selectStatusEventPoint, // классификация статусов "new_msg"
    statusEnumEventPointColor: selectStatusEnumEventPointColor, // for color elements
  });
  
  
export default connect(mapStateToProps)(TableList);