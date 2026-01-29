'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const initiatives = [
  {
    title: 'Building Schools in Rural Areas',
    description:
      'Our flagship education initiative has established over 150 schools in underserved regions, providing quality education to children who previously had no access to schooling. Each school is equipped with modern facilities, trained teachers, and comprehensive learning materials.',
    image:
      'https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=2013',
    stats: [
      { label: 'Schools Built', value: '150+' },
      { label: 'Students Enrolled', value: '85,000' },
      { label: 'Teachers Trained', value: '2,500' },
    ],
  },
  {
    title: 'Mobile Health Clinics',
    description:
      'Our fleet of mobile health clinics brings essential medical care directly to remote villages. Staffed with qualified doctors and nurses, these clinics provide preventive care, vaccinations, maternal health services, and treatment for common ailments.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070',
    stats: [
      { label: 'Villages Covered', value: '800+' },
      { label: 'Patients Treated', value: '500,000' },
      { label: 'Health Camps', value: '180' },
    ],
  },
  {
    title: "Women's Self-Help Groups",
    description:
      'Empowering women through collective strength, our self-help groups provide financial literacy training, micro-loans, and entrepreneurship support. These groups have transformed thousands of women into confident business owners and community leaders.',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070',
    stats: [
      { label: 'Groups Formed', value: '3,500' },
      { label: 'Women Members', value: '45,000' },
      { label: 'Businesses Started', value: '12,000' },
    ],
  },
];

export default function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      id="impact"
      className="py-24 bg-gradient-to-br from-[#EAF4FF] via-white to-[#EAF4FF]/40"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold tracking-wider text-[#1E73BE] uppercase">
            Our Impact
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900">
            Transforming Lives at Scale
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Through focused initiatives, we create measurable, lasting change
            across education, healthcare, and women empowerment.
          </p>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-xl mb-28"
        >
          <Image
            src="/img (7).jpeg"
            alt="Together We Care"
            width={1400}
            height={700}
            className="w-full h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent" />
        </motion.div>

        {/* INITIATIVES */}
        <div className="space-y-28">
          {initiatives.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* IMAGE */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E73BE]/30 to-transparent" />
                </div>
              </div>

              {/* CONTENT */}
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                {/* STATS */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {item.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white rounded-2xl p-4 shadow-md text-center"
                    >
                      <div className="text-2xl font-bold text-[#0B4F8A]">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="lg"
                  className="mt-4 border-[#1E73BE] text-[#1E73BE] hover:bg-[#1E73BE]/10"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
