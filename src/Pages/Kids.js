import React from 'react';
import AnimatedTitle from '../components/AnimatedTitle';
import Gallery from '../components/Kids/KidsGallery';

const Kids = () => {
    return (
        <div className="bg-gradient-to-b from-pink-300 via-yellow-200 to-purple-100 min-h-screen">
            <AnimatedTitle title="Kids Collection" emoji="🧸" animationClass="text-pink-500" />
            <Gallery />
        </div>
    );
};

export default Kids;