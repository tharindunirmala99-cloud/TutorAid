import React, { useState } from 'react';

interface FormData {
  // Step 1 - Student Details
  studentName: string;
  dob: string;
  studentEmail: string;
  parentName: string;
  parentEmail: string;
  contactNumber: string;
  country: string;
  // Step 2 - Academic Details
  curriculum: string;
  grade: string;
  subjectsNeeded: string;
  examSession: string;
  classType: string;
  // Step 3 - Extra Details
  timeSlots: string;
  howDidYouHear: string;
  notes: string;
}

const BookingForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    studentName: '',
    dob: '',
    studentEmail: '',
    parentName: '',
    parentEmail: '',
    contactNumber: '',
    country: '',
    curriculum: '',
    grade: '',
    subjectsNeeded: '',
    examSession: '',
    classType: '',
    timeSlots: '',
    howDidYouHear: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // Use Vite env variable for Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });

      // no-cors mode means we can't read the response, but request was sent
      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError('Failed to submit form. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const countries = [
    'Sri Lanka', 'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany',
    'France', 'UAE', 'Saudi Arabia', 'India', 'Singapore', 'Malaysia',
    'Other'
  ];

  const curricula = [
    'IB (International Baccalaureate)', 'Cambridge (IGCSE/A-Level)', 'American Curriculum',
    'British Curriculum', 'CBSE', 'ICSE', 'Other'
  ];

  const grades = ['Kindergarten', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 
    'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];

  const examSessions = ['May/June 2026', 'October/November 2026', 'May/June 2027', 'October/November 2027', 'Not Sure'];

  const classTypes = ['One-on-One', 'Small Group (2-4)', 'Large Group (5+)'];

  const timeSlots = [
    'Morning (8AM - 12PM)', 'Afternoon (12PM - 4PM)', 'Evening (4PM - 8PM)', 
    'Night (8PM - 10PM)', 'Weekends Only', 'Flexible'
  ];

  const hearOptions = ['Google Search', 'Social Media', 'Friend/Family', 'Advertisement', 'Blog', 'Other'];

  if (isSubmitted) {
    return (
      <section className="py-16 px-4 md:px-10 lg:px-40 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-2xl mx-auto bg-white dark:bg-surface-dark rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-black mb-4 dark:text-white">Booking Submitted!</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Thank you for your booking request. We will review your details and get back to you within 24-48 hours.
          </p>
          <button 
            onClick={() => { setIsSubmitted(false); setCurrentStep(1); setFormData({
              studentName: '', dob: '', studentEmail: '', parentName: '', parentEmail: '',
              contactNumber: '', country: '', curriculum: '', grade: '', subjectsNeeded: '',
              examSession: '', classType: '', timeSlots: '', howDidYouHear: '', notes: ''
            });}}
            className="px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Submit Another Booking
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 md:px-10 lg:px-40 bg-neutral-50 dark:bg-surface-dark">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black md:text-4xl mb-4 text-center font-display dark:text-white">
          Book a Session
        </h2>
        <p className="text-center text-neutral-600 dark:text-neutral-400 mb-8">
          Fill in the details below and we'll match you with the perfect tutor
        </p>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-10">
          {[1, 2, 3].map((step) => (
            <React.Fragment key={step}>
              <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm
                ${currentStep >= step ? 'bg-primary text-black' : 'bg-neutral-200 text-neutral-500'}`}>
                {currentStep > step ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : step}
              </div>
              {step < 3 && (
                <div className={`w-16 h-1 mx-2 ${currentStep > step ? 'bg-primary' : 'bg-neutral-200'}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-surface-dark rounded-2xl shadow-xl p-8">
          {/* Step 1: Student Details */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-6 dark:text-white">Step 1: Student Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Student Name *</label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white"
                    placeholder="Enter student name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Date of Birth *</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Student Email *</label>
                  <input
                    type="email"
                    name="studentEmail"
                    value={formData.studentEmail}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white"
                    placeholder="student@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Parent Name *</label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white"
                    placeholder="Enter parent name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Parent Email *</label>
                  <input
                    type="email"
                    name="parentEmail"
                    value={formData.parentEmail}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white"
                    placeholder="parent@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Contact Number *</label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2 dark:text-white">Country *</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white"
                  >
                    <option value="">Select Country</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Academic Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-6 dark:text-white">Step 2: Academic Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Curriculum *</label>
                  <select
                    name="curriculum"
                    value={formData.curriculum}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white"
                  >
                    <option value="">Select Curriculum</option>
                    {curricula.map(cur => (
                      <option key={cur} value={cur}>{cur}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Grade *</label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white"
                  >
                    <option value="">Select Grade</option>
                    {grades.map(grade => (
                      <option key={grade} value={grade}>{grade}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2 dark:text-white">Subjects Needed *</label>
                  <input
                    type="text"
                    name="subjectsNeeded"
                    value={formData.subjectsNeeded}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white"
                    placeholder="e.g., Mathematics, Physics, Chemistry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Exam Session *</label>
                  <select
                    name="examSession"
                    value={formData.examSession}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white"
                  >
                    <option value="">Select Exam Session</option>
                    {examSessions.map(session => (
                      <option key={session} value={session}>{session}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Class Type *</label>
                  <select
                    name="classType"
                    value={formData.classType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white"
                  >
                    <option value="">Select Class Type</option>
                    {classTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Extra Details */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-6 dark:text-white">Step 3: Extra Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">Preferred Time Slots *</label>
                  <select
                    name="timeSlots"
                    value={formData.timeSlots}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white"
                  >
                    <option value="">Select Time Slot</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">How did you hear about us? *</label>
                  <select
                    name="howDidYouHear"
                    value={formData.howDidYouHear}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white"
                  >
                    <option value="">Select Option</option>
                    {hearOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2 dark:text-white">Additional Notes</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white resize-none"
                    placeholder="Any additional information you'd like to share..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-700">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="px-6 py-3 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                Previous
              </button>
            ) : (
              <div />
            )}
            
            {currentStep < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Next Step
              </button>
            ) : (
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Submitting...' : 'Submit Booking'}
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

export default BookingForm;