import React from 'react';
import AnimatedTitle from '../components/AnimatedTitle';
import Gallery from '../components/Gallery';
import NewYears from '../components/Gallery';
import Valentines from '../components/Gallery';

const Winter = () => {
    return (
        <div className="bg-gradient-to-b from-blue-200 via-white to-gray-300 min-h-screen">
            <AnimatedTitle title="Winter Collection" emoji="❄️" animationClass="text-blue-500" />
            <Gallery category="Winter" />
            <AnimatedTitle title="New Years Collection" emoji="🥂" animationClass="text-yellow-500" />
            <Gallery category="New_Years" />
            <AnimatedTitle title="Valentines Collection" emoji="💘" animationClass="text-red-500" />
            <Gallery category="Valentines" />
        </div>
    );
};

export default Winter;
