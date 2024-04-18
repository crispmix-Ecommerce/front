'use client';
import React, { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

const images = [
  '/banner-1.jpg',
  '/banner-2.jpg',
  '/banner-1.jpg',
  '/banner-2.jpg',
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1,
      );
      setIsTransitioning(false);
    }, 200);
  };

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <div className="relative">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={`w-full transition-opacity ${
          isTransitioning ? 'opacity-75' : 'opacity-100'
        }`}
        style={{ transitionDuration: '0.5s' }}
      />
      <button
        onClick={prevSlide}
        className="absolute opacity-35  top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        <ArrowLeftIcon className="h-6 w-6 text-gray-700" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute opacity-35 top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        <ArrowRightIcon className="h-6 w-6 text-gray-700" />
      </button>
    </div>
  );
}
