import React from 'react';
import { StarIcon } from '@heroicons/react/solid'

const Review = ({ data, key }) => {

    return (
        <div className='p-10 rounded shadow-lg shadow-slate-300'>
            <img src={data.image} alt="" className='w-24 rounded-full block mx-auto' />
            <h5 className='text-xl my-4 font-bold'>{data.name}</h5>
            {
                data.ratings.map(() => <StarIcon className='inline w-7 h-7 text-orange-300' />)
            }
            <p className='mt-4'>{data.review}</p>
        </div >
    );
};

export default Review;