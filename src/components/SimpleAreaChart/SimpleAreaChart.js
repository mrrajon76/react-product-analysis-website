import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const SimpleAreaChart = () => {
    const [data] = useChart();

    return (
        <div>
            <AreaChart
                width={500}
                height={300}
                data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="investment" stroke="#81CA1B" fill="#81CA1B" />
                <Area type="monotone" dataKey="sell" stroke="#793DED" fill="#793DED" />
                <Area type="monotone" dataKey="revenue" stroke="#F59E0B" fill="#F59E0B" />
            </AreaChart>
        </div >
    );
};

export default SimpleAreaChart;