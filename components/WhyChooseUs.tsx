
import React from 'react';

const WhyChooseUs: React.FC = () => {
  const features = [
    { icon: 'verified', title: 'Certified Tutors', desc: 'Verified experts in every subject, thoroughly vetted.' },
    { icon: 'schedule', title: 'Flexible Schedules', desc: 'Book sessions that fit your busy lifestyle, 24/7.' },
    { icon: 'trending_up', title: 'Progress Tracking', desc: 'Detailed analytics and session reports.' },
    { icon: 'person_celebrate', title: 'Personalized Plans', desc: 'Tailored to individual learning styles.' }
  ];

  return (
    <section className="py-16 px-4 md:px-10 lg:px-40 bg-white dark:bg-surface-dark">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black md:text-4xl dark:text-white mb-4 font-display">Why choose tutorAID?</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            We provide the tools and support needed for academic success, tailored to each student's unique journey.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col gap-4 rounded-xl border border-neutral-100 bg-background-light p-6 shadow-sm hover:shadow-md transition-all dark:bg-background-dark dark:border-neutral-800">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-black">
                <span className="material-symbols-outlined">{feature.icon}</span>
              </div>
              <h3 className="text-lg font-bold dark:text-white">{feature.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
