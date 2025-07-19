import React from 'react';
import { motion } from 'framer-motion';

const BookingCard = ({ large = false }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={
        (large ? 'w-full max-w-3xl' : 'w-11/12 max-w-md') +
        ' mx-auto glassy rounded-2xl p-6 backdrop-blur-md bg-white/10 border border-white/10 shadow-lg relative z-40 -mt-32'
      }
    >
      <h2 className="text-2xl font-semibold mb-4">Book in 60 seconds</h2>
      <form className="grid gap-4">
        <label className="flex flex-col text-sm">
          Department
          <select className="mt-1 rounded-md p-2 bg-slate-800/60 border border-slate-700">
            <option>Physiotherapy</option>
            <option>Dermatology</option>
            <option>Cardiology</option>
          </select>
        </label>
        <label className="flex flex-col text-sm">
          Preferred Time
          <input type="datetime-local" className="mt-1 rounded-md p-2 bg-slate-800/60 border border-slate-700" />
        </label>
        <button
          type="submit"
          className="mt-2 rounded-xl bg-teal-500/80 hover:bg-teal-400 py-3 font-semibold"
        >
          Check Availability
        </button>
      </form>
      <p className="mt-4 text-xs opacity-70">Next available slot: <span className="font-medium">2h 15m</span></p>
    </motion.div>
  );
};

export default BookingCard;
