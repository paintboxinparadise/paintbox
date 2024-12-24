// src/components/AnimatedTitle.js
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedTitle = ({ title, emoji, animationClass }) => {
    return (
        <div className="relative w-full h-auto overflow-hidden">
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className={`absolute ${animationClass}`}
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        fontSize: `${Math.random() * 2 + 1.5}rem`,
                    }}
                    initial={{
                        y: -50,
                        rotate: Math.random() * 360,
                        opacity: 0,
                    }}
                    animate={{
                        y: 50,
                        rotate: Math.random() * 360,
                        opacity: 1,
                    }}
                    transition={{
                        duration: Math.random() * 6 + 4,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                >
                    {emoji}
                </motion.div>
            ))}

            <motion.h1
                className="text-5xl font-extrabold text-center py-8"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                {emoji} {title} {emoji}
            </motion.h1>
        </div>
    );
};

export default AnimatedTitle;
