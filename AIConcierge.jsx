import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AIConcierge = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I help you with your health today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }, { from: 'bot', text: 'Let me check that for you…' }]);
    setInput('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-24">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6"
      >
        ChatBUD Concierge
      </motion.h2>
      <div className="w-11/12 max-w-2xl bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-2xl shadow-lg p-6 flex flex-col gap-4">
        <div className="flex-1 overflow-y-auto max-h-[60vh]">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={
                (msg.from === 'bot' ? 'text-teal-300' : 'text-slate-100') +
                ' mb-3'
              }
            >
              <strong>{msg.from === 'bot' ? 'Concierge' : 'You'}:</strong> {msg.text}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your symptoms…"
            className="flex-1 rounded-md p-3 bg-slate-700/60"
          />
          <button
            onClick={handleSend}
            className="rounded-xl bg-teal-500/80 hover:bg-teal-400 px-6 py-3 font-semibold"
          >
            Send
          </button>
        </div>
        <Link to="/" className="mt-4 text-xs text-teal-300 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default AIConcierge;
