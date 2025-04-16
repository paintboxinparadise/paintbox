import React from 'react';
import AnimatedTitle from '../components/AnimatedTitle';
import Gallery from '../components/Gallery';

const Fall = () => {
    return (
        <div className="bg-gradient-to-b from-orange-200 via-yellow-100 to-red-300 min-h-screen">
            <AnimatedTitle title="Fall Collection" emoji="🍁" animationClass="text-orange-500" />
            <Gallery category="Fall" />
        </div>
    );
};

export default Fall;
