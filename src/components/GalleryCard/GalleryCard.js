import React from 'react';

const GalleryCard = ({ item }) => {
    return (
        <div className='shadow-lg shadow-slate-300'>
            <img src={item.image} alt="" />
        </div>
    );
};

export default GalleryCard;