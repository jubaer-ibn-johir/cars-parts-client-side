import React from 'react';
import Banner from './Banner';
import CarParts from './CarParts';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Reviews from './Reviews';
import Services from './Services';
import Summery from './Summery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CarParts></CarParts>
            <Summery></Summery>
            <Services></Services>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;