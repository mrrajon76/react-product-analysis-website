import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';
import useChart from '../../hooks/useChart';

const SimplePieChart = () => {
    const [data] = useChart();

    return (
        <div>
            <PieChart
                width={500}
                height={300}>
                <Tooltip />
                <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#81CA1B" />
                <Pie data={data} dataKey="sell" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#793DED" />
                <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={100} outerRadius={120} fill="#F59E0B" label />
            </PieChart>
        </div >
    );
};

export default SimplePieChart;