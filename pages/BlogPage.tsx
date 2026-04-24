
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Study Tips', 'Education', 'Technology'];

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === selectedCategory);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-10 lg:px-40 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-display dark:text-white">
            Learning Hub
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Tips, insights, and resources to help you succeed in your academic journey.
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

      {/* Featured Post */}
      <section className="py-16 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-xl mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto">
                <img 
                  src={BLOG_POSTS[0].imageUrl} 
                  alt={BLOG_POSTS[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-3">
                  Featured • {BLOG_POSTS[0].category}
                </span>
                <h2 className="text-3xl md:text-4xl font-black mb-4 dark:text-white font-display">
                  {BLOG_POSTS[0].title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  {BLOG_POSTS[0].description}
                </p>
                <button className="w-fit px-6 py-3 bg-primary hover:bg-yellow-400 text-black font-bold rounded-lg transition-colors">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="aspect-video w-full rounded-xl bg-neutral-200 overflow-hidden mb-4">
                  <img 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    src={post.imageUrl} 
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-neutral-500">•</span>
                    <span className="text-xs text-neutral-500">5 min read</span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors dark:text-white">
                    {post.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                    {post.description}
                  </p>
                  <button className="text-primary font-bold hover:underline flex items-center gap-1 text-sm w-fit group-hover:gap-2 transition-all">
                    Read more <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 md:px-10 lg:px-40 bg-white dark:bg-surface-dark">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-2xl p-8 md:p-12">
            <span className="material-symbols-outlined text-5xl text-primary mb-4">mail</span>
            <h2 className="text-3xl md:text-4xl font-black mb-4 font-display dark:text-white">
              Stay Updated
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Subscribe to our newsletter for the latest tips, resources, and educational insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-surface-dark text-text-dark dark:text-text-light focus:border-primary focus:outline-none"
              />
              <button className="px-6 py-3 bg-primary hover:bg-yellow-400 text-black font-bold rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-center font-display dark:text-white">
            Popular Topics
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Study Techniques',
              'Time Management',
              'Exam Preparation',
              'Online Learning',
              'Math Tips',
              'Essay Writing',
              'Memory Tricks',
              'Motivation',
              'Career Guidance',
              'Test Anxiety'
            ].map((topic) => (
              <button
                key={topic}
                className="px-4 py-2 bg-white dark:bg-surface-dark border border-neutral-200 dark:border-neutral-700 rounded-lg hover:border-primary hover:text-primary transition-all text-sm font-medium dark:text-neutral-300"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
