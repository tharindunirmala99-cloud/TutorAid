
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-10 lg:px-40 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-display dark:text-white">
            About TutorAid
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Empowering students worldwide with personalized, accessible, and effective online tutoring since 2020.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 md:px-10 lg:px-40 bg-white dark:bg-surface-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-3xl text-primary">flag</span>
              </div>
              <h2 className="text-3xl font-black font-display dark:text-white">Our Mission</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                To make quality education accessible to every student, regardless of location or background. We believe that personalized learning is the key to academic success, and we're committed to connecting students with the right tutors who can unlock their full potential.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-3xl text-secondary">visibility</span>
              </div>
              <h2 className="text-3xl font-black font-display dark:text-white">Our Vision</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                To become the world's leading online tutoring platform, where learning is engaging, effective, and tailored to each student's unique needs. We envision a future where every student has access to expert guidance that helps them achieve their academic dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1470" 
                alt="Students learning" 
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-black mb-6 font-display dark:text-white">Our Story</h2>
              <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  TutorAid was founded in 2020 by a group of educators who recognized the need for more personalized, accessible online learning solutions. What started as a small initiative to help students during the pandemic has grown into a thriving platform serving thousands of students worldwide.
                </p>
                <p>
                  Our team brings together experienced educators, technology experts, and passionate individuals committed to transforming education. We've carefully curated a network of certified tutors who not only excel in their subjects but also understand how to make learning engaging and effective.
                </p>
                <p>
                  Today, we're proud to have helped over 5,000 students achieve their academic goals, with a 95% satisfaction rate and countless success stories that inspire us to continue improving and expanding our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 md:px-10 lg:px-40 bg-white dark:bg-surface-dark">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center font-display dark:text-white">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'school', title: 'Excellence', desc: 'We maintain the highest standards in tutor selection and educational quality.' },
              { icon: 'diversity_3', title: 'Inclusivity', desc: 'We welcome students from all backgrounds and learning abilities.' },
              { icon: 'lightbulb', title: 'Innovation', desc: 'We continuously improve our platform with cutting-edge technology.' },
              { icon: 'favorite', title: 'Integrity', desc: 'We build trust through transparency, honesty, and accountability.' }
            ].map((value, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-primary">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold dark:text-white">{value.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center font-display dark:text-white">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '5,000+', label: 'Active Students' },
              { number: '200+', label: 'Expert Tutors' },
              { number: '15,000+', label: 'Sessions Completed' },
              { number: '95%', label: 'Satisfaction Rate' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">{stat.number}</div>
                <div className="text-neutral-600 dark:text-neutral-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-10 lg:px-40 bg-white dark:bg-surface-dark">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 font-display dark:text-white">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-lg">
            Join thousands of students who are achieving their academic goals with TutorAid.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/#booking-form" className="px-8 py-3 bg-primary hover:bg-yellow-400 text-black font-bold rounded-lg transition-colors shadow-md">
              Get Started Today
            </Link>
            <Link to="/#contact-form" className="px-8 py-3 border-2 border-primary text-text-dark dark:text-white hover:bg-primary/10 font-bold rounded-lg transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
