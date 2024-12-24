import React from 'react';
import AnimatedTitle from '../components/AnimatedTitle';
import Gallery from '../components/Animals/AnimalsGallery';

const Animals = () => {
    return (
        <div className="bg-gradient-to-b from-brown-300 via-yellow-200 to-green-100 min-h-screen">
            <AnimatedTitle title="Animals Collection" emoji="🐾" animationClass="text-brown-500" />
            <Gallery />
        </div>
    );
};

export default Animals;
