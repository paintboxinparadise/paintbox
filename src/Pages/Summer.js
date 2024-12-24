import React from 'react';
import AnimatedTitle from '../components/AnimatedTitle';
import Gallery from '../components/Summer/SummerGallery';
import Fourth from '../components/Summer/FourthGallery'

const Summer = () => {
    return (
        <div className="bg-gradient-to-b from-yellow-200 via-orange-100 to-red-200 min-h-screen">
            <AnimatedTitle title="Summer Collection" emoji="☀️" animationClass="text-yellow-500" />
            <Gallery />
            <AnimatedTitle title="Fourth of July Gallery" emoji="🎉" animationClass="text-red-500" />
            <Fourth />
        </div>
    );
};

export default Summer;
