
import React from 'react';

const WhyChooseUs: React.FC = () => {
  const features = [
    { icon: 'verified', title: 'Certified Tutors', desc: 'Verified experts in every subject, thoroughly vetted.' },
    { icon: 'schedule', title: 'Flexible Schedules', desc: 'Book sessions that fit your busy lifestyle, 24/7.' },
    { icon: 'trending_up', title: 'Progress Tracking', desc: 'Detailed analytics and session reports.' },
    { icon: 'person_celebrate', title: 'Personalized Plans', desc: 'Tailored to individual learning styles.' }
  ];

  return (
    <section className="section-container bg-white dark:bg-surface-dark">
      <div className="section-inner">
        <div className="text-center mb-12">
          <h2 className="section-heading dark:text-white mb-4">Why choose TutorAid?</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            We provide the tools and support needed for academic success, tailored to each student's unique journey.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="card gap-4 rounded-xl border border-neutral-100 bg-background-light p-6 shadow-sm card-hover dark:bg-background-dark dark:border-neutral-800">
              <div className="icon-circle">
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
