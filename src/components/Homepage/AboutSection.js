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
                            <b>All the fun brought to you!</b>  Paintbox in Paradise is a mobile paint party company that provides a fun
                            and creative way to entertain in the comforts of your own place.  <b>Great for birthdays, office parties,
                            holiday events, kids events, girls night out, team building, or just for fun!</b>  Serving mostly Orange
                            County and Riverside communities.
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
