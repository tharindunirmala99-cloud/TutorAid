
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRICING_PLANS } from '../constants';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-10 lg:px-40 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-display dark:text-white">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your learning needs. No hidden fees, cancel anytime.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-white dark:bg-surface-dark rounded-full p-2 shadow-md">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-primary text-black'
                  : 'text-neutral-600 dark:text-neutral-400'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                billingCycle === 'annual'
                  ? 'bg-primary text-black'
                  : 'text-neutral-600 dark:text-neutral-400'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-secondary text-white px-2 py-1 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-container bg-background-light dark:bg-background-dark">
        <div className="section-inner">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {PRICING_PLANS.map((plan) => (
              <div 
                key={plan.id} 
                className={`flex flex-col p-8 bg-white rounded-2xl border transition-all dark:bg-surface-dark 
                  ${plan.isPopular ? 'border-2 border-primary relative shadow-xl scale-105 z-10' : 'border-neutral-200 dark:border-neutral-800 hover:border-primary'}`}
              >
                {plan.isPopular && <div className="pricing-badge">POPULAR</div>}
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

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-10 lg:px-40 bg-white dark:bg-surface-dark">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center font-display dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: 'Can I switch plans at any time?',
                answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, debit cards, and PayPal. All payments are processed securely.'
              },
              {
                question: 'Is there a free trial?',
                answer: 'Yes! All new users get one free trial session to experience our platform before committing to a plan.'
              },
              {
                question: 'What is your refund policy?',
                answer: 'We offer a 14-day money-back guarantee. If you\'re not satisfied with our service, we\'ll refund your payment in full.'
              },
              {
                question: 'Can I pause my subscription?',
                answer: 'Yes, you can pause your subscription for up to 3 months. Your account and progress will be saved during the pause period.'
              }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-background-light dark:bg-background-dark rounded-lg p-6 cursor-pointer">
                <summary className="flex items-center justify-between font-bold text-lg dark:text-white list-none">
                  {faq.question}
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-16 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black mb-4 text-black font-display">
                  Need a Custom Plan?
                </h2>
                <p className="text-lg text-black/80 mb-6">
                  We offer custom enterprise solutions for schools, institutions, and organizations. Get in touch to discuss your specific requirements.
                </p>
                <ul className="space-y-2 text-black/90">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined">check_circle</span>
                    Dedicated account manager
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined">check_circle</span>
                    Custom reporting & analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined">check_circle</span>
                    Volume discounts available
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-neutral-100 transition-colors shadow-lg text-lg">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
