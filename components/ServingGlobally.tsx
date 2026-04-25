import React from 'react';
import WorldMapSVG from './WorldMapSVG';

const countries = [
  { name: 'Sri Lanka', flag: '🇱🇰' },
  { name: 'United Kingdom', flag: '🇬🇧' },
  { name: 'United Arab Emirates', flag: '🇦🇪' },
];

const ServingGlobally: React.FC = () => (
  <section className="w-full bg-surface-light dark:bg-surface-dark section-container">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="section-heading text-primary mb-4">Serving Students Globally</h2>
      <p className="section-subheading mb-8 text-lg">We proudly support students from around the world, helping them achieve their academic goals.</p>
      <div className="flex justify-center mb-8">
        <WorldMapSVG />
      </div>
    </div>
  </section>
);

export default ServingGlobally;
