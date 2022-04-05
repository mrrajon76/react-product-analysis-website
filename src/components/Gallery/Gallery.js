import React, { useEffect, useState } from 'react';
import GalleryCard from '../GalleryCard/GalleryCard';

const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("gallery.json")
            .then(res => res.json())
            .then(data => setImages(data))
    }, []);

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 mt-10'>
            {
                images.map(image => <GalleryCard item={image} key={image.id}></GalleryCard>)
            }
        </div>
    );
};

export default Gallery;