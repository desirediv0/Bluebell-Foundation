'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Mail, Award } from 'lucide-react';
import Image from 'next/image';

const leaders = [
    {
        name: 'Monalisa Dash',
        role: 'President',
        bio: 'Being a Lady Entrepreneur and Businesswomen, I feel that let\'s contribute generously towards Nation Building and Make Bharat more Self Reliant. Our foundation is committed to serve our people and working tirelessly for the betterment of our society.',
        message: 'Dear Readers\n\nBeing a Lady Entrepreneur and Businesswomen, I feel that let\'s contribute generously towards Nation Building and Make Bharat more Self Reliant.\n\nOur foundation is committed to serve our people and working tirelessly for the betterment of our society. With a steadfast dedication to various causes, we strive to pave the way for a brighter, healthier, and more prosperous future for all.\n\nTogether, with your support and collaboration, we will march forward towards a brighter tomorrow. Let us unite our efforts, harness our collective strength, and build a nation where every individual can thrive and prosper.\n\nThank you for your unwavering support.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000',
        achievements: 'Leading Nation Building',
        hasMessage: true,
    },
    {
        name: 'Biswa Bhusan Dash',
        role: 'Vice President & Managing Director',
        bio: 'As the Vice President and Managing Director, I extend warm greetings to all who champion the cause of humanity. Our foundation stands firm in its dedication to enhancing health and sanitation standards.',
        message: 'Dear Esteemed Readers,\n\nAs the Vice President and Managing Director of Bluebell Foundation, I extend warm greetings to all who champion the cause of humanity.\n\nOur foundation stands firm in its dedication to enhancing health and sanitation standards, ensuring every individual\'s well-being. Moreover, we tirelessly strive to generate employment opportunities for the youth, fostering economic growth and prosperity. Education and skill development are the pillars upon which we build a brighter future for our nation. In tandem with our mission, women empowerment and childcare hold paramount importance.\n\nWe envision a society where every woman is empowered to lead, and every child is nurtured with care and compassion.\n\nTogether, let us embark on this journey to make our nation proud through our collective efforts and unwavering commitment. Together, we can create a future that shines brightly for generations to come.\n\nWarm regards',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000',
        achievements: 'Championing Humanity',
        hasMessage: true,
    },
    {
        name: 'Abhishek Saxena',
        role: 'Co-Founder & Director - BlueBell Group',
        bio: 'As Bhartiya\'s We are dedicated, devoted and determined to Make the Most of the AmritKaal and create an Eco System which promotes health, employment, education, women empowerment, and sustainable development.',
        message: 'Dear Readers\n\nAs Bhartiya\'s We are dedicated, devoted and determined to Make the Most of the AmritKaal and create an Eco System which promotes:\n\n• Health and Sanitation\n• Employment Generation\n• Education and Skill Development\n• Women Empowerment and Child Care\n• Hunger Eradication\n• Rural Development\n• Bio Diversity\n• Cultural Diversity.\n\nJoin us in our Mission to be Added Value which we want to be added in the World.\n\nLet\'s Make World a Better Place.\n\nJai Hind Jai Bharat',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000',
        achievements: 'Building Better World',
        hasMessage: true,
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
                            Meet the visionary leaders who guide Bluebell Foundation in its mission to create lasting positive change in communities across India.
                        </p>
                    </motion.div>

                    <div className="space-y-16 md:space-y-20 lg:space-y-24">
                        {leaders.map((leader, index) => (
                            <motion.div
                                key={leader.name}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="group"
                            >
                                <div className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 border border-gray-200/50 hover:border-[#1E73BE]/20">
                                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                                        {/* Leader Image */}
                                        <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden">
                                            <Image
                                                src={leader.image}
                                                alt={leader.name}
                                                width={600}
                                                height={750}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <div className="flex items-center gap-2 text-white text-xs md:text-sm font-semibold">
                                                    <Award className="w-3 h-3 md:w-4 md:h-4" />
                                                    {leader.achievements}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Leader Info & Message */}
                                        <div className="p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
                                            <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1F2937] mb-3 md:mb-4">
                                                {leader.name}
                                            </h3>
                                            <p className="text-[#1E73BE] font-semibold text-lg md:text-xl lg:text-2xl mb-4 md:mb-6">
                                                {leader.role}
                                            </p>
                                            <p className="text-base md:text-lg lg:text-xl text-[#6B7280] leading-relaxed mb-6">
                                                {leader.bio}
                                            </p>

                                            {/* Message Section */}
                                            {leader.hasMessage && leader.message && (
                                                <div className="mt-6 pt-6 border-t border-gray-200">
                                                    <h4 className="font-heading text-xl md:text-2xl font-bold text-[#1F2937] mb-4 md:mb-6">
                                                        Message from {leader.name.split(' ')[0]}
                                                    </h4>
                                                    <div className="text-base md:text-lg text-[#1F2937] leading-relaxed whitespace-pre-line space-y-4">
                                                        {leader.message.split('\n').map((line, idx) => {
                                                            if (line.trim().startsWith('•')) {
                                                                return (
                                                                    <div key={idx} className="flex items-start gap-2 md:gap-3">
                                                                        <span className="text-[#1E73BE] mt-1.5 font-bold">•</span>
                                                                        <span>{line.replace('•', '').trim()}</span>
                                                                    </div>
                                                                );
                                                            }
                                                            if (line.trim() === '') {
                                                                return <div key={idx} className="h-2" />;
                                                            }
                                                            return (
                                                                <p key={idx} className={line.trim().length > 0 ? 'mb-2' : ''}>
                                                                    {line}
                                                                </p>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            )}

                                            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-200">
                                                <a
                                                    href="#"
                                                    className="w-10 h-10 md:w-12 md:h-12 bg-[#EAF4FF] rounded-lg flex items-center justify-center hover:bg-[#1E73BE] hover:text-white transition-all duration-300 hover:scale-110"
                                                    aria-label="LinkedIn"
                                                >
                                                    <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                                                </a>
                                                <a
                                                    href={`mailto:admin@bluebellservice.co.in`}
                                                    className="w-10 h-10 md:w-12 md:h-12 bg-[#EAF4FF] rounded-lg flex items-center justify-center hover:bg-[#1E73BE] hover:text-white transition-all duration-300 hover:scale-110"
                                                    aria-label="Email"
                                                >
                                                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                                                </a>
                                            </div>
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

