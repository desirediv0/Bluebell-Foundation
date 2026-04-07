'use client';

import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import { motion } from 'framer-motion';

const galleryItems = [
  {
    id: 1,
    title: 'Children Charity Poster',
    category: 'Donation Campaign',
    image: '/images/charity-poster.png',
    alt: 'Kids charity donation poster',
  },
  {
    id: 2,
    title: 'Children’s Day Fundraiser',
    category: 'Children Support',
    image: '/images/childrens-day.png',
    alt: 'Donate for children’s day poster',
  },
  {
    id: 3,
    title: 'Donate Food Campaign',
    category: 'Food Support',
    image: '/images/donate-food.png',
    alt: 'Donate food today poster',
  },
  {
    id: 4,
    title: 'Together We Care',
    category: 'Community Outreach',
    image: '/images/donation-2.png',
    alt: 'Together we care campaign poster',
  },
  {
    id: 5,
    title: 'Donation Appeal',
    category: 'Relief Support',
    image: '/images/donation-3.png',
    alt: 'Every donation counts poster',
  },
  {
    id: 6,
    title: 'Sharing with the Needy',
    category: 'Support Appeal',
    image: '/images/donation-post.png',
    alt: 'Sharing with those in needy poster',
  },
  {
    id: 7,
    title: 'Education Awareness',
    category: 'Education',
    image: '/images/education-2.png',
    alt: 'No to child labour education poster',
  },
  {
    id: 8,
    title: 'Right to Education',
    category: 'Education',
    image: '/images/education.png',
    alt: 'Give a child education poster',
  },
  {
    id: 9,
    title: 'Food Waste Appeal',
    category: 'Food Support',
    image: '/images/food.png',
    alt: 'Donate food and help needy children poster',
  },
];

export default function Gallery() {
  return (
    <main className="pt-16 md:pt-20">
      <Section className="bg-gradient-to-br from-blue-50 to-white">
        <SectionTitle
          title="Gallery"
          subtitle="Our Campaign Posters"
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority={index < 3}
                />
              </div>

              <div className="p-5">
                <p className="text-sm text-[#1E73BE] font-semibold uppercase tracking-[0.18em] mb-2">
                  {item.category}
                </p>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </main>
  );
}

