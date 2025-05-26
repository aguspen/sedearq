'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ImageCarouselOverlayProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export const ImageCarouselOverlay = ({ images, initialIndex, onClose }: ImageCarouselOverlayProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Ensure images array is not empty and initialIndex is valid
  useEffect(() => {
    if (!images || images.length === 0 || initialIndex < 0 || initialIndex >= images.length) {
      // If images are not valid, close the carousel
      onClose();
    } else {
      setCurrentIndex(initialIndex);
    }
  }, [images, initialIndex, onClose]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      nextImage();
    } else if (event.key === 'ArrowLeft') {
      prevImage();
    } else if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]); // Added handleKeyDown to dependencies

  // Prevent scrolling when the carousel is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Do not render if images are not valid
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={onClose}>
      {/* Click on background closes carousel */}
      <div className="relative w-[90vw] h-[90vh] max-w-screen-lg max-h-screen-lg" onClick={(e) => e.stopPropagation()}> {/* Prevent clicks inside carousel from closing overlay */}
        <Image
          src={images[currentIndex]}
          alt={`Project Image ${currentIndex + 1}`}
          fill
          className="object-contain"
        />

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white text-2xl z-50"
          onClick={onClose}
          aria-label="Close carousel"
        >
          &times;
        </button>

        {/* Previous Button */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-50"
          onClick={prevImage}
          aria-label="Previous image"
        >
          &#8249;
        </button>

        {/* Next Button */}
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-50"
          onClick={nextImage}
          aria-label="Next image"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}; 