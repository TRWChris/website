import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Hero3D from './components/Hero3D.jsx';
import BookingCard from './components/BookingCard.jsx';
import AIConcierge from './components/AIConcierge.jsx';
import StorySection from './components/StorySection.jsx';
import Dashboard from './components/Dashboard.jsx';

const App = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/5 border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <Link to="/" className="text-xl font-bold tracking-wide">
            Interstellar<span className="text-teal-300">Clinic</span>
          </Link>
          <div className="flex gap-6 text-sm">
            <Link to="/portal" className="hover:text-teal-300 transition-colors">Portal</Link>
            <Link to="/book" className="hover:text-teal-300 transition-colors">Book</Link>
            <Link to="/concierge" className="hover:text-teal-300 transition-colors">Concierge</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<>
          <section className="h-screen">
            <Hero3D />
            <BookingCard />
          </section>
          <StorySection />
        </>} />
        <Route path="/concierge" element={<AIConcierge />} />
        <Route path="/book" element={<BookingCard large />} />
        <Route path="/portal" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
