'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye } from 'lucide-react';

export default function MissionVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      id="about"
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
            Our Purpose
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900">
            Guided by Purpose, Driven by Impact
          </h2>
        </motion.div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition"
          >
            <div className="w-16 h-16 bg-[#1E73BE]/10 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-[#1E73BE]" />
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed max-w-prose">
              Bluebell Foundation visualizes a society in which peace, education
              and equality prevail and strives to build in India where all people
              have access to education, healthcare, employment, housing &
              sanitation and economic self-reliance, and where all Indian can
              realize their full potential off setting barriers of color,
              language and gender.
            </p>
          </motion.div>

          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition"
          >
            <div className="w-16 h-16 bg-[#4CAF50]/10 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-[#4CAF50]" />
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Vision
            </h3>

            <div className="space-y-5 text-lg text-gray-600 leading-relaxed max-w-prose">
              <p>
                Rebuild the human dignity of the poor and marginalized through
                an empowerment process, education, environmental protection,
                health care, and create opportunities for a sustainable society.
                Our mission is the bringing of educational opportunity and to
                promote health and social rights to those to whom such
                opportunities have previously been denied to poverty family
                circumstances or oppression.
              </p>

              <p>
                The trust aims to work with the most marginalized members of the
                community and help create a safer environment for all men women &
                children, especially vulnerable children and to provide support
                and encouragement to help improve their living and social
                conditions, through rights-based and ethically sound education,
                vocational training, protection and care and financial
                independence initiatives in order to help them recognize their
                importance and value as a responsible individual within civil
                society.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
