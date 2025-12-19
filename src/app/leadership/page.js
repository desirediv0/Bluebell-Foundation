'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Mail, Award } from 'lucide-react';

const leaders = [
    {
        name: 'Rajesh Kumar',
        role: 'Founder & CEO',
        bio: 'With over 20 years of experience in social work, Rajesh leads our organization with passion and dedication to create lasting change.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000',
        achievements: '25+ Years Experience',
    },
    {
        name: 'Priya Sharma',
        role: 'Program Director',
        bio: 'Priya oversees all our programs and ensures they align with our mission and create maximum impact in communities.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000',
        achievements: '150+ Programs Launched',
    },
    {
        name: 'Amit Patel',
        role: 'Operations Manager',
        bio: 'Amit ensures smooth operations and efficient resource management across all our initiatives and partnerships.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000',
        achievements: '10+ Years in Operations',
    },
    {
        name: 'Sneha Reddy',
        role: 'Community Outreach Coordinator',
        bio: 'Sneha builds relationships with communities and partners to expand our reach and create sustainable impact.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000',
        achievements: '500+ Communities Served',
    },
];

export default function Leadership() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

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
                            MEET THE TEAM
                        </span>
                        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1F2937] mt-4 mb-6">
                            Our Leadership
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-[#6B7280] max-w-3xl mx-auto">
                            Dedicated leaders committed to creating positive change
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {leaders.map((leader, index) => (
                            <motion.div
                                key={leader.name}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="group"
                            >
                                <div className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 hover:border-[#1E73BE]/20">
                                    <div className="relative aspect-square overflow-hidden">
                                        <img
                                            src={leader.image}
                                            alt={leader.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="flex items-center gap-2 text-white text-xs md:text-sm font-semibold">
                                                <Award className="w-4 h-4" />
                                                {leader.achievements}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-8 text-center">
                                        <h3 className="font-heading text-xl md:text-2xl font-bold text-[#1F2937] mb-2">
                                            {leader.name}
                                        </h3>
                                        <p className="text-[#1E73BE] font-semibold text-base md:text-lg mb-4">
                                            {leader.role}
                                        </p>
                                        <p className="text-sm md:text-base text-[#6B7280] leading-relaxed mb-6">
                                            {leader.bio}
                                        </p>
                                        <div className="flex items-center justify-center gap-4">
                                            <a
                                                href="#"
                                                className="w-9 h-9 md:w-10 md:h-10 bg-[#EAF4FF] rounded-lg flex items-center justify-center hover:bg-[#1E73BE] hover:text-white transition-colors duration-300"
                                                aria-label="LinkedIn"
                                            >
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                            <a
                                                href="#"
                                                className="w-9 h-9 md:w-10 md:h-10 bg-[#EAF4FF] rounded-lg flex items-center justify-center hover:bg-[#1E73BE] hover:text-white transition-colors duration-300"
                                                aria-label="Email"
                                            >
                                                <Mail className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

