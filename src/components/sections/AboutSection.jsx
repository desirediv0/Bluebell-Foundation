'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Users, Heart, Award, Target } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const stats = [
        { number: '25+', label: 'Years of Service', icon: Award, color: 'bg-[#EAF4FF]', iconColor: 'text-[#1E73BE]' },
        { number: '500+', label: 'Communities Served', icon: Users, color: 'bg-[#EAF4FF]', iconColor: 'text-[#1E73BE]' },
        { number: '50+', label: 'Active Programs', icon: Target, color: 'bg-[#EAF4FF]', iconColor: 'text-[#1E73BE]' },
        { number: '1000+', label: 'Lives Impacted', icon: Heart, color: 'bg-[#EAF4FF]', iconColor: 'text-[#1E73BE]' },
    ];

    return (
        <section ref={ref} className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white via-[#EAF4FF]/30 to-white overflow-x-hidden">
            <div className="container-padding max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="text-sm font-semibold text-[#1E73BE] tracking-wider uppercase">
                                WHO WE ARE
                            </span>
                            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] mt-4 mb-6">
                                About Bluebell Foundation
                            </h2>
                        </div>
                        <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-[#1F2937] leading-relaxed">
                            Bluebell Foundation is a non-profit organization dedicated to uplifting the underprivileged and marginalized sections of society. Our work focuses on creating sustainable change through education, healthcare, employment generation, women empowerment, and environmental protection.
                        </p>
                        <Link href="/about-us">
                            <Button variant="heroOutline" size="xl" className="group mt-6">
                                Learn More
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Right Stats & Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-6"
                    >
                        {/* Together We Care Image */}

                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                    className="group"
                                >
                                    <div className={`${stat.color} p-6 md:p-8 rounded-3xl text-center hover:shadow-card transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 hover:border-[#1E73BE]/20`}>
                                        <div className="flex justify-center mb-4">
                                            <div className={`w-12 h-12 md:w-16 md:h-16 ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                                <stat.icon className={`w-6 h-6 md:w-8 md:h-8 ${stat.iconColor}`} />
                                            </div>
                                        </div>
                                        <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B4F8A] mb-2">
                                            {stat.number}
                                        </div>
                                        <div className="text-base md:text-lg text-[#1F2937] font-semibold">
                                            {stat.label}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

