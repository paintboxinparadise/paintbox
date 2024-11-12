import React from 'react';
import '../styles/AboutSection.css';

function AboutSection() {
    return (
        <section className="about-section" id="about">
            <h2>About Paintbox in Paradise</h2>

            <div className="about-image">
                <img src={require('../Assets/Images/About.jpeg')} alt="About Paintbox" />
            </div>

            <div className="about-text">
                <h3>Our Services</h3>
                <p>
                    <strong>All the fun brought to you!</strong> Paintbox in Paradise is a mobile paint party company that provides a fun and creative way to entertain in the comforts of your own place. <strong>Great for birthdays, office parties, holiday events, kids events, girls night out, team building, or just for fun!</strong> Serving mostly Orange County and Riverside communities.
                </p>
            </div>

            <div className="services-grid">
                <div className="service-item">
                    <img src={require('../Assets/Images/WhatWeProvide.jpeg')} alt="What we provide" />
                    <h4>What we Provide</h4>
                    <p>
                        Paintbox in Paradise provides canvases, brushes, easels, paint, tablecloths, aprons, lighting, and more. Complete setup and teardown are included. No experience necessary, and everyone walks away with their own masterpiece! Each event lasts about 1-2 hours depending on patrons. Host provides food, drinks, and venue.
                    </p>
                </div>

                <div className="service-item">
                    <img src={require('../Assets/Images/Pricing.jpg')} alt="Pricing and Policies" />
                    <h4>Pricing and Policies</h4>
                    <p>
                        All private parties are $50 per person and MUST be a minimum of 10 people for up to 25 miles distance. Rates and minimum parties are subject to change for any parties over 25 miles travel from our location to the party destination. Pricing includes paint & canvas setup for 1.5-2 hours per party. Additional hours are available for $50-$200 per half hour charge. There is a required non-refundable $50 deposit to secure your desired date for private events. We deposit this into Paypal or Venmo upon reserving.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
