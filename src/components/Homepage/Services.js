import React from 'react';

const services = [
    {
        id: 1,
        title: 'What we Provide',
        description: 'Paintbox in Paradise provides canvases, brushes, easels, paint, tablecovers, aprons, lighting and more. Complete set up, lesson and breakdown are included.  No experience necessary and everyone walks away with their very own masterpiece.  Each event last about 2 hours depending on patrons.  Host provides, food , drinks, and venue.',
        icon: '💡',
    },
    {
        id: 2,
        title: 'Pricing',
        description: 'All private parties are $35 per person and MUST be a minimum of 10 people for up to 25 miles distance.  Rates and minimum painters are subject to change for any parties over 25 miles travel from our location in Yorba Linda.  Private party pricing includes 3 hours paint time.  For any additional time beyond the 3 hours provided, there will be a $20 per half hour charge.  There is a required, non refundable $50 deposit to secure time and date for private parties.  The deposit will go towards the event.  \n\n *Customized paintings are available upon request.  Additional pricing and fees for customized paintings will be added.  Call to get your quote.*  \n\nPublic venue prices may vary and MUST be a minimum of 12 people.  Seats must be purchased in advance.   All purchased seats and reservations will be final.  Cancellations must be made within 48 hours for all classes in order to receive a refund. There are no class credits.  Classes will begin at their scheduled time. Please arrive at least 15 minutes prior.  Seating is first come, first serve. I do not assign seating. ',
        icon: '🎨',
    },
];

const Services = () => {
    return (
        <section id="services" className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Our Services</h2>

                <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow mx-auto flex flex-col"
                        >
                            <div className="text-5xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {service.title}
                            </h3>
                            <div className="text-gray-600 text-left max-h-40 overflow-y-auto">
                                {service.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
