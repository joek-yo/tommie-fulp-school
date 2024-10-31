// ContactPage.jsx
// Contact Page for Tommie Fulp Adventist Academy, featuring a contact form, school details, and location map.
import React, { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="bg-white text-navyblue">
      <section className="bg-skyblue py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          <p className="text-lg text-white mt-4">
            We’re here to help! Reach out with any questions or inquiries.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            {submitted && (
              <p className="text-green-600 font-semibold mb-4">Thank you! Your message has been sent.</p>
            )}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-skyblue"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-skyblue"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-skyblue"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-navyblue text-white px-6 py-3 rounded-lg font-semibold hover:bg-skyblue transition"
              >
                Submit
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Contact Information</h2>
            <p className="mb-4">
              For more information or specific inquiries, feel free to reach out to us directly.
            </p>
            <ul className="space-y-4">
              <li><span className="font-medium">Phone:</span> (123) 456-7890</li>
              <li><span className="font-medium">Email:</span> info@tommiefulpacademy.edu</li>
              <li><span className="font-medium">Address:</span> 123 Academy Lane, Springfield</li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Our Location</h2>
          <div className="w-full h-80 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093074!2d144.9559231153169!3d-37.817209979751944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f6d08b0f%3A0x1d1f3b27f87c6a0!2s123%20Academy%20Ln%2C%20Springfield%2C%20IL!5e0!3m2!1sen!2sus!4v1600098839121!5m2!1sen!2sus"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="School Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
