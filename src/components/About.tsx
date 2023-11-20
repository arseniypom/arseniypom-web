import React from 'react';
import Heading from './Heading';
import myImg from '../images/about.png';

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about">
        <div className="about_text">
          <Heading text="About Me" />
          <p>Hello! My name is Arseniy Pomazkov and I am a Senior Frontend Developer currently based in London, UK 🇬🇧</p>
          <p>I specialize in building good-looking and reliable front-end (and occasionally back-end) for different services and applications.</p>
        </div>
        <div className="about_img">
          <img src={myImg} alt="me" />
        </div>
      </div>
    </section>
  )
}

export default About;
