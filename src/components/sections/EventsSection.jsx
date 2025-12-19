'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const events = [
  {
    title: 'Annual Charity Gala 2024',
    date: 'March 15, 2024',
    location: 'New Delhi',
    description: 'Join us for an evening of inspiration and generosity as we celebrate our achievements and raise funds for our upcoming projects.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070',
    type: 'Fundraiser',
  },
  {
    title: 'Youth Leadership Summit',
    date: 'April 8-10, 2024',
    location: 'Mumbai',
    description: 'A three-day summit bringing together young changemakers to share ideas, build networks, and learn from social impact leaders.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070',
    type: 'Conference',
  },
  {
    title: 'Rural Health Camp Drive',
    date: 'April 22, 2024',
    location: 'Multiple Locations',
    description: 'Free health screenings, consultations, and medicine distribution across 50 villages. Volunteer opportunities available.',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=2070',
    type: 'Health Camp',
  },
];

export default function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="events" className="py-12 md:py-16 lg:py-20 bg-white overflow-x-hidden" ref={ref}>
      <div className="container-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 md:mb-16"
        >
          <div>
            <span className="text-sm font-semibold text-[#1E73BE] tracking-wider uppercase">
              Recent Initiatives
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] mt-4">
              Recent Initiatives & Campaigns
            </h2>
          </div>
          <Link href="/events">
            <Button variant="outline" size="lg" className="mt-6 lg:mt-0 border-[#1E73BE] text-[#1E73BE] hover:bg-[#1E73BE]/5">
              View All Events
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-200/50 hover:border-[#1E73BE]/20 hover:shadow-card transition-all duration-500">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#1E73BE] text-white text-xs font-semibold px-4 py-2 rounded-full">
                      {event.type}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-6 text-sm text-[#6B7280] mb-4">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-[#1F2937] mb-3 group-hover:text-[#1E73BE] transition-colors duration-300">
                    {event.title}
                  </h3>

                  <p className="text-[#6B7280] leading-relaxed">
                    {event.description}
                  </p>

                  <Button variant="ghost" className="mt-6 -ml-4 text-[#1E73BE] hover:bg-[#1E73BE]/5">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
