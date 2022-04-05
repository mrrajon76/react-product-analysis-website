import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const SimpleBarChart = () => {
    const [data] = useChart();

    return (
        <div>
            <BarChart
                width={500}
                height={300}
                data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" fill="#81CA1B" />
                <Bar dataKey="sell" fill="#793DED" />
                <Bar dataKey="revenue" fill="#F59E0B" />
            </BarChart>
        </div >
    );
};

export default SimpleBarChart;