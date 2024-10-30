// GalleryPage.jsx
// Gallery Page for Tommie Fulp Adventist Academy, showcasing images of school events and activities.
import React from 'react';

function GalleryPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Sample Images - Replace with actual image URLs */}
        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <img src="https://via.placeholder.com/400" alt="Event 1" className="w-full h-48 object-cover" />
        </div>
        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <img src="https://via.placeholder.com/400" alt="Event 2" className="w-full h-48 object-cover" />
        </div>
        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <img src="https://via.placeholder.com/400" alt="Event 3" className="w-full h-48 object-cover" />
        </div>
        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <img src="https://via.placeholder.com/400" alt="Event 4" className="w-full h-48 object-cover" />
        </div>
        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <img src="https://via.placeholder.com/400" alt="Event 5" className="w-full h-48 object-cover" />
        </div>
        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <img src="https://via.placeholder.com/400" alt="Event 6" className="w-full h-48 object-cover" />
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
