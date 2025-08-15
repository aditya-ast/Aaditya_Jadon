import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeout(() => setLoading(false), 3000); // 1s gap after loading animation
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

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
