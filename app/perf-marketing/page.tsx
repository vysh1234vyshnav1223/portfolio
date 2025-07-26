'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useCycle } from 'framer-motion';
import {
  BarChart2,
  TrendingUp,
  Layers,
  RefreshCcw,
  Search,
  Funnel,
  PenTool,
  Users,
  Calendar,
  DollarSign,
  Target,
  Sparkles,
  MessageCircle,
  X,
  Zap,
  Activity
} from 'lucide-react';
import React from 'react';

export default function PerformanceMarketingPage() {
  const propsList = [
    {
      icon: BarChart2,
      title: 'Data-Driven Strategy',
      description: 'I optimize around real business metrics such as CAC, LTV, and ROAS.',
    },
    {
      icon: Layers,
      title: 'Personalized Funnels',
      description: 'Funnels tailored to your buyers, not generic templates.',
    },
    {
      icon: RefreshCcw,
      title: 'Continuous Optimization',
      description: 'Weekly tweaks & transparent reports that tie directly to revenue.',
    },
  ];

  const servicesPackage = [
    'Ad Account Audit',
    'Funnel-Aligned Setup',
    'Winning Creatives Strategy',
    'Audience Targeting & Scaling',
    'Weekly Optimization & Reporting',
  ];

  const servicesPackageIcons = [Search, Funnel, PenTool, Users, Calendar];

  const steps = [
    { title: 'Discovery Call', description: 'Deep-dive into your goals & current setup.' },
    { title: 'Audit & Strategy', description: 'Identify gaps & build your roadmap.' },
    { title: 'Funnel & Creative Setup', description: 'Launch high-converting campaigns.' },
    { title: 'Scale & Optimize', description: 'Refine budgets, audiences & ads weekly.' },
    { title: 'Reporting & Growth', description: 'Understand numbers & plan next steps.' },
  ];

  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent('Performance Marketing Inquiry');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}`
    );
    window.location.href = `mailto:vyshnavnair378@gmail.com?subject=${subject}&body=${body}`;
  };

  // Metrics for the 3D cube faces - Values removed/made generic
  const metrics = [
    { label: 'ROAS', value: 'Optimized', icon: DollarSign, color: 'text-green-400' },
    { label: 'CAC', value: 'Reduced', icon: Users, color: 'text-blue-400' },
    { label: 'LTV', value: 'Increased', icon: Layers, color: 'text-purple-400' },
    { label: 'Conversion', value: 'Enhanced', icon: Target, color: 'text-yellow-400' },
    { label: 'Ad Spend', value: 'Efficient', icon: BarChart2, color: 'text-red-400' },
    { label: 'Growth', value: 'Accelerated', icon: TrendingUp, color: 'text-cyan-400' },
  ];

  // Animation for the floating elements near the cube
  const floatingElementVariants = {
    float: {
      y: [0, -10, 0],
      x: [0, 5, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    },
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <>
      {/* Global styles for Inter font and custom animations */}
      <style jsx global>{`
        html {
          font-family: 'Inter', sans-serif;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob-1 { animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.3, 0.9); }
        .animate-blob-2 { animation: blob 9s infinite cubic-bezier(0.6, 0.01, 0.3, 0.9) 1s; }

        /* CSS for 3D Cube */
        .cube-container {
          width: 200px; /* Base size for the cube */
          height: 200px;
          position: relative;
          transform-style: preserve-3d;
          animation: rotateCube 30s linear infinite; /* Auto-rotate */
        }

        .cube-container:hover {
          animation-play-state: paused; /* Pause on hover */
        }

        @keyframes rotateCube {
          from { transform: rotateX(0deg) rotateY(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }

        .cube-face {
          position: absolute;
          width: 200px; /* Match cube-container width */
          height: 200px; /* Match cube-container height */
          border: 1px solid rgba(255, 255, 255, 0.4); /* Slightly stronger white border */
          background-color: rgb(38, 198, 218); 
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: white;
          text-shadow: 0 0 5px rgba(0,0,0,0.5);
          backface-visibility: hidden; /* Hide back of face when rotated */
          border-radius: 8px; /* Slightly rounded corners for faces */
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .cube-face:hover {
          background-color: rgb(0, 0, 0); /* More opaque on hover */
        }

        /* Positioning faces (translateZ is half of cube dimension) */
        .face-front  { transform: rotateY(0deg) translateZ(100px); }
        .face-back   { transform: rotateY(180deg) translateZ(100px); }
        .face-right  { transform: rotateY(90deg) translateZ(100px); }
        .face-left   { transform: rotateY(-90deg) translateZ(100px); }
        .face-top    { transform: rotateX(90deg) translateZ(100px); }
        .face-bottom { transform: rotateX(-90deg) translateZ(100px); }
      `}</style>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-4 md:px-24 lg:px-32 pt-32 pb-16 bg-gradient-to-br from-cyan-100 to-cyan-200 overflow-hidden">
        {/* Background blobs with subtle animation */}
        <div className="absolute w-[30rem] h-[30rem] bg-white/20 border border-white/30 shadow-xl blur-[100px] top-0 -left-32 -z-10 rounded-full animate-blob-1" />
        <div className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-white/10 blur-[80px] -z-10 rounded-full animate-blob-2" />

        {/* Left Content */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 z-10 text-center md:text-left"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Performance marketing that <span className="text-cyan-600 underline">moves your bottom line</span>
          </h1>
          <p className="text-lg text-gray-800 mb-8">
            I help brands and coaches build and scale ad campaigns tied to real business metrics.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-cyan-400 text-white px-8 py-3 rounded-full shadow-sm hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            Book a quick 15 min call 📞
          </button>
        </motion.div>

        {/* Right Hero Graphics - Interactive 3D Prism of Metrics (CSS 3D Cube) */}
        <div className="md:w-1/2 mt-12 md:mt-0 z-10 relative flex justify-center items-center h-64 md:h-96 perspective-1000">
          <div className="cube-container">
            {/* Front Face */}
            <div className="cube-face face-front">
              {React.createElement(metrics[0].icon, { size: 64, className: metrics[0].color })}
              <span className="text-3xl mt-2">{metrics[0].value}</span>
              <span className="text-lg">{metrics[0].label}</span>
            </div>
            {/* Back Face */}
            <div className="cube-face face-back">
              {React.createElement(metrics[1].icon, { size: 64, className: metrics[1].color })}
              <span className="text-3xl mt-2">{metrics[1].value}</span>
              <span className="text-lg">{metrics[1].label}</span>
            </div>
            {/* Right Face */}
            <div className="cube-face face-right">
              {React.createElement(metrics[2].icon, { size: 64, className: metrics[2].color })}
              <span className="text-3xl mt-2">{metrics[2].value}</span>
              <span className="text-lg">{metrics[2].label}</span>
            </div>
            {/* Left Face */}
            <div className="cube-face face-left">
              {React.createElement(metrics[3].icon, { size: 64, className: metrics[3].color })}
              <span className="text-3xl mt-2">{metrics[3].value}</span>
              <span className="text-lg">{metrics[3].label}</span>
            </div>
            {/* Top Face */}
            <div className="cube-face face-top">
              {React.createElement(metrics[4].icon, { size: 64, className: metrics[4].color })}
              <span className="text-3xl mt-2">{metrics[4].value}</span>
              <span className="text-lg">{metrics[4].label}</span>
            </div>
            {/* Bottom Face */}
            <div className="cube-face face-bottom">
              {React.createElement(metrics[5].icon, { size: 64, className: metrics[5].color })}
              <span className="text-3xl mt-2">{metrics[5].value}</span>
              <span className="text-lg">{metrics[5].label}</span>
            </div>
          </div>

          {/* New Floating Elements near the cube */}
          <motion.div
            className="absolute p-3 bg-white/10 rounded-full shadow-md backdrop-blur-sm"
            style={{ top: '15%', right: '10%' }}
            animate="float"
          >
            <Sparkles size={28} className="text-yellow-300" />
          </motion.div>

          <motion.div
            className="absolute p-3 bg-white/10 rounded-full shadow-md backdrop-blur-sm"
            style={{ bottom: '15%', left: '10%' }} 
            animate="pulse"
          >
            <Layers size={28} className="text-purple-300" />
          </motion.div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Work With Me</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          {propsList.map((prop, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-gradient-to-br from-white/80 to-white/50 backdrop-blur-md border border-gray-200 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <prop.icon className="w-16 h-16 text-cyan-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">{prop.title}</h3>
              <p className="text-gray-700 text-lg">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

     {/* Services Package - Reverted to Initial Design */}
      <section id="services" className="py-16 px-4 bg-cyan-50">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">All-In-One Performance Package</h2>
        <div className="max-w-3xl mx-auto bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-8 shadow-lg">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {/* Render icons directly from servicesPackageIcons array */}
            {servicesPackageIcons.map((IconComponent, i) => (
              <IconComponent key={i} className="w-10 h-10 text-cyan-600" />
            ))}
          </div>
          <ul className="list-none text-gray-700 space-y-2 text-center"> {/* Removed list-disc */}
            {servicesPackage.map((srv, i) => (
              <li key={i} className="font-medium flex items-center justify-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {srv}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-4">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg">
                {idx + 1}
              </div>
              <h5 className="font-semibold text-xl text-gray-900 mb-2">{step.title}</h5>
              <p className="text-gray-700 text-base">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 px-4 bg-cyan-50">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">Get in Touch</h2>
        <div className="max-w-md mx-auto bg-gradient-to-br from-white/80 to-white/50 backdrop-blur-md border border-gray-200 rounded-3xl p-8 shadow-xl">
          {/* Calendly button */}
          <div className="mb-6 text-center">
            <button
              onClick={() => window.open('https://calendly.com/vyshnavnair378/30min', '_blank')}
              className="inline-flex items-center justify-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full shadow-lg hover:bg-cyan-700 hover:scale-105 transition-all duration-300"
            >
              Book a Quick 15‑min Call
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>

          {/* Comforting message */}
          <p className="text-gray-800 text-center mb-8 text-lg">
            Not ready for a call? Leave your details, I'll get in touch and help you with a free account audit.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition text-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition text-lg"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition text-lg"
            />
            <button
              type="submit"
              className="w-full bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              Send Details
            </button>
            <text className='text-black'>In case if your email client is not opening, drop a mail to vyshnavnair378@gmail.com</text>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white text-center">
        <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Vyshnav Nair. All rights reserved.</p>
      </footer>
    </>
  );
}
