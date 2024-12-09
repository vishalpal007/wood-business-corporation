import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

// Components
import Navbar from './Dashboard/Navbar';
import Footer from './pages/Footer';
import ProductDetails from './pages/ProductDetails';

// App Component
const App = () => {
  return (
    <>
      {/* Meta Header for SEO and Responsiveness */}
      <head>
        <title>Business Corporation</title>
        <meta name="description" content="Book the perfect lawn for events like weddings, parties, or gatherings." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      {/* Routing Setup */}
      <Router>
        {/* Notifications */}
        <Toaster position="top-center" richColors />

        {/* UI Elements */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product/:type" element={<ProductDetails />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </Router>
    </>
  );
};

export default App;
