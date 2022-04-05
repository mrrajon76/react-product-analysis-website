import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../images/logo.png'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className='flex justify-between sticky top-0 z-50 bg-amber-500 py-3 lg:py-6 px-12'>
            <div className="hidden lg:flex items-center space-x-3">
                <Link to="/"><img src={logo} alt="" className='h-9' /></Link>
                <Link to="/"><h3 className='text-3xl font-bold'>MacBook Pro</h3></Link>
            </div>
            <div className="w-full lg:w-auto lg:flex lg:space-x-10 text-lg font-medium">
                <CustomLink to="/">Home</CustomLink >
                <CustomLink to="/specifications">Specification</CustomLink >
                <CustomLink to="/reviews">Reviews</CustomLink >
                <CustomLink to="/dashboard">Dashboard</CustomLink >
                <CustomLink to="/blogs">Blogs</CustomLink >
            </div>
        </div>
    );
};

export default Header;