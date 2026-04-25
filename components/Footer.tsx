
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-dark text-white pt-16 pb-8 px-4 md:px-10 lg:px-40">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-[32px]">school</span>
              <h2 className="text-xl font-bold text-white font-display">TutorAid</h2>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Empowering students worldwide with personalized, high-quality tutoring. Join our community of learners today.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary hover:text-black transition-colors cursor-pointer">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary hover:text-black transition-colors cursor-pointer">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="6" fill="currentColor"/>
                  <path d="M16.98 7.02a2.25 2.25 0 0 0-1.27-1.27c-.88-.35-2.97-.27-4.71-.27s-3.83-.08-4.71.27a2.25 2.25 0 0 0-1.27 1.27c-.35.88-.27 2.97-.27 4.71s-.08 3.83.27 4.71a2.25 2.25 0 0 0 1.27 1.27c.88.35 2.97.27 4.71.27s3.83.08 4.71-.27a2.25 2.25 0 0 0 1.27-1.27c.35-.88.27-2.97.27-4.71s.08-3.83-.27-4.71zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2zm4.2-6.48a.84.84 0 1 1-1.68 0 .84.84 0 0 1 1.68 0z" fill="#fff"/>
                  <circle cx="12" cy="12" r="2.4" fill="#fff"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary hover:text-black transition-colors cursor-pointer">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.37-1.849 3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary hover:text-black transition-colors cursor-pointer">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary hover:text-black transition-colors cursor-pointer">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#tiktok-clip)">
                    <path d="M9.5 2.5C9.5 1.94772 9.94772 1.5 10.5 1.5H13.5C14.0523 1.5 14.5 1.94772 14.5 2.5V15.5C14.5 17.1569 13.1569 18.5 11.5 18.5C9.84315 18.5 8.5 17.1569 8.5 15.5C8.5 13.8431 9.84315 12.5 11.5 12.5C12.0523 12.5 12.5 12.9477 12.5 13.5C12.5 14.0523 12.0523 14.5 11.5 14.5C10.9477 14.5 10.5 14.9477 10.5 15.5C10.5 16.0523 10.9477 16.5 11.5 16.5C12.0523 16.5 12.5 16.0523 12.5 15.5V4.5H11.5V2.5H9.5Z" fill="#fff"/>
                    <path d="M16.5 4.5C16.5 3.94772 16.9477 3.5 17.5 3.5H19.5C20.0523 3.5 20.5 3.94772 20.5 4.5V6.5C20.5 7.05228 20.0523 7.5 19.5 7.5H17.5C16.9477 7.5 16.5 7.05228 16.5 6.5V4.5Z" fill="#fff"/>
                  </g>
                  <defs>
                    <clipPath id="tiktok-clip">
                      <rect width="24" height="24" rx="6" fill="#fff"/>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-sm text-neutral-400">
              <li><Link to="/tutors" className="hover:text-primary transition-colors cursor-pointer">Find a Tutor</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors cursor-pointer">Become a Tutor</Link></li>
              <li><Link to="/subjects" className="hover:text-primary transition-colors cursor-pointer">Online Classes</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors cursor-pointer">Pricing Plans</Link></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white">Support</h3>
            <ul className="flex flex-col gap-2 text-sm text-neutral-400">
              <li><Link to="/about" className="hover:text-primary transition-colors cursor-pointer">Help Center</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors cursor-pointer">Contact Us</Link></li>
              <li><a className="hover:text-primary transition-colors cursor-pointer">Terms of Service</a></li>
              <li><a className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Contact Form */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white">Stay Updated</h3>
            <p className="text-sm text-neutral-400">Subscribe to our newsletter for the latest updates and study tips.</p>
            <div className="flex flex-col gap-2">
              <input 
                className="bg-neutral-800 border-none rounded-lg px-4 py-2 text-sm text-white placeholder-neutral-500 focus:ring-2 focus:ring-primary" 
                placeholder="Your email address" 
                type="email" 
              />
              <button className="btn-primary-full text-sm py-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500">© 2024 TutorAid. All rights reserved.</p>
          <p className="text-xs text-neutral-500 flex items-center gap-1">
            Made with <span className="material-symbols-outlined text-[14px] text-red-500 fill-red-500">favorite</span> for education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
