import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404-error.gif';

const NotFound = () => {
    return (
        <div className='px-28 py-5 bg-slate-100'>
            <Link to="/">
                <img src={notfound} alt="" className='block mx-auto' />
            </Link>
        </div>
    );
};

export default NotFound;