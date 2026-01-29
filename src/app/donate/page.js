'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Check, Shield } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Donate() {
    const [amount, setAmount] = useState('');
    const [selectedAmount, setSelectedAmount] = useState(null);

    const presetAmounts = [500, 1000, 2500, 5000, 10000];

    const impactAreas = [
        'Education & Scholarships',
        'Healthcare & Medical Camps',
        'Community Development',
        'Skill Training Programs',
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for donating ₹${amount}`);
    };

    return (
        <main className="pt-24 pb-20 bg-gradient-to-br from-[#EAF4FF] via-white to-[#F5FAFF]">
            <div className="max-w-7xl mx-auto px-4">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-semibold tracking-wider text-[#1E73BE] uppercase">
                        Support Our Cause
                    </span>
                    <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900">
                        Make a Difference Today
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                        Your donation helps us provide education, healthcare, and hope to
                        communities across India.
                    </p>
                </motion.div>

                {/* MAIN GRID */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <Image
                            src="/img (2).jpeg"
                            alt="Donate for a cause"
                            width={600}
                            height={700}
                            className="rounded-3xl shadow-lg object-cover w-full"
                        />

                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Where Your Money Goes
                            </h2>
                            <ul className="space-y-4">
                                {impactAreas.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-gray-700">
                                        <Check className="w-5 h-5 text-[#1E73BE] mt-1" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex gap-3 items-start bg-blue-50 p-5 rounded-2xl">
                            <Shield className="w-6 h-6 text-[#1E73BE]" />
                            <p className="text-sm text-gray-700">
                                All donations are tax-deductible and securely processed.
                            </p>
                        </div>
                    </motion.div>

                    {/* DONATION FORM */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl shadow-xl p-8 md:p-10"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Choose Donation Amount
                        </h3>

                        {/* PRESET BUTTONS */}
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            {presetAmounts.map((value) => (
                                <button
                                    key={value}
                                    type="button"
                                    onClick={() => {
                                        setSelectedAmount(value);
                                        setAmount(value.toString());
                                    }}
                                    className={`py-3 rounded-xl font-semibold transition ${selectedAmount === value
                                        ? 'bg-[#1E73BE] text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    ₹{value.toLocaleString()}
                                </button>
                            ))}
                        </div>

                        {/* CUSTOM AMOUNT */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold mb-2">
                                Custom Amount
                            </label>
                            <input
                                type="number"
                                required
                                min={1}
                                value={amount}
                                onChange={(e) => {
                                    setAmount(e.target.value);
                                    setSelectedAmount(null);
                                }}
                                placeholder="Enter amount"
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1E73BE] focus:ring-2 focus:ring-[#1E73BE]/30 outline-none"
                            />
                        </div>

                        {/* USER INFO */}
                        <div className="space-y-4 mb-8">
                            <input
                                type="text"
                                required
                                placeholder="Full Name"
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1E73BE]"
                            />
                            <input
                                type="email"
                                required
                                placeholder="Email Address"
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1E73BE]"
                            />
                        </div>

                        {/* SUBMIT */}
                        <Button type="submit" size="xl" className="w-full gap-2">
                            <Heart className="w-5 h-5" />
                            Donate Now
                        </Button>

                        <p className="text-xs text-gray-500 text-center mt-4 flex items-center justify-center gap-2">
                            <Shield className="w-4 h-4" />
                            100% Secure Payment
                        </p>
                    </motion.form>
                </div>
            </div>
        </main>
    );
}
