import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Project from './Project/Project';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;