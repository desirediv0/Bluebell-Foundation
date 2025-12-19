'use client';

import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const footerLinks = {
    'About Us': ['Our Story', 'Leadership Team', 'Annual Reports', 'Careers', 'Partners'],
    'Our Work': ['Education', 'Healthcare', 'Women Empowerment', 'Environment', 'Livelihoods'],
    'Get Involved': ['Donate', 'Volunteer', 'Corporate Partnership', 'Fundraise', 'Events'],
    'Resources': ['News & Media', 'Publications', 'Blog', 'FAQs', 'Contact Us'],
};

const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
    return (
        <footer id="contact" className="bg-gradient-footer text-white">
            {/* CTA Section */}
            <div className="container-padding max-w-7xl mx-auto ">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative -top-20 bg-[#1E73BE] rounded-3xl p-12 lg:p-16 shadow-glow"
                >
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
                        <div>
                            <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                                Ready to Make a Difference?
                            </h3>
                            <p className="text-white/80 text-lg leading-relaxed">
                                Your contribution can transform lives. Join thousands of donors who
                                are helping us build a better tomorrow.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 md:gap-4 lg:justify-end">
                            <Link href="/leadership">
                                <Button variant="secondary" size="lg" className="bg-white/10 text-white hover:bg-white/20 border-white/20 text-sm md:text-base">
                                    Become a Volunteer
                                </Button>
                            </Link>
                            <Link href="/donate">
                                <Button
                                    size="lg"
                                    className="bg-white text-[#1E73BE] hover:bg-white/90 text-sm md:text-base"
                                >
                                    <Heart className="w-4 h-4 md:w-5 md:h-5" />
                                    Donate Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Main Footer */}
            <div className="container-padding max-w-7xl mx-auto pb-8 md:pb-12">
                <div className="grid lg:grid-cols-6 gap-12 lg:gap-8">
                    {/* Logo & Description */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                <Heart className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </div>
                            <div>
                                <span className="font-heading text-xl md:text-2xl font-bold text-white">
                                    Bluebell Foundation
                                </span>
                            </div>
                        </div>
                        <p className="text-white/70 leading-relaxed">
                            Dedicated to serving humanity with dignity, compassion, and purpose.
                            Together, we are building a world where every individual can thrive.
                        </p>
                        <div className="flex gap-2 md:gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                                >
                                    <social.icon className="w-5 h-5 text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Footer Links */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="font-semibold text-white mb-6">{title}</h4>
                            <ul className="space-y-2 md:space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-white/60 hover:text-white transition-colors duration-300"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact Info */}
                <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-white/10">
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        <div className="flex items-center gap-3 md:gap-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                <Mail className="w-4 h-4 md:w-5 md:h-5 text-white" />
                            </div>
                            <div>
                                <div className="text-xs md:text-sm text-white/60">Email Us</div>
                                <div className="text-sm md:text-base text-white font-medium">admin@bluebellservice.co.in</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 md:gap-4">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                <Phone className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <div className="text-xs md:text-sm text-white/60">Call Us</div>
                                <div className="text-sm md:text-base text-white font-medium">+91 7303249605</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 md:gap-4">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                <MapPin className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <div className="text-sm text-white/60">Visit Us</div>
                                <div className="text-white font-medium">Dwarka, New Delhi, India</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/50 text-xs md:text-sm">
                        © {new Date().getFullYear()} Bluebell Foundation. All rights reserved.
                    </p>
                    <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm">
                        <a href="#" className="text-white/50 hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-white/50 hover:text-white transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="text-white/50 hover:text-white transition-colors">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
