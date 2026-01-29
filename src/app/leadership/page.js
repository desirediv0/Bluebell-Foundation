'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Mail, Award } from 'lucide-react';
import Image from 'next/image';

const leaders = [
    {
        name: 'Monalisa Dash',
        role: 'President',
        bio: `Being a Lady Entrepreneur and Businesswomen, I feel that let's contribute generously towards Nation Building and Make Bharat more Self Reliant. Our foundation is committed to serve our people and working tirelessly for the betterment of our society.`,
        message: `Dear Readers

Being a Lady Entrepreneur and Businesswomen, I feel that let's contribute generously towards Nation Building and Make Bharat more Self Reliant.

Our foundation is committed to serve our people and working tirelessly for the betterment of our society. With a steadfast dedication to various causes, we strive to pave the way for a brighter, healthier, and more prosperous future for all.

Together, with your support and collaboration, we will march forward towards a brighter tomorrow. Let us unite our efforts, harness our collective strength, and build a nation where every individual can thrive and prosper.

Thank you for your unwavering support.`,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000',
        achievements: 'Leading Nation Building',
    },
    {
        name: 'Biswa Bhusan Dash',
        role: 'Vice President & Managing Director',
        bio: `As the Vice President and Managing Director, I extend warm greetings to all who champion the cause of humanity. Our foundation stands firm in its dedication to enhancing health and sanitation standards.`,
        message: `Dear Esteemed Readers,

Our foundation stands firm in its dedication to enhancing health and sanitation standards, ensuring every individual's well-being.

We tirelessly strive to generate employment opportunities for youth, promote education, skill development, women empowerment, and childcare.

Together, we can create a future that shines brightly for generations to come.

Warm regards`,
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000',
        achievements: 'Championing Humanity',
    },
    {
        name: 'Abhishek Saxena',
        role: 'Co-Founder & Director - BlueBell Group',
        bio: `As Bhartiya's we are dedicated, devoted and determined to create an ecosystem promoting health, employment, education, women empowerment and sustainable development.`,
        message: `Dear Readers

We are dedicated to promoting:
• Health & Sanitation
• Employment Generation
• Education & Skill Development
• Women Empowerment & Child Care
• Hunger Eradication
• Rural Development
• Bio & Cultural Diversity

Let's make the world a better place.

Jai Hind • Jai Bharat`,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000',
        achievements: 'Building a Better World',
    },
];

export default function Leadership() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <main className="pt-24 pb-20 bg-gradient-to-br from-[#EAF4FF] via-white to-[#EAF4FF]/40">
            <section ref={ref} className="max-w-7xl mx-auto px-4">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-sm font-semibold tracking-wider text-[#1E73BE] uppercase">
                        Meet the Team
                    </span>
                    <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900">
                        Our Leadership
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                        Visionary leaders guiding Bluebell Foundation toward lasting social impact.
                    </p>
                </motion.div>

                {/* LEADERS */}
                <div className="space-y-24">
                    {leaders.map((leader, index) => (
                        <motion.div
                            key={leader.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="bg-white rounded-3xl shadow-lg overflow-hidden"
                        >
                            <div className="grid lg:grid-cols-2">

                                {/* IMAGE */}
                                <div className="relative aspect-[4/5] lg:aspect-auto">
                                    <Image
                                        src={leader.image}
                                        alt={leader.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent" />
                                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm font-semibold">
                                        <Award className="w-4 h-4" />
                                        {leader.achievements}
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                                        {leader.name}
                                    </h3>
                                    <p className="text-[#1E73BE] font-semibold text-lg mt-2 mb-4">
                                        {leader.role}
                                    </p>

                                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                        {leader.bio}
                                    </p>

                                    {/* MESSAGE */}
                                    <div className="bg-[#EAF4FF] rounded-2xl p-6 mb-6">
                                        <h4 className="font-semibold text-lg text-gray-900 mb-4">
                                            Message
                                        </h4>
                                        <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                                            {leader.message}
                                        </div>
                                    </div>

                                    {/* SOCIAL */}
                                    <div className="flex gap-4">
                                        <a
                                            href="#"
                                            className="w-11 h-11 rounded-xl bg-[#EAF4FF] flex items-center justify-center hover:bg-[#1E73BE] hover:text-white transition"
                                        >
                                            <Linkedin />
                                        </a>
                                        <a
                                            href="mailto:admin@bluebellservice.co.in"
                                            className="w-11 h-11 rounded-xl bg-[#EAF4FF] flex items-center justify-center hover:bg-[#1E73BE] hover:text-white transition"
                                        >
                                            <Mail />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
