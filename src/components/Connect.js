// src/components/Homepage/Connect.js
import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Connect = () => {
    return (
        <footer className="bg-gray-800 py-8">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center text-white">
                <h2 className="text-2xl font-extrabold mb-4">Connect With Us</h2>
                <p className="text-gray-400 mb-6">
                    Follow us on social media to stay updated on our latest news and offerings.
                </p>

                <div className="flex justify-center space-x-6">
                    <a
                        href="https://www.facebook.com/paintboxinparadise"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-pink-500 hover:bg-pink-400 text-white rounded-full p-3 transition"
                    >
                        <FaFacebookF className="h-6 w-6" />
                    </a>
                    <a
                        href="https://www.instagram.com/paintboxinparadise"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-pink-500 hover:bg-pink-400 text-white rounded-full p-3 transition"
                    >
                        <FaInstagram className="h-6 w-6" />
                    </a>
                </div>

                <p className="text-gray-500 mt-6 text-sm">
                    &copy; {new Date().getFullYear()} Paintbox in Paradise. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Connect;
