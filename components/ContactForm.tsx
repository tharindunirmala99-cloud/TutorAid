import React, { useState } from 'react';

interface ContactFormData {
  name: string;
  mobile: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_CONTACT_SCRIPT_URL;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  //   e.preventDefault();
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     await fetch(GOOGLE_SCRIPT_URL, {
  //       method: 'POST',
  //      //mode: 'no-cors',
  //       headers: {
  //         'Content-Type': 'text/plain;charset=utf-8',
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     setIsSubmitted(true);
  //   } catch (err) {
  //     setError('Failed to submit. Please try again.');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    setIsLoading(true);
    setError(null);
  
    try {
  
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });
  
      setIsSubmitted(true);
  
    } catch (err) {
  
      setError('Failed to submit. Please try again.');
  
    } finally {
  
      setIsLoading(false);
  
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto bg-white dark:bg-surface-dark rounded-2xl shadow-xl p-8 text-center mt-10">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-black mb-4 dark:text-white">Message Sent!</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          Thank you for contacting us. We will get back to you soon.
        </p>
        <button
          onClick={() => { setIsSubmitted(false); setFormData({ name: '', mobile: '', email: '', message: '' }); }}
          className="px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-white dark:bg-neutral-900 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-2xl h-200 rounded-3xl flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?q=80&w=1170&auto=format&fit=crop" 
                alt="Contact Support" 
                className="w-full h-full object-contain" 
              />
            </div>
          </div>

          {/* Right Column - Form Section */}
          <div className="w-full">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Send us a message</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Your satisfaction is our top priority, and we are committed to providing exceptional service and support
            </p>

            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Phone"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-5 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  placeholder="Message"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>

              {error && (
                <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg">
                  {error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;