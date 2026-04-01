'use client';

import LogoMarquee from '../LogoMarquee';
import { motion } from 'framer-motion';

export default function LogoMarqueeSection() {
    return (
        <section className="py-12 md:py-16 bg-gray-50/50 border-y border-gray-100/10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-bold uppercase tracking-wider text-[#1E73BE]/60"
                >
                    In Partnership With
                </motion.p>
            </div>
            <LogoMarquee mode="marquee" />
        </section>
    );
}
