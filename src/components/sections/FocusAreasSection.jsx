'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    GraduationCap,
    Heart,
    Users,
    Briefcase,
    Leaf,
    Utensils
} from 'lucide-react';

const focusAreas = [
    {
        icon: GraduationCap,
        title: 'Education & Skill Development',
        description: 'Promoting quality education and skill-based learning to empower children and youth for a better future.',
        stats: 'Empowering Future Generations',
    },
    {
        icon: Heart,
        title: 'Health & Sanitation',
        description: 'Improving access to healthcare services, hygiene awareness, and sanitation facilities to ensure community well-being.',
        stats: 'Building Healthy Communities',
    },
    {
        icon: Users,
        title: 'Women Empowerment & Child Welfare',
        description: 'Supporting women and children through education, healthcare, and empowerment programs.',
        stats: 'Creating Equal Opportunities',
    },
    {
        icon: Briefcase,
        title: 'Employment Generation',
        description: 'Creating employment and skill opportunities to promote economic self-reliance.',
        stats: 'Fostering Economic Independence',
    },
    {
        icon: Leaf,
        title: 'Environmental Protection',
        description: 'Promoting tree plantation, biodiversity conservation, and sustainable environmental practices.',
        stats: 'Protecting Our Planet',
    },
    {
        icon: Utensils,
        title: 'Hunger Eradication',
        description: 'Conducting food distribution drives and awareness programs to fight hunger and malnutrition.',
        stats: 'Fighting Hunger & Malnutrition',
    },
];

export default function FocusAreasSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="focus" className="py-12 md:py-16 lg:py-20 bg-white overflow-x-hidden" ref={ref}>
            <div className="container-padding max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-20"
                >
                    <span className="text-sm font-semibold text-[#1E73BE] tracking-wider uppercase">
                        What We Do
                    </span>
                    <h2 className="font-heading text-headline text-[#1F2937] mt-4">
                        Our Focus Areas
                    </h2>
                    <p className="text-body text-[#6B7280] mt-6 max-w-2xl mx-auto">
                        Our work spans across multiple social sectors aimed at holistic development and long-term impact.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {focusAreas.map((area, index) => (
                        <motion.div
                            key={area.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white h-full p-6 md:p-8 lg:p-10 rounded-3xl border border-gray-200/50 hover:border-[#1E73BE]/20 hover:shadow-card transition-all duration-500 hover:-translate-y-2">
                                <div className={`w-12 h-12 md:w-16 md:h-16 ${area.title.includes('Environment') ? 'bg-[#4CAF50]/10 group-hover:bg-[#4CAF50]/15' : 'bg-[#EAF4FF] group-hover:bg-[#1E73BE]/10'} rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-colors duration-300`}>
                                    <area.icon className={`w-6 h-6 md:w-8 md:h-8 ${area.title.includes('Environment') ? 'text-[#4CAF50]' : 'text-[#1E73BE]'}`} />
                                </div>

                                <h3 className="font-heading text-xl md:text-2xl font-semibold text-[#1F2937] mb-3 md:mb-4">
                                    {area.title}
                                </h3>

                                <p className="text-sm md:text-base lg:text-lg text-[#6B7280] leading-relaxed mb-4 md:mb-6">
                                    {area.description}
                                </p>

                                <div className="pt-6 border-t border-gray-200/50">
                                    <span className={`text-sm font-semibold ${area.title.includes('Environment') ? 'text-[#4CAF50]' : 'text-[#1E73BE]'}`}>
                                        {area.stats}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

