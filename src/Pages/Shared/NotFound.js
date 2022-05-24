import React from 'react';
import error from '../../assets/images/error.gif';

const NotFound = () => {
    return (
        <div >
            <h2 className='text-center text-4xl font-bold mb-4'>Page Connection Not Found </h2>
            <img  src={error} alt=""/>
        </div>
    );
};

export default NotFound;