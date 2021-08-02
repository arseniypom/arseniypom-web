import React, { Suspense } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Navbar, ResumeLink, Intro} from "./components";
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  AOS.init();
  
  return <>
          <Navbar />
          <main className="container">
            <ResumeLink />
            <Intro />
            <Suspense fallback={<div />}>
              <About />
              <Skills />
              <Portfolio />
              <Contact />
            </Suspense>
          </main>
        </>
}

export default App;
