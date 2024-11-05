import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import PuppiesList from './components/PuppiesList';
import PuppyAdoptionSection from './components/PuppyAdoptionSection';
import MeetTheParentsSection from './components/MeetTheParentsSection';
import ContactUsSection from './components/ContactUsSection';
import Footer from './components/Footer';
import PuppyFormSection from './components/PuppyFormSection';
import AboutCards from './components/AboutCards';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutUsSection />
                <MeetTheParentsSection />
                <PuppiesList />
                <ContactUsSection />
              </>
            }
          />

          {/* About Page */}
          <Route path="/about" element={<>
            <AboutUsSection />
            <AboutCards />
          </>} />

          {/* Puppies Page */}
          <Route
            path="/puppies"
            element={
              <>
                <MeetTheParentsSection />
                <PuppiesList />
                <ContactUsSection />
              </>
            }
          />

          {/* Contact Page */}
          <Route path="/contact" element={
            <>
            <MeetTheParentsSection />
            <ContactUsSection />
            </> 
       } />

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
        <Footer />
      </div>
    </Router>
  );
}

export default App;


