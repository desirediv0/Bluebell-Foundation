'use client';

import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';

const galleryItems = [
  { id: 1, title: 'Community Health Camp', category: 'Healthcare' },
  { id: 2, title: 'Education Program', category: 'Education' },
  { id: 3, title: 'Tree Plantation Drive', category: 'Environment' },
  { id: 4, title: 'Skill Development Workshop', category: 'Development' },
  { id: 5, title: 'Scholarship Distribution', category: 'Education' },
  { id: 6, title: 'Community Garden', category: 'Environment' },
  { id: 7, title: 'Health Awareness Campaign', category: 'Healthcare' },
  { id: 8, title: 'Digital Literacy Class', category: 'Education' },
  { id: 9, title: 'Water Well Inauguration', category: 'Development' },
];

export default function Gallery() {
  return (
    <main className="pt-16 md:pt-20">
      <Section className="bg-gradient-to-br from-blue-50 to-white">
        <SectionTitle
          title="Gallery"
          subtitle="Our Moments"
          align="center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">📸</div>
                  <p className="text-gray-700 font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </main>
  );
}

