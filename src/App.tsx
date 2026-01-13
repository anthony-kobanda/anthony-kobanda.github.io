import React from 'react';

import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Publications from './components/Publications';
import Section from './components/Section';
import Skills from './components/Skills';



function App() {

  return (

    <div className="gradient-bg min-h-screen text-slate-200 selection:bg-teal-500/30 selection:text-teal-200">

      <Navbar/>
      
      <main className="flex flex-col gap-12 md:gap-20">
        
        <Hero/>
        
        <Section id="about" className="hidden">
           {/* About is integrated into Hero for this layout style, but we keep the ID for smooth scrolling if referenced. */}
        </Section>

        <Section id="experience" title="Work Experience">
          <Experience />
        </Section>

        <Section id="publications" title="Publications">
           <Publications />
        </Section>

        <Section id="education" title="Education">
          <Education />
        </Section>

        <Section id="skills" title="Skills & Interests">
          <Skills />
        </Section>
      
      </main>

      <Footer/>
  
    </div>

  );

}

export default App;