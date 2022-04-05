import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const SimpleLineChart = () => {
    const [data] = useChart();

    return (
        <div>
            <LineChart
                width={500}
                height={300}
                data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="investment" stroke="#81CA1B" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="sell" stroke="#793DED" />
                <Line type="monotone" dataKey="revenue" stroke="#F59E0B" />
            </LineChart>
        </div >
    );
};

export default SimpleLineChart;