import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='sticky top-0 z-50 flex justify-center space-x-10 bg-amber-500 p-6 text-lg font-medium'>
            <CustomLink to="/">Home</CustomLink >
            <CustomLink to="/specifications">Specification</CustomLink >
            <CustomLink to="/reviews">Reviews</CustomLink >
            <CustomLink to="/dashboard">Dashboard</CustomLink >
            <CustomLink to="/blogs">Blogs</CustomLink >
        </div>
    );
};

export default Header;