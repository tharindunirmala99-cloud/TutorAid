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
    <form id="contact-form" onSubmit={handleSubmit} className="max-w-md mx-auto bg-white dark:bg-surface-dark rounded-2xl shadow-xl p-8 mt-10">
      <h2 className="text-2xl font-black mb-6 dark:text-white text-center">Contact Us</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 dark:text-white">Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white"
          placeholder="Your Name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 dark:text-white">Mobile Number *</label>
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white"
          placeholder="e.g., +1 234 567 8900"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 dark:text-white">Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white"
          placeholder="your@email.com"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2 dark:text-white">Message *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-neutral-800 dark:text-white resize-none"
          placeholder="Type your message here..."
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full px-6 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>
      {error && (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {error}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
