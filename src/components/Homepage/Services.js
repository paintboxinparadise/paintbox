import React from 'react';

const services = [
    {
        id: 1,
        title: 'What we Provide',
        description:
            'Paintbox in Paradise provides everything you need to create a beautiful masterpiece, including canvases, brushes, easels, paint, table covers, aprons, and even lighting to ensure the perfect ambiance. We handle the complete setup, guided lesson, and breakdown, so you can focus on enjoying the experience. <b>No experience is necessary</b>—whether you\'re a seasoned artist or have never picked up a brush, everyone leaves with their very own unique creation.<br><br>Each event lasts about 2 hours, allowing plenty of time to unwind and explore your creativity. Hosts provide the food, drinks, and venue, while we take care of the rest to make your painting event memorable and stress-free. It’s more than just painting—it’s a creative escape for everyone involved.',
        icon: '💡',
    },
    {
        id: 2,
        title: 'Pricing',
        description:
            'All private parties are $35 per person and <b>MUST</b> be a minimum of 10 people for up to 25 miles distance. Rates and minimum painters are subject to change for any parties over 25 miles travel from our location in Yorba Linda. Private party pricing includes 3 hours paint time. For any additional time beyond the 3 hours provided, there will be a $20 per half hour charge. There is a required, non-refundable $50 deposit to secure time and date for private parties. The deposit will go towards the event.<br><br><i>*Customized paintings are available upon request. Additional pricing and fees for customized paintings will be added. Call to get your quote.*</i><br><br>Public venue prices may vary and <b>MUST</b> be a minimum of 12 people. Seats must be purchased in advance. All purchased seats and reservations will be final. <b>Cancellations must be made within 48 hours for all classes in order to receive a refund. There are no class credits.</b> Classes will begin at their scheduled time. Please arrive at least 15 minutes prior. Seating is first come, first serve. I do not assign seating.',
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
                            <div
                                className="text-gray-600 text-left"
                                dangerouslySetInnerHTML={{ __html: service.description }}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
