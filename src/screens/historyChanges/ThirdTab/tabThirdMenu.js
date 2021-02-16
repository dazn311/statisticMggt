import React,{ useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 
import { chunk, reduce } from 'lodash'; 



import { makeStyles } from '@material-ui/core/styles';

import DatePicker from './DatePicker.thirdTab';
import DatePickerEnd from './DatePickerEnd.thirdTab';
 

import LineChart from './LineChartWithXAxisPading.thirdTab';

import Title from './Title.thirdTab'; 

//fetchAllEventsGraphicAsync(type,startDate,endDate)
//fetchAllUsersGraphicAsync(startDate,endDate)
import { fetchAllEventsGraphicAsync, fetchAllUsersGraphicAsync } from '../../../store/adminPanelTrest/adminPanelTrest.actions';

// selectNewEventsGraphOfStaticPage
// selectEndEventsGraphOfStaticPage
// selectUsersOnlineGraphOfStaticPage
// selectNewMessageGraphOfStaticPage

import { selectNewEventsGraphOfStaticPage, selectEndEventsGraphOfStaticPage, selectUsersOnlineGraphOfStaticPage, selectNewMessageGraphOfStaticPage } from '../../../store/adminPanelTrest/StatisticPage.selectors'; 

let InitionalData = [
  // {
  //   name: '08:00', Events: 7, Users: 0, Closed: 5, activeChat: 3,
  // },
  // {
  //   name: '09:00', Events: 7, Users: 0, Closed: 5, activeChat: 3,
  // },
  // {
  //   name: '10:00', Events: 7, Users: 0, Closed: 5, activeChat: 4,
  // },
  // {
  //   name: '11:00', Events: 7, Users: 0, Closed: 5, activeChat: 3,
  // },
  // {
  //   name: '12:00', Events: 7, Users: 0, Closed: 5, activeChat: 3,
  // },
  // {
  //   name: '13:00', Events: null, Users: null, Closed: null, activeChat: 14,
  // },
  // {
  //   name: '14:00', Events: null, Users: null, Closed: null, activeChat: 21,
  // },
  // {
  //   name: '15:00', Events: null, Users: null, Closed: null, activeChat: 21,
  // },
  // {
  //   name: '16:00', Events: null, Users: null, Closed: null, activeChat: 32,
  // },
  // {
  //   name: '17:00', Events: null, Users: null, Closed: null, activeChat: 30,
  // },
  // {
  //   name: '18:00', Events: null, Users: null, Closed: null, activeChat: 0,
  // },
];
// dd

const initionalDateStart = () => {
  let newDate = new Date();//.toISOString().split('T')[0];
  newDate.setDate(newDate.getDate() - 7);
  return newDate.toISOString().split('T')[0];
}

const initionalDateEnd = () => {
  let newDate = new Date();//.toISOString().split('T')[0];
  return newDate.toISOString().split('T')[0];
}

// const monthArr = ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'];

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  datePick: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    color: 'rgba(0, 0, 0, 0.87)',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '4px',
    margin: '10px 0px',
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  }
}));

//fetchAllEventsGraphicAsync(type,startDate,endDate)
//fetchAllUsersGraphicAsync(startDate,endDate)

// newEventsGraphOfStaticPage: selectNewEventsGraphOfStaticPage, // события короткие данные для таблицы
  // endEventsGraphOfStaticPage: selectEndEventsGraphOfStaticPage, // классификация статусов "new_msg"
  // usersOnlineGraphOfStaticPage: selectUsersOnlineGraphOfStaticPage, // for color elements
  // newMessageGraphOfStaticPage: selectNewMessageGraphOfStaticPage, //  дата начала и конца для запроса

const TabThirdMenu = ({fetchAllEventsGraphic, fetchAllUsersGraphic, newEventsGraphOfStaticPage, endEventsGraphOfStaticPage, usersOnlineGraphOfStaticPage, newMessageGraphOfStaticPage})=> {
  const [graphicValue, setGraphicValue] = useState('');
  const [dateWidth, setDateWidth] = useState(1);
  const [dateStart, setDateStart] = useState(initionalDateStart);
  const [dateEnd, setDateEnd] = useState(initionalDateEnd);
  const classes = useStyles();

  // console.log('TabThirdMenu init');
  // console.log('TabThirdMenu dateWidth', dateWidth);
  const setDateStartFromPicker = (date) => {setDateStart(date)};
  const setDateEndFromPicker = (date) => {setDateEnd(date)};

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  }
 
   
  useEffect(() => {

    const d1 = new Date(dateStart).getDate();
    const d2 = new Date(dateEnd).getDate();
    const deltaDate = +d2 - +d1;
    setDateWidth(deltaDate);
    // console.log('deltaDate',deltaDate);
    const dateEndPlus = dateEnd + 'T18:00:00.000Z';
    fetchAllUsersGraphic(dateStart, dateEndPlus);
    fetchAllEventsGraphic('new_rec', dateStart, dateEndPlus);
    fetchAllEventsGraphic('done_rec', dateStart, dateEndPlus);
    fetchAllEventsGraphic('new_msg', dateStart, dateEndPlus);

  }, [dateStart, dateEnd, fetchAllUsersGraphic,fetchAllEventsGraphic]);

  const setUserData = (usersLine=[]) => {
    let maxUsersOfDay = [];
    const chunkUsers = chunk(usersLine,24); 

    for (let index = 0; index < chunkUsers.length; index++) {
      
      let max_of_array = Math.max.apply(Math, chunkUsers[index]);
      maxUsersOfDay.push(max_of_array);
      
    }
    // console.log('maxUsersOfDay',maxUsersOfDay); 

    let me1 = new Date(dateStart).getMonth() + 1;
    let y1 = new Date(dateStart).getYear();
    const dOm = daysInMonth(me1, y1);
    
    InitionalData = [];
    maxUsersOfDay.forEach((el,index) => {
        let d1 = new Date(dateStart).getDate() + index;
        if ( d1 > dOm +1) {
          d1 -= dOm;
        }
        const m1 = new Date(dateStart).getMonth() + 1;
        const nameDM = d1 + '/' + m1;
        const newObj = {
          name: nameDM, Events: 0, Users: el, Closed: 0, activeChat: 0,
        }; 
        // InitionalData[index] = newObj; 
        InitionalData.push(newObj); 
    });

    setGraphicValue(InitionalData);
  }
  const setNewEventData = (usersLine=[]) => {
    let maxUsersOfDay = [];
    const chunkUsers = chunk(usersLine,24); 

    for (let index = 0; index < chunkUsers.length; index++) {
      // let max_of_array = Math.max.apply(Math, chunkUsers[index]);
      let sum_of_array = reduce(chunkUsers[index],(sum,n) => (sum + n),0);// Math.max.apply(Math, chunkUsers[index]);
      // console.log('sum_of array',sum_of_array);
      maxUsersOfDay.push(sum_of_array);
      
    }

    maxUsersOfDay.forEach((el,index) => {
        
      const newObj = {...InitionalData[index],  Events: el}; 
        // const newObj = {name: nameDM, Events: 0, Users: el, Closed: 0, activeChat: 0,}; 
        InitionalData[index] = newObj; 
    });

    setGraphicValue(InitionalData);
  }
  
  const setEndEventData = (usersLine=[]) => {
    let maxUsersOfDay = [];
    const chunkUsers = chunk(usersLine,24); 

    for (let index = 0; index < chunkUsers.length; index++) {
      let sum_of_array = reduce(chunkUsers[index],(sum,n) => (sum + n),0);// Math.max.apply(Math, chunkUsers[index]);
      // console.log('sum_of array',sum_of_array);
      maxUsersOfDay.push(sum_of_array);
      
    } 
    maxUsersOfDay.forEach((el,index) => {
      const newObj = {...InitionalData[index],  Closed: el}; 
        // const newObj = {name: nameDM, Events: 0, Users: el, Closed: 0, activeChat: 0,}; 
        InitionalData[index] = newObj; 
    });
    setGraphicValue(InitionalData);
  }
  
  const setNewMessagesData = (usersLine=[]) => {
    let maxUsersOfDay = [];
    const chunkUsers = chunk(usersLine,24); 

    for (let index = 0; index < chunkUsers.length; index++) {
      
      let sum_of_array = reduce(chunkUsers[index],(sum,n) => (sum + n),0);// Math.max.apply(Math, chunkUsers[index]);
      // console.log('sum_of array',sum_of_array);
      maxUsersOfDay.push(sum_of_array);
      
    }
    maxUsersOfDay.forEach((el,index) => {
        
      const newObj = {...InitionalData[index],  activeChat: el}; 
        // const newObj = {name: nameDM, Events: 0, Users: el, Closed: 0, activeChat: 0,}; 
        InitionalData[index] = newObj; 
    });

    setGraphicValue(InitionalData);
  }

  // for one day ///////////////////////////////////

  const setUserOfOneDate = (usersLine=[]) => {
    let maxUsersOfDay = usersLine.slice(8);

    InitionalData = [];
    maxUsersOfDay.forEach((el,index) => {
        let d1 = 8 + index;
        
        const m1 = '00';
        const nameDM = d1 + ':' + m1;
        const newObj = {
          name: nameDM, Events: 0, Users: el, Closed: 0, activeChat: 0,
        }; 
        // InitionalData[index] = newObj; 
        InitionalData.push(newObj); 
    });

    setGraphicValue(InitionalData);
  }
  

  const setNewEventOfOneDay = (newEvent=[]) => {
    let maxUsersOfDay = newEvent.slice(8);

    
    maxUsersOfDay.forEach((el,index) => {
         
        const newObj = {...InitionalData[index],  Events: el}; 
        // const newObj = {name: nameDM, Events: 0, Users: el, Closed: 0, activeChat: 0,}; 
        InitionalData[index] = newObj;
    });

    setGraphicValue(InitionalData);
  }

  const setEndEventOfOneDay = (endEvent=[]) => {
    let maxUsersOfDay = endEvent.slice(8);

    
    maxUsersOfDay.forEach((el,index) => {
         
        const newObj = {...InitionalData[index],  Closed: el}; 
        // const newObj = {name: nameDM, Events: 0, Users: el, Closed: 0, activeChat: 0,}; 
        InitionalData[index] = newObj;
    });

    setGraphicValue(InitionalData);
  }
  const setNewMessageOfOneDay = (newMess=[]) => {
    let maxUsersOfDay = newMess.slice(8);

    
    maxUsersOfDay.forEach((el,index) => {
         
        const newObj = {...InitionalData[index],  activeChat: el}; 
        // const newObj = {name: nameDM, Events: 0, Users: el, Closed: 0, activeChat: 0,}; 
        InitionalData[index] = newObj;
    });

    setGraphicValue(InitionalData);
  }


  useEffect(() => {
    
    const usersLine = usersOnlineGraphOfStaticPage.data.chartData;
    const newEvent = newEventsGraphOfStaticPage.data.chartData;
    const endEvent = endEventsGraphOfStaticPage.data.chartData;
    const newMess = newMessageGraphOfStaticPage.data.chartData;

    if (dateWidth){
      setUserData(usersLine);
    setNewEventData(newEvent);
    setEndEventData(endEvent);
    setNewMessagesData(newMess);
    } else {
      // set of one day
      setUserOfOneDate(usersLine);
      setNewEventOfOneDay(newEvent);
      setEndEventOfOneDay(endEvent);
      setNewMessageOfOneDay(newMess);


    }

    
    
  }, [usersOnlineGraphOfStaticPage,newEventsGraphOfStaticPage, endEventsGraphOfStaticPage,newMessageGraphOfStaticPage])
 
  return (
    <React.Fragment>
      <Title>Статистика по событиям за периоды</Title>
      <div className={classes.seeMore}>
            <div className={classes.datePick}>
                
                <DatePicker setDataStart={setDateStartFromPicker}/>
                <DatePickerEnd setDataEndforFetchEvents={setDateEndFromPicker}/>
            </div>
            <LineChart  graphicValue={graphicValue}/>
      </div>
    </React.Fragment>
  );
}

// selectNewEventsGraphOfStaticPage
// selectEndEventsGraphOfStaticPage
// selectUsersOnlineGraphOfStaticPage
// selectNewMessageGraphOfStaticPage

const mapStateToProps = createStructuredSelector ({
  newEventsGraphOfStaticPage: selectNewEventsGraphOfStaticPage, // события короткие данные для таблицы
  endEventsGraphOfStaticPage: selectEndEventsGraphOfStaticPage, // классификация статусов "new_msg"
  usersOnlineGraphOfStaticPage: selectUsersOnlineGraphOfStaticPage, // for color elements
  newMessageGraphOfStaticPage: selectNewMessageGraphOfStaticPage, //  дата начала и конца для запроса
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllEventsGraphic: (type, startDate, endDate) => dispatch(fetchAllEventsGraphicAsync(type, startDate, endDate)),
  fetchAllUsersGraphic: (startDate, endDate) => dispatch(fetchAllUsersGraphicAsync(startDate, endDate)),
  
});
export default connect(mapStateToProps, mapDispatchToProps)(TabThirdMenu);