import * as React from 'react'; 

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
 
import { selectEventShortPoints, selectStatusEventPoint, selectStatusEnumEventPointColor } from '../../store/adminPanelTrest/adminPanelTrest.selectors'; 
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import {useEffect} from "react";
import {useState} from "react";

import TableListHistories from './TableListHistories.sceen'
import MessAlert from './Messages.alert'
 

let thisDate = new Date();
thisDate = thisDate.toISOString();
thisDate = thisDate.split('T')[0];

async function postData(url = '', data = {}) { 
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

// let openGreen = false;
let rows = [
        // { id: 1, type: 'Snow', text: 'Jon', date: '35',fullName: 'Vasya' },
    ];
    let allData = [];

const TableList = ({ eventShortPoints, statusEventPoint,setData }) => {
    const [dataTab, setDataTab] = useState([]); 
    const [currentMess, setCurrentMess] = useState([]); 

  const [openGreenf, setOpenGreen] = React.useState(false);

    
    

    useEffect(() => {
        let amountEventsAll = 0;

        let amountAllMessagesOfLastDay = 0;
        let amountEventsEndedOfLastDay = 0;
        let amountEventsOfLastDay = 0;
        
        allData = [];
        rows = [];
        let arrListType = ["new_rec", "new_msg"]; 

        eventShortPoints.map((nodeE,index) => {
            const dateFormatShort =  nodeE.date.split('T')[0].split('-')[2] + '/' + nodeE.date.split('T')[0].split('-')[1] + '/' + nodeE.date.split('T')[0].split('-')[0] + ' (' +  nodeE.date.split('T')[1].slice(0,5) + ')';
            const dateForStatics =  nodeE.date.split('T')[0];
            const orgUsrName = nodeE.user.username + '  (  ' + nodeE.user.orgname + '  )  ';
            let newNode = { id: index, date: dateFormatShort, text: nodeE.text, fullName: orgUsrName, type: statusEventPoint[nodeE.type], msg_id: nodeE.node_local.info};
            // let newNode = { id: index, date: dateFormatShort, text: nodeE.text, fullName: orgUsrName, type: statusEventPoint[nodeE.type]};
            rows.push(newNode);
            // for statistics
            if (nodeE.type === 'new_rec'){
                amountEventsAll += 1;
            }

            if ( dateForStatics === thisDate){
                amountAllMessagesOfLastDay += 1;
                if (nodeE.type === 'new_rec'){
                    amountEventsOfLastDay += 1;
                }else if (nodeE.type === 'done_rec'){
                    amountEventsEndedOfLastDay += 1;
                }
            }

            if ( !arrListType.includes(nodeE.type)){
                arrListType.push(nodeE.type);
            }

            return newNode
        });


        const amountEventsAllDay = { name: 'Всего событий ', count: amountEventsAll};

        const amountAllMessages = { name: 'Всего сообщений сегодня ', count: amountAllMessagesOfLastDay};
        const amountEvents = { name: 'Всего событий сегодня ', count: amountEventsOfLastDay};
        const amountEventsEnded = { name: 'Всего согласованых событий сегодня ', count: amountEventsEndedOfLastDay}; 

        allData.push(amountEvents);
        allData.push(amountAllMessages);
        allData.push(amountEventsEnded);
        allData.push(amountEventsAllDay);

        setData(allData); // parent func
        setDataTab(rows); 
    },[eventShortPoints, setData, statusEventPoint])


    if ( dataTab.length === 0){
        return (<div style={{width:'100%', display:'flex', justifyContent:'center'}}><CircularProgress size={34} color="secondary" /> </div>)
    }

    const addMess = (msgID,messText) => { 
        const newData = dataTab.map((elem) => {
            if(elem.id === msgID){
                // console.log('elem.id',elem.id);
                return {...elem, type: messText}; 
            }
            return elem
        })
        // console.log('setDataTab: ', messText);
        setDataTab(newData);
    }
    const fetchMessageOneAsync = (rowID,msgID=0)  => { 
        const urlUserOnline = 'https://ismggt.ru/query/message/data';
        // const urlUserOnline = 'http://localhost:3005/query/recombination/one';
          postData(urlUserOnline, { msg_id: msgID })
              .then((msg) => { 

                    if(msg){
                        addMess(rowID, msg.msg_text); 
                        setCurrentMess(msg.msg_text);
                        setOpenGreen(true);
                    }
              })
              .catch(error => console.log(error.message));
        
      };

    const handleClickOpenFmConfigForm = (row) => {   
        if(row.msg_id.msg_id){
            fetchMessageOneAsync(row.id,row.msg_id.msg_id); 
        }
        
    }


    return (
        <>
        <TableListHistories dataTab={dataTab}  handleClickOpenFmConfigForm={handleClickOpenFmConfigForm} /> 
        <MessAlert currentMess={currentMess} setOpenGreen={setOpenGreen} openGreen={openGreenf} />
        </>
    );
}

const mapStateToProps = createStructuredSelector ({
    eventShortPoints: selectEventShortPoints, // события короткие данные для таблицы
    statusEventPoint: selectStatusEventPoint, // классификация статусов "new_msg"
    statusEnumEventPointColor: selectStatusEnumEventPointColor, // for color elements
});


export default connect(mapStateToProps)(TableList);