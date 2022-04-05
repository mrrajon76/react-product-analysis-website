// import React, { useEffect, useState } from 'react';
// import LineChart from '../LineChart/LineChart';

const Dashboard = () => {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch("data.json")
    //         .then(res => res.json())
    //         .then(data => setData(data))
    // }, []);
    return (
        <div className='mx-28 my-10 grid grid-cols-2 gap-10'>
            <div className="p-10 shadow-lg shadow-slate-300">
                {/* <LineChart data={data}></LineChart> */}
            </div>
        </div>
    );
};

export default Dashboard;