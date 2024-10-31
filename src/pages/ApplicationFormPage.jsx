// ApplicationFormPage.jsx
import React, { useState } from 'react';

function ApplicationFormPage() {
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    guardianName: '',
    contactEmail: '',
    contactPhone: '',
    previousSchool: '',
    // Add other fields as necessary
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission, e.g., send the data to a backend server
    console.log('Application Submitted:', formData);
    alert("Your application has been submitted successfully!");
  };

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-16">
      <h1 className="text-4xl font-bold text-center mb-8 text-navyblue">Application Form</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-lg p-8 space-y-6">
        <div className="transition-transform duration-300 hover:scale-105">
          <label className="block text-gray-700 font-semibold">Student Name</label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-navyblue"
            required
          />
        </div>

        <div className="transition-transform duration-300 hover:scale-105">
          <label className="block text-gray-700 font-semibold">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-navyblue"
            required
          />
        </div>

        <div className="transition-transform duration-300 hover:scale-105">
          <label className="block text-gray-700 font-semibold">Guardian's Name</label>
          <input
            type="text"
            name="guardianName"
            value={formData.guardianName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-navyblue"
            required
          />
        </div>

        <div className="transition-transform duration-300 hover:scale-105">
          <label className="block text-gray-700 font-semibold">Contact Email</label>
          <input
            type="email"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-navyblue"
            required
          />
        </div>

        <div className="transition-transform duration-300 hover:scale-105">
          <label className="block text-gray-700 font-semibold">Contact Phone</label>
          <input
            type="tel"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-navyblue"
            required
          />
        </div>

        <div className="transition-transform duration-300 hover:scale-105">
          <label className="block text-gray-700 font-semibold">Previous School Attended</label>
          <input
            type="text"
            name="previousSchool"
            value={formData.previousSchool}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-navyblue"
          />
        </div>

        <div className="text-center">
          <button 
            type="submit" 
            className="bg-navyblue text-white px-6 py-3 rounded-lg font-semibold hover:bg-skyblue transition duration-200 transform hover:scale-105 shadow-lg"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}

export default ApplicationFormPage;
