'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactUs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            content: 'admin@bluebellservice.co.in',
            color: 'bg-[#EAF4FF]',
            iconColor: 'text-[#1E73BE]',
        },
        {
            icon: Phone,
            title: 'Phone',
            content: '+91 7303249605',
            color: 'bg-[#EAF4FF]',
            iconColor: 'text-[#1E73BE]',
        },
        {
            icon: MapPin,
            title: 'Address',
            content: 'Dwarka, New Delhi, India',
            color: 'bg-[#EAF4FF]',
            iconColor: 'text-[#1E73BE]',
        },
    ];

    return (
        <main className="pt-24 md:pt-32">
            <section ref={ref} className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#EAF4FF] via-white to-[#EAF4FF]/30 overflow-x-hidden">
                <div className="container-padding max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <span className="text-sm font-semibold text-[#1E73BE] tracking-wider uppercase">
                            GET IN TOUCH
                        </span>
                        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1F2937] mt-4 mb-6">
                            Get in Touch With Us
                        </h1>
                        <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
                            We would love to hear from you. Reach out to us for support, collaboration, or to join our mission.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2937] mb-4 md:mb-6">
                                    We&apos;d Love to Hear from You
                                </h2>
                                <p className="text-base md:text-lg lg:text-xl text-[#6B7280] leading-relaxed">
                                    Fill out the form and we&apos;ll get back to you as soon as possible.
                                    Your message matters to us.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                        className="flex items-start gap-6 group"
                                    >
                                        <div className={`w-16 h-16 ${info.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                            <info.icon className={`w-8 h-8 ${info.iconColor}`} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-xl text-[#1F2937] mb-2">
                                                {info.title}
                                            </h3>
                                            <p className="text-lg text-[#6B7280]">{info.content}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 lg:p-10 xl:p-14 rounded-3xl shadow-soft">
                                <div className="space-y-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm md:text-base font-semibold text-[#1F2937] mb-3"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 md:px-5 py-3 md:py-4 text-base md:text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E73BE] focus:border-[#1E73BE] transition-all duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm md:text-base font-semibold text-[#1F2937] mb-3"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 md:px-5 py-3 md:py-4 text-base md:text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E73BE] focus:border-[#1E73BE] transition-all duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm md:text-base font-semibold text-[#1F2937] mb-3"
                                        >
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 md:px-5 py-3 md:py-4 text-base md:text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E73BE] focus:border-[#1E73BE] transition-all duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm md:text-base font-semibold text-[#1F2937] mb-3"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="6"
                                            className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E73BE] focus:border-[#1E73BE] transition-all duration-300 resize-none"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        variant="hero"
                                        size="xl"
                                        className="w-full group"
                                    >
                                        Send Message
                                        <Send className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}

