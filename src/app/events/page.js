'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const events = [
    {
        title: 'Education Drive at Asha Grih',
        date: 'March 15, 2024',
        location: 'Dwarka, New Delhi',
        description: 'Bluebell Foundation organized an education drive to support underprivileged children by providing learning materials and encouragement towards education.',
        status: 'completed',
        image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=2013',
    },
    {
        title: 'Health Awareness Campaign',
        date: 'April 20, 2024',
        location: 'Community Center',
        description: 'Free health checkups, consultations, and health awareness activities for the entire community.',
        status: 'completed',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070',
    },
    {
        title: 'Tree Plantation Drive',
        date: 'May 10, 2024',
        location: 'Dwarka Sector',
        description: 'A community-driven tree plantation drive to promote environmental responsibility and biodiversity conservation.',
        status: 'completed',
        image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=2070',
    },
    {
        title: 'Food Distribution (Bhandara)',
        date: 'June 5, 2024',
        location: 'Multiple Locations',
        description: 'Organized food distribution drive providing meals to the needy and spreading awareness about hunger eradication.',
        status: 'completed',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070',
    },
];

export default function Events() {
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
                            JOIN US
                        </span>
                        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1F2937] mt-4 mb-6">
                            Recent Events & Campaigns
                        </h1>
                        <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
                            Explore our recent events, awareness campaigns, and community programs.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {events.map((event, index) => (
                            <motion.div
                                key={event.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="group"
                            >
                                <div className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 hover:border-[#1E73BE]/20">
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 right-4">
                                            <span className={`${event.status === 'upcoming' ? 'bg-[#4CAF50]' : 'bg-[#1E73BE]'} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                                                {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 md:gap-6 text-xs md:text-sm text-[#6B7280] mb-4">
                                            <span className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                {event.date}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4" />
                                                {event.location}
                                            </span>
                                        </div>
                                        <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2937] mb-4 group-hover:text-[#1E73BE] transition-colors duration-300">
                                            {event.title}
                                        </h3>
                                        <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                                            {event.description}
                                        </p>
                                        <Button variant="ghost" className="text-[#1E73BE] hover:bg-[#1E73BE]/5 group">
                                            Learn More
                                            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                        </Button>
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

