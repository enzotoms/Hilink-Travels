'use client';

import React, { useEffect, useState } from 'react';
import { PiArrowCircleUpFill } from 'react-icons/pi';

export default function BackToTopBtn() {
  const [isActive, setIsActive] = useState(false);

  // Function to handle the scroll event and toggle button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 3000) { // Adjust the scroll threshold as needed
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`${
        !isActive && 'hidden'
      } fixed bg-green-700 hover:bg-accent-hover w-12 h-12 right-16 bottom-11 z-10 cursor-pointer
        flex justify-center items-center text-white border-2 border-green-600 rounded-full shadow-md transition-all duration-300`}
    >
      <PiArrowCircleUpFill size={20} />
    </div>
  );
}
