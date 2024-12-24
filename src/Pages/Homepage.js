import React from 'react';
import Header from '../components/Homepage/Header';
import AboutSection from '../components/Homepage/AboutSection';
import Reviews from '../components/Homepage/Reviews';
import Contact from '../components/Homepage/Contact';
import Services from "../components/Homepage/Services";

function Homepage() {
    return (
        <div className="App">
            <Header />
            <AboutSection />
            <Services />
            <Reviews />
            <Contact />
        </div>
    );
}

export default Homepage;
