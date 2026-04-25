
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SubjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const subjects = [
    { icon: 'calculate', name: 'Mathematics', category: 'STEM', tutors: 45, description: 'Algebra, Calculus, Geometry, Statistics' },
    { icon: 'science', name: 'Science', category: 'STEM', tutors: 38, description: 'Physics, Chemistry, Biology' },
    { icon: 'computer', name: 'ICT', category: 'STEM', tutors: 32, description: 'Programming, Web Development, Database' },
    { icon: 'menu_book', name: 'English', category: 'Languages', tutors: 52, description: 'Literature, Writing, Grammar, Communication' },
    { icon: 'translate', name: 'Sinhala', category: 'Languages', tutors: 28, description: 'Language & Literature' },
    { icon: 'language', name: 'Tamil', category: 'Languages', tutors: 24, description: 'Language & Literature' },
    { icon: 'business_center', name: 'Business', category: 'Commerce', tutors: 30, description: 'Economics, Accounting, Marketing' },
    { icon: 'account_balance', name: 'Commerce', category: 'Commerce', tutors: 26, description: 'Finance, Trade, Business Studies' },
    { icon: 'history_edu', name: 'History', category: 'Humanities', tutors: 22, description: 'World History, Local History' },
    { icon: 'public', name: 'Geography', category: 'Humanities', tutors: 20, description: 'Physical & Human Geography' },
    { icon: 'psychology', name: 'Psychology', category: 'Humanities', tutors: 18, description: 'Human Behavior & Mental Processes' },
    { icon: 'music_note', name: 'Music', category: 'Arts', tutors: 15, description: 'Theory, Performance, Composition' }
  ];

  const categories = ['All', 'STEM', 'Languages', 'Commerce', 'Humanities', 'Arts'];

  const filteredSubjects = selectedCategory === 'All' 
    ? subjects 
    : subjects.filter(s => s.category === selectedCategory);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-10 lg:px-40 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-display dark:text-white">
            Explore Our Subjects
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Find expert tutors for any subject. From Mathematics to Music, we have qualified educators ready to help you succeed.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 md:px-10 lg:px-40 bg-white dark:bg-surface-dark border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-black shadow-md'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="section-container bg-background-light dark:bg-background-dark">
        <div className="section-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSubjects.map((subject, idx) => (
              <div 
                key={idx} 
                className="group bg-white dark:bg-surface-dark rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 hover:shadow-xl hover:border-primary transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">{subject.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 dark:text-white">{subject.name}</h3>
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider">{subject.category}</span>
                  </div>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                  {subject.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <span className="material-symbols-outlined text-lg">person</span>
                    <span>{subject.tutors} Tutors</span>
                  </div>
                  <Link to="/tutors" className="text-primary font-bold hover:underline flex items-center gap-1 text-sm group-hover:gap-2 transition-all">
                    Find Tutor <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-container bg-white dark:bg-surface-dark">
        <div className="section-inner">
          <h2 className="section-heading text-center mb-12 dark:text-white">
            Why Learn With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'workspace_premium', title: 'Certified Experts', desc: 'All our tutors are qualified professionals with proven track records.' },
              { icon: 'schedule', title: 'Flexible Learning', desc: 'Choose your own schedule and learn at your own pace.' },
              { icon: 'local_library', title: 'Quality Resources', desc: 'Access to curated study materials and practice exercises.' }
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-3xl text-primary">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">{feature.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 font-display dark:text-white">
            Can't Find Your Subject?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-lg">
            We're constantly expanding our offerings. Contact us about your specific learning needs.
          </p>
          <a
            href="/#contact-form"
            className="px-8 py-3 bg-primary hover:bg-yellow-400 text-black font-bold rounded-lg transition-colors shadow-md inline-block"
          >
            Request a Subject
          </a>
        </div>
      </section>
    </div>
  );
};

export default SubjectsPage;
