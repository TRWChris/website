import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children, index }) => (
  <motion.section
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="max-w-4xl mx-auto py-24 md:py-32"
  >
    <h3 className="text-3xl font-bold mb-6 text-teal-300">{title}</h3>
    <div className="prose prose-invert text-lg">{children}</div>
  </motion.section>
);

const StorySection = () => (
  <>
    <Section title="Prevent" index={0}>
      <p>Interactive 3‑D anatomy lets you understand your body better than ever before.</p>
    </Section>
    <Section title="Heal" index={1}>
      <p>Personalised treatment paths adapt in real‑time to your recovery progress.</p>
    </Section>
    <Section title="Thrive" index={2}>
      <p>Gamified wellness missions reward healthy habits and keep you motivated.</p>
    </Section>
  </>
);

export default StorySection;
