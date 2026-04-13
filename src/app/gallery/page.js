'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const galleryItems = [
  { id: 1, title: 'Children Charity Poster', category: 'Donation Campaign', image: '/images/charity-poster.png', alt: 'Kids charity donation poster' },
  { id: 2, title: "Children's Day Fundraiser", category: 'Children Support', image: '/images/childrens-day.png', alt: "Donate for children's day poster" },
  { id: 3, title: 'Donate Food Campaign', category: 'Food Support', image: '/images/donate-food.png', alt: 'Donate food today poster' },
  { id: 4, title: 'Together We Care', category: 'Community Outreach', image: '/images/donation-2.png', alt: 'Together we care campaign poster' },
  { id: 5, title: 'Donation Appeal', category: 'Relief Support', image: '/images/donation-3.png', alt: 'Every donation counts poster' },
  { id: 6, title: 'Sharing with the Needy', category: 'Support Appeal', image: '/images/donation-post.png', alt: 'Sharing with those in needy poster' },
  { id: 7, title: 'Education Awareness', category: 'Education', image: '/images/education-2.png', alt: 'No to child labour education poster' },
  { id: 8, title: 'Right to Education', category: 'Education', image: '/images/education.png', alt: 'Give a child education poster' },
  { id: 9, title: 'Food Waste Appeal', category: 'Food Support', image: '/images/food.png', alt: 'Donate food and help needy children poster' },
  { id: 10, title: 'Campaign Activities 1', category: 'Food Support', image: '/images/card (1).jpeg', alt: 'Bluebell Foundation campaign activity 1' },
  { id: 11, title: 'Campaign Activities 2', category: 'Food Support', image: '/images/card (2).jpeg', alt: 'Bluebell Foundation campaign activity 2' },
  { id: 12, title: 'Campaign Activities 3', category: 'Food Support', image: '/images/card (3).jpeg', alt: 'Bluebell Foundation campaign activity 3' },
  { id: 13, title: 'Campaign Activities 4', category: 'Food Support', image: '/images/card (4).jpeg', alt: 'Bluebell Foundation campaign activity 4' },
  { id: 14, title: 'Campaign Activities 5', category: 'Our Campaigns', image: '/images/card (5).jpeg', alt: 'Bluebell Foundation campaign activity 5' },
  { id: 15, title: 'Campaign Activities 6', category: 'Our Campaigns', image: '/images/card (6).jpeg', alt: 'Bluebell Foundation campaign activity 6' },
  { id: 16, title: 'Campaign Activities 7', category: 'Our Campaigns', image: '/images/card (7).jpeg', alt: 'Bluebell Foundation campaign activity 7' },
  { id: 17, title: 'Campaign Activities 8', category: 'Our Campaigns', image: '/images/card (8).jpeg', alt: 'Bluebell Foundation campaign activity 8' },
  { id: 18, title: 'Campaign Activities 9', category: 'Our Campaigns', image: '/images/card (9).jpeg', alt: 'Bluebell Foundation campaign activity 9' },
  { id: 19, title: 'Campaign Activities 10', category: 'Our Campaigns', image: '/images/card (10).jpeg', alt: 'Bluebell Foundation campaign activity 10' },
  { id: 20, title: 'Campaign Activities 11', category: 'Food Support', image: '/images/card (11).jpeg', alt: 'Bluebell Foundation campaign activity 11' },
  { id: 21, title: 'Campaign Activities 12', category: 'Education', image: '/images/card (12).jpeg', alt: 'Bluebell Foundation campaign activity 12' },
  { id: 22, title: 'Campaign Activities 13', category: 'Education', image: '/images/card (13).jpeg', alt: 'Bluebell Foundation campaign activity 13' },
  { id: 23, title: 'Campaign Activities 14', category: 'Food Support', image: '/images/card (14).jpeg', alt: 'Bluebell Foundation campaign activity 14' },
  { id: 24, title: 'Campaign Activities 15', category: 'Food Support', image: '/images/card (15).jpeg', alt: 'Bluebell Foundation campaign activity 15' },
];

const CATEGORY_STYLE = {
  'All': { dot: 'bg-slate-400', text: 'text-slate-500', bg: 'bg-slate-50', bar: 'bg-slate-400' },
  'Our Campaigns': { dot: 'bg-[#1E73BE]', text: 'text-[#1E73BE]', bg: 'bg-blue-50', bar: 'bg-[#1E73BE]' },
  'Donation Campaign': { dot: 'bg-rose-500', text: 'text-rose-600', bg: 'bg-rose-50', bar: 'bg-rose-500' },
  'Children Support': { dot: 'bg-amber-500', text: 'text-amber-600', bg: 'bg-amber-50', bar: 'bg-amber-500' },
  'Food Support': { dot: 'bg-emerald-500', text: 'text-emerald-600', bg: 'bg-emerald-50', bar: 'bg-emerald-500' },
  'Community Outreach': { dot: 'bg-violet-500', text: 'text-violet-600', bg: 'bg-violet-50', bar: 'bg-violet-500' },
  'Relief Support': { dot: 'bg-orange-500', text: 'text-orange-600', bg: 'bg-orange-50', bar: 'bg-orange-500' },
  'Support Appeal': { dot: 'bg-teal-500', text: 'text-teal-600', bg: 'bg-teal-50', bar: 'bg-teal-500' },
  'Education': { dot: 'bg-indigo-500', text: 'text-indigo-600', bg: 'bg-indigo-50', bar: 'bg-indigo-500' },
};

const TABS = [
  { label: 'All', value: 'All' },
  { label: 'Our Campaigns', value: 'Our Campaigns' },
  { label: 'Food Support', value: 'Food Support' },
  { label: 'Education', value: 'Education' },
  { label: 'Donation Campaign', value: 'Donation Campaign' },
  { label: 'Children Support', value: 'Children Support' },
  { label: 'Community Outreach', value: 'Community Outreach' },
  { label: 'Relief Support', value: 'Relief Support' },
  { label: 'Support Appeal', value: 'Support Appeal' },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered =
    activeTab === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  return (
    <main className="min-h-screen bg-[#F5F7FA]" style={{ paddingTop: '64px' }}>

      {/* ────── Hero ────── */}
      <div className="relative overflow-hidden bg-[#F5F7FA] py-20 md:py-28">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{

            backgroundSize: '32px 32px',
          }}
        />


        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-block text-[#5EB8FF] text-xs font-bold uppercase tracking-[0.4em] mb-5"
          >
            Bluebell Foundation
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.07 }}
            className="text-[#0B2545] font-black leading-none mb-5"
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: 'clamp(3rem, 8vw, 5.5rem)',
              letterSpacing: '-0.03em',
            }}
          >
            Gallery
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.18, ease: 'easeOut' }}
            className="mx-auto mb-6 h-[3px] w-14 rounded-full bg-gradient-to-r from-[#1E73BE] to-[#5EB8FF]"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.28 }}
            className="text-slate-400 text-sm md:text-base leading-relaxed"
          >
            A visual journey through our campaigns, initiatives &amp; community impact.
          </motion.p>
        </div>
      </div>

      {/* ────── Sticky Filter Bar ────── */}
      <div className="sticky top-16 z-30 bg-white/90 backdrop-blur-xl border-b border-slate-200/70 shadow-[0_1px_12px_rgba(0,0,0,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1.5 overflow-x-auto py-3.5 scrollbar-hide">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.value;
              const s = CATEGORY_STYLE[tab.value] ?? CATEGORY_STYLE['All'];
              const count =
                tab.value === 'All'
                  ? galleryItems.length
                  : galleryItems.filter((i) => i.category === tab.value).length;

              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`
                    group relative flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2
                    text-[13px] font-semibold shrink-0 select-none outline-none transition-all duration-200
                    focus-visible:ring-2 focus-visible:ring-[#1E73BE]/40
                    ${isActive
                      ? 'bg-[#0B2545] text-white shadow-lg shadow-slate-900/15'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                    }
                  `}
                >
                  <span className={`
                    w-2 h-2 rounded-full shrink-0 transition-opacity duration-200
                    ${s.dot}
                    ${isActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-80'}
                  `} />
                  {tab.label}
                  <span className={`
                    text-[11px] font-bold rounded-full px-1.5 py-0.5 min-w-[20px] text-center transition-colors
                    ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}
                  `}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ────── Main Content ────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">

        {/* Results count */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="flex items-center gap-2 mb-8"
          >
            <span className="text-2xl font-black text-[#0B2545]">{filtered.length}</span>
            <span className="text-slate-400 text-sm font-medium">
              {filtered.length === 1 ? 'item' : 'items'}
              {activeTab !== 'All' && <> &mdash; <span className="text-slate-600 font-semibold">{activeTab}</span></>}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => {
              const s = CATEGORY_STYLE[item.category] ?? CATEGORY_STYLE['All'];
              return (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.93, y: -6 }}
                  transition={{
                    layout: { duration: 0.38, ease: [0.4, 0, 0.2, 1] },
                    opacity: { duration: 0.3, delay: index * 0.022 },
                    y: { duration: 0.3, delay: index * 0.022 },
                    scale: { duration: 0.3, delay: index * 0.022 },
                  }}
                  className="group relative flex flex-col bg-white rounded-2xl overflow-hidden
                             border border-slate-100 hover:border-slate-200/80
                             shadow-sm hover:shadow-2xl hover:shadow-slate-300/40
                             transition-all duration-500 cursor-pointer"
                >
                  {/* Image area */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.08]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 3}
                    />
                    {/* Gradient scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Floating category chip */}
                    <div className="absolute top-3 left-3">
                      <span className={`
                        inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full
                        text-[10px] font-bold uppercase tracking-wider
                        ${s.bg} ${s.text} border border-white/60 shadow-sm
                        opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-300
                      `}>
                        <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                        {item.category}
                      </span>
                    </div>


                  </div>

                  {/* Card body */}
                  <div className="flex items-start gap-3 p-5 flex-1">
                    {/* Colour dot column */}
                    <div className={`mt-1.5 w-2.5 h-2.5 rounded-full shrink-0 ${s.dot}`} />
                    <div className="flex-1 min-w-0">
                      <p className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-1.5 ${s.text}`}>
                        {item.category}
                      </p>
                      <h3 className="text-[15px] font-semibold text-slate-800 leading-snug
                                     group-hover:text-[#0B2545] transition-colors duration-200">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Bottom colour bar — slides in on hover */}
                  <div className={`h-[3px] w-0 group-hover:w-full ${s.bar} transition-all duration-500 ease-out`} />
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-32 text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-5">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-slate-400">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
                <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <p className="text-[#0B2545] text-lg font-bold mb-1">No items found</p>
            <p className="text-slate-400 text-sm">Try selecting a different category above.</p>
          </motion.div>
        )}
      </div>
    </main>
  );
}