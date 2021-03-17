import React, { PureComponent } from 'react';

import Avatar from '@material-ui/core/Avatar';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
// import RefreshIcon from '@material-ui/icons/Refresh';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

class LineChartWithXAxisPading extends PureComponent {

render() {
    const {fetchAll, data, isFetchingUserOnline,  isToday,dateLabel ,usersCount, eventsAmount, endedAmount} = this.props;


    // // console.log(window.innerWidth);
    const styleLblUsersGraphic3 = !isFetchingUserOnline ? {position: 'absolute', top: '-40px', right: '-15px', color:'#483d93',display: 'flex', alignItems: 'center'}
    : {position: 'absolute', top: '-30px', right: '0px', color:'#ccc',display: 'flex', alignItems: 'center'};
    
    const styleLblUsersGraphic = !isFetchingUserOnline ? {position: 'absolute', top: '25px', right: '10px', color:'white', backgroundColor:'rgb(136, 132, 216)',width:'30px',height: 30}
    : {position: 'absolute', top: '25px', right: '10px', color:'#ccc',width:'30px',height: 30};

    const styleLblEventsGraphic = !isFetchingUserOnline ? {position: 'absolute', top: '60px', right: '10px', color:'black', backgroundColor:'rgb(130, 202, 157)',width:'30px',height: 30}
    : {position: 'absolute', top: '60px', right: '10px', backgroundColor:'#91c1b4', color:'#ccc',width:'30px',height: 30};

    
    const styleLblEndedGraphic = !isFetchingUserOnline ? {position: 'absolute', top: '100px', right: '10px', color:'black', backgroundColor:'rgb(255, 192, 0)',width:'30px',height: 30}
    : {position: 'absolute', top: '100px', right: '10px', color:'#ccc',width:'30px',height: 30};


    // const styleBtnUpdateUsersGraphic = isFetchingUserOnline ? {position: 'absolute', bottom: '10px', right: '18px', cursor:'pointer', transition: 'transform 0.2s'}
    // :{position: 'absolute', bottom: '10px', right: '15px', cursor:'pointer', transform: 'rotate(-45deg)', color:'red'};
    
    
    const winWidth = window.innerWidth;
    let windthLine = 500;
    let leftLine = 30;
    let rightLine = 30;

    if (winWidth < 400){
      windthLine = 250;
      leftLine = 10;
      rightLine = 10;
    }
     
    return (
      <div id='graphics' style={{ position:'relative'}}>
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
       
        <div style={styleLblUsersGraphic3}>
          <ArrowLeftIcon onClick={() => {fetchAll(-1)}} color="secondary" />
            {dateLabel.toISOString().slice(8,10)}/{dateLabel.toISOString().slice(5,7)} 
          <ArrowRightIcon disabled={isToday} onClick={() => {fetchAll(1)}}  color={isToday ? 'disabled' : 'error'}/>
        </div>
        
        <div><Avatar  style={styleLblUsersGraphic}>{usersCount}</Avatar></div>
        <div><Avatar  style={styleLblEventsGraphic}>{eventsAmount}</Avatar></div>
        <div ><Avatar style={styleLblEndedGraphic}>{endedAmount}</Avatar></div>
        {/* <RefreshIcon id='btnUpdateGraphicUsers'  style={styleBtnUpdateUsersGraphic} onClick={() => {fetchAll(0)}}/> */}
      </div>
    );
  } 
} 

 
export default LineChartWithXAxisPading;
 