// AdmissionPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdmissionPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-navyblue">
      {/* Banner */}
      <section className="bg-gradient-to-r from-skyblue to-navyblue py-16 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white">Admissions</h1>
          <p className="text-lg text-gray-200 mt-4">
            Start your journey with Tommie Fulp Adventist Academy today.
          </p>
        </div>
      </section>

      {/* Admission Process, Requirements, Important Dates */}
      <section className="py-16 container mx-auto px-4 md:px-8 lg:px-16 space-y-12">
        
        {/* Admission Process */}
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-navyblue">Admission Process</h2>
          <p className="mb-6 text-gray-700">
            Our admission process is designed to ensure a smooth transition for new students and families. Please follow these steps to complete your application:
          </p>
          <ul className="list-decimal list-inside space-y-3 text-gray-600 pl-5 border-l-4 border-skyblue">
            <li>Submit an online application form.</li>
            <li>Provide academic records from previous institutions.</li>
            <li>Schedule an interview with our admissions team.</li>
            <li>Receive confirmation and acceptance letter.</li>
          </ul>
        </div>

        {/* Admission Requirements */}
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-navyblue">Admission Requirements</h2>
          <p className="text-gray-700">
            To be eligible for admission, students are required to provide:
          </p>
          <ul className="list-disc list-inside space-y-3 mt-4 pl-5 border-l-4 border-skyblue">
            <li>Completed application form</li>
            <li>Academic transcripts</li>
            <li>Birth certificate or ID</li>
            <li>Immunization records</li>
          </ul>
        </div>

        {/* Important Dates */}
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-navyblue">Important Dates</h2>
          <p>Stay up-to-date with our admission deadlines:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="bg-gradient-to-r from-skyblue to-blue-500 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold">Application Deadline</h3>
              <p className="mt-2">March 31, 2024</p>
            </div>
            <div className="bg-gradient-to-r from-navyblue to-blue-700 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold">Interview Dates</h3>
              <p className="mt-2">April 10 - April 15, 2024</p>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-10">
          <button
            className="bg-gradient-to-r from-navyblue to-skyblue text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition duration-300 ease-in-out"
            onClick={() => navigate('/apply')}
          >
            Apply Online
          </button>
        </div>
      </section>
    </div>
  );
}

export default AdmissionPage;
