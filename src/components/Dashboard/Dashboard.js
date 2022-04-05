import React from 'react';
import SimpleLineChart from '../SimpleLineChart/SimpleLineChart';
import SimpleAreaChart from '../SimpleAreaChart/SimpleAreaChart';
import SimpleBarChart from '../SimpleBarChart/SimpleBarChart';
import SimplePieChart from '../SimplePieChart/SimplePieChart';

const Dashboard = () => {
    return (
        <div className='mx-5 md:mx-12 lg:mx-28 my-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div className="p-5 md:p-10 shadow-lg shadow-slate-300">
                <h4 className='text-2xl text-amber-500 font-medium mb-6'>Investment vs Sell vs Revenue (Line Chart)</h4>
                <SimpleLineChart></SimpleLineChart>
            </div>
            <div className="p-5 md:p-10 shadow-lg shadow-slate-300">
                <h4 className='text-2xl text-amber-500 font-medium mb-6'>Investment vs Sell vs Revenue (Area Chart)</h4>
                <SimpleAreaChart></SimpleAreaChart>
            </div>
            <div className="p-5 md:p-10 shadow-lg shadow-slate-300">
                <h4 className='text-2xl text-amber-500 font-medium mb-6'>Investment vs Sell vs Revenue (Bar Chart)</h4>
                <SimpleBarChart></SimpleBarChart>
            </div>
            <div className="p-5 md:p-10 shadow-lg shadow-slate-300">
                <h4 className='text-2xl text-amber-500 font-medium mb-6'>Investment vs Sell vs Revenue (Pie Chart)</h4>
                <SimplePieChart></SimplePieChart>
            </div>
        </div>
    );
};

export default Dashboard;