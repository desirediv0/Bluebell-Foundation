'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

/**
 * A versatile Logo component with two modes:
 * 1. "rotate": Slides the logo out and in every few seconds (useful for header/footer).
 * 2. "marquee": Continuously scrolls the logo horizontally.
 */
export default function LogoMarquee({ mode = 'rotate', speed = 3, className = "" }) {
    const [key, setKey] = useState(0);

    useEffect(() => {
        if (mode === 'rotate') {
            const interval = setInterval(() => {
                setKey(prev => prev + 1);
            }, speed * 1000);
            return () => clearInterval(interval);
        }
    }, [mode, speed]);

    if (mode === 'marquee') {
        const logos = Array(10).fill('/logo.png'); // Repeat logo for marquee
        return (
            <div className={`overflow-hidden whitespace-nowrap py-4 ${className}`}>
                <motion.div
                    className="inline-block"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {logos.map((src, index) => (
                        <div key={index} className="inline-block mx-8 md:mx-12 lg:mx-16">
                            <Image
                                src={src}
                                alt="Bluebell Foundation"
                                width={180}
                                height={70}
                                className="h-10 md:h-12 lg:h-14 w-auto grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    ))}
                </motion.div>
                {/* Second track for seamless loop */}
                <motion.div
                    className="inline-block"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {logos.map((src, index) => (
                        <div key={index + 10} className="inline-block mx-8 md:mx-12 lg:mx-16">
                            <Image
                                src={src}
                                alt="Bluebell Foundation"
                                width={180}
                                height={70}
                                className="h-10 md:h-12 lg:h-14 w-auto grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        );
    }

    // Default "rotate" mode for header/footer
    return (
        <div className={`relative h-10 md:h-12 lg:h-14 flex items-center overflow-hidden ${className}`}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={key}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ 
                        duration: 0.8, 
                        ease: [0.22, 1, 0.36, 1] 
                    }}
                    className="flex items-center"
                >
                    <Image
                        src="/logo.png"
                        alt="Bluebell Foundation"
                        width={150}
                        height={60}
                        className="w-auto h-full"
                        priority
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
