import React from 'react';
import 'aos/dist/aos.css';
import { Navbar, Intro, About, Skills, Portfolio, Footer } from "./components";

function App() {
  return <>
    <Navbar />
    <main className="container">
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </main>
  </>;
}

export default App;
