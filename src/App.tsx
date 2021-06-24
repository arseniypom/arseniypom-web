import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbar, Intro, About, Skills, Portfolio, Contact, Footer } from "./components";

function App() {
  AOS.init();
  
  return <>
    <Navbar />
    <main className="container">
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  </>;
}

export default App;
