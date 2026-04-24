
import React from 'react';
import { TESTIMONIALS } from '../constants';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-black md:text-4xl mb-12 text-center font-display dark:text-white">What Parents & Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="flex flex-col p-6 bg-white rounded-xl shadow-sm border border-neutral-100 dark:bg-surface-dark dark:border-neutral-800">
              <div className="text-primary mb-4">
                <span className="material-symbols-outlined text-4xl">format_quote</span>
              </div>
              <p className="text-lg font-medium italic mb-6 text-neutral-700 dark:text-neutral-300">{t.content}</p>
              <div className="flex items-center gap-3 mt-auto">
                <img alt={t.name} className="w-10 h-10 rounded-full object-cover" src={t.imageUrl} />
                <div>
                  <p className="font-bold text-sm dark:text-white">{t.name}</p>
                  <p className="text-xs text-neutral-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
