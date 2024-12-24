import React from 'react';
import AnimatedTitle from '../components/AnimatedTitle';
import Gallery from '../components/Nature/NatureGallery';

const Nature = () => {
    return (
        <div className="bg-gradient-to-b from-green-300 via-blue-200 to-yellow-100 min-h-screen">
            <AnimatedTitle title="Nature Collection" emoji="🍃" animationClass="text-green-500" />
            <Gallery />
        </div>
    );
};

export default Nature;
