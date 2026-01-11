import React from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Publications from './components/Publications';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      
      <main className="relative z-10 flex flex-col">
        <Hero />
        <Experience />
        <Education />
        <Publications />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
