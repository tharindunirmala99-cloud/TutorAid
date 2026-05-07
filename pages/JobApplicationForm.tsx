import React, { useState } from 'react';

interface JobFormData {
  fullName: string;
  email: string;
  mobileNumber: string;
  whatsappNumber: string;
  qualification: string;
  institution: string;
  major: string;
  subjectsApplying: string;
  position: string;
  teachLevels: string;

  // Step 2
  hasExperience: string;
  hasLaptop: string;
  hasInternet: string;
  comfortableWithVideo: string;
  // Files will be sent as base64 strings
  audioIntroBase64: string;
  audioIntroName: string;
  resumeBase64: string;
  resumeName: string;
}

const JobApplicationForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<JobFormData>({
    fullName: '',
    email: '',
    mobileNumber: '',
    whatsappNumber: '',
    qualification: '',
    institution: '',
    major: '',
    subjectsApplying: '',
    position: '',
    teachLevels: '',
    hasExperience: '',
    hasLaptop: '',
    hasInternet: '',
    comfortableWithVideo: '',
    audioIntroBase64: '',
    audioIntroName: '',
    resumeBase64: '',
    resumeName: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Convert file to base64
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldBase64: keyof JobFormData, fieldName: keyof JobFormData) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = (reader.result as string).split(',')[1]; // remove data:*;base64, prefix
      setFormData(prev => ({
        ...prev,
        [fieldBase64]: base64,
        [fieldName]: file.name
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleNext = () => {
    if (currentStep < 2) setCurrentStep(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_JOB_URL; // separate env variable or same if you prefer

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // or 'cors' if you set CORS headers in Apps Script
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });

      // no-cors means you cannot read response – we assume success
      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError('Failed to submit. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-16 px-4 md:px-10 lg:px-40 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-2xl mx-auto bg-white dark:bg-surface-dark rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-black mb-4 dark:text-white">Application Submitted!</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Thank you for applying. We will review your details and get back to you soon.
          </p>
          <button
            onClick={() => { setIsSubmitted(false); setCurrentStep(1); setFormData({
              fullName: '', email: '', mobileNumber: '', whatsappNumber: '', qualification: '',
              institution: '', major: '', subjectsApplying: '', position: '', teachLevels: '',
              hasExperience: '', hasLaptop: '', hasInternet: '', comfortableWithVideo: '',
              audioIntroBase64: '', audioIntroName: '', resumeBase64: '', resumeName: ''
            });}}
            className="px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Submit Another Application
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 md:px-10 lg:px-40 bg-neutral-50 dark:bg-surface-dark">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black md:text-4xl mb-4 text-center font-display dark:text-white">
          Apply to Join Our Tutor Team
        </h2>
        <p className="text-center text-neutral-600 dark:text-neutral-400 mb-8">
          We’re looking for passionate tutors to teach Cambridge & Edexcel curricula
        </p>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-10">
          {[1, 2].map((step) => (
            <React.Fragment key={step}>
              <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm
                ${currentStep >= step ? 'bg-primary text-black' : 'bg-neutral-200 text-neutral-500'}`}>
                {currentStep > step ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : step}
              </div>
              {step < 2 && (
                <div className={`w-16 h-1 mx-2 ${currentStep > step ? 'bg-primary' : 'bg-neutral-200'}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-surface-dark rounded-2xl shadow-xl p-8">
          {/* Step 1: Personal & Academic Info */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-6 dark:text-white">Step 1: Personal & Academic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Full Name *</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white" placeholder="Your email address" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Mobile Number *</label>
                  <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white" placeholder="+94 Your mobile number" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">WhatsApp Number (if different)</label>
                  <input type="tel" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white" placeholder="+94 Your WhatsApp number" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Highest Academic Qualification *</label>
                  <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} required className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white" placeholder="Undergraduate, Graduate, etc." />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Name of Institution *</label>
                  <input type="text" name="institution" value={formData.institution} onChange={handleChange} required className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white" placeholder="Name of institution" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Major/Area of Study *</label>
                  <input type="text" name="major" value={formData.major} onChange={handleChange} required className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white" placeholder="Major/Area of study" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Subject(s) you are applying for *</label>
                  <input type="text" name="subjectsApplying" value={formData.subjectsApplying} onChange={handleChange} required className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white" placeholder="Mathematics, Science, English, etc." />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Applying for the Position of *</label>
                  <select name="position" value={formData.position} onChange={handleChange} required className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white">
                    <option value="">Select</option>
                    <option value="Primary Tutor">Primary Tutor</option>
                    <option value="Lower Secondary Tutor">Lower Secondary Tutor</option>
                    <option value="Both">Both</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">The levels you can teach *</label>
                  <input type="text" name="teachLevels" value={formData.teachLevels} onChange={handleChange} required className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white" placeholder="e.g., Primary, Lower Secondary" />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Experience & Files */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-6 dark:text-white">Step 2: Experience & Attachments</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Do you have teaching or tutoring experience? *</label>
                  <input type="text" name="hasExperience" value={formData.hasExperience} onChange={handleChange} required className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white" placeholder="Yes / No, and details if any" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Do you have access to a working laptop or tablet? *</label>
                  <input type="text" name="hasLaptop" value={formData.hasLaptop} onChange={handleChange} required className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white" placeholder="Yes / No" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Do you have a stable internet connection? *</label>
                  <input type="text" name="hasInternet" value={formData.hasInternet} onChange={handleChange} required className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white" placeholder="Yes / No" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Are you comfortable conducting interactive online classes with video on? *</label>
                  <input type="text" name="comfortableWithVideo" value={formData.comfortableWithVideo} onChange={handleChange} required className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white" placeholder="Yes / No" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Upload a brief audio recording introducing yourself (optional, 2-5 min)</label>
                  <input type="file" accept="audio/*" onChange={(e) => handleFileChange(e, 'audioIntroBase64', 'audioIntroName')} className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg dark:bg-neutral-800 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-primary file:text-black file:font-bold hover:file:bg-primary/90" />
                  {formData.audioIntroName && <p className="text-sm text-neutral-500 mt-1">Selected: {formData.audioIntroName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Attach your resume or CV *</label>
                  <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => handleFileChange(e, 'resumeBase64', 'resumeName')} required className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg dark:bg-neutral-800 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-primary file:text-black file:font-bold hover:file:bg-primary/90" />
                  {formData.resumeName && <p className="text-sm text-neutral-500 mt-1">Selected: {formData.resumeName}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-700">
            {currentStep > 1 ? (
              <button type="button" onClick={handlePrev} className="px-6 py-3 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                Previous
              </button>
            ) : <div />}
            
            {currentStep < 2 ? (
              <button type="button" onClick={handleNext} className="px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-colors">
                Next Step
              </button>
            ) : (
              <button type="submit" disabled={isLoading} className="px-8 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                {isLoading ? 'Submitting...' : 'Submit'}
              </button>
            )}
          </div>
          
          {error && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default JobApplicationForm;