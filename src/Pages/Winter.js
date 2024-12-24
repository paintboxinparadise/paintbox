import React from 'react';
import AnimatedTitle from '../components/AnimatedTitle';
import Gallery from '../components/Winter/WinterGallery';
import NewYears from '../components/Winter/NewYearsGallery';
import Valentines from '../components/Winter/ValentinesGallery';

const Winter = () => {
    return (
        <div className="bg-gradient-to-b from-blue-200 via-white to-gray-300 min-h-screen">
            <AnimatedTitle title="Winter Collection" emoji="❄️" animationClass="text-blue-500" />
            <Gallery />
            <AnimatedTitle title="New Years Collection" emoji="🥂" animationClass="text-yellow-500" />
            <NewYears />
            <AnimatedTitle title="Valentines Collection" emoji="💘" animationClass="text-red-500" />
            <Valentines />
        </div>
    );
};

export default Winter;
