import React from 'react';
import AnimatedTitle from '../components/AnimatedTitle';
import Gallery from '../components/Fall/FallGallery';

const Fall = () => {
    return (
        <div className="bg-gradient-to-b from-orange-200 via-yellow-100 to-red-300 min-h-screen">
            <AnimatedTitle title="Fall Collection" emoji="🍁" animationClass="text-orange-500" />
            <Gallery />
        </div>
    );
};

export default Fall;
