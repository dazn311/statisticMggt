import React, {useState,useEffect, useCallback }  from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { reduce } from 'lodash'; 


 
import LineChartComp from './LineChartWithXAxisPading';

import { selectCountUsersGraph, selectIsFetchingUserOnline, selectAmountEventGraph, selectAmountEndEventGraph } from '../../store/adminPanelTrest/adminPanelTrest.selectors';

import { fetchAmountUsersForGraphicsAsync,fetchAmountNewEventsForGraphicAsync,fetchAmountEndEventsForGraphicAsync  } from '../../store/adminPanelTrest/adminPanelTrest.actions'; 



 

let dataInit0 = [
  {
    name: '(00-07)', Events: null, Users: null, Closed: null, amt: 3,
  },
  {
    name: '08:00', Events: null, Users: null, Closed: null, amt: 3,
  },
  {
    name: '09:00', Events: null, Users: null, Closed: null, amt: 3,
  },
  {
    name: '10:00', Events: null, Users: null, Closed: null, amt: 4,
  },
  {
    name: '11:00', Events: null, Users: null, Closed: null, amt: 40,
  },
  {
    name: '12:00', Events: null, Users: null, Closed: null, amt: 14,
  },{
    name: '13:00', Events: null, Users: null, Closed: null, amt: 14,
  },
  {
    name: '14:00', Events: null, Users: null, Closed: null, amt: 21,
  },
  {
    name: '15:00', Events: null, Users: null, Closed: null, amt: 21,
  },
  {
    name: '16:00', Events: null, Users: null, Closed: null, amt: 32,
  },
  {
    name: '17:00', Events: null, Users: null, Closed: null, amt: 30,
  },
  {
    name: '18:00', Events: null, Users: null, Closed: null, amt: 0,
  },
  {
    name: '(19-23)', Events: null, Users: null, Closed: null, amt: 0,
  },
];
const dataInit = [
  {
    name: '(00-07)', Events: null, Users: null, Closed: null, amt: 3,
  },
  {
    name: '08:00', Events: null, Users: null, Closed: null, amt: 3,
  },
  {
    name: '09:00', Events: null, Users: null, Closed: null, amt: 3,
  },
  {
    name: '10:00', Events: null, Users: null, Closed: null, amt: 4,
  },
  {
    name: '11:00', Events: null, Users: null, Closed: null, amt: 40,
  },
  {
    name: '12:00', Events: null, Users: null, Closed: null, amt: 14,
  },{
    name: '13:00', Events: null, Users: null, Closed: null, amt: 14,
  },
  {
    name: '14:00', Events: null, Users: null, Closed: null, amt: 21,
  },
  {
    name: '15:00', Events: null, Users: null, Closed: null, amt: 21,
  },
  {
    name: '16:00', Events: null, Users: null, Closed: null, amt: 32,
  },
  {
    name: '17:00', Events: null, Users: null, Closed: null, amt: 30,
  },
  {
    name: '18:00', Events: null, Users: null, Closed: null, amt: 0,
  },
  {
    name: '(19-23)', Events: null, Users: null, Closed: null, amt: 0,
  },
];

let dataTmp = [
  {
    name: '(00-07)', Events: null, Users: null, Closed: null, amt: 3,
  },
  {
    name: '08:00', Events: null, Users: null, Closed: null, amt: 3,
  },
  {
    name: '09:00', Events: null, Users: null, Closed: null, amt: 3,
  },
  {
    name: '10:00', Events: null, Users: null, Closed: null, amt: 4,
  },
  {
    name: '11:00', Events: null, Users: null, Closed: null, amt: 40,
  },
  {
    name: '12:00', Events: null, Users: null, Closed: null, amt: 14,
  },{
    name: '13:00', Events: null, Users: null, Closed: null, amt: 14,
  },
  {
    name: '14:00', Events: null, Users: null, Closed: null, amt: 21,
  },
  {
    name: '15:00', Events: null, Users: null, Closed: null, amt: 21,
  },
  {
    name: '16:00', Events: null, Users: null, Closed: null, amt: 32,
  },
  {
    name: '17:00', Events: null, Users: null, Closed: null, amt: 30,
  },
  {
    name: '18:00', Events: null, Users: null, Closed: null, amt: 0,
  },
  {
    name: '(19-23)', Events: null, Users: null, Closed: null, amt: 0,
  },
];
 
let currentHours = 0;
let max_hours = 18;

let usersCount = 0;
let eventsAmount = 0;
let endedAmount = 0;

const LineChartWrap = ({fetchAmountUsers,fetchAmountNewEventsForGraphicAsync,fetchAmountEndEventsForGraphicAsync,selectCountUsers,selectAmountEndedEvent,selectAmountNewEvent}) => { 
  
  const [offSet,setOffset] = useState(0);
  // const [data,setData] = useState(dataInit);
  const [isToDay,setIsToDay] = useState(true);
  const [curDate,setCurDate] = useState(new Date())
  const [isFetchingUserOnline] = useState(false)
  // const [isFetchingUserOnline,setisFetchingUserOnline] = useState(false)

  // console.log('curDate',curDate.toISOString());
    

  const fetchAll = useCallback((ofss=0) => {
    max_hours = 18;
    // console.log('fetchAll -- ofss: ', ofss);
    let ofs = 0;
    const curDay = new Date();
    if (ofss === 1 && offSet === 0){ // оста
      setIsToDay(true);
        return
    } 
    if (ofss === 1 && offSet === -1){ // оста
      setIsToDay(true);
    }else if(offSet < 0){
      setIsToDay(false);
    }
  
    ofs = ofss + offSet;
    
    ofs = parseInt(ofs);
    setOffset(ofs);
    curDay.setDate(curDay.getDate() + ofs);
    // console.log('curDay',curDay);

    setCurDate(curDay);

    currentHours = parseInt(curDay.toISOString().split('T')[1].slice(0,2)) + 3;
    
    const todayStart = curDay.toISOString().split('T')[0] + 'T00:00:00.000Z';

    let todayEnd = curDay.toISOString().split('T')[0] + 'T23:00:00.000Z';
    // console.log('todayEnd 1',todayEnd);
    // if(isToDay){
    // if (ofss === 1 && offSet === 0){
    //   const currentHoursPlusOne = currentHours + 1;
    //   todayEnd = curDay.toISOString().split('T')[0] +'T'+ currentHoursPlusOne + ':00:00.000Z';
    //   // console.log('todayEnd 2',todayEnd);
    // }
    
    console.log('ofs (fetchAll)',ofs);
    console.log('todayStart (fetchAll)',todayStart);
    console.log('todayEnd (fetchAll)',todayEnd);

    fetchAmountUsers(todayStart,todayEnd);
    fetchAmountNewEventsForGraphicAsync(todayStart,todayEnd);
    fetchAmountEndEventsForGraphicAsync(todayStart,todayEnd);
     
  },[offSet,fetchAmountUsers, fetchAmountNewEventsForGraphicAsync, fetchAmountEndEventsForGraphicAsync]);
 
  // console.log('currentHours',currentHours);

  useEffect(() => {
    fetchAll(0);
    setTimeout(() => {
      fetchAll(0);
    }, 500);
    
  }, [fetchAll])
  
  useEffect(() => {
    dataTmp = dataInit;
    dataInit0 = dataInit;
    
    for (let index = 8; index <= 19; index++) {
      const indexMinus = index -7;
      dataTmp[indexMinus] = {...dataInit[indexMinus], Events: null, Users: null, Closed: null};
      dataInit0[indexMinus] = {...dataTmp[indexMinus], Events: null, Users: null, Closed: null};
    }
    
    
  }, [])
  

////////// -- User Online -- ////////////////////////////////////
  const getUsers = useCallback(() => {
    const usersLine = selectCountUsers.data.chartData;
    if(isToDay) {
      max_hours = currentHours;
    }else {
      max_hours = 18;
    }
    // console.log('max_hours',max_hours);
    //пользователи в начале дня
    const usersLine2 = usersLine.slice(0,7);
    const usersLine3 = reduce(usersLine2,(sum,n)=>(sum + n),0);
    const newObj = {...dataInit[0], Users: usersLine3};
    dataTmp[0] = newObj;
    if (isToDay){usersCount = usersLine3};

    //пользователи в середине дня
    for (let index = 8; index <= max_hours; index++) {
      const indexMinus = index -7;
      const newObjDay = {...dataTmp[indexMinus], Users: usersLine[index]};
      dataTmp[indexMinus] = newObjDay;
      // usersCount = usersLine[index];
      if (isToDay){
        usersCount = usersLine[index];
      }
    }
    // if(!isToDay) {usersCount = null;}

    //пользователи в конце дня
    if (currentHours > 17 || !isToDay){
      const usersLine4 = usersLine.slice(18);
      const usersSumm = reduce(usersLine4,(sum,n)=>(sum + n),0);
      const newUsrEndDay = {...dataTmp[12], Users: usersSumm};
      dataTmp[12] = newUsrEndDay;
      if (isToDay){usersCount = usersSumm;}
    }

  },[selectCountUsers, isToDay]);



  ////////////////// -- NewEvents -- ////////////////////
  const getNewEvents = useCallback(() => {
    const eventsLine = selectAmountNewEvent.data.chartData;
    if(isToDay) {
      max_hours = currentHours;
    }else {
      max_hours = 18;
    }

    const startDataNewEvent = eventsLine.slice(0,7);
    const startDataNewEventSum = reduce(startDataNewEvent,(sum,n)=>(sum + n),0);
    const newObjs = {...dataTmp[0], Events: startDataNewEventSum};
    dataTmp[0] = newObjs;
    if (isToDay){
      eventsAmount = startDataNewEventSum;
    }
    
    
    const startNewEvent = eventsLine.slice(8,max_hours+1);
    startNewEvent.forEach((el,index) => {
      const indexPlus = index +1;
      const newObj = {...dataTmp[indexPlus], Events: el};
      dataTmp[indexPlus] = newObj;
      if (isToDay){
        eventsAmount = el;
      }
      
    });
    // if(!isToDay) { eventsAmount = null;}

    // NewEvents end day
    if (currentHours > 17 || !isToDay){
        const endDataNewEvent = eventsLine.slice(18);
        const endDataNewEventSum = reduce(endDataNewEvent,(sum,n)=>(sum + n),0);
        const newObjn = {...dataTmp[12], Events: endDataNewEventSum};
        dataTmp[12] = newObjn;
        if (isToDay){eventsAmount = endDataNewEventSum};
    }
  },[selectAmountNewEvent, isToDay]);

  
  const getEndedEvents = useCallback(() => {
    const endedLine = selectAmountEndedEvent.data.chartData;
    if(isToDay) {
      max_hours = currentHours;
    }else {
      max_hours = 18;
    }

    //Ended Events start Day
    const startDataClose = endedLine.slice(0,7);
    const startDataCloseSum = reduce(startDataClose,(sum,n)=>(sum + n),0);
    const newObjc = {...dataTmp[0], Closed: startDataCloseSum};
    dataTmp[0] = newObjc;
    if (isToDay){
       endedAmount = startDataCloseSum;
    }

    //Ended Events middle Day
    const startClose = endedLine.slice(8,max_hours+1);
    startClose.forEach((el,index) => {
      const indexPlus = index +1;
      const newObj = {...dataTmp[indexPlus], Closed: el};
      dataTmp[indexPlus] = newObj;
      if (isToDay){
        endedAmount = el;
      }
    });
    // if(!isToDay) { endedAmount = null;}
     
    //Ended Events ended Day
    if (currentHours > 17 || !isToDay){
      const endDataClose = endedLine.slice(19,23);
      const endDataCloseSum = reduce(endDataClose,(sum,n)=>(sum + n),0);
      const newObjcs = {...dataTmp[12], Closed: endDataCloseSum};
      dataTmp[12] = newObjcs;
      if (isToDay){
        endedAmount = endDataCloseSum;
      }
    
    }
  },[selectAmountEndedEvent, isToDay]);
    
  useEffect(() => {
    getUsers();
    dataInit0 = dataTmp;
  },[selectCountUsers.data.chartData,getUsers])   

  useEffect(() => {
    getNewEvents();
    dataInit0 = dataTmp;
  },[selectAmountNewEvent,getNewEvents])  
  
  useEffect(() => {
    getEndedEvents();
    dataInit0 = dataTmp;
    
  },[selectAmountEndedEvent,getEndedEvents])  
      
    return (
      <LineChartComp data={dataInit0}  isFetchingUserOnline={isFetchingUserOnline} isToday={isToDay} dateLabel={curDate} usersCount={usersCount} eventsAmount={eventsAmount} endedAmount={endedAmount}  fetchAll={fetchAll} />
    )

     
} 

 
const mapStateToProps = createStructuredSelector ({
  selectCountUsers: selectCountUsersGraph,
  isFetchingUserOnline: selectIsFetchingUserOnline,
  selectAmountNewEvent: selectAmountEventGraph,
  selectAmountEndedEvent: selectAmountEndEventGraph,
});
 

const mapDispatchToProps = (dispatch) => ({
  fetchAmountUsers: (startDate, endDate) => dispatch(fetchAmountUsersForGraphicsAsync(startDate, endDate)),
  fetchAmountNewEventsForGraphicAsync: (startDate, endDate) => dispatch(fetchAmountNewEventsForGraphicAsync(startDate, endDate)),
  fetchAmountEndEventsForGraphicAsync: (startDate, endDate) => dispatch(fetchAmountEndEventsForGraphicAsync(startDate, endDate)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LineChartWrap);
 