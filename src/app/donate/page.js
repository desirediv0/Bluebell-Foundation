'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Check, Shield } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Donate() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        amount: '',
    });

    const impactAreas = [
        'Education & Scholarships',
        'Healthcare & Medical Camps',
        'Community Development',
        'Skill Training Programs',
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/donate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                alert(`Thank you, ${formData.name}! We have received your donation details and sent a confirmation email to ${formData.email}.`);
                setFormData({ name: '', email: '', phoneNumber: '', amount: '' });
            } else {
                alert(`Error: ${result.error || 'Failed to process donation'}`);
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Something went wrong. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="pt-24 pb-20 bg-gradient-to-br from-[#F0F7FF] via-white to-[#F8FBFF]">
            <div className="max-w-7xl mx-auto px-4">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wider text-[#1E73BE] bg-blue-50 uppercase mb-4">
                        Support Our Cause
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#1F2937] leading-tight">
                        Make a Difference <span className="text-[#1E73BE]">Today</span>
                    </h1>
                    <p className="mt-6 text-xl text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
                        Your contribution provides education, healthcare, and nutrition to those who need it most.
                    </p>
                </motion.div>

                {/* MAIN GRID */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                            <Image
                                src="/img (2).jpeg"
                                alt="Donate for a cause"
                                width={800}
                                height={600}
                                className="object-cover w-full transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-bottom p-8">
                                <p className="text-white text-lg font-medium mt-auto">Building a brighter future, one child at a time.</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-soft border border-gray-100">
                            <h2 className="text-2xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
                                <Heart className="w-6 h-6 text-red-500 fill-red-500" />
                                Impact Areas
                            </h2>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {impactAreas.map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-[#4B5563] font-medium">
                                        <div className="bg-blue-50 p-1 rounded-full">
                                            <Check className="w-4 h-4 text-[#1E73BE]" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex gap-4 items-center bg-[#1E73BE]/5 p-6 rounded-2xl border border-[#1E73BE]/10">
                            <div className="bg-[#1E73BE] p-3 rounded-xl shadow-lg shadow-blue-200">
                                <Shield className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#1F2937]">Secure Donation</h4>
                                <p className="text-sm text-[#6B7280]">
                                    All transactions are encrypted and processed securely.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* DONATION FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 md:p-12 border border-gray-100 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#1E73BE]/5 rounded-bl-full -z-0"></div>

                        <h3 className="text-3xl font-bold text-[#1F2937] mb-8">
                            Join the <span className="text-[#1E73BE]">Movement</span>
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            {/* SCAN TO PAY */}
                            <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-3xl border-2 border-dashed border-gray-200 mb-8">
                                <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-widest">Scan to Donate</p>
                                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-4">
                                    <Image src={"/qr.jpeg"} width={160} height={160} alt='Donation QR Code' className="rounded-lg" />
                                </div>
                                <p className="text-xs text-center text-gray-400">Scan this QR code with any UPI app to pay directly</p>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#1E73BE] focus:ring-4 focus:ring-[#1E73BE]/10 outline-none transition-all placeholder:text-gray-300"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#1E73BE] focus:ring-4 focus:ring-[#1E73BE]/10 outline-none transition-all placeholder:text-gray-300"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            required
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            placeholder="+91 98765-43210"
                                            className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#1E73BE] focus:ring-4 focus:ring-[#1E73BE]/10 outline-none transition-all placeholder:text-gray-300"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Amount (₹)</label>
                                    <div className="relative">
                                        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 font-bold">₹</span>
                                        <input
                                            type="number"
                                            name="amount"
                                            required
                                            value={formData.amount}
                                            onChange={handleChange}
                                            placeholder="500"
                                            className="w-full pl-10 pr-5 py-4 rounded-2xl border-2 border-gray-100 focus:border-[#1E73BE] focus:ring-4 focus:ring-[#1E73BE]/10 outline-none transition-all placeholder:text-gray-300 font-bold text-lg"
                                        />
                                    </div>
                                </div>
                            </div>

                            <Button 
                                type="submit" 
                                size="xl" 
                                disabled={isSubmitting}
                                className="w-full py-8 text-lg font-bold rounded-2xl shadow-lg shadow-[#1E73BE]/30 hover:shadow-[#1E73BE]/40 hover:-translate-y-1 transition-all duration-300 gap-3"
                            >
                                <Heart className="w-6 h-6 fill-white" />
                                {isSubmitting ? 'Processing...' : 'Confirm Donation'}
                            </Button>
                            
                            <p className="text-center text-xs text-gray-400 font-medium">
                                By clicking Confirm, you agree to our Terms and Conditions.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
