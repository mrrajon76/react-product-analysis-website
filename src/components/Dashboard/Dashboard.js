import React from 'react';
import SimpleLineChart from '../SimpleLineChart/SimpleLineChart';
import SimpleAreaChart from '../SimpleAreaChart/SimpleAreaChart';
import SimpleBarChart from '../SimpleBarChart/SimpleBarChart';
import SimplePieChart from '../SimplePieChart/SimplePieChart';

const Dashboard = () => {
    return (
        <div className='mx-28 my-10 grid grid-cols-2 gap-10'>
            <div className="p-10 shadow-lg shadow-slate-300">
                <SimpleLineChart></SimpleLineChart>
            </div>
            <div className="p-10 shadow-lg shadow-slate-300">
                <SimpleAreaChart></SimpleAreaChart>
            </div>
            <div className="p-10 shadow-lg shadow-slate-300">
                <SimpleBarChart></SimpleBarChart>
            </div>
            <div className="p-10 shadow-lg shadow-slate-300">
                <SimplePieChart></SimplePieChart>
            </div>
        </div>
    );
};

export default Dashboard;