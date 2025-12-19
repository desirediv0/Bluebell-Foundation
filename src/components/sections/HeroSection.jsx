'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Heart, Hand } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="min-h-[90vh] md:min-h-screen bg-white flex items-center relative overflow-x-hidden w-full">
            {/* Subtle Abstract Background Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Top-left wavy arcs */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 0.15, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="absolute top-0 left-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px]"
                >
                    <svg viewBox="0 0 400 400" className="w-full h-full">
                        <path
                            d="M0,200 Q100,100 200,200 T400,200"
                            stroke="#1E73BE"
                            strokeWidth="2"
                            fill="none"
                            opacity="0.3"
                        />
                        <path
                            d="M0,250 Q150,150 300,250 T400,250"
                            stroke="#1E73BE"
                            strokeWidth="2"
                            fill="none"
                            opacity="0.2"
                        />
                    </svg>
                </motion.div>

                {/* Top-right circular outline */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.12, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute top-10 right-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] border-2 border-[#1E73BE] rounded-full"
                    style={{ opacity: 0.12 }}
                />

                {/* Bottom-left soft blob */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                    className="absolute bottom-20 left-10 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-[#1E73BE] rounded-full blur-3xl"
                    style={{ opacity: 0.1 }}
                />

                {/* Center-right soft blob */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.08 }}
                    transition={{ duration: 1.5, delay: 0.9 }}
                    className="absolute top-1/2 right-20 w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-[#0B4F8A] rounded-full blur-3xl"
                    style={{ opacity: 0.08 }}
                />
            </div>

            <div className="container-padding max-w-7xl mx-auto w-full relative z-10 pt-24 md:pt-32 pb-12 md:pb-20">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 md:space-y-10">
                        {/* Tagline */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-flex items-center gap-3"
                        >
                            <Hand className="w-5 h-5 md:w-6 md:h-6 text-[#1E73BE]" />
                            <span className="text-base md:text-lg font-semibold text-[#1E73BE] tracking-wide">
                                Change The World.
                            </span>
                        </motion.div>

                        {/* Main Headline - Editorial Style */}
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="font-heading text-4xl sm:text-5xl md:text-6xl   font-bold text-[#1F2937] leading-[1.1] tracking-tight"
                        >
                            Serving Humanity with{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10">Compassion,</span>
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-[#1E73BE]/30 via-[#1E73BE]/40 to-[#1E73BE]/30 rounded-sm -z-0"
                                    style={{ transformOrigin: 'left' }}
                                />
                            </span>{' '}
                            Dignity & Purpose
                        </motion.h1>

                        {/* Paragraph */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="text-lg md:text-xl  text-[#6B7280] max-w-xl leading-relaxed font-light"
                        >
                            Bluebell Foundation is a non-governmental organization committed to education, healthcare, women empowerment, environmental protection, and sustainable development across India.
                        </motion.p>

                        {/* CTA Buttons - Premium Pill Shape */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-wrap gap-4 pt-2"
                        >
                            <Link href="/leadership">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-[#1E73BE] to-[#0B4F8A] text-white font-semibold text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <span>Join Our Mission</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </motion.button>
                            </Link>
                            <Link href="/donate">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-5 bg-white border-2 border-[#1E73BE] text-[#1E73BE] font-semibold text-base md:text-lg rounded-full hover:bg-[#EAF4FF]/50 transition-all duration-300 shadow-sm hover:shadow-md"
                                >
                                    <Heart className="w-5 h-5" />
                                    <span>Donate Now</span>
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Side - Circular Image with Floating Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Large Circular Image */}
                        <div className="relative w-full max-w-[500px] md:max-w-[600px] aspect-square">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-white"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070"
                                    alt="Children receiving education and support"
                                    className="w-full h-full object-cover"
                                    width={500}
                                    height={500}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1E73BE]/10 via-transparent to-transparent" />
                            </motion.div>
                        </div>

                        {/* Floating Statistic Badge - Circular with Gradient */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.8 }}
                            animate={{
                                opacity: 1,
                                y: [0, -10, 0],
                                scale: 1
                            }}
                            transition={{
                                opacity: { duration: 0.8, delay: 1 },
                                y: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1.2
                                },
                                scale: { duration: 0.8, delay: 1 }
                            }}
                            className="absolute bottom-8 left-0 md:-left-8 w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full bg-gradient-to-br from-[#1E73BE] via-[#0B4F8A] to-[#1E73BE] shadow-2xl flex flex-col items-center justify-center text-white p-6 z-10"
                        >
                            <div className="text-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
                                    className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
                                >
                                    25+
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 1.5 }}
                                    className="text-sm md:text-base font-semibold text-white/90 tracking-wide"
                                >
                                    Years of Service
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
