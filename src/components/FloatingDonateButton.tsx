import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import DonationModal from './DonationModal';

const FloatingDonateButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40 animate-pulse"
        aria-label="Donate to WKK Family"
      >
        <Heart className="w-6 h-6" fill="currentColor" />
      </button>
      
      <DonationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default FloatingDonateButton;