import React from 'react';
import { Navbar, Intro, About, Portfolio, Footer } from "./components";

function App() {
  return <>
    <Navbar />
    <main className="container">
      <Intro />
      <About />
      <Portfolio />
      <Footer />
    </main>
  </>;
}

export default App;
