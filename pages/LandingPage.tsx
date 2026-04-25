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
// import SnowfallEffect from '@/components/Effects/SnowfallEffect';

const LandingPage: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      {/* <SnowfallEffect /> */}
      <WhatsAppButton />
      <ServingGlobally />
      <WhyChooseUs />
      <SubjectsSection />
      <HowItWorks />
      <BookingForm />
      <TopRatedTutors />
      <TestimonialsSection />
      <LearningHub />
      <section id="contact-form" className="scroll-mt-28">
        <ContactForm />
      </section>
    </div>
  );
};

export default LandingPage;
