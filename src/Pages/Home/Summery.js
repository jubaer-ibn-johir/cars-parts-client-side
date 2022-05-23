import React from 'react';
import SummeryCard from './SummeryCard';
import customers from '../../assets/icons/rating.png';
import revenue from '../../assets/icons/revenue.png';
import reviews from '../../assets/icons/reviews.png';

const Summery = () => {
    return (
        <div className='mb-12'>
            <h2 className='text-4xl font-bold text-center uppercase mb-6'>Business Summery</h2>
            <h3 className='text-center  text-3xl uppercase my-2'>Thousands of customers trust us</h3>
            <p className='text-center text-xl  uppercase mb-4'>Try to understand users expectations</p>
            
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-6  '>
            <SummeryCard cardDetails="We Served 1M+ Customers " cardTitle="Customers" img={customers} ></SummeryCard>
            <SummeryCard cardDetails="$120M+ Annual Revenue" cardTitle="Revenue" img={revenue} ></SummeryCard>
            <SummeryCard cardDetails="We have more than 30k+ reviews" cardTitle="Reviews" img={reviews} ></SummeryCard>
            </div>

        </div>
    );
};

export default Summery;