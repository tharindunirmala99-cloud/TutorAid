
import React from 'react';
import { Link } from 'react-router-dom';
import { TUTORS } from '../constants/constants';

const TopRatedTutors: React.FC = () => {
  // Filter and sort tutors by rating (top-rated first)
  const topRatedTutors = TUTORS
    .filter(tutor => tutor.rating === 5.0)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3); // Show top 3 tutors

  return (
    <section className="section-container bg-background-light dark:bg-background-dark">
      <div className="section-inner">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">

          <div className="text-center md:text-left">
            <h2 className="section-heading mb-2 dark:text-white">Top Rated Tutors</h2>
            <p className="section-subheading">Expert guidance from our highest-rated educators.</p>
          </div>

          <Link to="/tutors" className="text-primary font-bold hover:underline flex items-center gap-1 group">
            View all tutors <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topRatedTutors.map((tutor) => (
            <div key={tutor.id} className="card rounded-xl overflow-hidden shadow-md card-hover dark:border-neutral-800">
              <div className={`h-24 bg-gradient-to-r ${tutor.gradient}`}></div>
              <div className="px-6 relative pb-6 flex flex-col h-full">
                <img alt={tutor.name} className="tutor-avatar" src={tutor.imageUrl} />
                <div className="mt-12 flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-text-dark dark:text-text-light">{tutor.name}</h3>
                    <p className="text-sm text-neutral-500">{tutor.tags.join(', ')}</p>
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
                {/* <div className="mt-auto pt-6">
                  <button className="btn-primary-full">
                    {tutor.id === '1' ? 'Book Session' : 'View Profile'}
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedTutors;
