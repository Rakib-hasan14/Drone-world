import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Drones from '../Drones/Drones';
import Reviews from '../Reveiws/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Drones></Drones>
            <Reviews></Reviews>
            <About></About>
        </div>
    );
};

export default Home;