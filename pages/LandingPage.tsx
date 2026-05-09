import React from 'react';
import HeroSection from '../components/HeroSection';
import ServingGlobally from '../components/ServingGlobally';
import WhyChooseUs from '../components/WhyChooseUs';
import SubjectsSection from '../components/SubjectsSection';
import HowItWorks from '../components/HowItWorks';
import BookingForm from '../components/BookingForm';
import ContactForm from '@/components/ContactForm';
import TopRatedTutors from '../components/TopRatedTutors';
import TestimonialsSection from '../components/TestimonialsSection';
import LearningHub from '../components/LearningHub';
import WhatsAppButton from '@/components/WhatsAppBtn';
import { useLocation } from 'react-router-dom'; // 

// import SnowfallEffect from '@/components/Effects/SnowfallEffect';

const LandingPage: React.FC = () => {
  const location = useLocation();
  const bookingFormRef = React.useRef<HTMLDivElement>(null);
  const contactFormRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (location.hash === '#booking-form') {
      const element = document.getElementById('booking-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (location.hash === '#contact-form') {
      const element = document.getElementById('contact-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
      }
  }, [location]);

  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      {/* <SnowfallEffect /> */}
      <WhatsAppButton />
      <ServingGlobally />
      <WhyChooseUs />
      <SubjectsSection />
      <HowItWorks />
      <div id="booking-form" ref={bookingFormRef} className="scroll-mt-28">
          <BookingForm />
      </div>
      <TopRatedTutors />
      <TestimonialsSection />
      {/* <LearningHub /> */}
      <div id="contact-form" ref={contactFormRef} className="scroll-mt-28">
        <ContactForm />
      </div>
    </div>
  );
};

export default LandingPage;
