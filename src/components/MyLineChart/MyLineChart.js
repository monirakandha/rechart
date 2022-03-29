import React from 'react';
import { Area, AreaChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      
    return (
    //     <LineChart width={400} height={400} data={data}>
    //     <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    //     <XAxis dataKey={'name'}></XAxis>
    //     <YAxis dataKey={'pv'}></YAxis>
    //   </LineChart>
      <AreaChart width={1200} height={400} data={data}>
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8"></Area>
      <Area type="monotone" dataKey="pv" stroke="#8884d8" fill="#8886fr" ></Area>
      <Tooltip/>
      <XAxis dataKey={'name'}></XAxis>
      <YAxis dataKey={'pv'}></YAxis>
      </AreaChart>
    );
};

export default MyLineChart;