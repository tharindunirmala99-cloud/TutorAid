
import React from 'react';
import { Link } from 'react-router-dom';
import { TUTORS } from '../constants';

const TopRatedTutors: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black md:text-4xl mb-2 font-display dark:text-white">Top Rated Tutors</h2>
            <p className="text-neutral-600 dark:text-neutral-400">Expert guidance from our highest-rated educators.</p>
          </div>
          <Link to="/tutors" className="text-primary font-bold hover:underline flex items-center gap-1 group">
            View all tutors <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TUTORS.map((tutor) => (
            <div key={tutor.id} className="flex flex-col rounded-xl overflow-hidden bg-white shadow-md border border-neutral-100 hover:shadow-lg transition-all dark:bg-surface-dark dark:border-neutral-800">
              <div className={`h-24 bg-gradient-to-r ${tutor.gradient}`}></div>
              <div className="px-6 relative pb-6 flex flex-col h-full">
                <img alt={tutor.name} className="w-20 h-20 rounded-full border-4 border-white absolute -top-10 object-cover dark:border-surface-dark" src={tutor.imageUrl} />
                <div className="mt-12 flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-text-dark dark:text-text-light">{tutor.name}</h3>
                    <p className="text-sm text-neutral-500">{tutor.subject}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded text-yellow-700 text-xs font-bold dark:bg-yellow-900/30 dark:text-yellow-400">
                    <span className="material-symbols-outlined text-[16px] text-primary">star</span>
                    {tutor.rating}
                  </div>
                </div>
                <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                  {tutor.bio}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tutor.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-neutral-100 rounded text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">{tag}</span>
                  ))}
                </div>
                <div className="mt-auto pt-6">
                  <button className="w-full py-2 bg-primary hover:bg-yellow-400 text-black font-bold rounded-lg transition-colors text-sm">
                    {tutor.id === '1' ? 'Book Session' : 'View Profile'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedTutors;
