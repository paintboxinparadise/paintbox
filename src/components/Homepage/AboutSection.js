// src/components/Homepage/AboutSection.js
import React from 'react';
import AboutImage from '../../Assets/Images/About.jpeg';

const AboutSection = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Text Content */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                            About Us
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We are dedicated to providing exceptional services and solutions.
                            With years of experience, we ensure quality and customer satisfaction
                            in everything we do.
                        </p>
                        <a
                            href="#services"
                            className="inline-block bg-pink-500 hover:bg-pink-400 text-white font-medium py-3 px-6 rounded-full shadow-md transition"
                        >
                            Learn More
                        </a>
                    </div>

                    {/* Image Content */}
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <img
                            src={AboutImage}
                            alt="About Us"
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
