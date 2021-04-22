import React, { PureComponent } from 'react';

import Avatar from '@material-ui/core/Avatar';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import RefreshIcon from '@material-ui/icons/Refresh';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

class LineChartWithXAxisPading extends PureComponent {

render() {
    const {fetchAll, data, isFetchingUserOnline,  isToday,dateLabel ,usersCount, eventsAmount, endedAmount} = this.props;

 
    const winWidth = window.innerWidth;
    let windthLine = 500;
    let leftLine = 30;
    let rightLine = 30;
    let displayVal = 'flex';

    if (winWidth < 550){
      windthLine = 350;
      leftLine = 10;
      rightLine = 10;
      displayVal = 'none';
    }

    const styleLblUsersGraphicDate = !isFetchingUserOnline ? {position: 'relative',  color:'#483d93',display: displayVal, alignItems: 'flex-start',justifyContent: 'center',maxHeight: 25}
    : {position: 'relative' , color:'#ccc',display: displayVal, alignItems: 'flex-start',justifyContent: 'center',maxHeight: 25}
    
    const styleLblUsersGraphic = !isFetchingUserOnline ? {position: 'relative', color:'white',display: displayVal, backgroundColor:'rgb(136, 132, 216)',width:'30px',height: 30, margin: '4px 25px'}
    : {position: 'relative', color:'#ccc',display: displayVal,width:'30px',height: 30, margin: '4px 25px'};

    const styleLblEventsGraphic = !isFetchingUserOnline ? {position: 'relative',  color:'black',display: displayVal, backgroundColor:'rgb(130, 202, 157)',width:'30px',height: 30, margin: '4px 25px'}
    : {position: 'relative',  backgroundColor:'#91c1b4', color:'#ccc',display: displayVal,width:'30px',height: 30, margin: '4px 25px'};

    
    const styleLblEndedGraphic = !isFetchingUserOnline ? {position: 'relative', color:'black',display: displayVal, backgroundColor:'rgb(255, 192, 0)',width:'30px',height: 30, margin: '4px 25px'}
    : {position: 'relative',  color:'#ccc',display: displayVal,width:'30px',height: 30, margin: '4px 25px'};


    const styleBtnUpdateUsersGraphic = isFetchingUserOnline ? {position: 'relative',display: displayVal, cursor:'pointer', transition: 'transform 0.2s'}
    :{position: 'relative',display: displayVal, cursor:'pointer', transform: 'rotate(-45deg)', color:'red'};

    // console.log('winWidth',window.innerWidth);
    return (
      <div id='graphics' style={{ position:'relative', display:'flex',   justifyContent: 'space-between'}}>
        <LineChart width={windthLine} height={200} data={data} >
          <CartesianGrid strokeDasharray="8 1" />
          <XAxis dataKey="name" padding={{ left: leftLine, right: rightLine }} />
          <YAxis />
          <Tooltip />
          <Legend  style={{bottom: '0px'}}/>
          <Line type="monotone" dataKey='Users' stroke="#8884d8" name='Польз. он-лайн' activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Events" name='Новые события' stroke="#82ca9d" />
          <Line type="monotone" dataKey="Closed" name='Закрытые событ.' stroke="#FFc000" />
          
        </LineChart>
        
        <div style={{ position: 'relative',display: displayVal, flexWrap: 'wrap',  maxWidth: 80, width: '100%', justifyContent: 'center'}} >
            <div style={{position: 'absolute', right:'-8px', transform: 'rotate(270deg)', top: '100px', whiteSpace: 'nowrap'}}>Данные на данный час</div>
            <div style={styleLblUsersGraphicDate}>
              <ArrowLeftIcon onClick={() => {fetchAll(-1)}} color="secondary" />
                <div style={{alignSelf:'center'}} >{dateLabel.toISOString().slice(8,10)}/{dateLabel.toISOString().slice(5,7)} </div> 
              <ArrowRightIcon disabled={isToday} onClick={() => {fetchAll(1)}}  color={isToday ? 'disabled' : 'error'}/>
            </div>
            
            <Avatar  style={styleLblUsersGraphic}>{usersCount}</Avatar> 
            <Avatar  style={styleLblEventsGraphic}>{eventsAmount}</Avatar> 
            <Avatar style={styleLblEndedGraphic}>{endedAmount}</Avatar> 
            
            <RefreshIcon id='btnUpdateGraphicUsers'  style={styleBtnUpdateUsersGraphic} onClick={() => {fetchAll(0)}}/>
        </div>
      </div>
    );
  } 
} 

 
export default LineChartWithXAxisPading;
 