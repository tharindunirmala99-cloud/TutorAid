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
    className="whatsapp-btn"
    title="Chat on WhatsApp"
  >
    <FaWhatsapp size={36} />
  </a>
);

export default WhatsAppButton;