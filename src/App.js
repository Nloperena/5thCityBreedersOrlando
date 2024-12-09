import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AnimatedSection from './components/AnimatedSection';
import AboutUsSection from './components/AboutUsSection';
import ParentsSection from './components/ParentSection';
import ContactUsSection from './components/ContactUsSection';
import AboutCards from './components/AboutCards';
import Footer from './components/Footer';
import PuppyBenefitsSection from './components/PuppyBenefitsSection';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AnimatedSection>
                <AboutUsSection />
              </AnimatedSection>
              <AnimatedSection>
                <ParentsSection />
              </AnimatedSection>
              <AnimatedSection>
             
                <ContactUsSection />
              </AnimatedSection>
            </>
          }
        />

        {/* About Page */}
        <Route
          path="/about"
          element={
            <>
              <AnimatedSection>
                <AboutUsSection />
              </AnimatedSection>
              <AnimatedSection>
                <AboutCards />
              </AnimatedSection>
            </>
          }
        />

        {/* Puppies Page */}
        <Route
          path="/puppies"
          element={
            <>
              <AnimatedSection>
                <ParentsSection />
              </AnimatedSection>
              <AnimatedSection>
                <ContactUsSection />
              </AnimatedSection>
            </>
          }
        />

        {/* Contact Page */}
        <Route
          path="/contact"
          element={
            <>
              <AnimatedSection>
                <ContactUsSection />
              </AnimatedSection>
              <AnimatedSection>
                <AboutCards />
              </AnimatedSection>
            </>
          }
        />

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <div className="p-8 text-center text-2xl text-red-600">
              404 Page Not Found
            </div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
