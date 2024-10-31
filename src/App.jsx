// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdmissionPage from './pages/AdmissionPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import ApplicationFormPage from './pages/ApplicationFormPage'; // Import your form page

function App() {
  return (
    <Router>
      <Navbar />  {/* Ensure the Navbar is rendered here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admissions" element={<AdmissionPage />} />
        <Route path="/apply" element={<ApplicationFormPage />} /> {/* Add this line */}
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />  {/* Ensure the Footer is rendered here */}
    </Router>
  );
}

export default App;
