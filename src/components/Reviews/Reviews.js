import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useReviews();

    return (
        <div className="mx-28 my-10">
            <div className='grid grid-cols-3 gap-12'>
                {
                    reviews.map(review => <Review data={review} key={review.id}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;