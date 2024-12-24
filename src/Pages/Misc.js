// src/Pages/Misc.js
import React from 'react';
import { motion } from 'framer-motion';
import Gallery from '../components/MISC/MiscGallery';

const Misc = () => {
    return (
        <div className="bg-gradient-to-b from-gray-300 via-white to-gray-200 min-h-screen">
            {/* Animated Header with Floating Symbols */}
            <div className="relative w-full h-auto overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-gray-500"
                        style={{
                            top: `${Math.random() * 100}%`, // Random vertical position
                            left: `${Math.random() * 100}%`, // Random horizontal position
                            fontSize: `${Math.random() * 2 + 1.5}rem`, // Random font size for variation
                        }}
                        initial={{
                            y: -50,
                            rotate: Math.random() * 360, // Random initial rotation
                            opacity: 0,
                        }}
                        animate={{
                            y: 50,
                            rotate: Math.random() * 360, // Continuous spinning
                            opacity: 1,
                        }}
                        transition={{
                            duration: Math.random() * 6 + 4, // Smooth floating speed
                            repeat: Infinity,
                            delay: Math.random() * 2, // Staggered appearance
                        }}
                    >
                        ❔
                    </motion.div>
                ))}

                <motion.h1
                    className="text-5xl font-extrabold text-center py-8 text-gray-800"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    ❔ Miscellaneous Collection ❔
                </motion.h1>
            </div>

            {/* Gallery */}
            <Gallery />
        </div>
    );
};

export default Misc;
