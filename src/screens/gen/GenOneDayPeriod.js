import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import moment from 'moment/moment';

// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


import Title from './Title';
 
import { selectEventShortPoints } from '../../store/adminPanelTrest/adminPanelTrest.selectors'; 
 
import { selectObjsPage, selectObjsInfoPage } from '../../store/adminPanelTrest/StatisticPage.selectors';  


const useStyles = makeStyles({
  depositContext: {
    flex: 1,
    fontSize: 11,
    padding: '8px 0'
  },
});

 

let endDate = new Date(); 
endDate = endDate.toISOString(); 
let lastDate = endDate.split('T')[0].split('-');  

  let thisDate = new Date();
  thisDate = thisDate.toISOString();
  thisDate = thisDate.split('T')[0];

const GenOneDayPeriod = ({ selectObjsInfo, selectObjsPage, selectEvent }) => {
  
  const classes = useStyles();

 

  let amoutAllMessagesOfLastDay = 0;
  let amoutEventsEndedOfLastDay = 0;
  let amoutEventsOfLastDay = 0;


            
  
  console.log('selectEvent[0]',selectEvent[0]);
  console.log('selectObjsInfo',selectObjsInfo);
  console.log('selectObjsPage',selectObjsPage);

  if ( selectObjsInfo  === undefined) {
    // if ( selectObjsInfo.data.objects.length === 0) {
      return(<div>loading...</div>)
    // }
    
  }
  selectEvent.map((nodeE,index) => {
      const dateForStatics =  nodeE.date.split('T')[0];

       

      if ( dateForStatics === thisDate){
        amoutAllMessagesOfLastDay += 1;
        if (nodeE.type === 'new_rec'){
          amoutEventsOfLastDay += 1;
        }else if (nodeE.type === 'done_rec'){
          amoutEventsEndedOfLastDay += 1;
        }
      }
      return 'newNode'
  });


  return (
    <React.Fragment>
      {/* <Title>Количество ОГХ ({moment(amountOGH.data.objTotal).format("dddd, MMM DD at HH:mm a")})</Title> */}
      
      <Title>Данные за последние сутки</Title>
      <hr color="blue" style={{width: '100%',opacity: 0.5, marginTop: 0, marginBottom: 0}} />
      {/* {Object.keys(amountOGH.data).map(keyObj => {
        console.log(amountOGH.data.[keyObj]);
        console.log(keyObj);
      })} */}
      <Typography component="p" variant="h6">
        {amoutEventsOfLastDay}
      </Typography>
      <Typography component="p"  >
        Всего событий за последние сутки
      </Typography>
      <hr color="gray" style={{width: '100%',opacity: 0.5, marginTop: 0, marginBottom: 0}}/>
      <Typography component="p" variant="h6">
        {amoutAllMessagesOfLastDay}
      </Typography>
      <Typography component="p"  >
        Всего сообщений за последние сутки
      </Typography>
      <hr color="gray" style={{width: '100%',opacity: 0.5, marginTop: 0, marginBottom: 0}}/>
      <Typography component="p" variant="h6">
        {'*0'}
      </Typography>
      <Typography component="p"  >
        Всего согласованых событий за последние сутки
      </Typography>
        
      <hr color="gray" style={{width: '100%',opacity: 0.5, marginTop: 0, marginBottom: '4px'}}/>
      <Typography color="textSecondary" className={classes.depositContext}>
          Данные на {lastDate[2]}/{lastDate[1]}/{lastDate[0]}
      </Typography>
        
    </React.Fragment>
  );
}
 

const mapStateToProps = createStructuredSelector ({
  selectEvent: selectEventShortPoints, // события короткие данные для таблицы
  selectObjsPage: selectObjsPage, // события короткие данные для таблицы
  selectObjsInfo: selectObjsInfoPage, // события короткие данные для таблицы
  
});
 
const mapDispatchToProps = (dispatch) => ({
  // fetchObjectsList: () => dispatch(fetchObjectsListAsync()),
  
});  
export default connect(mapStateToProps)(GenOneDayPeriod);