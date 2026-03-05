import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Certifications from './sections/Certifications';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 font-sans">
      <Navbar />
      <main>
        <Element name="home">
          <Hero />
        </Element>

        <Element name="about">
          <About />
        </Element>

        <Element name="skills">
          <Skills />
        </Element>

        {/* Certifications can be part of Skills or separate */}
        <Certifications />

        <Element name="experience">
          <Experience />
        </Element>

        <Element name="projects">
          <Projects />
        </Element>


        <Element name="contact">
          <Contact />
        </Element>
      </main >
      <Footer />
    </div >
  );
}

export default App;
