
import React from 'react';
import { Link } from 'react-router-dom';

const SubjectsSection: React.FC = () => {
  const subjects = [
    { icon: 'calculate', name: 'Mathematics' },
    { icon: 'science', name: 'Science' },
    { icon: 'menu_book', name: 'English' },
    { icon: 'computer', name: 'ICT' },
    { icon: 'translate', name: 'Sinhala' },
    { icon: 'language', name: 'Tamil' },
    { icon: 'business_center', name: 'Business' },
    { icon: 'history_edu', name: 'History' }
  ];

  return (
    <section className="py-16 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black md:text-4xl mb-4 font-display dark:text-white">Explore Subjects</h2>
          <p className="text-neutral-600 dark:text-neutral-400">Find the perfect tutor for any subject you need help with.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {subjects.map((subject, idx) => (
            <Link key={idx} to="/subjects" className="group flex gap-3 rounded-lg border border-neutral-200 bg-white p-4 items-center hover:border-primary hover:shadow-md transition-all dark:bg-surface-dark dark:border-neutral-700 cursor-pointer">
              <div className="text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">{subject.icon}</span>
              </div>
              <h3 className="text-text-dark dark:text-text-light text-base font-bold">{subject.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;
