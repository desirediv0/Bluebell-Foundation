'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const initiatives = [
    {
        title: 'Education Drives',
        description: 'Supporting students with books, stationery, and learning resources to ensure quality education access.',
        impact: 'Empowering Students',
        gradient: 'from-[#1E73BE] to-[#0B4F8A]',
        bgGradient: 'from-[#EAF4FF] to-[#EAF4FF]',
        textColor: 'text-[#0B4F8A]',
    },
    {
        title: 'Skill Development Programs',
        description: 'Vocational training for self-employment, enhancing employability and supporting entrepreneurship.',
        impact: 'Building Skills',
        gradient: 'from-[#1E73BE] to-[#0B4F8A]',
        bgGradient: 'from-[#EAF4FF] to-[#EAF4FF]',
        textColor: 'text-[#0B4F8A]',
    },
    {
        title: 'Employment Workshops',
        description: 'Career guidance and placement support to connect individuals with employment opportunities.',
        impact: 'Creating Opportunities',
        gradient: 'from-[#1E73BE] to-[#0B4F8A]',
        bgGradient: 'from-[#EAF4FF] to-[#EAF4FF]',
        textColor: 'text-[#0B4F8A]',
    },
    {
        title: 'Food Distribution (Bhandara)',
        description: 'Providing meals to the needy through organized food distribution drives and community kitchens.',
        impact: 'Fighting Hunger',
        gradient: 'from-[#4CAF50] to-[#4CAF50]',
        bgGradient: 'from-[#4CAF50]/10 to-[#4CAF50]/10',
        textColor: 'text-[#4CAF50]',
    },
    {
        title: 'Tree Plantation Drives',
        description: 'Encouraging environmental responsibility through tree plantation and biodiversity conservation efforts.',
        impact: 'Protecting Environment',
        gradient: 'from-[#1E73BE] to-[#0B4F8A]',
        bgGradient: 'from-[#EAF4FF] to-[#EAF4FF]',
        textColor: 'text-[#0B4F8A]',
    },
    {
        title: 'Blood Donation Camps',
        description: 'Saving lives through voluntary blood donation camps and health awareness programs.',
        impact: 'Saving Lives',
        gradient: 'from-[#1E73BE] to-[#0B4F8A]',
        bgGradient: 'from-[#EAF4FF] to-[#EAF4FF]',
        textColor: 'text-[#0B4F8A]',
    },
];

export default function Initiatives() {
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
                            MAKING AN IMPACT
                        </span>
                        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1F2937] mt-4 mb-6">
                            Our Initiatives
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-[#6B7280] max-w-3xl mx-auto">
                            Our initiatives are designed to bring real change at the grassroots level.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {initiatives.map((initiative, index) => (
                            <motion.div
                                key={initiative.title}
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className={`bg-gradient-to-br ${initiative.bgGradient} h-full p-10 rounded-3xl shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-white/50 relative overflow-hidden`}>
                                    {/* Gradient accent bar */}
                                    <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${initiative.gradient}`} />

                                    <div className="relative z-10">
                                        <h3 className={`font-heading text-3xl md:text-4xl font-bold ${initiative.textColor} mb-6 group-hover:scale-105 transition-transform duration-300`}>
                                            {initiative.title}
                                        </h3>
                                        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                                            {initiative.description}
                                        </p>
                                        <div className="pt-6 border-t-2 border-white/50">
                                            <p className={`font-bold text-lg md:text-xl lg:text-2xl ${initiative.textColor}`}>
                                                {initiative.impact}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Decorative gradient overlay on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${initiative.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-center"
                    >
                        <Link href="/contact-us">
                            <Button variant="hero" size="xl" className="group text-sm md:text-base">
                                Get Involved
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

