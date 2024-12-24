import React from 'react';
import AnimatedTitle from '../components/AnimatedTitle';
import Gallery from '../components/MISC/MiscGallery';

const Misc = () => {
    return (
        <div className="bg-gradient-to-b from-gray-300 via-white to-gray-200 min-h-screen">
            <AnimatedTitle title="Miscellaneous Collection" emoji="❔" animationClass="text-gray-500" />
            <Gallery />
        </div>
    );
};

export default Misc;