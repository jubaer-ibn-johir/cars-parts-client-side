import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Services from './Services';
import Summery from './Summery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Summery></Summery>
            <Services></Services>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;