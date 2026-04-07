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
  {
    id: 10,
    title: 'Campaign Activities 1',
    category: 'Our Campaigns',
    image: '/images/card (1).jpeg',
    alt: 'Bluebell Foundation campaign activity 1',
  },
  {
    id: 11,
    title: 'Campaign Activities 2',
    category: 'Our Campaigns',
    image: '/images/card (2).jpeg',
    alt: 'Bluebell Foundation campaign activity 2',
  },
  {
    id: 12,
    title: 'Campaign Activities 3',
    category: 'Our Campaigns',
    image: '/images/card (3).jpeg',
    alt: 'Bluebell Foundation campaign activity 3',
  },
  {
    id: 13,
    title: 'Campaign Activities 4',
    category: 'Our Campaigns',
    image: '/images/card (4).jpeg',
    alt: 'Bluebell Foundation campaign activity 4',
  },
  {
    id: 14,
    title: 'Campaign Activities 5',
    category: 'Our Campaigns',
    image: '/images/card (5).jpeg',
    alt: 'Bluebell Foundation campaign activity 5',
  },
  {
    id: 15,
    title: 'Campaign Activities 6',
    category: 'Our Campaigns',
    image: '/images/card (6).jpeg',
    alt: 'Bluebell Foundation campaign activity 6',
  },
  {
    id: 16,
    title: 'Campaign Activities 7',
    category: 'Our Campaigns',
    image: '/images/card (7).jpeg',
    alt: 'Bluebell Foundation campaign activity 7',
  },
  {
    id: 17,
    title: 'Campaign Activities 8',
    category: 'Our Campaigns',
    image: '/images/card (8).jpeg',
    alt: 'Bluebell Foundation campaign activity 8',
  },
  {
    id: 18,
    title: 'Campaign Activities 9',
    category: 'Our Campaigns',
    image: '/images/card (9).jpeg',
    alt: 'Bluebell Foundation campaign activity 9',
  },
  {
    id: 19,
    title: 'Campaign Activities 10',
    category: 'Our Campaigns',
    image: '/images/card (10).jpeg',
    alt: 'Bluebell Foundation campaign activity 10',
  },
  {
    id: 20,
    title: 'Campaign Activities 11',
    category: 'Our Campaigns',
    image: '/images/card (11).jpeg',
    alt: 'Bluebell Foundation campaign activity 11',
  },
  {
    id: 21,
    title: 'Campaign Activities 12',
    category: 'Our Campaigns',
    image: '/images/card (12).jpeg',
    alt: 'Bluebell Foundation campaign activity 12',
  },
  {
    id: 22,
    title: 'Campaign Activities 13',
    category: 'Our Campaigns',
    image: '/images/card (13).jpeg',
    alt: 'Bluebell Foundation campaign activity 13',
  },
  {
    id: 23,
    title: 'Campaign Activities 14',
    category: 'Our Campaigns',
    image: '/images/card (14).jpeg',
    alt: 'Bluebell Foundation campaign activity 14',
  },
  {
    id: 24,
    title: 'Campaign Activities 15',
    category: 'Our Campaigns',
    image: '/images/card (15).jpeg',
    alt: 'Bluebell Foundation campaign activity 15',
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

