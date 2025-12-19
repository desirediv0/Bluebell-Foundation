'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Heart, Check, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Donate() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [amount, setAmount] = useState('');
    const [selectedAmount, setSelectedAmount] = useState(null);

    const presetAmounts = [500, 1000, 2500, 5000, 10000];

    const handleAmountSelect = (value) => {
        setSelectedAmount(value);
        setAmount(value.toString());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Donation amount:', amount);
        alert('Thank you for your donation! You will be redirected to the payment gateway.');
    };

    const impactAreas = [
        'Education programs and scholarships',
        'Healthcare services and medical camps',
        'Community development projects',
        'Environmental conservation efforts',
        'Skill development and training programs',
    ];

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
                            SUPPORT OUR CAUSE
                        </span>
                        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1F2937] mt-4 mb-6">
                            Support Our Mission
                        </h1>
                        <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
                            Your contribution helps us provide education, healthcare, food support, and sustainable development opportunities to those in need. Every donation makes a difference.
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
                                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1F2937] mb-6">
                                    Your Support Makes a Difference
                                </h2>
                                <p className="text-xl text-[#1F2937] leading-relaxed mb-6">
                                    Every contribution, no matter the size, helps us continue our mission
                                    to create positive change in communities across India.
                                </p>
                                <p className="text-xl font-semibold text-gray-900 mb-6">
                                    Your donation will support:
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {impactAreas.map((area, index) => (
                                        <motion.li
                                            key={area}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                            className="flex items-start gap-3 md:gap-4 text-base md:text-lg text-[#1F2937]"
                                        >
                                            <Check className="w-6 h-6 text-[#1E73BE] flex-shrink-0 mt-0.5" />
                                            <span>{area}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="bg-[#EAF4FF] p-8 rounded-2xl border border-[#EAF4FF]/50"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <Shield className="w-5 h-5 md:w-6 md:h-6 text-[#1E73BE] flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-900 mb-2">
                                            Tax-Deductible Donations
                                        </h3>
                                        <p className="text-base text-gray-600">
                                            All donations are tax-deductible as allowed by law. We are committed to transparency and will provide you with updates on how your donation is being used.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 lg:p-10 xl:p-14 rounded-3xl shadow-soft">
                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                                    Donation Amount
                                </h3>
                                <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6 md:mb-8">
                                    {presetAmounts.map((preset, index) => (
                                        <motion.button
                                            key={preset}
                                            type="button"
                                            onClick={() => handleAmountSelect(preset)}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                                            className={`px-4 md:px-6 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 ${selectedAmount === preset
                                                ? 'bg-[#1E73BE] text-white shadow-lg scale-105'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                                                }`}
                                        >
                                            ₹{preset.toLocaleString()}
                                        </motion.button>
                                    ))}
                                </div>
                                <div className="mb-8">
                                    <label
                                        htmlFor="custom-amount"
                                        className="block text-base font-semibold text-gray-900 mb-3"
                                    >
                                        Or enter custom amount
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-4 md:left-5 top-1/2 transform -translate-y-1/2 text-gray-500 text-base md:text-xl font-semibold">
                                            ₹
                                        </span>
                                        <input
                                            type="number"
                                            id="custom-amount"
                                            value={amount}
                                            onChange={(e) => {
                                                setAmount(e.target.value);
                                                setSelectedAmount(null);
                                            }}
                                            placeholder="0.00"
                                            min="1"
                                            step="1"
                                            required
                                            className="w-full pl-10 md:pl-12 pr-4 md:pr-5 py-3 md:py-4 text-base md:text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E73BE] focus:border-[#1E73BE] transition-all duration-300"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-6 mb-8">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm md:text-base font-semibold text-[#1F2937] mb-3"
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E73BE] focus:border-[#1E73BE] transition-all duration-300"
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
                                            required
                                            className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E73BE] focus:border-[#1E73BE] transition-all duration-300"
                                        />
                                    </div>
                                </div>
                                <Button
                                    type="submit"
                                    variant="hero"
                                    size="xl"
                                    className="w-full group mb-4"
                                >
                                    <Heart className="w-4 h-4 md:w-5 md:h-5" />
                                    Donate Now
                                </Button>
                                <p className="text-xs md:text-sm text-gray-500 text-center flex items-center justify-center gap-2">
                                    <Shield className="w-3 h-3 md:w-4 md:h-4" />
                                    Secure payment processing powered by trusted payment gateways
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}

