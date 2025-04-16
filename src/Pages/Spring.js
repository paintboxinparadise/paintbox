import React from 'react';
import AnimatedTitle from '../components/AnimatedTitle';
import Gallery from '../components/Gallery';

const Spring = () => {
    return (
        <div className="bg-gradient-to-b from-green-200 via-pink-100 to-yellow-200 min-h-screen">
            <AnimatedTitle title="Spring Collection" emoji="🌸" animationClass="text-pink-500" />
            <Gallery category="Spring" />
            <AnimatedTitle title="St. Patrick's Day Gallery" emoji="☘️" animationClass="text-green-500" />
            <Gallery category="Patricks" />
        </div>
    );
};

export default Spring;
