import React, { PureComponent } from 'react';
import {
  BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

  

class LineChartWithXAxisPading extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/g03265a4/';
 
render() {
    const { graphicValue} = this.props;
    // console.log('LineChartWithXAxisPading init');
    // let data = [];
 
    // const usersLine = graphicValue.countUsersGraph.data.chartData;
    // const eventsLine = graphicValue.selectAmountNewEvent.data.chartData;
    
    // const endedLine = graphicValue.selectAmountEndedEvent.data.chartData;

    // const eventsLine = graphicValue;

    // console.log('graphicValue',graphicValue);
    // usersLine.forEach((el,index) => {
    //   const newObj = {...data[index], Users: el};
      
    //   data[index] = newObj;
    // }); 

    // eventsLine.forEach((el,index) => {
    //   const newObj = {...data[index], Events: el};
      
    //   data[index] = newObj;
    // });

    // endedLine.forEach((el,index) => {
    //   const newObj = {...data[index], Closed: el};
      
    //   data[index] = newObj;
    // }); 
    // endedLine.forEach((el,index) => {
    //   const newObj = {...data[index], activeChat: el};
      
    //   data[index] = newObj;
    // }); 

    
     
    return (
      <div id='graphics' style={{ position:'relative',overflow: 'hidden'}}>
        <BarChart
        width={1000}
        height={300}
        data={graphicValue}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 15,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='Users'  name='Пользователей' stackId="a" fill="#8884d8" />
        <Bar dataKey="Events" name='Созданные события' stackId="a" fill="#82ca9d" />
        <Bar dataKey="Closed" name='Закрытые события' stackId="a" fill="#FFc000" />
        <Bar dataKey="activeChat" name='Активность чата' stackId="a" fill="#FF0C00" />
      </BarChart>
        
        
      </div>
    );
  } 
} 

 
// const mapStateToProps = createStructuredSelector ({
//   countUsersGraph: selectCountUsersGraph,
//   isFetchingUserOnline: selectIsFetchingUserOnline,
//   selectAmountNewEvent: selectAmountEventGraph,
//   selectAmountEndedEvent: selectAmountEndEventGraph,
// });
 
// const mapDispatchToProps = (dispatch) => ({
//   fetchAmountUsersForGraphics: (startDate, endDate) => dispatch(fetchAmountUsersForGraphicsAsync(startDate, endDate)),
//   fetchAmountNewEventsForGraphic: (startDate, endDate) => dispatch(fetchAmountNewEventsForGraphicAsync(startDate, endDate)),
//   fetchAmountEndEventsForGraphic: (startDate, endDate) => dispatch(fetchAmountEndEventsForGraphicAsync(startDate, endDate)),
// });
// export default connect(mapStateToProps)(LineChartWithXAxisPading);
export default LineChartWithXAxisPading;
 