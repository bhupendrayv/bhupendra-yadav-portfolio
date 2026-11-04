import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import AIAssistant from './components/AIAssistant';
import { Element } from 'react-scroll';

// Lazy-load below-the-fold sections to maximize initial page loading speed & optimize FCP/LCP
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Certifications = lazy(() => import('./sections/Certifications'));
const Experience = lazy(() => import('./sections/Experience'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));

// Lightweight loading placeholder with smooth pulsing animation
const SectionFallback = () => (
  <div className="w-full py-20 flex justify-center items-center">
    <div className="w-8 h-8 rounded-full border-2 border-sky-400 border-t-transparent animate-spin" />
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 font-sans">
      <Navbar />
      <main>
        <Element name="home">
          <Hero />
        </Element>

        <Suspense fallback={<SectionFallback />}>
          <Element name="about">
            <About />
          </Element>

          <Element name="skills">
            <Skills />
          </Element>

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
        </Suspense>
      </main>

      {/* Interactive AI Portfolio Assistant for Recruiters */}
      <AIAssistant />

      <Footer />
    </div>
  );
}

export default App;
