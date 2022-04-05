import React from 'react';
import { StarIcon } from '@heroicons/react/solid'
import Rating from 'react-rating';

const Review = ({ data }) => {

    return (
        <div className='p-10 rounded shadow-lg shadow-slate-300'>
            <img src={data.image} alt="" className='w-24 rounded-full block mx-auto' />
            <h5 className='text-xl my-4 font-bold'>{data.name}</h5>
            <Rating
                initialRating={data.ratings}
                emptySymbol={<StarIcon className='inline w-7 h-7 text-slate-400' />}
                fullSymbol={<StarIcon className='inline w-7 h-7 text-orange-300' />}
                readonly
            ></Rating>
            <p className='mt-4'>{data.review}</p>
        </div >
    );
};

export default Review;