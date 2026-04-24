import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const phone = '94706417886';
const message = encodeURIComponent('Hello! I would like to get in touch.');
const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

const WhatsAppButton: React.FC = () => (
  <a
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      position: 'fixed',
      right: '2rem',
      bottom: '2rem',
      zIndex: 1000,
      background: '#25D366',
      borderRadius: '50%',
      width: '64px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
      color: 'white',
      textDecoration: 'none',
    }}
    title="Chat on WhatsApp"
  >
    <FaWhatsapp size={36} />
  </a>
);

export default WhatsAppButton;