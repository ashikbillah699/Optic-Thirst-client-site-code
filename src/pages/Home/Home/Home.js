import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import MyGallary from '../MyGallary/MyGallary';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <MyGallary></MyGallary>
        </div>
    );
};

export default Home;