import React from 'react';
import KathyThomasReview from '../../Assets/Images/KathyThomasReview.jpeg';
import TamaraMickelson from '../../Assets/Images/TamaraMickelson.jpg';
import KarenRowe from '../../Assets/Images/KarenRowe.jpeg';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: 'Kathy Thomas Ronquillo',
            image: KathyThomasReview,
            text: 'Amanda is the best!  I\'ve been to mulitple painting events and none of them compare to her talent, patience and willingness to help if you want it.  Her quality of products are top notch too.  Already looking forward to the next one.',
        },
        {
            id: 2,
            name: 'Tamara Mickelson',
            image: TamaraMickelson,
            text: 'I am not an artist but Amanda helps bring out the artist in all of us.  She instructs with clear direction and is always there to give help when needed.  Her amazing personality makes the evening not only fun but very relaxing.  I highly recommend her for your paint nights you will not be disappointed.',
        },
        {
            id: 3,
            name: 'Karen Rowe',
            image: KarenRowe,
            text: 'Last night was our first time with Paintbox in Paradise.  What a fun night!  Plenty of instruction and encouragment from Amanda.  The painting we did turns out to be one of the best ones I\'ve done.  Can\'t wait to go back!',
        },
    ];

    return (
        <section id="reviews" className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
                    What Our Clients Say
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
                        >
                            <div className="w-24 h-24 overflow-hidden rounded-full mb-4 flex items-center justify-center bg-gray-100">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                            <p className="text-gray-600 mt-4">"{review.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
