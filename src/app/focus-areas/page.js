'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    GraduationCap,
    Heart,
    Users,
    Briefcase,
    Leaf,
    Utensils,
    Home,
} from 'lucide-react';

const focusAreas = [
    {
        icon: GraduationCap,
        title: 'Education & Skill Development',
        description:
            'Promoting quality education and skill-based learning to empower children and youth for a better future.',
        programs: [
            'Scholarship programs for deserving students',
            'School infrastructure development',
            'Teacher training and capacity building',
            'Digital literacy programs',
        ],
        accent: 'blue',
    },
    {
        icon: Heart,
        title: 'Health & Sanitation',
        description:
            'Improving access to healthcare services, hygiene awareness, and sanitation facilities to ensure community well-being.',
        programs: [
            'Free health camps and medical checkups',
            'Mobile health units for remote areas',
            'Health awareness campaigns',
            'Support for preventive care',
        ],
        accent: 'blue',
    },
    {
        icon: Users,
        title: 'Women Empowerment & Child Welfare',
        description:
            'Supporting women and children through education, healthcare, and empowerment programs.',
        programs: [
            'Employment and skill opportunities',
            'Career guidance and placement support',
            'Micro-enterprise development',
            'Economic self-reliance programs',
        ],
        accent: 'blue',
    },
    {
        icon: Briefcase,
        title: 'Employment Generation',
        description:
            'Creating employment and skill opportunities to promote economic self-reliance and sustainable livelihoods.',
        programs: [
            'Skill development and vocational training',
            'Job placement and career counseling',
            'Micro-enterprise support',
            'Entrepreneurship development programs',
        ],
        accent: 'blue',
    },
    {
        icon: Leaf,
        title: 'Environmental Protection',
        description:
            'Promoting tree plantation, biodiversity conservation, and sustainable environmental practices.',
        programs: [
            'Tree plantation drives',
            'Waste management initiatives',
            'Renewable energy projects',
            'Environmental awareness programs',
        ],
        accent: 'green',
    },
    {
        icon: Utensils,
        title: 'Hunger Eradication',
        description:
            'Conducting food distribution drives and awareness programs to fight hunger and malnutrition.',
        programs: [
            'Food distribution (Bhandara)',
            'Community kitchens',
            'Nutrition awareness programs',
            'Sustainable agriculture support',
        ],
        accent: 'blue',
    },
    {
        icon: Home,
        title: 'Rural Development',
        description:
            'Empowering rural communities through infrastructure development, access to resources, and sustainable growth initiatives.',
        programs: [
            'Rural infrastructure development',
            'Access to clean water and sanitation',
            'Agricultural support programs',
            'Community development initiatives',
        ],
        accent: 'blue',
    },
];

export default function FocusAreas() {
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
                        What We Do
                    </span>
                    <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900">
                        Our Focus Areas
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                        Our initiatives span multiple social sectors to ensure holistic and
                        long-term development.
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 gap-8">
                    {focusAreas.map((area, index) => {
                        const isGreen = area.accent === 'green';

                        return (
                            <motion.div
                                key={area.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition"
                            >
                                {/* ICON + TITLE */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div
                                        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isGreen ? 'bg-[#4CAF50]/10' : 'bg-[#EAF4FF]'
                                            }`}
                                    >
                                        <area.icon
                                            className={`w-7 h-7 ${isGreen ? 'text-[#4CAF50]' : 'text-[#1E73BE]'
                                                }`}
                                        />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        {area.title}
                                    </h2>
                                </div>

                                {/* DESCRIPTION */}
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    {area.description}
                                </p>

                                {/* PROGRAMS */}
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-3">
                                        Key Programs
                                    </h3>
                                    <ul className="grid sm:grid-cols-2 gap-3">
                                        {area.programs.map((program) => (
                                            <li
                                                key={program}
                                                className="flex items-start gap-2 text-gray-700"
                                            >
                                                <span
                                                    className={`mt-1 ${isGreen ? 'text-[#4CAF50]' : 'text-[#1E73BE]'
                                                        }`}
                                                >
                                                    •
                                                </span>
                                                {program}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
