
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
              <h2 className="text-3xl font-black font-display dark:text-white">Our Brand Promise</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                We don't just assign tutors. We match the right educator to the right student — and we stay accountable for the outcome.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-3xl text-secondary">visibility</span>
              </div>
              <h2 className="text-3xl font-black font-display dark:text-white">Our Core Philosophy</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Tutoring is not a transaction. It's a relationship built on trust, structure, and sustained academic investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-16 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-6 font-display dark:text-white">Why choose Us?</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto">
              TutorAid is the only online tutoring service in Sri Lanka that uses a curated, match-based model — where students never browse a marketplace, but instead receive a handpicked shortlist of qualified, screened, and trained tutors aligned with their curriculum, level, and learning style. Every session is backed by accountability, quality assurance, and structured progress monitoring.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-black mb-4 font-display dark:text-white">What We Are</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Curated. Matched. Accountable. Premium online tutoring with structured onboarding and quality guarantees.
              </p>
            </div>
            <div className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-black mb-4 font-display dark:text-white">What We Are Not</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                A freelancer directory. A cheap listing platform. A marketplace where parents scroll through unverified profiles.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <blockquote className="text-xl italic text-neutral-700 dark:text-neutral-300 max-w-4xl mx-auto">
              "TutorAid isn't a platform you use — it's a service you trust. We've built the infrastructure, screened the educators, and designed the experience so parents don't have to figure it out themselves."
            </blockquote>
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
                  Founded in 2025, TutorAid is Sri Lanka’s premier curated online tutoring platform, dedicated to providing personalized and accessible learning experiences. Built by a passionate team of educators and technology experts, TutorAid connects students with carefully selected certified tutors who make learning engaging and effective. With over 20+ successful students and a growing community, we continue to help learners achieve their academic goals through our unique match-based tutoring approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      {/* <section className="py-16 px-4 md:px-10 lg:px-40 bg-white dark:bg-surface-dark">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center font-display dark:text-white">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-black mb-4 font-display dark:text-white">Competitive Differentiation</h3>
              <ul className="text-neutral-600 dark:text-neutral-400 space-y-2 text-left">
                <li>• Curated Matching — We select and shortlist tutors; students don't browse random profiles.</li>
                <li>• Contracted Tutors — All educators are on formal contracts with reliability obligations.</li>
                <li>• Curriculum Specificity — Dedicated exclusively to Edexcel and Cambridge (Primary through IGCSE).</li>
                <li>• Free Trial Session — A 30-minute trial class before any financial commitment.</li>
                <li>• Progress Accountability — Structured check-ins, session reports, and parent communication.</li>
                <li>• Quality Training — All tutors go through internal onboarding and pedagogical alignment.</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-black mb-4 font-display dark:text-white">Functional Value</h3>
              <ul className="text-neutral-600 dark:text-neutral-400 space-y-2 text-left">
                <li>• Curriculum-matched tutors</li>
                <li>• Scheduled, reliable sessions</li>
                <li>• Vetted, trained educators</li>
                <li>• Progress tracking</li>
                <li>• Exam-focused preparation</li>
                <li>• Flexible online delivery</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-black mb-4 font-display dark:text-white">Emotional Value</h3>
              <ul className="text-neutral-600 dark:text-neutral-400 space-y-2 text-left">
                <li>• Peace of mind for parents</li>
                <li>• Confidence for students</li>
                <li>• Sense of academic control</li>
                <li>• Relief from worry</li>
                <li>• Trust in a system</li>
                <li>• Pride in progress</li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              <strong>Market Positioning:</strong> Premium Curated Tutoring — Not a Marketplace. TutorAid positions itself in the upper quadrant of the tutoring market — between expensive in-person tutoring centres and unreliable freelance platforms. The white space: a structured, premium online service that feels personal, accountable, and professional.
            </p>
          </div>
        </div>
      </section> */}

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
