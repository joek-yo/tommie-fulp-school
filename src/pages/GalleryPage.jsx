// GalleryPage.jsx
// Enhanced Gallery Page with interactive hover effects, improved spacing, and modern shadow styling.

import React from 'react';

function GalleryPage() {
  const images = [
    { src: 'https://via.placeholder.com/400', alt: 'Event 1' },
    { src: 'https://via.placeholder.com/400', alt: 'Event 2' },
    { src: 'https://via.placeholder.com/400', alt: 'Event 3' },
    { src: 'https://via.placeholder.com/400', alt: 'Event 4' },
    { src: 'https://via.placeholder.com/400', alt: 'Event 5' },
    { src: 'https://via.placeholder.com/400', alt: 'Event 6' },
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-navyblue">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 bg-gray-200">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover border-4 border-transparent hover:border-gradient-to-r hover:from-skyblue hover:to-blue-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
