
import React from 'react';
import { PRICING_PLANS } from '../constants';

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-40 bg-white dark:bg-surface-dark">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black md:text-4xl mb-4 font-display dark:text-white">Simple, Transparent Pricing</h2>
          <p className="text-neutral-600 dark:text-neutral-400">Choose a plan that works for you. No hidden fees.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {PRICING_PLANS.map((plan) => (
            <div 
              key={plan.id} 
              className={`flex flex-col p-8 bg-background-light rounded-2xl border transition-all dark:bg-background-dark 
                ${plan.isPopular ? 'border-2 border-primary relative shadow-lg scale-105 z-10' : 'border-neutral-200 hover:border-primary'}`}
            >
              {plan.isPopular && <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-lg">POPULAR</div>}
              <h3 className="text-xl font-bold mb-2 dark:text-white">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-black dark:text-white">{plan.price}</span>
                <span className="text-neutral-500 ml-2">{plan.period}</span>
              </div>
              <p className="text-sm text-neutral-600 mb-6 dark:text-neutral-400">{plan.description}</p>
              <button className={`w-full py-3 font-bold rounded-xl mb-6 transition-colors shadow-sm
                ${plan.isPopular ? 'bg-primary text-black hover:bg-yellow-400' : 'border-2 border-primary text-text-dark dark:text-white hover:bg-primary/10'}`}>
                {plan.id === '2' ? 'Get Started' : 'Select Plan'}
              </button>
              <ul className="flex flex-col gap-3 text-sm">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2 dark:text-neutral-300">
                    <span className="material-symbols-outlined text-secondary text-lg">check_circle</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
