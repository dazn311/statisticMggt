import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

const data = [
  {
    name: '08:00', Events: 4, person: 2, End: 7, amt: 3,
  },
  {
    name: '09:00', Events: 4, person: 2, End: 7, amt: 3,
  },
  {
    name: '10:00', Events: 3, person: 3, End: 5, amt: 4,
  },
  {
    name: '11:00', Events: 3, person: 3, End: 5, amt: 40,
  },
  {
    name: '12:00', Events: 2, person: 15, End: 2, amt: 14,
  },{
    name: '13:00', Events: 2, person: 15, End: 2, amt: 14,
  },
  {
    name: '14:00', Events: 5, person: 20, End: 7, amt: 21,
  },
  {
    name: '15:00', Events: 5, person: 20, End: 7, amt: 21,
  },
  {
    name: '16:00', Events: 4, person: 30, End: 7, amt: 32,
  },
  {
    name: '17:00', Events: 5, person: 31, End: 2, amt: 30,
  },
  {
    name: '18:00', Events: 0, person: 0, End: 2, amt: 0,
  },
];

export default class LineChartWithXAxisPading extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/g03265a4/';
 
  render() {
    console.log(window.innerWidth);
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
      <div style={{ position:'relative',overflow: 'hidden'}}>
      <LineChart width={windthLine} height={200} data={data} >
        <CartesianGrid strokeDasharray="8 1" />
        <XAxis dataKey="name" padding={{ left: leftLine, right: rightLine }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="person" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Events" stroke="#82ca9d" />
        <Line type="monotone" dataKey="End" stroke="#FFc000" />
      </LineChart>
      </div>
    );
  }
}
