// Footer.jsx
// Footer component providing contact details, social media links, and navigation for Tommie Fulp Adventist Academy website.
import React from 'react';

function Footer() {
  return (
    <footer className="bg-navyblue text-skyblue py-10">
      <div className="container mx-auto text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p>123 School Lane, City, State, 12345</p>
            <p>Email: info@tommiefulpacademy.edu</p>
            <p>Phone: (123) 456-7890</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul>
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/admissions" className="hover:underline">Admissions</a></li>
              <li><a href="/gallery" className="hover:underline">Gallery</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-white">Facebook</a>
              <a href="#" aria-label="Twitter" className="hover:text-white">Twitter</a>
              <a href="#" aria-label="Instagram" className="hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-sm text-skyblue opacity-75">&copy; {new Date().getFullYear()} Tommie Fulp Adventist Academy & Junior High School. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
