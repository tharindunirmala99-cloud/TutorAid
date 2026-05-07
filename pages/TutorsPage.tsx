
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TUTORS } from '../constants/constants';

const TutorsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All Subjects');

  const subjects = ['All Subjects', 'Mathematics', 'Science', 'English', 'Computer Science', 'TESOL'];

  const filteredTutors = TUTORS.filter(tutor => {
    const matchesSearch = tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutor.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'All Subjects' || tutor.tags.includes(selectedSubject);
    return matchesSearch && matchesSubject;
  });

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-10 lg:px-40 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-display dark:text-white">
            Meet Our Expert Tutors
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-8">
            Discover qualified, experienced educators ready to help you achieve your academic goals.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
                search
              </span>
              <input
                type="text"
                placeholder="Search by name or subject..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-surface-dark text-text-dark dark:text-text-light focus:border-primary focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 md:px-10 lg:px-40 bg-white dark:bg-surface-dark border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-bold text-neutral-700 dark:text-neutral-300">Filter by Subject:</span>
            <div className="flex flex-wrap gap-2">
              {subjects.map((subject) => (
                <button
                  key={subject}
                  onClick={() => setSelectedSubject(subject)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedSubject === subject
                      ? 'bg-primary text-black'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tutors Grid */}
      <section className="py-16 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-6 flex justify-between items-center">
            <p className="text-neutral-600 dark:text-neutral-400">
              Showing <span className="font-bold text-text-dark dark:text-white">{filteredTutors.length}</span> tutors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutors.map((tutor) => (
              <div key={tutor.id} className="flex flex-col rounded-xl overflow-hidden bg-white shadow-md border border-neutral-100 hover:shadow-xl transition-all dark:bg-surface-dark dark:border-neutral-800">
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
                  <div className="mt-auto pt-6 flex gap-2">
                    {/* <button className="flex-1 py-2 bg-primary hover:bg-yellow-400 text-black font-bold rounded-lg transition-colors text-sm">
                      Book Session
                    </button> */}
                    {/* <button className="px-4 py-2 border-2 border-neutral-200 dark:border-neutral-700 hover:border-primary dark:hover:border-primary rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-neutral-600 dark:text-neutral-400">visibility</span>
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTutors.length === 0 && (
            <div className="text-center py-16">
              <span className="material-symbols-outlined text-6xl text-neutral-300 dark:text-neutral-700 mb-4">search_off</span>
              <p className="text-xl text-neutral-500 dark:text-neutral-400">No tutors found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Become a Tutor CTA */}
      <section className="py-16 px-4 md:px-10 lg:px-40 bg-white dark:bg-surface-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-black font-display">
              Want to Join Our Team?
            </h2>
            <p className="text-lg text-black/80 mb-6 max-w-2xl mx-auto">
              Are you an experienced educator looking to make a difference? Apply to become a tutor today.
            </p>
            <button onClick={() => window.open("https://forms.gle/znbEzYTA2EexZZGv5", "_blank")} className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-neutral-100 transition-colors shadow-lg">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TutorsPage;
