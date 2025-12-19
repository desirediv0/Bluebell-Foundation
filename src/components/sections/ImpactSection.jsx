'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const initiatives = [
  {
    title: 'Building Schools in Rural Areas',
    description: 'Our flagship education initiative has established over 150 schools in underserved regions, providing quality education to children who previously had no access to schooling. Each school is equipped with modern facilities, trained teachers, and comprehensive learning materials.',
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=2013',
    stats: [
      { label: 'Schools Built', value: '150+' },
      { label: 'Students Enrolled', value: '85,000' },
      { label: 'Teachers Trained', value: '2,500' },
    ],
  },
  {
    title: 'Mobile Health Clinics',
    description: 'Our fleet of mobile health clinics brings essential medical care directly to remote villages. Staffed with qualified doctors and nurses, these clinics provide preventive care, vaccinations, maternal health services, and treatment for common ailments.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070',
    stats: [
      { label: 'Villages Covered', value: '800+' },
      { label: 'Patients Treated', value: '500,000' },
      { label: 'Health Camps', value: '180' },
    ],
  },
  {
    title: 'Women\'s Self-Help Groups',
    description: 'Empowering women through collective strength, our self-help groups provide financial literacy training, micro-loans, and entrepreneurship support. These groups have transformed thousands of women into confident business owners and community leaders.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070',
    stats: [
      { label: 'Groups Formed', value: '3,500' },
      { label: 'Women Members', value: '45,000' },
      { label: 'Businesses Started', value: '12,000' },
    ],
  },
];

export default function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="impact" className="py-12 md:py-16 lg:py-20 bg-[#EAF4FF]/30 overflow-x-hidden" ref={ref}>
      <div className="container-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-sm font-semibold text-[#1E73BE] tracking-wider uppercase">
            Our Impact
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] mt-4">
            Our Impact on Communities
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-[#6B7280] mt-6 max-w-2xl mx-auto">
            Through our initiatives and programs, we have positively impacted lives by promoting education, providing food support, creating employment opportunities, and spreading awareness on health, sanitation, and sustainability.
          </p>
        </motion.div>

        <div className="space-y-24">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-medium">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E73BE]/30 to-transparent" />
                </div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937]">
                  {initiative.title}
                </h3>
                <p className="text-sm md:text-base lg:text-lg text-[#6B7280] leading-relaxed">
                  {initiative.description}
                </p>

                <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6">
                  {initiative.stats.map((stat) => (
                    <div key={stat.label} className="text-center lg:text-left">
                      <div className="font-heading text-3xl font-bold text-[#0B4F8A]">
                        {stat.value}
                      </div>
                      <div className="text-sm text-[#6B7280] mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="outline" size="lg" className="mt-4 border-[#1E73BE] text-[#1E73BE] hover:bg-[#1E73BE]/5">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
