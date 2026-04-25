
import React from 'react';
import { PRICING_PLANS } from '../constants/constants';

const PricingSection: React.FC = () => {
  return (
    <section className="section-container bg-white dark:bg-surface-dark">
      <div className="section-inner">
        <div className="text-center mb-12">
          <h2 className="section-heading mb-4 dark:text-white">Simple, Transparent Pricing</h2>
          <p className="section-subheading">Choose a plan that works for you. No hidden fees.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {PRICING_PLANS.map((plan) => (
            <div 
              key={plan.id} 
              className={`card p-8 bg-background-light rounded-2xl 
                ${plan.isPopular ? 'pricing-card-popular' : 'card-hover'}`}
            >
              {plan.isPopular && <div className="badge badge-primary pricing-badge">POPULAR</div>}
              <h3 className="text-xl font-bold mb-2 dark:text-white">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-black dark:text-white">{plan.price}</span>
                <span className="text-neutral-500 ml-2">{plan.period}</span>
              </div>
              <p className="text-sm text-neutral-600 mb-6 dark:text-neutral-400">{plan.description}</p>
              <button className={`btn-primary-full ${plan.isPopular ? 'btn-primary' : 'btn-secondary'}`}>
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
