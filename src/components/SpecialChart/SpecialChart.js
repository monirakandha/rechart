import axios from 'axios';
import React, { useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChart = () => {
    const [photos , setPhotos] = useState([])
    useState(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(data => {
            const loadedData = data.data;
            const photoData =loadedData.map (photo => ({id:photo.id}))
            setPhotos(photoData);
            console.log(photoData);
        })
    } , [])

    return (

        <BarChart width={1200} height={400} data={photos}>
            <Tooltip/>
          <Bar dataKey="id" fill="#8884d8" />
          <XAxis dataKey={'id'}></XAxis>
        </BarChart>
    );
};

export default SpecialChart;