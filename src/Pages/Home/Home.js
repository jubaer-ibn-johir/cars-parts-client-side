import React from 'react';
import Banner from './Banner';
import Services from './Services';
import Summery from './Summery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Summery></Summery>
            <Services></Services>
        </div>
    );
};

export default Home;