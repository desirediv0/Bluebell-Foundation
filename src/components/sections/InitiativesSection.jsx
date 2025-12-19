'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const initiatives = [
    {
        title: 'Scholarship Program',
        description: 'Providing educational opportunities to deserving students who lack the means to pursue higher education.',
        impact: '500+ students supported',
        gradient: 'from-[#1E73BE] to-[#0B4F8A]',
        bgGradient: 'from-[#EAF4FF] to-[#EAF4FF]',
        textColor: 'text-[#0B4F8A]',
    },
    {
        title: 'Health Camps',
        description: 'Free medical checkups and treatment for underserved communities through our mobile health units.',
        impact: '10,000+ people served',
        gradient: 'from-[#1E73BE] to-[#0B4F8A]',
        bgGradient: 'from-[#EAF4FF] to-[#EAF4FF]',
        textColor: 'text-[#0B4F8A]',
    },
    {
        title: 'Skill Development',
        description: 'Training programs to enhance employability and entrepreneurship with practical, market-relevant skills.',
        impact: '1,000+ individuals trained',
        gradient: 'from-[#1E73BE] to-[#0B4F8A]',
        bgGradient: 'from-[#EAF4FF] to-[#EAF4FF]',
        textColor: 'text-[#0B4F8A]',
    },
];

export default function InitiativesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white via-[#EAF4FF]/30 to-white overflow-x-hidden">
            <div className="container-padding max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-20"
                >
                    <span className="text-sm font-semibold text-[#1E73BE] tracking-wider uppercase">
                        WHAT WE DO
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] mt-4 mb-6">
                        Our Initiatives
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-[#6B7280] max-w-3xl mx-auto">
                        Our initiatives are designed to bring real change at the grassroots level.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
                    {initiatives.map((initiative, index) => (
                        <motion.div
                            key={initiative.title}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className={`bg-gradient-to-br ${initiative.bgGradient} h-full p-6 md:p-8 lg:p-10 rounded-3xl shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-white/50 relative overflow-hidden`}>
                                {/* Gradient accent bar */}
                                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${initiative.gradient}`} />

                                <div className="relative z-10">
                                    <h3 className={`font-heading text-3xl md:text-4xl font-bold ${initiative.textColor} mb-6 group-hover:scale-105 transition-transform duration-300`}>
                                        {initiative.title}
                                    </h3>
                                    <p className="text-lg md:text-xl text-[#1F2937] mb-8 leading-relaxed font-medium">
                                        {initiative.description}
                                    </p>
                                    <div className="pt-6 border-t-2 border-white/50">
                                        <p className={`font-bold text-xl md:text-2xl ${initiative.textColor}`}>
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
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-center"
                >
                    <Link href="/initiatives">
                        <Button variant="hero" size="xl" className="group">
                            View All Initiatives
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

