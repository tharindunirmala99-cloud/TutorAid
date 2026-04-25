
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

interface NavbarProps {
  onToggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleDarkMode, isDarkMode }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Subjects', path: '/subjects' },
    { name: 'Tutors', path: '/tutors' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' }
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4f1e6] bg-surface-light/95 backdrop-blur px-6 py-3 shadow-sm md:px-10 dark:border-b-neutral-800 dark:bg-surface-dark/95">
      <Link to="/" className="flex items-center gap-4 text-text-dark dark:text-text-light">
        <img src={logo} alt="TutorAid Logo" className="h-10 w-10 object-contain" />
        <h1 className="text-text-dark dark:text-text-light text-xl font-bold leading-tight tracking-[-0.015em] font-display">
          TutorAid
        </h1>
      </Link>
      
      <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className={`text-sm font-medium leading-normal hover:text-primary transition-colors ${
                location.pathname === item.path 
                  ? 'text-primary font-bold' 
                  : 'text-text-dark dark:text-text-light'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={onToggleDarkMode}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            title="Toggle Theme"
          >
            <span className="material-symbols-outlined text-xl">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-yellow-400 text-black text-sm font-bold leading-normal tracking-[0.015em] transition-all">
            <span className="truncate">Book Free Trial Session</span>
          </button>
        </div>
      </div>

      <div className="flex lg:hidden items-center gap-2">
         {!menuOpen && (
            <button 
              onClick={onToggleDarkMode}
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              title="Toggle Theme"
            >
              <span className="material-symbols-outlined text-xl">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          )}
        {!menuOpen && (
          <button
            className="text-text-dark dark:text-text-light p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        )}
        </div>

{menuOpen && (
  <div
    className="fixed inset-0 z-50 flex flex-col items-center justify-start pt-14 gap-6 lg:hidden transition-all"
    
  >
    <nav className="navbar-mobile-nav flex flex-col items-center gap-4 w-full">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`navbar-mobile-link w-full text-center text-lg font-medium hover:text-primary transition-colors py-2 ${
            location.pathname === item.path
              ? 'text-primary font-bold'
              : 'text-black dark:text-text-light'
          }`}
          onClick={() => setMenuOpen(false)}
        >
          {item.name}
        </Link>
      ))}
    <button
      className="navbar-mobile-menu p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-black dark:text-white"
      onClick={() => { onToggleDarkMode(); setMenuOpen(false); }}
      title="Toggle Theme"
    >
      <span className="material-symbols-outlined text-xl">
        {isDarkMode ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
    </nav>

    <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-yellow-400 text-black text-sm font-bold leading-normal tracking-[0.015em] transition-all mt-4">
      <span className="truncate">Book Free Trial Session</span>
    </button>
    <button
      className="absolute top-6 right-6 text-2xl text-black dark:text-white"
      onClick={() => setMenuOpen(false)}
      aria-label="Close menu"
    >
      <span className="material-symbols-outlined">close</span>
    </button>
  </div>
)}
    </header>
  );
};

export default Navbar;
