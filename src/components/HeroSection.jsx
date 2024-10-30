// HeroSection.jsx
// Hero Section component for the homepage, showcasing the school's name and mission.
import React from 'react';

function HeroSection() {
  return (
    <section className="bg-skyblue text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-navyblue mb-4">
          Tommie Fulp Adventist Academy & Junior High School
        </h1>
        <p className="text-lg mb-8">
          Inspiring Minds, Building Character, and Preparing Students for Lifelong Success
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-navyblue text-skyblue py-2 px-4 rounded hover:bg-skyblue hover:text-navyblue transition">
            Admissions
          </button>
          <button className="bg-navyblue text-skyblue py-2 px-4 rounded hover:bg-skyblue hover:text-navyblue transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
