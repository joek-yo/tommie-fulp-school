// HomePage.jsx
// Home Page for Tommie Fulp Adventist Academy, showcasing the school's mission and features.
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

function HomePage() {
  return (
    <div className="bg-white text-navyblue">
      {/* Hero Section */}
      <section className="bg-skyblue h-screen flex items-center">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white">Welcome to Tommie Fulp Adventist Academy</h1>
          <p className="text-xl text-white mt-4">
            Inspiring Excellence in Education and Faith.
          </p>
          <Link to="/about" className="mt-8 inline-block bg-white text-navyblue px-6 py-3 rounded-lg font-semibold hover:bg-skyblue transition">
            Learn More
          </Link>
        </div>
      </section>

      {/* School Overview */}
      <section className="py-16 container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Quality Education</h3>
            <p className="mt-2">
              We provide a robust curriculum designed to foster critical thinking and creativity.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Faith-Based Learning</h3>
            <p className="mt-2">
              Our programs integrate spiritual growth alongside academic achievement.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Community Engagement</h3>
            <p className="mt-2">
              We encourage active participation in the community through various service projects.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-skyblue text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Explore More</h2>
          <div className="flex justify-center space-x-4">
            <Link to="/about" className="bg-white text-skyblue px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
              About Us
            </Link>
            <Link to="/admissions" className="bg-white text-skyblue px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
              Admissions
            </Link>
            <Link to="/contact" className="bg-white text-skyblue px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
