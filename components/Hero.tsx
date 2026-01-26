'use client';

import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-20 left-20 animate-pulse"></div>
        <div 
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl bottom-20 right-20 animate-pulse" 
          style={{ animationDelay: '1s' }}
        ></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Mike Robbins</span>
        </h1>
        <p 
          className="text-xl md:text-2xl text-slate-300 mb-8 animate-fade-in" 
          style={{ animationDelay: '0.2s' }}
        >
          Developer • Problem Solver • Creator
        </p>
        <p 
          className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto animate-fade-in" 
          style={{ animationDelay: '0.4s' }}
        >
          I build clean, efficient solutions and love turning ideas into reality through code.
        </p>
        <div 
          className="flex gap-4 justify-center animate-fade-in flex-wrap" 
          style={{ animationDelay: '0.6s' }}
        >
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
          >
            View Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-blue-500 hover:bg-blue-500/10 rounded-lg font-semibold transition-all duration-200"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={() => scrollToSection('projects')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to projects"
      >
        <ChevronDown size={32} className="text-slate-400" />
      </button>
    </section>
  );
}