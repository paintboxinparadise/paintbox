// src/components/Homepage/Header.js
import React from 'react';
import headerBackground from '../../Assets/Images/headerBackground.jpeg';
import { motion } from 'framer-motion';

const paintSplatterTextVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const paintLetterVariants = {
    hidden: { opacity: 0, x: -20, y: -20 },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

const Header = () => {
    const title = 'Let Me Entertain You!';
    const colors = ['#FF69B4', '#FFD700', '#1E90FF', '#32CD32', '#FF4500'];

    // Function to handle smooth scrolling to the contact section
    const handleScrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header
            className="relative bg-cover bg-center h-screen flex items-center justify-center text-center text-white"
            style={{ backgroundImage: `url(${headerBackground})` }}
        >
            <div className="bg-black bg-opacity-50 p-6 rounded-lg relative">
                <motion.h1
                    className="text-5xl font-extrabold mb-4 relative flex flex-wrap justify-center"
                    variants={paintSplatterTextVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {title.split('').map((char, index) => (
                        <motion.span
                            key={index}
                            className="inline-block"
                            style={{ color: colors[index % colors.length] }}
                            variants={paintLetterVariants}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    ))}
                </motion.h1>
                <motion.p
                    className="text-lg mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                >
                    Let me bring a spark to your entertainment!
                </motion.p>
                <motion.button
                    onClick={handleScrollToContact} // Use onClick to trigger scrolling
                    className="bg-pink-500 hover:bg-pink-400 text-white font-medium py-3 px-6 rounded-full shadow-md transition"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    BOOK EVENT
                </motion.button>
            </div>
        </header>
    );
};

export default Header;