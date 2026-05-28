
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

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
            
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-sm text-neutral-400">
              <li><Link to="/tutors" className="hover:text-primary transition-colors cursor-pointer">Find a Tutor</Link></li>
              <li><Link to="/tutors#join-team" className="hover:text-primary transition-colors cursor-pointer">Become a Tutor</Link></li>
              <li><Link to="/subjects" className="hover:text-primary transition-colors cursor-pointer">Online Classes</Link></li>
              {/* <li><Link to="/pricing" className="hover:text-primary transition-colors cursor-pointer">Pricing Plans</Link></li> */}
            </ul>
          </div>
          
          {/* Support */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white">Support</h3>
            <ul className="flex flex-col gap-2 text-sm text-neutral-400">
              {/* <li><Link to="/about" className="hover:text-primary transition-colors cursor-pointer">Help Center</Link></li> */}
              <li><Link to="/#contact-form" className="hover:text-primary transition-colors cursor-pointer">Contact Us</Link></li>
              <li><a className="hover:text-primary transition-colors cursor-pointer">Terms of Service</a></li>
              <li><a className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Contact Form */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white">Stay Updated</h3>
            <p className="text-sm text-neutral-400">Follow us on our social media channels.</p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.facebook.com/p/TutorAid-61579487302056/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center transition-colors cursor-pointer"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/tutor_aid_?igsh=MWV2MjF2c2xkdm5qcQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center transition-colors cursor-pointer"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/tutor-aid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center transition-colors cursor-pointer"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
            {/* <div className="flex flex-col gap-2">
              <input 
                className="bg-neutral-800 border-none rounded-lg px-4 py-2 text-sm text-white placeholder-neutral-500 focus:ring-2 focus:ring-primary" 
                placeholder="Your email address" 
                type="email" 
              />
              <button className="btn-primary-full text-sm py-2">
                Subscribe
              </button>
            </div> */}
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500">© 2026 TutorAid. All rights reserved.</p>
          <p className="text-xs text-neutral-500 flex items-center gap-1">
            {/* Made with <span className="material-symbols-outlined text-[14px] text-red-500 fill-red-500">favorite</span> for education. */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
