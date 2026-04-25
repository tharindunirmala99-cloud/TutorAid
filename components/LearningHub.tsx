
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants/constants';

const LearningHub: React.FC = () => {
  return (
    <section className="section-container bg-white dark:bg-surface-dark">
      <div className="section-inner">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="section-heading dark:text-white">Learning Hub</h2>
            <p className="section-subheading">Tips, tricks, and advice for academic success.</p>
          </div>
          <Link to="/blog" className="text-primary font-bold hover:underline hidden md:block cursor-pointer">Read more articles</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="flex flex-col gap-3 group cursor-pointer">
              <div className="aspect-video w-full rounded-lg bg-neutral-200 overflow-hidden">
                <img alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={post.imageUrl} />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">{post.category}</span>
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors dark:text-white">{post.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningHub;
