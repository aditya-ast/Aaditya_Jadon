import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl mb-16 md:mb-24 lg:mb-36">
      <Navbar />
      <Hero />
      <div className="space-y-4 md:space-y-6 lg:space-y-8">
        <About />
        <Projects />
        <Experiences />
        <Testimonial />
        <Contact />
      </div>
      <Footer/>
    </div>
  );
};

export default App;
