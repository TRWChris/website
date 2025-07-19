import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Card = ({ title, children }) => (
  <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 shadow-lg">
    <h4 className="text-teal-300 font-semibold mb-3">{title}</h4>
    {children}
  </div>
);

const Dashboard = () => (
  <div className="pt-24 min-h-screen">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl font-bold text-center mb-12"
    >
      Patient Portal
    </motion.h2>
    <div className="grid gap-8 max-w-5xl mx-auto grid-cols-1 md:grid-cols-2">
      <Card title="Upcoming Appointments">
        <p>Physio – Jul 24, 2025 • 10:00</p>
      </Card>
      <Card title="Recent Lab Results">
        <p>Vitamin D: 34 ng/mL (Normal)</p>
      </Card>
      <Card title="Wellness Missions">
        <p>🎉 Completed: Morning Stretch Streak – 7 days</p>
      </Card>
      <Card title="Tele‑visit CO₂ Saved">
        <p>42 kg of CO₂ avoided</p>
      </Card>
    </div>
    <div className="text-center mt-12">
      <Link to="/" className="text-xs text-teal-300 hover:underline">
        ← Back to Home
      </Link>
    </div>
  </div>
);

export default Dashboard;
