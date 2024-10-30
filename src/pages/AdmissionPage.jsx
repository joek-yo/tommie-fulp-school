// AdmissionPage.jsx
// Admission Page for Tommie Fulp Adventist Academy, outlining the process, requirements, and deadlines.
import React from 'react';

function AdmissionPage() {
  return (
    <div className="bg-white text-navyblue">
      {/* Banner */}
      <section className="bg-skyblue py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white">Admissions</h1>
          <p className="text-lg text-white mt-4">
            Start your journey with Tommie Fulp Adventist Academy today.
          </p>
        </div>
      </section>

      {/* Admission Process, Requirements, Important Dates */}
      <section className="py-16 container mx-auto px-4 md:px-8 lg:px-16">
        {/* Admission Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Admission Process</h2>
          <p className="mb-4">
            Our admission process is designed to ensure a smooth transition for new students and families. Please follow these steps to complete your application:
          </p>
          <ul className="list-decimal list-inside space-y-2">
            <li>Submit an online application form.</li>
            <li>Provide academic records from previous institutions.</li>
            <li>Schedule an interview with our admissions team.</li>
            <li>Receive confirmation and acceptance letter.</li>
          </ul>
        </div>

        {/* Admission Requirements */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Admission Requirements</h2>
          <p>
            To be eligible for admission, students are required to provide:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Completed application form</li>
            <li>Academic transcripts</li>
            <li>Birth certificate or ID</li>
            <li>Immunization records</li>
          </ul>
        </div>

        {/* Important Dates */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Important Dates</h2>
          <p>Stay up-to-date with our admission deadlines:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div className="bg-skyblue text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Application Deadline</h3>
              <p className="mt-2">March 31, 2024</p>
            </div>
            <div className="bg-navyblue text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Interview Dates</h3>
              <p className="mt-2">April 10 - April 15, 2024</p>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-10">
          <button className="bg-navyblue text-white px-6 py-3 rounded-lg font-semibold hover:bg-skyblue transition">
            Apply Online
          </button>
        </div>
      </section>
    </div>
  );
}

export default AdmissionPage;
