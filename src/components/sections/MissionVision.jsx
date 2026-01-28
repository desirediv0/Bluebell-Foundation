'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye } from 'lucide-react';

export default function MissionVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-gradient-blue-soft overflow-x-hidden" ref={ref}>
      <div className="container-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-sm font-semibold text-[#1E73BE] tracking-wider uppercase">
            Our Purpose
          </span>
          <h2 className="font-heading text-headline text-[#1F2937] mt-4">
            Guided by Purpose, Driven by Impact
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-6 md:p-8 lg:p-10 xl:p-14 rounded-3xl shadow-soft hover-lift group"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#1E73BE]/10 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-[#1E73BE]/15 transition-colors duration-300">
              <Target className="w-8 h-8 md:w-10 md:h-10 text-[#1E73BE]" />
            </div>
            <h3 className="font-heading text-title text-[#1F2937] mb-4 md:mb-6">
              Our Mission
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-[#6B7280] leading-relaxed">
              Bluebell Foundation visualizes a society in which peace, education and equality prevail and strives to build in India where all people have access to education, healthcare, employment, housing & sanitation and economic self-reliance, and where all Indian can realize their full potential off setting barriers of color, language and gender.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-6 md:p-8 lg:p-10 xl:p-14 rounded-3xl shadow-soft hover-lift group"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#4CAF50]/10 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-[#4CAF50]/15 transition-colors duration-300">
              <Eye className="w-8 h-8 md:w-10 md:h-10 text-[#4CAF50]" />
            </div>
            <h3 className="font-heading text-title text-[#1F2937] mb-4 md:mb-6">
              Our Vision
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-[#6B7280] leading-relaxed">
              Rebuild the human dignity of the poor and marginalized through an empowerment process, education, environmental protection, health care, and create opportunities for a sustainable society. Our mission is the bringing of educational opportunity and to promote health and social rights to those to whom such opportunities have previously been denied to poverty family circumstances or oppression.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-[#6B7280] leading-relaxed mt-4">
              The trust aims to work with the most marginalized members of the community and help create a safer environment for all men women & children, especially vulnerable children and to provide support and encouragement to help improve their living and social conditions, through rights-based and ethically sound education, vocational training, protection and care and financial independence initiatives in order to help them recognize their importance and value as a responsible individual within civil society.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
