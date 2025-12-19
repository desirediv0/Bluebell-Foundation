'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';


const stats = [
    { number: '10+', label: 'Years of Service' },
    { number: '50+', label: 'Active Programs' },
    { number: '1000+', label: 'Lives Impacted' },
    { number: '25+', label: 'Communities Served' },
];

export default function AboutUs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <main className="pt-24 md:pt-32">
            <section ref={ref} className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#EAF4FF] via-white to-[#EAF4FF]/30 overflow-x-hidden">
                <div className="container-padding max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12 md:mb-20"
                    >
                        <span className="text-sm font-semibold text-[#1E73BE] tracking-wider uppercase">
                            WHO WE ARE
                        </span>
                        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1F2937] mt-4 mb-6">
                            About Bluebell Foundation
                        </h1>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start mb-12 md:mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-[#1F2937] leading-relaxed">
                                Bluebell Foundation is a non-governmental organization working towards social upliftment and nation-building. We believe in inclusive growth, equal opportunities, and empowering individuals to live with dignity and self-reliance.
                            </p>
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center gap-2 text-[#1E73BE] font-semibold text-lg hover:text-[#0B4F8A] transition-colors group"
                            >
                                Learn More
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="grid grid-cols-2 gap-4 md:gap-6"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                    className="bg-[#EAF4FF] p-6 md:p-8 rounded-2xl text-center hover:bg-[#EAF4FF]/80 transition-colors duration-300"
                                >
                                    <div className="font-heading text-4xl md:text-5xl font-bold text-[#0B4F8A] mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-[#1F2937] font-medium text-sm md:text-base">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16  pb-24 items-center">
                        {[
                            {
                                title: 'Our Mission',
                                content: 'To build a society where peace, education, and equality prevail, ensuring access to education, healthcare, employment, housing, sanitation, and economic self-reliance for all, irrespective of color, language, or gender.',
                            },
                            {
                                title: 'Our Vision',
                                content: 'To rebuild human dignity of the poor and marginalized through education, healthcare, environmental protection, and sustainable livelihood opportunities, creating a safer and inclusive society for all.',
                            },
                            {
                                title: 'Our Values',
                                content: [
                                    'Compassion and empathy in all our actions',
                                    'Transparency and accountability in our operations',
                                    'Collaboration and partnership with communities',
                                    'Innovation and adaptability in our approach',
                                    'Sustainability and long-term impact focus',
                                ],
                            },
                        ].map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                                className="bg-white p-6 md:p-8 lg:p-10 xl:p-14 rounded-3xl shadow-soft"
                            >
                                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2937] mb-4 md:mb-6">
                                    {section.title}
                                </h2>
                                {Array.isArray(section.content) ? (
                                    <ul className="space-y-4">
                                        {section.content.map((item, idx) => (
                                            <li key={idx} className="text-base md:text-lg lg:text-xl text-[#1F2937] flex items-start gap-2 md:gap-3">
                                                <span className="text-[#1E73BE] mt-2">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-base md:text-lg lg:text-xl text-[#1F2937] leading-relaxed">
                                        {section.content}
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

