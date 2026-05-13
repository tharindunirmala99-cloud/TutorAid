import React from 'react';
import { Tutor } from '../types';

interface TutorModalProps {
  tutor: Tutor | null;
  isOpen: boolean;
  onClose: () => void;
}

const TutorModal: React.FC<TutorModalProps> = ({ tutor, isOpen, onClose }) => {
  if (!isOpen || !tutor) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-surface-dark rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Header with gradient background */}
          <div className={`h-32 bg-gradient-to-r ${tutor.gradient} rounded-t-2xl`}></div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
          >
            <span className="material-symbols-outlined text-white">close</span>
          </button>

          {/* Profile avatar */}
          <div className="absolute -bottom-12 left-6">
            <div className="w-24 h-24 rounded-full border-4 border-white dark:border-surface-dark bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-neutral-600 dark:text-neutral-400">person</span>
            </div>
          </div>
        </div>

        <div className="px-6 pt-16 pb-6">
          {/* Name and rating */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-text-dark dark:text-text-light">{tutor.name}</h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">{tutor.subject}</p>
            </div>
            <div className="flex items-center gap-1 bg-yellow-50 px-3 py-2 rounded-lg text-yellow-700 text-sm font-bold dark:bg-yellow-900/30 dark:text-yellow-400">
              <span className="material-symbols-outlined text-lg text-primary">star</span>
              {tutor.rating}
            </div>
          </div>

          {/* Bio */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-text-dark dark:text-text-light mb-2">About</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{tutor.bio}</p>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-text-dark dark:text-text-light mb-2">Subjects</h3>
            <div className="flex flex-wrap gap-2">
              {tutor.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-neutral-100 rounded-full text-sm text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorModal;