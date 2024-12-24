// src/components/About/ProfileSection.js
import React from 'react';
import ProfileImage from '../../Assets/Images/ProfileImage.jpg';

const ProfileSection = () => {
    return (
        <section className="py-16 bg-pink-100 text-center">
            {/* Header Section */}
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="text-4xl font-extrabold mb-8 text-gray-800 border-b-2 border-pink-500 inline-block">
                    About Amanda Freeman
                </h2>

                {/* Profile Image and Content */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                        <img
                            src={ProfileImage}
                            alt="Amanda Freeman"
                            className="rounded-full w-56 h-56 object-cover shadow-lg border-4 border-pink-500"
                        />
                    </div>

                    {/* Biography Text */}
                    <div className="flex-grow text-gray-700 leading-relaxed text-left">
                        <p className="mb-4">
                            Amanda Freeman is a native Californian, growing up in Orange County and has been building
                            upon her innate artistic talent since childhood. Over the years, she has studied design,
                            printing, freehand drawing, sculpture, watercolor, interior design, scene painting,
                            photography, and studio art.
                        </p>
                        <p className="mb-4">
                            During high school, she took Advanced Placement – Studio Art and was recognized for her
                            talent, receiving a Certificate of Merit for Art. She continued her studies at Fullerton
                            Community College and at Mesa Community College in San Diego. At the California Art
                            Institute of San Diego, she majored in Advertising with an emphasis on Art.
                        </p>
                        <p className="mb-4">
                            Beginning in 2003, Amanda began as an instructor for children at the U.S. Arts Education
                            Center in Rancho Penasquitos in San Diego for four years. Several of her students had
                            artwork entered in juried competitions, some winning awards or special recognition for
                            their paintings.
                        </p>
                        <p className="mb-4">
                            Ms. Freeman directed art classes at private schools in Escondido, conducted after-school
                            programs in elementary and middle schools in Poway and Mira Mesa, and judged Reflections
                            entries for PTA. She worked with SDSU doing an A is For Art program which raised money
                            for children’s art.
                        </p>
                        <p className="mb-4">
                            In addition to teaching, Amanda Freeman has completed commissioned equestrian portraits.
                        </p>
                        <p className="mb-4">
                            She then moved to Maui, for seven years, where she had two babies. There she taught art
                            classes under her coconut tree in her front yard.
                        </p>
                        <p>
                            Amanda moved back to Orange County in 2014 and started Paintbox In Paradise in June of
                            2016. She has held events for many establishments and companies. Paintbox In Paradise
                            also does private parties, fundraisers, art therapy, and private lessons.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
