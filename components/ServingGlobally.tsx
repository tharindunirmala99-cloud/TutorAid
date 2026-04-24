import React from 'react';
import WorldMapSVG from './WorldMapSVG';

const countries = [
  { name: 'Sri Lanka', flag: '🇱🇰' },
  { name: 'United Kingdom', flag: '🇬🇧' },
  { name: 'United Arab Emirates', flag: '🇦🇪' },
];

const ServingGlobally: React.FC = () => (
  <section className="w-full bg-surface-light dark:bg-surface-dark py-16 px-4 md:px-10 lg:px-40">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-display">Serving Students Globally</h2>
      <p className="text-neutral-600 dark:text-neutral-300 mb-8 text-lg">We proudly support students from around the world, helping them achieve their academic goals.</p>
      <div className="flex justify-center mb-8">
        <WorldMapSVG />
      </div>
    </div>
  </section>
);

export default ServingGlobally;
