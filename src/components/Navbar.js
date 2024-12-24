// src/components/Homepage/Navbar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Assets/Images/logo.png'; // Ensure this is a high-quality image, preferably SVG
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const splatters = [
        { top: '10%', left: '15%', bgColor: '#FF69B4' },
        { top: '30%', left: '50%', bgColor: '#FFD700' },
        { top: '70%', left: '20%', bgColor: '#1E90FF' },
        { top: '50%', left: '80%', bgColor: '#32CD32' },
        { top: '90%', left: '40%', bgColor: '#FF4500' },
    ];

    return (
        <motion.nav
            className="bg-white shadow-md sticky top-0 z-50 relative overflow-hidden"
            initial="hidden"
            animate="visible"
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between py-4">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-20 w-auto" // Increased height, width adjusts automatically
                    />
                </div>

                {/* Hamburger Menu */}
                <button
                    className="block md:hidden text-pink-500 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>

                {/* Navigation Links */}
                <div
                    className={`${
                        isOpen ? 'flex' : 'hidden'
                    } md:flex md:space-x-8 justify-center flex-1 flex-col md:flex-row md:items-center`}
                >
                    {/* Navigation links remain the same */}
                    {[
                        'HOME',
                        'ABOUT',
                        'FALL',
                        'WINTER',
                        'SPRING',
                        'SUMMER',
                        'NATURE',
                        'ANIMALS',
                        'GLASSWARE',
                        'KIDS',
                        'MISC',
                    ].map((link, index) => (
                        <Link
                            key={index}
                            to={`/${link.toLowerCase()}`}
                            className={`${
                                location.pathname === `/${link.toLowerCase()}`
                                    ? 'text-pink-500 font-bold'
                                    : 'text-black hover:text-pink-300'
                            } transition py-2`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Paint Splatter Animation */}
            {splatters.map((splatter, index) => (
                <motion.div
                    key={index}
                    className="absolute rounded-full blur-xl"
                    style={{
                        top: splatter.top,
                        left: splatter.left,
                        width: '70px',
                        height: '70px',
                        backgroundColor: splatter.bgColor,
                        zIndex: -1,
                    }}
                    initial="hidden"
                    animate="visible"
                ></motion.div>
            ))}
        </motion.nav>
    );
};

export default Navbar;
