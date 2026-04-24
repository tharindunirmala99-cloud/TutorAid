
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    { step: 1, title: 'Submit Goals', desc: 'Tell us what you want to achieve and your learning preferences.' },
    { step: 2, title: 'Choose a Tutor', desc: 'Browse profiles and select the best match for your needs.' },
    { step: 3, title: 'Join Live Session', desc: 'Connect via our virtual classroom with interactive tools.' },
    { step: 4, title: 'Track Progress', desc: 'Review feedback and watch your grades improve over time.' }
  ];

  return (
    <section className="py-16 px-4 md:px-10 lg:px-40 bg-white dark:bg-surface-dark">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-black md:text-4xl mb-12 text-center font-display dark:text-white">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((item, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center group">
              <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full font-bold text-xl shadow-lg z-10 
                ${item.step === 4 ? 'bg-secondary text-white' : item.step === 1 ? 'bg-primary text-black' : 'bg-white border-2 border-primary text-black dark:bg-surface-dark dark:text-white'}`}>
                {item.step}
              </div>
              {idx < 3 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-neutral-200 -z-0"></div>}
              <h3 className="text-lg font-bold mb-2 dark:text-white">{item.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
