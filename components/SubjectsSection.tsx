
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
    <section className="section-container bg-background-light dark:bg-background-dark">
      <div className="section-inner">
        <div className="mb-10 text-center">
          <h2 className="section-heading mb-4 dark:text-white">Explore Subjects</h2>
          <p className="section-subheading">Find the perfect tutor for any subject you need help with.</p>
        </div>
        <div className="grid-cards-4">
          {subjects.map((subject, idx) => (
            <Link key={idx} to="/subjects" className="subject-card group flex gap-3 rounded-lg border border-neutral-200 bg-white p-4 items-center dark:bg-surface-dark dark:border-neutral-700 cursor-pointer">
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
