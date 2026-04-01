'use client';

import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin,  ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const navLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Focus Areas', href: '/focus-areas' },
    { name: 'Initiatives', href: '/initiatives' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact-us' },
];


export default function Footer() {
    return (
        <footer id="contact" className="bg-[#0A192F] text-white pt-24 pb-12 overflow-hidden relative">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1E73BE] to-transparent opacity-30" />
            
            {/* CTA Section */}
            <div className="container-padding max-w-7xl mx-auto mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#1E73BE] rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden group"
                >
                    {/* Decorative Circles */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-700" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/10 rounded-full blur-3xl" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                Let&apos;s build a <span className="text-[#EAF4FF]">better tomorrow</span> together.
                            </h3>
                            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-xl">
                                Join our mission to empower communities and transform lives across the nation.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 lg:justify-end">
                            <Link href="/leadership">
                                <Button variant="secondary" size="xl" className="bg-white/10 text-white hover:bg-white/20 border-white/20 backdrop-blur-md px-8">
                                    Volunteer With Us
                                </Button>
                            </Link>
                            <Link href="/donate">
                                <Button
                                    size="xl"
                                    className="bg-white text-[#1E73BE] hover:bg-[#EAF4FF] px-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                                >
                                    <Heart className="w-5 h-5 fill-current" />
                                    Donate Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Main Footer Content */}
            <div className="container-padding max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
                    
                    {/* Organization Info */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="inline-block p-3 bg-white rounded-2xl shadow-lg">
                            <Image 
                                src="/logo.png"
                                alt="Bluebell Foundation"
                                width={180}
                                height={60}
                                className="h-12 w-auto" 
                                priority
                            />
                        </div>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                            Bluebell Foundation is dedicated to serving humanity with dignity, compassion, and purpose. We focus on education, healthcare, and sustainable development.
                        </p>
                       
                    </div>

                    {/* Quick Navigation */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xl font-bold mb-8 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#1E73BE] rounded-full" />
                        </h4>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white flex items-center group transition-colors duration-300"
                                    >
                                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#1E73BE]" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="lg:col-span-4">
                        <h4 className="text-xl font-bold mb-8 relative inline-block">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#1E73BE] rounded-full" />
                        </h4>
                        <div className="space-y-6">
                            <a href="mailto:admin@bluebellservice.co.in" className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-[#1E73BE]/20 transition-colors border border-white/10">
                                    <Mail className="w-5 h-5 text-[#1E73BE]" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 mb-1">Email Address</div>
                                    <div className="text-gray-300 font-medium group-hover:text-white transition-colors">admin@bluebellservice.co.in</div>
                                </div>
                            </a>
                            <a href="tel:+917303249605" className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-[#1E73BE]/20 transition-colors border border-white/10">
                                    <Phone className="w-5 h-5 text-[#1E73BE]" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 mb-1">Phone Number</div>
                                    <div className="text-gray-300 font-medium group-hover:text-white transition-colors">+91 7303249605</div>
                                </div>
                            </a>
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                                    <MapPin className="w-5 h-5 text-[#1E73BE]" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 mb-1">Office Location</div>
                                    <div className="text-gray-300 font-medium">Dwarka, New Delhi, India</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Bluebell Foundation. Built with compassion for a better world.
                    </p>
                   
                </div>
            </div>
        </footer>
    );
}
