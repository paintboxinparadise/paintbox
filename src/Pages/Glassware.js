import React from 'react';
import AnimatedTitle from '../components/AnimatedTitle';
import Gallery from '../components/Glassware/GlasswareGallery';

const Glassware = () => {
    return (
        <div className="bg-gradient-to-b from-blue-300 via-cyan-200 to-gray-100 min-h-screen">
            <AnimatedTitle title="Glassware Collection" emoji="🍷" animationClass="text-blue-500" />
            <Gallery />
        </div>
    );
};

export default Glassware;
