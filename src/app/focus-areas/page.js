'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Heart, Users, Leaf, Utensils } from 'lucide-react';

const focusAreas = [
    {
        icon: GraduationCap,
        title: 'Education & Skill Development',
        description: 'Promoting quality education and skill-based learning to empower children and youth for a better future.',
        programs: [
            'Scholarship programs for deserving students',
            'School infrastructure development',
            'Teacher training and capacity building',
            'Digital literacy programs',
        ],
        color: 'bg-[#EAF4FF]',
        iconColor: 'text-[#1E73BE]',
    },
    {
        icon: Heart,
        title: 'Health & Sanitation',
        description: 'Improving access to healthcare services, hygiene awareness, and sanitation facilities to ensure community well-being.',
        programs: [
            'Free health camps and medical checkups',
            'Mobile health units for remote areas',
            'Health awareness campaigns',
            'Support for preventive care',
        ],
        color: 'bg-[#EAF4FF]',
        iconColor: 'text-[#1E73BE]',
    },
    {
        icon: Users,
        title: 'Women Empowerment & Child Welfare',
        description: 'Supporting women and children through education, healthcare, and empowerment programs.',
        programs: [
            'Employment and skill opportunities',
            'Career guidance and placement support',
            'Micro-enterprise development',
            'Economic self-reliance programs',
        ],
        color: 'bg-[#EAF4FF]',
        iconColor: 'text-[#1E73BE]',
    },
    {
        icon: Leaf,
        title: 'Environmental Protection',
        description: 'Promoting tree plantation, biodiversity conservation, and sustainable environmental practices.',
        programs: [
            'Tree plantation drives',
            'Waste management initiatives',
            'Renewable energy projects',
            'Environmental awareness programs',
        ],
        color: 'bg-[#4CAF50]/10',
        iconColor: 'text-[#4CAF50]',
    },
    {
        icon: Utensils,
        title: 'Hunger Eradication',
        description: 'Conducting food distribution drives and awareness programs to fight hunger and malnutrition.',
        programs: [
            'Food distribution (Bhandara)',
            'Community kitchens',
            'Nutrition awareness programs',
            'Sustainable agriculture support',
        ],
        color: 'bg-[#EAF4FF]',
        iconColor: 'text-[#1E73BE]',
    },
];

export default function FocusAreas() {
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
                            WHAT WE DO
                        </span>
                        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1F2937] mt-4 mb-6">
                            Our Focus Areas
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-[#6B7280] max-w-3xl mx-auto">
                            Our work spans across multiple social sectors aimed at holistic development and long-term impact.
                        </p>
                    </motion.div>

                    <div className="space-y-8 md:space-y-12">
                        {focusAreas.map((area, index) => (
                            <motion.div
                                key={area.title}
                                initial={{ opacity: 0, y: 60 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.15 }}
                                className="group"
                            >
                                <div className="bg-white p-6 md:p-8 lg:p-10 xl:p-14 rounded-3xl shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 hover:border-[#1E73BE]/20">
                                    <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-8">
                                        <div className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 ${area.title.includes('Environment') ? 'bg-[#4CAF50]/10' : area.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                            <area.icon className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 ${area.title.includes('Environment') ? 'text-[#4CAF50]' : area.iconColor}`} />
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2937] mb-4 md:mb-6">
                                                {area.title}
                                            </h2>
                                            <p className="text-base md:text-lg lg:text-xl text-[#1F2937] mb-6 md:mb-8 leading-relaxed">
                                                {area.description}
                                            </p>
                                            <div>
                                                <h3 className="text-lg md:text-xl font-semibold text-[#1F2937] mb-3 md:mb-4">
                                                    Key Programs:
                                                </h3>
                                                <ul className="grid md:grid-cols-2 gap-3 md:gap-4">
                                                    {area.programs.map((program, idx) => (
                                                        <motion.li
                                                            key={idx}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                                                            transition={{ duration: 0.5, delay: 0.8 + index * 0.15 + idx * 0.1 }}
                                                            className="text-base md:text-lg text-[#1F2937] flex items-start gap-2 md:gap-3"
                                                        >
                                                            <span className={`${area.title.includes('Environment') ? 'text-[#4CAF50]' : area.iconColor} mt-1.5`}>•</span>
                                                            <span>{program}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
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

