import React from 'react';
import Features from '../Components/Features';
import Gallery from '../Components/Gallery';
import Newsletter from '../Components/Newsletter';
import Banner from '../Components/Banner';
import ReviewSlider from '../Components/ReviewSlider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features ></Features>
            <Gallery></Gallery>
            <ReviewSlider></ReviewSlider>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;