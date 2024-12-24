import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Install this via `npm install emailjs-com`

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                'service_5g9asud', // Replace with your EmailJS Service ID
                'test_template123', // Replace with your EmailJS Template ID
                formData,
                'tQpdfsjlnZaUmdxwC' // Replace with your EmailJS User ID
            )
            .then(() => {
                setIsModalOpen(true);
                setFormData({ name: '', email: '', message: '' }); // Reset form
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
            });
    };

    return (
        <section id="contact" className="bg-white py-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">Contact Us</h2>

                <div className="flex flex-col md:flex-row items-center">
                    {/* Contact Form */}
                    <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-pink-500 hover:bg-pink-400 text-white font-medium py-3 px-6 rounded-full shadow-md transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12 text-center md:text-left">
                        <p className="text-gray-600 mb-4">
                            <strong>Phone:</strong> +1 (714) 393-2501
                        </p>
                        <p className="text-gray-600">
                            Are you planning a special event?  Send me a message about your plans, and I will get back to you soon!
                        </p>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Thank You!</h3>
                        <p className="text-gray-600 mb-4">We will be in contact with you shortly.</p>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="bg-pink-500 hover:bg-pink-400 text-white font-medium py-2 px-4 rounded-full shadow-md transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;
