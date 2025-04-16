import React from 'react';
import AnimatedTitle from '../components/AnimatedTitle';
import Gallery from '../components/Gallery';

const Summer = () => {
    return (
        <div className="bg-gradient-to-b from-yellow-200 via-orange-100 to-red-200 min-h-screen">
            <AnimatedTitle title="Summer Collection" emoji="☀️" animationClass="text-yellow-500" />
            <Gallery category="Summer" />
            <AnimatedTitle title="Fourth of July Gallery" emoji="🎉" animationClass="text-red-500" />
            <Gallery category="FourthOfJuly" />
        </div>
    );
};

export default Summer;
