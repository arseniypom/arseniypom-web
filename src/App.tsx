import React, { Suspense } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbar, ResumeLink, Intro, About, Skills, Portfolio, Contact} from "./components";

function App() {
  AOS.init();
  
  return <>
          <Navbar />
          <main className="container">
            <ResumeLink />
            <Intro />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
          </main>
        </>
}

export default App;
