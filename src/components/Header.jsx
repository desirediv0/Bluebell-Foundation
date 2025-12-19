'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
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

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open and reset scroll position
    useEffect(() => {
        if (isMobileMenuOpen) {
            // Save current scroll position
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
        } else {
            // Restore scroll position
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
        }
        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${isScrolled ? 'glass-header py-2 md:py-3' : 'bg-transparent py-3 md:py-5'
                } ${isMobileMenuOpen ? 'bg-white z-[70]' : ''}`}
        >
            <div className=" max-w-7xl mx-auto">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image src="/logo.png" alt="Bluebell Foundation" width={150} height={60} className="w-auto h-10 md:h-12 lg:h-14" />
                    </Link>
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6 ">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    className="link-underline text-base xl:text-lg text-gray-700 hover:text-[#1E73BE] font-semibold transition-colors duration-300 relative group"
                                >
                                    {link.name}
                                    <motion.span
                                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1E73BE] group-hover:w-full transition-all duration-300"
                                        initial={false}
                                    />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-3 md:gap-4">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <Link href="/leadership">
                                <Button variant="heroOutline" size="lg" className="text-base font-semibold px-6">
                                    Join Our Mission
                                </Button>
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <Link href="/donate">
                                <Button variant="donate" size="lg" className="text-base font-semibold px-6 shadow-lg hover:shadow-xl">
                                    <Heart className="w-5 h-5" />
                                    Donate Now
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-3 text-[#1E73BE] hover:bg-[#EAF4FF] rounded-lg transition-colors"
                        whileTap={{ scale: 0.95 }}
                    >
                        {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </motion.button>
                </nav>

                {/* Mobile Menu Overlay & Content */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <>
                            {/* Full-screen Background Overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fixed inset-0 bg-white z-[55] lg:hidden"
                                style={{
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    height: '100vh',
                                    height: '100dvh'
                                }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            />

                            {/* Mobile Menu Content */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-[60] overflow-y-auto"
                                style={{
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    height: '100vh',
                                    height: '100dvh'
                                }}
                            >
                                <div className="container-padding max-w-7xl mx-auto pt-20 pb-8 min-h-full">
                                    {/* Close Button */}
                                    <div className="flex justify-end mb-6">
                                        <motion.button
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="p-3 text-[#1E73BE] hover:bg-[#EAF4FF] rounded-lg transition-colors"
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <X className="w-8 h-8" />
                                        </motion.button>
                                    </div>

                                    {/* Navigation Links */}
                                    <div className="flex flex-col gap-2">
                                        {navLinks.map((link, index) => (
                                            <motion.div
                                                key={link.name}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                            >
                                                <Link
                                                    href={link.href}
                                                    className="text-lg md:text-xl text-gray-700 hover:text-[#1E73BE] font-semibold py-4 block border-b border-gray-100"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {link.name}
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-col gap-4 pt-8 mt-8 border-t border-gray-200">
                                        <Link href="/leadership" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                                            <Button variant="heroOutline" size="lg" className="w-full text-base font-semibold">
                                                Join Our Mission
                                            </Button>
                                        </Link>
                                        <Link href="/donate" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                                            <Button variant="donate" size="lg" className="w-full text-base font-semibold">
                                                <Heart className="w-5 h-5" />
                                                Donate Now
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
