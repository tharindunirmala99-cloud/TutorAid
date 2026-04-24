import React from 'react';

const CareersPage: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-10 lg:px-40 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-display dark:text-white">
            Careers at TutorAid
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Join our mission to transform education. Explore open positions and become part of a passionate, innovative team.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-4 md:px-10 lg:px-40 bg-white dark:bg-surface-dark">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center font-display dark:text-white">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'diversity_3', title: 'Inclusive Culture', desc: 'We celebrate diversity and foster a supportive, collaborative environment.' },
              { icon: 'lightbulb', title: 'Innovative Spirit', desc: 'Work with cutting-edge technology and creative minds.' },
              { icon: 'workspace_premium', title: 'Growth Opportunities', desc: 'Advance your career with learning, mentorship, and leadership programs.' }
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

      {/* Open Positions */}
      <section className="py-16 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-center font-display dark:text-white">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Example positions, replace with dynamic data as needed */}
            {[
              {
                title: 'Frontend Developer',
                type: 'Full-time',
                location: 'Remote',
                desc: 'Build beautiful, performant web experiences for students and tutors.'
              },
              {
                title: 'Online Tutor (All Subjects)',
                type: 'Part-time / Contract',
                location: 'Remote',
                desc: 'Help students achieve their goals by providing personalized online tutoring.'
              },
              {
                title: 'Content Writer',
                type: 'Freelance',
                location: 'Remote',
                desc: 'Create engaging educational content and resources for our learning hub.'
              },
              {
                title: 'Customer Success Specialist',
                type: 'Full-time',
                location: 'Remote',
                desc: 'Support students and tutors, ensuring a smooth and positive experience.'
              }
            ].map((job, idx) => (
              <div key={idx} className="bg-white dark:bg-surface-dark rounded-xl border border-neutral-200 dark:border-neutral-800 p-8 flex flex-col gap-4 shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-primary">work</span>
                  <h3 className="text-xl font-bold dark:text-white">{job.title}</h3>
                </div>
                <div className="flex gap-4 text-sm text-neutral-500 mb-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">{job.type}</span>
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-bold">{job.location}</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400">{job.desc}</p>
                <button className="mt-auto px-6 py-2 bg-primary hover:bg-yellow-400 text-black font-bold rounded-lg transition-colors w-fit self-end">Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-10 lg:px-40 bg-white dark:bg-surface-dark">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 font-display dark:text-white">
            Don't see your role?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-lg">
            We're always looking for talented people. Send us your resume and tell us how you can make a difference at TutorAid.
          </p>
          <button className="px-8 py-3 bg-primary hover:bg-yellow-400 text-black font-bold rounded-lg transition-colors shadow-md">
            Send Resume
          </button>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
