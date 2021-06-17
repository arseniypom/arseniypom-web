import React from 'react';
import { Navbar, Intro, Portfolio, Footer } from "./components";

function App() {
  return <>
    <Navbar />
    <main className="container">
      <Intro />
      <Portfolio />
      <Footer />
    </main>
  </>;
}

export default App;
