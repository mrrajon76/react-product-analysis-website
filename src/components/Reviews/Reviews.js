import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = (props) => {
    const [reviews] = useReviews();
    return (
        <div className="mx-5 md:mx-12 lg:mx-28 my-12 lg:mt-16">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    (props.children) ?
                        reviews.slice(0, 3).map(review => <Review data={review} key={review.id}></Review>)
                        : reviews.map(review => <Review data={review} key={review.id}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;