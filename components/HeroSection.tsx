
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-10 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark">
      <div className="max-w-[1200px] w-full">
        <div className="flex flex-col-reverse gap-6 py-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6 lg:w-1/2 items-start">
            <div className="flex flex-col gap-4 text-left">
              <span className="w-fit rounded-full bg-primary/20 px-3 py-1 text-xs font-bold text-black dark:text-primary">
                🚀 Start Learning Today
              </span>
              <h1 className="text-text-dark dark:text-text-light text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl font-display">
                Personalized Online Tutoring for Every Student
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400 text-base font-normal leading-relaxed md:text-lg">
                Unlock your potential with trusted tutors, flexible schedules, and personalized learning plans designed just for you. From Math to Music, we have it all.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/pricing" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-yellow-400 text-black text-base font-bold leading-normal transition-all shadow-md">
                Book Free Trial
              </Link>
              <Link to="/tutors" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white border border-neutral-200 hover:bg-neutral-50 text-text-dark text-base font-bold leading-normal transition-all dark:bg-surface-dark dark:border-neutral-700 dark:text-text-light dark:hover:bg-neutral-800">
                Browse Tutors
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-neutral-500">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i} 
                    alt={`Student ${i}`} 
                    className="h-8 w-8 rounded-full border-2 border-white object-cover" 
                    src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                  />
                ))}
              </div>
              <span>Trusted by 5,000+ students</span>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div 
              className="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-2xl shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500" 
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1471")' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
