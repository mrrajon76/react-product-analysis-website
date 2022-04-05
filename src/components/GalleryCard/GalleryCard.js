import React from 'react';

const GalleryCard = ({ item }) => {
    return (
        <div className='shadow-lg shadow-slate-300 hover:shadow-slate-400'>
            <img src={item.image} alt="" />
        </div>
    );
};

export default GalleryCard;